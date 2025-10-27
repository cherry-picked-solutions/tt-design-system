A design system built with [Lit](https://lit.dev/) web components.

## Getting Started

This project uses [Storybook](https://storybook.js.org/) for component development, documentation, and testing.

```bash
tt-design-system/
├── .storybook/               # StorybookJS config files.
├── src/                      # Source code for the design system.
│   ├── assets/               # Static assets (images, fonts, etc). Includes global design token CSS.
└── └── components/           # UI components with stories.
```

### Accessibility

Our a11y baseline is WCAG 2.2 AA.


### Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/cherry-picked-solutions/tt-design-system.git
cd tt-design-system
npm install
```

### Running Storybook

See and develop components in Storybook.

```bash
npm start

# Alternatively:
# npm run storybook
```

### Building Storybook

Build a static, hostable, version of the component library. Useful for docs.

```bash
npm run build-storybook
```

## Components

You can find components in `src/components`. Use JSDoc style comments for clear documentation, include CSSProps for theme settings.
