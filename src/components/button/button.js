import { classMap } from "lit/directives/class-map.js";
import { LitElement, css, html } from "lit";

/**
 * @tag tt-button
 * @summary A custom button element.
 *
 * @property {string} variant - The visual style variant of the button. Can be "primary" or "secondary".
 * @property {string} size - The size of the button. Can be "small" or "large".
 * @property {'reset' | 'button' | 'submit'} type - The type of the button. Defaults to 'button'.
 * @attr {'reset' | 'button' | 'submit'} type - The type of the button. Defaults to 'button'.
 *
 * @cssprop [--tt-button-background=var(--color-neutral-darkest)] - Background color of the button.
 * @cssprop [--tt-button-background-active=var(--color-neutral-darker)] - Background color of the button on hover/focus.
 * @cssprop [--tt-button-text=var(--color-neutral-lightest)] - Text color of the button.
 * @cssprop [--tt-button-padding-x=var(--space-sm)] - Horizontal padding of the button.
 * @cssprop [--tt-button-padding-y=var(--space-xs)] - Vertical padding of the button.
 * @cssprop [--tt-button-radius=var(--space-xxs)] - Border radius of the button.
 *
 */

export class TTButton extends LitElement {
  static styles = css`
    :host {
      --tt-button-background: var(--color-neutral-darkest);
      --tt-button-background-active: var(--color-neutral-darker);
      --tt-button-text: var(--color-neutral-lightest);
      --tt-button-padding-x: var(--space-sm);
      --tt-button-padding-y: var(--space-xs);
      --tt-button-radius: var(--space-xxs);
      display: inline-flex;
      width: auto;
    }

    button {
      background-color: var(--tt-button-background);
      border: none; /* @TODO Create setting */
      border-radius: var(--tt-button-radius);
      color: var(--tt-button-text);
      cursor: pointer;
      padding-block: var(--tt-button-padding-y);
      padding-inline: var(--tt-button-padding-x);

      &:hover {
        background-color: var(--tt-button-background-active);
      }
    }

    .tt-button--secondary {
      --tt-button-background: var(--color-neutral-dark);

      &:is(:hover, :focus) {
        --tt-button-background-active: var(--color-neutral);
      }
    }

    .tt-button--lg {
      font-size: calc(var(--font-size-base) * 2.5%);
      padding-block: calc(var(--tt-button-padding-y) * 2);
      padding-inline: calc(var(--tt-button-padding-x) * 2);
    }

    .tt-button--sm {
      font-size: calc(var(--font-size-base) * 0.75);
      padding-block: var(--tt-button-padding-y);
      padding-inline: var(--tt-button-padding-x);
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
        `Invalid type "${value}" for tt-button. Defaulting to "button".`,
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
          "tt-button--primary": this.variant === "primary",
          "tt-button--secondary": this.variant === "secondary",
          "tt-button--sm": this.size === "small",
          "tt-button--lg": this.size === "large",
        })}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("tt-button", TTButton);
