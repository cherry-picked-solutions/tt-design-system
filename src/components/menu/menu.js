import { LitElement, css, html } from "lit";

/**
 * @tag tt-menu
 * @summary A menu component with horizontal and vertical options.
 *
 */

export class TTMenu extends LitElement {
  static properties = {
    _menuItems: { state: true },
  };


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
    return html` <nav
      class="tt-menu ${classMap(classes)}"
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
