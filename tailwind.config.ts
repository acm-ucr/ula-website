/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ula: {
          "blue-primary": "#003DA5",
          "yellow-primary": "#FFB81C",
          "blue-accent": "#45ABFF",
          "yellow-accent": "#FBC754",
          "blue-highlight": "#E7F3FF",
        },
      },
    },
  },
  plugins: [],
};
