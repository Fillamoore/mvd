// data/modules.ts - CORRECTED TIER RANGES
export interface Module {
  id: number;
  name: string;
  tier: 'foundation' | 'intermediate' | 'advanced';
  description?: string;
  scenarios: string[];
}

export const modules: Module[] = [
  // FOUNDATION: Modules 1-9
  {
    id: 1,
    name: 'Growth mindset',
    tier: 'foundation',
    description: 'Developing a growth-oriented approach to challenges',
    scenarios: ['growth-mindset-1']
  },
  {
    id: 2,
    name: 'Professional curiosity', 
    tier: 'foundation',
    description: 'Cultivating inquisitive thinking in professional contexts',
    scenarios: ['professional-curiosity-1']
  },
  {
    id: 3,
    name: 'Active listening',
    tier: 'foundation',
    description: 'Mastering the art of attentive and responsive listening',
    scenarios: ['active-listening-1']
  },
  {
    id: 4,
    name: 'Clear writing',
    tier: 'foundation',
    description: 'Developing concise and effective written communication',
    scenarios: ['clear-writing-1']
  },
  {
    id: 5,
    name: 'Structured thinking',
    tier: 'foundation',
    description: 'Organizing thoughts and ideas logically',
    scenarios: ['structured-thinking-1']
  },
  {
    id: 6,
    name: 'Time management',
    tier: 'foundation',
    description: 'Effective prioritization and time allocation',
    scenarios: ['time-management-1']
  },
  {
    id: 7,
    name: 'Stakeholder awareness',
    tier: 'foundation',
    description: 'Understanding and managing stakeholder relationships',
    scenarios: ['stakeholder-awareness-1']
  },
  {
    id: 8,
    name: 'Note-taking discipline',
    tier: 'foundation',
    description: 'Systematic approaches to capturing information',
    scenarios: ['note-taking-1']
  },
  {
    id: 9,
    name: 'Asking good questions',
    tier: 'foundation',
    description: 'Formulating insightful and productive questions',
    scenarios: ['questioning-1']
  },

  // INTERMEDIATE: Modules 10-25
  {
    id: 10,
    name: 'Self-awareness',
    tier: 'intermediate',
    description: 'Understanding personal strengths and development areas',
    scenarios: ['self-awareness-1']
  },
  {
    id: 11,
    name: 'Emotional intelligence',
    tier: 'intermediate',
    description: 'Recognizing and managing emotions in self and others',
    scenarios: ['emotional-intelligence-1']
  },
  {
    id: 12,
    name: 'Team collaboration',
    tier: 'intermediate',
    description: 'Working effectively in team environments',
    scenarios: ['team-collaboration-1']
  },
  {
    id: 13,
    name: 'Adaptability',
    tier: 'intermediate',
    description: 'Adjusting to changing circumstances and requirements',
    scenarios: ['adaptability-1']
  },
  {
    id: 14,
    name: 'Presentation basics',
    tier: 'intermediate',
    description: 'Fundamentals of effective presentation delivery',
    scenarios: ['presentation-basics-1']
  },
  {
    id: 15,
    name: 'Business etiquette',
    tier: 'intermediate',
    description: 'Professional conduct in business settings',
    scenarios: ['business-etiquette-1']
  },
  {
    id: 16,
    name: 'Problem structuring',
    tier: 'intermediate',
    description: 'Breaking down complex problems into manageable parts',
    scenarios: ['problem-structuring-1']
  },
  {
    id: 17,
    name: 'Hypothesis-led working',
    tier: 'intermediate',
    description: 'Using hypotheses to guide problem-solving approach',
    scenarios: ['hypothesis-working-1']
  },
  {
    id: 18,
    name: 'Basic financial literacy',
    tier: 'intermediate',
    description: 'Understanding fundamental financial concepts',
    scenarios: ['financial-literacy-1']
  },
  {
    id: 19,
    name: 'Industry scanning',
    tier: 'intermediate',
    description: 'Monitoring and analyzing industry trends',
    scenarios: ['industry-scanning-1']
  },
  {
    id: 20,
    name: 'Root-cause analysis',
    tier: 'intermediate',
    description: 'Identifying underlying causes of problems',
    scenarios: ['root-cause-analysis-1']
  },
  {
    id: 21,
    name: 'Data interpretation',
    tier: 'intermediate',
    description: 'Extracting insights from data and metrics',
    scenarios: ['data-interpretation-1']
  },
  {
    id: 22,
    name: 'Excel modelling',
    tier: 'intermediate',
    description: 'Building effective spreadsheet models',
    scenarios: ['excel-modelling-1']
  },
  {
    id: 23,
    name: 'Storyboarding',
    tier: 'intermediate',
    description: 'Structuring narratives for effective communication',
    scenarios: ['storyboarding-1']
  },
  {
    id: 24,
    name: 'Meeting facilitation',
    tier: 'intermediate',
    description: 'Leading productive and efficient meetings',
    scenarios: ['meeting-facilitation-1']
  },
  {
    id: 25,
    name: 'Influence without authority',
    tier: 'intermediate',
    description: 'Persuading and motivating without formal power',
    scenarios: ['influence-without-authority-1']
  },

  // ADVANCED: Modules 26-49
  {
    id: 26,
    name: 'Client empathy',
    tier: 'advanced',
    description: 'Understanding and relating to client perspectives',
    scenarios: ['client-empathy-1']
  },
  {
    id: 27,
    name: 'Negotiation basics',
    tier: 'advanced',
    description: 'Fundamental negotiation techniques and strategies',
    scenarios: ['negotiation-basics-1']
  },
  {
    id: 28,
    name: 'Risk awareness',
    tier: 'advanced',
    description: 'Identifying and assessing potential risks',
    scenarios: ['risk-awareness-1']
  },
  {
    id: 29,
    name: 'Managing ambiguity',
    tier: 'advanced',
    description: 'Operating effectively in uncertain environments',
    scenarios: ['managing-ambiguity-1']
  },
  {
    id: 30,
    name: 'Persuasive communication',
    tier: 'advanced',
    description: 'Crafting compelling arguments and messages',
    scenarios: ['persuasive-communication-1']
  },
  {
    id: 31,
    name: 'Strategic thinking',
    tier: 'advanced',
    description: 'Long-term planning and big-picture perspective',
    scenarios: ['strategic-thinking-1']
  },
  {
    id: 32,
    name: 'Market dynamics',
    tier: 'advanced',
    description: 'Understanding market forces and competitive landscapes',
    scenarios: ['market-dynamics-1']
  },
  {
    id: 33,
    name: 'Policy awareness',
    tier: 'advanced',
    description: 'Navigating regulatory and policy environments',
    scenarios: ['policy-awareness-1']
  },
  {
    id: 34,
    name: 'Systems thinking',
    tier: 'advanced',
    description: 'Understanding interconnected systems and relationships',
    scenarios: ['systems-thinking-1']
  },
  {
    id: 35,
    name: 'Sustainability lens',
    tier: 'advanced',
    description: 'Incorporating environmental and social considerations',
    scenarios: ['sustainability-lens-1']
  },
  {
    id: 36,
    name: 'Commercial awareness',
    tier: 'advanced',
    description: 'Understanding business models and commercial implications',
    scenarios: ['commercial-awareness-1']
  },
  {
    id: 37,
    name: 'Investment logic',
    tier: 'advanced',
    description: 'Evaluating investment opportunities and business cases',
    scenarios: ['investment-logic-1']
  },
  {
    id: 38,
    name: 'Value-chain analysis',
    tier: 'advanced',
    description: 'Analyzing business processes and value creation',
    scenarios: ['value-chain-analysis-1']
  },
  {
    id: 39,
    name: 'Scenario planning',
    tier: 'advanced',
    description: 'Planning for multiple future possibilities',
    scenarios: ['scenario-planning-1']
  },
  {
    id: 40,
    name: 'Competitive positioning',
    tier: 'advanced',
    description: 'Developing strategies for competitive advantage',
    scenarios: ['competitive-positioning-1']
  },
  {
    id: 41,
    name: 'Change management',
    tier: 'advanced',
    description: 'Leading and managing organizational change',
    scenarios: ['change-management-1']
  },
  {
    id: 42,
    name: 'Advisory presence',
    tier: 'advanced',
    description: 'Establishing credibility and authority as an advisor',
    scenarios: ['advisory-presence-1']
  },
  {
    id: 43,
    name: 'Executive communication',
    tier: 'advanced',
    description: 'Communicating effectively with senior leadership',
    scenarios: ['executive-communication-1']
  },
  {
    id: 44,
    name: 'Building trust',
    tier: 'advanced',
    description: 'Developing and maintaining trust-based relationships',
    scenarios: ['building-trust-1']
  },
  {
    id: 45,
    name: 'Ethical judgement',
    tier: 'advanced',
    description: 'Navigating complex ethical dilemmas',
    scenarios: ['ethical-judgement-1']
  },
  {
    id: 46,
    name: 'Coaching juniors',
    tier: 'advanced',
    description: 'Mentoring and developing junior team members',
    scenarios: ['coaching-juniors-1']
  },
  {
    id: 47,
    name: 'Handling conflict',
    tier: 'advanced',
    description: 'Managing and resolving interpersonal conflicts',
    scenarios: ['handling-conflict-1']
  },
  {
    id: 48,
    name: 'Managing up',
    tier: 'advanced',
    description: 'Effectively working with and influencing superiors',
    scenarios: ['managing-up-1']
  },
  {
    id: 49,
    name: 'Networking for influence',
    tier: 'advanced',
    description: 'Building strategic professional networks',
    scenarios: ['networking-influence-1']
  }
];

export const getModuleById = (id: number) => {
  return modules.find(module => module.id === id);
};

export const getModulesByTier = (tier: Module['tier']) => {
  return modules.filter(module => module.tier === tier);
};

export const getFoundationModules = () => getModulesByTier('foundation'); // IDs 1-9
export const getIntermediateModules = () => getModulesByTier('intermediate'); // IDs 10-25
export const getAdvancedModules = () => getModulesByTier('advanced'); // IDs 26-49

// Helper to get module count by tier
export const getModuleCountByTier = () => {
  return {
    foundation: 9,      // Modules 1-9
    intermediate: 16,   // Modules 10-25
    advanced: 24,       // Modules 26-49
    total: 49
  };
};