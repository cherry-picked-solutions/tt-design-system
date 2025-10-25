import { classMap } from "lit/directives/class-map.js";
import { LitElement, css, html } from "lit";

/**
 * @tag cherry-button
 * @summary A custom button element.
 *
 * @property {string} variant - The visual style variant of the button. Can be "primary" or "secondary".
 * @property {string} size - The size of the button. Can be "small" or "large".
 * @property {'reset' | 'button' | 'submit'} type - The type of the button. Defaults to 'button'.
 * @attr {'reset' | 'button' | 'submit'} type - The type of the button. Defaults to 'button'.
 *
 * @cssProp --cherry-button-background=var(--color-neutral-darkest) - Background color of the button.
 * @cssProp --cherry-button-background-active=var(--color-neutral-darker) - Background color of the button on hover/focus.
 * @cssProp --cherry-button-text=var(--color-neutral-lightest) - Text color of the button.
 * @cssProp --cherry-button-padding-x=var(--space-sm) - Horizontal padding of the button.
 * @cssProp --cherry-button-padding-y=var(--space-xs) - Vertical padding of the button.
 * @cssProp --cherry-button-radius=var(--space-xxs) - Border radius of the button.
 */
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

    .cherry-button--secondary {
      --cherry-button-background: var(--color-neutral-dark);

      &:is(:hover, :focus) {
        --cherry-button-background-active: var(--color-neutral);
      }
    }

    .cherry-button--lg {
      font-size: calc(var(--font-size-base) * 2.5%);
      padding-block: calc(var(--cherry-button-padding-y) * 2);
      padding-inline: calc(var(--cherry-button-padding-x) * 2);
    }

    .cherry-button--sm {
      font-size: calc(var(--font-size-base) * 0.75);
      padding-block: var(--cherry-button-padding-y);
      padding-inline: var(--cherry-button-padding-x);
    }
  `;

  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    type: { type: String, reflect: true },
  };

  // Internal, default, state for the 'type' property.
  _type = "button";

  get type() {
    return this._type;
  }

  set type(value) {
    const validTypes = ["reset", "button", "submit"];
    const oldVal = this._type;
    if (validTypes.includes(value)) {
      this._type = value;
    } else {
      console.warn(
        `Invalid type "${value}" for cherry-button. Defaulting to "button".`,
      );
      // Default to "button" if invalid.
      this._type = "button";
    }
    // Request an update to re-render the component.
    this.requestUpdate("type", oldVal);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button
        type=${this.type}
        class=${classMap({
          "cherry-button--primary": this.variant === "primary",
          "cherry-button--secondary": this.variant === "secondary",
          "cherry-button--sm": this.size === "small",
          "cherry-button--lg": this.size === "large",
        })}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("cherry-button", CherryButton);
