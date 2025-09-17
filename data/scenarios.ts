// data/scenarios.ts

export interface ExpertMedia {
  url: string;
  caption?: string;
  altText: string;
}

export interface Resource {
  type: 'article' | 'video' | 'intranet' | 'policy';
  title: string;
  url: string;
  description: string;
}

export interface ScenarioResponse {
  id: string; // KEEP AS STRING (A, B, C)
  text: string;
  expertRationale: string;
  expertRating: number;
  expertMedia?: ExpertMedia;
  resources?: Resource[];
}

export interface Scenario {
  id: number; // SCENARIO NUMBER WITHIN MODULE (1-5)
  moduleId: number;
  prompt: string;
  responses: ScenarioResponse[];
}

export const scenarios: Scenario[] = [
  // MODULE 1: Growth mindset (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 1
    moduleId: 1,
    prompt: "A client is hesitant about migrating to the cloud due to security concerns. They\'re particularly worried about data sovereignty and compliance with regional regulations. How do you address their specific concerns while maintaining confidence in the cloud solution?",
    responses: [
      {
        id: "A",
        text: "Explain that cloud providers often have better security than on-premise solutions due to dedicated security teams and continuous updates.",
        expertRationale: "This is a good start as it addresses the security concern directly with factual information about cloud provider capabilities. Major providers like AWS, Azure, and GCP invest billions in security and offer more robust protection than most companies can achieve on-premise.",
        expertRating: 4,
        expertMedia: {
          url: "/expert-media/cloud-security-insight.png",
          caption: "Cloud Shared Responsibility Model",
          altText: "Diagram showing how cloud security is a shared responsibility between provider and customer"
        }
      },
      {
        id: "B",
        text: "Suggest they maintain a hybrid approach to keep sensitive data on-premise while using cloud for less critical applications.",
        expertRationale: "While this seems practical, it avoids addressing the core concern about cloud security and may reinforce their fears rather than building confidence. A hybrid approach often creates more complexity without solving the fundamental trust issue.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Tell them that security is their responsibility regardless of where the data is stored, so the location doesn\'t matter.",
        expertRationale: "This is dismissive and incorrect. While clients have responsibilities, cloud providers offer significant security advantages and compliance certifications that should be highlighted. This response misses the opportunity to educate and build trust.",
        expertRating: 1
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 1
    moduleId: 1,
    prompt: "A colleague receives critical feedback on their work and becomes defensive. How do you help them reframe this?",
    responses: [
      {
        id: "A",
        text: "Agree that the feedback was too harsh and suggest ignoring it",
        expertRationale: "Reinforces avoidance rather than growth-oriented response to feedback.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Frame feedback as learning opportunity and help identify specific improvements",
        expertRationale: "Turns criticism into actionable growth, maintaining positive mindset.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to toughen up and accept criticism without emotion",
        expertRationale: "Dismisses emotional response without teaching growth perspective.",
        expertRating: 3
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 1
    moduleId: 1,
    prompt: "You\'re assigned a project outside your comfort zone. What\'s your approach?",
    responses: [
      {
        id: "A",
        text: "Decline the assignment, citing lack of relevant experience",
        expertRationale: "Fixed mindset approach that avoids growth opportunities.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Accept and view it as chance to develop new skills through challenge",
        expertRationale: "Embraces learning opportunity with growth mindset attitude.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Accept but constantly express doubts about your ability to succeed",
        expertRationale: "Mixed message that accepts challenge but maintains fixed mindset.",
        expertRating: 3
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 1
    moduleId: 1,
    prompt: "A team member fails at a task they\'ve been practicing. How do you encourage them?",
    responses: [
      {
        id: "A",
        text: "Suggest they might be better suited to different types of work",
        expertRationale: "Reinforces fixed mindset by implying innate ability limits.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Focus on progress made and strategize improvements for next attempt",
        expertRationale: "Growth-oriented approach that values learning from failure.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Avoid discussing the failure to prevent discouragement",
        expertRationale: "Misses opportunity for reflective learning and growth.",
        expertRating: 3
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 1
    moduleId: 1,
    prompt: "How do you respond when someone says &quot;I\'m not a natural leader&quot;?",
    responses: [
      {
        id: "A",
        text: "Agree that leadership requires certain innate qualities",
        expertRationale: "Supports fixed mindset view of leadership as innate trait.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Explain leadership skills can be developed through practice and experience",
        expertRationale: "Promotes growth mindset about leadership development.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Suggest they focus on technical work instead of leadership",
        expertRationale: "Limits potential by accepting fixed self-perception.",
        expertRating: 1
      }
    ]
  },

  // MODULE 2: Professional curiosity (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 2
    moduleId: 2,
    prompt: "During a client meeting, the client mentions an unfamiliar industry term. What do you do?",
    responses: [
      {
        id: "A",
        text: "Nod along and pretend you understand to maintain confidence",
        expertRationale: "Risks misunderstandings and misses learning opportunity.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask clarifying questions to understand the term and its relevance",
        expertRationale: "Demonstrates professional curiosity and builds understanding.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Make a mental note to look it up later but continue without addressing",
        expertRationale: "Better than pretending but misses immediate engagement opportunity.",
        expertRating: 3
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 2
    moduleId: 2,
    prompt: "You notice an unusual pattern in client data. How do you investigate?",
    responses: [
      {
        id: "A",
        text: "Assume it\'s a data error and proceed with standard analysis",
        expertRationale: "Misses potential insights by not investigating anomalies.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Investigate thoroughly, asking questions at each step to understand root causes",
        expertRationale: "Demonstrates deep curiosity and systematic investigation.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Mention it briefly in report but don\'t dedicate time to understand",
        expertRationale: "Superficial engagement with interesting finding.",
        expertRating: 3
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 2
    moduleId: 2,
    prompt: "A colleague from another department describes their work. How do you engage?",
    responses: [
      {
        id: "A",
        text: "Listen politely but don\'t ask questions to avoid appearing ignorant",
        expertRationale: "Misses cross-functional learning opportunity.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Ask thoughtful questions to understand their challenges and approaches",
        expertRationale: "Shows genuine curiosity and builds cross-functional knowledge.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Quickly redirect conversation to your own work and expertise",
        expertRationale: "Self-focused approach that discourages knowledge sharing.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 2
    moduleId: 2,
    prompt: "You read an article contradicting your current approach. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Dismiss it as irrelevant to your specific situation",
        expertRationale: "Closed-minded response that avoids challenging assumptions.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Research further to understand different perspectives and update approach",
        expertRationale: "Intellectually curious approach that values continuous learning.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Share it with others to criticize the article\'s methodology",
        expertRationale: "Defensive response that avoids personal reflection.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 2
    moduleId: 2,
    prompt: "A client describes a problem you\'ve solved before. How do you approach?",
    responses: [
      {
        id: "A",
        text: "Immediately propose your standard solution without further questions",
        expertRationale: "Assumes similarity without exploring unique aspects.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Ask probing questions to understand nuances before suggesting solutions",
        expertRationale: "Curious approach that seeks deeper understanding before acting.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Delegate to junior team member since you\'ve seen this before",
        expertRationale: "Misses opportunity to deepen understanding through curiosity.",
        expertRating: 3
      }
    ]
  },

  // MODULE 3: Active listening (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 3
    moduleId: 3,
    prompt: "A team member is explaining a complex problem. How do you ensure understanding?",
    responses: [
      {
        id: "A",
        text: "Interrupt frequently with solutions based on initial information",
        expertRationale: "Poor listening that prioritizes responding over understanding.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen fully, then paraphrase to confirm understanding before responding",
        expertRationale: "Demonstrates active listening through reflection and verification.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Take notes but don\'t engage verbally until they finish speaking",
        expertRationale: "Passive listening without active engagement or verification.",
        expertRating: 3
      }
    ]
  },

  // ... Continue this pattern for all modules: id: 1-5 for each module

  // MODULE 49: Networking for influence (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 49
    moduleId: 49,
    prompt: "You want to build influence with a key decision-maker. What\'s your approach?",
    responses: [
      {
        id: "A",
        text: "Send frequent emails highlighting your accomplishments",
        expertRationale: "One-way communication that doesn\'t build genuine relationship.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Seek opportunities to provide value to them before asking for anything",
        expertRationale: "Strategic approach that builds influence through genuine contribution.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask mutual connections to put in a good word for you",
        expertRationale: "Indirect approach that may not build personal credibility.",
        expertRating: 3
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 49
    moduleId: 49,
    prompt: "How do you maintain professional relationships with contacts you rarely see?",
    responses: [
      {
        id: "A",
        text: "Reach out only when you need something from them",
        expertRationale: "Transactional approach that weakens relationships over time.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Regularly share relevant insights and check in without specific asks",
        expertRationale: "Builds genuine relationships through consistent value provision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Connect on social media but don\'t engage personally",
        expertRationale: "Passive connection without meaningful relationship building.",
        expertRating: 2
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 49
    moduleId: 49,
    prompt: "You meet someone influential at a conference. How do you follow up?",
    responses: [
      {
        id: "A",
        text: "Send generic connection request without personalization",
        expertRationale: "Misses opportunity to make meaningful impression.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Reference your conversation and suggest specific follow-up action",
        expertRationale: "Personalized approach that demonstrates genuine interest.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Wait for them to reach out first to avoid seeming pushy",
        expertRationale: "Overly passive approach that may lose opportunity.",
        expertRating: 3
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 49
    moduleId: 49,
    prompt: "How do you build network influence across different organizational levels?",
    responses: [
      {
        id: "A",
        text: "Focus only on connecting with senior executives",
        expertRationale: "Limited approach that misses influence at all levels.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Build genuine relationships at all levels based on mutual respect",
        expertRationale: "Comprehensive approach recognizing influence throughout organization.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Use different personas for different organizational levels",
        expertRationale: "Inauthentic approach that may damage credibility.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 49
    moduleId: 49,
    prompt: "A contact helps you significantly. How do you strengthen this relationship?",
    responses: [
      {
        id: "A",
        text: "Send a quick thank you email and move on",
        expertRationale: "Minimal effort that doesn\'t fully acknowledge value received.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Provide specific feedback on impact of their help and offer reciprocal support",
        expertRationale: "Builds strong relationship through genuine appreciation and reciprocity.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Promise future favors you may not be able to deliver",
        expertRationale: "Creates unrealistic expectations that may damage trust.",
        expertRating: 1
      }
    ]
  }
];

// Helper function to get unique scenario identifier
export const getScenarioUniqueId = (moduleId: number, scenarioId: number): string => {
  return `${moduleId}.${scenarioId}`;
};

// UPDATE helper functions to work with moduleId + scenarioId
export const getScenarioById = (moduleId: number, scenarioId: number) => {
  return scenarios.find(scenario => scenario.moduleId === moduleId && scenario.id === scenarioId);
};

export const getScenariosByModuleId = (moduleId: number) => {
  return scenarios.filter(scenario => scenario.moduleId === moduleId);
};

export const getScenarioCountByModuleId = (moduleId: number) => {
  return getScenariosByModuleId(moduleId).length;
};

export const getRandomScenarioFromModule = (moduleId: number) => {
  const moduleScenarios = getScenariosByModuleId(moduleId);
  if (moduleScenarios.length === 0) return null;
  return moduleScenarios[Math.floor(Math.random() * moduleScenarios.length)];
};