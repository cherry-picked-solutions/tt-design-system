import { html } from "lit";
import "./card";
import "../button/button";

export default {
  title: "Components/Card",
  component: "tt-card",
  render: (args) => html`
    <tt-card>
      <div slot="header"><h1 class="tt-card__title">Hello world</h1></div>
      <div slot="media">
        <img
          src="https://picsum.photos/seed/1766949180530/500/300"
          height="300"
          width="500"
          alt="A placeholder image"
        />
      </div>
      <div slot="body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          iste nam nostrum laborum vel ullam quidem cumque asperiores?
        </p>
      </div>
      <div slot="footer">
        <tt-button>Visit Omaha</tt-button>
      </div>
    </tt-card>
  `,
  args: {},
};

export const Default = {};
