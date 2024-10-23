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
        dark: "#16161a",
        primary: "#7f5af0",
      },
      fontSize: {
        "2.5xl": ["28px", "32px"],
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
