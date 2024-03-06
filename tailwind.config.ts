const {nextui} = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "general-sans": "General Sans",
        "regular-sans":['var(--font-regularGeneral)'],
        "semibold-sans":['var(--font-semiboldSans)'],
        "medium-sans":['var(--font-MediumSans)'],


      },
      fontSize: {
        xl: "20px",
        base: "16px",
        "17xl": "36px",
        "3xl": "22px",
        "10xl": "29px",
        "21xl": "40px",
        "9xl": "28px",
        "5xl": "24px",
        "29xl": "48px",
        lg: "18px",
        "lg-5": "18.5px",
        inherit: "inherit",
      },
      screens: {
        mq975: {
          raw: "screen and (max-width: 975px)",
        },
        mq950: {
          raw: "screen and (max-width: 950px)",
        },
        mq700: {
          raw: "screen and (max-width: 700px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
        mq2xl: {
          raw: "screen and (max-width: 1280px)",
          
        },
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1286px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1496px',

        '3xl': '1532px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        gray: {
          "100": "#7a7a7a",
          "200": "#2d2323",
          "300": "#1b1b1b",
          "400": "#0c0c0c",
          "500": "rgba(255, 255, 255, 0.8)",
          "600": "rgba(255, 255, 255, 0.9)",
        },
        lightgray: {
          "100": "#d7d7d7",
          "200": "rgba(215, 215, 215, 0.5)",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.75)",
          "300": "rgba(217, 217, 217, 0.5)",
          "400": "rgba(217, 217, 217, 0.2)",
          "500": "rgba(217, 217, 217, 0.25)",
          "600": "rgba(217, 217, 217, 0.1)",
        },
        white: "#fff",
        mediumpurple: "#8980f5",
        dimgray: "#544d49",
        slateblue: "#6941c6",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
