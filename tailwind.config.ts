// tailwind.config.ts

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
        "brand-green": "#0a4635", // Hijau Tua
        "brand-beige": "#f2e8d8", // Krem/Off-white
        "brand-yellow": "#ffea7f", // Kuning
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Contoh menggunakan font Inter
      },
    },
  },
  plugins: [],
};
export default config;
