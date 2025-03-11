// paper-tape.js
class PaperTape extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    this.ita2Table = [
      {'BINARY': [0,0,0,0,0], 'LETTERS': '␀', 'FIGURES': '␀'},
      {'BINARY': [0,1,0,0,0], 'LETTERS': '␍', 'FIGURES': '␍'},
      {'BINARY': [0,0,0,1,0], 'LETTERS': '␊', 'FIGURES': '␊'},
      {'BINARY': [0,0,1,0,0], 'LETTERS': '␠', 'FIGURES': '␠'},
      {'BINARY': [1,0,1,1,1], 'LETTERS': 'Q', 'FIGURES': '1'},
      {'BINARY': [1,0,0,1,1], 'LETTERS': 'W', 'FIGURES': '2'},
      {'BINARY': [0,0,0,0,1], 'LETTERS': 'E', 'FIGURES': '3'},
      {'BINARY': [0,1,0,1,0], 'LETTERS': 'R', 'FIGURES': '4'},
      {'BINARY': [1,0,0,0,0], 'LETTERS': 'T', 'FIGURES': '5'},
      {'BINARY': [1,0,1,0,1], 'LETTERS': 'Y', 'FIGURES': '6'},
      {'BINARY': [0,0,1,1,1], 'LETTERS': 'U', 'FIGURES': '7'},
      {'BINARY': [0,0,1,1,0], 'LETTERS': 'I', 'FIGURES': '8'},
      {'BINARY': [1,1,0,0,0], 'LETTERS': 'O', 'FIGURES': '9'},
      {'BINARY': [1,0,1,1,0], 'LETTERS': 'P', 'FIGURES': '0'},
      {'BINARY': [0,0,0,1,1], 'LETTERS': 'A', 'FIGURES': '–'},
      {'BINARY': [0,0,1,0,1], 'LETTERS': 'S', 'FIGURES': '\''},
      {'BINARY': [0,1,0,0,1], 'LETTERS': 'D', 'FIGURES': '␅'},
      {'BINARY': [0,1,1,0,1], 'LETTERS': 'F', 'FIGURES': '!'},
      {'BINARY': [1,1,0,1,0], 'LETTERS': 'G', 'FIGURES': '&'},
      {'BINARY': [1,0,1,0,0], 'LETTERS': 'H', 'FIGURES': '£'},
      {'BINARY': [0,1,0,1,1], 'LETTERS': 'J', 'FIGURES': '␇'},
      {'BINARY': [0,1,1,1,1], 'LETTERS': 'K', 'FIGURES': '('},
      {'BINARY': [1,0,0,1,0], 'LETTERS': 'L', 'FIGURES': ')'},
      {'BINARY': [1,0,0,0,1], 'LETTERS': 'Z', 'FIGURES': '+'},
      {'BINARY': [1,1,1,0,1], 'LETTERS': 'X', 'FIGURES': '/'},
      {'BINARY': [0,1,1,1,0], 'LETTERS': 'C', 'FIGURES': ':'},
      {'BINARY': [1,1,1,1,0], 'LETTERS': 'V', 'FIGURES': '='},
      {'BINARY': [1,1,0,0,1], 'LETTERS': 'B', 'FIGURES': '?'},
      {'BINARY': [0,1,1,0,0], 'LETTERS': 'N', 'FIGURES': ','},
      {'BINARY': [1,1,1,0,0], 'LETTERS': 'M', 'FIGURES': '.'},
      {'BINARY': [1,1,0,1,1], 'LETTERS': '␎', 'FIGURES': '␎'},
      {'BINARY': [1,1,1,1,1], 'LETTERS': '␏', 'FIGURES': '␏'}
    ];

    this.cursorPosition = 0;
    this.binarySequences = [[1,0,1,0,0],[0,0,0,0,1],[1,0,0,1,0],[1,0,0,1,0],[1,1,1,1,1],[1,1,0,0,0],[0,0,1,0,0],[1,0,0,1,1],[1,1,0,0,0],[0,1,0,1,0],[1,0,0,1,0],[0,1,0,0,1],[1,1,0,1,1],[0,1,1,0,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
  }
  
  connectedCallback() {
    this.render();
    this.setupControls();
    this.updateTape();
  }
  
  static get styles() {
    return `
      :host {
        display: block;
        font-family: monospace;
      }
      
      .container {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      
      .tape {
        display: flex;
        background-color: dimgray;
        padding: 4px;
      }
      .tape:focus {
        outline: var(--color-4) 3px solid;
      }
      
      .preview {
        background-color: var(--color-7);
        color: var(--color-1);
        border: 2px inset var(--color-7);
        min-height: 64px;
        position: relative;
        line-height: 1;
        font-size: 0.9rem;
        margin: 0;
      }
      
      .preview span {
        display: block;
        white-space: pre;
      }
      
      .character {
        flex-basis: 20px;
        display: flex;
        flex-direction: column-reverse;
      }
      
      .bit {
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: 0.5rem;
        color: #333;
      }
      
      .bit.letter {
        color: var(--color-7);
        font-size: 0.7rem;
      }
      
      .bit.punched {
        background: radial-gradient(black 0 50%, transparent 0 50%);
        color: dimgray;
      }
      
      .cursor {
        background-color: var(--color-4);
      }
      
      .controls {
        display: flex;
        gap: 0.25rem;
      }
      
      .control-btn {
        padding: 0.25rem 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
      
      button {
        cursor: pointer;
        background:var(--color-7);
        border:2px outset var(--color-7);
        font-family: monospace;
      }

      .keyboard {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .keyboard-row {
        display: flex;
        flex-wrap: wrap;
        gap:2px;
      }

      .key-btn {
        padding: 0.25rem;
        min-width: 2rem;
        cursor: pointer;
      }

      .key-btn:hover {
        background-color: var(--color-7);
      }
    `;
  }
  
  setupControls() {
    const tape = this.shadowRoot.querySelector('.tape');

    // Make tape focusable
    tape.tabIndex = 0;

    tape.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.moveCursor(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.moveCursor(1);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        this.punchOut();
      } else if (e.key.length === 1) {  // Single character input
        e.preventDefault();
        this.handleInput(e.key.toUpperCase());
      }
    });
  }

  getBinaryForChar(char) {
    const entry = this.ita2Table.find(e => e.LETTERS === char || e.FIGURES === char);
    return entry ? entry.BINARY : [0,0,1,0,0]; // Default to space if not found
  }

  getCharForBinary(binary, mode) {
    const entry = this.ita2Table.find(e => 
      JSON.stringify(e.BINARY) === JSON.stringify(binary)
    );
    return entry ? entry[mode] : '█';
  }

  handleInput(char) {
    const newBinary = this.getBinaryForChar(char);
    const existingBinary = this.binarySequences[this.cursorPosition];
    
    // Combine sequences - if existing bit is 1, keep it 1 regardless of new bit
    const combinedBinary = existingBinary.map((bit, i) => bit === 1 ? 1 : newBinary[i]);
    
    this.binarySequences[this.cursorPosition] = combinedBinary;
    if (this.cursorPosition < this.binarySequences.length - 1) {
      this.cursorPosition++;
    }
    this.updateTape();
  }

  moveCursor(delta) {
    this.cursorPosition = Math.max(0, Math.min(this.binarySequences.length - 1, this.cursorPosition + delta));
    this.updateTape();
  }

  punchOut() {
    if (this.cursorPosition < this.binarySequences.length) {
      this.binarySequences[this.cursorPosition] = [1,1,1,1,1];
      this.updateTape();
    }
  }

  updateTape() {
    const tape = this.shadowRoot.querySelector('.tape');
    const preview = this.shadowRoot.querySelector('.preview');
    tape.innerHTML = '';
    preview.innerHTML = '';
    
    let currentMode = 'LETTERS';
    let characters = [];  // Array of {char, x, y} objects
    let currentX = 0;
    let currentY = 0;
    const charWidth = 10;  // Width of each character in pixels
    const lineHeight = 16; // Height of each line in pixels
    
    this.binarySequences.forEach((binary, index) => {
      // Skip null sequences for preview
      const isNull = JSON.stringify(binary) === JSON.stringify([0,0,0,0,0]);
      const isLS = JSON.stringify(binary) === JSON.stringify([1,1,1,1,1]);
      const isFS = JSON.stringify(binary) === JSON.stringify([1,1,0,1,1]);
      
      // Check for mode shifts
      if (isFS) {
        currentMode = 'FIGURES';
      } else if (isLS) {
        currentMode = 'LETTERS';
      }

      // Add to preview message if not a control sequence
      if (!isNull && !isLS && !isFS) {
        let char = this.getCharForBinary(binary, currentMode);
        
        // Handle special characters
        if (char === '␍') {
          // Return to start of current line
          currentX = 0;
        } else if (char === '␊') {
          // Move to next line, keeping same X position
          currentY += lineHeight;
        } else {
          // Convert SP to actual space
          if (char === '␠') char = ' '; 
          
          if (char !== ' ') {
            characters.push({
              char,
              x: currentX,
              y: currentY
            });
          }
          currentX += charWidth;
        }
      }

      const charDiv = document.createElement('div');
      charDiv.className = 'character';
      
      // Add bits
      for (const bit of binary) {
        const bitDiv = document.createElement('div');
        bitDiv.className = `bit ${bit === 1 ? 'punched' : ''}`;
        bitDiv.textContent = `${bit === 1 ? '1' : '0'}`;
        charDiv.appendChild(bitDiv);
      }
      
      // Add character display
      const letter = document.createElement('div');
      letter.className = 'bit letter';
      letter.textContent = this.getCharForBinary(binary, currentMode);
      charDiv.appendChild(letter);
      
      if (index === this.cursorPosition) {
        charDiv.classList.add('cursor');
      }
      
      tape.appendChild(charDiv);
    });

    // Create preview characters
    characters.forEach(({char, x, y}) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.position = 'absolute';
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;
      preview.appendChild(span);
    });

    // Set preview height to contain all characters
    const maxY = Math.max(...characters.map(c => c.y)) + lineHeight;
    preview.style.height = `${maxY}px`;
  }
  
  reset() {
    // Zero out all bits instead of clearing the array
    this.binarySequences = this.binarySequences.map(() => [0,0,0,0,0]);
    this.currentMode = 'LETTERS';
    this.updateTape();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = PaperTape.styles;
    
    const container = document.createElement('div');
    container.className = 'container';
    
    // Add control buttons
    const controls = document.createElement('div');
    controls.className = 'controls';
    
    const reelBackBtn = document.createElement('button');
    reelBackBtn.className = 'control-btn';
    reelBackBtn.innerHTML = '⏪ Reel back';
    reelBackBtn.addEventListener('click', () => this.moveCursor(-1));
    
    const reelForwardBtn = document.createElement('button');
    reelForwardBtn.className = 'control-btn';
    reelForwardBtn.innerHTML = 'Reel forward ⏩';
    reelForwardBtn.addEventListener('click', () => this.moveCursor(1));
    
    const resetBtn = document.createElement('button');
    resetBtn.className = 'control-btn';
    resetBtn.innerHTML = '🔄 Reset';
    resetBtn.addEventListener('click', () => this.reset());

    controls.appendChild(resetBtn);
    controls.appendChild(reelBackBtn);
    controls.appendChild(reelForwardBtn);
    
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    
    // Letters row
    const lettersRow = document.createElement('div');
    lettersRow.className = 'keyboard-row';
    
    this.ita2Table.forEach(entry => {
      const btn = document.createElement('button');
      btn.className = 'key-btn';
      if (entry.LETTERS === '␠' || entry.LETTERS === '␍' || entry.LETTERS === '␊' || entry.LETTERS === '␎' || entry.LETTERS === '␏' || entry.LETTERS === '␀') {
        btn.textContent = entry.LETTERS;
      } else {
        btn.textContent = entry.LETTERS + ' ' + entry.FIGURES;
      }
      btn.addEventListener('click', () => this.handleInput(entry.LETTERS));
      lettersRow.appendChild(btn);
    });

    
    keyboard.appendChild(lettersRow);
    
    const tape = document.createElement('div');
    tape.className = 'tape';
    
    const preview = document.createElement('pre');
    preview.className = 'preview';
    
    const previewLabel = document.createElement('div');
    previewLabel.textContent = 'Receiving machine prints:';
    
    const controlsLabel = document.createElement('div');
    controlsLabel.textContent = 'Sender inputs & transmits:';

    container.appendChild(controlsLabel);
    container.appendChild(controls);
    container.appendChild(keyboard);
    container.appendChild(tape);
    container.appendChild(previewLabel);
    container.appendChild(preview);
    
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
}

customElements.define('paper-tape', PaperTape);