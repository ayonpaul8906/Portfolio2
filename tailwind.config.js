/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#020205',
        abyss: '#0A0A12',
        surface: '#10101A',
        border: 'rgba(255,255,255,0.05)',
        cyan: {
          DEFAULT: '#00F0FF',
          dim: '#00C4CC',
          glow: 'rgba(0,240,255,0.15)',
        },
        violet: {
          DEFAULT: '#9B4DCA',
          dim: '#7B2FAA',
          glow: 'rgba(155,77,202,0.15)',
        },
        gold: {
          DEFAULT: '#F2A900',
          dim: '#C88A00',
          glow: 'rgba(242,169,0,0.15)',
        },
        lumen: '#F0EEF5',
        fog: '#5A5A72',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
