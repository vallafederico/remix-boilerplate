import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      red: "#f00",
    },
    fontSize: {
      base: "12px",
    },
    extend: {
      spacing: {
        gx: "5vw",
        gy: "2em",
      },
    },
  },
  plugins: [],
} satisfies Config;
