import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#08080b',
        accent: {
          DEFAULT: '#7C6CFF',
          cyan: '#4CD6D0',
          pink: '#FF6CAB'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' }
        }
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        float: 'float 7s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite'
      },
      backgroundSize: {
        '200%': '200% 200%'
      }
    }
  }
}
