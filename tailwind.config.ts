import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom breakpoint for extra small screens
        'sm': '640px',  // Default small screens
        'md': '768px',  // Default medium screens
        'lg': '1024px', // Default large screens
        'xl': '1280px', // Default extra-large screens
        '2xl': '1600px' // Default 2xl screens
       // Custom breakpoint for very large screens
      },
      container: {
        center: true, // centers the container by default
        padding: '2rem', // adds padding around the container

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whitepink:'#FEEDF7',
        pink:'#F82BA9',
        gray:"#757F95"
      },
    },
  },
  plugins: [  require('flowbite/plugin') ],
};
export default config;
