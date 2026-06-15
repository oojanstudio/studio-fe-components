import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  staticDirs: ["../static"],
  features: {
    sidebarOnboardingChecklist: false,
  },
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-svelte-csf",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
};

export default config;
