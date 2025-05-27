import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";
const { fontFamily } = require("tailwindcss/defaultTheme");
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [relumeTailwindPreset],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#000000",
        },
        text: {
          primary: "#FFFFFF",
          heading: "#FFFFFF",
          secondary: "#000000",
          brand: "#01E194",
        },
        brand: {
          primary: "#01E194",
          shade: "#00CA83",
        },
      },
      fontFamily: {
        sans: ["Cera", ...fontFamily.sans],
      },
      clipPath: {
        "polygon-1": "polygon(0 0vh, 100% 15vh, 100% 60vh, 0% 60vh)",
        "polygon-2": "polygon(0 20vh, 100% 35vh, 100% 75vh, 0% 60vh)",
      },
    },
  },
  plugins: [
    relumeTailwindPreset,
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".clip-polygon-1": {
          clipPath: theme("clipPath.polygon-1"),
        },
        ".clip-polygon-2": {
          clipPath: theme("clipPath.polygon-2"),
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};

export default config;
