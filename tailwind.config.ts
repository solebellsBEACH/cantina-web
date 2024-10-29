import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        backgroundColor: "var(--background-color)",
        text: "var(--text-color)",
        buttonHover: "var(--button-hover-color)",
        border: "var(--border-color)",
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
        info: "var(--info-color)",
        lightGray: "var(--light-gray)",
        darkGray: "var(--dark-gray)",
        muted: "var(--muted-color)",
        highlight: "var(--highlight-color)",
        overlay: "var(--overlay-color)",
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};

export default config;
