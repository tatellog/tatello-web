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

## Figma Design States (Automatic Animations)

The design has multiple states per section that represent animation sequences.
All animations are AUTOMATIC (triggered on load or scroll into view).

### Hero Section (Home 1.0 → 1.1)
- **Trigger**: On page load
- **Animation**: 
  - [ ] "Hi! I'm Tania Tello" - Letter-by-letter reveal
  - [ ] Role titles fade in after name
  - [ ] Background elements animate in
- **Duration**: ~2-3 seconds total

### About Section (About 1.0 → 1.1 → 1.2)
- **Trigger**: ScrollTrigger when section enters viewport
- **Animation sequence**:
  - [ ] State 1.0 → 1.1: Initial reveal
  - [ ] State 1.1 → 1.2: Secondary elements appear
- **Use**: gsap.timeline() with ScrollTrigger

### Skills Section (Skills 1.0)
- **Trigger**: ScrollTrigger
- **Animation**:
  - [ ] Skill items stagger in
  - [ ] Icons/badges animate with slight bounce

### Hobbies Section (Hobbies 1.0 → 1.1 → 1.2 → 1.3)
- **Trigger**: Automatic carousel OR scroll-triggered sequence
- **States**: Mentoring → Travel → Luna → Family
- **Animation**:
  - [ ] Auto-rotate between states (4-5 seconds each)
  - [ ] Smooth crossfade between hobbies
  - [ ] Consider: pause on hover

### Experience Section (Experience 1.0)
- **Trigger**: ScrollTrigger
- **Animation**:
  - [ ] Timeline items reveal with stagger
  - [ ] Lines/connectors draw in

### Work/Projects Section (Work 1.0 → 1.1)
- **Trigger**: ScrollTrigger + Hover
- **Animation**:
  - [ ] Project cards fade in with stagger on scroll
  - [ ] Hover state (1.1): Card expands or reveals details

### Contact Section (Contact 1.0)
- **Trigger**: ScrollTrigger
- **Animation**:
  - [ ] Form fades in
  - [ ] CTA button subtle pulse or glow

### Navigation
- [ ] Hide on scroll down, show on scroll up
- [ ] Smooth background blur transition when scrolling
- [ ] Mobile menu: Slide in from right with staggered links

### Page Transitions
- [ ] Use Astro ViewTransitions
- [ ] Fade out current page, fade in new page
- [ ] Persistent header during transitions

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

## Figma MCP Integration

### Setup Options

**Option 1: Figma Official MCP (Recommended)**
```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

**Option 2: Composio MCP (More features, +250 apps)**
```bash
npx @composio/mcp@latest setup "<your-composio-url>" "figma-mcp" --client claude
```

After setup, restart Claude Code and run `/mcp` to verify connection.

### How to Use Figma MCP

1. **Get the frame link**: In Figma, right-click on a frame → "Copy link to selection"
2. **Paste in prompt**: Include the Figma link when asking Claude to convert

### Figma to Code Conversion Rules

When converting designs from Figma to code:

**Styling**
- Use Tailwind CSS classes exclusively, no inline styles
- Convert Figma colors to CSS custom properties in `global.css`
- Map Figma spacing: 8px grid → Tailwind spacing scale (8px = 2, 16px = 4, etc.)
- Use `rem` units for typography (16px base)

**Layout**
- Use CSS Grid for complex layouts, Flexbox for simpler ones
- Implement mobile-first (start with mobile Figma frame, add breakpoints)
- Match exact spacing from Figma using Tailwind's spacing utilities

**Components**
- Create reusable `.astro` components for repeated UI elements
- Extract variants into component props
- Name components to match Figma layer names when possible

**Assets**
- Export icons as inline SVG (optimize with SVGO)
- Use `astro:assets` for images with proper sizing
- Implement lazy loading for below-fold images

**Animations**
- Add GSAP animations for interactive elements (not in Figma)
- Use the animation patterns defined in this file
- Don't animate anything that isn't supposed to move

### Example Figma Conversion Prompt

```
Convert this Figma frame to an Astro component with Tailwind CSS.

Figma link: https://www.figma.com/file/xxx/Portfolio?node-id=1-234

Requirements:
- Match exact colors, spacing, and typography from Figma
- Make it fully responsive (mobile-first)
- Add GSAP fade-in animation on scroll
- Export any icons as inline SVG
- Use semantic HTML structure
```

### Figma Design Tokens to Extract

When starting a new project, ask Claude to extract these from Figma:
- Color palette → CSS custom properties
- Typography scale → Tailwind config
- Spacing system → Tailwind spacing
- Border radius values → Tailwind config
- Shadow styles → Tailwind config

### Limitations to Know

| ✅ Works Well | ⚠️ Manual Work Needed |
|---------------|----------------------|
| Static layouts | Complex animations |
| Colors & typography | Figma prototypes |
| Component structure | Custom interactions |
| SVG icons | Charts/graphs |
| Responsive grids | Multi-screen flows |

## Notes
- Figma design reference: [ADD YOUR FIGMA LINK HERE]
- Target browsers: Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Mobile-first approach
- Dark mode support (optional, implement if time permits)