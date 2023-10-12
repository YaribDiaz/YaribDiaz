/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
import animated from 'tailwindcss-animated';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}","./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Abel: ["Abel", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Rajdhani: ["Rajdhani", "sans-serif"],
        Neon:["Tilt Neon", "sans-serif"]
      }
    },
  },
  plugins: [
    nextui(),
    animated
  ],
}

