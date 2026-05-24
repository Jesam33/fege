import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#d90429",
          hover: "#ef233c",
        },
        card: "#0f0f0f",
        border: "#222222",
        muted: "#a0a0a0",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Arial", "Helvetica", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
