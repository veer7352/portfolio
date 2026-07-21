/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#030014",
          card: "#0b0728",
          border: "#1d193b"
        },
        neon: {
          blue: "#00f0ff",
          purple: "#bd00ff",
          cyan: "#00ffd8"
        }
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 240, 255, 0.4)',
        'glow-purple': '0 0 15px rgba(189, 0, 255, 0.4)',
        'glow-cyan': '0 0 15px rgba(0, 255, 216, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00f0ff 0%, #bd00ff 50%, #00ffd8 100%)',
        'dark-gradient': 'radial-gradient(circle at 50% 50%, #0a052e 0%, #030014 100%)',
      }
    },
  },
  plugins: [],
}

