export interface Goal {
  label: string;
  progress: number; // 0–100
}
export interface GoalGroup {
  group: string;
  items: Goal[];
}

// Edit these — labels and percentages. Groups render as progress bars on /log.
export const goals: GoalGroup[] = [
  {
    group: 'current tasks',
    items: [
      { label: 'System Design for end to end help agent with new AI product', progress: 50 },
      { label: 'Networking CRM', progress: 30 },
    ],
  },
  {
    group: 'this week',
    items: [
      { label: 'Ship MVP for help agent', progress: 20 },
      { label: 'Prep presentation for stakeholders', progress: 70 },
      { label: 'Upskill with 1 project', progress: 0 },
    ],
  },
  {
    group: 'this month',
    items: [
      { label: 'Apply to 15 AI engineering internships', progress: 0 },
      { label: 'Publish 2 log updates / week', progress: 1 },
      { label: 'Build an agentic-workflows demo', progress: 25 },
    ],
  },
];
