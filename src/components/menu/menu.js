import { LitElement, css, html } from "lit";
import { classMap } from "lit/directives/class-map.js";

/**
 * @tag tt-menu
 * @summary A menu component with horizontal and vertical options.
 *
 */

export class TTMenu extends LitElement {
  static properties = {
    _menuItems: { state: true },
    inline: { type: Boolean, reflect: true },
  };

  static styles = css`
    :host {
      container-type: inline-size;
      container-name: menu;
    }

    ul,
    ol {
      list-style: none;
      padding-inline-start: 0;
    }

    .tt-menu--inline ul {
      display: flex;
      gap: 1rem; // @TODO: Create setting.
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
