export interface Role {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  tools?: string[]; // shown as chips when the role is expanded
  highlight?: boolean; // surfaced in the shortened homepage list
}

// Real experience, most recent first.
export const experience: Role[] = [
  {
    role: 'User Experience Researcher',
    org: 'Verazoi (PLASMA Accelerator)',
    period: 'Feb 2026 – Present',
    highlight: true,
    tools: ['Qualtrics', 'Calendly', 'User Interviews'],
    points: [
      'Conducting customer research interviews and distributing research surveys.',
      'Built a workflow automating interview scheduling with Qualtrics and Calendly.',
    ],
  },
  {
    role: 'Research Assistant',
    org: 'PAIRR — Peer & AI Review + Reflection',
    period: 'Jan 2026 – Present',
    location: 'UC Davis',
    highlight: true,
    tools: ['Python', 'Qualtrics', 'Qualitative Analysis'],
    points: [
      'Processed and cleaned survey data from 500+ college students to measure AI attitude shifts.',
      'Transcribed and analyzed qualitative interviews assessing AI tools’ impact on student writing.',
    ],
  },
  {
    role: 'Career Prep Fellow',
    org: 'Management Leadership for Tomorrow',
    period: 'Feb 2026 – Present',
    points: [
      'Selected for a competitive fellowship developing career readiness and leadership skills.',
    ],
  },
  {
    role: 'Junior Consultant',
    org: 'Neurotech@Davis',
    period: 'Nov 2025 – Present',
    points: [
      'Researching Bionaut Labs to understand primary growth challenges and optimal strategy.',
    ],
  },
  {
    role: 'AI Fellow',
    org: 'AI4ALL',
    period: 'Aug 2025 – Present',
    highlight: true,
    tools: ['Python', 'Machine Learning', 'Scikit-Learn'],
    points: [
      'Prototyped a machine learning algorithm to optimize wind farm location in the U.S.',
    ],
  },
  {
    role: 'Software Engineer',
    org: 'AI Student Collective',
    period: 'Oct 2025 – Present',
    highlight: true,
    tools: ['React', 'TypeScript'],
    points: [
      'Developing a “Devpost” for middle and high school hackathons in Sacramento & the Bay Area.',
      'Mentored a high school hackathon — user research with next-gen builders.',
    ],
  },
  {
    role: 'TEDxMoreau Speaker',
    org: 'TED Conferences',
    period: 'Nov 2023 – Mar 2024',
    location: 'Hayward, CA',
    points: [
      'Researched and presented a TED talk on the importance of diversity in data collection.',
      'Advocated for inclusivity in data to ensure unbiased insights.',
    ],
  },
  {
    role: 'HerHacks Winner',
    org: 'Girls Who Code UC Davis',
    period: 'Nov 2024',
    points: [
      'Built ReChic — a chatbot + computer-vision proposal for closet styling.',
    ],
  },
];
