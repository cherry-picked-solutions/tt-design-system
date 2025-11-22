import { html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "./header";
import "../button/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Header",
  component: "tt-header",
  render: (args) =>
    html`<tt-header container-max-width=${args.containerMaxWidth || nothing}>
      <div slot="start">
        ${args.slotStart
          ? html`${unsafeHTML(args.slotStart)}`
          : html`<h1>Hello world</h1>`}
      </div>
      <nav slot="center">
        ${args.slotCenter
          ? html`${unsafeHTML(args.slotCenter)}`
          : html`<ul class="nav">
              <li>
                <a href="#">Nav item 1</a>
              </li>
              <li>
                <a href="#">Nav item 2</a>
              </li>
              <li>
                <a href="#">Nav item 3</a>
              </li>
              <li>
                <a href="#">Nav item 4</a>
              </li>
            </ul>`}
      </nav>
      <div slot="end">
        ${args.slotEnd
          ? html`${unsafeHTML(args.slotEnd)}`
          : html`<tt-button>Contact Us</tt-button>`}
      </div>
    </tt-header>`,
  args: {
    containerMaxWidth: null,
    slotStart: null,
  },
};

export const Default = {};

export const Constrained = {
  args: {
    containerMaxWidth: 1000,
    slotStart: "<h1>Constrained width</h1>",
  },
};
