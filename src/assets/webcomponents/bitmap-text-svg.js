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
    svg {
      display: block;
    }
  </style>
  <span class="fallback">
    <slot></slot>
  </span>
`;

class BitmapText extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'scale', 'color', 'spacing', 'font-url', 'chars-per-row', 'invert'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
    // Font specifications
    this.charWidth = 8;
    this.charHeight = 16;
    this.chars = null;
    this.loading = false;

    // Create offscreen canvas for PNG processing
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });

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

  parseShortcodes(text) {
    // First, normalize the text by replacing CRLF with just LF
    text = text.replace(/\r\n/g, '\n');
    
    // Split text into lines, removing empty lines
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    
    // Process each line separately
    const processedLines = lines.map(line => {
      const chars = [];
      const shortcodeRegex = /\[([^\]]+)\]/g;
      let match;
      let lastIndex = 0;

      while ((match = shortcodeRegex.exec(line)) !== null) {
        // Add any text before the shortcode
        if (match.index > lastIndex) {
          const textBefore = line.slice(lastIndex, match.index);
          chars.push(...textBefore.split(''));
        }

        const code = match[1];
        let charCode;

        if (/^\d+$/.test(code)) {
          // Decimal character code
          charCode = parseInt(code, 10);
        } else {
          // Named control character
          charCode = this.controlChars[code.toUpperCase()];
        }

        if (charCode !== undefined && charCode >= 0 && charCode <= 255) {
          chars.push(String.fromCharCode(charCode));
        } else {
          // If invalid, include the original shortcode
          chars.push(...match[0].split(''));
        }

        lastIndex = shortcodeRegex.lastIndex;
      }

      // Add any remaining text after the last shortcode
      if (lastIndex < line.length) {
        chars.push(...line.slice(lastIndex).split(''));
      }

      return chars;
    });

    return processedLines;
  }

  async connectedCallback() {
    if (this.getAttribute('font-url')) {
      await this.loadFont();
    }
  }

  async loadFont() {
    const url = this.getAttribute('font-url');
    if (!url || this.loading) return;

    this.loading = true;
    this.updateLoadingState();

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      this.chars = await this.processImage(img);
      this.loading = false;
      this.render();
    } catch (error) {
      console.error('Error loading font:', error);
      this.loading = false;
      this.updateLoadingState();
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
    this.canvas.width = img.width;
    this.canvas.height = img.height;
    this.ctx.drawImage(img, 0, 0);
    
    const imageData = this.ctx.getImageData(0, 0, img.width, img.height);
    const { data } = imageData;
    
    const charsPerRow = parseInt(this.getAttribute('chars-per-row')) || 16;
    const chars = new Array(256);
    const shouldInvert = this.getAttribute('invert') === 'true';
    
    for (let charIndex = 0; charIndex < 256; charIndex++) {
      const charRow = Math.floor(charIndex / charsPerRow);
      const charCol = charIndex % charsPerRow;
      const charX = charCol * this.charWidth;
      const charY = charRow * this.charHeight;
      
      // Create a 2D array to store pixel data
      const pixels = Array(this.charHeight).fill().map(() => 
        Array(this.charWidth).fill(false)
      );
      
      // First pass: collect pixel data
      for (let y = 0; y < this.charHeight; y++) {
        for (let x = 0; x < this.charWidth; x++) {
          const pixelIndex = ((charY + y) * img.width + (charX + x)) * 4;
          pixels[y][x] = shouldInvert ? 
            (data[pixelIndex] >= 128) : 
            (data[pixelIndex] < 128);
        }
      }
      
      chars[charIndex] = this.generatePixelPath(pixels);
    }
    
    return chars;
  }
  
  generatePixelPath(pixels) {
    const height = pixels.length;
    const width = pixels[0].length;
    
    // Find first pixel
    let startY = -1, startX = -1;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (pixels[y][x]) {
          startY = y;
          startX = x;
          break;
        }
      }
      if (startY !== -1) break;
    }
    
    if (startY === -1) return ''; // No pixels found
    
    let path = [`M${startX},${startY}`];
    let visited = new Set();
    
    // Process each row
    for (let y = 0; y < height; y++) {
      let left = -1;
      let right = -1;
      
      // Find left and right edges for this row
      for (let x = 0; x < width; x++) {
        if (pixels[y][x]) {
          if (left === -1) left = x;
          right = x;
        }
      }
      
      if (left === -1) continue; // No pixels in this row
      
      // Add horizontal paths for this row
      let key = `${y},${left}`;
      if (!visited.has(key)) {
        path.push(`l${right - left},0`);
        for (let x = left; x <= right; x++) {
          visited.add(`${y},${x}`);
        }
      }
      
      // Connect to next row if it exists
      if (y < height - 1 && pixels[y + 1][right]) {
        path.push(`l0,1`);
        visited.add(`${y + 1},${right}`);
      }
    }
    
    // Return to start
    path.push('Z');
    
    return path.join('');
  }
  
  createSVG() {
    const inputText = this.getAttribute('text') || this.textContent || '';
    const processedLines = this.parseShortcodes(inputText);
    const scale = parseInt(this.getAttribute('scale')) || 1;
    const color = this.getAttribute('color') || 'black';
  
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const width = Math.max(...processedLines.map(line => line.length * this.charWidth));
    const height = processedLines.length * this.charHeight;
    
    svg.setAttribute('width', width * scale);
    svg.setAttribute('height', height * scale);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('aria-label', inputText);
  
    processedLines.forEach((chars, lineIndex) => {
      const lineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      lineGroup.setAttribute('transform', 
        `translate(0, ${lineIndex * this.charHeight})`);
  
      chars.forEach((char, charIndex) => {
        const charCode = char.charCodeAt(0);
        const pathData = this.chars[charCode];
        
        if (!pathData) return;
  
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('transform', 
          `translate(${charIndex * this.charWidth}, 0)`);
        path.setAttribute('fill', color);
        
        lineGroup.appendChild(path);
      });
  
      svg.appendChild(lineGroup);
    });
  
    return svg;
  }
  

  render() {
    if (!this.chars) return;

    const fallback = this.shadowRoot.querySelector('.fallback');
    if (fallback) {
      this.shadowRoot.removeChild(fallback);
    }
    
    const oldSvg = this.shadowRoot.querySelector('svg');
    if (oldSvg) {
      this.shadowRoot.removeChild(oldSvg);
    }
    
    const svg = this.createSVG();
    this.shadowRoot.appendChild(svg);
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
}

customElements.define('bitmap-text', BitmapText);