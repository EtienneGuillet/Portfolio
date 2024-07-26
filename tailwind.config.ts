import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        zumthor: {
          50: "#f4f7fa",
          100: "#e2e8f0",
          200: "#d4dde9",
          300: "#b6c7da",
          400: "#93aac7",
          500: "#7991b8",
          600: "#677ca9",
          700: "#5b6c9a",
          800: "#4e5a7f",
          900: "#424b66",
          950: "#2b3040",
        },
      },
    },
  },
  plugins: [],
};
export default config;
