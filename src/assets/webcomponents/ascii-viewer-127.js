class AsciiViewer127 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                font-family: monospace;
                container-type: inline-size;
            }
            .ascii-container {
                font-size: 2cqw;
                line-height:1;
            }
            .ascii-row {
                display: grid;
                grid-template-columns: repeat(32, 1fr);
            }
            .ascii-row.row-highlight {
                background-color: dimgray;
                color: var(--color-1);
            }
            .ascii-cell {
                border: 1px solid var(--color-2);
                display: flex;
                align-items: center;
                justify-content: center;
                aspect-ratio:1/1;
                cursor: pointer;
                opacity:0.7;
            }
            .ascii-row.row-highlight .ascii-cell {
                opacity:1;
            }
            .ascii-row.row-highlight .ascii-cell.cell-highlight {
                background-color: var(--color-7);
            }
            .ascii-cell.cell-hover {
                background-color:var(--color-4);
                opacity:1;
            }
            .bit-pattern {
                display: grid;
                grid-template-columns: repeat(32, 1fr);
                background-color: dimgray;
                color:dimgray;
            }
            .bit-column {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 1.25cqw;
            }
            .bit {
                display: flex;
                align-items: center;
                justify-content: center;
                width:100%;
                aspect-ratio:1/1;
            }
            .bit-0-1 {
                opacity:0.5;
            }
            .bit-1 {
                background: 
                    radial-gradient(
                        black 0 50%,
                        transparent 0 50%
                    )
                ;
                color:black;
            }
            .bit-column.column-highlight {
                background-color: var(--color-7);
            }
            .bit-column.column-hover {
                background-color:var(--color-4);
            }
            .bit-column.column-highlight .bit.bit-0-1 {
                opacity:1;
            }
            .bit-column.column-hover .bit.bit-0-1 {
                opacity:0.7;
            }
            .bit-column.column-highlight .bit.bit-1, .bit-column.column-hover .bit.bit-1 {
                background: 
                    radial-gradient(
                        black 0 50%,
                        transparent 0 50%
                    )
                ;
                color:whitesmoke;
            }
            .ascii-row .ascii-cell:first-child .char-info {
                left:0;
                transform: none;
            }
            .ascii-row .ascii-cell:last-child .char-info {
                left:auto;
                right:0;
                transform: none;
            }
            .char-info {
                position: absolute;
                background-color: var(--color-1);
                color: var(--color-5);
                padding: 2px 4px;
                font-size: 1cqw;
                pointer-events: none;
                z-index: 1000;
                white-space: nowrap;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                display: none;
            }
            .ascii-cell:hover .char-info,
            .ascii-cell.cell-highlight .char-info {
                display: block;
            }
            .ascii-cell {
                position: relative;
            }
        `;

        const container = document.createElement('div');
        container.className = 'ascii-container';
        container.innerHTML = `
            <div class="ascii-rows">
                &#x007F;
                <div class="ascii-row" data-bits="00"></div>
                <div class="ascii-row" data-bits="01"></div>
                <div class="ascii-row" data-bits="10"></div>
                <div class="ascii-row" data-bits="11"></div>
            </div>
            <div class="bit-pattern"></div>
        `;

        this.shadowRoot.append(style, container);
    }

    connectedCallback() {
        this.initializeGrid();
        this.setupEventListeners();
    }

    initializeGrid() {
        const rows = this.shadowRoot.querySelectorAll('.ascii-row');
        const bitPattern = this.shadowRoot.querySelector('.bit-pattern');
        
        // Fill character rows
        rows.forEach((row, rowIndex) => {
            for (let col = 0; col < 32; col++) {
                const charCode = rowIndex * 32 + col;
                const cell = document.createElement('div');
                cell.className = 'ascii-cell';
                
                if (charCode < 33 || charCode === 127) {
                    cell.textContent = this.getControlCharName(charCode);
                } else {
                    cell.textContent = String.fromCharCode(charCode);
                }
                
                // Add tooltip with hex representation
                const tooltip = document.createElement('div');
                tooltip.className = 'char-info';
                tooltip.textContent = `Dec: ${charCode} Hex: 0x${charCode.toString(16).padStart(2, '0').toUpperCase()}`;
                cell.appendChild(tooltip);
                
                cell.dataset.charCode = charCode;
                cell.dataset.column = col;
                row.appendChild(cell);
            }
        });
        
        // Create bit pattern display
        for (let col = 0; col < 32; col++) {
            const bitColumn = document.createElement('div');
            bitColumn.className = 'bit-column';
            bitColumn.dataset.column = col;
            
            // Create 7 bits (bits 0-6)
            for (let bit = 0; bit < 7; bit++) {
                const bitElement = document.createElement('div');
                bitElement.className = `bit ${bit <= 1 ? 'bit-0-1' : ''}`;
                bitElement.dataset.bit = bit;
                bitElement.dataset.col = col;
                
                // Show static bits for 2-6
                if (bit >= 2) {
                    const colBits = col.toString(2).padStart(5, '0');  // 5 bits for 2-6
                    bitElement.textContent = colBits[bit-2];  // Simply use bit-2 to index from start
                    if (colBits[bit-2] === '1') bitElement.classList.add('bit-1');
                } else {
                    bitElement.textContent = '-';
                }
                
                bitColumn.appendChild(bitElement);
            }
            
            bitPattern.appendChild(bitColumn);
        }
    }

    setupEventListeners() {
        const bitPattern = this.shadowRoot.querySelector('.bit-pattern');
        const asciiRows = this.shadowRoot.querySelector('.ascii-rows');
        
        // Handle clicks on individual characters
        asciiRows.addEventListener('click', (event) => {
            const cell = event.target.closest('.ascii-cell');
            if (!cell) return;

            // Clear all previous click highlights
            this.clearClickHighlights();
            
            // Get the row and highlight it
            const row = cell.closest('.ascii-row');
            row.classList.add('row-highlight');
            
            // Highlight the clicked cell
            cell.classList.add('cell-highlight');
            
            // Highlight the corresponding bit column
            const column = cell.dataset.column;
            const bitColumn = bitPattern.querySelector(`.bit-column[data-column="${column}"]`);
            bitColumn.classList.add('column-highlight');
            
            // Store the clicked row's bits for hover restoration
            this.clickedRowBits = row.dataset.bits;
            
            // Update bit patterns for bits 0-1 for all columns
            const rowBits = row.dataset.bits;
            bitPattern.querySelectorAll('.bit-column').forEach(column => {
                const bit0Element = column.children[0];
                const bit1Element = column.children[1];
                
                bit0Element.textContent = rowBits[0];
                bit1Element.textContent = rowBits[1];
                
                bit0Element.classList.toggle('bit-1', rowBits[0] === '1');
                bit1Element.classList.toggle('bit-1', rowBits[1] === '1');
            });
        });

        // Handle hover events
        asciiRows.addEventListener('mouseover', (event) => {
            const cell = event.target.closest('.ascii-cell');
            if (!cell) return;

            // Clear previous hover highlights
            this.clearHoverHighlights();
            
            // Add hover highlight to the cell
            cell.classList.add('cell-hover');
            
            // Add hover highlight to the corresponding bit column
            const column = cell.dataset.column;
            const bitColumn = bitPattern.querySelector(`.bit-column[data-column="${column}"]`);
            bitColumn.classList.add('column-hover');

            // Store the current state of the hovered column's bits
            if (!this.originalBitStates) {
                this.originalBitStates = {};
            }
            const currentColumn = cell.dataset.column;
            const currentBitColumn = bitPattern.querySelector(`.bit-column[data-column="${currentColumn}"]`);
            const bit0 = currentBitColumn.children[0];
            const bit1 = currentBitColumn.children[1];
            this.originalBitStates[currentColumn] = {
                bit0: { text: bit0.textContent, isSet: bit0.classList.contains('bit-1') },
                bit1: { text: bit1.textContent, isSet: bit1.classList.contains('bit-1') }
            };

            // Update bit pattern only for the hovered column
            const rowBits = cell.closest('.ascii-row').dataset.bits;
            const bit0Element = currentBitColumn.children[0];
            const bit1Element = currentBitColumn.children[1];
            
            bit0Element.textContent = rowBits[0];
            bit1Element.textContent = rowBits[1];
            
            bit0Element.classList.toggle('bit-1', rowBits[0] === '1');
            bit1Element.classList.toggle('bit-1', rowBits[1] === '1');
        });

        // Clear hover highlights when mouse leaves the grid
        asciiRows.addEventListener('mouseleave', () => {
            this.clearHoverHighlights();
        });
    }

    clearClickHighlights() {
        // Clear row highlights
        this.shadowRoot.querySelectorAll('.row-highlight').forEach(el => 
            el.classList.remove('row-highlight'));
        
        // Clear cell highlights
        this.shadowRoot.querySelectorAll('.cell-highlight').forEach(el => 
            el.classList.remove('cell-highlight'));
        
        // Clear column highlights
        this.shadowRoot.querySelectorAll('.column-highlight').forEach(el => 
            el.classList.remove('column-highlight'));
    }

    clearHoverHighlights() {
        // Clear cell hover highlights
        this.shadowRoot.querySelectorAll('.cell-hover').forEach(el => 
            el.classList.remove('cell-hover'));
        
        // Clear column hover highlights
        this.shadowRoot.querySelectorAll('.column-hover').forEach(el => 
            el.classList.remove('column-hover'));
        
        // Restore original bit patterns if they exist
        if (this.originalBitStates) {
            const bitPattern = this.shadowRoot.querySelector('.bit-pattern');
            Object.entries(this.originalBitStates).forEach(([column, data]) => {
                const bitColumn = bitPattern.querySelector(`.bit-column[data-column="${column}"]`);
                if (bitColumn) {
                    const bit0Element = bitColumn.children[0];
                    const bit1Element = bitColumn.children[1];
                    
                    if (this.clickedRowBits) {
                        // If we have a clicked row, use its bits
                        bit0Element.textContent = this.clickedRowBits[0];
                        bit1Element.textContent = this.clickedRowBits[1];
                        bit0Element.classList.toggle('bit-1', this.clickedRowBits[0] === '1');
                        bit1Element.classList.toggle('bit-1', this.clickedRowBits[1] === '1');
                    } else {
                        // Otherwise restore the original state
                        bit0Element.textContent = data.bit0.text;
                        bit1Element.textContent = data.bit1.text;
                        bit0Element.classList.toggle('bit-1', data.bit0.isSet);
                        bit1Element.classList.toggle('bit-1', data.bit1.isSet);
                    }
                }
            });
            this.originalBitStates = null;
        }
    }

    getControlCharName(code) {
        const controlChars = {
            0: '␀', 1: '␁', 2: '␂', 3: '␃', 4: '␄', 
            5: '␅', 6: '␆', 7: '␇', 8: '␈', 9: '␉',
            10: '␊', 11: '␋', 12: '␌', 13: '␍', 14: '␎',
            15: '␏', 16: '␐', 17: '␑', 18: '␒', 19: '␓',
            20: '␔', 21: '␕', 22: '␖', 23: '␗', 24: '␘',
            25: '␙', 26: '␚', 27: '␛', 28: '␜', 29: '␝',
            30: '␞', 31: '␟', 32: '␠', 127: '␡'
        };
        return controlChars[code] || code;
    }
}

customElements.define('ascii-viewer-127', AsciiViewer127);