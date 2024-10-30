import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "smoky-purple": "#758195",
        "graphite-gray": "#46494E",
        "neutral-gray": "#5C5C5C",
        "border-gray": "#9A9A9A",
        "light-cool-gray": "#F6F6F7",
        "background-gray": "#A2A2A2",
        "green-light": "#4EBB46",
        "green-opasity": "#6CB767",
        "green": "#15950C"
      }
    },
  },
  plugins: [],
};
export default config;