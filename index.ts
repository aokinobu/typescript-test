import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class XCustom extends PolymerElement {
  static get template(){
    return html`
      <button id="id" on-click="handleClick">Kick Me</button>
    `;
  }
  handleClick() {
    console.log('Ow!');
    console.log(this.shadowRoot);
    console.log(this.shadowRoot.innerHTML);
    console.log(this.shadowRoot.querySelector("#id"));
  }
}
customElements.define('x-custom', XCustom);