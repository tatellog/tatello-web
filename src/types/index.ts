/**
 * Centralized TypeScript Types
 * Following Interface Segregation Principle (ISP)
 * Small, focused interfaces that can be composed
 */

// =============================================================================
// DESIGN SYSTEM TYPES
// =============================================================================

/** Brand color palette keys */
export type BrandColor = 'brown' | 'dark' | 'charcoal' | 'gray' | 'orange';

/** Slide background color keys */
export type SlideColor = 'pink' | 'blue' | 'beige' | 'orange';

/** Accent color keys */
export type AccentColor = 'pink' | 'blue' | 'purple' | 'yellow' | 'orange';

/** Semantic color keys */
export type SemanticColor = 'primary' | 'secondary' | 'heading' | 'muted' | 'inverse';

/** Typography scale keys */
export type FontSize =
  | 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl'
  | 'hero' | 'hero-fluid';

/** Font family keys */
export type FontFamily = 'sans' | 'display' | 'mono';

/** Font weight keys */
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

/** Spacing scale keys */
export type SpacingKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32;

/** Z-index layer keys */
export type ZIndexLayer =
  | 'base' | 'dropdown' | 'sticky' | 'fixed'
  | 'modal-backdrop' | 'modal' | 'popover' | 'tooltip';

/** Animation duration keys */
export type Duration = 'fast' | 'normal' | 'slow' | 'slower';

/** Animation easing keys */
export type Easing = 'default' | 'in' | 'out' | 'in-out' | 'bounce';

// =============================================================================
// COMPONENT TYPES
// =============================================================================

/** Base props for all icon components */
export interface IconProps {
  /** CSS class names */
  class?: string;
  /** Icon size in pixels (height) */
  size?: number;
  /** Icon color (CSS color value) */
  color?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
  /** Whether to hide from screen readers */
  'aria-hidden'?: boolean;
}

/** Props for icons with stroke customization */
export interface StrokeIconProps extends IconProps {
  /** Stroke width in pixels */
  strokeWidth?: number;
}

/** Header component variants */
export type HeaderVariant = 'default' | 'pink' | 'blue' | 'beige' | 'orange';

/** Header component props */
export interface HeaderProps {
  /** Visual variant affecting accent colors */
  variant?: HeaderVariant;
}

/** Layout component props */
export interface LayoutProps {
  /** Page title for SEO */
  title: string;
  /** Page description for SEO */
  description?: string;
  /** Open Graph image URL */
  ogImage?: string;
  /** Canonical URL */
  canonicalURL?: string;
}

// =============================================================================
// HERO SLIDER TYPES
// =============================================================================

/** Hero slide identifier */
export type SlideId = 'intro' | 'role' | 'mentor' | 'skills';

/** Hero slide index (0-based) */
export type SlideIndex = 0 | 1 | 2 | 3;

/** Slide navigation direction */
export type SlideDirection = 'next' | 'prev';

/** Configuration for a single hero slide */
export interface SlideConfig {
  /** Unique slide identifier */
  id: SlideId;
  /** Numeric index for ordering */
  index: SlideIndex;
  /** Human-readable label */
  label: string;
  /** Background color class */
  bgColor: `bg-slide-${SlideColor}`;
  /** Accent color class for pagination */
  accentColor: `bg-accent-${AccentColor}`;
  /** Element selectors for animations */
  selectors: SlideSelectors;
}

/** CSS selectors for slide animation elements */
export interface SlideSelectors {
  /** Title text elements */
  title: string;
  /** Subtitle element */
  subtitle: string;
  /** Decorative elements to animate */
  decorations: string[];
}

/** Hero slider component props */
export interface HeroSliderProps {
  /** Contact email address */
  email?: string;
  /** Auto-advance interval in milliseconds */
  autoPlayInterval?: number;
  /** Initial slide index */
  initialSlide?: SlideIndex;
  /** Enable/disable autoplay */
  autoPlay?: boolean;
}

// =============================================================================
// HERO BANNER TYPES
// =============================================================================

/** Decoration type for hero banners */
export type DecorationType =
  | 'sparkle'
  | 'icon'
  | 'cross'
  | 'dot'
  | 'tech-logo'
  | 'code-bracket';

/** Base decoration configuration */
export interface BaseDecoration {
  /** Unique identifier */
  id: string;
  /** Type of decoration */
  type: DecorationType;
  /** Tailwind position classes */
  position: string;
  /** Optional size classes */
  size?: string;
  /** Optional color (CSS or Tailwind class) */
  color?: string;
  /** Optional opacity class */
  opacity?: string;
  /** Optional rotation in degrees */
  rotation?: number;
  /** Hide on certain breakpoints */
  hideBelow?: 'md' | 'lg' | 'xl';
}

/** Sparkle decoration (4-point star SVG) */
export interface SparkleDecoration extends BaseDecoration {
  type: 'sparkle';
  /** Sparkle variant for staggered animation */
  variant?: 1 | 2 | 3;
}

/** Icon decoration (Astro component) */
export interface IconDecoration extends BaseDecoration {
  type: 'icon';
  /** Icon component name */
  icon: 'Python' | 'ReactLogo' | 'GraduationCap' | 'Cursor';
  /** Icon size in pixels */
  iconSize?: number;
  /** Stroke width for stroke-based icons */
  strokeWidth?: number;
}

