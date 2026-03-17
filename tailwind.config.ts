import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        changa: ["var(--font-changa-one)"],
        jaro: ["var(--font-jaro)"],
        poppins: ["var(--font-poppins)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },

  plugins: [],
};

export default config;
