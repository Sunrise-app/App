/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    // Add other paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
