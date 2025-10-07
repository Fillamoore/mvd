// data/modules.ts
export interface Module {
  id: number;
  name: string;
  tier: 'foundation' | 'intermediate' | 'advanced';
  description?: string;
}

export const modules: Module[] = [
  // FOUNDATION: Modules 1-9
  { id: 1,  name: 'Managing Scope',               tier: 'foundation', description: 'Embracing learning, resilience and continuous improvement.' },
  { id: 2,  name: 'Advisory Presence',            tier: 'foundation', description: 'Curious, targeted questioning to uncover hidden issues.' },
  { id: 3,  name: 'Strategic Acumen',             tier: 'foundation', description: 'Hearing intent and meaning, summarising and checking back.' },
  { id: 4,  name: 'Feedback Resilience',          tier: 'foundation', description: 'Concise, structured written communication that prompts action.' },
  { id: 5,  name: 'Structured thinking',          tier: 'foundation', description: 'Breaking problems into logical parts and clear flows.' },
  { id: 6,  name: 'Time management',              tier: 'foundation', description: 'Prioritising tasks and managing energy for consistent delivery.' },
  { id: 7,  name: 'Stakeholder awareness',        tier: 'foundation', description: 'Reading power, interests and influence across the stakeholder map.' },
  { id: 8,  name: 'Note-taking discipline',       tier: 'foundation', description: 'Reliable capture and distillation of meetings and actions.' },
  { id: 9,  name: 'Asking good questions',        tier: 'foundation', description: 'Crafting questions that surface root issues and priorities.' },

  // INTERMEDIATE: Modules 10-25
  { id: 10, name: 'Self-awareness',               tier: 'intermediate', description: 'Recognising strengths, triggers and opportunities for growth.' },
  { id: 11, name: 'Emotional intelligence',       tier: 'intermediate', description: 'Reading and responding to emotional cues constructively.' },
  { id: 12, name: 'Team collaboration',           tier: 'intermediate', description: 'Working effectively with colleagues to deliver shared outcomes.' },
  { id: 13, name: 'Adaptability',                 tier: 'intermediate', description: 'Pivoting plans and remaining productive when things change.' },
  { id: 14, name: 'Presentation basics',          tier: 'intermediate', description: 'Delivering clear, structured and confident client presentations.' },
  { id: 15, name: 'Business etiquette',           tier: 'intermediate', description: 'Professional norms that build credibility and respect.' },
  { id: 16, name: 'Problem structuring',          tier: 'intermediate', description: 'Framing messy challenges into answerable, sequenced problems.' },
  { id: 17, name: 'Hypothesis-driven thinking',   tier: 'intermediate', description: 'Formulating testable hypotheses to guide efficient analysis.' },
  { id: 18, name: 'Basic financial literacy',     tier: 'intermediate', description: 'Reading core financial statements and linking to decisions.' },
  { id: 19, name: 'Industry scanning',            tier: 'intermediate', description: 'Identifying trends, competitors and signals relevant to clients.' },
  { id: 20, name: 'Root-cause analysis',          tier: 'intermediate', description: 'Diagnosing underlying causes rather than treating symptoms.' },
  { id: 21, name: 'Data interpretation',          tier: 'intermediate', description: 'Turning numbers into meaningful insights and narratives.' },
  { id: 22, name: 'Excel modelling',              tier: 'intermediate', description: 'Building transparent, decision-focused spreadsheet models.' },
  { id: 23, name: 'Storyboarding',                tier: 'intermediate', description: 'Designing the narrative flow of presentations and reports.' },
  { id: 24, name: 'Meeting facilitation',         tier: 'intermediate', description: 'Running focused sessions that produce decisions and actions.' },
  { id: 25, name: 'Influence without authority',  tier: 'intermediate', description: 'Shaping outcomes when you don\’t hold formal power.' },

  // ADVANCED: Modules 26-50
  { id: 26, name: 'Client empathy',               tier: 'advanced', description: 'Understanding client pressures to craft adoptable solutions.' },
  { id: 27, name: 'Negotiation basics',           tier: 'advanced', description: 'Seeking constructive trade-offs to protect value and relationships.' },
  { id: 28, name: 'Risk awareness',               tier: 'advanced', description: 'Spotting and communicating project and strategic risks.' },
  { id: 29, name: 'Managing ambiguity',           tier: 'advanced', description: 'Progressing with structure despite incomplete information.' },
  { id: 30, name: 'Persuasive communication',     tier: 'advanced', description: 'Framing messages that move stakeholders to act.' },
  { id: 31, name: 'Strategic thinking',           tier: 'advanced', description: 'Connecting today\’s choices to long-term business direction.' },
  { id: 32, name: 'Market dynamics',              tier: 'advanced', description: 'Understanding competitive forces and evolving market trends.' },
  { id: 33, name: 'Policy awareness',             tier: 'advanced', description: 'Factoring regulation and policy into practical advice.' },
  { id: 34, name: 'Systems thinking',             tier: 'advanced', description: 'Seeing interdependencies and designing resilient solutions.' },
  { id: 35, name: 'Sustainability lens',          tier: 'advanced', description: 'Balancing commercial outcomes with environmental/social impact.' },
  { id: 36, name: 'Commercial awareness',         tier: 'advanced', description: 'Translating technical work into business value and trade-offs.' },
  { id: 37, name: 'Investment logic',             tier: 'advanced', description: 'Evaluating where to allocate capital for best returns.' },
  { id: 38, name: 'Value chain analysis',         tier: 'advanced', description: 'Mapping flows to find leverage and efficiencies.' },
  { id: 39, name: 'Scenario planning',            tier: 'advanced', description: 'Preparing flexible plans across multiple plausible futures.' },
  { id: 40, name: 'Competitive positioning',      tier: 'advanced', description: 'Helping clients differentiate and win in their markets.' },
  { id: 41, name: 'Change management',            tier: 'advanced', description: 'Designing adoption approaches to make change stick.' },
  { id: 42, name: 'Advisory presence',            tier: 'advanced', description: 'Projecting composure and credibility with senior leaders.' },
  { id: 43, name: 'Executive communication',      tier: 'advanced', description: 'Distilling complexity into concise, decision-ready briefs.' },
  { id: 44, name: 'Building trust',               tier: 'advanced', description: 'Demonstrating consistency, honesty and reliable delivery.' },
  { id: 45, name: 'Ethical judgement',            tier: 'advanced', description: 'Making principled decisions under professional pressure.' },
  { id: 46, name: 'Coaching juniors',             tier: 'advanced', description: 'Developing others through feedback, delegation and guidance.' },
  { id: 47, name: 'Handling conflict',            tier: 'advanced', description: 'Resolving disputes constructively while preserving relationships.' },
  { id: 48, name: 'Managing up',                  tier: 'advanced', description: 'Aligning senior stakeholders and setting realistic expectations.' },
  { id: 49, name: 'Networking for influence',     tier: 'advanced', description: 'Building strategic connections that open opportunities.' }
  //{ id: 50, name: 'Thought leadership',           tier: 'advanced', description: 'Crafting and sharing ideas that shape the agenda.' }
];

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
