function cp437_to_unicode(cp437) {
    switch(cp437) {
        case 1: return "\u263A";
        case 2: return "\u263B";
        case 3: return "\u2665";
        case 4: return "\u2666";
        case 5: return "\u2663";
        case 6: return "\u2660";
        case 7: return "\u2022";
        case 8: return "\u25D8";
        case 9: return "\u25CB";
        case 10: return "\u25D9";
        case 11: return "\u2642";
        case 12: return "\u2640";
        case 13: return "\u266A";
        case 14: return "\u266B";
        case 15: return "\u263C";
        case 16: return "\u25BA";
        case 17: return "\u25C4";
        case 18: return "\u2195";
        case 19: return "\u203C";
        case 20: return "\u00B6";
        case 21: return "\u00A7";
        case 22: return "\u25AC";
        case 23: return "\u21A8";
        case 24: return "\u2191";
        case 25: return "\u2193";
        case 26: return "\u2192";
        case 27: return "\u2190";
        case 28: return "\u221F";
        case 29: return "\u2194";
        case 30: return "\u25B2";
        case 31: return "\u25BC";
        case 127: return "\u2302";
        case 128: return "\u00C7";
        case 129: return "\u00FC";
        case 130: return "\u00E9";
        case 131: return "\u00E2";
        case 132: return "\u00E4";
        case 133: return "\u00E0";
        case 134: return "\u00E5";
        case 135: return "\u00E7";
        case 136: return "\u00EA";
        case 137: return "\u00EB";
        case 138: return "\u00E8";
        case 139: return "\u00EF";
        case 140: return "\u00EE";
        case 141: return "\u00EC";
        case 142: return "\u00C4";
        case 143: return "\u00C5";
        case 144: return "\u00C9";
        case 145: return "\u00E6";
        case 146: return "\u00C6";
        case 147: return "\u00F4";
        case 148: return "\u00F6";
        case 149: return "\u00F2";
        case 150: return "\u00FB";
        case 151: return "\u00F9";
        case 152: return "\u00FF";
        case 153: return "\u00D6";
        case 154: return "\u00DC";
        case 155: return "\u00A2";
        case 156: return "\u00A3";
        case 157: return "\u00A5";
        case 158: return "\u20A7";
        case 159: return "\u0192";
        case 160: return "\u00E1";
        case 161: return "\u00ED";
        case 162: return "\u00F3";
        case 163: return "\u00FA";
        case 164: return "\u00F1";
        case 165: return "\u00D1";
        case 166: return "\u00AA";
        case 167: return "\u00BA";
        case 168: return "\u00BF";
        case 169: return "\u2310";
        case 170: return "\u00AC";
        case 171: return "\u00BD";
        case 172: return "\u00BC";
        case 173: return "\u00A1";
        case 174: return "\u00AB";
        case 175: return "\u00BB";
        case 176: return "\u2591";
        case 177: return "\u2592";
        case 178: return "\u2593";
        case 179: return "\u2502";
        case 180: return "\u2524";
        case 181: return "\u2561";
        case 182: return "\u2562";
        case 183: return "\u2556";
        case 184: return "\u2555";
        case 185: return "\u2563";
        case 186: return "\u2551";
        case 187: return "\u2557";
        case 188: return "\u255D";
        case 189: return "\u255C";
        case 190: return "\u255B";
        case 191: return "\u2510";
        case 192: return "\u2514";
        case 193: return "\u2534";
        case 194: return "\u252C";
        case 195: return "\u251C";
        case 196: return "\u2500";
        case 197: return "\u253C";
        case 198: return "\u255E";
        case 199: return "\u255F";
        case 200: return "\u255A";
        case 201: return "\u2554";
        case 202: return "\u2569";
        case 203: return "\u2566";
        case 204: return "\u2560";
        case 205: return "\u2550";
        case 206: return "\u256C";
        case 207: return "\u2567";
        case 208: return "\u2568";
        case 209: return "\u2564";
        case 210: return "\u2565";
        case 211: return "\u2559";
        case 212: return "\u2558";
        case 213: return "\u2552";
        case 214: return "\u2553";
        case 215: return "\u256B";
        case 216: return "\u256A";
        case 217: return "\u2518";
        case 218: return "\u250C";
        case 219: return "\u2588";
        case 220: return "\u2584";
        case 221: return "\u258C";
        case 222: return "\u2590";
        case 223: return "\u2580";
        case 224: return "\u03B1";
        case 225: return "\u00DF";
        case 226: return "\u0393";
        case 227: return "\u03C0";
        case 228: return "\u03A3";
        case 229: return "\u03C3";
        case 230: return "\u00B5";
        case 231: return "\u03C4";
        case 232: return "\u03A6";
        case 233: return "\u0398";
        case 234: return "\u03A9";
        case 235: return "\u03B4";
        case 236: return "\u221E";
        case 237: return "\u03C6";
        case 238: return "\u03B5";
        case 239: return "\u2229";
        case 240: return "\u2261";
        case 241: return "\u00B1";
        case 242: return "\u2265";
        case 243: return "\u2264";
        case 244: return "\u2320";
        case 245: return "\u2321";
        case 246: return "\u00F7";
        case 247: return "\u2248";
        case 248: return "\u00B0";
        case 249: return "\u2219";
        case 250: return "\u00B7";
        case 251: return "\u221A";
        case 252: return "\u207F";
        case 253: return "\u00B2";
        case 254: return "\u25A0";
        case 255: return "\u00A0";
        default: return String.fromCharCode(cp437);
    }
}

