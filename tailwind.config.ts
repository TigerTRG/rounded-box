import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      "bebas-regular": ["bebasRegular"]
    },
    colors: {
      "black" : "#000000",
      "white" : "#ffffff",
      "light-brown" : "#f5e8d0",
      "brown": "#ddba8a",
      "blue": "#3a6c7e",
      "dark-blue": "#00303c"
    },
  },
  plugins: [],
};
export default config;
