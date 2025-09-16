// data/modules.ts 
export interface Module {
  id: number;
  name: string;
  tier: 'foundation' | 'intermediate' | 'advanced';
  description?: string;
}

export const modules: Module[] = [
  // FOUNDATION: Modules 1-9
  {
    id: 1,
    name: 'Growth mindset',
    tier: 'foundation',
    description: 'Developing a growth-oriented approach to challenges'
  },
  {
    id: 2,
    name: 'Professional curiosity', 
    tier: 'foundation',
    description: 'Cultivating inquisitive thinking in professional contexts'
  },
  {
    id: 3,
    name: 'Active listening',
    tier: 'foundation',
    description: 'Mastering the art of attentive and responsive listening'
  },
  {
    id: 4,
    name: 'Clear writing',
    tier: 'foundation',
    description: 'Developing concise and effective written communication'
  },
  {
    id: 5,
    name: 'Structured thinking',
    tier: 'foundation',
    description: 'Organizing thoughts and ideas logically'
  },
  {
    id: 6,
    name: 'Time management',
    tier: 'foundation',
    description: 'Effective prioritization and time allocation'
  },
  {
    id: 7,
    name: 'Stakeholder awareness',
    tier: 'foundation',
    description: 'Understanding and managing stakeholder relationships'
  },
  {
    id: 8,
    name: 'Note-taking discipline',
    tier: 'foundation',
    description: 'Systematic approaches to capturing information'
  },
  {
    id: 9,
    name: 'Asking good questions',
    tier: 'foundation',
    description: 'Formulating insightful and productive questions'
  },

  // INTERMEDIATE: Modules 10-25
  {
    id: 10,
    name: 'Self-awareness',
    tier: 'intermediate',
    description: 'Understanding personal strengths and development areas'
  },
  // ... keep all other module definitions but remove scenarios arrays ...
  
  // ADVANCED: Module 49
  {
    id: 49,
    name: 'Networking for influence',
    tier: 'advanced',
    description: 'Building strategic professional networks'
  }
];

// ... keep the existing helper functions ...
export const getModuleById = (id: number) => {
  return modules.find(module => module.id === id);
};

export const getModulesByTier = (tier: Module['tier']) => {
  return modules.filter(module => module.tier === tier);
};

export const getFoundationModules = () => getModulesByTier('foundation');
export const getIntermediateModules = () => getModulesByTier('intermediate');
export const getAdvancedModules = () => getModulesByTier('advanced');

export const getModuleCountByTier = () => {
  return {
    foundation: 9,
    intermediate: 16,
    advanced: 24,
    total: 49
  };
};