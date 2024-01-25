// IMPORTATIONS FOR TAILWIND CONFIGURATION.

import type { Config } from "tailwindcss";

// INSTANTIATE TAILWIND CONFIGURATION ACROSS PROJECT.

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['DINPro', 'sans-serif'],
        main: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideInFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInFromBot: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft .5s ease-out 1',
        slideInFromBot: 'slideInFromBot .5s ease-out 1',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
