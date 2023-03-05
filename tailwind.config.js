/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#0f171e",
        secondary: "#1a242f",
        fontPrimary: "#ffffff",
        fontSecondary: "#79b8f3",
      },
    },
  },
  plugins: [],
};
