import { LitElement, css, html } from "lit";

/**
 * @tag tt-menu
 * @summary A menu component with horizontal and vertical options.
 *
 * @cssProp --tt-menu-item-color - The optional menu item color.
 * @cssProp --tt-menu-item-color-active - The optional menu item color when active.
 *
 */

export class TTMenuItem extends LitElement {
  static properties = {
    href: { type: String, reflect: true },
  };

  static styles = css`
    :host {
      --tt-menu-item-color: var(--tt-menu-color, var(--link-text-color));
      --tt-menu-item-color-active: var(
        --tt-menu-color-active,
        var(--link-text-color-active)
      );
    }

    a {
      color: inherit;
      text-decoration: none;

      :is(:hover, :active, :focus) {
        color: var(--tt-menu-item-color-active);
      }
    }
  `;

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
