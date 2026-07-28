export interface SkillGroup {
  group: string;
  items: string[];
}

// Shared by /resume (grouped) and the homepage tech-stack showcase.
export const skills: SkillGroup[] = [
  {
    group: 'AI / ML & Data',
    items: ['Python', 'Scikit-Learn', 'Machine Learning', 'Statistics', 'Geospatial Data', 'Tableau', 'LLM fine-tuning', 'Agentic workflows'],
  },
  {
    group: 'Product',
    items: ['Figma', 'Notion', 'Qualtrics', 'User Interviews', 'Roadmapping', 'Workflow Automation'],
  },
  {
    group: 'Design & Front-end',
    items: ['UI/UX', 'Prototyping', 'Design Systems', 'Usability Testing', 'React'],
  },
];

// Flat list for the homepage showcase (order = rough priority).
export const stack: string[] = [
  'Python', 'Scikit-Learn', 'Machine Learning', 'LLM fine-tuning', 'Agentic workflows',
  'Statistics', 'Tableau', 'React', 'Figma', 'Qualtrics', 'Notion', 'UI/UX',
];
