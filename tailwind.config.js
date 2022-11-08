/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#ef4444",
        secondary: "#64748b",
        dark: "#0f172a"
      },
      fontFamily: {
        inter: ["Inter"]
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}