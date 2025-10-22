import { html, nothing } from "lit";
import "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Example/Button",
  tags: ["autodocs"],
  component: "cherry-button",
  render: (args) =>
    html`<cherry-button variant=${args.variant || nothing}>
      ${args.label}
    </cherry-button>`,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: {
    label: "Button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    variant: "primary",
  },
};

export const Secondary = {};

export const Large = {
  args: {
    size: "large",
  },
};

export const Small = {
  args: {
    size: "small",
  },
};
