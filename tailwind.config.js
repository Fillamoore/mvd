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
        // Custom lilac color palette
        'lilac': {
          100: '#f5f3ff',  // Very light lilac (response cards)
          200: '#ede9fe',  // Light lilac (scenario card)
          300: '#ddd6fe',  // Medium lilac (response border)
          400: '#c4b5fd',  // Darker lilac (scenario border, hover)
          500: '#a396d4',  // Darker lilac (scenario border, hover)
          900: '#4c1d95',  // Dark lilac (text)
        },
        'lilac-charcoal-f': '#1a1a1a',     // Foundation: near-black, minimal lilac
        'lilac-charcoal-i': '#2b1f33',     // Intermediate: deeper lilac infusion
        'lilac-charcoal-a': '#3a2644',     // Advanced: rich lilac-charcoal blend
      },
      borderWidth: {
        '1': '1px', // Add this line for a 1px border
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}