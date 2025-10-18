/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s infinite',
      },
      colors: {
        // Custom lilac color palette
        'lilac': {
          100: '#f5f3ff',  // Very light lilac (response cards)
          200: '#ede9fe',  // Light lilac (scenario card)
          300: '#ddd6fe',  // Medium lilac (response border)
          400: '#c4b5fd',  // Darker lilac (scenario border, hover)
          500: '#a396d4',  // Darker lilac (scenario border, hover)
          600: '#7e73a3',  // Darker lilac (scenario border, hover)
          700: '#685e8c',  // Darker lilac (scenario border, hover)
          800: '#625884',  // Darker lilac (scenario border, hover)
          900: '#4c1d95',  // Dark lilac (text)
        },
        'lilac-charcoal-f': '#1a1a1a',     // Foundation: near-black, minimal lilac
        'lilac-charcoal-i': '#2b1f33',     // Intermediate: deeper lilac infusion
        'lilac-charcoal-a': '#3a2644',     // Advanced: rich lilac-charcoal blend
        'lilac-master-hover-2': '#8764a8',
        'lilac-master-hover-3': '#a992be',
        'lilac-master-hover-4': '#bfa9da',
        'rating-gold': '#ffd700',
        'rating-silver': '#c0c0c0',
        'rating-bronze': '#cd7f32',
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