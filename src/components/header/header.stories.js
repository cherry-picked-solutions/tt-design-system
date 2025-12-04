import { html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "./header";
import "../menu/menu";
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
      <div slot="center">
        <tt-menu inline>
          ${args.slotCenter
            ? html`${unsafeHTML(args.slotCenter)}`
            : html`
                <tt-menu-item href="javascript:void(0)">Docs</tt-menu-item>
                <tt-menu-item href="javascript:void(0)">About</tt-menu-item>
                <tt-menu-item href="javascript:void(0)">Contact</tt-menu-item>
                <tt-menu-item href="javascript:void(0)">Blog</tt-menu-item>
              `}
        </tt-menu>
      </div>
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
