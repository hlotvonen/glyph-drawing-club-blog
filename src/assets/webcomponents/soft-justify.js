/*
Core algorithm for soft-justify
*/

class SoftJustify {
  constructor(measureText) {
    this.measure = measureText;
    this.measureCache = new Map();
  }

  justifyText(text, { maxWidth, minSpace, maxSpace, normalSpace }) {
    const words = text.trim().split(/\s+/);
    const lines = this.breakLines(words, maxWidth, minSpace);
    
    return lines.map((words, i) => {
      const isLast = i === lines.length - 1;
      const canJustify = words.length > 1 && !isLast && 
        this.totalWidth(words) + (words.length - 1) * maxSpace >= maxWidth;
      
      return {
        words,
        spacing: canJustify ? this.calcSpacing(words, maxWidth, minSpace, maxSpace) : normalSpace,
        justified: canJustify
      };
    });
  }

  breakLines(words, maxWidth, minSpace) {
    const lines = [];
    let line = [];
    
    for (const word of words) {
      if (line.length && !this.fits(line, word, maxWidth, minSpace)) {
        lines.push(line);
        line = [];
      }
      line.push(word);
    }
    
    if (line.length) lines.push(line);
    return lines;
  }

  fits(line, word, maxWidth, minSpace) {
    return this.totalWidth(line) + this.measureTextCached(word) + line.length * minSpace <= maxWidth;
  }

  calcSpacing(words, maxWidth, minSpace, maxSpace) {
    const gaps = words.length - 1;
    if (!gaps) return minSpace;
    
    const spacing = (maxWidth - this.totalWidth(words)) / gaps;
    return Math.min(Math.max(spacing, minSpace), maxSpace);
  }

  totalWidth(words) {
    return words.reduce((sum, word) => sum + this.measureTextCached(word), 0);
  }

  measureTextCached(text) {
    return this.measureCache.get(text) ?? 
      (this.measureCache.set(text, this.measure(text)), this.measureCache.get(text));
  }
}

/*
SVG renderer for the line
*/

class SVGTextRenderer {
  constructor(svgElement, fontSize = 16) {
    this.svg = svgElement;
    this.fontSize = fontSize;
    this.measureEl = this.createMeasurementElement();
  }

  createMeasurementElement() {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('font-size', this.fontSize);
    el.style.visibility = 'hidden';
    el.style.position = 'absolute';
    this.svg.appendChild(el);
    return el;
  }

