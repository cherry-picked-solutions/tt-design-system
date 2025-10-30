import { html, nothing } from "lit";
import "./header";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Header",
  tags: ["autodocs"],
  component: "tt-header",
  render: (args) =>
    html`<tt-header variant=${args.variant || nothing}>
      ${args.label}
    </tt-header>`,
  args: {
    label: "Component Label",
    variant: "",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
