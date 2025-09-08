/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // include root HTML
    "./0x02-tailwind-css/*.html", // include project root HTML
    "./0x02-tailwind-css/src/**/*.{html,js}", // include all in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
