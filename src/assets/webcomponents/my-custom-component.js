// src/assets/js/my-custom-component.js
class MyCustomComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        p {
          color: red;
        }
      </style>
      <p>This is a custom component!</p>
    `;
  }
}

customElements.define('my-custom-component', MyCustomComponent);