/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'monster-bg': '#0a0a0a',
        'monster-card': '#111111',
        'monster-border': '#1f1f1f',
      },
    },
  },
  plugins: [],
}