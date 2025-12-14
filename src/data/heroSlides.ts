/**
 * Hero Slides Data Configuration
 * Centralized data for all hero banner slides
 */
import type { HeroBannerData } from '@/types';

export const heroSlides: HeroBannerData[] = [
  {
    id: 'intro',
    index: 0,
    label: 'Introduction',
    bgColor: 'bg-slide-pink',
    accentColor: 'bg-accent-pink',
    titleLines: ["Hi! I'm", 'Tania Tello'],
    subtitle:
      'Always passionate about crafting experiences that are engaging, accessible, and user-centric.',
    decorations: [],
    backgroundText: [
      { side: 'left', lines: ['Oh boy, can', 'I code'] },
      { side: 'right', lines: ['Sr. Front End', 'Engineer'] },
    ],
  },
  {
    id: 'role',
    index: 1,
    label: 'Role',
    bgColor: 'bg-slide-blue',
    accentColor: 'bg-accent-blue',
    titleLines: ['Sr. Front End', 'Engineer'],
    subtitle:
      '7+ years of experience, specializing in dynamic and user-friendly web applications, e-commerce platforms, and recently mobile apps using React-Native',
    decorations: [],
    backgroundText: [
      { side: 'left', lines: ['Technology', 'Mentor'] },
      { side: 'right', lines: ['Oh boy, can', 'I code'] },
    ],
  },
  {
    id: 'mentor',
    index: 2,
    label: 'Mentor',
    bgColor: 'bg-slide-beige',
    accentColor: 'bg-accent-purple',
    titleLines: ['Technology', 'Mentor'],
    subtitle:
      'One of my motivations for technology is to encourage and mentor women to learn about various technological disciplines, given the need for more women in the sector.',
    decorations: [],
    backgroundText: [
      { side: 'left', lines: ['Oh boy, can', 'I code'] },
      { side: 'right', lines: ["Hi! I'm", 'Tania Tello'] },
    ],
  },
  {
    id: 'skills',
    index: 3,
    label: 'Skills',
    bgColor: 'bg-slide-orange',
    accentColor: 'bg-accent-orange',
    titleLines: ['Oh boy,', 'can I code'],
    subtitle:
      'Expert in React-Native. Highly skilled at React.js, JavaScript, and Redux. Also experienced in Next.js, styled-components, Typescript GraphQL, and Flex-Box. Characterized by sticking to good practices with frameworks such as React-Testing Library, Jest and E2E testing with Cypress.',
    decorations: [],
    backgroundText: [
      { side: 'left', lines: ['Technology', 'Mentor'] },
      { side: 'right', lines: ["Hi! I'm", 'Tania Tello'] },
    ],
  },
];

export default heroSlides;