class AsciiViewer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: block;
                font-family: 'Topaz_Plus_a1200_CP437', monospace;
                container:inline-size;
                position: relative;
            }
            .ascii-row {
                display: grid;
                grid-template-columns: repeat(32, 1fr);
                font-size: 2cqw;
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
                aspect-ratio:1;
                cursor: pointer;
                opacity:0.7;
                position: relative;
            }
            .char-info {
                position: absolute;
                width: 100%;
                box-sizing: border-box;
                background-color: var(--color-6);
                color: black;
                padding: 2px 4px;
                font-size: 0.66cqw;
                pointer-events: none;
                z-index: 10;
                white-space: nowrap;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                visibility: hidden;
                line-height: 1;
            }
            .ascii-cell:hover .char-info {
                display: block;
                opacity: 1;
                visibility: visible;
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
                font-size: 1cqw;
            }
            .bit {
                display: flex;
                align-items: center;
                justify-content: center;
                width:100%;
                aspect-ratio:1;
            }
            .bit-0-1-2 {
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
            .bit-column.column-highlight .bit.bit-0-1-2 {
                opacity:1;
            }
            .bit-column.column-hover .bit.bit-0-1-2 {
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
        `;

        const container = document.createElement('div');
        container.className = 'ascii-container';
        container.innerHTML = `
            <div class="ascii-rows">
                &#x007F;
                <div class="ascii-row" data-bits="000"></div>
                <div class="ascii-row" data-bits="001"></div>
                <div class="ascii-row" data-bits="010"></div>
                <div class="ascii-row" data-bits="011"></div>
                <div class="ascii-row" data-bits="100"></div>
                <div class="ascii-row" data-bits="101"></div>
                <div class="ascii-row" data-bits="110"></div>
                <div class="ascii-row" data-bits="111"></div>
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
                
                // Create character info div as a direct child
                const charInfo = document.createElement('div');
                charInfo.className = 'char-info';
                charInfo.innerHTML = `dec ${charCode} <br> hex 0x${charCode.toString(16).padStart(2, '0').toUpperCase()} <br> ${charCode.toString(2).padStart(8, '0')}`;
                cell.appendChild(charInfo);
                
                // Add the actual character after the info div
                const charSpan = document.createElement('span');
                if (charCode < 33 || charCode === 127) {
                    charSpan.textContent = cp437_to_unicode(charCode);
                    cell.classList.add('control-char');
                } else {
                    charSpan.textContent = cp437_to_unicode(charCode);
                }
                cell.appendChild(charSpan);
                
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
            
            // Create 8 bits
            for (let bit = 0; bit <= 7; bit++) {
                const bitElement = document.createElement('div');
                bitElement.className = `bit ${bit > 4 ? 'bit-0-1-2' : ''}`;
                bitElement.dataset.bit = bit;
                bitElement.dataset.col = col;
                
                // Show static bits for 0-5
                if (bit <= 5) {
                    const colBits = col.toString(2).padStart(8, '0');
                    bitElement.textContent = colBits[7-bit];
                    if (colBits[7-bit] === '1') bitElement.classList.add('bit-1');
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
        
        // Handle mouse enter/leave for tooltips
        asciiRows.addEventListener('mouseenter', (event) => {
            const cell = event.target.closest('.ascii-cell');
            if (!cell) return;
            
            const charInfo = cell.querySelector('.char-info');
            if (charInfo) {
                charInfo.style.opacity = '1';
                charInfo.style.visibility = 'visible';
            }
        }, true);

        asciiRows.addEventListener('mouseleave', (event) => {
            const cell = event.target.closest('.ascii-cell');
            if (!cell) return;
            
            const charInfo = cell.querySelector('.char-info');
            if (charInfo) {
                charInfo.style.opacity = '0';
                charInfo.style.visibility = 'hidden';
            }
        }, true);

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
            
            // Update bit patterns for bits 0-2 for all columns
            const rowBits = row.dataset.bits;
            bitPattern.querySelectorAll('.bit-column').forEach(column => {
                const bit0Element = column.children[7];
                const bit1Element = column.children[6];
                const bit2Element = column.children[5];
                
                bit0Element.textContent = rowBits[0];
                bit1Element.textContent = rowBits[1];
                bit2Element.textContent = rowBits[2];
                
                bit0Element.classList.toggle('bit-1', rowBits[0] === '1');
                bit1Element.classList.toggle('bit-1', rowBits[1] === '1');
                bit2Element.classList.toggle('bit-1', rowBits[2] === '1');
            });
        });

        // Handle hover events
        asciiRows.addEventListener('mouseover', (event) => {
            const cell = event.target.closest('.ascii-cell');
            if (!cell) return;

            // Ensure char-info is visible
            const charInfo = cell.querySelector('.char-info');
            if (charInfo) {
                charInfo.style.display = 'block';
                charInfo.style.opacity = '1';
                charInfo.style.visibility = 'visible';
            }

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
            const bit0 = currentBitColumn.children[7];
            const bit1 = currentBitColumn.children[6];
            const bit2 = currentBitColumn.children[5];
            this.originalBitStates[currentColumn] = {
                bit0: { text: bit0.textContent, isSet: bit0.classList.contains('bit-1') },
                bit1: { text: bit1.textContent, isSet: bit1.classList.contains('bit-1') },
                bit2: { text: bit2.textContent, isSet: bit2.classList.contains('bit-1') }
            };

            // Update bit pattern only for the hovered column
            const rowBits = cell.closest('.ascii-row').dataset.bits;
            const bit0Element = currentBitColumn.children[7];
            const bit1Element = currentBitColumn.children[6];
            const bit2Element = currentBitColumn.children[5];
            
            bit0Element.textContent = rowBits[0];
            bit1Element.textContent = rowBits[1];
            bit2Element.textContent = rowBits[2];
            
            bit0Element.classList.toggle('bit-1', rowBits[0] === '1');
            bit1Element.classList.toggle('bit-1', rowBits[1] === '1');
            bit2Element.classList.toggle('bit-1', rowBits[2] === '1');
        });

        asciiRows.addEventListener('mouseout', (event) => {
            const cell = event.target.closest('.ascii-cell');
            if (!cell) return;

            // Hide char-info
            const charInfo = cell.querySelector('.char-info');
            if (charInfo) {
                charInfo.style.opacity = '0';
                charInfo.style.visibility = 'hidden';
            }
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
                    const bit0Element = bitColumn.children[7];
                    const bit1Element = bitColumn.children[6];
                    const bit2Element = bitColumn.children[5];
                    
                    if (this.clickedRowBits) {
                        // If we have a clicked row, use its bits
                        bit0Element.textContent = this.clickedRowBits[0];
                        bit1Element.textContent = this.clickedRowBits[1];
                        bit2Element.textContent = this.clickedRowBits[2];
                        bit0Element.classList.toggle('bit-1', this.clickedRowBits[0] === '1');
                        bit1Element.classList.toggle('bit-1', this.clickedRowBits[1] === '1');
                        bit2Element.classList.toggle('bit-1', this.clickedRowBits[2] === '1');
                    } else {
                        // Otherwise restore the original state
                        bit0Element.textContent = data.bit2.text;
                        bit1Element.textContent = data.bit1.text;
                        bit2Element.textContent = data.bit0.text;
                        bit0Element.classList.toggle('bit-1', data.bit0.isSet);
                        bit1Element.classList.toggle('bit-1', data.bit1.isSet);
                        bit2Element.classList.toggle('bit-1', data.bit2.isSet);
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

customElements.define('ascii-viewer', AsciiViewer);