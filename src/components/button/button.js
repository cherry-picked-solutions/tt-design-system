import { LitElement, html } from "lit";

import "./button.css";

export class CherryButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    label: { type: String },
    onClick: { type: Function },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <button type="button" .class=${["test"]}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("cherry-button", CherryButton);
