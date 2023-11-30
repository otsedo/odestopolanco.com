import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1326px",
      xl: "1800px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(220, 24%, 7%)",
        lightBlue: "hsl(221, 100%, 91%)",
        primaryBlue: "#314FE6",
        secondaryBlue: "#57B4FD",
      },
    },
  },
  plugins: [],
};
export default config;
