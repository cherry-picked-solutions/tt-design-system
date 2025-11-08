import { html, nothing } from "lit";
import "./header";
import "../button/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Header",
  tags: ["autodocs"],
  component: "tt-header",
  render: (args) =>
    html`<tt-header>
      <div slot="start">
        <h1>Hello world</h1>
      </div>
      <nav slot="center">
        <ul className="nav">
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
        </ul>
      </nav>
      <div slot="end">
        <tt-button>Contact Us</tt-button>
      </div>
    </tt-header>`,
  args: {
    variant: "",
    label: "Frog",
  },
};

export const Default = {};
