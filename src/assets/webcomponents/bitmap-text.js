const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: inline-block;
    }
    .fallback {
      font-family: monospace;
    }
    .loading {
      color: #666;
      font-style: italic;
    }
    canvas {
      display: block;
    }
  </style>
  <span class="fallback">
    <slot></slot>
  </span>
`;

class BitmapText extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'scale', 'color', 'spacing', 'font-url', 'chars-per-row', 'invert', 'sanitize', 'canvasWidth'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Create a container div to hold both fallback and canvas
    this.container = document.createElement('div');
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(this.container);
    
    // Font specifications
    this.charWidth = 8;
    this.charHeight = 16;
    this.chars = null;
    this.loading = false;
    
    // Get device pixel ratio
    this.pixelRatio = window.devicePixelRatio || 1;

    this.ascii_code_mapping = {
      0x0D: 0x20,  // CR -> SP
      0x1A: 0x10,  // SUB -> DLE
      0x1B: 0x11   // ESC -> DC1
    };

    // Create offscreen canvas for PNG processing
    this.fontCanvas = document.createElement('canvas');
    this.fontCtx = this.fontCanvas.getContext('2d', { willReadFrequently: true });

    // Create display canvas
    this.displayCanvas = document.createElement('canvas');
    this.displayCtx = this.displayCanvas.getContext('2d');
    this.container.appendChild(this.displayCanvas);

    // Control character mappings
    this.controlChars = {
      'NUL': 0, 'SOH': 1, 'STX': 2, 'ETX': 3, 'EOT': 4, 'ENQ': 5, 'ACK': 6, 'BEL': 7,
      'BS': 8, 'TAB': 9, 'LF': 10, 'VT': 11, 'FF': 12, 'CR': 13, 'SO': 14, 'SI': 15,
      'DLE': 16, 'DC1': 17, 'DC2': 18, 'DC3': 19, 'DC4': 20, 'NAK': 21, 'SYN': 22, 'ETB': 23,
      'CAN': 24, 'EM': 25, 'SUB': 26, 'ESC': 27, 'FS': 28, 'GS': 29, 'RS': 30, 'US': 31,
      'DEL': 127,
      // Common aliases
      'NULL': 0,
      'START OF HEADING': 1,
      'START OF TEXT': 2,
      'END OF TEXT': 3,
      'END OF TRANSMISSION': 4,
      'ENQUIRY': 5,
      'ACKNOWLEDGE': 6,
      'BELL': 7,
      'BACKSPACE': 8,
      'HORIZONTAL TAB': 9,
      'HORIZONTAL TABULATION': 9,
      'TAB': 9,
      'LINE FEED': 10,
      'VERTICAL TAB': 11,
      'FORM FEED': 12,
      'CARRIAGE RETURN': 13,
      'SHIFT OUT': 14,
      'SHIFT IN': 15,
      'DATA LINK ESCAPE': 16,
      'DEVICE CONTROL 1': 17,
      'DEVICE CONTROL 2': 18,
      'DEVICE CONTROL 3': 19,
      'DEVICE CONTROL 4': 20,
      'DEVICE CONTROL ONE': 17,
      'DEVICE CONTROL TWO': 18,
      'DEVICE CONTROL THREE': 19,
      'DEVICE CONTROL FOUR': 20,
      'NEGATIVE ACKNOWLEDGE': 21,
      'SYNCHRONOUS IDLE': 22,
      'END OF TRANS. BLOCK': 23,
      'END OF TRANSMISSION BLOCK': 23,
      'CANCEL': 24,
      'END OF MEDIUM': 25,
      'SUBSTITUTE': 26,
      'ESCAPE': 27,
      'FILE SEPARATOR': 28,
      'GROUP SEPARATOR': 29,
      'RECORD SEPARATOR': 30,
      'UNIT SEPARATOR': 31,
      'DELETE': 127
    };
  }

  sanitizeChar(char) {
    const charCode = char.charCodeAt(0);
    if( this.getAttribute('sanitize') === 'true' ) {
      return String.fromCharCode(this.ascii_code_mapping[charCode] || charCode);
    } else {
      return String.fromCharCode(charCode);
    }
  }

  parseShortcodes(text) {
    // First, normalize the text by replacing CRLF with just LF
    text = text.replace(/\r\n/g, '\n');
    
    const chars = [];
    
    // Modified regex to match content between [ and ] across multiple lines
    const shortcodeRegex = /\[([\s\S]*?)\]/g;
    let match;
    let lastIndex = 0;
    
    while ((match = shortcodeRegex.exec(text)) !== null) {
      // Add any text before the shortcode
      if (match.index > lastIndex) {
        const textBefore = text.slice(lastIndex, match.index);
        chars.push(...textBefore.split('').map(char => this.sanitizeChar(char)));
      }
      
      // Process the content between brackets
      const content = match[1]
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
      
      // Split by commas but handle cases where there might not be commas
      const values = content.includes(',') ? 
        content.split(',') : 
        content.split(/\s+/);
      
      for (const val of values) {
        const trimmedVal = val.trim();
        if (!trimmedVal) continue;
        
        let charCode;
        if (trimmedVal.toLowerCase().startsWith('0x')) {
          // Handle hex value
          charCode = parseInt(trimmedVal.slice(2), 16);
        } else if (/^\d+$/.test(trimmedVal)) {
          // Handle decimal value
          charCode = parseInt(trimmedVal, 10);
        } else {
          // Handle named control character
          charCode = this.controlChars[trimmedVal.toUpperCase()];
        }
        
        if (charCode !== undefined && charCode >= 0 && charCode <= 255) {
          let mappedChar = 0;
          if( this.getAttribute('sanitize') === 'true' ) {
            mappedChar = String.fromCharCode(this.ascii_code_mapping[charCode] || charCode);
          } else {
            mappedChar = String.fromCharCode(charCode);
          }
          chars.push(mappedChar);
        }
      }
      
      lastIndex = shortcodeRegex.lastIndex;
    }
    
    // Add any remaining text after the last shortcode
    if (lastIndex < text.length) {
      chars.push(...text.slice(lastIndex).split('').map(char => this.sanitizeChar(char)));
    }
    
    // Modified line breaking logic
    const lines = [];
    let currentLine = [];
    const maxChars = parseInt(this.getAttribute('canvasWidth')) || 0;
    
    for (const char of chars) {
      if (char === '\n') {
        if (currentLine.length > 0) {
          lines.push(currentLine);
          currentLine = [];
        }
      } else {
        if (maxChars > 0 && currentLine.length >= maxChars) {
          // Look back for last space to do word wrapping
          let lastSpaceIndex = currentLine.length - 1;
          while (lastSpaceIndex > 0 && currentLine[lastSpaceIndex] !== ' ') {
            lastSpaceIndex--;
          }

          if (lastSpaceIndex > 0) {
            // Word wrap at last space
            const wrappedChars = currentLine.splice(lastSpaceIndex + 1);
            lines.push(currentLine);
            currentLine = wrappedChars;
          } else {
            // No space found, do hard break
            lines.push(currentLine);
            currentLine = [];
          }
        }
        currentLine.push(char);
      }
    }
    
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    
    return lines;
  }

  async connectedCallback() {
    if (this.getAttribute('font-url')) {
      await this.loadFont();
    }
  }

  async loadFont() {
    try {
      const url = this.getAttribute('font-url');
      if (!url) {
        throw new Error('No font URL provided');
      }
      if (this.loading) return;
      
      this.loading = true;
      this.updateLoadingState();

      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = (e) => reject(new Error(`Failed to load image: ${e.message}`));
        img.src = url;
      });

      this.chars = await this.processImage(img);
      this.loading = false;
      this.render();
    } catch (error) {
      console.error('Error loading font:', error);
      this.loading = false;
      this.updateLoadingState();
      this.dispatchEvent(new CustomEvent('font-error', { detail: error }));
    }
  }

  updateLoadingState() {
    const fallback = this.shadowRoot.querySelector('.fallback');
    if (this.loading) {
      fallback.classList.add('loading');
    } else {
      fallback.classList.remove('loading');
    }
  }

  processImage(img) {
    this.fontCanvas.width = img.width;
    this.fontCanvas.height = img.height;
    this.fontCtx.drawImage(img, 0, 0);
    
    const charsPerRow = parseInt(this.getAttribute('chars-per-row')) || 16;
    const chars = new Array(256);
    const shouldInvert = this.getAttribute('invert') === 'true';

    // Create individual character data
    for (let charIndex = 0; charIndex < 256; charIndex++) {
      const charRow = Math.floor(charIndex / charsPerRow);
      const charCol = charIndex % charsPerRow;
      const charX = charCol * this.charWidth;
      const charY = charRow * this.charHeight;
      
      // Create character canvas
      const charCanvas = document.createElement('canvas');
      charCanvas.width = this.charWidth;
      charCanvas.height = this.charHeight;
      const charCtx = charCanvas.getContext('2d');
      
      // Extract character data
      const charImageData = this.fontCtx.getImageData(
        charX, charY, this.charWidth, this.charHeight
      );
      
      // Apply inversion if needed
      if (shouldInvert) {
        for (let i = 0; i < charImageData.data.length; i += 4) {
          charImageData.data[i] = 255 - charImageData.data[i];
          charImageData.data[i + 1] = 255 - charImageData.data[i + 1];
          charImageData.data[i + 2] = 255 - charImageData.data[i + 2];
        }
      }
      
      charCtx.putImageData(charImageData, 0, 0);
      chars[charIndex] = charCanvas;
    }
    
    return chars;
  }

  render() {
    if (this.renderTimeout) {
      clearTimeout(this.renderTimeout);
    }
    
    this.renderTimeout = setTimeout(() => {
      if (!this.chars) return;

      // Check for pre tag content first
      const preTag = this.querySelector('pre');
      const inputText = this.getAttribute('text') || 
                       (preTag ? preTag.textContent : this.textContent) || 
                       '';
      const processedLines = this.parseShortcodes(inputText);
      const scale = parseInt(this.getAttribute('scale')) || 1;
      const color = this.getAttribute('color') || 'black';
      const maxChars = parseInt(this.getAttribute('canvasWidth')) || 0;
      
      // Calculate dimensions
      const width = maxChars > 0 ? 
        maxChars * this.charWidth : 
        Math.max(...processedLines.map(line => line.length * this.charWidth));
      const height = processedLines.length * this.charHeight;
      
      // Set canvas size accounting for device pixel ratio
      const canvasWidth = width * scale;
      const canvasHeight = height * scale;
      this.displayCanvas.width = canvasWidth * this.pixelRatio;
      this.displayCanvas.height = canvasHeight * this.pixelRatio;
      
      // Set display size
      this.displayCanvas.style.width = `${canvasWidth}px`;
      this.displayCanvas.style.height = `${canvasHeight}px`;
      
      // Clear canvas
      this.displayCtx.clearRect(0, 0, this.displayCanvas.width, this.displayCanvas.height);
      
      // Set color
      this.displayCtx.fillStyle = color;
      this.displayCtx.globalCompositeOperation = 'source-over';
      
      // Disable image smoothing for crisp pixels
      this.displayCtx.imageSmoothingEnabled = false;
      
      // Apply scaling with pixel ratio
      this.displayCtx.scale(scale * this.pixelRatio, scale * this.pixelRatio);
      
      // Draw characters
      processedLines.forEach((chars, lineIndex) => {
        chars.forEach((char, charIndex) => {
          const charCode = char.charCodeAt(0);
          const charCanvas = this.chars[charCode];
          
          if (charCanvas) {
            this.displayCtx.drawImage(
              charCanvas,
              charIndex * this.charWidth,
              lineIndex * this.charHeight
            );
          }
        });
      });
      
      // Reset scale
      this.displayCtx.setTransform(1, 0, 0, 1, 0, 0);
      
      // Remove fallback if it exists
      const fallback = this.shadowRoot.querySelector('.fallback');
      if (fallback) {
        this.shadowRoot.removeChild(fallback);
      }
    }, 16);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'font-url') {
      this.loadFont();
    } else if (name === 'invert' && this.chars) {
      this.loadFont();
    } else if (this.chars) {
      this.render();
    }
  }

  disconnectedCallback() {
    // Clean up canvases and contexts
    this.fontCanvas = null;
    this.fontCtx = null;
    this.displayCanvas = null;
    this.displayCtx = null;
    this.chars = null;
    
    if (this.renderTimeout) {
      clearTimeout(this.renderTimeout);
    }
  }
}

customElements.define('bitmap-text', BitmapText);