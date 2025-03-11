// Define the web component
class TextareaNoBS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const placeholder = this.getAttribute('placeholder') || '';

    this.shadowRoot.innerHTML = `
          <style>
              :host {
                  display: block;
              }
              textarea {
                  width: 100%;
                  max-width:40rem;
                  height:5lh;
                  margin:0 auto;
                  padding: 10px;
              }
          </style>
          <textarea placeholder="${placeholder}"></textarea>
      `;

    // Get the textarea element
    this.textarea = this.shadowRoot.querySelector('textarea');

    // Bind the event handler
    this.handleKeyDown = this.handleKeyDown.bind(this);

    // Add event listener
    this.textarea.addEventListener('keydown', this.handleKeyDown);
  }

  // Event handler to prevent backspace
  handleKeyDown(event) {
    if (event.key === 'Backspace' || event.keyCode === 8) {
      event.preventDefault();
    }
  }

  // Getter for the textarea value
  get value() {
    return this.textarea.value;
  }

  // Setter for the textarea value
  set value(val) {
    this.textarea.value = val;
  }

  // Handle attribute changes
  static get observedAttributes() {
    return ['placeholder'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'placeholder' && this.textarea) {
      this.textarea.placeholder = newValue;
    }
  }
}

// Register the custom element
customElements.define('textarea-nobs', TextareaNoBS);