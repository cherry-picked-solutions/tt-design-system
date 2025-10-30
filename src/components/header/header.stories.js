import { html, nothing } from "lit";
import "./header";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Header",
  tags: ["autodocs"],
  component: "tt-header",
  render: (args) => html`<tt-header> ${args.label} </tt-header>`,
  args: {
    variant: "",
    label: "Frog",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
