import { LitElement, css, html } from "lit";

/**
 * @tag tt-menu
 * @summary A menu component with horizontal and vertical options.
 *
 */

export class TTMenu extends LitElement {
  static properties = {
    layout: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`<nav><slot></slot></nav>`;
  }
}

customElements.define("tt-menu", TTMenu);
