// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import lit from "eslint-plugin-lit";

export default defineConfig([
  {
    // ...litConfig["flat/recommended"],
    files: ["src/components/**/*.{js,mjs,cjs}"],
    plugins: { js, lit },
    extends: ["js/recommended", "lit/recommended"],
    languageOptions: { globals: globals.browser },
  },
  eslintConfigPrettier,
  ...storybook.configs["flat/recommended"],
]);