/** Cross decoration (+ shape) */
export interface CrossDecoration extends BaseDecoration {
  type: 'cross';
  /** SVG width/height */
  svgSize?: number;
  /** Stroke width */
  strokeWidth?: number;
}

/** Dot decoration (circle) */
export interface DotDecoration extends BaseDecoration {
  type: 'dot';
}

/** Tech logo decoration (image) */
export interface TechLogoDecoration extends BaseDecoration {
  type: 'tech-logo';
  /** Image source path */
  src: string;
  /** Alt text for image */
  alt: string;
}

/** Code bracket decoration */
export interface CodeBracketDecoration extends BaseDecoration {
  type: 'code-bracket';
  /** Bracket variant: opening or closing */
  variant: 'open' | 'close';
}

/** Union of all decoration types */
export type HeroDecoration =
  | SparkleDecoration
  | IconDecoration
  | CrossDecoration
  | DotDecoration
  | TechLogoDecoration
  | CodeBracketDecoration;

/** Background text hints configuration */
export interface BackgroundTextHint {
  /** Position: left or right side */
  side: 'left' | 'right';
  /** Array of text lines */
  lines: string[];
}

/** Complete hero banner slide data */
export interface HeroBannerData {
  /** Slide identifier */
  id: SlideId;
  /** Slide index */
  index: SlideIndex;
  /** Label for pagination */
  label: string;
  /** Background color class */
  bgColor: string;
  /** Accent color class */
  accentColor: string;
  /** Title lines */
  titleLines: string[];
  /** Subtitle text */
  subtitle: string;
  /** Array of decorations */
  decorations: HeroDecoration[];
  /** Background text hints */
  backgroundText?: BackgroundTextHint[];
}

/** State for hero slider */
export interface SliderState {
  /** Current active slide index */
  currentSlide: SlideIndex;
  /** Whether autoplay is active */
  isAutoPlaying: boolean;
  /** Whether user is hovering over slider */
  isPaused: boolean;
}

// =============================================================================
// ANIMATION TYPES
// =============================================================================

/** GSAP animation configuration */
export interface AnimationConfig {
  /** Animation duration in seconds */
  duration?: number;
  /** Animation delay in seconds */
  delay?: number;
  /** GSAP easing function */
  ease?: string;
  /** Stagger delay between elements */
  stagger?: number;
}

/** Text reveal animation options */
export interface TextRevealOptions extends AnimationConfig {
  /** Starting Y offset in pixels */
  yOffset?: number;
  /** Whether to split by characters */
  splitByChars?: boolean;
}

/** Fade in animation options */
export interface FadeInOptions extends AnimationConfig {
  /** Starting Y offset in pixels */
  yOffset?: number;
  /** Starting X offset in pixels */
  xOffset?: number;
  /** Starting opacity */
  fromOpacity?: number;
}

/** Floating animation options */
export interface FloatingOptions {
  /** Y-axis movement range in pixels */
  yRange?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before starting */
  delay?: number;
  /** Also apply rotation */
  rotation?: number;
}

/** Scale animation options */
export interface ScaleOptions extends AnimationConfig {
  /** Starting scale factor */
  fromScale?: number;
  /** Ending scale factor */
  toScale?: number;
  /** Starting rotation in degrees */
  rotation?: number;
}

/** Slide transition options */
export interface SlideTransitionOptions {
  /** Direction of transition */
  direction: SlideDirection;
  /** Transition duration in seconds */
  duration?: number;
  /** X offset for sliding */
  xOffset?: number;
}

/** Callback for animation completion */
export type AnimationCallback = () => void;

/** Return type for animation functions */
export interface AnimationResult {
  /** The GSAP tween/timeline */
  animation: gsap.core.Tween | gsap.core.Timeline;
  /** Function to kill the animation */
  kill: () => void;
}

// =============================================================================
// DATA TYPES
// =============================================================================

/** Navigation link item */
export interface NavLink {
  /** Display text */
  label: string;
  /** Target URL or anchor */
  href: string;
  /** Whether link opens in new tab */
  external?: boolean;
}

/** Social media link */
export interface SocialLink {
  /** Platform name */
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  /** URL or mailto link */
  href: string;
  /** Accessible label */
  label: string;
}

/** Technology/skill item for HeroSkills */
export interface TechItem {
  /** Technology name */
  name: string;
  /** Image source path */
  src: string;
  /** Position classes (Tailwind) */
  position: string;
  /** Size classes (Tailwind) */
  size: string;
  /** Optional opacity class */
  opacity?: string;
}

/** Project item for portfolio */
export interface ProjectItem {
  /** Project ID */
  id: string;
  /** Project title */
  title: string;
  /** Short description */
  description: string;
  /** Featured image URL */
  image: string;
  /** Project URL */
  url?: string;
  /** Source code URL */
  sourceUrl?: string;
  /** Technologies used */
  technologies: string[];
  /** Whether project is featured */
  featured?: boolean;
}

// =============================================================================
// UTILITY TYPES
// =============================================================================

/** Make specific properties required */
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/** Make specific properties optional */
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/** Extract props type from Astro component */
export type AstroProps<T> = T extends { Props: infer P } ? P : never;

/** CSS class value (string or array of strings) */
export type ClassValue = string | string[] | Record<string, boolean> | undefined | null;

/** Callback function with no arguments */
export type VoidCallback = () => void;

/** Async callback function with no arguments */
export type AsyncVoidCallback = () => Promise<void>;