  updateSVGDimensions(width, height) {
    // Add some padding
    const totalWidth = Math.max(width, 200);
    const totalHeight = Math.max(height, 50);
    
    this.svg.setAttribute('width', totalWidth);
    this.svg.setAttribute('height', totalHeight);
    this.svg.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`);
  }

  /* Measure space width by comparing lengts of "a a" and "aa". Feels hacky, is there a better way...? */
  measureSpace() {
    this.measureEl.textContent = 'a a';
    const withSpace = this.measureEl.getComputedTextLength();
    this.measureEl.textContent = 'aa';
    const withoutSpace = this.measureEl.getComputedTextLength();
    return withSpace - withoutSpace;
  }

  measureText(str) {
    this.measureEl.textContent = str;
    const width = this.measureEl.getComputedTextLength();
    return width > 0 ? width : this.measureSpace();
  }

  createTextElement(text, x, y) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    el.setAttribute('x', x);
    el.setAttribute('y', y);
    el.textContent = text;
    return el;
  }

  renderLine(fragment, lineData, y, justifier) {
    const { words, spacing } = lineData;
    let x = 0;

    words.forEach((word, index) => {
      fragment.appendChild(this.createTextElement(word, x, y));
      if (index < words.length - 1) {
        x += justifier.measureTextCached(word) + spacing;
      }
    });

    return x + justifier.measureTextCached(words[words.length - 1]);
  }

  render(justifiedLines, lineHeight, justifier) {
    this.clearSVGContent();

    const fragment = document.createDocumentFragment();
    let y = this.fontSize;
    let maxWidth = 0;

    justifiedLines.forEach(lineData => {
      const lineWidth = this.renderLine(fragment, lineData, y, justifier);
      maxWidth = Math.max(maxWidth, lineWidth);
      y += lineHeight;
    });

    this.updateSVGDimensions(maxWidth, y);

    this.svg.appendChild(fragment);
  }

  clearSVGContent() {
    while (this.svg.childNodes.length > 1) {
      this.svg.removeChild(this.svg.lastChild);
    }
  }
}

/* 
 Web component specific stuff
*/

class SoftJustifyElement extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'width', 'min-space', 'max-space', 'show-controls', 'show-edge', 'font-size'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.justifyTimeout = null;
  }

  connectedCallback() {
    this.render();
    this.setupComponents();
    this.setupEventListeners();
    this.justify();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && this.shadowRoot) {
      if (name === 'show-edge') {
        const svg = this.shadowRoot.getElementById('svg');
        if (svg) {
          svg.style.borderRight = newValue === 'true' ? '1px solid var(--color-4)' : 'none';
        }
      } else {
        this.updateFromAttributes();
        this.justify();
      }
    }
  }

  render() {
    const showControls = this.getAttribute('show-controls') === 'true';
    const showEdge = this.getAttribute('show-edge') === 'true';

    this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                          
                        }
                        .controls {
                            display: ${showControls ? 'block' : 'none'};
                            padding:0.5rem 0;
                        }
                        textarea {
                            width: 100%;
                        }
                        svg {
                            border-right: ${showEdge ? '1px solid var(--color-4)' : 'none'};
                            overflow:auto;
                            max-width:100%;
                        }
                        svg text {
                            fill:var(--color-7);
                        }
                    </style>
                    
                    <div class="controls">
                        <div>
                            <label>Input text:</label>
                            <textarea id="text">${this.getText() || 'Enter text...'}</textarea>
                        </div>
                        <div>
                            <label>Line width:</label>
                            <input type="range" id="width" min="200" max="1000" value="${this.getWidth()}">
                            <span id="widthDisplay"></span>
                        </div>
                        <div>
                            <label>Min space:</label>
                            <input type="range" id="minSpace" min="-100" max="0" value="${this.getMinSpace()}">
                            <span id="minSpaceDisplay"></span>
                        </div>
                        <div>
                            <label>Max space:</label>
                            <input type="range" id="maxSpace" min="0" max="400" value="${this.getMaxSpace()}">
                            <span id="maxSpaceDisplay"></span>
                        </div>
                        <div>
                            <label>Show edge:</label>
                            <input type="checkbox" id="showEdge" ${this.getShowEdge() ? 'checked' : ''}>
                        </div>
                    </div>
                    
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" font-size="16"></svg>
                `;
  }

  setupComponents() {
    this.elements = {
      text: this.shadowRoot.getElementById('text'),
      width: this.shadowRoot.getElementById('width'),
      widthDisplay: this.shadowRoot.getElementById('widthDisplay'),
      minSpace: this.shadowRoot.getElementById('minSpace'),
      minSpaceDisplay: this.shadowRoot.getElementById('minSpaceDisplay'),
      maxSpace: this.shadowRoot.getElementById('maxSpace'),
      maxSpaceDisplay: this.shadowRoot.getElementById('maxSpaceDisplay'),
      showEdge: this.shadowRoot.getElementById('showEdge'),
      svg: this.shadowRoot.getElementById('svg')
    };

    // Initialize renderer and justifier
    const fontSize = parseInt(this.getAttribute('font-size')) || 16;
    this.renderer = new SVGTextRenderer(this.elements.svg, fontSize);
    this.softJustify = new SoftJustify((text) => this.renderer.measureText(text));

    this.updateDisplays();
  }

