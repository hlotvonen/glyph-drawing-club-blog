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
          max-width: 40rem;
          height: 5lh;
          margin: 0 auto;
          padding: 10px;
          box-sizing: border-box;
        }
      </style>
      <textarea placeholder="${placeholder}"></textarea>
    `;

    // Get the textarea element
    this.textarea = this.shadowRoot.querySelector('textarea');

    // Bind the event handler
    this.handleInput = this.handleInput.bind(this);
    this.lastValue = '';

    // Add event listener
    this.textarea.addEventListener('input', this.handleInput);
    
    // Store initial value
    this.lastValue = this.textarea.value;
  }

  // Event handler to catch all input including backspace
  handleInput(event) {
    // If the new length is less than the previous length, backspace was likely used
    if (this.textarea.value.length < this.lastValue.length) {
      // Restore the previous value
      this.textarea.value = this.lastValue;
      
      // Optionally, move the cursor to the end
      this.textarea.selectionStart = this.textarea.value.length;
      this.textarea.selectionEnd = this.textarea.value.length;
    } else {
      // Update the last value with the new value
      this.lastValue = this.textarea.value;
    }
  }

  // Getter for the textarea value
  get value() {
    return this.textarea.value;
  }

  // Setter for the textarea value
  set value(val) {
    this.textarea.value = val;
    this.lastValue = val; // Update lastValue as well
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

  // Clean up event listeners when element is removed
  disconnectedCallback() {
    this.textarea.removeEventListener('input', this.handleInput);
  }
}

// Register the custom element
customElements.define('textarea-nobs', TextareaNoBS);