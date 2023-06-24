/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ula: {
          yellow: "#FFB81C",
          blue: "#003DA5",
          darkblue: "#0A3166",
        },
      },
    },
  },
  plugins: [],
};
