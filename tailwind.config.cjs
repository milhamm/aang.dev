const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './contents/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-brand)', ...fontFamily.sans],
        head: ['var(--font-head)', ...fontFamily.sans],
        prompt: ['var(--font-prompt)', ...fontFamily.sans],
        bricolage: ['var(--font-bricolage)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'shimmer-button': {
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translate(0, 0)',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'not-so-boring': {
          '0%': { opacity: 0, filter: 'brightness(1) blur(20px)' },
          '10%': { opacity: 1, filter: 'brightness(2) blur(10px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)' },
        },
        'not-so-boring-two': {
          '0%': { opacity: 0, filter: 'brightness(1) blur(5px)' },
          '10%': { opacity: 1, filter: 'brightness(2) blur(2px)' },
          '100%': { opacity: 1, filter: 'brightness(1) blur(0)' },
        },
        'ken-burns': {
          '0%': {
            opacity: 0,
            clipPath: 'inset(5%)',
            transform: 'scale(111.11%)',
          },
          '100%': { opacity: 1, clipPath: 'inset(0)', transform: 'scale(1)' },
        },
        'enterFromRight': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
        'enterFromLeft': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        },
        'exitToRight': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(100%)' },
        },
        'exitToLeft': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'scaleIn': {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        'scaleOut': {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        'fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fadeOut': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ken-burns': 'ken-burns 1s ease-in',
        'not-so-boring': 'not-so-boring 1.2s ease-out',
        'not-so-boring-fast': 'not-so-boring-two .3s ease both',
        'shimmer-button': '1.5s shimmer-button ease-in-out',
        'scaleIn': 'scaleIn 200ms ease',
        'scaleOut': 'scaleOut 200ms ease',
        'fadeIn': 'fadeIn 200ms ease',
        'fadeOut': 'fadeOut 200ms ease',
        'enterFromLeft': 'enterFromLeft 250ms ease',
        'enterFromRight': 'enterFromRight 250ms ease',
        'exitToLeft': 'exitToLeft 250ms ease',
        'exitToRight': 'exitToRight 250ms ease',
      },
    },
  },
  plugins: [
    require('./lib/plugins/dots.mjs'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
