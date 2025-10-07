type Response = {
  id: 'A' | 'B' | 'C';
  title: string;
  text: string;
  expertRationale: string;
  expertRanking: 1 | 2 | 3;
};

type Scenario = {
  id: number;
  moduleId: 3;
  title: string;
  prompt: string;
  responses: Response[];
  overall: string;
  takeAway: string;
};

export const scenarios: Scenario[] = [
  // Scenario 1: Seeing Around Corners (Anticipating Market Shift)
  {
    id: 1, 
    moduleId: 3, 
    title: "The Iceberg Ahead",
    prompt: "A long-standing manufacturing client is thrilled with your process optimisation plan, which promises 15 percent cost savings. However, internal research suggests their main product line faces obsolescence within three years due to a nascent competitor's superior technology. Presenting the cost plan without mentioning this threat could lose you future work, but bringing it up risks derailing the current, successful engagement.",
    responses: [
      {
        id: "A",
        title: "Stay on the Cost Path",
        text: "Deliver the cost savings plan as agreed, ensuring maximum quick wins to build trust. Schedule a 'future strategy' side meeting with your main sponsor's VP of Product for next month. This allows the current engagement to conclude successfully, securing the immediate win and future opportunity separately.",
        expertRationale: "This is politically safe and prioritises the immediate contract closure and fee collection. The risk is that the client views you as tactically focused, not seeing the whole picture. If the market shifts quickly, your 'future' meeting will feel too late and you will look un-strategic.",
        expertRanking: 2
      },
      {
        id: "B",
        title: "Pivot to Market Risk",
        text: "Introduce the cost plan as Phase 1 (Tactical Fix) but immediately frame it within the larger context of product risk. Present a 'Burning Platform' slide that quantifies the revenue threat and propose redirecting 20 percent of the planned cost savings to seed a 'Product R&D Task Force' to address the competitor.",
        expertRationale: "This move is high-stakes but shows true advisory value. It sacrifices a clean project closure for the sake of the client's long-term health. By offering a solution that self-funds using your existing savings work, you show a holistic view and convert a threat into a new opportunity.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Whisper Campaign",
        text: "Discreetly flag the market risk to your executive sponsor in a one-on-one pre-brief, advising them to 'hold back' on major cost structure changes until the competitive landscape is assessed. Offer to do a two-week 'Market Scan' at no additional charge to validate the threat before the next big presentation.",
        expertRationale: "This uses political awareness to manage risk internally. It is cautious, protecting the sponsor from a public surprise. However, offering free work devalues your insight, and delaying the formal presentation of critical information can be seen as weak or avoiding accountability.",
        expertRanking: 3
      }
    ],
    overall: "The best choice is B because true advisory means addressing the biggest threat, even if it disrupts the current plan. Options A and C are too cautious and prioritise short-term project success over the client's long-term survival. B reframes the conversation from cost-cutting to survival.",
    takeAway: "Tactical wins are quickly forgotten if they ignore the strategic losses looming right around the corner."
  },

  // Scenario 2: Playing the Long Game (Sacrificing Short-term Revenue)
  {
    id: 2, 
    moduleId: 3, 
    title: "Low-Hanging Fruit Trap",
    prompt: "Your team has identified two major work streams: one is a quick, high-margin, easy win that will secure glowing reviews. The other is a foundational but complex data governance overhaul that is vital for the client's future AI plans but offers low immediate margin. Your partner wants to focus on the easy win to meet quarterly revenue targets.",
    responses: [
      {
        id: "A",
        title: "Prioritise Revenue",
        text: "Follow your partner's lead and focus the team's effort on the quick-win, high-margin project. Deliver it perfectly and use the great references to secure the data governance work next quarter. Explain to the client that the data work is currently too complex to start immediately alongside the process work.",
        expertRationale: "This is a good internal team player move that hits revenue targets. It’s professional services 101: deliver the known win first. The trade-off is that delaying foundational work introduces technical debt and may damage the client's trust if they suspect you chose the path of least resistance over their actual need.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Partial Pivot",
        text: "Propose a 'hybrid' approach: deliver 80 percent of the quick-win project to satisfy the revenue goal, but dedicate 20 percent of the team's capacity immediately to kickstart the data governance proof-of-concept. Present this to the client as 'setting the foundation for Phase 2' to manage expectations and ensure future continuity.",
        expertRationale: "This attempts to manage both internal and external priorities, offering a compromise. However, splitting focus often leads to mediocre delivery on both fronts. It also potentially confuses the client about the immediate project scope. Compromise can often be the least impactful path.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Advocate for Foundation",
        text: "Prepare a concise case for the partner and client: demonstrate how failure to address data governance now will cap the ROI of the quick-win project in 18 months. Commit the team to the harder data work, framing it as the 'critical path to AI future' and using the immediate process win as a small pilot instead of the main focus.",
        expertRationale: "This is the most strategic stance. It forces an upfront conversation about value vs. revenue, positioning the firm as a genuine partner. It risks short-term friction with your partner but secures the long-term, high-value relationship and aligns the work to the client's true north. This is the difference between an order-taker and an advisor.",
        expertRanking: 1
      }
    ],
    overall: "C is the most strategic choice because it advocates for long-term client value, even at the cost of immediate revenue. The 'strategic' advisor knows when to fight for the harder, more impactful work. A is short-sighted, and B is an often-ineffective compromise.",
    takeAway: "Don't let the noise of quick wins distract from the vital work needed to build a durable foundation."
  },

  // Scenario 3: Zooming Out (Connecting Disparate Initiatives)
  {
    id: 3, 
    moduleId: 3, 
    title: "Missing the Connection",
    prompt: "Your current project is to optimise the finance department's monthly closing process. You've noticed a parallel project by a different consulting firm aiming to overhaul the HR system's budgeting inputs. Both projects are solving discrete problems, but neither team seems to be aware their outputs are interdependent and could lead to a system failure if not coordinated.",
    responses: [
      {
        id: "A",
        title: "Convening the Systems",
        text: "Inform your sponsor immediately of the interdependence, framing it as a 'critical integration risk.' Request a joint working session with the HR project lead and the other firm. Lead the meeting to define the shared data interface and governance rules, positioning your team as the neutral coordinating force.",
        expertRationale: "This addresses the political and technical risk immediately and directly. It demonstrates a superior 'systems thinking' approach, which is the core of strategic consulting. You are solving the client's unstated problem of fragmentation, elevating your value proposition across the entire portfolio of work.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Fix Your Own Lane",
        text: "Focus strictly on delivering your finance project scope. Document the HR data dependency internally as a 'Major Assumption' in your risk register. If the systems fail later, your team is protected by the documentation. Offer to provide an 'independent review' of the HR project once your current contract is complete.",
        expertRationale: "This is a conservative, scope-protection move. It avoids political entanglement with another firm and limits the team's liability. The trade-off is that it prioritises self-protection over client success. If the client asks later why you didn't flag the obvious risk, documentation won't save the relationship.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Private Warning",
        text: "Have a quiet word with the HR project lead (the other firm's consultant), offering to informally review their data model against yours in exchange for future reciprocal favours. Avoid involving the client sponsor directly, as it makes their project portfolio look unmanaged, which could hurt the sponsor's reputation.",
        expertRationale: "This is a savvy, political move that protects the sponsor and builds 'consultant-to-consultant' goodwill. It's fast and avoids bureaucracy. However, it relies on informal mechanisms for critical infrastructure, which is highly risky. The client needs formal governance, not a handshake agreement.",
        expertRanking: 2
      }
    ],
    overall: "A is the most defensible choice because it immediately addresses the fundamental, cross-functional risk in a professional, structured way, demonstrating a strategic view of the entire client ecosystem. B is too isolationist, and C introduces unacceptable informal risk to key systems.",
    takeAway: "True strategic value comes from connecting the dots across projects, not just optimising a single one."
  },

  // Scenario 4: The Path of Least Resistance (Identifying Misaligned Incentives)
  {
    id: 4, 
    moduleId: 3, 
    title: "The Simple Fix Illusion",
    prompt: "You’ve designed a new operating model that requires a high degree of cross-departmental collaboration, which is currently non-existent. The client leadership loves the design. However, department heads are incentivised purely on individual cost centre performance. Executing the model will fail because incentives are fighting the structure. No one has mentioned the incentive misalignment.",
    responses: [
      {
        id: "A",
        title: "Address Incentives Later",
        text: "Focus the current phase on implementing the new org structure and processes, which is what you were paid to do. Once the structure is live, use the inevitable early friction points as concrete evidence to drive the necessary, politically difficult incentive conversation with the Chief HR Officer in a later, Phase 2 engagement.",
        expertRationale: "This follows the contract and avoids confrontation now. It's a pragmatic, incremental approach. The problem is that the structure will likely fail, creating project fatigue and associating your work with failure, making the future Phase 2 conversation much harder.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Force the Incentive Discussion",
        text: "In the next Steering Committee, present the operating model design, but dedicate the final slide to 'Critical Success Factors.' State clearly that current incentives are 'structurally incompatible' with the new model and will lead to failure. Request immediate approval for a short 'Incentive Redesign Task Force' to co-develop new metrics with the department heads.",
        expertRationale: "This is a bold, strategic move. It is risky because it directly calls out the client's political reality, but it is necessary to prevent failure. It shows that you understand the true levers of organisational change, which are people and rewards, not just boxes on a chart. This elevates you to a true advisor.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Behind the Scenes Alignment",
        text: "Instead of a public discussion, quietly meet with the department heads individually. Ask how they propose to change their own metrics to support the new model. Use their input to build a consensus proposal you can present to the CHRO as a 'Client-Led Solution,' making the heads feel ownership and minimising political fallout.",
        expertRationale: "This is a sophisticated political approach. It creates buy-in and uses internal momentum. The risk is that if the heads disagree fundamentally, you become a political messenger, potentially losing credibility. It delays the hard decision but increases the probability of a smoother execution.",
        expertRanking: 2
      }
    ],
    overall: "B is the highest-ranked because a strategic intervention must address the root cause of execution failure, which is often misaligned incentives. While C is politically smoother, B forces the critical conversation upfront. A is a recipe for failure, as structure change without incentive change rarely succeeds.",
    takeAway: "A perfect plan that ignores human incentives is merely a beautiful piece of useless architecture."
  },

  // Scenario 5: Future Proofing (Building Resilience into the Solution)
  {
    id: 5, 
    moduleId: 3, 
    title: "The Future of Today",
    prompt: "A bank wants you to design a new loan origination platform. They are focused on compliance with current regulations (which are very strict) and a fast delivery timeline. You know, however, that a major regulatory shift is pending within 18 months that will require completely different data reporting standards, rendering the current design obsolete. Addressing it now will add 20 percent to the budget.",
    responses: [
      {
        id: "A",
        title: "Compliance First",
        text: "Build the platform strictly to current regulations and timeline, as per the Statement of Work. Document the pending regulatory change in the risk log, noting the expected cost of future rework. This protects your team's budget and schedule and forces the client to own the decision to accept future technical debt.",
        expertRationale: "This is a good risk-management move for the firm, but it's poor advisory. It gives the client what they asked for, not what they need. They will blame your firm when the rework is required, viewing you as an order-taker who failed to guide them strategically, despite the risk log.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Phased Approach",
        text: "Design the platform to current specs, but architect the data layer with 'future-proofing' in mind: use modular design and abstract interfaces that can handle the future reporting requirements. Present the 20 percent cost increase as an 'Insurance Premium' on the data layer, allowing them to defer the full regulatory change until Phase 2.",
        expertRationale: "This is a nuanced compromise that addresses both the timeline and the strategic risk. By modularising the architecture, you minimise the cost of future rework. It shows foresight and gives the client a clear option to manage the risk incrementally, softening the blow of the budget increase.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Non-Negotiable Future",
        text: "Advise the client that building to only current regulations is irresponsible and unacceptable for a strategic partner. Present the 20 percent budget increase as a mandatory investment, not an option, to ensure the platform has a five-year shelf life. Stress that current compliance and future resilience are a single requirement.",
        expertRationale: "This is the strongest strategic stance, taking accountability for the client's long-term outcome. It forces the client to accept the necessary investment to avoid a costly, embarrassing rebuild later. The risk of friction is high, but the long-term value and respect earned are higher. This is true strategic leadership.",
        expertRanking: 1
      }
    ],
    overall: "C is the best choice because a platform build is a strategic asset, and compromising its future shelf-life for a short-term budget is a failure of advisory leadership. B is a good compromise, but C forces the correct decision. A is a tactical move that destroys long-term credibility.",
    takeAway: "Good advisors sell the platform that will last five years; great advisors insist on it, regardless of short-term cost pressure."
  },

  // Scenario 6: Value Chain Perspective (Understanding the End-to-End Impact)
  {
    id: 6, 
    moduleId: 3, 
    title: "Silo Optimisation",
    prompt: "Your mandate is to slash costs in the client's procurement department. You find a way to save 30 percent on raw material purchasing by consolidating vendors. However, this consolidation will cause massive logistical headaches and delays for the manufacturing plants, adding 20 percent to their operational costs. The procurement head will look like a hero, but the COO's overall number will worsen.",
    responses: [
      {
        id: "A",
        title: "Total Cost of Ownership",
        text: "Present the procurement savings, but immediately offset them with the downstream manufacturing cost increase. Redefine the measure of success from 'Procurement Savings' to 'Total Value Chain Efficiency.' Propose a cross-functional governance board to manage the trade-off and ensure the COO's aggregate number improves, not worsens.",
        expertRationale: "This is a textbook strategic move: never optimise a silo at the expense of the system. You show a command of the end-to-end value chain. By setting up the cross-functional board, you institutionalise a strategic perspective and resolve the political conflict before it escalates, cementing your role as an objective advisor.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Procurement's Win First",
        text: "Deliver the 30 percent procurement savings and get the head's signature on the success. Quietly inform the manufacturing head of the impending issue, suggesting a follow-up project to 'optimise inbound logistics' to mitigate the damage. This secures the first phase and sets up the second engagement.",
        expertRationale: "This is politically savvy, securing a client champion (Procurement Head) and creating a pipeline for future work. However, it's ethically questionable to allow a sub-optimisation to damage the overall client P&L just to secure a new contract. The COO will eventually see the system loss and lose trust.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Mitigation Hedge",
        text: "Propose the vendor consolidation but make 50 percent of the promised savings conditional on the manufacturing team successfully mitigating the downstream logistics issues within six months. This forces both departments to own the end-to-end outcome, but the complexity of implementation governance is high.",
        expertRationale: "This is a creative way to enforce cross-functional collaboration. It introduces a shared destiny. The downside is that manufacturing will likely resist this, viewing the savings as not worth the added complexity and risk. It creates forced cooperation rather than genuine collaboration.",
        expertRanking: 2
      }
    ],
    overall: "A is the only correct strategic answer. Silo optimisation is the opposite of strategic thinking. The role of the advisor is to ensure the overall system is optimised. B is revenue-driven, and C creates undue friction. A redefines success by focusing on the total value chain.",
    takeAway: "Never accept a silo's definition of success; true value is always measured across the full value chain."
  },

  // Scenario 7: External Shocks (Reacting to a Black Swan Event)
  {
    id: 7, 
    moduleId: 3, 
    title: "A Bolt from the Blue",
    prompt: "You are defining the roadmap for a client's digital marketing transformation. Suddenly, their largest competitor acquires a major technology vendor, instantly shifting the industry's digital distribution landscape. Your existing roadmap is now instantly less competitive, but the client team is resistant to pausing, fearing a loss of momentum and a public perception of panic.",
    responses: [
      {
        id: "A",
        title: "Keep the Momentum",
        text: "Continue with the current roadmap delivery, but add a new, two-week work stream focused on 'Competitive Gap Analysis' to run in parallel. Commit to an accelerated review of the roadmap at the end of the two weeks, allowing the team to keep moving while the facts about the acquisition are gathered.",
        expertRationale: "This is a diplomatic, middle-ground approach. It respects the client's emotional need to 'not panic' while still addressing the risk. The danger is that the team burns resources on a roadmap that is already fundamentally flawed, making the eventual pivot harder and more expensive.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Immediate Re-orientation",
        text: "Call an immediate, unscheduled leadership meeting. Present a high-level 'Scenario Analysis' of the acquisition's impact, showing the three most likely outcomes (Best, Mid, Worst). Recommend a 1-week 'hard pause' on current execution to redraft the entire roadmap around the competitor's new advantage, showing that adaptation is the only way to avoid failure.",
        expertRationale: "This is the necessary crisis leadership. A major external shock requires an equally major internal response. The pause prevents wasted effort and signals to the client that you are on top of the strategic landscape. The speed of response and clarity of the new direction (the scenario analysis) earns deep trust.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Targeted Roadmap Tweak",
        text: "Identify the three roadmap items most impacted by the acquisition and propose replacing them immediately with equivalent initiatives that address the competitor's new capabilities. Frame it as a 'mid-course correction' rather than a pause, keeping the core roadmap structure intact to reduce management overhead and team anxiety.",
        expertRationale: "This is a pragmatic, low-friction adjustment. It provides a quick response without the political cost of a full pause. The strategic risk is that a mere 'tweak' is insufficient to address a fundamental shift in the market, leading to a strategically weak, patched-up solution.",
        expertRanking: 2
      }
    ],
    overall: "B is the highest-ranked because a black swan event demands a full strategic re-evaluation, not a tweak or a parallel work stream. Strategic agility is about knowing when to stop doing the wrong thing. A and C fail to appreciate the magnitude of the external shock.",
    takeAway: "When the ground shifts, you must stop building; adaptation is a full stop, a re-think, and a new first step."
  },

  // Scenario 8: Internal Dynamics (Managing Resistance to Change)
  {
    id: 8, 
    moduleId: 3, 
    title: "The Empire Strikes Back",
    prompt: "Your new organisational design is ready to launch, but the powerful SVP of Sales is privately undermining it by telling their team that 'this will pass, just wait it out.' The SVP’s passive resistance is contagious, and the change risk is spiking. Your sponsor, the CEO, is aware but refuses to intervene, saying it’s 'a management test for you.'",
    responses: [
      {
        id: "A",
        title: "Direct Confrontation",
        text: "Schedule a one-on-one with the SVP of Sales, citing specific examples of their team's non-compliance. State clearly that their actions are undermining the CEO's mandate and ask for a public demonstration of support (e.g., an internal memo from them). Escalate to the CEO if support isn't immediately provided.",
        expertRationale: "This is a high-risk, high-reward move. It addresses the political root cause directly. However, confronting a powerful SVP without the CEO's explicit public backing is often career-limiting, especially when the CEO has already indicated they will not intervene. It violates the 'unwritten rule' of not out-ranking the client sponsor.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Data Over Dialogue",
        text: "Immediately establish a transparent, public dashboard showing adoption rates and early outcomes, explicitly highlighting the Sales department's low numbers and negative impacts on overall company goals. Let the data create the pressure for the SVP, forcing the CEO or the SVP's peers to eventually address the performance gap for you.",
        expertRationale: "This is a clever move that uses objectivity to solve a political problem. The dashboard applies peer and hierarchical pressure without you having to be the messenger. It's a strategic use of transparency. The downside is that it takes time, and the resistance might cause irreparable damage before the data builds enough pressure.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Incentivise the Lieutenants",
        text: "Bypass the SVP entirely and focus on their direct reports (the VPs and Directors). Give them immediate wins and public praise for adopting the new model, making them look good to the CEO. Create a 'Coalition of the Willing' at the layer below the SVP, isolating the resisting leader through performance and peer influence.",
        expertRationale: "This is the most strategically astute, political-emotional move. It addresses the contagion without direct, costly confrontation. It reframes the change from a mandate (which the SVP can ignore) to an opportunity (which their subordinates cannot). It uses positive peer pressure and creates a path for the SVP to either join or be surrounded by the new structure.",
        expertRanking: 1
      }
    ],
    overall: "C wins because it is a sophisticated political strategy that solves the problem by changing the environment around the resisting leader. A is confrontational and unsupported. B is good but too slow. C uses lateral influence to execute the strategic design, showing true organisational savviness.",
    takeAway: "Never fight the General; win over their best Lieutenants and let the political pressure do your dirty work."
  },

  // Scenario 9: Defining the Problem (Avoiding the Wrong Question)
  {
    id: 9, 
    moduleId: 3, 
    title: "The Wrong Side of the Mountain",
    prompt: "The Head of Marketing insists the core problem is a 'lack of budget' and wants your team to build a case for a 50 percent increase. After initial review, you realise the problem isn't budget; it's a fragmented, poorly governed tech stack that wastes 40 percent of the existing spend. Building the budget case is easy, but it won't solve the real issue.",
    responses: [
      {
        id: "A",
        title: "Reframing the Problem",
        text: "Acknowledge the budget request but state that the most expedient path to the desired outcome is not more money, but better efficiency. Present two parallel cases: 'Case A: 50% Budget Increase' and 'Case B: 40% Efficiency Gain via Governance.' Force the client to choose between spending more and fixing the root cause, positioning your work as solving the real problem.",
        expertRationale: "This is the ideal strategic move. It respects the client's initial request (the political necessity) while introducing the correct, deeper problem. By quantifying the efficiency gain (40 percent), you show that the solution is already hidden in their current spend, making the 'more budget' option look weak and irresponsible. You re-establish advisory control.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Tactical Win",
        text: "Proceed with the budget case, delivering a strong, well-supported document. Use the opportunity to quietly document the technical waste in an appendix, presenting the tech stack overhaul as a critical, high-ROI 'Phase 2' engagement that will ensure the new budget is spent effectively. You meet the immediate need and create a pipeline.",
        expertRationale: "This is a pragmatic approach that secures the immediate contract and satisfies the client sponsor. The problem is you are helping them spend more money badly. It’s a tactical win that is strategically irresponsible. It also makes your firm culpable for the continued waste until 'Phase 2' starts.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quiet Advisor",
        text: "Tell the Head of Marketing privately that you cannot ethically recommend a budget increase without addressing the underlying tech debt. Offer to pivot the current engagement scope to 'Budget Optimisation' immediately, promising to find 20 percent of the needed 50 percent increase internally. This helps the sponsor save face by finding money internally.",
        expertRationale: "This is a good, relationship-focused choice that helps the sponsor save face. Finding internal money is politically powerful. However, it requires you to scale down the scope (finding 40 percent waste is better than 20 percent) and can dilute the message of the full tech stack overhaul. It’s a great operational fix, but less strategic than a full reframing.",
        expertRanking: 2
      }
    ],
    overall: "A is the winning move. Strategic acumen means challenging the client's premise (the 'Wrong Side of the Mountain') when necessary. B simply follows orders, and C, while politically smooth, underplays the magnitude of the tech problem. A forces a proper, data-driven conversation about the root cause.",
    takeAway: "Never solve the problem as stated; solve the problem that will deliver the most value, which often requires a reframing."
  },

  // Scenario 10: Resource Allocation (Optimising for Constraint)
  {
    id: 10, 
    moduleId: 3, 
    title: "The Bottleneck is the Strategy",
    prompt: "Your client, a fast-growing tech firm, has three high-priority initiatives, but only enough highly skilled data science talent to fully staff one. The CEO wants to start all three at 30 percent capacity, hoping to make progress. Your analysis shows that starting all three will result in zero successful outcomes due to critical mass issues.",
    responses: [
      {
        id: "A",
        title: "Follow the CEO's Lead",
        text: "Staff all three projects at 30 percent capacity, as requested, to avoid political friction with the CEO. Establish clear risk-tracking and report weekly on the lack of progress. When the CEO inevitably asks why nothing is being delivered, use the data to then propose consolidating resources onto the single, highest-priority project.",
        expertRationale: "This is a low-friction approach that allows the client to learn the hard lesson via data. The strategic cost is high: three to six months of wasted time and momentum, and the morale hit of three failing projects. It avoids conflict but sacrifices valuable time and resources.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Single Focus",
        text: "Present the data science capacity constraint as the 'strategic bottleneck.' Show that the optimal allocation is a '100-0-0' model. Use a simulation to prove that one successful project now is better than three half-finished ones a year later. Work with the CEO to formally kill two initiatives and fully staff the most critical one.",
        expertRationale: "This is the only strategically correct answer. Strategy is about sacrifice and choice. By forcing the 100-0-0 decision, you ensure a successful outcome for the most important initiative. This shows leadership, command of resource management, and a focus on delivering actual business outcomes, not just starting projects.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "External Supplement",
        text: "Propose immediately hiring three external contractors to temporarily supplement the client's data science team, allowing all three projects to proceed at 80 percent capacity. Frame this as a 'time-to-market advantage' premium, justifying the cost by the competitive risk of delaying any of the three initiatives.",
        expertRationale: "This is a compromise that solves the immediate resource constraint with money. It's often the client's default solution. However, it avoids the core strategic problem: the client is over-committing their internal capacity. It also burdens the team with onboarding and management, potentially just moving the bottleneck rather than solving it.",
        expertRanking: 2
      }
    ],
    overall: "B is the most powerful strategic move because it focuses on choice and sequencing. Strategic resource allocation is about concentrating force where it matters most. A wastes time proving the obvious, and C simply kicks the problem down the road with temporary, expensive relief.",
    takeAway: "When resources are constrained, the strategy is not to start everything; it is the deliberate choice of what to kill to ensure one success."
  },

  // Scenario 11: Competitive Intelligence (Using an Edge)
  {
    id: 11, 
    moduleId: 3, 
    title: "The Competitor's Secret",
    prompt: "While preparing a market analysis for a mid-tier logistics firm, you discover through publicly available but obscure documents (e.g., zoning permits) that their main competitor is secretly building a massive new regional distribution hub, which will give them a 40 percent delivery speed advantage in a key market within a year. The client is completely unaware.",
    responses: [
      {
        id: "A",
        title: "The Standard Report",
        text: "Integrate the finding into the final market analysis report as a single, well-cited data point under the 'Emerging Threats' section. Present it formally in the steering committee meeting along with all other findings. This maintains transparency and ensures the finding is properly documented within the project scope.",
        expertRationale: "This is too passive. Treating a catastrophic, non-public finding as a standard data point in a long presentation risks it being missed or downplayed. The shock of the finding should dictate the communication method, not the template, otherwise the client won't grasp the urgency.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Crisis Briefing",
        text: "Immediately call an emergency, private meeting with the CEO. Present only the new distribution hub finding, focusing on the quantified impact (40 percent speed advantage) and the time until activation (12 months). Frame the current project as 'obsolete' and recommend an immediate pivot to a 'Defensive Strategy' work stream.",
        expertRationale: "This is appropriate crisis management. A finding of this magnitude cannot wait for a scheduled meeting. By taking an immediate, dramatic step, you ensure the CEO understands the urgency and views your firm as the one who saved them from a blind side. It shows proactive, real-time strategic support.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Strategic Foresight Workshop",
        text: "Without revealing the specific finding immediately, schedule a 'Market Foresight Workshop' with the executive team. Use a 'What If' scenario where a competitor gains a significant speed advantage. Once the executives feel the strategic pressure, reveal the actual finding (the hub) to validate the scenario, then lead them to co-create the defensive strategy themselves.",
        expertRationale: "This is the most strategic and politically powerful move. Instead of just delivering bad news, you use the finding as a tool to shift the client's collective mindset. By letting them 'discover' the strategic implication before revealing the data, you ensure maximum buy-in for the inevitable, difficult changes needed for the defensive strategy.",
        expertRanking: 1
      }
    ],
    overall: "C wins because it leverages the shock of the news for maximum strategic effect and client buy-in. B is good for urgency but less effective for long-term change. A is a failure of communication for a critical piece of intelligence. Strategic communication means ensuring the message is not just heard, but acted upon.",
    takeAway: "A critical finding is not just data; it is a communication lever you must use to move the client from comfort to action."
  },

  // Scenario 12: Ecosystem Thinking (Partner vs. Competitor)
  {
    id: 12, 
    moduleId: 3, 
    title: "Friend or Foe?",
    prompt: "Your financial services client is considering acquiring a small FinTech firm to boost their mobile payment capability. Your due diligence reveals the FinTech firm is also quietly developing a parallel consumer lending product that, if scaled, will eventually compete directly with your client's core business. The FinTech CEO is being deliberately vague about this project.",
    responses: [
      {
        id: "A",
        title: "The Veto Play",
        text: "Flag the competitor product as a 'Major Unmitigable Risk' to the client's M&A committee, recommending an outright veto on the acquisition. Present a clear analysis of how the FinTech's product, post-acquisition, could be internalised and 'weaponised' against the client's own existing business, creating unnecessary cannibalisation.",
        expertRationale: "This is the necessary strategic counsel. Acquiring a future competitor that will cannibalise your core business is strategically disastrous. By recommending a veto, you force the client to look at the long-term structural implications, not just the short-term capability gain. This shows you are protecting their core P&L.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Integration Clause",
        text: "Recommend proceeding with the acquisition but insist on a strict post-deal integration clause that mandates the immediate cessation and dismantling of the competing consumer lending product. Present this as a 'Non-Compete' integration requirement, ensuring the client captures the mobile tech without the future threat.",
        expertRationale: "This is a good attempt at compromise, trying to keep the desired capability. The risk is high: once acquired, the FinTech team may resist dismantling their product or simply rebuild it internally under a different name. You are relying on contract enforcement instead of strategic principle, and the cultural friction will be immense.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Negotiated Spin-Off",
        text: "Advise the client to use the discovery of the competing product as leverage in the final negotiation. Propose acquiring only the mobile payment team and technology, while allowing the FinTech CEO to spin off the consumer lending product as a separate entity with a small seed investment from the client, securing a non-voting equity stake to monitor the threat.",
        expertRationale: "This is a sophisticated, diplomatic approach. It solves the immediate problem (mobile capability) and turns the competitor product into a monitored satellite. The downside is that it creates unnecessary complexity and the satellite entity remains a strategic risk that must be actively managed, diverting executive attention.",
        expertRanking: 2
      }
    ],
    overall: "A is the cleanest strategic answer. The core of strategy is choosing who you are and what you do not do. Acquiring a firm whose values and product roadmap are already misaligned with yours is a recipe for internal chaos and cannibalisation. B and C introduce unnecessary complexity and risk.",
    takeAway: "If a potential partner is already building a competing future, the simplest and best strategy is to walk away, not complicate the deal."
  },

  // Scenario 13: Capability Sequencing (The Order of Operations)
  {
    id: 13, 
    moduleId: 3, 
    title: "Building the Right Ladder",
    prompt: "Your client needs to achieve three capabilities to meet their five-year goal: better customer analytics, a unified digital platform, and a decentralised sales force. The CEO wants to start with the digital platform because it's the most visible. You know that without the analytics capability first, the platform will be empty, leading to a huge public failure and loss of trust.",
    responses: [
      {
        id: "A",
        title: "Digital Platform First",
        text: "Start the digital platform as requested by the CEO. Re-scope the first phase of the platform to be purely foundational IT infrastructure, not a customer-facing product. Simultaneously, quietly use 50 percent of the platform budget to fund the analytics team, ensuring the necessary data is ready when the platform is ready for launch.",
        expertRationale: "This is politically manipulative, attempting to deliver the CEO's wish while doing the right thing in secret. The risk is high: if the CEO finds out, or if the platform team misses its deadline due to under-resourcing, your credibility is ruined. Strategic sequencing should be transparent, not covert.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Invert the Sequence",
        text: "Present the three capabilities as a mandatory sequence: Analytics first, then Platform, then Sales Decentralisation. Use a clear visual that shows the platform's dependence on analytics ('Garbage In, Garbage Out'). Frame it as a 'Trust First' strategy, arguing that the first visible failure will kill the entire program, forcing the CEO to accept the correct order.",
        expertRationale: "This is the only strategically responsible position. Sequencing is critical; a failure in the foundational step (analytics) leads to the failure of the visible step (platform), which leads to the political failure of the entire change program. This demonstrates clarity of thought and the courage to challenge the CEO's 'vanity' project.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Parallel Start",
        text: "Propose starting both the Analytics and the Platform capabilities in parallel. Use a 'Just-in-Time' integration approach, where the platform team's first milestone is only to consume the first output from the analytics team. This manages the CEO's desire for speed but increases coordination risk exponentially due to tight coupling and dependency management.",
        expertRationale: "This attempts to manage momentum, which is a key political requirement. Starting in parallel is defensible if the dependencies are managed perfectly. However, it often leads to platform rework and delay as the analytics data model inevitably changes. This is a common failure pattern for complex transformations.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner because good strategy is about the correct order of operations. Starting a visible project (Platform) that relies on a missing foundational capability (Analytics) guarantees a political disaster. A is too risky, and C is complex and prone to failure. B forces the necessary discipline.",
    takeAway: "Never compromise on sequencing; the difference between a successful transformation and a spectacular failure is often just the order of the first two steps."
  },

  // Scenario 14: Culture as a Strategic Asset (Soft vs. Hard Levers)
  {
    id: 14, 
    moduleId: 3, 
    title: "The Human Algorithm",
    prompt: "You have designed a world-class, automated pricing system that eliminates manual errors and boosts margin by 5 percent. However, the Sales team is resisting adoption because they believe the system 'doesn't understand the customer' and prefer their gut-feel overrides. The VP of IT wants to mandate a hard implementation deadline, but you fear this will only push the resistance underground.",
    responses: [
      {
        id: "A",
        title: "Mandate the Deadline",
        text: "Support the VP of IT in mandating a hard cut-over deadline. Use the CEO's authority to enforce compliance, stating that any overrides will require two-level management approval. This quickly realises the 5 percent margin gain and forces behavioural change through rules and accountability.",
        expertRationale: "This is a forceful, structural approach that works if the firm has a strong command-and-control culture. The risk is high: Sales may simply slow down, misclassify deals, or find workarounds, leading to system 'drift' and lower long-term ROI. It solves the technical problem but ignores the cultural one.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Incentivise the Override",
        text: "Re-engineer the pricing system to allow the Sales team to see the system's logic and track their override performance against the algorithm's prediction. Tie a significant portion of their bonus to the margin achieved when they follow the system, but give an even larger bonus for successful overrides that are justified and used to teach the algorithm.",
        expertRationale: "This is a sophisticated solution that uses incentives and transparency. It treats the human element (Sales' gut-feel) as a strategic asset, not a barrier. It integrates human judgment into the system's learning loop, converting resistance into collaboration and driving a culture of continuous improvement, which is strategically superior.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Cultural Pivot",
        text: "Create a 'Pricing Algorithm Champions' internal team composed of the highest-performing Sales representatives. Give them a direct line to the IT team to suggest improvements. Publicly celebrate the sales reps who successfully use the system and tie their success stories to career advancement. Delay the hard deadline by 60 days to allow for cultural adoption.",
        expertRationale: "This is the best strategic approach to cultural change. It addresses the emotional 'trust' issue by giving the Sales team a voice and ownership. By converting the most resistant group's leaders into 'Champions,' you leverage internal peer influence to drive adoption. It sacrifices a short-term deadline for guaranteed long-term, high-quality adoption.",
        expertRanking: 1
      }
    ],
    overall: "C is the winner. Strategic transformation is 20 percent technology and 80 percent people. Mandating adoption (A) or incentivising complexity (B) misses the root cultural issue of trust. C builds trust and peer influence, ensuring sustainable change. This shows a deep understanding of organisational dynamics.",
    takeAway: "Never try to beat a culture with a mandate; strategically, you must always recruit the most powerful rebels to be your champions."
  },

  // Scenario 15: External Validation (Managing Reputational Risk)
  {
    id: 15, 
    moduleId: 3, 
    title: "The PR Backfire",
    prompt: "Your client, a major utility company, wants to make a public announcement about a new 'Green Energy Transition' strategy you helped them design. You discover the data supporting the plan's near-term claims is slightly optimistic and could be easily challenged by an experienced NGO, leading to a PR disaster and brand damage. The CEO is pushing for the announcement next week.",
    responses: [
      {
        id: "A",
        title: "Call for a 'Facts' Review",
        text: "Immediately intervene and demand a 'final facts and figures' review session with the CEO and the Head of PR. Insist on toning down the near-term claims and publicly focusing on the achievable mid-term goals. Frame this as protecting the CEO's personal reputation and the long-term integrity of the 'Green' brand.",
        expertRationale: "This is the necessary strategic risk management. Reputational risk is often a hidden strategic vulnerability. By appealing to the CEO's personal and brand integrity, you gain the leverage needed to delay the announcement. It shows an awareness of the external ecosystem (NGOs, media) that the client may lack.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Preemptive Strike",
        text: "Recommend delaying the public announcement and instead privately briefing three major, influential NGOs (one supportive, one neutral, one critical) with the full data package. Allow them to challenge the plan privately, integrating their feedback to 'NGO-proof' the announcement before it goes public. This uses critics to strengthen the strategy.",
        expertRationale: "This is a sophisticated external affairs strategy. It converts potential critics into unwitting partners in validation. However, it significantly increases complexity, delays the announcement, and risks the NGOs leaking the information prematurely. It's a high-friction, high-reward approach that requires exceptional political management.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Release and Defend",
        text: "Allow the announcement to proceed as scheduled to meet the CEO's deadline, but immediately prepare a 'War Room' with the PR and Legal teams. Pre-write responses to the most likely NGO challenges and ensure the CEO is briefed on three key, defensible talking points. This prioritises momentum over caution.",
        expertRationale: "This is a reactive, low-acumen strategy. Fighting a PR fire is far more expensive than preventing one, and the resulting brand damage will cost more than the consulting fee. A strong strategic advisor prevents crises; they do not set up for a reactive defence. It risks associating your strategy with 'greenwashing.'",
        expertRanking: 2
      }
    ],
    overall: "A is the highest-ranked because it is the most direct and lowest-risk way to protect the client's reputation. Strategic moves should not be built on shaky ground. C is reckless, and B is overly complex for managing what is essentially a data hygiene and credibility issue. Protecting the 'facts' is always the first move.",
    takeAway: "Never let a political deadline compromise the integrity of the facts; if the strategy is based on a lie, the strategy will fail in the court of public opinion."
  },

  // Scenario 16: Managing Board Expectations (Selling the Vision)
  {
    id: 16, 
    moduleId: 3, 
    title: "Boardroom Fatigue",
    prompt: "You are presenting a five-year transformation roadmap to a highly skeptical Board that has seen three failed attempts at major change in the last five years. They are focused on quarterly results and hate vague 'vision' talk. Your analysis shows the real ROI doesn't kick in until Year 4, but you need their sign-off now to avoid critical delay.",
    responses: [
      {
        id: "A",
        title: "Focus on the Vision",
        text: "Start with a high-energy 'burning platform' story about the competitive threat. Spend the majority of the time detailing the Year 5 vision and the massive ROI. Minimise discussion of the first two years, framing them as necessary foundational work. Use inspirational language and powerful visuals to overcome skepticism.",
        expertRationale: "This plays to the 'vision' stereotype the Board already dislikes. It ignores their past pain and fails to address their legitimate concern for short-term value. By skipping over Years 1 and 2, you confirm their fear that the project is just an expensive, long-shot gamble with no immediate proof of concept.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Incremental De-Risking",
        text: "Acknowledge the past failures upfront. Focus 70 percent of the presentation on the first 12 months, detailing three achievable, high-value, non-technical quick wins that will pay for the consulting fees and prove the team's competence. Present the Year 4 ROI as the inevitable result of these small, de-risked wins, asking only for a 12-month sign-off, not the full five years.",
        expertRationale: "This is the superior strategic communication. It addresses the Board's skepticism (the 'emotional contract') by focusing on de-risking and tangible, near-term value. By asking for a smaller commitment (12 months), you build trust incrementally, which is the only way to sell a long-term vision to a fatigued audience. It shows empathy and realism.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Quantified Risk Transfer",
        text: "Present the full five-year plan but include a contractual 'performance guarantee' for the first 18 months, tying your firm's fees to the achievement of three specific, verifiable milestones. This transfers project risk back to your firm, forcing the Board to focus on the numbers while signalling your complete confidence in the plan's viability.",
        expertRationale: "This is a high-conviction, financially-driven move. It directly addresses the cost concern. However, Boards can view financial guarantees as a gimmick. Furthermore, it sets a dangerous precedent for future engagements and distracts from the strategic value by focusing the conversation purely on short-term financial liability.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic communication for a long-term plan must be built on short-term trust. The Board's skepticism is a constraint that must be managed. A ignores the constraint, and C attempts to buy trust rather than earn it. B uses small wins to create the momentum for the big vision.",
    takeAway: "You can only sell a five-year vision to a skeptical Board by giving them three months of guaranteed, tangible proof first."
  },

  // Scenario 17: Scenario Planning (Preparing for the Unthinkable)
  {
    id: 17, 
    moduleId: 3, 
    title: "The Unthinkable Tabletop",
    prompt: "Your client, a major retailer, is preparing for the holiday season. The leadership team is focusing purely on optimising for high sales volume. You feel they are critically unprepared for a 'worst-case' scenario: a major supply chain disruption (e.g., a port strike) combined with a high-profile data breach, which would ruin the quarter. Management views this as fear-mongering.",
    responses: [
      {
        id: "A",
        title: "Focus on the Upside",
        text: "Agree to focus the current work purely on sales optimisation, as requested. Quietly build two separate 'Contingency Playbooks' for the supply chain and data breach risks and present them as optional, pre-written plans to the VP of Operations. This ensures the plans exist without disrupting the CEO's 'positive' narrative.",
        expertRationale: "This is politically safe, but strategically weak. The CEO needs to own the risk, not delegate the playbook to the VP. The VPs will not have the authority or funding to activate the plans effectively during a crisis. It protects your firm but leaves the client exposed.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Force the Tabletop",
        text: "Insist on dedicating one hour of the next executive meeting to a 'Stress Test' or 'Tabletop Exercise.' Run the room through the combined 'Supply Chain + Data Breach' scenario, forcing them to assign immediate executive ownership for the two most critical failure points. Frame it as necessary preparation for the holiday 'war'.",
        expertRationale: "This is necessary crisis leadership. Strategy requires preparing for the full range of outcomes, not just the best one. By forcing the tabletop exercise, you activate the 'muscle memory' needed for a crisis. It creates friction, but ensures the C-suite is mentally prepared, which is a strategic non-technical asset.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Insurance Metric",
        text: "Reframe the 'worst-case' preparation as an 'Insurance Policy' cost. Quantify the probability of the combined event and the resulting P&L loss (e.g., 20 percent of quarterly profit). Propose a small, formal work stream focused on 'Crisis Resilience' that aims to reduce the potential loss from 20 percent to 5 percent, thereby justifying the immediate investment to the CFO.",
        expertRationale: "This is the most strategically sophisticated option because it converts a scary, emotional topic (fear-mongering) into a rational, financial decision (risk management). By quantifying the downside and showing the ROI of mitigation, you bypass the emotional resistance and get the necessary executive approval and budget. This is the art of selling risk management.",
        expertRanking: 1
      }
    ],
    overall: "C is the strongest move. Strategic risk management is often resisted until the cost of inaction is quantified and justified on a balance sheet. A is too passive. B is good for immediate awareness but can be dismissed as 'drama.' C embeds resilience into the financial framework of the holiday strategy.",
    takeAway: "To sell preparation for the worst case, stop talking about the fear; instead, quantify the cost of the disaster and the ROI of the solution."
  },

  // Scenario 18: Organisational Structure (The Right Shape)
  {
    id: 18, 
    moduleId: 3, 
    title: "Structure Fights Strategy",
    prompt: "Your client is moving from a single-product company to a multi-product portfolio. Their current functional (siloed) structure is excellent for efficiency but terrible for launching cross-functional product lines. The CEO is pushing for a matrix structure, but you know it will introduce too much political friction and slow them down during the critical launch phase.",
    responses: [
      {
        id: "A",
        title: "Product-Led Hubs",
        text: "Recommend skipping the inefficient matrix structure. Propose a 'Product Hub' model where small, cross-functional teams (Sales, Tech, Finance) are fully dedicated to each new product line, but share central functional resources. This achieves the speed of a startup while retaining the economies of scale from the central functions. Frame it as the 'best of both worlds'.",
        expertRationale: "This is the most elegant solution. The product hub model is purpose-built for the client's strategic shift (multi-product launch) because it provides necessary focus and speed without the political overhead of a full matrix. It correctly aligns the structure with the strategic outcome (speed to market).",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Implement the Matrix",
        text: "Implement the matrix structure as requested by the CEO. Design a robust governance model with clear escalation paths and role clarity documentation to manage the inevitable political friction. Plan for a 12-month review to adjust the model once the initial shock of the dual-reporting lines has passed and the team has adapted.",
        expertRationale: "This is a compliance move. The matrix is notorious for increasing complexity and slowing down decision-making. While the CEO wants it, implementing a structure that actively fights the strategy (launch speed) is irresponsible advisory. The 12-month review will likely be a costly, high-friction salvage operation.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Temporary Structure",
        text: "Implement the CEO's requested matrix structure but only for the duration of the initial product launch phase (9 months). Simultaneously, appoint powerful 'Product Integrators' (temporary roles) to cut through the inevitable red tape and ensure cross-functional delivery speed. This provides a temporary fix to meet the launch deadline while the long-term structure is validated.",
        expertRationale: "This is a pragmatic way to manage the CEO's expectation while ensuring the strategic goal (launch speed) is met. The risk is that temporary structures tend to become permanent and the Integrators become internal political power brokers, complicating the eventual transition to the 'right' long-term structure.",
        expertRanking: 2
      }
    ],
    overall: "A is the strategically superior choice. A strategy to launch multiple products requires a structure built for speed and focus, which the 'Product Hub' provides. The matrix (B) is a political quagmire, and the temporary fix (C) creates future friction. Structure must always follow the core strategic requirement.",
    takeAway: "Organisational structure is not a template; it is a tool that must be custom-built to support the primary strategic constraint, which is often speed or focus."
  },

  // Scenario 19: Exit Strategy (Ending the Engagement with Integrity)
  {
    id: 19, 
    moduleId: 3, 
    title: "Leaving the Nest",
    prompt: "Your current transformation engagement is winding down ahead of schedule. Your firm has identified a lucrative Phase 2 opportunity (a system upgrade) that would keep the team on-site for another six months. However, your honest assessment is that the client's internal team is perfectly capable of handling the upgrade, and a new contract would be an unnecessary expense for them.",
    responses: [
      {
        id: "A",
        title: "The Pipeline Protector",
        text: "Write the proposal for the Phase 2 system upgrade, emphasising the technical complexity and risk of the client doing it themselves. Frame the firm's involvement as 'necessary risk mitigation' and 'knowledge transfer acceleration,' securing the six-month extension for the team.",
        expertRationale: "This prioritises firm revenue over client best interest. While it is common practice, it damages the client's long-term trust and is strategically short-sighted. The client will eventually realise they paid for something they could have done, undermining future, more legitimate engagements.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Handover & Endorsement",
        text: "Recommend that the client handle the system upgrade themselves. Offer a full, detailed handover document, a one-day training workshop, and a commitment to one free 'emergency' call for advice within the next month. This builds massive trust and positions your firm as a selfless long-term advisor who is willing to protect their budget.",
        expertRationale: "This is the gold standard for strategic client management. By deliberately sacrificing short-term revenue, you secure long-term trust and a reputation for integrity, which is priceless in professional services. The client will be more likely to call you for their next *truly* complex, high-value problem.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Advisory Oversight",
        text: "Propose a 'light-touch' advisory engagement instead of a full upgrade implementation. Offer to provide remote, part-time oversight of the client's internal upgrade team for three months, charging a reduced retainer fee. This manages the firm's revenue risk while officially validating the client's internal capability.",
        expertRationale: "This is a good compromise. It keeps a small revenue stream and acts as an 'insurance policy' for the client, reducing their risk. It avoids unnecessary implementation cost while still providing strategic oversight during a critical phase, showing a commitment to a successful outcome.",
        expertRanking: 2
      }
    ],
    overall: "B is the highest-ranked because true strategic advisory means knowing when your services are not needed. Sacrificing short-term revenue to protect the client's budget and build deep trust is the best long-term strategy for pipeline health. A is short-sighted, and C is a decent compromise.",
    takeAway: "The most strategic move in consulting is the one that secures a client's long-term trust, even if it costs your firm a short-term contract."
  },

  // Scenario 20: Stakeholder Mapping (The Hidden Power Broker)
  {
    id: 20, 
    moduleId: 3, 
    title: "The Silent Partner",
    prompt: "Your current project involves streamlining the R&D process. All formal stakeholders (VP of R&D, CFO) are supportive. However, you notice that a specific, low-ranking Research Fellow named Dr. Chen, who has been with the company for 30 years, quietly influences every decision, often through veiled historical anecdotes. You realise ignoring Dr. Chen's tacit approval is blocking progress.",
    responses: [
      {
        id: "A",
        title: "Ignore the Anecdotes",
        text: "Focus strictly on the formal stakeholders and the project plan, politely but firmly redirecting the conversation back to the data whenever Dr. Chen offers an anecdote. The formal stakeholders have the authority, and pandering to a low-ranking individual wastes time and undermines the project's formal governance structure.",
        expertRationale: "This is technically correct but strategically naive. In long-standing companies, political capital often outweighs the org chart. Ignoring the silent partner risks a slow, painful sabotage. You fail to recognise the true levers of influence and decision-making.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Formalise the Role",
        text: "Ask the VP of R&D to formally appoint Dr. Chen as a 'Senior Technical Advisor' to the project. This makes his influence visible and accountable, but it risks validating his power and giving him a formal veto. You are solving a political problem with a structural solution, which may overcomplicate the project.",
        expertRationale: "This attempts to manage the risk by formalising the influence. It’s better than ignoring him, but it increases bureaucracy. If Dr. Chen is indeed a power broker, giving him a formal title may empower him to resist, making the politics worse.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The One-on-One Diplomacy",
        text: "Schedule a private, informal one-on-one with Dr. Chen. Ask him to review the project's technical blueprints, presenting it as a request for 'wisdom and historical context' that the team is missing. Use his input to co-design a small, non-essential feature he can take credit for. This converts the silent opposition into a silent ally.",
        expertRationale: "This is the most strategic approach. It respects the 'unwritten rule' that long-term political capital is earned through respect, not authority. By giving Dr. Chen recognition and ownership over a small, visible part of the solution, you neutralise his resistance and gain his tacit approval, which is the key to unlocking the R&D team's cooperation.",
        expertRanking: 1
      }
    ],
    overall: "C is the highest-ranked. Strategic acumen requires correctly mapping the true influence network, not just the org chart. Dr. Chen is the gatekeeper of history and culture. A is naive, and B is politically clumsy. C uses subtle, human interaction to solve a strategic political blockage.",
    takeAway: "Never underestimate the power of the silent partner; the most powerful stakeholder is often the one whose title doesn't match their influence."
  },

  // Scenario 21: Business Model Innovation (Challenging the Core)
  {
    id: 21, 
    moduleId: 3, 
    title: "Sacred Cow Slaughter",
    prompt: "Your client, a magazine publisher, is struggling to transition to digital. Your analysis shows that their highest-margin product, the weekly print edition, is cannibalising their digital subscription growth because the print-first staff actively resists posting content online. Shutting down the print edition is the only way to save the digital future, but the CEO views the print edition as their legacy.",
    responses: [
      {
        id: "A",
        title: "Quantify the Cannibalisation",
        text: "Present a clear, data-driven financial model to the CEO showing that the print edition's short-term margin is costing the company 3x that amount in lost long-term digital LTV (Lifetime Value). Force a 'Two Paths' decision: immediate print shutdown for digital salvation, or slow, certain decline. Frame it as a necessary 'Sacred Cow Slaughter' to protect the company's future.",
        expertRationale: "This is the essential, brutal conversation that must happen. Strategic clarity means identifying the fundamental trade-off (short-term margin vs. long-term survival). By quantifying the lost LTV, you depersonalise the decision and show the CFO why the print legacy is financially catastrophic. This is true strategic leadership.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Internal Competition",
        text: "Propose creating a legally separate, internal 'Digital Startup' entity within the company with its own P&L and its own editorial mandate, explicitly mandated to ruthlessly out-compete the print division. This allows the CEO to keep the print edition while allowing the digital future to grow unencumbered by internal politics.",
        expertRationale: "This is a good strategy for avoiding political conflict (the CEO gets to keep the print edition). However, it doubles complexity and increases overhead. Internal competition is often distracting and wasteful, and the digital entity will still have to fight for resources, delaying the necessary, unified decision.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Gradual Fade",
        text: "Recommend a gradual, phased reduction of the print edition: first, reducing the weekly edition to monthly, then reducing the newsstand coverage, while redirecting all savings to the digital team. This allows the CEO's 'legacy' to slowly fade without a politically difficult sudden shutdown, but it prolongs the inevitable financial haemorrhage.",
        expertRationale: "This attempts to manage the CEO's emotional attachment. While politically softer, gradual change is often strategically insufficient against a fast-moving competitive threat. The 'bleed' continues, and the digital team fails to get the immediate, full-throated commitment it needs for breakout growth.",
        expertRanking: 2
      }
    ],
    overall: "A is the only responsible strategic move. When a current product actively kills the future business model, the tactical solution is to cut it cleanly. B and C attempt to manage the politics but fail to address the core financial and competitive reality. Strategic decisions are often painful, and the advisor must deliver that pain with data.",
    takeAway: "If you cannot quantify how your current business is killing your future one, you will never get permission to change the fundamental business model."
  },

  // Scenario 22: Scaling Strategy (Beyond the Pilot)
  {
    id: 22, 
    moduleId: 3, 
    title: "Pilot Purgatory",
    prompt: "You ran a successful pilot program for a new service line in one region, proving the business case. Now the client wants to scale it nationwide. However, the pilot used highly specialised, expensive internal experts who cannot be cloned across 10 new regions. The client is pushing for a quick, low-cost national launch using only current, untrained staff.",
    responses: [
      {
        id: "A",
        title: "The Quick Launch",
        text: "Proceed with the low-cost national launch using current staff, as requested, to meet the CEO's growth mandate. Create a central 'Pilot Expert Support Hub' staffed by the original experts to provide remote coaching and troubleshooting. This prioritises speed but risks a massive drop in service quality and a national failure.",
        expertRationale: "This prioritises speed and executive demand over quality and execution risk. The core strategic mistake is confusing 'pilot success' with 'scalability.' The national launch will likely fail due to the hidden bottleneck (the lack of skilled staff), associating the original successful pilot with failure.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Capability Barrier",
        text: "Frame the specialised experts as the 'bottleneck' and the 'strategic asset.' Insist on a two-phase national rollout. Phase 1 must be dedicated to creating a 'Training Academy' and certification program to industrialise the expertise. Phase 2 then allows for a measured, region-by-region launch, ensuring quality is maintained and scaling is sustainable.",
        expertRationale: "This is the correct strategic approach to scaling. True scaling is not about copy-pasting; it's about industrialising the unique capability (the expertise). By forcing a training academy, you solve the structural problem and ensure the success of the national launch, sacrificing only short-term speed for long-term quality and consistency.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Technology Over Talent",
        text: "Propose immediately investing the necessary funds to automate 80 percent of the specialised experts' tasks via a new software tool. This removes the human bottleneck by embedding the expert knowledge into the technology. The national rollout can then proceed with general staff using the new tool, but it significantly increases the short-term CapEx budget.",
        expertRationale: "This is a good, capital-intensive strategic solution. It correctly identifies the bottleneck (specialised talent) and solves it structurally (automation). The downside is the massive budget increase and the technology risk. It's defensible but B is a cheaper, lower-risk solution that solves the same problem through better process.",
        expertRanking: 2
      }
    ],
    overall: "B is the highest-ranked because scaling success depends on replicating unique capabilities cheaply and consistently. The 'Training Academy' industrialises the expertise. A is reckless, and C, while structurally sound, is a costly and high-risk technology investment. B provides a sustainable, talent-based path to national scale.",
    takeAway: "A successful pilot is not a scalable strategy; a strategy is only scalable when the key bottleneck (usually talent or data) is industrialised."
  },

  // Scenario 23: Mergers & Acquisitions (Integration Planning)
  {
    id: 23, 
    moduleId: 3, 
    title: "The Cultural Clash",
    prompt: "Your client is acquiring a much smaller, highly innovative firm. The deal is motivated by the target's unique, risk-taking culture and talent. The Head of HR is planning a standard 6-month integration that will quickly move the acquired staff onto the parent company's slow, bureaucratic systems, which will inevitably cause a talent exodus.",
    responses: [
      {
        id: "A",
        title: "The Standard Integration",
        text: "Support the Head of HR's 6-month standard integration plan. Emphasise that cultural assimilation is necessary to maintain governance and compliance standards. Document the 'talent flight' risk in the risk register and propose a retention bonus scheme to mitigate the expected churn.",
        expertRationale: "This is a compliance-first, strategy-second move. It sacrifices the very asset being acquired (the culture and talent) for the sake of internal process. Throwing money at a retention problem caused by cultural misalignment rarely works long-term. This is a common failure point for acquisitions.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Cultural Firewall",
        text: "Advise the client to establish a 3-year 'cultural firewall.' Mandate that the acquired firm remain physically separate, retain its existing systems, and report as an independent subsidiary. Frame this as a 'Protect the Value' strategy, ensuring the innovative culture is preserved until its unique product is successfully mainstreamed into the parent company's portfolio.",
        expertRationale: "This is a sophisticated move that correctly prioritises the strategic asset (culture and innovation) over the tactical goal (system consolidation). The firewall is the best way to prevent the bureaucratic parent from killing the golden goose. It requires discipline but guarantees the deal's strategic intent is realised.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Talent Integration",
        text: "Immediately intervene with the Head of HR and the CEO. Recommend creating a new, dedicated 'Integration Leadership Team' comprising 50 percent leaders from the parent and 50 percent from the acquired firm. Task this team with selecting the best systems and processes from both companies, allowing the acquired firm to feel valued and ensuring they keep the best of their agile methods.",
        expertRationale: "This is the most powerful move for sustainable strategic integration. It addresses the emotional and political dynamics head-on. By creating shared ownership and decision-making, you solve the 'us vs. them' problem and ensure the innovative culture is not killed but rather becomes a change agent for the parent company. This is complex but high-reward.",
        expertRanking: 1
      }
    ],
    overall: "C is the most strategic choice because M&A success is determined by cultural integration, not financial consolidation. Creating a joint leadership team ensures the strategic asset (innovation) is protected and leveraged across the entire company. A is a recipe for failure, and B is a successful strategy but only for short-term preservation.",
    takeAway: "The best integration strategy for an acquisition of talent is not about consolidating systems; it is about merging the leadership and empowering the acquired culture to change the acquirer."
  },

  // Scenario 24: Crisis Management (Proactive vs. Reactive)
  {
    id: 24, 
    moduleId: 3, 
    title: "Slow-Burn Reputation",
    prompt: "You are working on operational efficiency for an e-commerce client. You discover a persistent, low-level issue: 5 percent of customer orders are delivered late, leading to a steady stream of negative social media posts. The operations head says it's a tolerable cost of doing business. You know this slow, persistent negativity will eventually cause a critical mass brand collapse.",
    responses: [
      {
        id: "A",
        title: "Quantify the Brand Erosion",
        text: "Create a model showing the 'Lifetime Value (LTV) Cost of Negativity.' Show that 5 percent late deliveries result in a 20 percent drop in LTV among that cohort, and that this loss, compounded over five years, dwarfs the current cost of fixing the operations problem. Force the Operations Head and CMO to accept a mandate to fix the 5 percent immediately.",
        expertRationale: "This is a brilliant strategic move. It converts an operational annoyance (5 percent late) into a strategic imperative (brand survival) using financial modelling. By linking operations to LTV and CMO concerns, you elevate the issue beyond the Operations Head's 'tolerable cost' view and force the necessary, full-throated solution.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Compensation Fix",
        text: "Propose a quick compensation fix: immediately give a 20 percent discount and a personalized apology to every customer with a late order. This attempts to quell the social media negativity and keeps the Operations Head happy by avoiding a complex fix, but it's an expensive, recurring cost with no guarantee of long-term loyalty.",
        expertRationale: "This is a tactical, money-first solution that treats the symptom (customer complaint) not the cause (late delivery). It is a failure of operational strategy because it institutionalises a costly mitigation instead of fixing the broken process, setting up a perpetually expensive, inefficient system.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Social Media Fire Fighting",
        text: "Recommend hiring a specialist social media monitoring firm to immediately identify and respond to all negative posts, ensuring rapid, personalised, public apologies. This addresses the visibility problem without changing the operations, buying time for a longer-term operational fix to be planned for the next quarter.",
        expertRationale: "This is a PR-driven solution. While it mitigates the public visibility, it still allows the strategic failure (the operation) to continue. It is an expensive band-aid that masks the true damage. A strategic advisor pushes for the fix, not the cover-up.",
        expertRanking: 2
      }
    ],
    overall: "A is the only choice that demonstrates true strategic acumen. It correctly identifies that an operational flaw, if unaddressed, becomes a brand crisis. By quantifying the LTV cost, you elevate the conversation from an operational annoyance to a financial necessity. B and C are short-sighted and expensive tactical fixes.",
    takeAway: "Never accept a 'tolerable cost' for failure; minor operational friction, if persistent, will eventually compound into a major strategic brand collapse."
  },

  // Scenario 25: Innovation Portfolio (Balancing Risk)
  {
    id: 25, 
    moduleId: 3, 
    title: "The Portfolio Balance",
    prompt: "Your client's innovation portfolio is currently 80 percent focused on 'Horizon 1' (incremental improvements to core products) and 20 percent on 'Horizon 3' (blue sky, revolutionary research). The CEO, wanting a big win, is pushing to double the Horizon 3 spend. You know this is too risky; a failure would bankrupt the entire R&D department and leave the core business undefended.",
    responses: [
      {
        id: "A",
        title: "The CEO's Bet",
        text: "Support the CEO's move to double the Horizon 3 investment, demonstrating enthusiasm for the 'big bet.' Propose a 'kill switch' governance mechanism that automatically reduces the Horizon 3 spend if the core business revenue drops below a critical threshold. This protects the core but accepts the high risk of a total Horizon 3 loss.",
        expertRationale: "This is politically compliant but strategically irresponsible. Strategy requires a balanced risk profile. Doubling the riskiest bet exposes the entire firm to unacceptable volatility. The 'kill switch' is a weak, reactive measure that allows damage to occur before intervention.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Forcing the Horizon 2",
        text: "Present a 'Balanced Portfolio' model: recommend moving 20 percent of the Horizon 1 (incremental) budget into a new 'Horizon 2' (adjacent market expansion/disruptive models). This shows a commitment to growth but de-risks the innovation portfolio. Frame this as the 'bridge' that will fund the CEO's ultimate Horizon 3 vision, but only once H2 is profitable.",
        expertRationale: "This is the classic strategic balancing move. Horizon 2 is the essential bridge between the cash cow and the blue sky. It allows the firm to take measured, high-ROI risks in adjacent areas, which then generate the cash and confidence needed for the larger Horizon 3 bets. It manages the CEO's desire for growth in a fiscally responsible way.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Risk Transfer",
        text: "Agree to the double Horizon 3 spend, but propose partnering with a corporate VC firm to co-fund the high-risk projects. This allows the client to pursue the 'big bet' while only shouldering 50 percent of the financial risk. The downside is giving up half the potential reward and losing full strategic control over the most innovative work.",
        expertRationale: "This is a clever financial strategy that manages the downside risk. However, strategic control is paramount in innovation. Outsourcing or diluting the ownership of the most revolutionary ideas can lead to misalignment and a loss of proprietary knowledge. It's a financial hedge, but a strategic surrender of control.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic innovation is about balancing short-term gain (H1) with future potential (H3) via a crucial bridge (H2). The advisor's job is to enforce discipline and diversification. A is a reckless gamble, and C is a strategic surrender of control.",
    takeAway: "Innovation is a three-horizon portfolio; the strategic skill is building the Horizon 2 bridge that safely carries the core business toward the future."
  },

  // Scenario 26: Brand Positioning (The Art of the Niche)
  {
    id: 26, 
    moduleId: 3, 
    title: "The Blurry Brand",
    prompt: "A struggling regional law firm wants your help to compete nationally. They currently offer every legal service available (Divorce, Corporate, IP, Tax) and are perceived as mediocre in all of them. The Managing Partner believes 'more services equals more clients.' You know the only path to national relevance is ruthless specialisation and saying 'no' to 80 percent of their current offering.",
    responses: [
      {
        id: "A",
        title: "Aggressive Expansion",
        text: "Focus on optimising the internal efficiency of all current service lines, using technology to drive down cost and improve speed. This allows the firm to undercut national competitors on price and service time, thereby making 'full-service' a competitive advantage, despite the perceived lack of quality in any one area.",
        expertRationale: "This is an operational strategy that avoids the difficult choice of focus. Competing on price in a high-trust, high-skill industry like law is a recipe for a race to the bottom. It fails to address the core strategic problem: the lack of a compelling, high-value brand proposition.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Gradual Cut",
        text: "Propose a gradual, 12-month phase-out of the four lowest-margin service lines, dedicating the saved capital to marketing and recruiting in the two highest-potential areas (e.g., IP and Corporate). This softens the political blow but prolongs the 'blurry brand' perception, delaying the critical market recognition needed for national growth.",
        expertRationale: "This attempts to manage internal political resistance but fails to achieve the necessary speed and clarity. Gradual change in branding is ineffective. To move from mediocre to national relevance requires a bold, decisive, and immediate declaration of a new, narrow niche.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Ruthless Specialisation",
        text: "Present a 'One Brand, One Niche' strategy. Recommend immediately cutting the low-potential service lines and declaring a national focus on a single, high-growth, high-margin niche (e.g., FinTech regulation). Frame the 'No' to existing clients as the cost of becoming 'The Best' in a specific area, thereby creating the necessary market gravity for national success.",
        expertRationale: "This is the necessary strategic move. Strategy is about defining what you are *not*. The only way for a regional firm to compete nationally is through ruthless specialisation that creates a dominant brand position in a defensible niche. This requires the courage to walk away from existing revenue, which is the hallmark of strategic choice.",
        expertRanking: 1
      }
    ],
    overall: "C is the most strategically astute choice. A firm cannot be 'all things to all people' and achieve national relevance. A ignores the fundamental brand problem, and B is too slow. C forces the necessary, painful choice of specialisation to create a defensible and nationally viable market position.",
    takeAway: "Strategic focus is not about doing more things well; it is about having the courage to stop doing 80 percent of what you currently do."
  },

  // Scenario 27: Capital Expenditure (Justifying the Big Bet)
  {
    id: 27, 
    moduleId: 3, 
    title: "The Emotional Investment",
    prompt: "The client’s CEO wants to spend 80 percent of the annual CapEx budget on a single, visible manufacturing facility upgrade, believing it will inspire the workforce. Your analysis shows a much higher ROI would come from spending 20 percent on the visible upgrade and 60 percent on replacing the obsolete back-end IT system, which is causing critical operational errors. The IT project is invisible and uninspiring.",
    responses: [
      {
        id: "A",
        title: "Dual-ROI Justification",
        text: "Present the two investment options (Facility vs. IT) using a 'Risk-Adjusted Return' model. Show that the IT investment has a 3x higher financial ROI and a 5x lower operational risk. Propose funding the visible facility upgrade with a small portion of the 3x ROI achieved from the IT upgrade within 18 months. This links the emotional goal to the rational one.",
        expertRationale: "This is the necessary strategic move. It uses data and financial prudence to challenge the CEO's emotionally driven decision. By proving that the IT upgrade is the better financial bet, you force the conversation back to value creation. The promise of funding the facility later manages the political and emotional requirement without compromising the P&L.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The CEO's Play",
        text: "Support the CEO's 80 percent spend on the facility upgrade. Document the IT system risk as a 'Critical Operational Liability' in the risk register and propose a separate, low-cost Phase 2 engagement to secure emergency funding for the IT upgrade next quarter. This avoids political friction now.",
        expertRationale: "This is a compliance move that is strategically negligent. Allowing the client to make a high-cost, low-return investment that ignores a critical operational risk is a failure of advisory responsibility. The risk will compound, and the client will suffer the financial consequences.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Combined Story",
        text: "Propose the full IT upgrade (60 percent) but reframe the remaining 40 percent (instead of 20 percent) of CapEx to be spent on a massive 'workplace digital experience' overhaul. This is a visible project that ties the new back-end IT system to a tangible, inspiring benefit for the employees, satisfying the CEO's desire for an inspiring investment.",
        expertRationale: "This is a clever political hedge. It ensures the necessary IT upgrade happens while addressing the CEO's emotional need for an inspiring project. The downside is that it overspends by 20 percent to satisfy a political goal, sacrificing the opportunity for other, potentially higher-ROI investments.",
        expertRanking: 2
      }
    ],
    overall: "A is the winning move. Strategic CapEx decisions must be driven by risk-adjusted financial return. The advisor's job is to introduce rationality and a clear path for the CEO to achieve their emotional goal without compromising the firm's balance sheet. B is irresponsible, and C is too costly.",
    takeAway: "To move a capital decision from emotional to rational, always show the difference in risk-adjusted ROI between the pet project and the necessary foundational work."
  },

  // Scenario 28: Digital Transformation (Avoiding the Tech Trap)
  {
    id: 28, 
    moduleId: 3, 
    title: "Shiny New Tool Syndrome",
    prompt: "Your client, a government agency, is obsessed with 'Blockchain' and wants to implement a full Blockchain ledger for all public records, simply because it's the latest technology trend. Your analysis shows that a simple, centralised database upgrade would cost 1/10th the price, be faster, and satisfy 99 percent of their functional requirements. The Head of Digital insists on the Blockchain.",
    responses: [
      {
        id: "A",
        title: "The Tech Concession",
        text: "Agree to the Blockchain implementation but recommend a small-scale, internal-facing pilot project first. This delays the full-scale commitment while allowing the Head of Digital to claim a 'win' on adopting the new tech. The pilot can then be used to collect data on the technology's inefficiency to build a case against a full rollout later.",
        expertRationale: "This is a passive strategy that wastes time and money on a technology that is known to be unnecessary. It avoids political conflict but sacrifices resources for a likely failure. Strategic advice requires challenging the choice of technology when it is clearly misaligned with the business need.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Reframing the Value",
        text: "Challenge the Head of Digital by asking, 'What is the specific, quantifiable risk of a centralised database that only a 10x more expensive Blockchain can solve?' Show a side-by-side comparison of the two options, focusing on total cost of ownership and time to value. Insist that 'cool' technology is not a strategic advantage unless it solves a critical, unique problem that the simpler solution cannot.",
        expertRationale: "This is the essential strategic move: challenging the technology choice itself. Strategic acumen means avoiding the 'tech trap' and ensuring technology serves the business case, not the other way around. By forcing a quantification of the unique value, you expose the lack of rationale behind the choice and create space for the cheaper, better option.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Hybrid Model",
        text: "Propose a 'hybrid' model: use the simple centralised database for the vast majority of records, and only use a small, private Blockchain layer for the most sensitive, immutable records (e.g., land titles). This satisfies the Head of Digital's desire for the new technology while keeping the majority of the operations cost-effective and fast.",
        expertRationale: "This is a clever compromise that manages the political and technical demands. It allows the Head of Digital to save face and claim the new tech, while the core business remains efficient. It is a good solution for managing political egos while delivering 80 percent of the required efficiency. However, it still adds unnecessary complexity and cost.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic advisors must challenge technology fads. The question is never 'Can we use this technology?' but 'Does this technology solve a critical, unique problem better than a simpler alternative?' A is wasteful, and C introduces unnecessary complexity.",
    takeAway: "A technology decision is only strategic if it solves a problem that simpler, cheaper technology cannot, not because it is the latest trend."
  },

  // Scenario 29: Talent Strategy (The Missing Link)
  {
    id: 29, 
    moduleId: 3, 
    title: "The Missing Skillset",
    prompt: "You’ve designed a new subscription-based service for a major software company. The design is excellent, but the client’s existing sales force is only experienced in large, one-time enterprise deals. They lack the high-volume, low-friction, recurring sales skills needed to make the subscription model profitable. The VP of Sales is convinced their team can 'learn on the job.'",
    responses: [
      {
        id: "A",
        title: "Trust the Team",
        text: "Trust the VP of Sales' confidence. Launch the subscription service with the existing team, providing a one-week training on subscription economics and customer lifecycle management. Propose a follow-up engagement in 12 months to address any performance gaps with a targeted training or recruitment plan.",
        expertRationale: "This is a failure of due diligence. Strategy must be built on realistic execution capabilities. Subscription sales is a fundamentally different business model, requiring specific skills. Launching without addressing the talent gap guarantees a slow, painful failure that will be blamed on the subscription model itself.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Outsource the Problem",
        text: "Recommend outsourcing the entire subscription sales function to an external telesales partner for the first two years. This immediately provides the needed skill set for a successful launch, giving the client's internal sales team the necessary time to hire, train, and build the required capability without risking the product's viability.",
        expertRationale: "This is a good tactical fix. It de-risks the launch and ensures the product achieves early traction. The downside is that it creates a dependency on a third party for a critical strategic function (customer acquisition), delaying the client's necessary internal capability build. It is a time-buy, not a structural solution.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Dedicated Task Force",
        text: "Challenge the VP of Sales. Insist on a three-pronged approach: 1) Immediately recruit a small, elite 'Subscription Sales Task Force' (5 people) from outside. 2) Assign them the first 6 months of sales targets. 3) Mandate that the existing enterprise sales team rotate through the task force for hands-on mentorship. This injects the necessary skill and builds internal capability simultaneously.",
        expertRationale: "This is the essential strategic response. It correctly identifies the talent gap as the highest execution risk. By injecting external expertise, you guarantee a minimum level of success, and by mandating rotation, you industrialise the learning and build the necessary long-term internal capability. This is a high-impact, focused solution.",
        expertRanking: 1
      }
    ],
    overall: "C is the best strategic choice. The success of a new business model is often constrained by the capabilities of the team implementing it. Injecting new talent and using them as a training ground is the fastest way to bridge a critical skill gap. A is reckless, and B avoids the necessary internal transformation.",
    takeAway: "Never compromise on the core capability needed to run a new business model; if the internal team doesn't have the skill, the strategic move is to buy it and then build it."
  },

  // Scenario 30: Supply Chain Resilience (Trading Efficiency for Safety)
  {
    id: 30, 
    moduleId: 3, 
    title: "The Single Source Risk",
    prompt: "Your client's procurement strategy is currently based on 'single-sourcing' from the cheapest, most efficient global vendor, achieving 15 percent cost savings. However, this exposes them to a catastrophic single point of failure in case of a political or environmental shock. The CFO refuses to dual-source, stating the 15 percent cost saving is a non-negotiable strategic advantage.",
    responses: [
      {
        id: "A",
        title: "The Cost of Catastrophe",
        text: "Quantify the P&L impact of a 90-day supply chain disruption (e.g., 'A 90-day shutdown means $500M in lost revenue and a stock price crash'). Show that the 15 percent cost saving is a drop in the bucket compared to the potential loss. Propose a dual-sourcing model that accepts a maximum 5 percent cost increase, framing it as 'Catastrophe Insurance' with a clear ROI calculation.",
        expertRationale: "This is the only viable strategic move. It uses data to challenge a tactical decision (cheapest vendor) that introduces catastrophic strategic risk. By quantifying the downside, you convert the cost of dual-sourcing from an expense into a necessary insurance premium, forcing the CFO to acknowledge the hidden risk on their balance sheet.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Insurance Policy",
        text: "Recommend purchasing a high-limit supply chain risk insurance policy instead of dual-sourcing. This keeps the 15 percent cost saving intact while providing a financial buffer against a supply shock. It's a financial hedge against an operational failure, but it does nothing to guarantee the availability of the product for customers.",
        expertRationale: "This is a clever financial fix. However, strategic resilience is about maintaining operational continuity, not just financial compensation. Insurance can cover lost profit but cannot cover lost market share, brand damage, or customer loyalty. It avoids the core operational fix.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Dual-Source Pilot",
        text: "Propose a pilot program where a smaller, non-essential product line is dual-sourced for six months, accepting the higher cost. Use the pilot to find a viable secondary vendor whose cost is only 7 percent higher, providing a proof point that a lower-cost, dual-sourcing model is achievable for the entire supply chain.",
        expertRationale: "This is a good, incremental change management strategy that builds trust through data. It avoids the immediate political fight. The downside is that it delays the necessary full-scale risk mitigation for at least six months, leaving the core business exposed during that time. It's too slow for a catastrophic risk.",
        expertRanking: 2
      }
    ],
    overall: "A is the only correct answer. Strategic planning must address the highest-impact, lowest-probability risks. Allowing an existential risk (single point of failure) for a tactical cost saving (15 percent) is negligence. A forces the CFO to make a rational risk-mitigation decision.",
    takeAway: "The true cost of a single-source strategy is the existential risk, not the incremental price increase; you must price the cost of the catastrophe."
  },

  // Scenario 31: Customer Experience (Beyond Functionality)
  {
    id: 31, 
    moduleId: 3, 
    title: "The Joyless Platform",
    prompt: "Your client has built a new customer-facing platform that is technically functional and highly efficient. It satisfies all specified requirements. However, internal testing shows the user experience is cold, difficult, and 'joyless.' The Head of Product says the budget is exhausted, and 'functional is good enough.' You know this experience will lead to high churn and negative word-of-mouth, capping future growth.",
    responses: [
      {
        id: "A",
        title: "Launch and Fix Later",
        text: "Launch the platform on time, as scheduled, to meet the deadline and prove functionality. Immediately staff a 'Phase 2: UX Overhaul' team to address the joylessness, funded by a small, new budget request. This secures the initial launch success but exposes the client to a period of high churn and reputational risk.",
        expertRationale: "This prioritises the deadline over the strategic asset (customer experience). A bad first impression is almost impossible to fix. Launching a 'joyless' platform guarantees a negative reaction that will taint the entire digital offering. This is a tactical win for the project manager, but a strategic loss for the company.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Churn Cost",
        text: "Quantify the expected 12-month 'Cost of Churn' and 'Negative Word-of-Mouth' (e.g., $10M loss) resulting from the poor experience. Present this to the Head of Product and CMO, forcing them to accept a 30-day delay and a 10 percent budget increase to fix the three most 'joyless' moments in the journey. Frame the delay as a 'Mandatory Churn Prevention Investment'.",
        expertRationale: "This is the correct strategic intervention. Customer experience is a strategic asset that must be protected. By quantifying the financial impact of the poor experience, you elevate the issue beyond subjective aesthetics to a critical P&L risk. The 30-day delay is a necessary sacrifice to ensure long-term retention.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Focus on High-Value Users",
        text: "Segment the user base and focus the limited remaining budget on fixing the experience for the top 20 percent of high-value, high-potential users. Launch the platform to the remaining 80 percent with the current 'joyless' experience, planning to address them only after the high-value segment is secured and satisfied.",
        expertRationale: "This is a good, focused approach that manages the constraint (budget). Prioritising the most valuable customers is strategically sound. However, the 'joyless' experience for the majority will still generate negative social feedback, which will contaminate the entire brand and make the high-value launch less impactful.",
        expertRanking: 2
      }
    ],
    overall: "B is the highest-ranked because strategic growth is capped by customer experience. An efficient, functional but 'joyless' product fails to create loyalty. A sacrifices long-term value for a deadline, and C fails to address the overall brand risk. B uses financial models to force the necessary investment in the customer relationship.",
    takeAway: "Customer experience is not a feature; it is a strategic function whose failure can be quantified as a massive, unavoidable churn cost."
  },

  // Scenario 32: Core Competency (Defining What Matters)
  {
    id: 32, 
    moduleId: 3, 
    title: "The Non-Core Distraction",
    prompt: "A global logistics firm, known for its rapid package delivery, has invested heavily in an internal software tool for inventory management, which is an area far from their core competence. The CEO is pushing to sell this tool commercially to other companies as a new revenue stream. This is distracting the best internal talent and diverting CapEx from core logistics R&D.",
    responses: [
      {
        id: "A",
        title: "Sell the Tool",
        text: "Support the CEO's move to commercialise the internal tool. Recommend setting up a separate, ring-fenced subsidiary with its own P&L to manage the product. This satisfies the CEO's entrepreneurial ambition and isolates the distraction, but the best talent is still diverted, and a new non-core business is created.",
        expertRationale: "This is a good political compromise that attempts to contain the distraction. However, it still formalises a non-core function, competing for capital and talent with the core business. Strategic focus is about the disciplined *elimination* of non-core activities, not their containment.",
        expertRanking: 2
      },
      {
        id: "B",
        title: "Focus on the Core",
        text: "Use the internal tool's true financial performance data to show the CEO its low-margin potential. Propose an immediate 'Sale or Spin-Off' of the tool to a specialised software vendor. Present a case to redirect all saved CapEx and the top talent back to high-impact logistics R&D, framing this as a necessary 'refocus' to reassert the firm's core market dominance.",
        expertRationale: "This is the correct strategic move. Strategy demands ruthless focus on core competence. The internal tool is an expensive distraction. By forcing a sale or spin-off, you re-align resources to where the client genuinely creates value (logistics), which is the only way to win in the long term. This is a disciplined 'no' to a distracting opportunity.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Internal Sell-Off",
        text: "Recommend keeping the tool but offering it to the workforce at cost as a way to improve internal operations and employee goodwill. This kills the commercialisation idea but maintains the tool, ensuring the talented engineers who built it stay engaged. However, it still consumes maintenance resources that could be spent on core logistics R&D.",
        expertRationale: "This is a soft, internal-facing political solution. It avoids the conflict of a sale but fails to address the core problem of resource misallocation. The tool is an overhead that distracts from the company's real mission. Strategic capital must be deployed against the highest-value core problems, not retained for employee goodwill.",
        expertRanking: 3
      }
    ],
    overall: "B is the clear winner. Strategic focus requires the elimination of non-core activities, no matter how clever the internal asset may be. A formalised distraction is still a distraction. A is a compromise, and C is a soft deferral of the necessary hard choice. B forces a clean break and a return to the core mission.",
    takeAway: "A new revenue stream is a strategic liability if it diverts resources and talent from the mission that made you successful in the first place."
  },

  // Scenario 33: Global Expansion (Market Entry Strategy)
  {
    id: 33, 
    moduleId: 3, 
    title: "The New Continent",
    prompt: "A US-based software client wants to expand into the European market. The VP of Sales is pushing for a simultaneous launch in the three biggest markets (UK, Germany, France) to maximise coverage and show aggressive growth. Your research shows that the product requires significant, bespoke localisation in each market due to unique regulatory and language barriers.",
    responses: [
      {
        id: "A",
        title: "The Staged Approach",
        text: "Recommend a sequenced launch: start with the UK market first (lowest regulatory barrier), achieve profitability and product maturity, then use the profit and lessons learned to fund a simultaneous, highly localised launch in Germany and France (higher regulatory barrier). Frame this as 'Growth through De-Risking' to the VP of Sales.",
        expertRationale: "This is the mandatory strategic discipline for global expansion. A simultaneous launch into complex, disparate markets guarantees failure through resource overstretch and poor localisation. The sequenced launch concentrates force, allows for continuous learning, and ensures a solid beachhead before the full assault. This is the difference between ambition and strategy.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Simultaneous Launch",
        text: "Support the VP of Sales' simultaneous launch. Propose a large external contractor team to handle the localisation and regulatory compliance in all three markets to mitigate the risk. This meets the aggressive growth goal but introduces massive management overhead and a reliance on expensive external resources for a core, repeatable strategic function.",
        expertRationale: "This is a high-risk compliance play. Throwing money and people at a complex strategic problem rarely works. The cultural and regulatory nuance of market entry cannot be outsourced or rushed. The likelihood of a high-cost failure due to three simultaneous, poorly managed efforts is extremely high.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Acquisition Shortcut",
        text: "Propose acquiring a small, established local software firm in one of the three markets (e.g., Germany) that already has the necessary regulatory compliance and local team. Use this acquisition as the European 'Hub' to launch the US product quickly into all three markets. This reduces time-to-market but significantly increases CapEx and integration risk.",
        expertRationale: "This is a common but high-cost strategy. While it accelerates time-to-market, the integration risk of acquiring a firm simply for its compliance and local knowledge often leads to culture clash and a loss of focus. It's a faster path, but often a bumpier, more expensive one than organic, sequenced growth.",
        expertRanking: 2
      }
    ],
    overall: "A is the most strategically sound choice. Global expansion demands discipline and sequencing to manage resource constraints and market complexity. B is reckless, and C trades high CapEx and integration risk for speed. A builds an operational and financial foundation one market at a time.",
    takeAway: "Global expansion strategy is not about how wide you can spread; it is about how deep you can go in the first, most defensible market."
  },

  // Scenario 34: Crisis of Trust (Managing Stakeholder Perception)
  {
    id: 34, 
    moduleId: 3, 
    title: "A Loss of Faith",
    prompt: "You’ve discovered a critical error in a previous project's data analysis (done by a different team in your firm) that over-estimated the client's growth potential by 15 percent. Your current project relies on that previous, inflated number. Hiding the error protects your firm's reputation and current project timeline, but revealing it causes a massive political storm and calls your firm's entire body of work into question.",
    responses: [
      {
        id: "A",
        title: "The Cover-Up",
        text: "Proceed with your current project, quietly 're-forecasting' your future results to align with the correct data, but avoid mentioning the source of the correction. This protects the firm's reputation in the short term, but exposes you to future legal and trust issues if the client later discovers the prior firm’s mistake was concealed.",
        expertRationale: "This is an unethical and strategically short-sighted approach. The reputation of a professional services firm is its only asset. Concealing a flaw destroys long-term trust and is fundamentally irrecoverable if discovered. You are prioritising immediate political safety over the firm's long-term strategic credibility.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Own the Correction",
        text: "Immediately inform your Partner, then schedule an urgent, private meeting with the client sponsor. Present the corrected data and the error's source (the previous team). Frame it as 'corrective diligence' and a commitment to data integrity. Propose a short, complimentary re-baselining of all current projects at your firm's expense to restore confidence.",
        expertRationale: "This is the only strategic move. Integrity is non-negotiable. By immediately owning the correction, you shift the client's focus from anger at the past team to appreciation for your current team's honesty and diligence. By offering free re-baselining, you proactively mitigate the financial and strategic damage, rebuilding trust immediately.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Gradual Reveal",
        text: "Integrate the corrected data into your current project's next steering committee update, presenting it as a 'refinement based on new market intelligence' that led to a 'more conservative forecast.' Avoid mentioning the previous team's error, allowing the client to gradually absorb the bad news without an immediate crisis.",
        expertRationale: "This is politically manipulative. While it softens the blow, it is still a form of deception that damages trust. The client will eventually realise the 'refinement' was a correction of internal error, not 'new market intelligence.' This makes your entire firm look evasive and less than fully honest.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic relationships are built on trust, which is only earned through absolute integrity, especially when an error is discovered. A and C fail to appreciate the catastrophic value of lost trust. B is the full and immediate ownership of the problem, which is the fastest path back to credibility.",
    takeAway: "The only way to recover from a crisis of trust is through immediate, radical transparency and a commitment to fixing the damage at your own cost."
  },

  // Scenario 35: Metrics Design (Driving the Right Behavior)
  {
    id: 35, 
    moduleId: 3, 
    title: "Measuring the Wrong Thing",
    prompt: "Your client's sales team is currently incentivised solely on 'number of calls made' and 'new meetings scheduled.' This leads to high activity but low-quality leads and poor conversion rates. You know the strategic goal is 'high-quality customer acquisition,' but the VP of Sales insists on the current metrics because they are 'easy to track' and 'motivate the team.'",
    responses: [
      {
        id: "A",
        title: "The Current Metrics",
        text: "Keep the current 'activity' metrics (calls, meetings) as they satisfy the VP's requirement for ease of tracking and motivation. Propose a new, small 'Quality Bonus' based on a subjective review of the sales team's call transcripts. This attempts to drive quality without changing the core, easy metrics.",
        expertRationale: "This is a tactical band-aid. A small bonus for quality will be ignored when the bulk of the money is in activity volume. The core strategic problem is that the metric (calls made) does not align with the goal (quality acquisition). Strategic metrics must drive the desired outcome, not just the easiest activity.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Co-Created Metric",
        text: "Host a joint workshop with the VP of Sales and the CFO. Co-design a new 'Sales Efficiency Score' that is a weighted average of three factors: 50 percent on 'Qualified Leads Created,' 30 percent on 'Conversion Rate,' and 20 percent on 'Calls Made.' This meets the VP's need for activity tracking while primarily incentivising quality and conversion.",
        expertRationale: "This is the ideal strategic solution. It addresses the emotional need (the VP likes activity) while enforcing the strategic outcome (quality and conversion). By co-creating the metric, you ensure ownership and buy-in, making the new incentive structure a collaborative solution, not a mandate. The blended score is strategically sound.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Conversion Mandate",
        text: "Insist on eliminating 'Calls Made' as an incentivised metric. Propose replacing it entirely with 'Conversion Rate of Qualified Leads.' This simplifies the incentive structure and focuses purely on the desired outcome, but it risks demotivating the entire team who are used to being rewarded for high effort (activity).",
        expertRationale: "This is strategically correct but politically insensitive. Eliminating the 'effort' metric completely can alienate and demotivate the frontline team. A strategic change often requires a transition period where effort and outcome are blended to ease adoption and maintain morale, which is why B is better.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic metrics drive strategic behavior. The best solution acknowledges the existing culture (activity) while decisively shifting the main reward lever to the desired outcome (quality/conversion). A fails to change behavior, and C risks a morale disaster. B is smart, inclusive design.",
    takeAway: "If the strategic goal isn't in the incentive structure, it's not a goal; it's a wish that will be ignored by everyone on the payroll."
  },

  // Scenario 36: Organizational Learning (Turning Failure into Foresight)
  {
    id: 36, 
    moduleId: 3, 
    title: "The Failure Narrative",
    prompt: "A high-profile, $10M innovation project (led by the client's current VP of Innovation) has just failed spectacularly, creating huge internal shame and political heat. The CEO wants to quickly sweep the failure under the rug and focus on the next project. You know the failure holds critical, non-obvious lessons that, if ignored, will doom the next three innovation attempts.",
    responses: [
      {
        id: "A",
        title: "The Formal Post-Mortem",
        text: "Insist on a mandatory, formal 'Lessons Learned' process (Post-Mortem) with the CEO and the failed VP of Innovation. Frame it as necessary 'organizational therapy' to de-risk future projects. Publicly share the three non-obvious, systemic reasons for failure (not personal blame) to ensure the entire company learns the true strategic lessons.",
        expertRationale: "This is a courageous, necessary strategic move. The ability to learn from failure is a core strategic capability. By formalising the review, you extract the systemic lessons (e.g., governance, funding, sequencing) while protecting the individuals, turning a failure into a high-value piece of organisational know-how for future projects. This is essential for long-term strategic success.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Quiet Report",
        text: "Agree to skip the public discussion to protect the VP of Innovation. Write a confidential, 5-page 'Strategic Insights' memo detailing the lessons, delivering it only to the CEO and the Board. This protects the individuals and political climate but fails to transmit the necessary learning to the teams who will execute the next three projects.",
        expertRationale: "This prioritises political safety over organisational learning. Strategic learning must be shared with the teams who execute the work, not just the executives who fund it. Hiding the lessons in a memo ensures the same systemic mistakes are repeated by the next project team, which is strategically negligent.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Next Project Fix",
        text: "Immediately pivot all focus to designing the next project, but embed the three key lessons from the failed project directly into the new governance, funding, and team structure. This ensures the learning is acted upon without the political cost of discussing the past failure. This is a quiet, design-based correction.",
        expertRationale: "This is a pragmatic and politically savvy approach. It ensures the learning is immediately applied. The weakness is that the lack of a public discussion means the rest of the organisation still won't understand the 'why,' leading to potential resistance to the new governance and a slow, gradual erosion of the improved structure.",
        expertRanking: 2
      }
    ],
    overall: "A is the highest-ranked because strategic growth requires an institutionalized mechanism for turning failure into foresight. The advisor's job is to ensure the political cost of failure does not override the strategic value of the lesson. B is too secretive, and C is only a temporary fix.",
    takeAway: "The most expensive part of a failure is not the money lost; it is the organizational lesson that is never learned and institutionalized."
  },

  // Scenario 37: Platform Strategy (The Ecosystem vs. The Walled Garden)
  {
    id: 37, 
    moduleId: 3, 
    title: "Open or Closed Gate",
    prompt: "A software client wants to launch a new marketplace. The CEO is pushing for a 'walled garden' approach, tightly controlling all third-party access to maximise the firm's revenue from every transaction. You know that an 'open ecosystem' approach will lead to lower short-term margins but will accelerate partner adoption and create massive network effects, ultimately leading to market dominance.",
    responses: [
      {
        id: "A",
        title: "Walled Garden",
        text: "Implement the CEO's 'walled garden' approach, ensuring maximum revenue capture (high take-rate) from Day 1. Design a simple governance model that screens all third-party developers, ensuring quality control and protecting the client's internal P&L. This prioritises short-term financial returns and control.",
        expertRationale: "This is a tactical move that is strategically short-sighted. The success of a marketplace depends on network effects and partner growth. A high take-rate and a closed system will stifle third-party innovation and drive potential partners to competitor platforms, guaranteeing a failure to achieve market dominance.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Network Effects First",
        text: "Present a 'Long Game' financial model that proves the LTV of an 'open' system. Recommend a low take-rate (or zero take-rate for the first 12 months) and a simple API access model to encourage hyper-scale adoption. Frame the strategy as prioritising 'Liquidity and Network Effects' over short-term margin, securing market dominance before revenue.",
        expertRationale: "This is the necessary strategic decision for a platform. A platform's value is determined by its network effects, which are always sacrificed for high short-term margin. By forcing a low take-rate, you ensure maximum partner adoption, which locks in market leadership and creates an unassailable strategic position for future monetisation.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Hybrid Monetization",
        text: "Propose a two-tiered system: offer a simple, low-cost 'standard' API for all partners, and a high-cost, high-service 'premium' API for partners who want advanced features and higher visibility. This captures margin from high-value partners while still encouraging mass adoption through the basic free-tier offering.",
        expertRationale: "This is a clever compromise that addresses both margin and growth. It’s strategically defensible. The downside is that complexity increases, and it risks alienating smaller partners who could drive vital early network effects. It’s a good choice but sacrifices the pure, fast growth of the 'open' strategy.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Platform strategy is counterintuitive: you must sacrifice short-term margin to win market share through network effects. A is a tactical failure. C is a smart compromise but sacrifices the necessary, full-throated commitment to partner adoption. B forces the necessary strategic discipline.",
    takeAway: "In platform strategy, liquidity (adoption) is the strategic asset; margin is the financial reward that comes only after market dominance is secured."
  },

  // Scenario 38: Political Management (The CEO's Pet Project)
  {
    id: 38, 
    moduleId: 3, 
    title: "The Vanity Project",
    prompt: "The CEO's son-in-law, a new VP, has been assigned a high-priority, highly visible project that is technically unnecessary and distracts from a far more critical, necessary systems overhaul. The CEO views any criticism of the pet project as a personal attack. You need to redirect the resources without causing a political explosion.",
    responses: [
      {
        id: "A",
        title: "The Direct Call-Out",
        text: "In the next executive meeting, present a clear, side-by-side cost/benefit analysis showing the 10x higher ROI of the critical systems overhaul versus the son-in-law’s project. Force a vote to reallocate the budget. This is direct but risks a personal and political backlash from the CEO.",
        expertRationale: "This is professional suicide without the CEO's explicit support. While factually correct, a public confrontation over a pet project is interpreted as a direct political challenge. It sacrifices your long-term influence for a short-term, data-driven win. You violate the 'unwritten rule' of not embarrassing a sponsor.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Project Partnership",
        text: "Immediately volunteer your firm to provide 'Strategic Oversight' to the son-in-law's project. Use this position to quietly scale down the project's scope, focus it on a small, contained, low-resource outcome, and then assign the remaining freed-up resources (including the son-in-law's talent) to the critical systems overhaul as 'advisors' on the high-ROI work.",
        expertRationale: "This is a politically sophisticated strategy. You avoid confrontation and instead use the pet project as a trojan horse. By co-opting the project, you control its scope, reduce its resource drain, and then redirect the resources to the high-value work, satisfying the CEO’s need for the project to 'be done' while achieving the strategic outcome.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Capability Constraint",
        text: "Reframe the discussion from 'What we should do' to 'What we can do.' Present a talent inventory that shows the top engineers and architects needed for the critical systems overhaul are currently tied up in the pet project. Insist on a formal 'Talent Reassignment' to the critical work, framing it as a necessary step to protect the firm's overall strategic resource base.",
        expertRationale: "This is the best way to handle a politically charged resource decision. It shifts the blame from the project's worth to an objective constraint (talent). By forcing a talent reassignment based on objective criteria, you achieve the strategic goal (redirecting resources) without directly insulting the CEO or the son-in-law's project idea. You are protecting the strategic asset (top talent).",
        expertRanking: 1
      }
    ],
    overall: "C is the most strategic. Strategic political management means finding a rational constraint (like talent) to block an emotional decision (the pet project). A is confrontational, and B is too complex. C focuses on the highest-value asset and protects it, forcing the necessary redirection without sacrificing the advisory relationship.",
    takeAway: "To kill a political pet project, stop challenging its idea; challenge the resource constraint and redirect the best talent to the most critical work."
  },

  // Scenario 39: Risk Tolerance (The Conservative Client)
  {
    id: 39, 
    moduleId: 3, 
    title: "The Safety Blanket",
    prompt: "Your client, a highly conservative insurance firm, wants to launch a new digital service. Your competitive analysis shows a need to move extremely fast (6 months) and accept a 10 percent risk of initial service failure to secure market share. The CEO is only comfortable with a slow, 18-month launch timeline with zero risk of failure, which guarantees a loss of first-mover advantage.",
    responses: [
      {
        id: "A",
        title: "Quantify the Loss of Latency",
        text: "Present a 'Cost of Delay' financial model, showing that the 12-month delay (18 months vs. 6 months) will result in a 30 percent loss of addressable market share and $50M in lost revenue LTV. Compare this to the cost of a 10 percent failure rate ($5M in recovery). Force the CEO to choose between a guaranteed large loss and a risky small loss with high upside.",
        expertRationale: "This is the necessary strategic intervention. You cannot execute a competitive strategy with a risk-averse mindset. By quantifying the financial impact of the delay, you turn the CEO's 'safe' option into the financially 'reckless' one, forcing a rational decision to accept manageable execution risk for a massive market reward. This is the core of strategic risk communication.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Incremental De-Risk",
        text: "Agree to the 18-month timeline but propose a staged, continuous beta-release model where a small subset of friendly customers uses the product at 6 months. This provides a soft launch to gather data and de-risk the product over the full 18 months, but it still loses the critical first-mover advantage and market momentum.",
        expertRationale: "This is a good operational technique for a conservative client. It provides comfort and a mechanism for continuous improvement. However, it fails to address the competitive urgency. A 12-month delay in a fast-moving market is often strategically fatal, regardless of how well-tested the product is at the end.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Competitive Hedge",
        text: "Recommend delaying the launch to 12 months (a middle ground). Use the first 6 months to secure a high-profile, exclusive partnership with a complementary FinTech firm. This uses the saved time to create a defensible, unique market offering that a competitor cannot easily replicate, justifying the slightly slower speed with a much stronger market position.",
        expertRationale: "This is a clever strategic hedge that uses time to build a competitive barrier. It's a high-impact, focused move. The downside is that finding and integrating a perfect partner in 6 months is itself a high-risk, complex endeavor, and the 6-month delay is still a material loss of early market momentum.",
        expertRanking: 2
      }
    ],
    overall: "A is the most strategic. Strategy requires accepting risk for reward. The advisor must use financial models to prove that inaction (the safe 18-month plan) is the riskiest, most financially damaging choice. B is too slow, and C is complex. A forces the client to face the competitive reality.",
    takeAway: "The failure of a conservative strategy is always measured by the market share lost, not the technical error avoided."
  },

  // Scenario 40: External Forces (Navigating Geopolitical Shifts)
  {
    id: 40, 
    moduleId: 3, 
    title: "The Geopolitical Shockwave",
    prompt: "Your client, an industrial supply company, has 70 percent of its manufacturing based in a single country currently facing severe geopolitical instability. The CEO believes the instability is short-term and wants to continue the low-cost manufacturing strategy. You know this is a ticking time bomb and that diversifying the manufacturing base is the only way to avoid a catastrophic future shutdown.",
    responses: [
      {
        id: "A",
        title: "The Wait and See",
        text: "Agree with the CEO that the instability is likely short-term. Recommend a 'contingency budget' be approved to quickly move a small percentage of manufacturing (5 percent) to a secondary country if the situation escalates beyond 6 months. This avoids the high cost of a massive, immediate diversification and protects the CEO's current low-cost strategy.",
        expertRationale: "This is a reactive, gradualist approach that is insufficient for a catastrophic, systemic risk. Geopolitical risk is not linear. Waiting six months to move 5 percent of production guarantees a massive loss if the situation escalates quickly. It’s politically compliant but strategically reckless.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Cost of Safety",
        text: "Present a 'Black Swan' scenario where the country faces a full, two-year shutdown. Quantify the resulting stock price crash and permanent market share loss. Force a decision to immediately dual-source 50 percent of production into two politically stable countries, accepting the 10 percent increase in manufacturing costs as a mandatory 'Geopolitical Hedge' investment.",
        expertRationale: "This is the essential strategic response. The 10 percent cost increase is a necessary insurance premium against an existential threat. By quantifying the catastrophe, you force a rational decision on diversification, which is the only long-term solution to geopolitical risk. This is the highest form of strategic counsel.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Financial Hedge",
        text: "Recommend immediately hedging against the currency risk and purchasing a high-limit business interruption insurance policy. This protects the company's financial P&L and cash flow in case of a shutdown, allowing the client to maintain the current manufacturing strategy. It is a financial solution to a physical problem.",
        expertRationale: "This is a tactical financial hedge. While it protects the short-term balance sheet, it fails to solve the physical problem: the client cannot sell product if it cannot manufacture it. Financial hedging is no substitute for operational resilience and diversification. It avoids the necessary hard choice.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic resilience in a global context requires operational diversification, not just financial hedging. The single point of failure must be eliminated, regardless of the short-term cost. A and C are insufficient responses to an existential threat. B forces the necessary hard choice.",
    takeAway: "Geopolitical risk is not a market downturn; it is a structural failure that requires operational diversification, not just financial hedging."
  },

  // Scenario 41: Project Recovery (The Sunk Cost Fallacy)
  {
    id: 41, 
    moduleId: 3, 
    title: "The Unkillable Project",
    prompt: "A massive, multi-year internal IT system overhaul is 80 percent complete but is now fundamentally misaligned with the company's new strategic direction. Finishing the project requires 6 months and $10M more. Killing the project now means accepting the $40M sunk cost. The CIO is emotionally committed and fighting to finish it, fearing the political fallout of a major cancellation.",
    responses: [
      {
        id: "A",
        title: "Finish the Project",
        text: "Support the CIO and finish the project to minimise the political fallout from accepting the sunk cost. Frame the last 6 months as 'necessary completion to secure the investment.' Propose a 'Phase 2: Strategic Alignment' project to adapt the finished system to the new strategy, which will be costly but saves face.",
        expertRationale: "This is a failure of strategic discipline (Sunk Cost Fallacy). Finishing a system that is strategically obsolete is a costly waste of the remaining $10M and 6 months of precious development time. You are prioritising short-term political comfort over long-term strategic effectiveness, which is unacceptable.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Project Spin-Off",
        text: "Identify a small part of the finished 80 percent (e.g., the security or authentication module) that is still usable. Finish only that module, framing it as a successful 'platform component,' and immediately kill the rest of the project. This allows the CIO to claim a small win and saves $8M of the remaining budget while cutting the loss.",
        expertRationale: "This is a good political move that minimises the political cost of cancellation. It finds a small, defensible piece of value to save. However, the core strategic question remains: the project is obsolete. It's a clean break, but it still prioritises the politics of the CIO over the need to reallocate the entire budget and team to the correct strategic goal.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Rational Veto",
        text: "Immediately intervene with the CEO and the Board. Present a 'Kill/Reallocate' financial model: show that the $10M and 6 months of talent, if redirected to the new strategic priority, will generate $50M in new revenue. Frame the cancellation as 'necessary investment to secure the future,' proving that the opportunity cost of finishing the obsolete project is greater than the $40M sunk cost.",
        expertRationale: "This is the essential strategic decision. It correctly identifies the opportunity cost of the remaining investment as the most critical financial figure. By showing the massive future revenue being sacrificed, you make the decision to kill the project rational and financially imperative, overcoming the emotional attachment and the sunk cost fallacy.",
        expertRanking: 1
      }
    ],
    overall: "C is the only strategic answer. The decision to kill a project must be based on the opportunity cost of the remaining investment, not the sunk cost. A is a failure of discipline, and B is a good compromise but avoids the necessary, full reallocation of resources. C forces the client to look forward.",
    takeAway: "Never let a sunk cost justify a bad investment; the strategic cost of a failing project is the future revenue its resources could be generating."
  },

  // Scenario 42: Human-Centered Strategy (Avoiding the Robot Trap)
  {
    id: 42, 
    moduleId: 3, 
    title: "The Automation Paradox",
    prompt: "You’ve identified a process that can be 90 percent automated, saving 50 full-time jobs. The CFO is pushing for full, immediate automation to maximise efficiency. You know that the 10 percent of the job that cannot be automated is the 'human touch' that drives customer loyalty, and full automation will result in a 20 percent drop in the client's crucial Net Promoter Score (NPS).",
    responses: [
      {
        id: "A",
        title: "The Human-in-the-Loop",
        text: "Recommend automating only 70 percent of the process. Redesign the remaining 30 percent of the roles to focus purely on the 'human touch' interactions that drive NPS. Frame the strategy as 'Efficiency to Fund Empathy,' ensuring the automation savings are used to create a smaller, highly focused, high-value human-centric team.",
        expertRationale: "This is the essential strategic move. It correctly identifies that the human touch is the true strategic asset. By using automation to fund a hyper-focused, high-quality human interaction, you secure both the cost savings and the loyalty driver (NPS). This is a balanced strategy that avoids the common 'robot trap.'",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Full Automation",
        text: "Proceed with 90 percent automation to satisfy the CFO's efficiency mandate. Propose a separate, high-cost 'Brand Marketing' campaign to mitigate the expected drop in NPS, using advertising to compensate for the loss of the human touch. This sacrifices operational quality for internal political gain and cost savings.",
        expertRationale: "This is a costly, short-sighted strategy. You are using marketing dollars to fix a flawed operational strategy. Brand campaigns cannot compensate for a genuinely poor customer experience (loss of human touch). The strategic failure is allowing efficiency to destroy the long-term loyalty driver.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Automated Advisory",
        text: "Propose full automation, but insist that the 50 laid-off employees be immediately rehired as a high-level 'Digital Advisory' team. This team will use their deep knowledge of the automated process to help customers navigate the new digital service, ensuring a smooth transition and mitigating the NPS risk during the transition period.",
        expertRationale: "This is a good, humanitarian move that attempts to solve the political and emotional problem of layoffs. However, it still maintains the cost of 50 FTEs without solving the long-term structural issue of how to integrate human empathy into the automated process. It is a temporary solution that delays the true strategic redesign.",
        expertRanking: 2
      }
    ],
    overall: "A is the clear winner. Strategic automation is about efficiency AND quality. The advisor must protect the customer loyalty driver (NPS) by ensuring a human is always in the loop for high-value moments. B sacrifices loyalty for cost, and C is a temporary, expensive hedge. A creates a structurally superior process.",
    takeAway: "Automation is only strategic if it funds the human touch necessary to drive customer loyalty, not if it replaces it completely."
  },

  // Scenario 43: Regulatory Arbitrage (Finding the Legal Edge)
  {
    id: 43, 
    moduleId: 3, 
    title: "The Regulatory Maze",
    prompt: "Your client, a wealth management firm, is operating in a highly restrictive regulatory environment that caps their ability to offer certain high-yield products, costing them significant revenue. Your legal team discovers an obscure regulatory loophole in a secondary country that, with a small legal team set up, would allow the firm to offer the high-yield product globally through a 'Passporting' mechanism.",
    responses: [
      {
        id: "A",
        title: "Stay Compliant",
        text: "Ignore the obscure loophole and focus on improving efficiency within the current restrictive regulatory environment. Frame the current compliance as a 'Trust Advantage' compared to competitors who may be looking for loopholes. This avoids legal risk but guarantees the client remains competitively disadvantaged on product offerings.",
        expertRationale: "This is a financially cautious approach that is strategically passive. While safety is important, a strategic advisor must look for all defensible, legal mechanisms to gain a competitive edge. Avoiding a legal, defensible loophole sacrifices immense market share for unnecessary conservatism.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Passport Strategy",
        text: "Immediately present the regulatory loophole to the CEO and Legal counsel. Recommend setting up a small, fully compliant legal entity in the secondary country and using the 'Passporting' mechanism to offer the high-yield product globally. Frame the 5 percent set-up cost as a mandatory 'Competitive Product Launch Investment' that will unlock 30 percent more revenue.",
        expertRationale: "This is the ideal strategic move. Regulatory arbitrage is a powerful, legal competitive lever. By identifying a defensible, compliant mechanism to overcome a strategic barrier (product offering), you create a massive, immediate competitive advantage. This shows deep strategic knowledge beyond standard operations, linking legal structure directly to P&L growth.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Industry Push",
        text: "Recommend lobbying the local regulators to change the current rules to allow the high-yield product. Form an industry working group to push for the change, demonstrating political weight. This is a high-cost, high-friction, long-term political fight that delays the product launch for at least two years, guaranteeing a loss of market share to more agile competitors.",
        expertRationale: "This is a good long-term political strategy, but it is a failure of immediate strategic execution. When a compliant workaround exists, fighting the regulatory body is a time-consuming luxury the client cannot afford. It sacrifices immediate competitive advantage for a slow, costly political battle.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic competence involves finding all legal, defensible mechanisms to gain a competitive edge. The 'Passport Strategy' is a financially compelling, legal workaround that achieves the strategic goal (product launch) immediately. A is too passive, and C is too slow.",
    takeAway: "The strategic move in a restrictive environment is not to fight the regulation; it is to find the legal structure that renders the restriction irrelevant."
  },

  // Scenario 44: Crisis Communication (The Public Narrative)
  {
    id: 44, 
    moduleId: 3, 
    title: "Controlling the Narrative",
    prompt: "Your client has just suffered a small but public data breach. The Head of IT wants to issue a dry, technical press release detailing the servers, security measures, and data affected. The CEO is panicking and wants to issue an emotional public apology that overstates the severity to show sincerity. Both approaches risk further media scrutiny.",
    responses: [
      {
        id: "A",
        title: "The Technical Truth",
        text: "Support the Head of IT's dry, technical release. It is factual and legally defensible. This minimises the risk of future legal liability from over-promising on security measures but is perceived by the public as cold and evasive, leading to a long, negative media cycle that damages the brand's perceived trustworthiness.",
        expertRationale: "This is a legal move, not a strategic one. Crisis communication requires balancing facts with empathy. A cold, technical release fails to manage the public's emotional contract, confirming their fear that the company cares more about servers than customers. This guarantees brand damage.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Empathetic Focus",
        text: "Advise the CEO to issue a public statement that is 80 percent focused on the customer impact ('What we are doing for you right now') and 20 percent on the technical fix. Commit to a dedicated 'Customer Support Hotline' and offer a free, immediate service (e.g., credit monitoring) to all affected. This shifts the narrative from the cause of the breach to the commitment to the customer.",
        expertRationale: "This is the ideal strategic crisis communication. It correctly focuses the narrative on the victim (the customer), which is the most powerful tool for rebuilding trust. By offering a tangible, immediate service, the client moves beyond apology to action, which is the fastest way to kill the negative media cycle and protect the brand's long-term value.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Combined Approach",
        text: "Issue a statement that blends the CEO's sincerity with the IT's facts: a brief, empathetic apology from the CEO that then links to a detailed, fact-based Q&A page hosted on the company website. This manages both political and technical needs but risks exposing the company to two different fronts of media scrutiny.",
        expertRationale: "This is a good, balanced compromise. It is defensible. The weakness is that it still allows the media to focus on the technical details and the 'blame' narrative. The key strategic move is to redirect the public focus entirely to the solution and the customer, which B does more effectively.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic crisis communication is about controlling the narrative by focusing on the customer, not the technology or the apology. A is cold, and C is fragmented. B forces the media to cover the client's proactive commitment to customer care, which is the fastest way to repair brand value.",
    takeAway: "In a public crisis, the strategic narrative must not be about what went wrong; it must be 80 percent about what you are doing right for the customer right now."
  },

  // Scenario 45: Stakeholder Alignment (The Unseen Conflict)
  {
    id: 45, 
    moduleId: 3, 
    title: "The Double Agent",
    prompt: "You are leading a major change program. The Head of Finance is publicly supportive but is privately instructing their team to provide inaccurate, inflated cost data to your project team, making the project look more expensive than it is. You suspect this is an attempt to sabotage the project's funding for a future IT project that the Head of Finance favours. Your sponsor (the COO) is oblivious.",
    responses: [
      {
        id: "A",
        title: "The Data Audit",
        text: "Immediately inform the COO of the Head of Finance’s sabotage attempt and present the documented evidence of the inflated cost data. Demand a full, immediate audit of all project costs and a public commitment from the Head of Finance to provide accurate data. This is a necessary, high-stakes confrontation to secure the integrity of the project's funding.",
        expertRationale: "This is the necessary, courageous strategic move. Sabotage is an existential threat to the project's viability. By presenting irrefutable evidence, you force the COO to confront the internal political conflict and ensure the project's financial integrity is restored. Hiding the confrontation would allow the sabotage to succeed.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Data Bypass",
        text: "Avoid confronting the Head of Finance or the COO. Instead, quietly use a proxy (e.g., a junior staff member from an unaffected department) to collect the correct cost data directly from the transactional system. Proceed with the project using the correct data, but avoid public comparison with the Head of Finance's inflated numbers.",
        expertRationale: "This is a pragmatic solution that ensures the project proceeds with the correct numbers. However, it fails to address the political root cause (sabotage). The Head of Finance will continue to attempt to undermine the project through other means, and the internal conflict remains unsolved, which is a massive hidden project risk.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Co-Funding Offer",
        text: "Have a private, one-on-one meeting with the Head of Finance. Offer to dedicate a small portion of your current project's savings to partially fund their favoured IT project. Frame it as a 'cross-project alignment' and a way to mutually de-risk both projects. This attempts to convert the saboteur into an ally through compromise.",
        expertRationale: "This is a clever political compromise that attempts to solve the conflict with resource sharing. It is strategically risky, as it legitimises the sabotage by rewarding the bad behavior. While it may solve the immediate conflict, it sets a dangerous precedent for all future projects that face political resistance.",
        expertRanking: 2
      }
    ],
    overall: "A is the only strategic choice. Political sabotage of financial data is a red line that must be immediately addressed. Hiding it or compromising (B and C) only legitimises the bad behavior and risks the project's entire mandate. The advisor must protect the project's integrity, even at the cost of a political storm.",
    takeAway: "Political conflict cannot be allowed to compromise financial integrity; if the data is being sabotaged, the strategic move is a high-stakes, evidence-based confrontation."
  },

  // Scenario 46: Technology Integration (The Core System Overhaul)
  {
    id: 46, 
    moduleId: 3, 
    title: "The IT Heart Attack",
    prompt: "Your client needs to replace its 30-year-old, mission-critical core banking system, which is a major project that will take five years and cost $500M. The CEO wants to immediately launch three new digital products that rely on the old core system, believing the replacement can wait. You know the old system will collapse under the new product's load, leading to a catastrophic service failure.",
    responses: [
      {
        id: "A",
        title: "The Simultaneous Launch",
        text: "Agree to launch the three new digital products immediately to meet the CEO's mandate. Propose a separate, expensive 'Core System Stabilisation' team to patch the old system while the new products are running. This meets the short-term goal but introduces massive technical debt and guarantees a future collapse.",
        expertRationale: "This is a failure of technical and strategic foresight. Patching a failing core system under new, heavy load is a recipe for a catastrophic service failure. It prioritises a short-term, unsustainable win over long-term strategic integrity. The reputational risk is immense.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Decoupling Strategy",
        text: "Insist on a sequenced approach. Dedicate the first 12 months of the core system project to building an 'API Layer' (Decoupling Layer) around the old system. This allows the three new digital products to launch at 12 months using the new API, protecting the core system from direct load while the full replacement continues in the background. Frame this as a 'Risk Mitigation' strategy.",
        expertRationale: "This is the only viable strategic response. It correctly identifies the core system as the bottleneck and uses technology (the API layer) to decouple the new strategic initiatives from the old operational risk. This allows the CEO to launch their products without sacrificing the long-term, necessary core replacement. This is a master class in strategic sequencing and technical foresight.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Phased Replacement",
        text: "Propose a complete, immediate halt to the new digital products. Dedicate all resources to an accelerated, 3-year replacement of the core system. This solves the technical problem but risks losing market share and failing to meet the CEO's mandate for innovation, leading to a political crisis of paralysis.",
        expertRationale: "This is technically correct but politically naive. Stopping all innovation for three years is a strategic surrender in a competitive market. The advisor must find a way to meet the innovation need while solving the core problem. A full halt is a failure of strategic creativity.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic technology transformation must solve the core problem (the old system) while enabling future growth (new products). The Decoupling Strategy is the essential technical workaround to achieve both goals. A is reckless, and C causes a strategic paralysis. B maintains both resilience and momentum.",
    takeAway: "To innovate on a failing core system, you must build a decoupling layer; the strategic skill is to build the bridge while replacing the foundation."
  },

  // Scenario 47: Portfolio Management (The Resource Drain)
  {
    id: 47, 
    moduleId: 3, 
    title: "The Resource Vampire",
    prompt: "Your client has 50 projects running across the enterprise. Three of them are 'zombie' projects: they consume 40 percent of the top talent and 30 percent of the budget but have zero clear ROI and no executive sponsor. The CEO is hesitant to cancel them due to internal fear of admitting past failure, but the resource drain is killing all other high-value projects.",
    responses: [
      {
        id: "A",
        title: "Re-sponsor the Zombies",
        text: "Avoid cancellation. Find a new, high-ranking executive sponsor for each of the three zombie projects and re-scope them with a clear, aggressive ROI target. This avoids the political fallout of cancellation but forces the scarce executive time and budget onto fundamentally flawed projects.",
        expertRationale: "This is a poor strategic move. Zombie projects are dead. Re-sponsoring them only institutionalises a strategic mistake and continues the resource drain. It sacrifices valuable executive time and budget on projects that should have been killed, leading to continued failure.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Project Audit",
        text: "Propose a mandatory 'Portfolio Health Audit' for all 50 projects, with the criteria being 'Executive Sponsorship,' 'ROI in 12 Months,' and 'Talent Consumption.' Use the objective audit data to force the cancellation of all three zombie projects, freeing up the 40 percent of top talent immediately. Frame it as necessary portfolio hygiene.",
        expertRationale: "This is a necessary strategic intervention. Strategy demands the ability to ruthlessly reallocate resources from the dead to the living. The audit provides the necessary, objective distance to overcome the emotional resistance to cancellation. This is the fastest way to inject energy and talent into the viable projects.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Talent Strike",
        text: "Avoid a direct confrontation about the projects. Instead, mandate a 'Talent Rotation' across the entire portfolio, immediately removing all top talent from the three zombie projects and reassigning them to the highest-ROI, most critical work. The projects will naturally stall and die from lack of resources, forcing the executives to cancel them without public admission of failure.",
        expertRationale: "This is the most politically astute solution. It uses an operational mechanism (talent allocation) to achieve a strategic goal (cancellation). By starving the zombies of their resources, you ensure their political demise without forcing an embarrassing confrontation about past failure, making it easier for the client to save face and move on. This is a subtle but effective political technique.",
        expertRanking: 1
      }
    ],
    overall: "C is the highest-ranked because strategic political management means achieving the goal with the lowest political cost. The 'Talent Strike' solves the resource drain and forces the cancellation indirectly. A is poor, and B is good but risks a political fight. C is the quiet, decisive victory.",
    takeAway: "The easiest way to kill a zombie project is not to veto it, but to strategically starve it of its most critical resource: your top talent."
  },

  // Scenario 48: Competitive Strategy (Winning Through Differentiation)
  {
    id: 48, 
    moduleId: 3, 
    title: "The Price War Illusion",
    prompt: "A client in a commoditised service industry (e.g., outsourced call centers) is facing aggressive price-cutting by its main competitor, which is causing rapid client churn. The CEO believes the only way to survive is to match the competitor’s 20 percent price cut, which will destroy the client's current profit margins.",
    responses: [
      {
        id: "A",
        title: "Differentiate or Die",
        text: "Insist on not matching the price cut. Instead, propose immediately increasing the price by 5 percent, but bundling it with a high-value, non-replicable service (e.g., a proprietary AI quality assurance layer). Frame the strategy as 'Premium Quality Assurance' and focus on the 30 percent of customers for whom quality is a non-negotiable strategic asset. This creates a defensible niche.",
        expertRationale: "This is the only strategic option. Competing on price in a commodity market is a race to the bottom that destroys margin and brand value. The strategic move is to differentiate and exit the commodity market. By focusing on a premium niche, you secure a defensible position and maintain margins, which is the only way to achieve sustainable long-term success.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Match and Survive",
        text: "Match the competitor's 20 percent price cut to stop the churn, as requested by the CEO. Simultaneously, launch an immediate, aggressive cost-cutting program to survive the margin hit, focusing on reducing overheads by 25 percent. This prioritises survival but risks damaging service quality and brand reputation.",
        expertRationale: "This is a tactical survival move. While necessary to stop the short-term bleeding, it is strategically damaging. The competitor who initiates the price cut usually has a structural cost advantage that the client does not. Matching the price without a structural advantage guarantees a long, damaging war that will destroy both firms.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Two-Tier Strategy",
        text: "Propose a two-tiered service: keep the current premium service at the current price, and launch a new, low-cost, no-frills 'Economy' service at the competitor's low price point. This captures the price-sensitive churners but risks cannibalising the existing high-margin customers with the new cheap offering, diluting the brand.",
        expertRationale: "This is a common compromise that avoids the tough choice. It is a strategically weak solution that often results in the cannibalisation of the high-margin core business without securing long-term dominance in the low-end segment. It creates unnecessary complexity and brand confusion.",
        expertRanking: 2
      }
    ],
    overall: "A is the clear winner. Strategic differentiation is the only way to escape a price war. You must find a unique, high-value asset and stake your claim there, even if it means losing the price-sensitive customers. B and C guarantee a destruction of margin and brand value.",
    takeAway: "A price war is a strategic failure; the only way to win is to exit the commodity market and create a defensible, differentiated niche."
  },

  // Scenario 49: Decision-Making (Overcoming Analysis Paralysis)
  {
    id: 49, 
    moduleId: 3, 
    title: "Analysis Paralysis",
    prompt: "The executive team is stuck in 'analysis paralysis' over a critical expansion decision, requesting endless data on three nearly identical market options (A, B, C). You have enough data for a 90 percent confident decision, but the executive team is waiting for the unattainable 100 percent certainty, losing two months of critical time-to-market advantage.",
    responses: [
      {
        id: "A",
        title: "More Data",
        text: "Agree to pursue the extra data requested by the executive team to try and satisfy their need for certainty. Frame the delay as 'necessary due diligence.' This avoids confrontation but ensures continued paralysis and the certain loss of the time-to-market advantage, sacrificing the strategic goal for political safety.",
        expertRationale: "This is a failure of advisory leadership. Strategic decisions rarely come with 100 percent certainty. By agreeing to more data, you legitimise the paralysis and allow the political fear to override the strategic imperative of speed. You are enabling bad decision-making.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Forced Scenario Planning",
        text: "Call a focused decision meeting. State clearly that the options are strategically similar. Propose a single metric: 'Opportunity Cost of Delay.' Show that every week of delay costs the company $1M in LTV. Then, use a 'Regret Minimization' framework to select the first viable option (A), insisting that the strategic move is the decision itself, not the data perfection.",
        expertRationale: "This is the necessary strategic intervention. Strategy is about speed and action with imperfect information. By quantifying the 'Opportunity Cost of Delay,' you turn the paralysis into a financial imperative to act. The 'Regret Minimization' framework allows the client to rationally choose the best available option, rather than waiting for the perfect one. This is decisive strategic leadership.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Pilot Test",
        text: "Avoid the confrontation over data. Propose a small, two-week, low-cost pilot program for the easiest market option (A) to generate immediate, real-world data. This bypasses the paralysis by converting the decision from a theoretical problem to a practical test, giving the executives the small amount of real data they need to commit.",
        expertRationale: "This is a great compromise that works for tactical problems. For a large, strategic market decision, a small pilot is often insufficient to overcome the uncertainty and only serves to delay the large-scale commitment. It's a good move to get momentum, but it doesn't solve the core strategic fear of a large-scale decision.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. Strategic momentum is lost when fear of imperfection overrides the necessity of action. The advisor must use the 'Opportunity Cost of Delay' to force a rational choice. A legitimises the paralysis, and C is too small a fix for a big problem. B enforces decisive action.",
    takeAway: "The strategic cost of analysis paralysis is the opportunity cost of lost time; you must quantify the delay to overcome the fear of imperfect information."
  },

  // Scenario 50: Innovation Measurement (Rewarding the Right Risk)
  {
    id: 50, 
    moduleId: 3, 
    title: "Rewarding Failure",
    prompt: "The Head of Innovation is demanding that their team's bonus be based on 'total revenue generated' from new products. You know that successful innovation requires taking big risks, and rewarding only revenue will incentivise the team to only pursue small, safe, incremental improvements, killing the strategic goal of revolutionary innovation.",
    responses: [
      {
        id: "A",
        title: "Revenue Only",
        text: "Agree to the 'total revenue generated' metric for the bonus, as it is easily quantifiable and aligns with the P&L. Establish a secondary, non-monetary 'Innovation Award' for the riskiest, most revolutionary ideas, even if they fail. This avoids conflict but ensures the team prioritises the revenue bonus over the risky, revolutionary work.",
        expertRationale: "This is a failure of strategic incentive design. People follow the money. Making 'revenue' the primary bonus metric guarantees that the team will choose low-risk, incremental projects. The strategic goal (revolutionary innovation) will be ignored, and the award will be viewed as a token gesture.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Blended Score",
        text: "Propose a blended metric: 50 percent on 'Revenue Generated' (to satisfy the P&L), 30 percent on 'Option Value Created' (quantified through validated customer learning and market potential), and 20 percent on 'Portfolio Balance' (enforcing a mix of high-risk, high-reward projects). This aligns the bonus with both execution and strategic risk-taking.",
        expertRationale: "This is a good compromise that tries to manage both financial and strategic goals. The inclusion of 'Option Value' is a clever way to reward learning and potential, but the complexity of quantifying 'Option Value' and 'Portfolio Balance' can be politically exploited, making the incentive system look subjective and frustrating the team.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Risk-Adjusted Bonus",
        text: "Insist on a two-tier bonus: The first tier is a 'Base Bonus' for achieving incremental revenue goals. The second tier is a large 'Strategic Risk Bonus' tied solely to the successful validation of a high-risk, revolutionary hypothesis, regardless of the immediate revenue generated. Frame this as 'Rewarding the Strategic Leap' to the Head of Innovation.",
        expertRationale: "This is the most strategic approach. Successful revolutionary innovation requires separating the reward for operational efficiency (Tier 1) from the reward for strategic exploration (Tier 2). By creating a separate, large bonus for 'validated learning from a high-risk hypothesis,' you ensure the team dedicates time to the core strategic mission: taking the necessary big bets.",
        expertRanking: 1
      }
    ],
    overall: "C is the clear winner. Strategic incentive design requires a deliberate separation of rewards for core business execution versus revolutionary innovation. A sacrifices the future for the present, and B is too complex. C ensures the team has a clear, monetary incentive to focus on the high-risk, high-reward projects the firm strategically needs.",
    takeAway: "You cannot reward for both safety and revolutionary risk with the same metric; strategic innovation requires a separate, large reward for taking the necessary big bets."
  }
];
