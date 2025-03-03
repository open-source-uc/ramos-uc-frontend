import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // "selector" is invalid, should be "class" or "media"
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        celeste: "#0176DE",
        azul: "#173F8A",
        azul_oscuro: "#03122E",
        amarillo: "#FEC60D",
        amarillo_oscuro: "#E3AE00",
      },
    },
  },
};

export default config;
