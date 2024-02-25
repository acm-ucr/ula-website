/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ula: {
          yellow: "#FFB81C",
          blue: "#003DA5",
          darkblue: "#0A3166",
          lightGray: "#EEEEEE",
          darkGray: "#616161",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