  setupEventListeners() {
    if (!this.elements) return;

    this.elements.text.addEventListener('input', () => {
      this.setAttribute('text', this.elements.text.value);
      this.clearCacheAndJustify();
    });

    this.elements.width.addEventListener('input', () => {
      this.setAttribute('width', this.elements.width.value);
      this.updateDisplay('width', 'px');
    });

    this.elements.minSpace.addEventListener('input', () => {
      this.setAttribute('min-space', this.elements.minSpace.value);
      this.updateDisplay('minSpace', '%');
    });

    this.elements.maxSpace.addEventListener('input', () => {
      this.setAttribute('max-space', this.elements.maxSpace.value);
      this.updateDisplay('maxSpace', '%');
    });

    this.elements.showEdge.addEventListener('change', () => {
      this.setAttribute('show-edge', this.elements.showEdge.checked ? 'true' : 'false');
    });
  }

  updateFromAttributes() {
    if (!this.elements) return;

    this.elements.text.value = this.getText();
    this.elements.width.value = this.getWidth();
    this.elements.minSpace.value = this.getMinSpace();
    this.elements.maxSpace.value = this.getMaxSpace();
    this.elements.showEdge.checked = this.getShowEdge();

    this.updateDisplays();
  }

  updateDisplays() {
    if (!this.elements) return;

    this.elements.widthDisplay.textContent = this.elements.width.value + 'px';
    this.elements.minSpaceDisplay.textContent = this.elements.minSpace.value + '%';
    this.elements.maxSpaceDisplay.textContent = this.elements.maxSpace.value + '%';
  }

  updateDisplay(elementName, suffix) {
    const element = this.elements[elementName];
    const display = this.elements[elementName + 'Display'];
    if (display) {
      display.textContent = element.value + suffix;
    }
    this.justify();
  }

  getNormalSpaceWidth() {
    return this.renderer.measureSpace();
  }

  getDefaultLineHeight() {
    const fontSize = parseInt(this.getAttribute('font-size')) || 16;
    return Math.round(fontSize * 1.2);
  }

  getParameters() {
    const normalSpaceWidth = this.getNormalSpaceWidth();
    const minSpacePercent = this.getMinSpace() / 100;
    const maxSpacePercent = this.getMaxSpace() / 100;
    const minSpacePixels = normalSpaceWidth * (1 + minSpacePercent);
    const maxSpacePixels = normalSpaceWidth * (1 + maxSpacePercent);

    return {
      maxWidth: this.getWidth(),
      lineHeight: this.getDefaultLineHeight(),
      minSpace: minSpacePixels,
      maxSpace: maxSpacePixels,
      normalSpace: normalSpaceWidth,
      text: this.getText()
    };
  }

  justify() {
    clearTimeout(this.justifyTimeout);
    this.justifyTimeout = setTimeout(() => {
      if (!this.softJustify || !this.renderer) return;

      const params = this.getParameters();
      const justifiedLines = this.softJustify.justifyText(params.text, {
        maxWidth: params.maxWidth,
        minSpace: params.minSpace,
        maxSpace: params.maxSpace,
        normalSpace: params.normalSpace
      });

      this.renderer.render(justifiedLines, params.lineHeight, this.softJustify);
    }, 0);
  }

  clearCacheAndJustify() {
    if (this.softJustify) {
      this.softJustify.clearCache();
    }
    this.justify();
  }

  getText() { return this.getAttribute('text') || ''; }
  getWidth() { return parseInt(this.getAttribute('width') || '400'); }
  getMinSpace() { return parseInt(this.getAttribute('min-space') || '0'); }
  getMaxSpace() { return parseInt(this.getAttribute('max-space') || '0'); }
  getShowEdge() { return this.getAttribute('show-edge') === 'true'; }
  
  setText(text) { this.setAttribute('text', text); }
  setWidth(width) { this.setAttribute('width', width.toString()); }
  setMinSpace(percent) { this.setAttribute('min-space', percent.toString()); }
  setMaxSpace(percent) { this.setAttribute('max-space', percent.toString()); }

  toggleControls(show) {
    this.setAttribute('show-controls', show ? 'true' : 'false');
    this.render();
    this.setupComponents();
    this.setupEventListeners();
    this.justify();
  }
}

// Register the custom element
customElements.define('soft-justify', SoftJustifyElement);