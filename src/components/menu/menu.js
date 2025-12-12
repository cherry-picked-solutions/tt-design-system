import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";

/**
 * @tag tt-menu
 * @summary A menu component that renders a `<nav>` element with horizontal and vertical options.
 *
 * @attr {boolean} inline - Horizontal (inline) or block style menu.
 *
 *  @prop {Array<Element>} _menuItems - (private) Internal state of slotted menu items.
 *
 * @cssprop [--tt-menu-gap=var(--space-md)] - The space between menu items.
 * @cssprop [--tt-menu-color=var(--link-text-color)] - The menu item colors.
 * @cssprop [--tt-menu-color-active=var(--link-text-color-active)] - The active/hover/focus color of menu items.
 *
 */

export class TTMenu extends LitElement {
  static properties = {
    _menuItems: { state: true },
    inline: { type: Boolean, reflect: true },
  };

  static styles = css`
    :host {
      --tt-menu-gap: var(--space-md);
      --tt-menu-color: var(--link-text-color);
      --tt-menu-color-active: var(--link-text-color-active);

      display: block;
    }

    ul,
    ol {
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: var(--tt-menu-gap);
      padding-inline-start: 0;
      margin-block: 0;
    }

    a {
      color: inherit;
      text-decoration: none;

      &:is(:hover, :active, :focus) {
        color: var(--tt-menu-color-active);
      }
    }

    @media screen and (min-width: 768px) {
      .tt-menu--inline ul {
        flex-direction: row;
      }
    }
  `;

  constructor() {
    super();
    this._menuItems = [];
  }

  get _slottedChildren() {
    const slot = this.shadowRoot.querySelector("slot");

    if (!slot) return [];

    return slot.assignedElements({ flatten: true });
  }

  handleSlotChange = (e) => {
    const childNodes = e.target.assignedElements({ flatten: true });

    if (childNodes.length) {
      this._menuItems = childNodes;
    }
  };

  render() {
    const classes = { "tt-menu--inline": this.inline };

    return html` <nav
      class="tt-menu ${classMap(classes)}"
      inline=${this.inline}
    >
      <ul>
        ${this._menuItems.map(
          (_menuItem, index) =>
            html`<li data-index="${index}">${_menuItem}</li>`,
        )}
      </ul>

      <slot @slotchange=${this.handleSlotChange}></slot>
    </nav>`;
  }
}

customElements.define("tt-menu", TTMenu);
