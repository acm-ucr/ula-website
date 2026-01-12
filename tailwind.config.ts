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
          "10-series": "#647BBA",
          "9-series": "#75BA96",
          "11": "#9764C4",
          "61": "#EDB778",
          "100": "#B78852",
          "111": "#BD5F5F",
          "141": "#458897",
          "153": "#9764C4",
        },
      },
    },
  },
  plugins: [],
};
