import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        link: {
          DEFAULT: 'rgb(var(--link))',
          hover: 'rgb(var(--link-hover))',
        },
        background: {
          100: 'rgb(var(--background-100))',
          200: 'rgb(var(--background-200))',
          300: 'rgb(var(--background-300))',
          400: 'rgb(var(--background-400))',
          500: 'rgb(var(--background-500))',
          600: 'rgb(var(--background-600))',
          700: 'rgb(var(--background-700))',
          800: 'rgb(var(--background-800))',
          900: 'rgb(var(--background-900))',
          DEFAULT: 'rgb(var(--background))',
        },
        foreground: {
          50: 'rgb(var(--foreground-50))',
          100: 'rgb(var(--foreground-100))',
          200: 'rgb(var(--foreground-200))',
          300: 'rgb(var(--foreground-300))',
          400: 'rgb(var(--foreground-400))',
          500: 'rgb(var(--foreground-500))',
          600: 'rgb(var(--foreground-600))',
          700: 'rgb(var(--foreground-700))',
          800: 'rgb(var(--foreground-800))',
          900: 'rgb(var(--foreground-900))',
          DEFAULT: 'rgb(var(--foreground))',
          discreet: 'rgb(var(--foreground-discreet))',
          discreeter: 'rgb(var(--foreground-discreeter))',
        },
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'rgb(var(--popover-foreground))',
        },
        primary: {
          50: 'rgb(var(--primary-50))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
          950: 'rgb(var(--primary-950))',
          DEFAULT: 'rgb(var(--primary-600))',
          foreground: 'rgb(var(--primary-50))',
          text: 'rgb(var(--primary-text))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        destructive: {
          50: 'rgb(var(--destructive-50))',
          100: 'rgb(var(--destructive-100))',
          200: 'rgb(var(--destructive-200))',
          300: 'rgb(var(--destructive-300))',
          400: 'rgb(var(--destructive-400))',
          500: 'rgb(var(--destructive-500))',
          600: 'rgb(var(--destructive-600))',
          700: 'rgb(var(--destructive-700))',
          800: 'rgb(var(--destructive-800))',
          900: 'rgb(var(--destructive-900))',
          950: 'rgb(var(--destructive-950))',
          DEFAULT: 'rgb(var(--destructive-600))',
          foreground: 'rgb(var(--destructive-50))',
        },
        border: 'rgb(var(--border))',
        input: 'rgb(var(--input))',
        ring: 'rgb(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'rgb(var(--sidebar-primary))',
          'primary-foreground': 'rgb(var(--sidebar-primary-foreground))',
          accent: 'rgb(var(--sidebar-accent))',
          'accent-foreground': 'rgb(var(--sidebar-accent-foreground))',
          border: 'rgb(var(--sidebar-border))',
          ring: 'rgb(var(--sidebar-ring))',
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
