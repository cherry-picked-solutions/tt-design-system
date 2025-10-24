import { LitElement, css, html } from "lit";

export class CherryButton extends LitElement {
  static styles = css`
    :host {
      --cherry-button-background: var(--color-neutral-darkest);
      --cherry-button-background-active: var(--color-neutral-darker);
      --cherry-button-text: var(--color-neutral-lightest);
      --cherry-button-padding-x: var(--space-sm);
      --cherry-button-padding-y: var(--space-xs);
      --cherry-button-radius: var(--space-xxs);
      display: inline-flex;
      width: auto;
    }

    button {
      background-color: var(--cherry-button-background);
      border: none; /* @TODO Create setting */
      border-radius: var(--cherry-button-radius);
      color: var(--cherry-button-text);
      cursor: pointer;
      padding-block: var(--cherry-button-padding-y);
      padding-inline: var(--cherry-button-padding-x);

      &:hover {
        background-color: var(--cherry-button-background-active);
      }
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
      <button type="button">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("cherry-button", CherryButton);
