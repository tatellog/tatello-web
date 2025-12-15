export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'testing' | 'tools';
  x: number;
  y: number;
  size: 'sm' | 'md' | 'lg';
  color: 'gold' | 'white';
}

export interface ConstellationLine {
  from: string;
  to: string;
}

export const skills: Skill[] = [
  { id: 'react', name: 'React', category: 'frontend', x: 58, y: 12, size: 'lg', color: 'gold' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', x: 42, y: 22, size: 'lg', color: 'gold' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', x: 32, y: 35, size: 'md', color: 'gold' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', x: 68, y: 18, size: 'md', color: 'gold' },
  { id: 'redux', name: 'Redux', category: 'frontend', x: 52, y: 28, size: 'md', color: 'gold' },
  { id: 'reactnative', name: 'React Native', category: 'frontend', x: 60, y: 35, size: 'lg', color: 'gold' },
  { id: 'html', name: 'HTML5', category: 'frontend', x: 28, y: 18, size: 'sm', color: 'white' },
  { id: 'css', name: 'CSS3', category: 'frontend', x: 22, y: 28, size: 'sm', color: 'white' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', x: 40, y: 42, size: 'md', color: 'gold' },
  { id: 'graphql', name: 'GraphQL', category: 'frontend', x: 75, y: 32, size: 'md', color: 'gold' },
  { id: 'nodejs', name: 'Node.js', category: 'backend', x: 85, y: 45, size: 'lg', color: 'gold' },
  { id: 'python', name: 'Python', category: 'backend', x: 35, y: 55, size: 'md', color: 'gold' },
  { id: 'jest', name: 'Jest', category: 'testing', x: 50, y: 50, size: 'md', color: 'gold' },
  { id: 'cypress', name: 'Cypress', category: 'testing', x: 70, y: 52, size: 'md', color: 'gold' },
  { id: 'testing-library', name: 'Testing Library', category: 'testing', x: 62, y: 60, size: 'sm', color: 'gold' },
  { id: 'git', name: 'Git', category: 'tools', x: 80, y: 25, size: 'sm', color: 'white' },
  { id: 'figma', name: 'Figma', category: 'tools', x: 90, y: 35, size: 'sm', color: 'white' },
  { id: 'storybook', name: 'Storybook', category: 'tools', x: 25, y: 45, size: 'sm', color: 'white' },
  { id: 'styled', name: 'Styled Components', category: 'frontend', x: 48, y: 38, size: 'sm', color: 'gold' },
  { id: 'webpack', name: 'Webpack', category: 'tools', x: 15, y: 38, size: 'sm', color: 'white' },
  { id: 'vite', name: 'Vite', category: 'tools', x: 8, y: 52, size: 'sm', color: 'white' },
  { id: 'astro', name: 'Astro', category: 'frontend', x: 92, y: 55, size: 'lg', color: 'gold' },
];

export const constellationLines: ConstellationLine[] = [
  { from: 'html', to: 'typescript' },
  { from: 'typescript', to: 'react' },
  { from: 'react', to: 'nextjs' },
  { from: 'typescript', to: 'redux' },
  { from: 'redux', to: 'reactnative' },
  { from: 'reactnative', to: 'graphql' },
  { from: 'graphql', to: 'nodejs' },
  { from: 'javascript', to: 'tailwind' },
  { from: 'tailwind', to: 'styled' },
  { from: 'styled', to: 'jest' },
  { from: 'jest', to: 'cypress' },
  { from: 'cypress', to: 'testing-library' },
  { from: 'nodejs', to: 'astro' },
  { from: 'python', to: 'jest' },
  { from: 'nextjs', to: 'git' },
];

export default skills;
