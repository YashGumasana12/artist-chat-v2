import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'navblue':'#283B5B',
        'darkblue':'#21324E',
        'activelink':'#8B98AB',
        'navlink':'#5B6F90',
        'chatbg':'#DDDFEB'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
};
export default config;
