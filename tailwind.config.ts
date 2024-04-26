import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,mdx,ts,tsx}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
  theme: {
    extend: {},
  },
};

export default config;
