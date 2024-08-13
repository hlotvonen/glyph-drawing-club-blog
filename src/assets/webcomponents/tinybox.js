class TinyBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          display: flex;
          width: 100%;
          height: 100%;
          container-type:inline-size;
        }
        #container {
          display: flex;
          width: 100%;
          height: 100%;
        }
        #editor {
          display: flex;
          flex-direction: column;
          width: 50%;
          height: 100%;
          background: #1d1d1d;
          resize: horizontal;
          overflow: auto;
        }
        #editor div:last-child {
          flex-grow:1;
        }
        #output {
          display:flex;
          background:white;
          flex-grow: 1;
          overflow: auto;
        }
        #htmlInputContainer, #cssInputContainer, #jsInputContainer {
          display:flex;
          height: calc(100% / 3);
          position: relative;
          padding: 8px;
          resize: vertical;
          overflow: auto;
        }
        textarea {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          margin: 0;
          padding: 4px;
          background-color: black;
          border-radius: 4px;
          color: #f1f1f1;
          font-family: "Monaspace", monospace;
          font-feature-settings: "colr", "calt";
          line-height: 1.4;
          resize: none;
          overflow: auto;
        }
        iframe { 
          border:none;
          flex:1;
        }
        button {
          position: absolute;
          bottom: 14px;
          right: 14px;
          padding: 4px 8px;
          border-radius: 2px;
          cursor: pointer;
          background-color: #d1d1d1;
          color: #1d1d1d;
          opacity:0.6;
        }
        button:hover {
          opacity:1;
        }
        @container (max-width: 900px) {
          #container {
            flex-direction: column;
          }
          #editor {
            width: 100%;
            height: 50%;
            resize: vertical;
          }
        }
        /* Hide slots */
        ::slotted([slot="html"]),
        ::slotted([slot="css"]),
        ::slotted([slot="js"]) {
          display: none;
        }
      </style>
      <div id="container">
        <div id="editor">
          <div id="htmlInputContainer">
            <textarea id="htmlInput" placeholder="Enter HTML here..."></textarea>
          </div>
          <div id="cssInputContainer">
            <textarea id="cssInput" placeholder="Enter CSS here..."></textarea>
          </div>
          <div id="jsInputContainer">
            <textarea id="jsInput" placeholder="Enter JavaScript here..."></textarea>
            <button id="runButton">Run</button>
          </div>
        </div>
        <div id="output">
          <iframe id="output_view"></iframe>
        </div>
      </div>
      <slot name="html"></slot>
      <slot name="css"></slot>
      <slot name="js"></slot>
    `;

    this.htmlInput = this.shadowRoot.getElementById('htmlInput');
    this.cssInput = this.shadowRoot.getElementById('cssInput');
    this.jsInput = this.shadowRoot.getElementById('jsInput');
    this.runButton = this.shadowRoot.getElementById('runButton');

    this.output_view = this.shadowRoot.getElementById('output_view');
    this.editor = this.shadowRoot.getElementById('editor');
    this.container = this.shadowRoot.getElementById('container');

    this.htmlInput.addEventListener('input', () => this.updateOutput());
    this.cssInput.addEventListener('input', () => this.updateOutput());
    this.runButton.addEventListener('click', () => this.updateOutput());
    this.htmlInput.addEventListener('keydown', (e) => this.handleTab(e));
    this.cssInput.addEventListener('keydown', (e) => this.handleTab(e));
    this.jsInput.addEventListener('keydown', (e) => this.handleTab(e));
    window.addEventListener('resize', () => this.clearInlineStyles());

    // We can't use font-face directly inside web components, so we have to do this.
    const EDITOR_FONT = `@font-face {
      font-family: 'Monaspace';
      src: url('/assets/fonts/MonaspaceKrypton-SyntaxHighlighter-Regular.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }`;
    if (document.querySelector('style[data-description="tinybox-font-face"]')) {
      return;
    }
    const style = document.createElement('style');
    style.dataset.description = 'tinybox-font-face';  
    style.appendChild(document.createTextNode(EDITOR_FONT));
    document.head.appendChild(style);
  }

  handleTab(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const TAB_SIZE = 2;
      // execCommand is deprecated, but still works just fine!
      document.execCommand('insertText', false, ' '.repeat(TAB_SIZE));
    }
  }
  
  updateOutput() {
    const html = this.htmlInput.value;
    const css = this.cssInput.value;
    const js = this.jsInput.value;
    const content = `
      ${html}
      <style>${css}</style>
      <script>${js}</script>
    `;
    // Put content into the iframe
    const doc = this.output_view.contentDocument;
    doc.open();
    doc.write(content);
    doc.close();
  }
  
  // a kind of a hack, but couldn't think of anything else... see below (connectedCallback)
  decodeHTMLEntities(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }
  getRawHTML(element) {
    return this.decodeHTMLEntities(element.innerHTML);
  }

  connectedCallback() {
    const htmlSlot = this.shadowRoot.querySelector('slot[name="html"]');
    const cssSlot = this.shadowRoot.querySelector('slot[name="css"]');
    const jsSlot = this.shadowRoot.querySelector('slot[name="js"]');

    const htmlNodes = htmlSlot.assignedNodes();
    const cssNodes = cssSlot.assignedNodes();
    const jsNodes = jsSlot.assignedNodes();

    // Get slot contents as plain text. 
    // HTML requires extra care because 
    // ...textContent doesn't get HTML tags, 
    // ...while innerHTML encodes &, <, > and " as character entities.
    const htmlContent = htmlNodes.map(node => this.getRawHTML(node)).join('').trim();
    const cssContent = cssNodes.map(node => node.textContent).join('').trim();
    const jsContent = jsNodes.map(node => node.textContent).join('').trim();

    // Put HTML, CSS, and JS content as plain text into textareas
    this.htmlInput.value = htmlContent || '';
    this.cssInput.value = cssContent || '';
    this.jsInput.value = jsContent || '';

    this.updateOutput();
  }

  //css resize sets height and width INLINE, so we need to clear them if user resizes the window
  clearInlineStyles() {
    if (this.container.offsetWidth < 900) {
      this.editor.style.width = '';
    } else {
      this.editor.style.height = '';
    }
  }
}
customElements.define('tiny-box', TinyBox);