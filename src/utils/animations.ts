/**
 * GSAP Animation Utilities
 * Reusable animation functions following CLAUDE.md guidelines
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type {
  TextRevealOptions,
  FadeInOptions,
  FloatingOptions,
  ScaleOptions,
  SlideDirection,
} from '@/types';

gsap.registerPlugin(ScrollTrigger);

// =============================================================================
// CONSTANTS
// =============================================================================

/** Default easing values as per CLAUDE.md */
export const EASE = {
  entrance: 'power3.out',
  exit: 'power2.in',
  transition: 'power2.inOut',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.3)',
  smooth: 'sine.inOut',
} as const;

/** Default animation durations in seconds */
export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  slower: 1.0,
} as const;

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Text reveal animation (letter by letter)
 * Use with SplitText for best results
 */
export function textReveal(
  target: string | Element,
  options: {
    stagger?: number;
    duration?: number;
    delay?: number;
  } = {}
): gsap.core.Tween {
  const { stagger = 0.03, duration = 0.8, delay = 0 } = options;

  if (prefersReducedMotion()) {
    return gsap.set(target, { opacity: 1 });
  }

  return gsap.from(target, {
    opacity: 0,
    y: 50,
    stagger,
    duration,
    delay,
    ease: EASE.entrance,
  });
}

/**
 * Fade in on scroll animation
 */
export function fadeInOnScroll(
  target: string | Element,
  options: {
    start?: string;
    y?: number;
    duration?: number;
  } = {}
): gsap.core.Tween {
  const { start = 'top 80%', y = 30, duration = 0.6 } = options;

  if (prefersReducedMotion()) {
    return gsap.set(target, { opacity: 1 });
  }

  return gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start,
    },
    opacity: 0,
    y,
    duration,
    ease: EASE.entrance,
  });
}

/**
 * Staggered cards animation
 */
export function staggerCards(
  target: string,
  options: {
    stagger?: number;
    y?: number;
    duration?: number;
    start?: string;
  } = {}
): gsap.core.Tween {
  const { stagger = 0.15, y = 50, duration = 0.8, start = 'top 70%' } = options;

  if (prefersReducedMotion()) {
    return gsap.set(target, { opacity: 1 });
  }

  return gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start,
    },
    opacity: 0,
    y,
    stagger,
    duration,
    ease: EASE.entrance,
  });
}

/**
 * Scale up with glow effect (for CTA buttons)
 */
export function scaleUpWithGlow(
  target: string | Element,
  options: {
    scale?: number;
    duration?: number;
    delay?: number;
  } = {}
): gsap.core.Tween {
  const { scale = 0.9, duration = 0.6, delay = 0 } = options;

  if (prefersReducedMotion()) {
    return gsap.set(target, { opacity: 1, scale: 1 });
  }

  return gsap.from(target, {
    opacity: 0,
    scale,
    duration,
    delay,
    ease: EASE.bounce,
  });
}

/**
 * Parallax effect for background elements
 */
export function parallax(
  target: string | Element,
  options: {
    speed?: number;
    start?: string;
    end?: string;
  } = {}
): gsap.core.Tween {
  const { speed = 0.5, start = 'top bottom', end = 'bottom top' } = options;

  if (prefersReducedMotion()) {
    return gsap.set(target, {});
  }

  return gsap.to(target, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: target,
      start,
      end,
      scrub: true,
    },
  });
}

/**
 * Create a GSAP context for cleanup
 * Use this in components for proper cleanup on unmount
 */
export function createAnimationContext(
  scope: Element | string,
  animations: (ctx: gsap.Context) => void
): gsap.Context {
  return gsap.context(animations, scope);
}

/**
 * Kill all ScrollTriggers in a context
 * Call this on component unmount
 */
export function cleanupScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Batch animation for multiple similar elements
 * More performant than individual ScrollTriggers
 */
export function batchAnimation(
  targets: string,
  options: {
    onEnter?: (elements: Element[]) => void;
    onLeave?: (elements: Element[]) => void;
    start?: string;
  } = {}
): ScrollTrigger[] {
  const {
    onEnter = (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: EASE.entrance,
      });
    },
    onLeave = (elements) => {
      gsap.set(elements, { opacity: 0, y: 30 });
    },
    start = 'top 80%',
  } = options;

  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return [];
  }

  // Set initial state
  gsap.set(targets, { opacity: 0, y: 30 });

  return ScrollTrigger.batch(targets, {
    onEnter,
    onLeave,
    start,
  });
}
