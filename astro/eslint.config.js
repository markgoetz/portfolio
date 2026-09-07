import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: { react: pluginReact },
    extends: [pluginReact.configs.flat.recommended],
  },
  {
    files: ["**/*.astro"],
    plugins: { astro: eslintPluginAstro },
    extends: ["astro/flat/jsx-a11y-recommended"],
  },
]);
