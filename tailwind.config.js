import type { Config } from "tailwindcss";
import relumeTailwindPreset from "@relume_io/relume-tailwind";

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
          primary: "#000000", // Your default background color
        },
        text: {
          primary: "#FFFFFF", // Your default text color
          heading: "#FFFFFF", // Default heading color
          secondary: "#000000",
          brand: "#01E194"
        },
        brand: {
          primary: "#01E194",
          shade: "#00CA83"
        }
      },
    },
  },
};

export default config;