import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

export const globalTypes = {
  themes: {
    defaultValue: ["light", "dark"],
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
