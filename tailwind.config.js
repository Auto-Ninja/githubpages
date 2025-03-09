/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Custom primary color
        secondary: '#1E3A8A', // Custom secondary color
        accent: '#EC4899', // Custom accent color
        background: '#F3F4F6', // Custom background color
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Custom font
        heading: ['Poppins', ...defaultTheme.fontFamily.sans], // Custom heading font
      },
    },
  },
  plugins: [],
}

