/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2DD4BF", // Teal-400
          foreground: "#0F172A",
        },
        secondary: {
          DEFAULT: "#FCD34D", // Amber-300 (Heere the Toucan)
          foreground: "#451A03",
        },
        calm: {
          DEFAULT: "#60A5FA", // Blue-400
          soft: "#EFF6FF",
        },
        sos: {
          DEFAULT: "#FB7185", // Rose-400
          soft: "#FFF1F2",
        },
        background: "#FAFAFA",
        foreground: "#171717",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
