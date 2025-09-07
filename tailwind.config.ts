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
          "10-series": "#45ABFF",
          "9-series": "#48CE6E",
          "11": "#D264B6",
          "61": "#F7CC39",
          "100": "#8D6346",
          "111": "#A64253",
          "141": "#011627",
        },
      },
    },
  },
  plugins: [],
};
