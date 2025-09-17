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
  {
    id: 11,
    name: 'Critical thinking',
    tier: 'intermediate',
    description: 'Evaluating information objectively and systematically'
  },
  {
    id: 12,
    name: 'Problem framing',
    tier: 'intermediate',
    description: 'Defining and structuring complex problems effectively'
  },
  {
    id: 13,
    name: 'Storytelling with data',
    tier: 'intermediate',
    description: 'Communicating insights clearly through narrative and visuals'
  },
  {
    id: 14,
    name: 'Collaboration',
    tier: 'intermediate',
    description: 'Working effectively within and across teams'
  },
  {
    id: 15,
    name: 'Influence without authority',
    tier: 'intermediate',
    description: 'Shaping outcomes through persuasion and credibility'
  },
  {
    id: 16,
    name: 'Resilience under pressure',
    tier: 'intermediate',
    description: 'Staying composed and effective in challenging contexts'
  },
  {
    id: 17,
    name: 'Systems thinking',
    tier: 'intermediate',
    description: 'Seeing interconnections within complex systems'
  },
  {
    id: 18,
    name: 'Facilitation skills',
    tier: 'intermediate',
    description: 'Guiding group discussions toward productive outcomes'
  },
  {
    id: 19,
    name: 'Commercial awareness',
    tier: 'intermediate',
    description: 'Understanding the business and financial drivers of decisions'
  },
  {
    id: 20,
    name: 'Ethical judgement',
    tier: 'intermediate',
    description: 'Balancing professional actions with integrity and values'
  },
  {
    id: 21,
    name: 'Analytical reasoning',
    tier: 'intermediate',
    description: 'Breaking down information logically and systematically'
  },
  {
    id: 22,
    name: 'Synthesis',
    tier: 'intermediate',
    description: 'Combining insights into coherent, actionable conclusions'
  },
  {
    id: 23,
    name: 'Meeting effectiveness',
    tier: 'intermediate',
    description: 'Running purposeful and productive meetings'
  },
  {
    id: 24,
    name: 'Personal organisation',
    tier: 'intermediate',
    description: 'Maintaining systems for efficiency and reliability'
  },
  {
    id: 25,
    name: 'Confidence and presence',
    tier: 'intermediate',
    description: 'Projecting confidence and credibility in professional settings'
  },

  // ADVANCED: Modules 26-49
  {
    id: 26,
    name: 'Consulting toolkit',
    tier: 'advanced',
    description: 'Applying structured consulting approaches to client problems'
  },
  {
    id: 27,
    name: 'Industry context',
    tier: 'advanced',
    description: 'Understanding sector trends, players, and dynamics'
  },
  {
    id: 28,
    name: 'Change management',
    tier: 'advanced',
    description: 'Supporting individuals and organisations through change'
  },
  {
    id: 29,
    name: 'Client empathy',
    tier: 'advanced',
    description: 'Understanding client perspectives and motivations'
  },
  {
    id: 30,
    name: 'Insight generation',
    tier: 'advanced',
    description: 'Identifying new perspectives and meaningful insights'
  },
  {
    id: 31,
    name: 'Hypothesis-driven problem solving',
    tier: 'advanced',
    description: 'Structuring analysis and recommendations around testable ideas'
  },
  {
    id: 32,
    name: 'Presentation mastery',
    tier: 'advanced',
    description: 'Delivering compelling, clear, and professional presentations'
  },
  {
    id: 33,
    name: 'Prioritisation',
    tier: 'advanced',
    description: 'Focusing effort on the most impactful activities'
  },
  {
    id: 34,
    name: 'Negotiation',
    tier: 'advanced',
    description: 'Reaching mutually beneficial agreements with stakeholders'
  },
  {
    id: 35,
    name: 'Business case development',
    tier: 'advanced',
    description: 'Building structured, evidence-based cases for decisions'
  },
  {
    id: 36,
    name: 'Risk awareness',
    tier: 'advanced',
    description: 'Identifying and managing potential risks proactively'
  },
  {
    id: 37,
    name: 'Innovation mindset',
    tier: 'advanced',
    description: 'Encouraging creative solutions and new ways of thinking'
  },
  {
    id: 38,
    name: 'Cultural agility',
    tier: 'advanced',
    description: 'Working effectively across diverse cultural contexts'
  },
  {
    id: 39,
    name: 'Client relationship building',
    tier: 'advanced',
    description: 'Establishing long-term, trust-based client partnerships'
  },
  {
    id: 40,
    name: 'Project scoping',
    tier: 'advanced',
    description: 'Defining project objectives, deliverables, and boundaries'
  },
  {
    id: 41,
    name: 'Storylining',
    tier: 'advanced',
    description: 'Structuring presentations and documents with clear narratives'
  },
  {
    id: 42,
    name: 'Financial acumen',
    tier: 'advanced',
    description: 'Understanding financial statements and business models'
  },
  {
    id: 43,
    name: 'Adaptability',
    tier: 'advanced',
    description: 'Adjusting effectively to new information and changing situations'
  },
  {
    id: 44,
    name: 'Coaching mindset',
    tier: 'advanced',
    description: 'Supporting others’ growth through questions and feedback'
  },
  {
    id: 45,
    name: 'Decision-making under uncertainty',
    tier: 'advanced',
    description: 'Balancing options and risks with limited information'
  },
  {
    id: 46,
    name: 'Writing for impact',
    tier: 'advanced',
    description: 'Producing persuasive, clear, and professional documents'
  },
  {
    id: 47,
    name: 'Political awareness',
    tier: 'advanced',
    description: 'Recognising and navigating organisational politics'
  },
  {
    id: 48,
    name: 'Emotional intelligence',
    tier: 'advanced',
    description: 'Managing self and relationships with emotional insight'
  },
  {
    id: 49,
    name: 'Networking for influence',
    tier: 'advanced',
    description: 'Building strategic professional networks'
  }
];

// ... helper functions ...
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
    foundation: modules.filter(m => m.tier === 'foundation').length,
    intermediate: modules.filter(m => m.tier === 'intermediate').length,
    advanced: modules.filter(m => m.tier === 'advanced').length,
    total: modules.length
  };
};
