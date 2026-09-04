/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          black: '#0D0D0D',
          dark: '#171717',
          gray: '#262626',
          border: '#333333',
          light: '#F4F4F0',
          amber: '#FF5500',
          yellow: '#FFE600',
          accent: '#FF3300'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        headline: ['"Syne"', 'sans-serif']
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px 0px #0D0D0D',
        'brutal': '5px 5px 0px 0px #0D0D0D',
        'brutal-lg': '8px 8px 0px 0px #0D0D0D',
        'brutal-yellow': '5px 5px 0px 0px #FFE600',
        'brutal-amber': '5px 5px 0px 0px #FF5500',
        'brutal-white': '5px 5px 0px 0px #F4F4F0',
      }
    },
  },
  plugins: [],
}
