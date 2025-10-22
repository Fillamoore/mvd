export interface ModuleContent {
  module_id: number;
  title: string;
  content_body: string;
}

// Add the types that were in scenarios.ts
export type Response = {
  id: "A" | "B" | "C";
  title: string;
  text: string;
  expertRationale: string;
  expertRanking: 1 | 2 | 3;
};

export interface Scenario {
  id: number;
  moduleId: number;
  title: string;
  prompt: string;
  responses: Response[];
  overall: string;
  takeAway: string;
}
