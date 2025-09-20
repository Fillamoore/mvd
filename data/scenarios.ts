// /data/scenarios.ts
export type ExpertMedia = {
  type: 'image';
  url: string; // Updated from 'src'
  caption?: string;
  altText: string; // Updated from 'alt'
};

export type Resource = {
  title: string;
  url: string;
};

export type ScenarioResponse = {
  id: string;
  text: string;
  expertRationale: string;
  expertRating: number;
  expertMedia?: ExpertMedia;
  resources?: Resource[];
};

export type Scenario = {
  id: number;
  moduleId: number;
  prompt: string;
  responses: ScenarioResponse[];
};

export const scenarios: Scenario[] = [
  // MODULE 1: Growth mindset (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 1
    moduleId: 1,
    prompt: "A client is hesitant about migrating to the cloud due to security concerns. They're particularly worried about data sovereignty and compliance with regional regulations. How do you address their specific concerns while maintaining confidence in the cloud solution?",
    responses: [
      {
        id: "A",
        text: "Explain that cloud providers often have better security than on-premise solutions due to dedicated security teams and continuous updates.",
        expertRationale: "This is a good start as it addresses the security concern directly with factual information about cloud provider capabilities. Major providers like AWS, Azure, and GCP invest billions in security and offer more robust protection than most companies can achieve on-premise.",
        expertRating: 4,
        expertMedia: {
          // You must add this property now!
          type: "image", 
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
        text: "Tell them that security is their responsibility regardless of where the data is stored, so the location doesn't matter.",
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
    prompt: "You're assigned a project outside your comfort zone. What's your approach?",
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
    prompt: "A team member fails at a task they've been practicing. How do you encourage them?",
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
    prompt: "How do you respond when someone says \"I'm not a natural leader\"?",
    responses: [
      {
        id: "A",
        text: "Explain leadership skills can be developed through practice and experience",
        expertRationale: "Promotes growth mindset about leadership development.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Agree that leadership requires certain innate qualities",
        expertRationale: "Supports fixed mindset view of leadership as innate trait.",
        expertRating: 2
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
        text: "Investigate thoroughly, asking questions at each step to understand root causes",
        expertRationale: "Demonstrates deep curiosity and systematic investigation.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Assume it's a data error and proceed with standard analysis",
        expertRationale: "Misses potential insights by not investigating anomalies.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Mention it briefly in report but don't dedicate time to understand",
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
        text: "Ask thoughtful questions to understand their challenges and approaches",
        expertRationale: "Shows genuine curiosity and builds cross-functional knowledge.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Listen politely but don't ask questions to avoid appearing ignorant",
        expertRationale: "Misses cross-functional learning opportunity.",
        expertRating: 2
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
        text: "Share it with others to criticize the article's methodology",
        expertRationale: "Defensive response that avoids personal reflection.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 2
    moduleId: 2,
    prompt: "A client describes a problem you've solved before. How do you approach?",
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
        text: "Delegate to junior team member since you've seen this before",
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
        text: "Take notes but don't engage verbally until they finish speaking",
        expertRationale: "Passive listening without active engagement or verification.",
        expertRating: 3
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 3
    moduleId: 3,
    prompt: "You are in a one-on-one with a direct report who seems disengaged. How do you approach the conversation to get them to open up?",
    responses: [
      {
        id: "A",
        text: "Tell them to be more engaged and ask what's wrong directly.",
        expertRationale: "This can make the person feel defensive and shut down. A direct command and question can be intimidating and lead to a lack of genuine response.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Share a personal experience of feeling disengaged and ask if they're experiencing something similar.",
        expertRationale: "This builds a sense of shared vulnerability and trust, making it easier for the other person to open up. It shows empathy and a desire to connect on a human level.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Change the topic to something you both enjoy to make them feel more comfortable.",
        expertRationale: "While well-intentioned, this avoids the root problem and doesn't address the disengagement. It misses an opportunity for a meaningful conversation and resolution.",
        expertRating: 3
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 3
    moduleId: 3,
    prompt: "A stakeholder gives a long, detailed explanation of a problem with no clear conclusion. What do you do next?",
    responses: [
      {
        id: "A",
        text: "Politely interrupt and try to get them to summarize the key point.",
        expertRationale: "This may be seen as rude and can make the stakeholder feel their contribution isn't valued. It can cause them to feel unheard and frustrated.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Listen until they finish, then summarize what you've heard and ask for confirmation.",
        expertRationale: "This is a classic active listening technique. It shows you've been paying attention, ensures you understand their perspective, and helps them clarify their thoughts.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Assume you understand and move on to the next topic to save time.",
        expertRationale: "This is a high-risk approach. You may misunderstand the problem, leading to incorrect solutions and a breakdown in communication.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 3
    moduleId: 3,
    prompt: "A client is venting about a major project setback. What's the best way to respond to their frustration?",
    responses: [
      {
        id: "A",
        text: "Jump in with a list of immediate solutions to fix the problem.",
        expertRationale: "This can make the client feel like you're not listening to their emotions. They may need to vent and feel heard before they're ready to discuss solutions.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Acknowledge their frustration and validate their feelings before discussing next steps.",
        expertRationale: "This demonstrates empathy and active listening. It builds trust by showing you care about their feelings as well as the business problem, which is crucial for a strong client relationship.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to calm down and focus on the logical steps to resolve the issue.",
        expertRationale: "This is a dismissive and unhelpful response that can make the client feel invalidated and disrespected. It can escalate their frustration and damage the relationship.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 3
    moduleId: 3,
    prompt: "You're in a meeting and a junior colleague is speaking quietly. How do you ensure their voice is heard?",
    responses: [
      {
        id: "A",
        text: "Ignore them; if they had something important to say, they would speak up.",
        expertRationale: "This is a passive and unsupportive approach that may silence valuable insights and discourage team members from contributing in the future.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Paraphrase their point loudly to the rest of the group and give them credit.",
        expertRationale: "This is a great way to amplify their voice and give them credit. It demonstrates that you value their contribution and encourages them to participate more confidently in the future.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask them directly in front of everyone to speak louder.",
        expertRationale: "This can put the person on the spot and make them feel uncomfortable or embarrassed, potentially making them even less likely to speak up.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 4: Team Collaboration (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 4
    moduleId: 4,
    prompt: "Two team members have conflicting ideas on how to approach a project. How do you facilitate a resolution?",
    responses: [
      {
        id: "A",
        text: "Choose the solution you think is best and tell the team to follow it.",
        expertRationale: "This approach is autocratic and shuts down team discussion. It can lead to resentment and a lack of buy-in from the team.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Encourage a debate between the two individuals and let the best idea win.",
        expertRationale: "This can turn into a competitive and non-collaborative environment. It may not lead to the best solution and can harm team dynamics.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Listen to both perspectives, highlight the strengths of each, and help the team synthesize a new, combined approach.",
        expertRationale: "This is a collaborative and facilitative approach that values both team members' contributions. It promotes a sense of shared ownership and leads to a more robust solution.",
        expertRating: 5
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 4
    moduleId: 4,
    prompt: "A project is behind schedule. The team is pointing fingers at each other. How do you restore a sense of shared responsibility?",
    responses: [
      {
        id: "A",
        text: "Assign blame to the person you think is most responsible to set an example.",
        expertRationale: "Blaming an individual creates a toxic environment and discourages future risk-taking. It doesn't solve the underlying systemic issues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Hold a meeting to get everyone to confess their mistakes.",
        expertRationale: "This can be counterproductive and lead to defensiveness. People may not feel safe being honest, and it won't necessarily lead to a solution.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Focus on the process, not the people. Have the team collectively identify bottlenecks and create an action plan to get back on track.",
        expertRationale: "This approach fosters a 'we're in this together' mindset. It de-personalizes the problem and focuses on process improvement, which is key for long-term success.",
        expertRating: 5
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 4
    moduleId: 4,
    prompt: "You notice a team member is consistently excluded from group discussions. How do you ensure their participation?",
    responses: [
      {
        id: "A",
        text: "Ignore it; they'll speak up if they have something to say.",
        expertRationale: "This is a passive approach that allows a negative team dynamic to continue. It can lead to valuable contributions being missed and a team member feeling isolated.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Call them out directly in the meeting and ask them to share their thoughts.",
        expertRationale: "This can put the person on the spot and make them feel uncomfortable, especially if they are introverted. It may not lead to genuine participation.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Actively solicit their input by saying something like, 'John, you have a lot of experience with this, what are your thoughts?'",
        expertRationale: "This is a supportive and respectful way to encourage participation. It shows that you value their specific expertise and creates a safe space for them to contribute.",
        expertRating: 5
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 4
    moduleId: 4,
    prompt: "A team member is not pulling their weight, impacting the project timeline. What's your first step?",
    responses: [
      {
        id: "A",
        text: "Publicly call out their lack of contribution in a team meeting.",
        expertRationale: "Public shaming is detrimental to team morale and trust. It will likely cause the person to become defensive and will not solve the problem.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Privately meet with the team member to understand if there are any obstacles they are facing.",
        expertRationale: "This is a respectful and effective approach. It shows that you are concerned and are trying to understand the root cause, which may be a personal or professional issue. It builds trust and a path toward a solution.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Re-assign their work to someone else on the team to ensure the project stays on track.",
        expertRationale: "This may provide a short-term fix, but it doesn't address the underlying issue and may create resentment among team members. It also doesn't give the person a chance to improve.",
        expertRating: 3
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 4
    moduleId: 4,
    prompt: "Your team has successfully completed a major project. How do you celebrate and reinforce collaborative behaviors?",
    responses: [
      {
        id: "A",
        text: "Give a bonus to the top performer to recognize individual excellence.",
        expertRationale: "While individual recognition is good, focusing on a single person can undermine the concept of teamwork. It may create a competitive rather than collaborative environment.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Have a team-wide celebration and specifically highlight how key collaborative efforts contributed to the success.",
        expertRationale: "This reinforces the value of teamwork and shared success. By highlighting specific collaborative behaviors, you create a positive feedback loop that encourages more of the same behavior in the future.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Just say 'good job, everyone' and move on to the next project.",
        expertRationale: "This is a missed opportunity to build team morale and acknowledge the hard work that was put in. It can make the team feel undervalued.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 5: Problem Solving (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 5
    moduleId: 5,
    prompt: "A project you're leading hits an unexpected technical roadblock. What's your first step to solving the problem?",
    responses: [
      {
        id: "A",
        text: "Immediately try to fix it yourself, working long hours to get it done.",
        expertRationale: "This may lead to a 'hero' mentality and can prevent the team from learning and contributing. It's often inefficient and doesn't leverage collective expertise.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Gather the team, clearly define the problem, and brainstorm potential solutions together.",
        expertRationale: "This is a collaborative and effective problem-solving approach. It leverages diverse perspectives and leads to a more comprehensive and creative solution.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Report the problem to your manager and wait for them to provide a solution.",
        expertRationale: "This is a passive approach that shows a lack of initiative. It pushes responsibility upwards rather than taking ownership of the challenge.",
        expertRating: 1
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 5
    moduleId: 5,
    prompt: "You've tried several solutions to a problem, but none have worked. What's your next move?",
    responses: [
      {
        id: "A",
        text: "Keep trying the same solutions, hoping one will eventually work.",
        expertRationale: "This is an inefficient and frustrating approach. It shows a lack of adaptability and may lead to burnout.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a step back, re-evaluate the core problem, and consider a completely new approach.",
        expertRationale: "This is a classic 'first principles' approach. By questioning assumptions and re-defining the problem, you open up new avenues for innovative solutions.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Give up and tell your manager the problem is unsolvable.",
        expertRationale: "This is a defeatist attitude and is rarely an acceptable solution. It shows a lack of persistence and a fixed mindset.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 5
    moduleId: 5,
    prompt: "A complex problem involves multiple departments with different priorities. How do you facilitate a resolution?",
    responses: [
      {
        id: "A",
        text: "Focus only on your department's needs and assume the others will follow suit.",
        expertRationale: "This is a siloed and uncollaborative approach that will likely lead to conflict and an ineffective solution. It ignores the interconnected nature of the problem.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Bring all stakeholders together, define the problem from each perspective, and find a common goal.",
        expertRationale: "This is a highly effective approach for complex, cross-functional problems. It ensures all voices are heard, builds alignment, and leads to a shared sense of ownership of the solution.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Let the department heads sort it out among themselves.",
        expertRationale: "This is a hands-off approach that abdicates responsibility. It may lead to a stalemate or a subpar solution that doesn't serve the organization as a whole.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 5
    moduleId: 5,
    prompt: "You're presented with a problem that seems overwhelming. How do you begin to tackle it?",
    responses: [
      {
        id: "A",
        text: "Try to solve the entire problem at once to get it over with quickly.",
        expertRationale: "This is a common mistake that can lead to feeling overwhelmed and making errors. It's often an inefficient and stressful way to work.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the problem down into smaller, manageable sub-problems and prioritize them.",
        expertRationale: "This is a strategic and systematic approach to problem-solving. It makes the problem feel less daunting and allows for incremental progress and clearer accountability.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Wait for a more senior person to tell you what to do.",
        expertRationale: "This is a passive approach that shows a lack of initiative and critical thinking. It doesn't contribute to your professional growth.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 5
    moduleId: 5,
    prompt: "After implementing a solution, the problem resurfaces. What do you do?",
    responses: [
      {
        id: "A",
        text: "Re-implement the same solution, but more carefully.",
        expertRationale: "This ignores the possibility that the solution was not the right one. It's a sign of a fixed mindset that doesn't adapt to new information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Analyze why the previous solution failed and identify the true root cause of the recurring problem.",
        expertRationale: "This is a reflective and proactive approach. It's an example of a growth mindset that values learning from setbacks and getting to the core of an issue.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Blame external factors or other team members for the failure.",
        expertRationale: "This is a defensive and unproductive response. It avoids taking responsibility and creates a negative team environment.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 6: Emotional Intelligence (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 6
    moduleId: 6,
    prompt: "A colleague seems stressed and overwhelmed with their workload. What's your first step?",
    responses: [
      {
        id: "A",
        text: "Tell them to manage their stress better and to 'just get it done.'",
        expertRationale: "This is an unsympathetic and unhelpful response. It disregards their feelings and offers no constructive support.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Check in with them privately, express empathy, and ask how you can help.",
        expertRationale: "This is a highly emotionally intelligent response. It shows you recognize their feelings and are willing to offer support, which builds trust and a positive team environment.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Assume it's not your problem and focus on your own work.",
        expertRationale: "This is a self-focused approach that ignores the well-being of a teammate. It can lead to feelings of isolation and a lack of psychological safety on the team.",
        expertRating: 1
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 6
    moduleId: 6,
    prompt: "You receive feedback that your communication style is too direct and is perceived as blunt by others. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Dismiss the feedback, thinking, 'That's just how I am.'",
        expertRationale: "This shows a lack of self-awareness and a fixed mindset. It prevents you from adapting your communication style to be more effective with different people.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask for specific examples and try to understand the impact of your words on others.",
        expertRationale: "This is a great example of self-awareness and a growth mindset. By seeking specific examples, you can learn and adapt your communication style to be more effective.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Apologize profusely and say you'll change, but don't take any concrete steps.",
        expertRationale: "This is a superficial response. While an apology is good, it's not enough without genuine effort to change behavior. It shows a lack of commitment to growth.",
        expertRating: 2
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 6
    moduleId: 6,
    prompt: "During a heated debate, a colleague gets emotional and raises their voice. What's the most productive way to de-escalate the situation?",
    responses: [
      {
        id: "A",
        text: "Raise your voice back to show you won't be intimidated.",
        expertRationale: "This will only escalate the conflict and is a highly unproductive way to handle an emotional situation. It can damage professional relationships beyond repair.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Stay calm, acknowledge their frustration, and suggest taking a short break to cool down.",
        expertRationale: "This is a great example of emotional regulation and empathy. By acknowledging their feelings and suggesting a break, you show you're taking their emotions seriously while creating a space for rational discussion.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them their emotions are unprofessional and they need to control themselves.",
        expertRationale: "This is a judgmental and dismissive response. It can make the person feel shamed and will likely lead to them shutting down or becoming more aggressive.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 6
    moduleId: 6,
    prompt: "You notice a team member seems to lack confidence in their work. How do you help them?",
    responses: [
      {
        id: "A",
        text: "Ignore it and assume they'll gain confidence with more experience.",
        expertRationale: "This is a passive approach that does not provide the necessary support. Confidence often needs to be actively nurtured through positive reinforcement.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Provide specific, positive feedback on their contributions and offer mentorship.",
        expertRationale: "This is a supportive and proactive approach. Specific feedback helps them understand what they're doing well, and mentorship provides a safe space for them to ask questions and grow.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them they need to be more confident in their abilities.",
        expertRationale: "This is a well-intentioned but unhelpful piece of advice. It doesn't tell them *how* to become more confident and can feel like a platitude.",
        expertRating: 3
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 6
    moduleId: 6,
    prompt: "A project fails and you feel frustrated and disappointed. How do you manage your emotions before addressing the team?",
    responses: [
      {
        id: "A",
        text: "Immediately call a meeting and vent your frustrations to the team.",
        expertRationale: "This is an example of poor emotional regulation. It can damage team morale and make them feel blamed. A leader should be composed and strategic in their communication.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a moment to process your emotions, then hold a meeting to discuss what was learned and what's next.",
        expertRationale: "This is an example of strong emotional self-management. By processing your emotions first, you can approach the team with a clear head and focus on constructive feedback and a path forward.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Hide your disappointment and pretend everything is fine.",
        expertRationale: "This is a missed opportunity for transparency and can make the team feel you're not being honest with them. Acknowledging the disappointment can build trust and show you're human.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 7: Critical Thinking (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 7
    moduleId: 7,
    prompt: "You are given a report with a clear recommendation. How do you decide whether to follow it?",
    responses: [
      {
        id: "A",
        text: "Accept the recommendation at face value, as it's from a credible source.",
        expertRationale: "This is a passive approach that lacks critical thinking. While the source may be credible, a good professional always verifies and understands the reasoning behind a recommendation.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Analyze the data, question the assumptions, and consider alternative conclusions before deciding.",
        expertRationale: "This is a strong example of critical thinking. It involves questioning, analyzing, and synthesizing information to make an informed decision rather than a passive one.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask a colleague for their opinion and follow their advice.",
        expertRationale: "While collaboration is good, this approach outsources your responsibility for critical thinking. It's not a reliable way to make an independent and informed decision.",
        expertRating: 3
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 7
    moduleId: 7,
    prompt: "A client proposes a solution that seems simple and effective, but you have a gut feeling it won't work long-term. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Go along with the client's suggestion to maintain a good relationship.",
        expertRationale: "This is a short-sighted and potentially harmful approach. It prioritizes a momentary good relationship over a long-term, effective solution, which can damage trust in the long run.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Analyze your 'gut feeling' by breaking down the long-term implications and explaining your concerns with data.",
        expertRationale: "This is a great example of using critical thinking to turn a 'gut feeling' into a concrete, data-driven argument. It respects the client's idea while advocating for a better, more sustainable solution.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the client their idea is a bad one and propose your solution instead.",
        expertRationale: "This is an abrasive and uncollaborative approach. It can make the client feel defensive and may damage the relationship, even if your solution is better.",
        expertRating: 2
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 7
    moduleId: 7,
    prompt: "You are presented with a new tool that promises to increase efficiency by 50%. How do you evaluate this claim?",
    responses: [
      {
        id: "A",
        text: "Believe the claim and immediately push for adoption across the team.",
        expertRationale: "This is a naive approach that lacks critical evaluation. It can lead to wasting resources on tools that don't deliver on their promises.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Look for independent case studies, ask for a trial period, and test the claim yourself with real data.",
        expertRationale: "This is a robust, evidence-based approach to decision-making. It relies on verification and testing rather than blind trust, which is a hallmark of critical thinking.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Dismiss the claim as 'too good to be true' without further investigation.",
        expertRationale: "This is a cynical approach that misses a potential opportunity. While skepticism is healthy, dismissing something without evidence is not critical thinking.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 7
    moduleId: 7,
    prompt: "Your team is proposing a major change based on a recent industry trend. How do you assess the validity of this trend?",
    responses: [
      {
        id: "A",
        text: "Assume the trend is valid because 'everyone' is talking about it.",
        expertRationale: "This is an example of herd mentality and a lack of critical analysis. Not all trends are relevant or applicable to your specific situation.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Research the trend's origins, identify its key drivers, and assess its relevance and potential impact on your specific business context.",
        expertRationale: "This is a thoughtful and analytical approach. It goes beyond the surface level of the trend to understand its deeper implications, ensuring that any decision is well-informed and strategic.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Wait for a competitor to adopt the trend first to see if it works for them.",
        expertRationale: "This is a reactive approach that puts you behind the curve. While it's good to learn from competitors, being a follower can lead to missed opportunities.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 7
    moduleId: 7,
    prompt: "You are asked to analyze a dataset. You notice a few data points that seem to be outliers. What is your process?",
    responses: [
      {
        id: "A",
        text: "Delete the outliers, as they are probably errors and will skew the results.",
        expertRationale: "This is a dangerous approach. While outliers can be errors, they can also be the most important data points, revealing a critical, non-obvious pattern or problem. Deleting them is a form of confirmation bias.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Investigate the outliers to understand their cause and determine if they are valid or not.",
        expertRationale: "This is a good example of intellectual curiosity and critical thinking. By investigating the outliers, you may uncover a new insight, a mistake in the process, or a valuable piece of information you would have otherwise missed.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Leave the outliers in the dataset without any special handling.",
        expertRationale: "This can lead to a skewed analysis. While not as bad as deleting them, it shows a lack of diligence in ensuring data integrity and the accuracy of your conclusions.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 8: Adaptability (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 8
    moduleId: 8,
    prompt: "A project you've been working on for months is suddenly cancelled due to a company pivot. How do you react?",
    responses: [
      {
        id: "A",
        text: "Feel frustrated and complain to your colleagues about the wasted effort.",
        expertRationale: "While a natural reaction, this is a fixed mindset response that focuses on the negative. It can lower team morale and is not a constructive way to move forward.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Accept the change, seek to understand the new priorities, and pivot your efforts to the new goal.",
        expertRationale: "This is a prime example of adaptability and a growth mindset. It demonstrates an ability to manage emotions and quickly re-align with new strategic goals.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Continue to work on the cancelled project in your free time, hoping it will be resurrected.",
        expertRationale: "This is a stubborn and unproductive response that shows an inability to adapt to changing circumstances. It's a waste of time and energy.",
        expertRating: 1
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 8
    moduleId: 8,
    prompt: "A new, unexpected technology becomes a major industry standard, requiring you to learn a new skill. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Hope that the new technology doesn't become relevant to your work and continue with what you know.",
        expertRationale: "This is a reactive and short-sighted approach. It shows a lack of foresight and a reluctance to grow, which can make you and the team obsolete.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Enthusiastically begin learning the new technology and look for ways to apply it to your current projects.",
        expertRationale: "This is a proactive and adaptable approach. It shows intellectual curiosity and a commitment to staying relevant in a changing professional landscape.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Express frustration about having to learn something new and complain about the time it will take.",
        expertRationale: "This shows a negative attitude toward change and is not a productive way to approach learning a new skill. It can also demotivate colleagues.",
        expertRating: 2
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 8
    moduleId: 8,
    prompt: "Due to a change in market conditions, your team's top priority shifts completely. How do you communicate this to your team?",
    responses: [
      {
        id: "A",
        text: "Announce the change abruptly without any context or explanation.",
        expertRationale: "This can make the team feel disoriented and confused. It shows a lack of leadership and an inability to manage change effectively.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Hold a meeting to explain the 'why' behind the change, discuss the new priorities, and solicit feedback on how to move forward.",
        expertRationale: "This is an effective and empathetic way to manage change. By providing context and involving the team, you build trust and buy-in, making the transition smoother.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Wait for the team to figure out the change on their own.",
        expertRationale: "This is a passive and irresponsible approach. It can lead to a lack of alignment and confusion, which can hurt productivity.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 8
    moduleId: 8,
    prompt: "A new remote work policy is implemented. How do you ensure you and your team adapt effectively?",
    responses: [
      {
        id: "A",
        text: "Ignore the new policy and continue working as you did before.",
        expertRationale: "This shows a lack of adaptability and disrespect for company policy. It can lead to a breakdown in communication and a lack of productivity.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Research best practices for remote work, establish new communication norms with your team, and proactively check in on their well-being.",
        expertRationale: "This is a proactive and supportive approach. It shows an ability to adapt to a new environment and to lead the team through the change successfully.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Assume remote work will be less productive and express your doubts to management.",
        expertRationale: "This is a negative and unhelpful attitude. While it's okay to have concerns, expressing them without offering solutions is not constructive.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 8
    moduleId: 8,
    prompt: "Your role is expanded to include responsibilities you have no experience with. How do you approach this new challenge?",
    responses: [
      {
        id: "A",
        text: "Decline the new responsibilities, stating they are outside your job description.",
        expertRationale: "This is a fixed mindset response that avoids an opportunity for growth and development. It can also be a career-limiting move.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Embrace the challenge, create a learning plan, and seek mentorship from those with the required skills.",
        expertRationale: "This is a fantastic example of adaptability and a growth mindset. It shows that you are willing to step out of your comfort zone and take ownership of your professional development.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to perform the new responsibilities without asking for help, fearing you'll look incompetent.",
        expertRationale: "This can lead to poor performance and a missed opportunity for learning. Asking for help is a sign of strength and a commitment to doing a good job.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 9: Creativity and Innovation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 9
    moduleId: 9,
    prompt: "A team member proposes a creative, but risky, idea. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Dismiss the idea immediately, as it's too risky and may not work.",
        expertRationale: "This is a creativity-killing response. It discourages future innovation and promotes a fear of failure. Many great ideas start with risk.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Encourage the team member to elaborate on the idea and explore a way to test it on a small scale.",
        expertRationale: "This is a great example of fostering innovation. By creating a safe space to explore the idea and suggesting a low-risk way to test it, you show that you value creativity.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to stick to the established plan and not to rock the boat.",
        expertRationale: "This is a fixed mindset response that prioritizes stability over innovation. It can lead to a stagnant and uncompetitive team or organization.",
        expertRating: 1
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 9
    moduleId: 9,
    prompt: "Your team is stuck on a problem and can't find a solution. How do you facilitate a creative breakthrough?",
    responses: [
      {
        id: "A",
        text: "Force the team to stay in the meeting until a solution is found.",
        expertRationale: "This can lead to frustration and burnout. Creativity often comes from taking a step back and approaching a problem from a fresh perspective, not from brute force.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Suggest a 'divergent thinking' session where you encourage all ideas, no matter how wild, without judgment.",
        expertRationale: "This is a proven technique for fostering creativity. It removes the pressure of finding the 'right' answer and encourages a free flow of ideas, which can lead to unexpected solutions.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask for more time and delegate the problem to another team.",
        expertRationale: "This is a passive and unhelpful response. It avoids the challenge and shows a lack of confidence in the team's ability to innovate.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 9
    moduleId: 9,
    prompt: "You have a new, innovative idea for a product or service. How do you get buy-in from your stakeholders?",
    responses: [
      {
        id: "A",
        text: "Send a long, detailed document outlining every aspect of the idea and hope they read it.",
        expertRationale: "This is an inefficient way to communicate an idea. It may be too much information at once and can be easily ignored.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Create a compelling narrative around the problem you're solving, present a simple prototype or a visual, and solicit their feedback.",
        expertRationale: "This is a highly effective way to sell an idea. A compelling story and a tangible example make the idea relatable and memorable. By soliciting feedback, you make them feel part of the process.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Wait for someone else to have a similar idea before proposing yours.",
        expertRationale: "This is a reactive and unassertive approach. It can lead to missed opportunities and a lack of professional recognition.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 9
    moduleId: 9,
    prompt: "Your boss has a traditional, 'if it ain't broke, don't fix it' mindset. How do you introduce an innovative process change?",
    responses: [
      {
        id: "A",
        text: "Go around your boss and implement the change without their approval.",
        expertRationale: "This is a disrespectful and risky approach that can damage your relationship with your boss and lead to a lack of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Frame the change in terms of its business benefits, such as cost savings or efficiency, and suggest a small-scale pilot project.",
        expertRationale: "This is a smart and strategic approach. By framing the change in terms of what matters to your boss (business benefits) and proposing a low-risk way to test it, you increase the chances of buy-in.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Give up on the idea because your boss will never be open to it.",
        expertRationale: "This is a defeatist attitude that shows a lack of persistence and a fixed mindset about others' openness to change.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 9
    moduleId: 9,
    prompt: "How do you maintain a high level of creativity in a routine, repetitive role?",
    responses: [
      {
        id: "A",
        text: "Accept that the role is not creative and focus on just getting the work done.",
        expertRationale: "This is a fixed mindset that closes the door to opportunities for innovation. Even in a routine role, there are always ways to optimize and improve.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Look for small ways to automate tasks or find more efficient workflows.",
        expertRationale: "This is a great way to apply creativity in a routine role. By looking for small improvements, you can make the work more interesting and free up time for more creative, strategic tasks.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Delegate the repetitive tasks to someone else to free up your time for creative work.",
        expertRationale: "While this can be a good strategy, it's not always possible. This response doesn't address how to be creative within the role itself.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 10: Leadership and Influence (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 10
    moduleId: 10,
    prompt: "A project team is lacking direction and motivation. How do you provide leadership?",
    responses: [
      {
        id: "A",
        text: "Step back and let the team figure it out on their own.",
        expertRationale: "This is a passive approach that abdicates leadership responsibility. It can lead to project failure and a demoralized team.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Clearly articulate the project's vision, set clear goals, and empower the team with the autonomy to achieve them.",
        expertRationale: "This is a strong leadership approach. A clear vision provides purpose, and empowering the team builds trust and a sense of ownership.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Micromanage every task to ensure nothing goes wrong.",
        expertRationale: "This approach stifles creativity and can lead to resentment and a lack of trust. It doesn't empower the team to grow and take initiative.",
        expertRating: 1
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 10
    moduleId: 10,
    prompt: "A junior team member proposes an idea you know has been tried and failed before. How do you handle their suggestion respectfully?",
    responses: [
      {
        id: "A",
        text: "Acknowledge their creativity, then explain why the previous attempt failed and what new variables might make it worth considering again.",
        expertRationale: "This is a great approach. It respects the junior team member's effort and curiosity while providing valuable context. This helps them learn and feel valued, rather than shut down.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell them 'That won't work' and move on to the next idea.",
        expertRationale: "This is dismissive and disrespectful. It can discourage the team member from contributing ideas in the future.",
        expertRating: 1
      },
      {
        id: "C",
        text: "Pretend to consider the idea but then dismiss it later without an explanation.",
        expertRationale: "This is a disingenuous approach that can lead to a lack of trust and a feeling of being manipulated.",
        expertRating: 2
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 10
    moduleId: 10,
    prompt: "You need to influence a key stakeholder who is skeptical about your team's proposed strategy. What's the most effective way to gain their support?",
    responses: [
      {
        id: "A",
        text: "Present a detailed, data-driven case and focus on how the strategy aligns with their specific goals and priorities.",
        expertRationale: "This is a strong strategy. By addressing their concerns directly with data and showing how your plan helps them achieve their goals, you build a logical case that is hard to refute.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Ask a more senior colleague to talk to the stakeholder for you.",
        expertRationale: "This is a way to avoid the challenge. While it may solve the immediate problem, it doesn't teach you how to handle difficult stakeholders in the future.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Tell them to trust you because you're the expert on the team.",
        expertRationale: "This is an arrogant and unhelpful response that will likely cause the stakeholder to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 10
    moduleId: 10,
    prompt: "A project is behind schedule and morale is low. As a leader, what's the best way to address the issue with your team?",
    responses: [
      {
        id: "A",
        text: "Blame the team for the delays and demand they work overtime to catch up.",
        expertRationale: "Blaming and demanding will only further demotivate the team and destroy morale. It's a short-sighted and ineffective approach.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Hold an emergency meeting to identify the root causes of the delays collaboratively and create a new, realistic plan together.",
        expertRationale: "This is a strong leadership approach. It fosters a sense of shared responsibility and empowers the team to solve the problem together. It's a key part of servant leadership.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Offer a small bonus to whoever works the hardest in the next week.",
        expertRationale: "This is a poor incentive. It pits team members against each other and doesn't address the core problem. It may cause more harm than good.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 10
    moduleId: 10,
    prompt: "You want to empower your team to be more autonomous. How do you begin to delegate more responsibility?",
    responses: [
      {
        id: "A",
        text: "Start delegating tasks you don't want to do, without providing any guidance or support.",
        expertRationale: "This is a poor way to delegate. It shows a lack of respect for the team and can lead to a sense of being used. It will likely result in poor-quality work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Delegate a key task with a clear outcome, provide them with the necessary resources and support, and schedule regular check-ins to monitor their progress.",
        expertRationale: "This is the most effective way to delegate. It provides clarity and support while giving the team member the autonomy they need to grow. It builds trust and a sense of ownership.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Assign a complex project to a team member and tell them you'll check on their progress at the end of the month.",
        expertRationale: "This is an example of poor delegation. It gives too little guidance and support, which can set the team member up for failure and a sense of abandonment.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 11: Time Management (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 11
    moduleId: 11,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 11
    moduleId: 11,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 11
    moduleId: 11,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 11
    moduleId: 11,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 11
    moduleId: 11,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 12: Public Speaking and Presentation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 12
    moduleId: 12,
    prompt: "You are about to give a presentation to a large group. You feel nervous. What's the best way to manage your anxiety?",
    responses: [
      {
        id: "A",
        text: "Focus on your fear and hope it doesn't show.",
        expertRationale: "This will only increase your anxiety and make it harder to deliver a good presentation. It's a poor way to manage your emotions.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a few deep breaths, visualize yourself successfully giving the presentation, and remind yourself of the value you are providing to the audience.",
        expertRationale: "This is a highly effective way to manage anxiety. It combines emotional regulation with a focus on your purpose, which can help you feel more confident and in control.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Rush through your slides so you can finish quickly and get it over with.",
        expertRationale: "This will likely make your audience feel rushed and will make it harder for them to understand your message. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 12
    moduleId: 12,
    prompt: "During your presentation, someone asks a difficult question that you don't know the answer to. How do you respond professionally?",
    responses: [
      {
        id: "A",
        text: "Try to bluff your way through the answer, hoping they don't notice you're guessing.",
        expertRationale: "This is a risky and unprofessional approach. It can damage your credibility and may lead to a loss of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Say, 'That's an excellent question. I don't have the answer right now, but I will find out and follow up with you directly after the presentation.'",
        expertRationale: "This is the most professional response. It shows you are honest and trustworthy while also demonstrating a commitment to finding the right answer. It's a key part of building credibility.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Say, 'That's irrelevant to the topic,' and ignore the question.",
        expertRationale: "This is a dismissive and rude response. It can make the person feel disrespected and will likely cause them to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 12
    moduleId: 12,
    prompt: "You need to give a compelling presentation to a diverse audience with varying levels of technical knowledge. How do you ensure your message is clear to everyone?",
    responses: [
      {
        id: "A",
        text: "Use highly technical jargon to impress the experts in the room.",
        expertRationale: "This will likely confuse and alienate a large part of your audience. It's a poor way to communicate with a diverse group.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Use simple, universal language and provide an analogy or a real-world example to explain complex concepts.",
        expertRationale: "This is a highly effective way to communicate with a diverse audience. It makes your message accessible to everyone and ensures that they understand the value you are providing.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Speak as fast as you can to cover all the information, assuming everyone will catch up later.",
        expertRationale: "This is a poor way to deliver a presentation. It can make your audience feel rushed and will make it harder for them to understand your message.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 12
    moduleId: 12,
    prompt: "You've been asked to give a short, five-minute update on a project. How do you make the most of this limited time?",
    responses: [
      {
        id: "A",
        text: "Provide a detailed history of the project from the very beginning.",
        expertRationale: "This is a poor use of time. It will likely bore your audience and may cause you to run out of time before you get to the most important information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Start with a summary of the key highlights and then provide more detail on the most critical developments and next steps.",
        expertRationale: "This is a highly effective way to give a short presentation. It ensures that your audience gets the most important information first and allows you to provide more detail on the most critical points.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Read from a long script you prepared beforehand.",
        expertRationale: "This can make you sound robotic and may cause you to lose your audience's attention. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 12
    moduleId: 12,
    prompt: "The projector fails just as you're about to start your presentation. What is the most professional response?",
    responses: [
      {
        id: "A",
        text: "Cancel the presentation, stating that you can't proceed without the slides.",
        expertRationale: "This is a sign of a lack of preparation and adaptability. A good presenter should be able to deliver their message without the help of a projector.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Continue with the presentation, speaking with confidence and engaging your audience without the visual aids.",
        expertRationale: "This is a great way to show adaptability and a commitment to your message. It's a sign of a true professional who is not reliant on technology.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to fix the projector yourself, making the audience wait while you troubleshoot the issue.",
        expertRationale: "This is a poor use of your audience's time. It's better to move forward with the presentation and address the issue later.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 13: Customer Service and Client Management (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 13
    moduleId: 13,
    prompt: "A client calls to complain about a feature they don't like. They are calm but firm in their request to have it changed. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately promise to change the feature to keep the client happy.",
        expertRationale: "This is a poor response. It's a promise you may not be able to keep and can lead to a lack of trust if you don't deliver. You should never promise something you can't deliver.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their complaint, ask clarifying questions, and then tell them you will bring their feedback to the product team for consideration.",
        expertRationale: "This is a great way to handle the situation. It shows you value their feedback and are taking it seriously while also setting a realistic expectation about what will happen next. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them the feature is a company standard and cannot be changed.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 13
    moduleId: 13,
    prompt: "A client asks for a new feature that is outside the scope of the project. How do you handle this request?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, stating that it is not in the contract.",
        expertRationale: "This is a fixed and unhelpful response. It's a poor way to handle the situation and can lead to a loss of the client.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Tell them you will consider the request and get back to them with a quote for the additional work.",
        expertRationale: "This is a good way to handle the situation. It shows you are open to the idea while also managing their expectations about the cost and timeline. It's a key part of managing client expectations.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Agree to the request and add it to the project without a new quote or contract.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of revenue and may cause you to go over budget. It's a sign of a lack of professionalism.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 13
    moduleId: 13,
    prompt: "A client is unhappy with the service they received from a junior team member. They want to speak with you about it. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Immediately side with the client and scold the junior team member in front of them.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of trust from your team and may cause the client to lose respect for you. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to the client's complaint, thank them for bringing it to your attention, and then tell them you will investigate the matter and get back to them with a resolution.",
        expertRationale: "This is the most professional response. It shows you are taking the issue seriously and are committed to finding a solution. It's a key part of building trust with a client.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the client that the junior team member is a new hire and that they should be patient.",
        expertRationale: "This is a poor way to handle the situation. It can make the client feel their complaint is not being taken seriously and may cause them to lose trust in you.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 13
    moduleId: 13,
    prompt: "A client is considering leaving for a competitor. They ask for a discount to stay. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for leaving and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can find a better deal.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 13
    moduleId: 13,
    prompt: "A client is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 14: Time Management and Prioritization (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 14
    moduleId: 14,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 14
    moduleId: 14,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 14
    moduleId: 14,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 14
    moduleId: 14,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 14
    moduleId: 14,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 15: Public Speaking and Presentation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 15
    moduleId: 15,
    prompt: "You are about to give a presentation to a large group. You feel nervous. What's the best way to manage your anxiety?",
    responses: [
      {
        id: "A",
        text: "Focus on your fear and hope it doesn't show.",
        expertRationale: "This will only increase your anxiety and make it harder to deliver a good presentation. It's a poor way to manage your emotions.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a few deep breaths, visualize yourself successfully giving the presentation, and remind yourself of the value you are providing to the audience.",
        expertRationale: "This is a highly effective way to manage anxiety. It combines emotional regulation with a focus on your purpose, which can help you feel more confident and in control.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Rush through your slides so you can finish quickly and get it over with.",
        expertRationale: "This will likely make your audience feel rushed and will make it harder for them to understand your message. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 15
    moduleId: 15,
    prompt: "During your presentation, someone asks a difficult question that you don't know the answer to. How do you respond professionally?",
    responses: [
      {
        id: "A",
        text: "Try to bluff your way through the answer, hoping they don't notice you're guessing.",
        expertRationale: "This is a risky and unprofessional approach. It can damage your credibility and may lead to a loss of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Say, 'That's an excellent question. I don't have the answer right now, but I will find out and follow up with you directly after the presentation.'",
        expertRationale: "This is the most professional response. It shows you are honest and trustworthy while also demonstrating a commitment to finding the right answer. It's a key part of building credibility.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Say, 'That's irrelevant to the topic,' and ignore the question.",
        expertRationale: "This is a dismissive and rude response. It can make the person feel disrespected and will likely cause them to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 15
    moduleId: 15,
    prompt: "You need to give a compelling presentation to a diverse audience with varying levels of technical knowledge. How do you ensure your message is clear to everyone?",
    responses: [
      {
        id: "A",
        text: "Use highly technical jargon to impress the experts in the room.",
        expertRationale: "This will likely confuse and alienate a large part of your audience. It's a poor way to communicate with a diverse group.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Use simple, universal language and provide an analogy or a real-world example to explain complex concepts.",
        expertRationale: "This is a highly effective way to communicate with a diverse audience. It makes your message accessible to everyone and ensures that they understand the value you are providing.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Speak as fast as you can to cover all the information, assuming everyone will catch up later.",
        expertRationale: "This is a poor way to deliver a presentation. It can make your audience feel rushed and will make it harder for them to understand your message.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 15
    moduleId: 15,
    prompt: "You've been asked to give a short, five-minute update on a project. How do you make the most of this limited time?",
    responses: [
      {
        id: "A",
        text: "Provide a detailed history of the project from the very beginning.",
        expertRationale: "This is a poor use of time. It will likely bore your audience and may cause you to run out of time before you get to the most important information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Start with a summary of the key highlights and then provide more detail on the most critical developments and next steps.",
        expertRationale: "This is a highly effective way to give a short presentation. It ensures that your audience gets the most important information first and allows you to provide more detail on the most critical points.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Read from a long script you prepared beforehand.",
        expertRationale: "This can make you sound robotic and may cause you to lose your audience's attention. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 15
    moduleId: 15,
    prompt: "The projector fails just as you're about to start your presentation. What is the most professional response?",
    responses: [
      {
        id: "A",
        text: "Cancel the presentation, stating that you can't proceed without the slides.",
        expertRationale: "This is a sign of a lack of preparation and adaptability. A good presenter should be able to deliver their message without the help of a projector.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Continue with the presentation, speaking with confidence and engaging your audience without the visual aids.",
        expertRationale: "This is a great way to show adaptability and a commitment to your message. It's a sign of a true professional who is not reliant on technology.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to fix the projector yourself, making the audience wait while you troubleshoot the issue.",
        expertRationale: "This is a poor use of your audience's time. It's better to move forward with the presentation and address the issue later.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 16: Customer Service and Client Management (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 16
    moduleId: 16,
    prompt: "A client calls to complain about a feature they don't like. They are calm but firm in their request to have it changed. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately promise to change the feature to keep the client happy.",
        expertRationale: "This is a poor response. It's a promise you may not be able to keep and can lead to a lack of trust if you don't deliver. You should never promise something you can't deliver.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their complaint, ask clarifying questions, and then tell them you will bring their feedback to the product team for consideration.",
        expertRationale: "This is a great way to handle the situation. It shows you value their feedback and are taking it seriously while also setting a realistic expectation about what will happen next. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them the feature is a company standard and cannot be changed.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 16
    moduleId: 16,
    prompt: "A client asks for a new feature that is outside the scope of the project. How do you handle this request?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, stating that it is not in the contract.",
        expertRationale: "This is a fixed and unhelpful response. It's a poor way to handle the situation and can lead to a loss of the client.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Tell them you will consider the request and get back to them with a quote for the additional work.",
        expertRationale: "This is a good way to handle the situation. It shows you are open to the idea while also managing their expectations about the cost and timeline. It's a key part of managing client expectations.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Agree to the request and add it to the project without a new quote or contract.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of revenue and may cause you to go over budget. It's a sign of a lack of professionalism.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 16
    moduleId: 16,
    prompt: "A client is unhappy with the service they received from a junior team member. They want to speak with you about it. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Immediately side with the client and scold the junior team member in front of them.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of trust from your team and may cause the client to lose respect for you. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to the client's complaint, thank them for bringing it to your attention, and then tell them you will investigate the matter and get back to them with a resolution.",
        expertRationale: "This is the most professional response. It shows you are taking the issue seriously and are committed to finding a solution. It's a key part of building trust with a client.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the client that the junior team member is a new hire and that they should be patient.",
        expertRationale: "This is a poor way to handle the situation. It can make the client feel their complaint is not being taken seriously and may cause them to lose trust in you.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 16
    moduleId: 16,
    prompt: "A client is considering leaving for a competitor. They ask for a discount to stay. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for leaving and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can find a better deal.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 16
    moduleId: 16,
    prompt: "A client is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 17: Negotiation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 17
    moduleId: 17,
    prompt: "You are in a negotiation with a client who is offering a much lower budget than you expected. What is your initial approach?",
    responses: [
      {
        id: "A",
        text: "Tell them their offer is unacceptable and walk away from the negotiation.",
        expertRationale: "This is a poor response. It's a fixed and unhelpful response that can lead to a loss of the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Accept the low offer to keep the client, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Ask them to explain their budget constraints and offer to find a solution that fits within their budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 17
    moduleId: 17,
    prompt: "A team member is pushing for a raise that is outside the company's salary range. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them to 'take it or leave it' and that you can't offer them more money.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the team member and can lead to a loss of the team member.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain the company's salary range and offer to find a solution that meets their needs without violating the policy, such as a bonus or a promotion to a new role.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Secretly give them a raise without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 17
    moduleId: 17,
    prompt: "You are in a negotiation with a vendor who is offering a price that is much higher than you expected. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them that you will find a new vendor who can offer a lower price.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the vendor and can lead to a loss of the vendor.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their offer and then ask them to explain their pricing model and offer to find a solution that fits within your budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Accept the high price to keep the vendor, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 17
    moduleId: 17,
    prompt: "You are in a negotiation with a client who is asking for a significant discount. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for the discount and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can't afford your services.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 17
    moduleId: 17,
    prompt: "You are in a negotiation with a client who is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 18: Ethical Decision Making (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 18
    moduleId: 18,
    prompt: "You discover a minor error in a financial report that could go unnoticed. Correcting it would delay a project deadline. What do you do?",
    responses: [
      {
        id: "A",
        text: "Ignore the error to meet the deadline, assuming it's too small to matter.",
        expertRationale: "This is an unethical and unprofessional response. It can lead to a loss of trust from your company and may cause a larger problem later on.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Correct the error and inform your manager about the delay, explaining why it was necessary.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask a colleague to fix the error for you so you can meet the deadline.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 18
    moduleId: 18,
    prompt: "A client asks you to create a marketing campaign that uses misleading data. What do you do?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, explaining that you cannot use misleading data and offering to find an alternative solution that meets their needs without compromising your company's integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Create the campaign, but secretly make the data more accurate to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Create the campaign, but secretly tell a colleague about the misleading data to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 18
    moduleId: 18,
    prompt: "You notice a colleague is taking credit for your work. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Confront the colleague publicly to expose their dishonesty.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Schedule a private meeting with the colleague to address the issue and discuss a plan to ensure proper credit is given in the future.",
        expertRationale: "This is the most professional and ethical response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your manager about the issue and ask them to handle it for you.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 18
    moduleId: 18,
    prompt: "You are offered a significant bribe to approve a project that doesn't meet quality standards. What do you do?",
    responses: [
      {
        id: "A",
        text: "Accept the bribe and approve the project.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Decline the bribe and report the offer to your manager or HR.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Decline the bribe and tell the person that you will find a new project that meets quality standards.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the person and can lead to a loss of the person.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 18
    moduleId: 18,
    prompt: "You are asked to sign a document that contains information you know is false. What do you do?",
    responses: [
      {
        id: "A",
        text: "Sign the document to avoid a conflict with your manager.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Refuse to sign the document and explain why, offering to find a solution that meets the company's needs without compromising your integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Sign the document, but secretly tell a colleague about the false information to avoid a conflict with your manager.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 19: Time Management and Prioritization (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 19
    moduleId: 19,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 19
    moduleId: 19,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 19
    moduleId: 19,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 19
    moduleId: 19,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 19
    moduleId: 19,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },
  // ---
  // MODULE 20: Negotiation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 20
    moduleId: 20,
    prompt: "You are in a negotiation with a client who is offering a much lower budget than you expected. What is your initial approach?",
    responses: [
      {
        id: "A",
        text: "Tell them their offer is unacceptable and walk away from the negotiation.",
        expertRationale: "This is a poor response. It's a fixed and unhelpful response that can lead to a loss of the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Accept the low offer to keep the client, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Ask them to explain their budget constraints and offer to find a solution that fits within their budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 20
    moduleId: 20,
    prompt: "A team member is pushing for a raise that is outside the company's salary range. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them to 'take it or leave it' and that you can't offer them more money.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the team member and can lead to a loss of the team member.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain the company's salary range and offer to find a solution that meets their needs without violating the policy, such as a bonus or a promotion to a new role.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Secretly give them a raise without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 20
    moduleId: 20,
    prompt: "You are in a negotiation with a vendor who is offering a price that is much higher than you expected. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them that you will find a new vendor who can offer a lower price.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the vendor and can lead to a loss of the vendor.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their offer and then ask them to explain their pricing model and offer to find a solution that fits within your budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Accept the high price to keep the vendor, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 20
    moduleId: 20,
    prompt: "You are in a negotiation with a client who is asking for a significant discount. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for the discount and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can't afford your services.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 20
    moduleId: 20,
    prompt: "You are in a negotiation with a client who is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 21: Ethical Decision Making (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 21
    moduleId: 21,
    prompt: "You discover a minor error in a financial report that could go unnoticed. Correcting it would delay a project deadline. What do you do?",
    responses: [
      {
        id: "A",
        text: "Ignore the error to meet the deadline, assuming it's too small to matter.",
        expertRationale: "This is an unethical and unprofessional response. It can lead to a loss of trust from your company and may cause a larger problem later on.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Correct the error and inform your manager about the delay, explaining why it was necessary.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask a colleague to fix the error for you so you can meet the deadline.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 21
    moduleId: 21,
    prompt: "A client asks you to create a marketing campaign that uses misleading data. What do you do?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, explaining that you cannot use misleading data and offering to find an alternative solution that meets their needs without compromising your company's integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Create the campaign, but secretly make the data more accurate to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Create the campaign, but secretly tell a colleague about the misleading data to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 21
    moduleId: 21,
    prompt: "You notice a colleague is taking credit for your work. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Confront the colleague publicly to expose their dishonesty.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Schedule a private meeting with the colleague to address the issue and discuss a plan to ensure proper credit is given in the future.",
        expertRationale: "This is the most professional and ethical response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your manager about the issue and ask them to handle it for you.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 21
    moduleId: 21,
    prompt: "You are offered a significant bribe to approve a project that doesn't meet quality standards. What do you do?",
    responses: [
      {
        id: "A",
        text: "Accept the bribe and approve the project.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Decline the bribe and report the offer to your manager or HR.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Decline the bribe and tell the person that you will find a new project that meets quality standards.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the person and can lead to a loss of the person.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 21
    moduleId: 21,
    prompt: "You are asked to sign a document that contains information you know is false. What do you do?",
    responses: [
      {
        id: "A",
        text: "Sign the document to avoid a conflict with your manager.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Refuse to sign the document and explain why, offering to find a solution that meets the company's needs without compromising your integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Sign the document, but secretly tell a colleague about the false information to avoid a conflict with your manager.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 22: Time Management and Prioritization (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 22
    moduleId: 22,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 22
    moduleId: 22,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 22
    moduleId: 22,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 22
    moduleId: 22,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 22
    moduleId: 22,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 23: Public Speaking and Presentation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 23
    moduleId: 23,
    prompt: "You are about to give a presentation to a large group. You feel nervous. What's the best way to manage your anxiety?",
    responses: [
      {
        id: "A",
        text: "Focus on your fear and hope it doesn't show.",
        expertRationale: "This will only increase your anxiety and make it harder to deliver a good presentation. It's a poor way to manage your emotions.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a few deep breaths, visualize yourself successfully giving the presentation, and remind yourself of the value you are providing to the audience.",
        expertRationale: "This is a highly effective way to manage anxiety. It combines emotional regulation with a focus on your purpose, which can help you feel more confident and in control.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Rush through your slides so you can finish quickly and get it over with.",
        expertRationale: "This will likely make your audience feel rushed and will make it harder for them to understand your message. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 23
    moduleId: 23,
    prompt: "During your presentation, someone asks a difficult question that you don't know the answer to. How do you respond professionally?",
    responses: [
      {
        id: "A",
        text: "Try to bluff your way through the answer, hoping they don't notice you're guessing.",
        expertRationale: "This is a risky and unprofessional approach. It can damage your credibility and may lead to a loss of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Say, 'That's an excellent question. I don't have the answer right now, but I will find out and follow up with you directly after the presentation.'",
        expertRationale: "This is the most professional response. It shows you are honest and trustworthy while also demonstrating a commitment to finding the right answer. It's a key part of building credibility.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Say, 'That's irrelevant to the topic,' and ignore the question.",
        expertRationale: "This is a dismissive and rude response. It can make the person feel disrespected and will likely cause them to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 23
    moduleId: 23,
    prompt: "You need to give a compelling presentation to a diverse audience with varying levels of technical knowledge. How do you ensure your message is clear to everyone?",
    responses: [
      {
        id: "A",
        text: "Use highly technical jargon to impress the experts in the room.",
        expertRationale: "This will likely confuse and alienate a large part of your audience. It's a poor way to communicate with a diverse group.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Use simple, universal language and provide an analogy or a real-world example to explain complex concepts.",
        expertRationale: "This is a highly effective way to communicate with a diverse audience. It makes your message accessible to everyone and ensures that they understand the value you are providing.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Speak as fast as you can to cover all the information, assuming everyone will catch up later.",
        expertRationale: "This is a poor way to deliver a presentation. It can make your audience feel rushed and will make it harder for them to understand your message.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 23
    moduleId: 23,
    prompt: "You've been asked to give a short, five-minute update on a project. How do you make the most of this limited time?",
    responses: [
      {
        id: "A",
        text: "Provide a detailed history of the project from the very beginning.",
        expertRationale: "This is a poor use of time. It will likely bore your audience and may cause you to run out of time before you get to the most important information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Start with a summary of the key highlights and then provide more detail on the most critical developments and next steps.",
        expertRationale: "This is a highly effective way to give a short presentation. It ensures that your audience gets the most important information first and allows you to provide more detail on the most critical points.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Read from a long script you prepared beforehand.",
        expertRationale: "This can make you sound robotic and may cause you to lose your audience's attention. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 23
    moduleId: 23,
    prompt: "The projector fails just as you're about to start your presentation. What is the most professional response?",
    responses: [
      {
        id: "A",
        text: "Cancel the presentation, stating that you can't proceed without the slides.",
        expertRationale: "This is a sign of a lack of preparation and adaptability. A good presenter should be able to deliver their message without the help of a projector.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Continue with the presentation, speaking with confidence and engaging your audience without the visual aids.",
        expertRationale: "This is a great way to show adaptability and a commitment to your message. It's a sign of a true professional who is not reliant on technology.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to fix the projector yourself, making the audience wait while you troubleshoot the issue.",
        expertRationale: "This is a poor use of your audience's time. It's better to move forward with the presentation and address the issue later.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 24: Customer Service and Client Management (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 24
    moduleId: 24,
    prompt: "A client calls to complain about a feature they don't like. They are calm but firm in their request to have it changed. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately promise to change the feature to keep the client happy.",
        expertRationale: "This is a poor response. It's a promise you may not be able to keep and can lead to a lack of trust if you don't deliver. You should never promise something you can't deliver.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their complaint, ask clarifying questions, and then tell them you will bring their feedback to the product team for consideration.",
        expertRationale: "This is a great way to handle the situation. It shows you value their feedback and are taking it seriously while also setting a realistic expectation about what will happen next. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them the feature is a company standard and cannot be changed.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 24
    moduleId: 24,
    prompt: "A client asks for a new feature that is outside the scope of the project. How do you handle this request?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, stating that it is not in the contract.",
        expertRationale: "This is a fixed and unhelpful response. It's a poor way to handle the situation and can lead to a loss of the client.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Tell them you will consider the request and get back to them with a quote for the additional work.",
        expertRationale: "This is a good way to handle the situation. It shows you are open to the idea while also managing their expectations about the cost and timeline. It's a key part of managing client expectations.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Agree to the request and add it to the project without a new quote or contract.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of revenue and may cause you to go over budget. It's a sign of a lack of professionalism.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 24
    moduleId: 24,
    prompt: "A client is unhappy with the service they received from a junior team member. They want to speak with you about it. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Immediately side with the client and scold the junior team member in front of them.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of trust from your team and may cause the client to lose respect for you. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to the client's complaint, thank them for bringing it to your attention, and then tell them you will investigate the matter and get back to them with a resolution.",
        expertRationale: "This is the most professional response. It shows you are taking the issue seriously and are committed to finding a solution. It's a key part of building trust with a client.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the client that the junior team member is a new hire and that they should be patient.",
        expertRationale: "This is a poor way to handle the situation. It can make the client feel their complaint is not being taken seriously and may cause them to lose trust in you.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 24
    moduleId: 24,
    prompt: "A client is considering leaving for a competitor. They ask for a discount to stay. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for leaving and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can find a better deal.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 24
    moduleId: 24,
    prompt: "A client is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 25: Negotiation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 25
    moduleId: 25,
    prompt: "You are in a negotiation with a client who is offering a much lower budget than you expected. What is your initial approach?",
    responses: [
      {
        id: "A",
        text: "Tell them their offer is unacceptable and walk away from the negotiation.",
        expertRationale: "This is a poor response. It's a fixed and unhelpful response that can lead to a loss of the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Accept the low offer to keep the client, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Ask them to explain their budget constraints and offer to find a solution that fits within their budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 25
    moduleId: 25,
    prompt: "A team member is pushing for a raise that is outside the company's salary range. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them to 'take it or leave it' and that you can't offer them more money.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the team member and can lead to a loss of the team member.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain the company's salary range and offer to find a solution that meets their needs without violating the policy, such as a bonus or a promotion to a new role.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Secretly give them a raise without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 25
    moduleId: 25,
    prompt: "You are in a negotiation with a vendor who is offering a price that is much higher than you expected. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them that you will find a new vendor who can offer a lower price.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the vendor and can lead to a loss of the vendor.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their offer and then ask them to explain their pricing model and offer to find a solution that fits within your budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Accept the high price to keep the vendor, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 25
    moduleId: 25,
    prompt: "You are in a negotiation with a client who is asking for a significant discount. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for the discount and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can't afford your services.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 25
    moduleId: 25,
    prompt: "You are in a negotiation with a client who is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 26: Ethical Decision Making (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 26
    moduleId: 26,
    prompt: "You discover a minor error in a financial report that could go unnoticed. Correcting it would delay a project deadline. What do you do?",
    responses: [
      {
        id: "A",
        text: "Ignore the error to meet the deadline, assuming it's too small to matter.",
        expertRationale: "This is an unethical and unprofessional response. It can lead to a loss of trust from your company and may cause a larger problem later on.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Correct the error and inform your manager about the delay, explaining why it was necessary.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask a colleague to fix the error for you so you can meet the deadline.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 26
    moduleId: 26,
    prompt: "A client asks you to create a marketing campaign that uses misleading data. What do you do?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, explaining that you cannot use misleading data and offering to find an alternative solution that meets their needs without compromising your company's integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Create the campaign, but secretly make the data more accurate to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Create the campaign, but secretly tell a colleague about the misleading data to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 26
    moduleId: 26,
    prompt: "You notice a colleague is taking credit for your work. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Confront the colleague publicly to expose their dishonesty.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Schedule a private meeting with the colleague to address the issue and discuss a plan to ensure proper credit is given in the future.",
        expertRationale: "This is the most professional and ethical response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your manager about the issue and ask them to handle it for you.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 26
    moduleId: 26,
    prompt: "You are offered a significant bribe to approve a project that doesn't meet quality standards. What do you do?",
    responses: [
      {
        id: "A",
        text: "Accept the bribe and approve the project.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Decline the bribe and report the offer to your manager or HR.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Decline the bribe and tell the person that you will find a new project that meets quality standards.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the person and can lead to a loss of the person.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 26
    moduleId: 26,
    prompt: "You are asked to sign a document that contains information you know is false. What do you do?",
    responses: [
      {
        id: "A",
        text: "Sign the document to avoid a conflict with your manager.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Refuse to sign the document and explain why, offering to find a solution that meets the company's needs without compromising your integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Sign the document, but secretly tell a colleague about the false information to avoid a conflict with your manager.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 27: Time Management and Prioritization (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 27
    moduleId: 27,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 27
    moduleId: 27,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 27
    moduleId: 27,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 27
    moduleId: 27,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 27
    moduleId: 27,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 28: Public Speaking and Presentation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 28
    moduleId: 28,
    prompt: "You are about to give a presentation to a large group. You feel nervous. What's the best way to manage your anxiety?",
    responses: [
      {
        id: "A",
        text: "Focus on your fear and hope it doesn't show.",
        expertRationale: "This will only increase your anxiety and make it harder to deliver a good presentation. It's a poor way to manage your emotions.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a few deep breaths, visualize yourself successfully giving the presentation, and remind yourself of the value you are providing to the audience.",
        expertRationale: "This is a highly effective way to manage anxiety. It combines emotional regulation with a focus on your purpose, which can help you feel more confident and in control.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Rush through your slides so you can finish quickly and get it over with.",
        expertRationale: "This will likely make your audience feel rushed and will make it harder for them to understand your message.",     
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 28
    moduleId: 28,
    prompt: "During your presentation, someone asks a difficult question that you don't know the answer to. How do you respond professionally?",
    responses: [
      {
        id: "A",
        text: "Try to bluff your way through the answer, hoping they don't notice you're guessing.",
        expertRationale: "This is a risky and unprofessional approach. It can damage your credibility and may lead to a loss of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Say, 'That's an excellent question. I don't have the answer right now, but I will find out and follow up with you directly after the presentation.'",
        expertRationale: "This is the most professional response. It shows you are honest and trustworthy while also demonstrating a commitment to finding the right answer. It's a key part of building credibility.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Say, 'That's irrelevant to the topic,' and ignore the question.",
        expertRationale: "This is a dismissive and rude response. It can make the person feel disrespected and will likely cause them to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 28
    moduleId: 28,
    prompt: "You need to give a compelling presentation to a diverse audience with varying levels of technical knowledge. How do you ensure your message is clear to everyone?",
    responses: [
      {
        id: "A",
        text: "Use highly technical jargon to impress the experts in the room.",
        expertRationale: "This will likely confuse and alienate a large part of your audience. It's a poor way to communicate with a diverse group.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Use simple, universal language and provide an analogy or a real-world example to explain complex concepts.",
        expertRationale: "This is a highly effective way to communicate with a diverse audience. It makes your message accessible to everyone and ensures that they understand the value you are providing.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Speak as fast as you can to cover all the information, assuming everyone will catch up later.",
        expertRationale: "This is a poor way to deliver a presentation. It can make your audience feel rushed and will make it harder for them to understand your message.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 28
    moduleId: 28,
    prompt: "You've been asked to give a short, five-minute update on a project. How do you make the most of this limited time?",
    responses: [
      {
        id: "A",
        text: "Provide a detailed history of the project from the very beginning.",
        expertRationale: "This is a poor use of time. It will likely bore your audience and may cause you to run out of time before you get to the most important information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Start with a summary of the key highlights and then provide more detail on the most critical developments and next steps.",
        expertRationale: "This is a highly effective way to give a short presentation. It ensures that your audience gets the most important information first and allows you to provide more detail on the most critical points.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Read from a long script you prepared beforehand.",
        expertRationale: "This can make you sound robotic and may cause you to lose your audience's attention. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 28
    moduleId: 28,
    prompt: "The projector fails just as you're about to start your presentation. What is the most professional response?",
    responses: [
      {
        id: "A",
        text: "Cancel the presentation, stating that you can't proceed without the slides.",
        expertRationale: "This is a sign of a lack of preparation and adaptability. A good presenter should be able to deliver their message without the help of a projector.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Continue with the presentation, speaking with confidence and engaging your audience without the visual aids.",
        expertRationale: "This is a great way to show adaptability and a commitment to your message. It's a sign of a true professional who is not reliant on technology.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to fix the projector yourself, making the audience wait while you troubleshoot the issue.",
        expertRationale: "This is a poor use of your audience's time. It's better to move forward with the presentation and address the issue later.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 29: Customer Service and Client Management (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 29
    moduleId: 29,
    prompt: "A client calls to complain about a feature they don't like. They are calm but firm in their request to have it changed. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately promise to change the feature to keep the client happy.",
        expertRationale: "This is a poor response. It's a promise you may not be able to keep and can lead to a lack of trust if you don't deliver. You should never promise something you can't deliver.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their complaint, ask clarifying questions, and then tell them you will bring their feedback to the product team for consideration.",
        expertRationale: "This is a great way to handle the situation. It shows you value their feedback and are taking it seriously while also setting a realistic expectation about what will happen next. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them the feature is a company standard and cannot be changed.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 29
    moduleId: 29,
    prompt: "A client asks for a new feature that is outside the scope of the project. How do you handle this request?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, stating that it is not in the contract.",
        expertRationale: "This is a fixed and unhelpful response. It's a poor way to handle the situation and can lead to a loss of the client.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Tell them you will consider the request and get back to them with a quote for the additional work.",
        expertRationale: "This is a good way to handle the situation. It shows you are open to the idea while also managing their expectations about the cost and timeline. It's a key part of managing client expectations.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Agree to the request and add it to the project without a new quote or contract.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of revenue and may cause you to go over budget. It's a sign of a lack of professionalism.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 29
    moduleId: 29,
    prompt: "A client is unhappy with the service they received from a junior team member. They want to speak with you about it. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Immediately side with the client and scold the junior team member in front of them.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of trust from your team and may cause the client to lose respect for you. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to the client's complaint, thank them for bringing it to your attention, and then tell them you will investigate the matter and get back to them with a resolution.",
        expertRationale: "This is the most professional response. It shows you are taking the issue seriously and are committed to finding a solution. It's a key part of building trust with a client.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the client that the junior team member is a new hire and that they should be patient.",
        expertRationale: "This is a poor way to handle the situation. It can make the client feel their complaint is not being taken seriously and may cause them to lose trust in you.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 29
    moduleId: 29,
    prompt: "A client is considering leaving for a competitor. They ask for a discount to stay. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for leaving and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can find a better deal.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 29
    moduleId: 29,
    prompt: "A client is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 30: Negotiation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 30
    moduleId: 30,
    prompt: "You are in a negotiation with a client who is offering a much lower budget than you expected. What is your initial approach?",
    responses: [
      {
        id: "A",
        text: "Tell them their offer is unacceptable and walk away from the negotiation.",
        expertRationale: "This is a poor response. It's a fixed and unhelpful response that can lead to a loss of the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Accept the low offer to keep the client, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Ask them to explain their budget constraints and offer to find a solution that fits within their budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 30
    moduleId: 30,
    prompt: "A team member is pushing for a raise that is outside the company's salary range. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them to 'take it or leave it' and that you can't offer them more money.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the team member and can lead to a loss of the team member.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain the company's salary range and offer to find a solution that meets their needs without violating the policy, such as a bonus or a promotion to a new role.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Secretly give them a raise without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 30
    moduleId: 30,
    prompt: "You are in a negotiation with a vendor who is offering a price that is much higher than you expected. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them that you will find a new vendor who can offer a lower price.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the vendor and can lead to a loss of the vendor.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their offer and then ask them to explain their pricing model and offer to find a solution that fits within your budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Accept the high price to keep the vendor, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 30
    moduleId: 30,
    prompt: "You are in a negotiation with a client who is asking for a significant discount. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for the discount and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can't afford your services.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 30
    moduleId: 30,
    prompt: "You are in a negotiation with a client who is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 31: Ethical Decision Making (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 31
    moduleId: 31,
    prompt: "You discover a minor error in a financial report that could go unnoticed. Correcting it would delay a project deadline. What do you do?",
    responses: [
      {
        id: "A",
        text: "Ignore the error to meet the deadline, assuming it's too small to matter.",
        expertRationale: "This is an unethical and unprofessional response. It can lead to a loss of trust from your company and may cause a larger problem later on.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Correct the error and inform your manager about the delay, explaining why it was necessary.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask a colleague to fix the error for you so you can meet the deadline.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 31
    moduleId: 31,
    prompt: "A client asks you to create a marketing campaign that uses misleading data. What do you do?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, explaining that you cannot use misleading data and offering to find an alternative solution that meets their needs without compromising your company's integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Create the campaign, but secretly make the data more accurate to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Create the campaign, but secretly tell a colleague about the misleading data to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 31
    moduleId: 31,
    prompt: "You notice a colleague is taking credit for your work. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Confront the colleague publicly to expose their dishonesty.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Schedule a private meeting with the colleague to address the issue and discuss a plan to ensure proper credit is given in the future.",
        expertRationale: "This is the most professional and ethical response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your manager about the issue and ask them to handle it for you.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 31
    moduleId: 31,
    prompt: "You are offered a significant bribe to approve a project that doesn't meet quality standards. What do you do?",
    responses: [
      {
        id: "A",
        text: "Accept the bribe and approve the project.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Decline the bribe and report the offer to your manager or HR.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Decline the bribe and tell the person that you will find a new project that meets quality standards.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the person and can lead to a loss of the person.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 31
    moduleId: 31,
    prompt: "You are asked to sign a document that contains information you know is false. What do you do?",
    responses: [
      {
        id: "A",
        text: "Sign the document to avoid a conflict with your manager.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Refuse to sign the document and explain why, offering to find a solution that meets the company's needs without compromising your integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Sign the document, but secretly tell a colleague about the false information to avoid a conflict with your manager.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 32: Time Management and Prioritization (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 32
    moduleId: 32,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 32
    moduleId: 32,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 32
    moduleId: 32,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 32
    moduleId: 32,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 32
    moduleId: 32,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 33: Public Speaking and Presentation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 33
    moduleId: 33,
    prompt: "You are about to give a presentation to a large group. You feel nervous. What's the best way to manage your anxiety?",
    responses: [
      {
        id: "A",
        text: "Focus on your fear and hope it doesn't show.",
        expertRationale: "This will only increase your anxiety and make it harder to deliver a good presentation. It's a poor way to manage your emotions.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a few deep breaths, visualize yourself successfully giving the presentation, and remind yourself of the value you are providing to the audience.",
        expertRationale: "This is a highly effective way to manage anxiety. It combines emotional regulation with a focus on your purpose, which can help you feel more confident and in control.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Rush through your slides so you can finish quickly and get it over with.",
        expertRationale: "This will likely make your audience feel rushed and will make it harder for them to understand your message. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 33
    moduleId: 33,
    prompt: "During your presentation, someone asks a difficult question that you don't know the answer to. How do you respond professionally?",
    responses: [
      {
        id: "A",
        text: "Try to bluff your way through the answer, hoping they don't notice you're guessing.",
        expertRationale: "This is a risky and unprofessional approach. It can damage your credibility and may lead to a loss of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Say, 'That's an excellent question. I don't have the answer right now, but I will find out and follow up with you directly after the presentation.'",
        expertRationale: "This is the most professional response. It shows you are honest and trustworthy while also demonstrating a commitment to finding the right answer. It's a key part of building credibility.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Say, 'That's irrelevant to the topic,' and ignore the question.",
        expertRationale: "This is a dismissive and rude response. It can make the person feel disrespected and will likely cause them to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 33
    moduleId: 33,
    prompt: "You need to give a compelling presentation to a diverse audience with varying levels of technical knowledge. How do you ensure your message is clear to everyone?",
    responses: [
      {
        id: "A",
        text: "Use highly technical jargon to impress the experts in the room.",
        expertRationale: "This will likely confuse and alienate a large part of your audience. It's a poor way to communicate with a diverse group.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Use simple, universal language and provide an analogy or a real-world example to explain complex concepts.",
        expertRationale: "This is a highly effective way to communicate with a diverse audience. It makes your message accessible to everyone and ensures that they understand the value you are providing.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Speak as fast as you can to cover all the information, assuming everyone will catch up later.",
        expertRationale: "This is a poor way to deliver a presentation. It can make your audience feel rushed and will make it harder for them to understand your message.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 33
    moduleId: 33,
    prompt: "You've been asked to give a short, five-minute update on a project. How do you make the most of this limited time?",
    responses: [
      {
        id: "A",
        text: "Provide a detailed history of the project from the very beginning.",
        expertRationale: "This is a poor use of time. It will likely bore your audience and may cause you to run out of time before you get to the most important information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Start with a summary of the key highlights and then provide more detail on the most critical developments and next steps.",
        expertRationale: "This is a highly effective way to give a short presentation. It ensures that your audience gets the most important information first and allows you to provide more detail on the most critical points.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Read from a long script you prepared beforehand.",
        expertRationale: "This can make you sound robotic and may cause you to lose your audience's attention. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 33
    moduleId: 33,
    prompt: "The projector fails just as you're about to start your presentation. What is the most professional response?",
    responses: [
      {
        id: "A",
        text: "Cancel the presentation, stating that you can't proceed without the slides.",
        expertRationale: "This is a sign of a lack of preparation and adaptability. A good presenter should be able to deliver their message without the help of a projector.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Continue with the presentation, speaking with confidence and engaging your audience without the visual aids.",
        expertRationale: "This is a great way to show adaptability and a commitment to your message. It's a sign of a true professional who is not reliant on technology.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to fix the projector yourself, making the audience wait while you troubleshoot the issue.",
        expertRationale: "This is a poor use of your audience's time. It's better to move forward with the presentation and address the issue later.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 34: Customer Service and Client Management (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 34
    moduleId: 34,
    prompt: "A client calls to complain about a feature they don't like. They are calm but firm in their request to have it changed. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately promise to change the feature to keep the client happy.",
        expertRationale: "This is a poor response. It's a promise you may not be able to keep and can lead to a lack of trust if you don't deliver. You should never promise something you can't deliver.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their complaint, ask clarifying questions, and then tell them you will bring their feedback to the product team for consideration.",
        expertRationale: "This is a great way to handle the situation. It shows you value their feedback and are taking it seriously while also setting a realistic expectation about what will happen next. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them the feature is a company standard and cannot be changed.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 34
    moduleId: 34,
    prompt: "A client asks for a new feature that is outside the scope of the project. How do you handle this request?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, stating that it is not in the contract.",
        expertRationale: "This is a fixed and unhelpful response. It's a poor way to handle the situation and can lead to a loss of the client.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Tell them you will consider the request and get back to them with a quote for the additional work.",
        expertRationale: "This is a good way to handle the situation. It shows you are open to the idea while also managing their expectations about the cost and timeline. It's a key part of managing client expectations.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Agree to the request and add it to the project without a new quote or contract.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of revenue and may cause you to go over budget. It's a sign of a lack of professionalism.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 34
    moduleId: 34,
    prompt: "A client is unhappy with the service they received from a junior team member. They want to speak with you about it. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Immediately side with the client and scold the junior team member in front of them.",
        expertRationale: "This is a poor way to handle the situation. It can lead to a loss of trust from your team and may cause the client to lose respect for you. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to the client's complaint, thank them for bringing it to your attention, and then tell them you will investigate the matter and get back to them with a resolution.",
        expertRationale: "This is the most professional response. It shows you are taking the issue seriously and are committed to finding a solution. It's a key part of building trust with a client.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the client that the junior team member is a new hire and that they should be patient.",
        expertRationale: "This is a poor way to handle the situation. It can make the client feel their complaint is not being taken seriously and may cause them to lose trust in you.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 34
    moduleId: 34,
    prompt: "A client is considering leaving for a competitor. They ask for a discount to stay. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for leaving and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can find a better deal.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 34
    moduleId: 34,
    prompt: "A client is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 35: Negotiation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 35
    moduleId: 35,
    prompt: "You are in a negotiation with a client who is offering a much lower budget than you expected. What is your initial approach?",
    responses: [
      {
        id: "A",
        text: "Tell them their offer is unacceptable and walk away from the negotiation.",
        expertRationale: "This is a poor response. It's a fixed and unhelpful response that can lead to a loss of the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Accept the low offer to keep the client, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Ask them to explain their budget constraints and offer to find a solution that fits within their budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 35
    moduleId: 35,
    prompt: "A team member is pushing for a raise that is outside the company's salary range. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them to 'take it or leave it' and that you can't offer them more money.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the team member and can lead to a loss of the team member.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain the company's salary range and offer to find a solution that meets their needs without violating the policy, such as a bonus or a promotion to a new role.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Secretly give them a raise without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 35
    moduleId: 35,
    prompt: "You are in a negotiation with a vendor who is offering a price that is much higher than you expected. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Tell them that you will find a new vendor who can offer a lower price.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the vendor and can lead to a loss of the vendor.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Listen to their offer and then ask them to explain their pricing model and offer to find a solution that fits within your budget without sacrificing quality.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also protecting your company's interests. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Accept the high price to keep the vendor, even if it means a loss for your company.",
        expertRationale: "This is a poor response. It's a sign of a lack of respect for your work and can lead to a loss of revenue. It's a sign of a lack of professionalism.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 35
    moduleId: 35,
    prompt: "You are in a negotiation with a client who is asking for a significant discount. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Immediately offer a significant discount to keep them as a client.",
        expertRationale: "This is a poor response. It can lead to a loss of revenue and may not be enough to keep the client. It's a sign of a lack of professionalism.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Ask them to explain their reasons for the discount and see if there are any issues you can resolve without a discount.",
        expertRationale: "This is the most effective way to handle the situation. It shows you are committed to their satisfaction and are willing to work with them to find a solution. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell them to go ahead and leave if they can't afford your services.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of the client.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 35
    moduleId: 35,
    prompt: "You are in a negotiation with a client who is asking for a feature that would violate your company's security policies. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Explain the security risks to the client and offer to find an alternative solution that meets their needs without violating the policy.",
        expertRationale: "This is the most professional and effective response. It shows you are committed to their satisfaction while also upholding your company's security policies. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Tell the client that the policy is non-negotiable and that you cannot help them.",
        expertRationale: "This is a fixed and unhelpful response. It can make the client feel unheard and may cause them to leave for a competitor.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Secretly implement the feature for the client without telling anyone.",
        expertRationale: "This is a highly unprofessional and unethical response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },

  // ---
  // MODULE 36: Ethical Decision Making (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 36
    moduleId: 36,
    prompt: "You discover a minor error in a financial report that could go unnoticed. Correcting it would delay a project deadline. What do you do?",
    responses: [
      {
        id: "A",
        text: "Ignore the error to meet the deadline, assuming it's too small to matter.",
        expertRationale: "This is an unethical and unprofessional response. It can lead to a loss of trust from your company and may cause a larger problem later on.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Correct the error and inform your manager about the delay, explaining why it was necessary.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ask a colleague to fix the error for you so you can meet the deadline.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 36
    moduleId: 36,
    prompt: "A client asks you to create a marketing campaign that uses misleading data. What do you do?",
    responses: [
      {
        id: "A",
        text: "Politely decline the request, explaining that you cannot use misleading data and offering to find an alternative solution that meets their needs without compromising your company's integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Create the campaign, but secretly make the data more accurate to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Create the campaign, but secretly tell a colleague about the misleading data to avoid a conflict with the client.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the client and can lead to a loss of trust from your company.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 36
    moduleId: 36,
    prompt: "You notice a colleague is taking credit for your work. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Confront the colleague publicly to expose their dishonesty.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Schedule a private meeting with the colleague to address the issue and discuss a plan to ensure proper credit is given in the future.",
        expertRationale: "This is the most professional and ethical response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your manager about the issue and ask them to handle it for you.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for your colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 36
    moduleId: 36,
    prompt: "You are offered a significant bribe to approve a project that doesn't meet quality standards. What do you do?",
    responses: [
      {
        id: "A",
        text: "Accept the bribe and approve the project.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Decline the bribe and report the offer to your manager or HR.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Decline the bribe and tell the person that you will find a new project that meets quality standards.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the person and can lead to a loss of the person.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 36
    moduleId: 36,
    prompt: "You are asked to sign a document that contains information you know is false. What do you do?",
    responses: [
      {
        id: "A",
        text: "Sign the document to avoid a conflict with your manager.",
        expertRationale: "This is a highly unethical and unprofessional response. It can lead to a loss of your job and a loss of trust from your company.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Refuse to sign the document and explain why, offering to find a solution that meets the company's needs without compromising your integrity.",
        expertRationale: "This is the most ethical and professional response. It shows you are committed to your company's integrity and are willing to take responsibility for your work. It's a key part of building trust.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Sign the document, but secretly tell a colleague about the false information to avoid a conflict with your manager.",
        expertRationale: "This is a poor and unprofessional response. It's a sign of a lack of respect for the colleague and can lead to a loss of trust from your company.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 37: Time Management and Prioritization (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 37
    moduleId: 37,
    prompt: "You have a full day of meetings, but a colleague asks you to take on an urgent, time-consuming task. How do you handle the request?",
    responses: [
      {
        id: "A",
        text: "Agree to the task and try to fit it in, which will likely cause you to work late.",
        expertRationale: "This is an example of poor boundary setting. It can lead to burnout and a lack of respect for your time. It doesn't solve the core problem of a full schedule.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Explain your current workload and ask them to help you prioritize by clarifying if this new task is more important than your existing commitments.",
        expertRationale: "This is a great way to handle the situation. It shows you are a team player but also that you value your time. It helps them understand the impact of their request and allows for a shared decision.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the colleague you're too busy and can't help.",
        expertRationale: "This is a fixed and unhelpful response. It doesn't foster collaboration and can make you seem unapproachable.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 37
    moduleId: 37,
    prompt: "You're juggling three projects with conflicting deadlines. What's the best approach to manage your time effectively?",
    responses: [
      {
        id: "A",
        text: "Break down each project into smaller tasks and use a project management tool to create a clear timeline and visualize your workload.",
        expertRationale: "This is a highly effective way to manage time and multiple projects. It provides clarity and allows you to make informed decisions about where to focus your energy. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Start with the project that seems easiest to complete first.",
        expertRationale: "This can lead to a false sense of accomplishment. It may not be the highest priority and can cause you to miss key deadlines on more important projects.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Work on all three projects simultaneously to make some progress on each one.",
        expertRationale: "This is a poor approach. It can lead to a lack of focus and may cause you to miss key details. It's often less efficient than working on one task at a time.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 37
    moduleId: 37,
    prompt: "You are constantly interrupted by colleagues asking for quick help, which disrupts your focus. How can you minimize these interruptions?",
    responses: [
      {
        id: "A",
        text: "Put on headphones and ignore everyone who approaches you.",
        expertRationale: "This is an unapproachable and unhelpful response. While it may stop interruptions, it can lead to a lack of trust and a feeling of being unvalued by your colleagues.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Set aside a specific time each day when you are available for questions and communicate this to your team.",
        expertRationale: "This is an excellent way to manage interruptions. It shows you are a team player while also protecting your time. It provides a clear path for collaboration without constant disruption.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell your colleagues they are not allowed to bother you.",
        expertRationale: "This is a disrespectful and unprofessional response. It's likely to cause resentment and a lack of collaboration.",
        expertRating: 1
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 37
    moduleId: 37,
    prompt: "You've been given a task with a long lead time. How do you ensure you don't procrastinate and leave it to the last minute?",
    responses: [
      {
        id: "A",
        text: "Start working on it immediately and try to get it all done in one day.",
        expertRationale: "This can be a good approach, but it may not be realistic or efficient. It can also lead to burnout and a lack of attention to detail.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Break the task into small, manageable milestones with their own deadlines to stay on track.",
        expertRationale: "This is a highly effective way to manage a large project. It makes the task less daunting and provides a clear path to success. It's a key part of project management.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Ignore the task until the deadline is just a week away.",
        expertRationale: "This is a recipe for disaster. It can lead to poor quality work, a missed deadline, and a high level of stress.",
        expertRating: 1
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 37
    moduleId: 37,
    prompt: "A project's priority has been downgraded. You have already invested a significant amount of time in it. What do you do?",
    responses: [
      {
        id: "A",
        text: "Continue to work on the project at the same pace, regardless of the new priority level.",
        expertRationale: "This is an inefficient use of your time. It shows a lack of adaptability and an inability to prioritize based on new information. It may cause you to miss out on more important work.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Adjust your time allocation to reflect the new priority, reallocating your energy to more critical projects.",
        expertRationale: "This is the most effective response. It shows adaptability and a strategic approach to your work. It's a key part of being an effective professional.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Stop working on it completely and move on to the next task.",
        expertRationale: "This may be a good approach, but it's not always the right one. It may be necessary to complete a certain amount of the work, even if the priority is lower.",
        expertRating: 2
      }
    ]
  },

  // ---
  // MODULE 38: Public Speaking and Presentation (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 38
    moduleId: 38,
    prompt: "You are about to give a presentation to a large group. You feel nervous. What's the best way to manage your anxiety?",
    responses: [
      {
        id: "A",
        text: "Focus on your fear and hope it doesn't show.",
        expertRationale: "This will only increase your anxiety and make it harder to deliver a good presentation. It's a poor way to manage your emotions.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Take a few deep breaths, visualize yourself successfully giving the presentation, and remind yourself of the value you are providing to the audience.",
        expertRationale: "This is a highly effective way to manage anxiety. It combines emotional regulation with a focus on your purpose, which can help you feel more confident and in control.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Rush through your slides so you can finish quickly and get it over with.",
        expertRationale: "This will likely make your audience feel rushed and will make it harder for them to understand your message. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 2, // Scenario 2 of Module 38
    moduleId: 38,
    prompt: "During your presentation, someone asks a difficult question that you don't know the answer to. How do you respond professionally?",
    responses: [
      {
        id: "A",
        text: "Try to bluff your way through the answer, hoping they don't notice you're guessing.",
        expertRationale: "This is a risky and unprofessional approach. It can damage your credibility and may lead to a loss of trust.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Say, 'That's an excellent question. I don't have the answer right now, but I will find out and follow up with you directly after the presentation.'",
        expertRationale: "This is the most professional response. It shows you are honest and trustworthy while also demonstrating a commitment to finding the right answer. It's a key part of building credibility.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Say, 'That's irrelevant to the topic,' and ignore the question.",
        expertRationale: "This is a dismissive and rude response. It can make the person feel disrespected and will likely cause them to lose trust in you.",
        expertRating: 1
      }
    ]
  },
  {
    id: 3, // Scenario 3 of Module 38
    moduleId: 38,
    prompt: "You need to give a compelling presentation to a diverse audience with varying levels of technical knowledge. How do you ensure your message is clear to everyone?",
    responses: [
      {
        id: "A",
        text: "Use highly technical jargon to impress the experts in the room.",
        expertRationale: "This will likely confuse and alienate a large part of your audience. It's a poor way to communicate with a diverse group.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Use simple, universal language and provide an analogy or a real-world example to explain complex concepts.",
        expertRationale: "This is a highly effective way to communicate with a diverse audience. It makes your message accessible to everyone and ensures that they understand the value you are providing.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Speak as fast as you can to cover all the information, assuming everyone will catch up later.",
        expertRationale: "This is a poor way to deliver a presentation. It can make your audience feel rushed and will make it harder for them to understand your message.",
        expertRating: 2
      }
    ]
  },
  {
    id: 4, // Scenario 4 of Module 38
    moduleId: 38,
    prompt: "You've been asked to give a short, five-minute update on a project. How do you make the most of this limited time?",
    responses: [
      {
        id: "A",
        text: "Provide a detailed history of the project from the very beginning.",
        expertRationale: "This is a poor use of time. It will likely bore your audience and may cause you to run out of time before you get to the most important information.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Start with a summary of the key highlights and then provide more detail on the most critical developments and next steps.",
        expertRationale: "This is a highly effective way to give a short presentation. It ensures that your audience gets the most important information first and allows you to provide more detail on the most critical points.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Read from a long script you prepared beforehand.",
        expertRationale: "This can make you sound robotic and may cause you to lose your audience's attention. It's a poor way to deliver a presentation.",
        expertRating: 2
      }
    ]
  },
  {
    id: 5, // Scenario 5 of Module 38
    moduleId: 38,
    prompt: "The projector fails just as you're about to start your presentation. What is the most professional response?",
    responses: [
      {
        id: "A",
        text: "Cancel the presentation, stating that you can't proceed without the slides.",
        expertRationale: "This is a sign of a lack of preparation and adaptability. A good presenter should be able to deliver their message without the help of a projector.",
        expertRating: 1
      },
      {
        id: "B",
        text: "Continue with the presentation, speaking with confidence and engaging your audience without the visual aids.",
        expertRationale: "This is a great way to show adaptability and a commitment to your message. It's a sign of a true professional who is not reliant on technology.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Attempt to fix the projector yourself, making the audience wait while you troubleshoot the issue.",
        expertRationale: "This is a poor use of your audience's time. It's better to move forward with the presentation and address the issue later.",
        expertRating: 2
      }
    ]
  },

  // Module 38: Emotional Intelligence in the Workplace
  {
    id: 1,
    moduleId: 38,
    prompt: "A colleague is visibly upset after a difficult meeting. How do you approach them?",
    responses: [
      {
        id: "A",
        text: "Tell them to 'cheer up' or 'don't take it personally'.",
        expertRationale: "This dismisses their feelings and can be perceived as insensitive or unhelpful.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Stay silent and give them space, assuming they don't want to talk.",
        expertRationale: "While giving space can be good, it can also make a person feel isolated. A proactive check-in is usually better.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Privately check in and say, 'I noticed you seemed upset. Is there anything I can do to help?'",
        expertRationale: "This shows empathy and a willingness to support them without being intrusive. It builds trust and psychological safety.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 2,
    moduleId: 38,
    prompt: "You receive constructive criticism that feels unfair. What's the best immediate reaction?",
    responses: [
      {
        id: "A",
        text: "React defensively and explain all the reasons why the feedback is wrong.",
        expertRationale: "This closes the door to a productive conversation and shows a lack of self-awareness.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Thank the person for the feedback, and ask for specific examples to understand their perspective better.",
        expertRationale: "This demonstrates self-control and a growth mindset. By seeking clarity, you can turn a potentially negative situation into a learning opportunity.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Apologize profusely and promise to change, even if you don't agree with the feedback.",
        expertRationale: "This is a superficial reaction. While an apology is fine, a lack of genuine understanding or commitment to action is not productive.",
        expertRating: 3,
      },
    ],
  },
  {
    id: 3,
    moduleId: 38,
    prompt: "A coworker's frustration is impacting team morale. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Talk to other team members about the coworker's negative attitude.",
        expertRationale: "This is a gossipy and unproductive approach that will only spread the negativity and damage trust.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Address the issue directly with the coworker, but without any specific examples, hoping they will understand.",
        expertRationale: "This is a non-specific approach that might not lead to a real solution and could make the coworker feel attacked.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Privately speak to the coworker with empathy, and ask if there's an underlying issue you can help with, while also mentioning the impact of their behavior on the team.",
        expertRationale: "This is a respectful and effective approach. It shows you care about their well-being while also addressing the professional consequences of their behavior.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 4,
    moduleId: 38,
    prompt: "You are feeling overwhelmed and stressed by your workload. What is the most emotionally intelligent action you can take?",
    responses: [
      {
        id: "A",
        text: "Push through and try to do everything yourself, even if it means working late and burning out.",
        expertRationale: "This can lead to a crash and is not sustainable in the long run. It's an example of poor self-management.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Take a break to clear your head, then talk to your manager or a trusted colleague about your workload and ask for help in prioritizing or re-distributing tasks.",
        expertRationale: "This is a proactive and responsible approach. It acknowledges your feelings while taking a strategic step to manage the situation and prevent burnout.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Complain to everyone on the team about how much you have to do.",
        expertRationale: "This lowers team morale and doesn't solve the problem. It's a venting mechanism, not a solution.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 5,
    moduleId: 38,
    prompt: "You notice a team member is constantly celebrating their own small wins and not giving credit to others. How do you address this?",
    responses: [
      {
        id: "A",
        text: "Publicly call them out for not giving credit to the team during a meeting.",
        expertRationale: "This can create a public conflict and damage the team dynamic without solving the underlying issue.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Praise the contributions of other team members in a general way, hoping the person gets the hint.",
        expertRationale: "This is a passive-aggressive approach that may not be effective and doesn't directly address the behavior.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Schedule a private conversation to discuss the importance of acknowledging the team's collective efforts and to highlight specific instances where they could have given credit.",
        expertRationale: "This is a direct, yet respectful, way to provide constructive feedback that can lead to a positive behavioral change.",
        expertRating: 5,
      },
    ],
  },

  // Module 39: Mentorship and Coaching
  {
    id: 1,
    moduleId: 39,
    prompt: "A new junior team member is struggling with a basic task you consider easy. How do you help them learn?",
    responses: [
      {
        id: "A",
        text: "Tell them to figure it out themselves, as that's how they'll learn best.",
        expertRationale: "This is unhelpful and can make the person feel isolated and unsupported.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Sit with them and walk them through the task step-by-step, explaining the 'why' behind each action.",
        expertRationale: "This is a great coaching approach that teaches them not just 'how' but also the underlying principles, which fosters true learning.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Do the task for them, stating that it will be faster this way.",
        expertRationale: "This provides a quick fix but robs the junior team member of a valuable learning opportunity.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 2,
    moduleId: 39,
    prompt: "A team member asks for career advice. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Tell them what you did in your career and suggest they do the same.",
        expertRationale: "This is an example of providing a solution rather than empowering them to find their own path. What worked for you may not work for them.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Ask them a series of probing questions about their goals, skills, and interests to help them find their own direction.",
        expertRationale: "This is a classic coaching technique. By asking questions, you help them clarify their own thoughts and take ownership of their career path.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Avoid giving advice, stating that you're not a career counselor.",
        expertRationale: "This is an unhelpful and unsupportive response that misses a key opportunity to mentor a colleague.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 3,
    moduleId: 39,
    prompt: "You are mentoring a junior colleague on a complex project. What is the most effective way to help them learn?",
    responses: [
      {
        id: "A",
        text: "Tell them to read a few articles and come back with a solution.",
        expertRationale: "This is an unsupportive approach that puts the entire burden on the junior colleague without providing guidance or a framework for learning.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Give them a simple, well-defined task and provide a detailed review of their work afterward.",
        expertRationale: "This is a good start, but it doesn't teach them how to handle complexity on their own.",
        expertRating: 3,
      },
      {
        id: "C",
        text: "Break the project down into smaller parts, have them try a piece, and then discuss what they learned and how they can improve. Repeat the process with increasing complexity.",
        expertRationale: "This is a highly effective coaching method. It allows them to learn through practice in a safe environment and builds their skills and confidence incrementally.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 4,
    moduleId: 39,
    prompt: "A team member asks for feedback on a presentation they gave. The presentation was good, but had a few minor flaws. How do you provide constructive feedback?",
    responses: [
      {
        id: "A",
        text: "Just say 'It was great!' and nothing else to boost their confidence.",
        expertRationale: "This is a missed opportunity for growth. While it's positive, it doesn't help them get better for next time.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "List all the things that were wrong with the presentation to make them aware of all their mistakes.",
        expertRationale: "This can be overwhelming and discouraging. It can make them feel criticized rather than coached.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Start with a positive comment, then provide one or two specific suggestions for improvement, and end with an encouraging statement.",
        expertRationale: "This is a balanced and effective approach to giving feedback. It reinforces what they did well while providing actionable advice for growth.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 5,
    moduleId: 39,
    prompt: "You are asked to mentor a new employee who is very different from you. What is your first step?",
    responses: [
      {
        id: "A",
        text: "Focus on teaching them your specific way of doing things, assuming it's the best way.",
        expertRationale: "This is a rigid approach that doesn't respect the mentee's individuality or learning style.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Tell them to observe you and learn by example.",
        expertRationale: "This is a passive approach to mentorship. It doesn't actively engage the mentee in the learning process.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Ask them about their goals and how they prefer to learn, and then collaboratively create a mentorship plan.",
        expertRationale: "This is a collaborative and respectful approach. It ensures the mentorship is tailored to the mentee's needs and preferences.",
        expertRating: 5,
      },
    ],
  },

  // Module 40: Critical Thinking and Problem-Solving
  {
    id: 1,
    moduleId: 40,
    prompt: "Your team has to solve a complex, multi-faceted problem. How do you begin to tackle it?",
    responses: [
      {
        id: "A",
        text: "Break the problem down into smaller, manageable sub-problems, and assign each to a different person.",
        expertRationale: "This is an effective way to make a large problem feel less daunting and allows for a focused, systematic approach.",
        expertRating: 5,
      },
      {
        id: "B",
        text: "Try to solve the whole problem at once to save time.",
        expertRationale: "This is a common mistake that can lead to feeling overwhelmed and making errors. It's often an inefficient and stressful way to work.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Wait for a more senior person to tell you what to do.",
        expertRationale: "This is a passive approach that shows a lack of initiative and critical thinking.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 2,
    moduleId: 40,
    prompt: "A client proposes a solution that seems simple and effective, but you have a gut feeling it won't work long-term. How do you handle this?",
    responses: [
      {
        id: "A",
        text: "Go along with the client's suggestion to maintain a good relationship, hoping for the best.",
        expertRationale: "This is a short-sighted and potentially harmful approach that prioritizes a momentary good relationship over a long-term, effective solution.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Tell the client their idea is a bad one and propose your solution instead.",
        expertRationale: "This is an abrasive and uncollaborative approach that can damage the relationship.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Analyze your 'gut feeling' by breaking down the long-term implications and explaining your concerns with data and a well-reasoned argument.",
        expertRationale: "This is a great example of using critical thinking to turn a 'gut feeling' into a concrete, data-driven argument. It shows respect for the client's idea while advocating for a better, more sustainable solution.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 3,
    moduleId: 40,
    prompt: "You're presented with a new tool that promises to increase efficiency by 50%. How do you evaluate this claim?",
    responses: [
      {
        id: "A",
        text: "Believe the claim and immediately push for adoption across the team.",
        expertRationale: "This is a naive approach that lacks critical evaluation and can lead to wasting resources on tools that don't deliver on their promises.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Dismiss the claim as 'too good to be true' without further investigation.",
        expertRationale: "This is a cynical approach that misses a potential opportunity. While skepticism is healthy, dismissing something without evidence is not critical thinking.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Look for independent case studies, ask for a trial period, and test the claim yourself with real data.",
        expertRationale: "This is a robust, evidence-based approach to decision-making. It relies on verification and testing rather than blind trust.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 4,
    moduleId: 40,
    prompt: "A project fails and you need to figure out why. What is your first step?",
    responses: [
      {
        id: "A",
        text: "Hold a meeting and ask who is responsible for the failure.",
        expertRationale: "This creates a culture of blame and discourages people from being transparent about mistakes.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Analyze the process from beginning to end to identify systemic issues, not just individual mistakes.",
        expertRationale: "This is a proactive and systemic approach to problem-solving. It focuses on learning and improvement rather than blame.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Assume it was a one-time thing and move on to the next project.",
        expertRationale: "This is a passive and irresponsible approach that ignores a valuable learning opportunity.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 5,
    moduleId: 40,
    prompt: "You are given a report with a clear recommendation. How do you decide whether to follow it?",
    responses: [
      {
        id: "A",
        text: "Accept the recommendation at face value, as it's from a credible source.",
        expertRationale: "This is a passive approach that lacks critical thinking. A good professional always verifies and understands the reasoning behind a recommendation.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Analyze the data, question the assumptions, and consider alternative conclusions before making a decision.",
        expertRationale: "This is a strong example of critical thinking. It involves questioning, analyzing, and synthesizing information to make an informed decision.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ask a colleague for their opinion and follow their advice.",
        expertRationale: "While collaboration is good, this approach outsources your responsibility for critical thinking.",
        expertRating: 3,
      },
    ],
  },

  // Module 41: Creativity and Innovation
  {
    id: 1,
    moduleId: 41,
    prompt: "A team member proposes a creative, but risky, idea. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Dismiss the idea immediately, as it's too risky and may not work.",
        expertRationale: "This is a creativity-killing response that discourages future innovation and promotes a fear of failure.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Encourage the team member to elaborate on the idea and explore a way to test it on a small scale.",
        expertRationale: "This is a great example of fostering innovation. By creating a safe space to explore the idea and suggesting a low-risk way to test it, you show that you value creativity.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell them to stick to the established plan and not to 'rock the boat.'",
        expertRationale: "This is a fixed mindset response that prioritizes stability over innovation.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 2,
    moduleId: 41,
    prompt: "Your team is stuck on a problem and can't find a solution. How do you facilitate a creative breakthrough?",
    responses: [
      {
        id: "A",
        text: "Force the team to stay in the meeting until a solution is found.",
        expertRationale: "This can lead to frustration and burnout. Creativity often comes from taking a step back and approaching a problem from a fresh perspective.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Suggest a 'divergent thinking' session where you encourage all ideas, no matter how wild, without judgment.",
        expertRationale: "This is a proven technique for fostering creativity. It removes the pressure of finding the 'right' answer and encourages a free flow of ideas, which can lead to unexpected solutions.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ask for more time and delegate the problem to another team.",
        expertRationale: "This is a passive and unhelpful response that avoids the challenge and shows a lack of confidence in the team's ability to innovate.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 3,
    moduleId: 41,
    prompt: "You have a new, innovative idea for a product or service. How do you get buy-in from your stakeholders?",
    responses: [
      {
        id: "A",
        text: "Send a long, detailed document outlining every aspect of the idea and hope they read it.",
        expertRationale: "This is an inefficient way to communicate an idea. It may be too much information at once and can be easily ignored.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Create a compelling narrative around the problem you're solving, present a simple prototype or a visual, and solicit their feedback.",
        expertRationale: "This is a highly effective way to sell an idea. A compelling story and a tangible example make the idea relatable and memorable. By soliciting feedback, you make them feel part of the process.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Wait for someone else to have a similar idea before proposing yours.",
        expertRationale: "This is a reactive and unassertive approach that can lead to missed opportunities and a lack of professional recognition.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 4,
    moduleId: 41,
    prompt: "Your boss has a traditional, 'if it ain't broke, don't fix it' mindset. How do you introduce an innovative process change?",
    responses: [
      {
        id: "A",
        text: "Go around your boss and implement the change without their approval.",
        expertRationale: "This is a disrespectful and risky approach that can damage your relationship with your boss and lead to a lack of trust.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Frame the change in terms of its business benefits, such as cost savings or efficiency, and suggest a small-scale pilot project.",
        expertRationale: "This is a smart and strategic approach. By framing the change in terms of what matters to your boss and proposing a low-risk way to test it, you increase the chances of buy-in.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Give up on the idea because your boss will never be open to it.",
        expertRationale: "This is a defeatist attitude that shows a lack of persistence and a fixed mindset about others' openness to change.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 5,
    moduleId: 41,
    prompt: "How do you maintain a high level of creativity in a routine, repetitive role?",
    responses: [
      {
        id: "A",
        text: "Accept that the role is not creative and focus on just getting the work done.",
        expertRationale: "This is a fixed mindset that closes the door to opportunities for innovation. Even in a routine role, there are always ways to optimize and improve.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Look for small ways to automate tasks or find more efficient workflows.",
        expertRationale: "This is a great way to apply creativity in a routine role. By looking for small improvements, you can make the work more interesting and free up time for more creative, strategic tasks.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Delegate the repetitive tasks to someone else to free up your time for creative work.",
        expertRationale: "While this can be a good strategy, it's not always possible. This response doesn't address how to be creative within the role itself.",
        expertRating: 2,
      },
    ],
  },

  // Module 42: Negotiation Skills
  {
    id: 1,
    moduleId: 42,
    prompt: "You are negotiating with a client who is offering a much lower price than you expected. What's your first move?",
    responses: [
      {
        id: "A",
        text: "Accept the offer, fearing you'll lose the client if you counter.",
        expertRationale: "This is a passive approach that devalues your services. It can lead to you being overworked and underpaid.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Immediately reject their offer and insist on your original price.",
        expertRationale: "This is an aggressive approach that can damage the relationship and end the negotiation prematurely.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Acknowledge their offer, then calmly and professionally explain the value and the benefits of your services to justify your original price.",
        expertRationale: "This is a strategic and professional approach. It educates the client on your value proposition and provides a solid foundation for a counter-offer.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 2,
    moduleId: 42,
    prompt: "A project requires additional resources, and you need to get budget approval from a manager. How do you make your case?",
    responses: [
      {
        id: "A",
        text: "Just send a quick email with the request, stating the project needs more money.",
        expertRationale: "This is a low-effort approach that provides no justification and can be easily ignored or rejected.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Create a detailed presentation that outlines the costs, the benefits of the additional resources, and the risks of not getting them.",
        expertRationale: "This is a highly effective way to negotiate for resources. It's data-driven, strategic, and shows you have thought through the issue thoroughly.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell your manager that your team will be upset if they don't get the resources.",
        expertRationale: "This is an emotional and unprofessional tactic that is unlikely to be successful.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 3,
    moduleId: 42,
    prompt: "You are in a negotiation, and the other party makes a concession. How should you respond?",
    responses: [
      {
        id: "A",
        text: "Immediately accept the concession without offering anything in return, as you got what you wanted.",
        expertRationale: "This is a shortsighted approach that can be seen as selfish and can damage the long-term relationship.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Acknowledge the concession and offer a smaller concession in return to show a good faith effort.",
        expertRationale: "This is a key element of collaborative negotiation. By reciprocating, you build trust and encourage a win-win outcome.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore their concession and continue to push for more.",
        expertRationale: "This is an aggressive tactic that can turn the other party against you and lead to a breakdown in the negotiation.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 4,
    moduleId: 42,
    prompt: "You're negotiating a contract with a new partner. You need a key clause, but they are resistant. How do you proceed?",
    responses: [
      {
        id: "A",
        text: "Give up on the clause, assuming it's not worth the fight.",
        expertRationale: "This is a weak negotiation tactic. You should always try to get what you need, especially if it's a key requirement.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Threaten to walk away from the deal if they don't accept the clause.",
        expertRationale: "This is an aggressive and risky tactic. While it can be a last resort, it can also destroy the deal.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Reframe the clause in terms of its benefit to them, and offer a minor concession on another point to incentivize them to agree.",
        expertRationale: "This is a highly effective negotiation strategy. By reframing and offering a trade, you show a willingness to compromise and find a mutually beneficial solution.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 5,
    moduleId: 42,
    prompt: "You need to negotiate a higher salary. What's the best way to prepare?",
    responses: [
      {
        id: "A",
        text: "Find out what a coworker makes and demand you be paid the same.",
        expertRationale: "This is an unprofessional and unstrategic approach that can damage your relationships and lead to a negative outcome.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Research industry standards, document your recent accomplishments and contributions, and practice your pitch.",
        expertRationale: "This is a proactive and strategic approach. By preparing with data and facts, you build a strong, professional case for a higher salary.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Just ask for more money without any justification, hoping they say yes.",
        expertRationale: "This is a low-effort approach that is unlikely to be successful. It shows a lack of preparedness.",
        expertRating: 2,
      },
    ],
  },

  // Module 43: Public Relations and Stakeholder Management
  {
    id: 1,
    moduleId: 43,
    prompt: "There is a minor PR crisis involving your company. What's the best first step?",
    responses: [
      {
        id: "A",
        text: "Make a public statement immediately, even if you don't have all the facts.",
        expertRationale: "This is a risky approach. A premature or factually incorrect statement can make the situation worse.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Form a crisis management team to gather all the facts, assess the situation, and prepare a thoughtful response.",
        expertRationale: "This is a measured and strategic approach. It ensures a calm, coordinated response that is based on facts and not emotion.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore it and hope it goes away on its own.",
        expertRationale: "This is a passive and irresponsible approach that can lead to the crisis escalating out of control.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 2,
    moduleId: 43,
    prompt: "You need to manage a project with many different stakeholders who have conflicting priorities. How do you approach this?",
    responses: [
      {
        id: "A",
        text: "Focus on the stakeholders who are most vocal, and ignore the others.",
        expertRationale: "This is a shortsighted and biased approach that can lead to a project that fails to meet all the necessary requirements.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Create a stakeholder map to identify their influence and interests, and then create a communication plan that addresses each group's unique needs.",
        expertRationale: "This is a highly effective and strategic approach. By understanding all stakeholders, you can proactively manage their expectations and build the necessary support for your project.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell all the stakeholders that they must compromise, without providing a framework for how to do so.",
        expertRationale: "This is an unhelpful and unstrategic approach that is unlikely to be successful.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 3,
    moduleId: 43,
    prompt: "You are presenting a new project to an external stakeholder who is skeptical about your team's ability to deliver. How do you build trust?",
    responses: [
      {
        id: "A",
        text: "Give them a detailed list of all your team's past successes to prove your competence.",
        expertRationale: "This can come across as arrogant and may not address their specific concerns about this project.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Acknowledge their concerns, provide a clear, step-by-step plan for the project, and offer to provide regular, transparent updates on your progress.",
        expertRationale: "This is a great approach. It shows you're listening, you have a solid plan, and you are committed to building trust through transparency and consistent communication.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell them to trust you and your team because you have a great reputation.",
        expertRationale: "This is a weak and unconvincing approach that relies on an unproven promise rather than on a solid plan.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 4,
    moduleId: 43,
    prompt: "An employee has posted something on social media that could damage the company's reputation. What's the best immediate action?",
    responses: [
      {
        id: "A",
        text: "Demand they take the post down immediately and threaten them with termination.",
        expertRationale: "This is a heavy-handed approach that could escalate the situation and make the company look like a bully.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Ignore it and hope no one notices.",
        expertRationale: "This is a passive and irresponsible approach that could allow the situation to spiral out of control.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Follow the company's social media policy for employee conduct, which likely involves a private conversation to discuss the post and its potential impact.",
        expertRationale: "This is a professional and strategic approach. It addresses the issue directly and respectfully while following established company procedures.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 5,
    moduleId: 43,
    prompt: "A project has been a huge success, and you need to communicate this to the company. How do you make the most impact?",
    responses: [
      {
        id: "A",
        text: "Send a brief email to your direct manager.",
        expertRationale: "This is a missed opportunity to celebrate the team's success and to gain recognition for your work.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Draft a company-wide announcement that highlights the team's efforts, the project's key successes, and the business impact, and share it with leadership.",
        expertRationale: "This is a great way to gain visibility and recognition for your team's work. It also builds morale and encourages future high performance.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell a few people in the office about the success and hope the news spreads.",
        expertRationale: "This is an inefficient and unreliable way to communicate a success.",
        expertRating: 1,
      },
    ],
  },

  // Module 44: Strategic Thinking
  {
    id: 1,
    moduleId: 44,
    prompt: "A major competitor releases a new product that threatens your market share. How do you respond strategically?",
    responses: [
      {
        id: "A",
        text: "Immediately try to build a similar product to match them.",
        expertRationale: "This is a reactive and unstrategic approach. It can lead to you chasing competitors rather than leading the market.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Analyze their product's features, pricing, and marketing, and then brainstorm ways to differentiate your own product to maintain your unique value proposition.",
        expertRationale: "This is a strategic and proactive approach. By analyzing the competition, you can make an informed decision on how to adapt and stay competitive.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore the competitor and hope they fail.",
        expertRationale: "This is a passive and irresponsible approach that can lead to you losing market share.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 2,
    moduleId: 44,
    prompt: "You are given a small budget to solve a big problem. What is the most strategic approach?",
    responses: [
      {
        id: "A",
        text: "Ask for a bigger budget without a clear plan for how to use it.",
        expertRationale: "This is a low-effort approach that is unlikely to be successful. It shows a lack of creativity and strategic thinking.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Break the problem down into smaller, high-impact pieces and focus the limited budget on the area that will provide the most value for the least cost.",
        expertRationale: "This is a great example of strategic thinking. It prioritizes impact over breadth and shows an ability to work effectively with constraints.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell your manager that the problem is unsolvable with the given budget.",
        expertRationale: "This is a defeatist attitude that shows a lack of resourcefulness and strategic thinking.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 3,
    moduleId: 44,
    prompt: "A team member proposes a short-term solution that will fix a problem immediately but might cause issues in the long run. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Accept the solution because it will fix the immediate problem, and you can deal with the long-term issues later.",
        expertRationale: "This is a reactive approach that can create more work down the line. It's an example of prioritizing speed over sustainability.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Tell them their solution is a bad idea and only long-term solutions should be considered.",
        expertRationale: "This is a rigid and uncollaborative approach that may not be feasible or necessary. It can also discourage creative thinking.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Acknowledge the value of the short-term solution, but then lead a discussion on the potential long-term risks and work together to find a more sustainable solution.",
        expertRationale: "This is a great example of strategic thinking. It acknowledges the need for a quick fix while also prioritizing a long-term, sustainable solution.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 4,
    moduleId: 44,
    prompt: "You are asked to analyze a new market opportunity. What is the most strategic way to begin your analysis?",
    responses: [
      {
        id: "A",
        text: "Just do a quick Google search and report what you find.",
        expertRationale: "This is a superficial approach that is unlikely to provide a comprehensive analysis of the market.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) and a competitive analysis to understand the market landscape, risks, and potential returns.",
        expertRationale: "This is a classic strategic framework for analyzing a new market. It provides a comprehensive and data-driven approach to making an informed decision.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Focus on all the reasons why the opportunity won't work to manage expectations.",
        expertRationale: "This is a negative and unhelpful approach that can prevent a potentially great opportunity from being explored.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 5,
    moduleId: 44,
    prompt: "A project is behind schedule. How do you strategically get it back on track?",
    responses: [
      {
        id: "A",
        text: "Tell everyone to work faster and put in extra hours.",
        expertRationale: "This is a short-sighted approach that can lead to burnout and poor quality work. It doesn't address the root cause of the delay.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Review the project plan to identify the bottlenecks, re-prioritize tasks, and re-allocate resources to the most critical paths to get back on track.",
        expertRationale: "This is a strategic and effective approach. It uses data and analysis to find the most efficient way to get the project back on track without burning out the team.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Blame the team for the delays and demand they catch up.",
        expertRationale: "This creates a culture of blame and discourages people from being transparent about mistakes.",
        expertRating: 1,
      },
    ],
  },

  // Module 45: Crisis Management
  {
    id: 1,
    moduleId: 45,
    prompt: "A major outage of your company's service occurs. What is the first thing you do?",
    responses: [
      {
        id: "A",
        text: "Issue a public statement immediately apologizing for the outage, even if you don't know the cause yet.",
        expertRationale: "This is a good first step. It shows that you are aware of the issue and are taking it seriously. It manages customer expectations and can help to de-escalate the situation.",
        expertRating: 5,
      },
      {
        id: "B",
        text: "Ignore the issue and hope it fixes itself.",
        expertRationale: "This is a passive and irresponsible approach that can damage your company's reputation and lead to customer churn.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Tell customers to 'be patient' and that you're working on it, without providing any details or a timeline.",
        expertRationale: "This is a dismissive and unhelpful response that can make customers feel frustrated and ignored.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 2,
    moduleId: 45,
    prompt: "A negative news story about your company is gaining traction on social media. What is the most responsible action?",
    responses: [
      {
        id: "A",
        text: "Engage in arguments with people on social media to defend your company.",
        expertRationale: "This is an unprofessional and counterproductive approach that can make the company look defensive and escalate the situation.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Ignore the story and assume it will blow over.",
        expertRationale: "This is a risky approach. A negative story can spread quickly and damage your company's reputation if it is not addressed proactively.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Prepare a clear, concise, and truthful public statement that addresses the facts of the situation and sets the record straight.",
        expertRationale: "This is a strategic and professional approach. It takes control of the narrative and provides a factual, respectful response to the public.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 3,
    moduleId: 45,
    prompt: "A disgruntled former employee is making false accusations about the company on a public forum. How do you respond?",
    responses: [
      {
        id: "A",
        text: "Send a cease and desist letter immediately.",
        expertRationale: "This is an aggressive legal approach that can escalate the situation and generate more negative publicity.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Ignore the accusations and hope they go away.",
        expertRationale: "This is a passive and irresponsible approach that can allow the accusations to spread and damage the company's reputation.",
        expertRating: 1,
      },
      {
        id: "C",
        text: "Monitor the situation, and if the accusations start to gain traction, issue a professional statement that neither confirms nor denies the claims but states the company's commitment to its values and ethical conduct.",
        expertRationale: "This is a measured and strategic approach. It avoids dignifying the false claims with a direct response but reassures the public of the company's integrity.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 4,
    moduleId: 45,
    prompt: "A product recall is necessary. How do you manage the communication with your customers?",
    responses: [
      {
        id: "A",
        text: "Just post a notice on your website and hope customers see it.",
        expertRationale: "This is a low-effort approach that is unlikely to reach all affected customers. It can lead to a lack of trust and potential legal issues.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Communicate the recall via multiple channels (email, social media, website), clearly explain the reason for the recall, and provide clear instructions on what customers should do next.",
        expertRationale: "This is a transparent and responsible approach. It ensures all customers are aware of the issue and know what to do, which can help to mitigate the crisis and maintain trust.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Minimize the severity of the issue in your communication to avoid alarming customers.",
        expertRationale: "This is a dishonest and unethical approach. It can lead to a loss of trust and a more severe crisis later on.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 5,
    moduleId: 45,
    prompt: "A public figure endorsed your product and is now embroiled in a scandal. How do you handle the situation?",
    responses: [
      {
        id: "A",
        text: "Ignore the situation, assuming it doesn't affect your company.",
        expertRationale: "This is a passive and irresponsible approach that can damage your company's reputation through association.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Release a public statement immediately condemning the public figure and their actions.",
        expertRationale: "This is a reactive and potentially overly aggressive approach that could make your company look like it is just reacting to the scandal.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Assess the severity of the scandal, consult with a legal team, and then determine if you need to distance your company from the public figure in a professional and measured way.",
        expertRationale: "This is a strategic and professional approach. It involves a thoughtful analysis of the situation and a planned response that protects the company's reputation.",
        expertRating: 5,
      },
    ],
  },

  // Module 46: Business Acumen
  {
    id: 1,
    moduleId: 46,
    prompt: "You are asked to analyze the financial health of your department. What is the most important metric to look at?",
    responses: [
      {
        id: "A",
        text: "The total number of projects completed.",
        expertRationale: "This metric doesn't provide a complete picture of financial health. A department could be completing many projects, but at a loss.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "The department's revenue and expenses to determine its profitability.",
        expertRationale: "This is a critical business metric. A department's profitability (or contribution to the company's profitability) is a key indicator of its financial health.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "The number of hours worked by employees.",
        expertRationale: "This metric doesn't directly relate to financial health and can be misleading. High hours worked could mean inefficiency, not profitability.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 2,
    moduleId: 46,
    prompt: "A new technology emerges that could disrupt your industry. What's the most strategic approach to respond?",
    responses: [
      {
        id: "A",
        text: "Ignore it and hope it fails, as it's a new technology and may not succeed.",
        expertRationale: "This is a passive and irresponsible approach that can lead to your company being left behind.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Immediately invest heavily in the new technology, assuming it will be successful.",
        expertRationale: "This is a risky and unstrategic approach. A new technology may not be a good fit for your company, or it may not be successful in the long run.",
        expertRating: 2,
      },
      {
        id: "C",
        text: "Analyze the technology's potential impact on your business model, and then determine if you need to invest in it or find a way to compete with it.",
        expertRationale: "This is a strategic and proactive approach. It involves a thoughtful analysis of the situation and a planned response that protects the company's future.",
        expertRating: 5,
      },
    ],
  },
  {
    id: 3,
    moduleId: 46,
    prompt: "You are asked to propose a new project. How do you frame your proposal to show its business value?",
    responses: [
      {
        id: "A",
        text: "Focus on how 'cool' or 'innovative' the project is.",
        expertRationale: "This is a common mistake. A project's 'coolness' doesn't always translate to business value. You need to show how it will benefit the company.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Outline the project's key objectives, how it will generate revenue or save costs, and how it aligns with the company's overall strategy.",
        expertRationale: "This is a great example of business acumen. It focuses on the bottom line and aligns the project with the company's strategic goals.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Just explain why you think the project is a good idea.",
        expertRationale: "This is a low-effort approach that is unlikely to convince a manager to invest in your project.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 4,
    moduleId: 46,
    prompt: "A project you are working on is at risk of going over budget. What is the most responsible action?",
    responses: [
      {
        id: "A",
        text: "Keep the budget issue to yourself, hoping you can fix it before anyone notices.",
        expertRationale: "This is an irresponsible and unethical approach that can lead to a more severe problem later on.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Immediately inform your manager of the budget issue, and provide a clear plan to either reduce costs or secure additional funding.",
        expertRationale: "This is a transparent and proactive approach. It shows you are aware of the issue and are taking steps to manage it, which is a key part of business acumen.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ask for more money without a clear plan for how to use it.",
        expertRationale: "This is a low-effort approach that is unlikely to be successful. It shows a lack of preparedness.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 5,
    moduleId: 46,
    prompt: "You are asked to analyze a new business opportunity. What's the first financial metric you should look at?",
    responses: [
      {
        id: "A",
        text: "The potential revenue from the opportunity.",
        expertRationale: "While revenue is important, it doesn't tell the whole story. You can have high revenue but also high costs, leading to a loss.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "The potential profit margin, which is the revenue minus the costs.",
        expertRationale: "This is a critical financial metric. A high-profit margin indicates that the opportunity is financially viable and will contribute to the company's bottom line.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "The time it will take to complete the project.",
        expertRationale: "While time is a factor, it is not a direct financial metric. A long project could be highly profitable.",
        expertRating: 1,
      },
    ],
  },

  // Module 47: Global and Cultural Awareness
  {
    id: 1,
    moduleId: 47,
    prompt: "You are leading a project with a team of people from different countries. How do you ensure clear communication?",
    responses: [
      {
        id: "A",
        text: "Assume everyone speaks the same business language as you and get straight to the point.",
        expertRationale: "This is a culturally insensitive approach that can lead to misunderstandings and hurt feelings.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Use simple, universal language and analogies, and avoid jargon and slang.",
        expertRationale: "This is a great way to ensure clear communication in a global setting. It is respectful and helps to bridge cultural and language barriers.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Use an online translator for every message.",
        expertRationale: "This is an inefficient approach that may not accurately convey the tone or nuance of your message.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 2,
    moduleId: 47,
    prompt: "You are negotiating a contract with a client from a country with a more relationship-focused business culture. How do you approach the negotiation?",
    responses: [
      {
        id: "A",
        text: "Jump directly into the contract terms, assuming they want to get straight to business.",
        expertRationale: "This is a culturally insensitive approach that can be perceived as rude and can damage the relationship before it even starts.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Take the time to build a personal relationship first, and then move on to business discussions when the time is right.",
        expertRationale: "This is a great example of cultural awareness. It shows you understand and respect the other party's business culture, which can lead to a more successful outcome.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ask them to adopt your business culture for the negotiation.",
        expertRationale: "This is an arrogant and disrespectful approach that is unlikely to be successful.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 3,
    moduleId: 47,
    prompt: "You are leading a team that includes people from different time zones. How do you schedule meetings effectively?",
    responses: [
      {
        id: "A",
        text: "Schedule all meetings at a time that is convenient for you and assume the others will adapt.",
        expertRationale: "This is a selfish and inconsiderate approach that can lead to burnout and resentment among team members.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Use a time zone calculator to find a meeting time that works for everyone, even if it's not ideal for you.",
        expertRationale: "This is a considerate and effective approach. It shows you respect your team members' time and well-being, which is a key part of good leadership.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Record all meetings and assume people will watch them later.",
        expertRationale: "This is a passive approach that can lead to a lack of engagement and collaboration.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 4,
    moduleId: 47,
    prompt: "You are given a marketing campaign for a product that will be sold in a different country. How do you ensure it is culturally appropriate?",
    responses: [
      {
        id: "A",
        text: "Translate the existing campaign into the new language and assume it will work.",
        expertRationale: "This is a common mistake that can lead to cultural faux pas. A campaign that works in one culture may not work in another.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Consult with a local team or a cultural expert to ensure the campaign's messaging, images, and overall tone are appropriate for the target culture.",
        expertRationale: "This is a strategic and respectful approach. It shows you understand the importance of cultural awareness and are committed to doing it right.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore the cultural differences and focus on the product's features.",
        expertRationale: "This is a risky and irresponsible approach that can lead to a failed campaign.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 5,
    moduleId: 47,
    prompt: "You are working with a new team member from a different cultural background. How do you build a strong working relationship?",
    responses: [
      {
        id: "A",
        text: "Tell them to adapt to the team's culture.",
        expertRationale: "This is an unhelpful and uncollaborative approach that can make the new team member feel isolated and disrespected.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Ask them about their cultural background and how they prefer to work, and then proactively adjust your approach to meet them halfway.",
        expertRationale: "This is a great example of cultural awareness and respect. It shows you are willing to learn and adapt, which is a key part of building a strong relationship.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Treat them like everyone else on the team, ignoring the cultural differences.",
        expertRationale: "While well-intentioned, this can be seen as insensitive. It can be difficult to build a strong relationship if you don't acknowledge and respect the cultural differences that make a person unique.",
        expertRating: 2,
      },
    ],
  },

  // Module 48: Cybersecurity and Data Privacy
  {
    id: 1,
    moduleId: 48,
    prompt: "You receive an email from a new client asking you to click on a link to view a document. How do you verify the link is safe?",
    responses: [
      {
        id: "A",
        text: "Click on the link, assuming it's from a legitimate source.",
        expertRationale: "This is a dangerous and naive approach that can lead to a security breach.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Hover your mouse over the link to see the URL, and if it looks suspicious, contact the sender through a known, trusted channel to verify the email's legitimacy.",
        expertRationale: "This is a great example of cybersecurity awareness. It's a proactive and responsible approach that can prevent a security breach.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore the email and assume it's spam.",
        expertRationale: "This is a passive approach that could lead to a missed business opportunity if the email was legitimate.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 2,
    moduleId: 48,
    prompt: "You find a confidential company document on a public server. What is your first action?",
    responses: [
      {
        id: "A",
        text: "Download the document to your computer to keep it safe.",
        expertRationale: "This is an irresponsible and unstrategic approach that can spread the security issue.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Immediately inform your manager and the IT security team, and provide them with all the information you have about the document's location.",
        expertRationale: "This is the most responsible and effective approach. It ensures the issue is addressed by the right people as quickly as possible.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore it and hope no one notices.",
        expertRationale: "This is a passive and irresponsible approach that can lead to a major data breach.",
        expertRating: 1,
      },
    ],
  },
  {
    id: 3,
    moduleId: 48,
    prompt: "Your team needs to share a highly confidential document with a client. What is the most secure way to do so?",
    responses: [
      {
        id: "A",
        text: "Send the document as an email attachment, assuming the email is encrypted.",
        expertRationale: "This is a risky and unsecure approach. Email is not a secure way to share confidential documents.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Use a secure file-sharing service with password protection and an expiration date for the link.",
        expertRationale: "This is a great example of cybersecurity awareness. It's a proactive and responsible approach that can prevent a security breach.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Print the document and send it via mail.",
        expertRationale: "This is a slow and unsecure approach that can lead to the document being lost or stolen.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 4,
    moduleId: 48,
    prompt: "A coworker asks for your password to access a system while you are away. What do you do?",
    responses: [
      {
        id: "A",
        text: "Provide them with your password, assuming you can trust them.",
        expertRationale: "This is a major security risk and a violation of company policy. It can lead to a security breach and other legal issues.",
        expertRating: 1,
      },
      {
        id: "B",
        text: "Tell them that you cannot share your password, but you can help them get access to the system through the proper channels when you return.",
        expertRationale: "This is a great example of cybersecurity awareness. It's a proactive and responsible approach that protects the company's data and follows security protocols.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Ignore their request, assuming they will find another way to get access.",
        expertRationale: "This is a passive and unhelpful approach that can lead to a delay in the project and cause resentment among team members.",
        expertRating: 2,
      },
    ],
  },
  {
    id: 5,
    moduleId: 48,
    prompt: "You notice an unknown person has been granted access to a confidential document. What is the most responsible action?",
    responses: [
      {
        id: "A",
        text: "Remove the person's access and don't tell anyone, assuming it was a mistake.",
        expertRationale: "This is a passive and irresponsible approach. You need to report the issue to the right people so they can investigate the cause and prevent it from happening again.",
        expertRating: 2,
      },
      {
        id: "B",
        text: "Immediately inform your manager and the IT security team, and provide them with all the information you have about the incident.",
        expertRationale: "This is the most responsible and effective approach. It ensures the issue is addressed by the right people as quickly as possible.",
        expertRating: 5,
      },
      {
        id: "C",
        text: "Tell the person that they have been granted access to a confidential document and ask them to remove their own access.",
        expertRationale: "This is a naive and risky approach that could lead to the person downloading or sharing the document before they remove their own access.",
        expertRating: 1,
      },
    ],
  },

  // MODULE 49: Networking for influence (5 scenarios)
  {
    id: 1, // Scenario 1 of Module 49
    moduleId: 49,
    prompt: "You want to build influence with a key decision-maker. What's your approach?",
    responses: [
      {
        id: "A",
        text: "Send frequent emails highlighting your accomplishments",
        expertRationale: "One-way communication that doesn't build genuine relationship.",
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
        text: "Connect on social media but don't engage personally",
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
        expertRationale: "Minimal effort that doesn't fully acknowledge value received.",
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

export function getScenariosByModuleId(moduleId: number): Scenario[] {
  return scenarios.filter(scenario => scenario.moduleId === moduleId);
}

export const getScenarioCountByModuleId = (moduleId: number) => {
  return getScenariosByModuleId(moduleId).length;
};

export const getRandomScenarioFromModule = (moduleId: number) => {
  const moduleScenarios = getScenariosByModuleId(moduleId);
  if (moduleScenarios.length === 0) return null;
  return moduleScenarios[Math.floor(Math.random() * moduleScenarios.length)];
};

