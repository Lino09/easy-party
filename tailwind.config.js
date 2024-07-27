/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ez-base': '#060312',
        'ez-blue': '#0BBEE5',
        'ez-pink': '#FF14BD',
      }
    },
  },
  plugins: [],
};
