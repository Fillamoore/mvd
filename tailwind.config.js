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
        // Darker indigo shades
        'indigo-50': '#eef2ff',    // Lighter response background
        'indigo-100': '#e0e7ff',   // Darker scenario background  
        'indigo-200': '#c7d2fe',   // Response border
        'indigo-300': '#a5b4fc',   // Scenario border & hover
      },
    },
  },
  plugins: [],
}