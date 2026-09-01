/** @type {import('tailwindcss').Config} */

// Reads a "R G B" CSS variable (see :root in index.css) so every color
// utility below automatically supports Tailwind's opacity modifiers
// (e.g. bg-ink-800/70) AND automatically re-themes when the `light`
// class is toggled on <html> — no component files need to change.
function themed(variable) {
  return ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090C', // fixed near-black, used only for text on accent buttons
          900: themed('--color-bg'),
          850: themed('--color-bg-alt'),
          800: themed('--color-surface'),
          700: themed('--color-surface-2'),
          border: themed('--color-border'),
        },
        paper: {
          100: themed('--color-text'),
          300: themed('--color-text-dim'),
          500: themed('--color-text-muted'),
        },
        mint: {
          400: '#4CE3C2',
          500: '#2FD3AE',
          600: '#1FAE8E',
          glow: 'rgba(47,211,174,0.35)',
        },
        amber: {
          400: '#F2B84B',
          500: '#E6A72E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(rgb(var(--color-border) / 0.6) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '22px 22px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(47,211,174,0.25), 0 20px 60px -20px rgba(47,211,174,0.35)',
        card: '0 16px 32px -22px rgba(0,0,0,0.45)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-28px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow-mint': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(79, 227, 194, 0.4), inset 0 0 12px rgba(79, 227, 194, 0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(79, 227, 194, 0.6), inset 0 0 20px rgba(79, 227, 194, 0.15)' },
        },
      },
      animation: {
        blink: 'blink 1.05s step-end infinite',
        float: 'float 1.8s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 28s linear infinite',
        'glow-mint': 'glow-mint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}