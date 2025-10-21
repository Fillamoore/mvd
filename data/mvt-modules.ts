// data/modules.ts
export interface Module {
  id: number;
  title: string;
}

export const modules: Module[] = [
  // FOUNDATION: Modules 1-9
  { id: 1,  title: 'Managing Scope'},
  { id: 2,  title: 'Advisory Presence'},
  { id: 3,  title: 'Strategic Acumen'},
  { id: 4,  title: 'Feedback Resilience'},
  { id: 5,  title: 'Structured Thinking'},
  { id: 6,  title: 'Managing Projects'},
  { id: 7,  title: 'Stakeholder awareness'},
  { id: 8,  title: 'Note-taking discipline'},
  { id: 9,  title: 'Asking good questions'},

  // INTERMEDIATE: Modules 10-25
  { id: 10, title: 'Self-awareness'},              
  { id: 11, title: 'Emotional intelligence'},      
  { id: 12, title: 'Team collaboration'},          
  { id: 13, title: 'Adaptability'},                
  { id: 14, title: 'Presentation basics'},         
  { id: 15, title: 'Business etiquette'},          
  { id: 16, title: 'Problem structuring'},         
  { id: 17, title: 'Hypothesis-driven thinking'},  
  { id: 18, title: 'Basic financial literacy'},    
  { id: 19, title: 'Industry scanning'},          
  { id: 20, title: 'Root-cause analysis'},
  { id: 21, title: 'Data interpretation'},
  { id: 22, title: 'Excel modelling'},
  { id: 23, title: 'Storyboarding'},
  { id: 24, title: 'Meeting facilitation'},
  { id: 25, title: 'Influence without authority'},

  // ADVANCED: Modules 26-50
  { id: 26, title: 'Client empathy'},
  { id: 27, title: 'Negotiation basics'},
  { id: 28, title: 'Risk awareness'},
  { id: 29, title: 'Managing ambiguity'},
  { id: 30, title: 'Persuasive communication'},
  { id: 31, title: 'Strategic thinking'},
  { id: 32, title: 'Market dynamics'},
  { id: 33, title: 'Policy awareness'}, 
  { id: 34, title: 'Systems thinking'},
  { id: 35, title: 'Sustainability lens'},
  { id: 36, title: 'Commercial awareness'}, 
  { id: 37, title: 'Investment logic'},
  { id: 38, title: 'Value chain analysis'},
  { id: 39, title: 'Scenario planning'},
  { id: 40, title: 'Competitive positioning'},
  { id: 41, title: 'Change management'},
  { id: 42, title: 'Advisory presence'},
  { id: 43, title: 'Executive communication'},
  { id: 44, title: 'Building trust'}, 
  { id: 45, title: 'Ethical judgement'}, 
  { id: 46, title: 'Coaching juniors'},
  { id: 47, title: 'Handling conflict'},
  { id: 48, title: 'Managing up'},
  { id: 49, title: 'Networking for influence'}
];

export const getModuleById = (id: number) => {
  return modules.find(module => module.id === id);
};

