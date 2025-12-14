/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /* Typography - synced with global.css */
      fontFamily: {
        sans: [
          'GT Planar',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Stacion',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        mono: [
          'SF Mono',
          'Fira Code',
          'Fira Mono',
          'Consolas',
          'monospace',
        ],
      },

      fontWeight: {
        light: 'var(--font-light)',
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
      },

      fontSize: {
        'xs': ['var(--text-xs)', { lineHeight: 'var(--leading-normal)' }],
        'sm': ['var(--text-sm)', { lineHeight: 'var(--leading-normal)' }],
        'base': ['var(--text-base)', { lineHeight: 'var(--leading-normal)' }],
        'lg': ['var(--text-lg)', { lineHeight: 'var(--leading-normal)' }],
        'xl': ['var(--text-xl)', { lineHeight: 'var(--leading-snug)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-snug)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-tight)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-tight)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--leading-tight)' }],
        '6xl': ['var(--text-6xl)', { lineHeight: 'var(--leading-none)' }],
        '7xl': ['var(--text-7xl)', { lineHeight: 'var(--leading-none)' }],
        '8xl': ['var(--text-8xl)', { lineHeight: 'var(--leading-none)' }],
        'hero': ['var(--text-hero)', { lineHeight: 'var(--leading-tight)' }],
        'hero-fluid': ['var(--text-hero-fluid)', { lineHeight: 'var(--leading-tight)' }],
      },

      lineHeight: {
        'none': 'var(--leading-none)',
        'tight': 'var(--leading-tight)',
        'snug': 'var(--leading-snug)',
        'normal': 'var(--leading-normal)',
        'relaxed': 'var(--leading-relaxed)',
        'loose': 'var(--leading-loose)',
      },

      letterSpacing: {
        'tighter': 'var(--tracking-tighter)',
        'tight': 'var(--tracking-tight)',
        'normal': 'var(--tracking-normal)',
        'wide': 'var(--tracking-wide)',
        'wider': 'var(--tracking-wider)',
        'widest': 'var(--tracking-widest)',
        'caps': 'var(--tracking-caps)',
      },

      /* Colors - synced with global.css */
      colors: {
        brand: {
          brown: 'var(--color-brand-brown)',
          dark: 'var(--color-brand-dark)',
          charcoal: 'var(--color-brand-charcoal)',
          gray: 'var(--color-brand-gray)',
          orange: 'var(--color-brand-orange)',
        },
        slide: {
          pink: 'var(--color-slide-pink)',
          blue: 'var(--color-slide-blue)',
          beige: 'var(--color-slide-beige)',
          orange: 'var(--color-slide-orange)',
        },
        accent: {
          pink: 'var(--color-accent-pink)',
          blue: 'var(--color-accent-blue)',
          purple: 'var(--color-accent-purple)',
          yellow: 'var(--color-accent-yellow)',
          orange: 'var(--color-accent-orange)',
        },
      },

      /* Spacing - synced with global.css */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'header': 'var(--header-height)',
        'header-mobile': 'var(--header-height-mobile)',
      },

      /* Max Widths */
      maxWidth: {
        'content': 'var(--max-width-content)',
        'text': 'var(--max-width-text)',
        'text-wide': 'var(--max-width-text-wide)',
      },

      /* Border Radius - synced with global.css */
      borderRadius: {
        'button': 'var(--radius-button)',
        '4xl': 'var(--radius-2xl)',
      },

      /* Shadows - synced with global.css */
      boxShadow: {
        'button': 'var(--shadow-button)',
      },

      /* Transitions */
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
      },

      transitionTimingFunction: {
        'bounce': 'var(--ease-bounce)',
      },

      /* Z-Index */
      zIndex: {
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'fixed': 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        'modal': 'var(--z-modal)',
        'popover': 'var(--z-popover)',
        'tooltip': 'var(--z-tooltip)',
      },

      /* Animations */
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) var(--ease-default)',
        'slide-up': 'slideUp var(--duration-normal) var(--ease-default)',
        'float': 'float 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
