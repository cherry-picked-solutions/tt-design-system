import { LitElement, html } from "lit";
import styles from "./menu-item.css";

/**
 * @tag tt-menu
 * @summary A menu component with horizontal and vertical options.
 *
 * @cssprop [--tt-menu-item-color=var(--link-text-color)] - The menu item colors.
 * @cssprop [--tt-menu-item-color-active=var(--link-text-color-active)] - The active/hover/focus color of menu items.
 */

export class TTMenuItem extends LitElement {
  static properties = {
    href: { type: String, reflect: true },
  };

  static styles = [styles];

  constructor() {
    super();
  }

  render() {
    const hasSubmenu = this.querySelector("tt-menu") !== null;
    const classes = { "tt-menu--has-submenu": this.hasSubmenu };

    const subnavTemplate = html`
      <div class="tt-menu-item ${classes}">
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
    `;

    return html`
      ${hasSubmenu
        ? subnavTemplate
        : html`
            <a href="${this.href}" class="tt-menu__link">
              <slot></slot>
            </a>
          `}
    `;
  }

  _toggle() {
    this.open = !this.open;
  }
}

customElements.define("tt-menu-item", TTMenuItem);
