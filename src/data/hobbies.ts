/**
 * Hobbies Data Configuration
 * Data for the vertical hobbies slider
 */

export interface HobbySlide {
  id: string;
  index: number;
  title: string;
  description: string;
  hasUnderline: boolean;
  underlineColor?: string;
}

export const hobbies: HobbySlide[] = [
  {
    id: 'mentoring',
    index: 0,
    title: 'Mentoring',
    description:
      "One of my passions outside of work is mentoring women in code. I'm actively involved with organizations like Women Who Code and Laboratoria, where I have the privilege of sharing my knowledge and experiences with aspiring female developers. It's incredibly rewarding to be a part of these communities, helping women break into the tech industry and thrive in their coding journeys.",
    hasUnderline: false,
  },
  {
    id: 'travel',
    index: 1,
    title: 'Travel',
    description:
      "I love the experience that travel leaves to my life. I've learn so much of different cultures and ancient traditions and through these authentic encounters, I've embraced and celebrated both our similarities and our differences.",
    hasUnderline: false,
  },
  {
    id: 'luna',
    index: 2,
    title: 'Luna',
    description:
      "Luna is the best dog in the whole world. She's my company through every adventure and new experience. She's my best friend and has offered me her unconditional love, emotional support, and constant cuddles.",
    hasUnderline: false,
  },
  {
    id: 'family',
    index: 3,
    title: 'Family',
    description:
      'The most important pieces of my life puzzle. Time with family is always time well spent.',
    hasUnderline: false,
  },
  {
    id: 'painting',
    index: 4,
    title: 'Painting',
    description:
      'Expressing creativity through colors and brushstrokes. Art is my way of relaxing and finding balance.',
    hasUnderline: false,
  },
];

export default hobbies;
