# Claude Code Instructions

## Project Overview
Personal portfolio website with emphasis on smooth, eye-catching animations.

## Tech Stack
- **Framework**: Astro 5+
- **Animations**: GSAP (with ScrollTrigger, SplitText)
- **Styling**: Tailwind CSS
- **Language**: TypeScript (strict mode)

## Code Conventions

### Naming
- Components: `PascalCase` (e.g., `HeroSection.astro`)
- Functions: `camelCase` (e.g., `initAnimations()`)
- CSS classes: Tailwind utilities + custom classes in `kebab-case`
- Files: `kebab-case` for utilities, `PascalCase` for components

### TypeScript
- Always use explicit types, avoid `any`
- Prefer interfaces over types for objects
- Use `const` by default, `let` only when reassignment is needed

### Components
- Keep components small and focused (single responsibility)
- Extract reusable animation logic into `/src/utils/animations.ts`
- Use Astro components for static content, React/Svelte islands for interactivity

## Project Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Card, etc.)
│   ├── sections/     # Page sections (Hero, Projects, Contact)
│   └── layout/       # Layout components (Header, Footer, Nav)
├── layouts/
│   └── BaseLayout.astro
├── pages/
├── styles/
│   └── global.css
├── utils/
│   └── animations.ts # GSAP animation utilities
└── data/
    └── projects.json # Portfolio projects data
```

## Animation Guidelines

### GSAP Best Practices
- Always use `gsap.context()` for cleanup in components
- Prefer `ScrollTrigger` for scroll-based animations
- Use `gsap.matchMedia()` for responsive animations
- Default easing: `power3.out` for entrances, `power2.inOut` for transitions

### Animation Patterns I Want
```javascript
// Text reveal (letter by letter)
gsap.from(".split-text", {
  opacity: 0,
  y: 50,
  stagger: 0.03,
  duration: 0.8,
  ease: "power3.out"
});

// Fade in on scroll
gsap.from(".fade-in", {
  scrollTrigger: {
    trigger: ".fade-in",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6
});

// Staggered cards
gsap.from(".card", {
  opacity: 0,
  y: 50,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out"
});
```

### Performance Rules
- Keep animations at 60fps (use `will-change` sparingly)
- Prefer `transform` and `opacity` over other properties
- Use `ScrollTrigger.batch()` for multiple similar elements
- Lazy load heavy animations below the fold

## Specific Animations Needed

### Hero Section
- [ ] Name/title: Letter-by-letter reveal with slight bounce
- [ ] Subtitle: Fade in after title completes
- [ ] CTA button: Scale up with subtle glow effect
- [ ] Background: Subtle parallax or gradient animation

### Navigation
- [ ] Hide on scroll down, show on scroll up
- [ ] Smooth background blur transition when scrolling
- [ ] Mobile menu: Slide in from right with staggered links

### Projects Grid
- [ ] Cards fade in with stagger on scroll
- [ ] Hover: Smooth scale + shadow elevation
- [ ] Image: Subtle zoom on hover
- [ ] Cursor: Custom cursor that changes on hover

### Page Transitions
- [ ] Use Astro ViewTransitions
- [ ] Fade out current page, fade in new page
- [ ] Persistent header during transitions

### Contact Section
- [ ] Form fields: Focus animation (border glow)
- [ ] Submit button: Loading state with spinner
- [ ] Success message: Slide in from bottom

## Do's and Don'ts

### DO
- Use semantic HTML (main, section, article, etc.)
- Ensure animations respect `prefers-reduced-motion`
- Test on mobile devices (touch interactions)
- Keep bundle size minimal (tree-shake GSAP)
- Add loading states for async content

### DON'T
- Don't use CSS transitions for complex animations (use GSAP)
- Don't animate layout properties (width, height, top, left)
- Don't create new timelines on every scroll event
- Don't forget to kill ScrollTriggers on component unmount
- Don't over-animate - subtle is better than flashy

## Reduced Motion Support
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable or simplify animations
  gsap.globalTimeline.timeScale(0);
}
```

## Dependencies to Use
```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "gsap": "^3.12.0",
    "@gsap/scrolltrigger": "^3.12.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.0",
    "typescript": "^5.0.0"
  }
}
```

## Example Prompts for This Project

### Building
```
Create a Hero component with:
- Animated title using GSAP SplitText
- Subtitle that fades in after title
- Responsive layout (stack on mobile)
- Use the animation patterns from CLAUDE.md
```

### Debugging
```
The ScrollTrigger animation on .project-card fires immediately 
instead of when scrolling. Here's my code: [paste code]
Console shows no errors.
```

### Refining
```
Review the Header component animation performance.
Check if there are any jank issues or unnecessary repaints.
Don't rewrite - just give me feedback first.
```

## Notes
- Figma design reference: [ADD YOUR FIGMA LINK HERE]
- Target browsers: Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Mobile-first approach
- Dark mode support (optional, implement if time permits)