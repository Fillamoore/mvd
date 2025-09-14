/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add very light indigo shades
        'indigo-25': '#f8fafc',
        'indigo-50': '#eef2ff',
        'indigo-100': '#e0e7ff',
        'indigo-200': '#c7d2fe',
      },
    },
  },
  plugins: [],
}