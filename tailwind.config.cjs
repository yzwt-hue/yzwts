/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6EE7F9',
          600: '#22D3EE',
          700: '#0EA5E9',
        },
        neon: '#00F5D4',
      },
      backgroundImage: {
        'grid': 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        'glow': 'radial-gradient(50% 50% at 50% 50%, rgba(34,211,238,0.2) 0%, rgba(14,165,233,0.05) 100%)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
}


