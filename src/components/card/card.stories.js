import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { html } from "lit";
import "./card";
import "../button/button";

export default {
  title: "Components/Card",
  component: "tt-card",
};

const defaultImage = `<img
  slot="media"
  src="https://picsum.photos/seed/1766949180530/500/300"
  height="300"
  width="500"
  alt="A placeholder image"
/>`;

export const Default = {
  render: () =>
    html` <tt-card>
      <h1 slot="header" class="tt-card__title">Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste
        nam nostrum laborum vel ullam quidem cumque asperiores?
      </p>
      <tt-button slot="footer">Visit Omaha</tt-button>
    </tt-card>`,
};

export const WithMedia = {
  args: {
    media: defaultImage,
  },
  render: (args) =>
    html` <tt-card>
      <h1 slot="header" class="tt-card__title">Hello world</h1>
      ${args.media ? unsafeHTML(args.media) : html`${defaultImage}`}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iste
        nam nostrum laborum vel ullam quidem cumque asperiores?
      </p>
      <tt-button slot="footer">Visit Omaha</tt-button>
    </tt-card>`,
};
