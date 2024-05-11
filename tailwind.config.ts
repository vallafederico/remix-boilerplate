import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
