// data/modules/module1.ts
import type { ModuleScenarios } from './types';

const module1Scenarios: ModuleScenarios = [
  {
    id: 1,
    prompt: "Your first scenario prompt here...",
    responses: [
      {
        id: "A",
        text: "Response option A",
        expertRating: 4,
        expertRationale: "Expert rationale for response A...",
      },
      {
        id: "B",
        text: "Response option B", 
        expertRating: 2,
        expertRationale: "Expert rationale for response B...",
      },
      {
        id: "C",
        text: "Response option C",
        expertRating: 1,
        expertRationale: "Expert rationale for response C..."
      }
    ],
    overall: "Overall feedback for this scenario...",
    takeAway: "Key takeaway message..."
  },
  // ... more scenarios
];

export default module1Scenarios;