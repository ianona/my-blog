import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "max-width": "100%",
          },
        },
      },
    },
    colors: {
      primary: {
        light: "#85bf80",
        DEFAULT: "#72AB6D",
      },
      gray: colors.gray,
      slate: colors.slate,
      pink: colors.red,
      white: colors.white,
    },
  },
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
