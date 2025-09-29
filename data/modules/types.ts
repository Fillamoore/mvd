// data/modules/types.ts - RESTRICT TO IMAGE ONLY
export interface Response {
  id: 'A' | 'B' | 'C';
  text: string;
  expertRating: number;
  expertRationale: string;
  expertMedia?: {
    type: 'image'; // CHANGE: Remove 'video'
    url: string;
    altText: string;
    caption?: string;
  };
  resources?: Array<{
    title: string;
    url: string;
    type?: string;
  }>;
}

export interface Scenario {
  id: number;
  prompt: string;
  responses: Response[];
  overall: string;
  takeAway: string;
}

export type ModuleScenarios = Scenario[];