/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        minecraft: {
          black: '#1D1D1D',
          darker: '#0D0D0D',
          dark: '#2D2D2D',
          light: '#3D3D3D',
          accent: '#4a9eff',
          gold: '#FFAA00',
          emerald: '#00FF00',
          error: '#FF0000',
        }
      },
      fontFamily: {
        minecraft: ['Minecraft', 'sans-serif'],
      },
      boxShadow: {
        'minecraft': 'inset -2px -4px rgba(0,0,0,0.4), inset 2px 2px rgba(255,255,255,0.1)',
        'minecraft-hover': 'inset -2px -4px rgba(0,0,0,0.2), inset 2px 2px rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
}