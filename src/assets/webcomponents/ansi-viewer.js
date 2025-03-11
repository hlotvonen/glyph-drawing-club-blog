class AnsiViewer extends HTMLElement {
    // ANSI color mapping for flipping certain colors
    static colorMap = {
        1: 4, 4: 1, 9: 12, 12: 9,  // flip blue with red
        3: 6, 6: 3, 11: 14, 14: 11 // flip cyan with yellow
    };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['content'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'content') {
            this.processAnsiContent(newValue);
        }
    }

    mapColor(color) {
        return AnsiViewer.colorMap[color] ?? color;
    }

    processAnsiContent(content) {
        const sequences = this.parseAnsiSequences(content);
        let html = `
        <style>
            :host {
                max-width: 640px;
                display: block;
                margin: 0 auto;
                container-type: inline-size;
            }
            pre { 
                font-family: 'Topaz_Plus_a1200_CP437', monospace;
                line-height:1;
                font-size:min(2.5cqw, 16px);
            }
            .fg-0 { color: #000000; }
            .fg-1 { color: #0000aa; }
            .fg-2 { color: #00aa00; }
            .fg-3 { color: #00aaaa; }
            .fg-4 { color: #aa0000; }
            .fg-5 { color: #aa00aa; }
            .fg-6 { color: #aa5500; }
            .fg-7 { color: #aaaaaa; }
            .fg-8 { color: #555555; }
            .fg-9 { color: #5555ff; }
            .fg-10 { color: #55ff55; }
            .fg-11 { color: #55ffff; }
            .fg-12 { color: #ff5555; }
            .fg-13 { color: #ff55ff; }
            .fg-14 { color: #ffff55; }
            .fg-15 { color: #ffffff; }
            .bg-0 { background-color: #000000; }
            .bg-1 { background-color: #0000aa; }
            .bg-2 { background-color: #00aa00; }
            .bg-3 { background-color: #00aaaa; }
            .bg-4 { background-color: #aa0000; }
            .bg-5 { background-color: #aa00aa; }
            .bg-6 { background-color: #aa5500; }
            .bg-7 { background-color: #aaaaaa; }
            .bg-8 { background-color: #555555; }
            .bg-9 { background-color: #5555ff; }
            .bg-10 { background-color: #55ff55; }
            .bg-11 { background-color: #55ffff; }
            .bg-12 { background-color: #ff5555; }
            .bg-13 { background-color: #ff55ff; }
            .bg-14 { background-color: #ffff55; }
            .bg-15 { background-color: #ffffff; }
        </style>
        <pre>`;

        let currentFg = 7; // Default white foreground
        let currentBg = 0; // Default black background

        sequences.forEach(seq => {
            if (seq.type === 'text') {
                const classes = [
                    `fg-${this.mapColor(currentFg)}`,
                    `bg-${this.mapColor(currentBg)}`
                ];
                html += `<span class="${classes.join(' ')}">${seq.content}</span>`;
            } else if (seq.type === 'sgr') {
                this.processColorCommand(seq.params, (fg, bg) => {
                    if (fg !== undefined) currentFg = fg;
                    if (bg !== undefined) currentBg = bg;
                });
            }
        });

        html += '</pre>';
        this.shadowRoot.innerHTML = html;
    }

    parseAnsiSequences(content) {
        const sequences = [];
        // Updated regex to handle both ESC sequences and standalone [0m
        const escapeRegex = /(?:\u001b\[([^m]*)m|\[0m)/g;
        let lastIndex = 0;
        let match;

        while ((match = escapeRegex.exec(content)) !== null) {
            if (match.index > lastIndex) {
                sequences.push({
                    type: 'text',
                    content: content.substring(lastIndex, match.index)
                });
            }

            // Handle standalone [0m
            if (match[0] === '[0m') {
                sequences.push({
                    type: 'sgr',
                    params: [0]
                });
            } else if (match[1] === '0') {
                sequences.push({
                    type: 'text',
                    content: '<br>'
                });
            } else {
                sequences.push({
                    type: 'sgr',
                    params: match[1].split(';').map(Number)
                });
            }

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < content.length) {
            sequences.push({
                type: 'text',
                content: content.substring(lastIndex)
            });
        }

        return sequences;
    }

    processColorCommand(params, callback) {
        for (let i = 0; i < params.length; i++) {
            const param = params[i];

            if (param === 38 && params[i + 1] === 2) {
                // Foreground color
                callback(params[i + 2], undefined);
                i += 2;
            } else if (param === 48 && params[i + 1] === 2) {
                // Background color
                callback(undefined, params[i + 2]);
                i += 2;
            } else if (param === 49) {
                // Reset background
                callback(undefined, 0);
            }
        }
    }
}

customElements.define('ansi-viewer', AnsiViewer);