import { LitElement, css, html } from "lit";

/**
 * @tag tt-menu
 * @summary A menu component with horizontal and vertical options.
 *
 */

export class TTMenuItem extends LitElement {
  static properties = {
    href: { type: String, reflect: true },
  };

  static styles = css`
    :host {
    }
  `;

  constructor() {
    super();
  }

  render() {
    const hasSubmenu = this.querySelector("tt-menu") !== null;

    return html`
      ${hasSubmenu
        ? html`
            <div class="tt-menu-item">
              <button
                class="tt-menu__button"
                @click=${this._toggle}
                aria-expanded="${this.open}"
              >
                <slot name="label"></slot>
              </button>
              <div class="tt-submenu" ?hidden=${!this.open}>
                <slot></slot>
              </div>
            </div>
          `
        : html`
            <a href="${this.href}" class="tt-menu__link"><slot></slot></a>
          `}
    `;
  }

  _toggle() {
    this.open = !this.open;
  }
}

customElements.define("tt-menu-item", TTMenuItem);
