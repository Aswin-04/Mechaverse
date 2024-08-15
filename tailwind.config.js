  import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      colors: {
        'clr': {
          50: 'var(--text-50)',
          100: 'var(--text-100)',
          200: 'var(--text-200)',
          300: 'var(--text-300)',
          400: 'var(--text-400)',
          500: 'var(--text-500)',
          600: 'var(--text-600)',
          700: 'var(--text-700)',
          800: 'var(--text-800)',
          900: 'var(--text-900)',
          950: 'var(--text-950)',
        },
        'primary': "#90e7e9",
        "secondary": "#1d3392",
        "accent": "#5341d9",
        "tc": "#b1fbf1",
        "hc": "#D7F7F5",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "slate-gray": "#6D6D6D",
        "card" : "rgba(4,11,20,255)",
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'linear-primary-secondary': 'linear-gradient(#90e8e9, #1d3291)',
        'linear-primary-accent': 'linear-gradient(#90e8e9, #513fd9)',
        'linear-secondary-accent': 'linear-gradient(#1d3291, #513fd9)',
        'radial-primary-secondary': 'radial-gradient(#90e8e9, #1d3291)',
        'radial-primary-accent': 'radial-gradient(#90e8e9, #513fd9)',
        'radial-secondary-accent': 'radial-gradient(#1d3291, #513fd9)',
        'custom-gradient-120': 'linear-gradient(120deg, rgb(144, 232, 233), rgb(81, 63, 217))',
      },

      screens: {
        "xxs": "375px",
        "xs": "425px",
        "wide": "1440px"
      },

      textShadow: {
        "glow": '0 0 5px rgba(144, 232, 233, 1), 0 0 10px rgba(81, 63, 217, 1)',
      },
      gridTemplateColumns: {
        // Counter-card-grid
        'counter-card': 'repeat(4, minmax(60px, 1fr))',
      },
      
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-glow': {
          textShadow:
            '0 0 5px rgba(144, 232, 233, 1), 0 0 10px rgba(81, 63, 217, 1)',
        },
      });
    },
  ],

  
}

