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
      { label: 'Fine-tune + evaluate an LLM end-to-end', progress: 62 },
      { label: 'Personal finance app — core prototype', progress: 40 },
      { label: 'Wind-farm model: writeup & README', progress: 80 },
    ],
  },
  {
    group: 'this week',
    items: [
      { label: 'Ship the finance-app auth flow', progress: 35 },
      { label: 'Read Shape Up (ch. 1–6)', progress: 50 },
      { label: 'Prep 3 internship mock interviews', progress: 66 },
    ],
  },
  {
    group: 'this month',
    items: [
      { label: 'Apply to 15 AI engineering internships', progress: 60 },
      { label: 'Publish 2 log updates / week', progress: 75 },
      { label: 'Build an agentic-workflows demo', progress: 25 },
    ],
  },
];
