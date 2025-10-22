import { LitElement, css, html } from "lit";
import "../../assets/styles/global";

import "./button.css";

export class CherryButton extends LitElement {
  static styles = css`
    :host {
      font-family: var(--font-sans);
    }
  `;

  static properties = {
    variant: { type: String },
    size: { type: String },
    label: { type: String },
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
