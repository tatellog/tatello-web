/**
 * Design System Tokens
 * Single source of truth for design values
 * Synced with global.css and tailwind.config.mjs
 *
 * @description This module provides type-safe access to design tokens.
 * Use CSS variables for runtime values, these constants for build-time/JS usage.
 */

import type {
  BrandColor,
  SlideColor,
  AccentColor,
  FontSize,
  FontFamily,
  FontWeight,
  SpacingKey,
  ZIndexLayer,
  Duration,
  Easing,
} from '@/types';

// =============================================================================
// COLOR TOKENS
// =============================================================================

/** Brand color hex values */
export const BRAND_COLORS: Readonly<Record<BrandColor, string>> = {
  brown: '#673437',
  dark: '#1d1d1e',
  charcoal: '#231f20',
  gray: '#304659',
  orange: '#f58120',
} as const;

/** Slide background color hex values */
export const SLIDE_COLORS: Readonly<Record<SlideColor, string>> = {
  pink: '#f7ebec',
  blue: '#e0f4f5',
  beige: '#f5f0e6',
  orange: '#f7e8d7',
} as const;

/** Accent color hex values */
export const ACCENT_COLORS: Readonly<Record<AccentColor, string>> = {
  pink: '#ffc4c8',
  blue: '#61dafb',
  purple: '#413fd9',
  yellow: '#eeb700',
  orange: '#feb25e',
} as const;

/** Neutral color scale */
export const NEUTRAL_COLORS = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
} as const;

/** Get CSS variable reference for a color */
export const cssVar = {
  brand: (color: BrandColor) => `var(--color-brand-${color})`,
  slide: (color: SlideColor) => `var(--color-slide-${color})`,
  accent: (color: AccentColor) => `var(--color-accent-${color})`,
  text: (type: 'primary' | 'secondary' | 'heading' | 'muted' | 'inverse') =>
    `var(--color-text-${type})`,
} as const;

// =============================================================================
// TYPOGRAPHY TOKENS
// =============================================================================

/** Font family stacks */
export const FONT_FAMILIES: Readonly<Record<FontFamily, string>> = {
  sans: "'GT Planar', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  display: "'Stacion', Georgia, 'Times New Roman', serif",
  mono: "'SF Mono', 'Fira Code', 'Fira Mono', Consolas, monospace",
} as const;

/** Font sizes in rem */
export const FONT_SIZES: Readonly<Record<FontSize, string>> = {
  xs: '0.75rem',      // 12px
  sm: '0.8125rem',    // 13px
  base: '1rem',       // 16px
  lg: '1.0625rem',    // 17px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '2rem',      // 32px
  '4xl': '2.5rem',    // 40px
  '5xl': '3rem',      // 48px
  '6xl': '4rem',      // 64px
  '7xl': '5rem',      // 80px
  '8xl': '6rem',      // 96px
  hero: '8rem',       // 128px
  'hero-fluid': 'clamp(2.5rem, 8vw, 8rem)',
} as const;

/** Font weights */
export const FONT_WEIGHTS: Readonly<Record<FontWeight, number>> = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/** Line heights */
export const LINE_HEIGHTS = {
  none: 1,
  tight: 1.1,
  snug: 1.2,
  normal: 1.4,
  relaxed: 1.5,
  loose: 1.625,
} as const;

/** Letter spacing values in em */
export const LETTER_SPACING = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
  caps: '0.08em', // For uppercase text
} as const;

// =============================================================================
// SPACING TOKENS
// =============================================================================

/** Spacing scale in rem (based on 8px grid) */
export const SPACING: Readonly<Record<SpacingKey, string>> = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const;

/** Layout dimensions */
export const LAYOUT = {
  maxWidth: {
    content: '1440px',
    text: '666px',
    textWide: '845px',
  },
  header: {
    height: '85px',
    heightMobile: '70px',
  },
} as const;

// =============================================================================
// BORDER & SHADOW TOKENS
// =============================================================================

/** Border radius values */
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  '2xl': '2rem',    // 32px
  full: '9999px',   // Pills, circles
  button: '2.25rem', // 36px - CTA buttons
} as const;

/** Box shadow values */
export const BOX_SHADOW = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  button: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
} as const;

// =============================================================================
// ANIMATION TOKENS
// =============================================================================

/** Animation durations in milliseconds */
export const DURATIONS: Readonly<Record<Duration, number>> = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700,
} as const;

/** CSS easing functions */
export const EASINGS: Readonly<Record<Easing, string>> = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

/** GSAP easing strings */
export const GSAP_EASE = {
  entrance: 'power3.out',
  exit: 'power2.in',
  transition: 'power2.inOut',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.3)',
  smooth: 'sine.inOut',
} as const;

// =============================================================================
// Z-INDEX TOKENS
// =============================================================================

/** Z-index scale */
export const Z_INDEX: Readonly<Record<ZIndexLayer, number>> = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  'modal-backdrop': 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

/** Responsive breakpoints in pixels */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** Media query helpers */
export const mediaQuery = {
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `(min-width: ${BREAKPOINTS['2xl']}px)`,
  reducedMotion: '(prefers-reduced-motion: reduce)',
  dark: '(prefers-color-scheme: dark)',
} as const;

// =============================================================================
// SLIDE CONFIGURATION
// =============================================================================

/** Hero slide configurations - Single source of truth */
export const SLIDE_CONFIG = {
  intro: {
    id: 'intro' as const,
    index: 0 as const,
    label: 'Introduction',
    bgColor: 'bg-slide-pink' as const,
    accentColor: 'bg-accent-pink' as const,
    accentHex: ACCENT_COLORS.pink,
  },
  role: {
    id: 'role' as const,
    index: 1 as const,
    label: 'Role',
    bgColor: 'bg-slide-blue' as const,
    accentColor: 'bg-accent-blue' as const,
    accentHex: ACCENT_COLORS.blue,
  },
  mentor: {
    id: 'mentor' as const,
    index: 2 as const,
    label: 'Mentor',
    bgColor: 'bg-slide-beige' as const,
    accentColor: 'bg-accent-purple' as const,
    accentHex: ACCENT_COLORS.purple,
  },
  skills: {
    id: 'skills' as const,
    index: 3 as const,
    label: 'Skills',
    bgColor: 'bg-slide-orange' as const,
    accentColor: 'bg-accent-orange' as const,
    accentHex: ACCENT_COLORS.orange,
  },
} as const;

/** Array of all slides in order */
export const SLIDES_ARRAY = [
  SLIDE_CONFIG.intro,
  SLIDE_CONFIG.role,
  SLIDE_CONFIG.mentor,
  SLIDE_CONFIG.skills,
] as const;

/** Total number of slides */
export const TOTAL_SLIDES = SLIDES_ARRAY.length;

/** Default autoplay interval in milliseconds */
export const DEFAULT_AUTOPLAY_INTERVAL = 6000;
