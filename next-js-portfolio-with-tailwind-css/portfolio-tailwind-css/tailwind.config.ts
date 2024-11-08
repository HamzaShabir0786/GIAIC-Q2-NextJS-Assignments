import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-nav": "0px 2px 3px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-to-bottom": "linear-gradient(to bottom, white, #9557fa)",
      },
      // backgroundImage: {
      //   "custom-bg": 'url("/image/backgroundPic.png")',
      // },
      // backgroundSize: {
      //   "custom-size": "8rem 1.7rem",
      // },
      // backgroundPosition: {
      //   "center-x": "center ", // Adjusted to center on both axes
      // },
    },
  },
  plugins: [],
};
export default config;
