class CharacterEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Default properties
    this.cellWidth = 16;
    this.cellHeight = 16;
    this.currentSlot = 0;
    
    // Initialize patterns as array of objects
    this.patterns = [];
    
    // Initialize with default patterns
    this.initializeDefaultPatterns();
    
    // Setup component
    this.render();
    this.setupEventListeners();
  }
  
  // Convert dash/hashtag strings to pattern arrays
  parsePatternString(patternString) {
    const lines = patternString.trim().split('\n');
    const gridHeight = lines.length;
    const gridWidth = lines[0].length;
    
    const pattern = Array(gridHeight).fill().map(() => Array(gridWidth).fill(0));
    
    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        pattern[y][x] = lines[y][x] === 'x' ? 1 : 0;
      }
    }
    
    return pattern;
  }
  
  // Convert pattern arrays to dash/hashtag strings
  patternToString(pattern) {
    if (!pattern || !pattern.length) return '';
    
    return pattern.map(row => 
      row.map(cell => cell ? 'x' : '.').join('')
    ).join('\n');
  }
  
  initializeDefaultPatterns() {
    // Sample patterns using dash/hashtag format with labels
    const defaultPatterns = [
        {
            label: 'ibm-bios',
            pattern: `........
...x....
..xxx...
.xx.xx..
xx...xx.
xx...xx.
xxxxxxx.
........`
        },
        {
            label: 'ibm-mda-thin',
            pattern: `........
...x....
..x.x...
.x...x..
x.....x.
x.....x.
xxxxxxx.
........`
        },
{
  label: 'v6',
  pattern: `........
........
........
........
...x....
..xxx...
.xx.xx..
xx...xx.
xx...xx.
xx...xx.
xxxxxxx.
........
........
........
........
........`
},
        {
            label: 'v1',
            pattern: `........
...x....
..x.x...
.x...x..
.x...x..
x.....x.
xxxxxxx.
........`
        },
        {
            label: 'v2',
            pattern: `........
...x....
..xxx...
.xx.xx..
.xx.xx..
xx...xx.
xxxxxxx.
........`
        },
        {
            label: 'v3',
            pattern: `...x....
...x....
..xxx...
.xx.xx..
.xx.xx..
xx...xx.
xxxxxxx.
xxxxxxx.`
        },
        {
          label: 'v4',
          pattern: `........
...xx...
..xxxx..
.xx..xx.
.xx..xx.
xx....xx
xxxxxxxx
........`
      },
      {
        label: 'v5',
        pattern: `........
........
...xx...
..xxxx..
.xx..xx.
xx....xx
xxxxxxxx
........`
    },
    {
      label: 'v6',
      pattern: `........
........
...x....
..xxx...
.xx.xx..
xx...xx.
xxxxxxx.
........`
  },
  {
    label: 'v6',
    pattern: `...x....
..xxx...
..xxx...
.xx.xx..
.xx.xx..
xx...xx.
xxxxxxx.
........`
},
{
  label: 'v6',
  pattern: `........
........
........
...x....
...x....
..xxx...
..xxx...
.xx.xx..
.xx.xx..
xx...xx.
xxxxxxx.
........
........
........
........
........`
},
{
  label: 'v6',
  pattern: `........
........
...x....
...x....
..xxx...
..xxx...
.xx.xx..
.xx.xx..
xx...xx.
xx...xx.
xxxxxxx.
........
........
........
........
........`
}
    ];
    
    // Initialize first pattern to set dimensions
    const firstPatternData = this.parsePatternString(defaultPatterns[0].pattern);
    this.gridHeight = firstPatternData.length;
    this.gridWidth = firstPatternData[0].length;
    
    // Convert string patterns to pattern objects with arrays
    this.patterns = defaultPatterns.map(({ label, pattern }) => ({
        label,
        data: this.parsePatternString(pattern),
        dataURI: null // Will be set in the next step
    }));
    
    // Generate initial dataURIs
    this.patterns.forEach(pattern => {
        pattern.dataURI = this.generateDataURI(pattern.data);
    });
  }
  
  setPatterns(patternsData) {
    if (patternsData && patternsData.length > 0) {
        const firstPattern = patternsData[0].data || patternsData[0];
        this.gridHeight = firstPattern.length;
        this.gridWidth = firstPattern[0].length;
        
        this.patterns = patternsData.map(pattern => {
            if (Array.isArray(pattern)) {
                // Handle legacy format
                return {
                    label: 'Pattern',
                    data: pattern,
                    dataURI: null
                };
            }
            return {
                label: pattern.label || 'Pattern',
                data: pattern.data,
                dataURI: null
            };
        });
        
        // Generate all dataURIs
        this.patterns.forEach(pattern => {
            pattern.dataURI = this.generateDataURI(pattern.data);
        });
    }
  }
  
  render() {
    const totalWidth = this.gridWidth * this.cellWidth;
    const totalHeight = this.gridHeight * this.cellHeight;
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          font-family: sans-serif;
        }
        
        .pixel-editor {
          width:100%;
          display: grid;
          grid-template-columns: auto 1fr;
        }
        
        .canvas-container {
          position: relative;
          display:flex;
          align-items:center;
          justify-content:center;
          background:var(--color-2);
          padding:8px;
        }
        
        .canvas-container-inner {
          position:relative;
          display:flex;
          width:fit-content;
          height:fit-content;
        }

        canvas {
          cursor: pointer;
        }
        
        .grid-overlay {
          position:absolute;
          top:0;
          left:0;
          pointer-events: none;
        }
        
        .slots-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows:repeat(4, min-content);
        }
        
        .slot {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background-color: black;
          border: 1px solid var(--color-4);
          padding: 8px;
        }
        
        .slot.active {
          background-color: var(--color-4);
        }
        
        .slot-preview {
          width: var(--width);
          height: var(--height);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
        
        .slot-label {
          width: 80px;
          height: 20px;
          font-size: 1rem;
          color:var(--color-7);
        }
      </style>
      
      <div class="pixel-editor">

        <div class="slots-container">
          ${this.patterns.map((pattern, i) => `
            <div class="slot ${i === this.currentSlot ? 'active' : ''}" data-index="${i}">
              <div class="slot-preview" style="--width: ${this.patterns[i].data[0].length * 2}px; --height: ${this.patterns[i].data.length * 2}px; background-image: url('${pattern.dataURI}')"></div>
            </div>
          `).join('')}
        </div>

        <div class="canvas-container">
          <div class="canvas-container-inner">
          <canvas width="${totalWidth}" height="${totalHeight}"></canvas>
          
            <svg class="grid-overlay" width="${totalWidth}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="${this.cellWidth}" height="${this.cellHeight}" patternUnits="userSpaceOnUse">
                  <path d="M ${this.cellWidth} 0 L 0 0 0 ${this.cellHeight}" fill="none" stroke="grey" stroke-width="0.5"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" stroke="black" stroke-width="0.5"></rect>
            </svg>
          </div>
        </div>
      </div>
    `;
    
    this.canvas = this.shadowRoot.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.drawCanvas();
  }
  
  setupEventListeners() {
    // We need to set this up after each render
    const setupAfterRender = () => {
      this.canvas = this.shadowRoot.querySelector('canvas');
      this.ctx = this.canvas.getContext('2d');
      
      // Canvas click event
      this.canvas.addEventListener('click', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / this.cellWidth);
        const y = Math.floor((e.clientY - rect.top) / this.cellHeight);
        
        if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
          // Toggle cell (0 -> 1, 1 -> 0)
          this.patterns[this.currentSlot].data[y][x] = this.patterns[this.currentSlot].data[y][x] ? 0 : 1;
          this.drawCanvas();
          this.updateDataURI();
        }
      });
      
      // Slot selection events
      this.shadowRoot.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', () => {
          const index = parseInt(slot.dataset.index, 10);
          this.selectSlot(index);
        });
      });
    };
    
    // Call immediately and also set up a MutationObserver to handle future renders
    setupAfterRender();
    
    const observer = new MutationObserver(setupAfterRender);
    observer.observe(this.shadowRoot, { childList: true, subtree: true });
  }
  
  selectSlot(index) {
    this.currentSlot = index;
    
    // Update active class
    this.shadowRoot.querySelectorAll('.slot').forEach(slot => {
      const slotIndex = parseInt(slot.dataset.index, 10);
      if (slotIndex === index) {
        slot.classList.add('active');
      } else {
        slot.classList.remove('active');
      }
    });
    
    this.drawCanvas();
  }
  
  drawCanvas() {
    const pattern = this.patterns[this.currentSlot]?.data;
    
    if (!pattern) return;

    // Update canvas dimensions based on current pattern
    this.gridHeight = pattern.length;
    this.gridWidth = pattern[0].length;
    const totalWidth = this.gridWidth * this.cellWidth;
    const totalHeight = this.gridHeight * this.cellHeight;
    
    // Update canvas and container size
    this.canvas.width = totalWidth;
    this.canvas.height = totalHeight;
    
    // Update grid overlay size
    const gridOverlay = this.shadowRoot.querySelector('.grid-overlay');
    gridOverlay.setAttribute('width', totalWidth);
    gridOverlay.setAttribute('height', totalHeight);
    
    // Draw black background
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw cells
    for (let y = 0; y < this.gridHeight; y++) {
        for (let x = 0; x < this.gridWidth; x++) {
            if (pattern[y] && pattern[y][x]) {
                this.ctx.fillStyle = '#aaa';
                this.ctx.fillRect(
                    x * this.cellWidth, 
                    y * this.cellHeight, 
                    this.cellWidth, 
                    this.cellHeight
                );
            }
        }
    }
  }
  
  updateDataURI() {
    const pattern = this.patterns[this.currentSlot];
    pattern.dataURI = this.generateDataURI(pattern.data);
    
    // Update preview
    const preview = this.shadowRoot.querySelector(`.slot[data-index="${this.currentSlot}"] .slot-preview`);
    if (preview) {
        preview.style.backgroundImage = `url('${pattern.dataURI}')`;
    }
  }
  
  generateDataURI(pattern) {
    if (!pattern || !pattern.length) return '';
    
    // Use pattern dimensions
    const width = pattern[0].length * this.cellWidth;
    const height = pattern.length * this.cellHeight;
    
    // Create a temporary canvas for the data URI
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = width;
    tempCanvas.height = height;
    const tempCtx = tempCanvas.getContext('2d');
    
    // Set black background
    tempCtx.fillStyle = '#000';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    
    // Draw cells to temp canvas
    for (let y = 0; y < pattern.length; y++) {
        for (let x = 0; x < pattern[0].length; x++) {
            if (pattern[y][x]) {
                tempCtx.fillStyle = '#aaa';
                tempCtx.fillRect(
                    x * this.cellWidth, 
                    y * this.cellHeight, 
                    this.cellWidth, 
                    this.cellHeight
                );
            }
        }
    }
    
    // Return data URI
    return tempCanvas.toDataURL('image/png');
  }
  
  // Add new method to set a pattern from string input
  setPatternFromString(index, patternString, label = null) {
    const patternData = this.parsePatternString(patternString);
    
    // Create or update pattern
    if (index >= this.patterns.length) {
        this.patterns.push({
            label: label || `Pattern ${index + 1}`,
            data: patternData,
            dataURI: null
        });
    } else {
        this.patterns[index].data = patternData;
        if (label) {
            this.patterns[index].label = label;
        }
    }
    
    // Update dataURI
    this.patterns[index].dataURI = this.generateDataURI(patternData);
    
    // Redraw if necessary
    if (this.currentSlot === index) {
        this.render();
    } else {
        // Just update the preview
        const preview = this.shadowRoot.querySelector(`.slot[data-index="${index}"] .slot-preview`);
        if (preview) {
            preview.style.backgroundImage = `url('${this.patterns[index].dataURI}')`;
        }
    }
  }
  
  // Getter to return patterns as dash/hashtag strings
  getPatternString(index) {
    if (index >= 0 && index < this.patterns.length) {
        return this.patternToString(this.patterns[index].data);
    }
    return '';
  }
  
  // Method to set a pattern label by index
  setPatternLabel(index, label) {
    if (index >= 0 && index < this.patterns.length) {
        this.patterns[index].label = label;
        
        // Update the label in DOM if it exists
        const labelElement = this.shadowRoot.querySelector(`.slot[data-index="${index}"] .slot-label`);
        if (labelElement) {
            labelElement.textContent = label;
        }
    }
  }
}

// Register custom element
customElements.define('character-editor', CharacterEditor);