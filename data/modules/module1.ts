import type { ModuleScenarios } from './types';

const module1Scenarios: ModuleScenarios = [

  // 1. Analytical vs Advisory Thinking (Best: B)
  {
    id: 1, 
    prompt: "You’ve just completed a thorough data analysis for a client in the construction sector, showing delays are mainly due to slow approval processes and supply bottlenecks. In tomorrow’s steering meeting, you’re expected to present your findings. The senior client sponsor has limited patience for technical detail and is under pressure from their COO to “just fix it.” Your Manager has hinted that the presentation is a test of your ability to move from analysis to advisory mode.",
    responses: [
      {
        id: "A",
        text: "Prepare a comprehensive walkthrough of the analysis, showing each step of the causal chain that led to the conclusions. Demonstrate transparency by highlighting the robustness of methods, then close with the two main findings. Keep the recommendation for the end to avoid jumping to conclusions without evidence.",
        expertRationale: "This is defensible but risks losing the room. It emphasises analysis over action, which satisfies technical transparency but frustrates time-poor executives. The consultant looks thorough but not advisory-minded. Impact is muted because the recommendation comes too late and feels like an afterthought.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Open with one sentence: “Two things cause your delays — bottlenecked approvals and unreliable supply.” Immediately follow with three options to address them, briefly outlining trade-offs in speed, cost, and risk. Keep the analysis in the appendix for backup, ready if challenged. Signal readiness to workshop implications right after the meeting.",
        expertRationale: "This is the strongest advisory move: it leads with clarity, frames trade-offs, and offers paths forward. It shows ownership of the insight and orients the conversation toward decisions. The analysis is still available for scrutiny but is not the star. Executives feel heard and guided, not burdened.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Summarise findings in a short narrative: “We’ve traced delays through approvals and suppliers — the two choke points. Here’s a simple timeline showing where weeks are lost.” Suggest piloting a fast-track approval lane for one project and a new supplier reliability check. Offer to refine the approach further with the COO’s team.",
        expertRationale: "This option blends analysis with action. The narrative and visualisation humanise the data, and the pilot recommendation is concrete yet contained. It may underplay broader trade-offs, which weakens the advisory stance compared with a structured options framing, but it creates immediate relevance and buy-in.",
        expertRating: 4
      }
    ],
    overall: "A is too heavy on analysis; B puts recommendations front and centre, with clear options; C finds a middle ground, weaving story with action. B wins because it shows an advisory mindset under time pressure.",
    takeAway: "Lead with the “so what” — analysis earns trust, but advice earns decisions."
  },
  // 2. Stakeholder Communication (Best: B)
  {
    id: 2, 
    prompt: "You’re midway through presenting a diagnostic on supply chain costs. A COO interrupts: “Enough data, what are you recommending?” The room is tense — your Manager is watching how you handle the moment. Your slides are full of process flows and cost drivers, but you’ve not yet landed the recommendation section.",
    responses: [
      {
        id: "A",
        text: "Present a very short, one-slide executive summary now that states the top 2 findings, then offer a 10-minute technical appendix walkthrough for anyone who wants detail. Propose a follow-up deep-dive session with the COO and their team to translate the analysis into operational steps if the group wants to proceed.",
        expertRationale: "This is a defensible, consultant-minded move — it preserves rigour while prioritising the exec audience. It signals respect for the COO’s time and keeps technical backup available. The risk: it can feel like hedging if the executive wants a clear recommendation now. Better than raw detail, but less bold than a direct pivot to action.",
        expertRating: 3
      },
      {
        id: "B",
        text: "Acknowledge the frustration and pivot immediately to implications: state a crisp headline recommendation (one sentence), name the top three business impacts (e.g., cost save, lead time improvement, risk reduction), and suggest two next steps the COO can decide on now. Offer to send the full analytical appendix to anyone who wants the numbers afterwards.",
        expertRationale: "This is a textbook advisory response: it validates the stakeholder, converts analysis into decision-relevant language, and gives clear options to move forward. It signals command of the material and prioritises what the executive needs to act. By offering backup later, it preserves credibility and satisfies technical audiences.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Make a brief, measured pushback: thank the COO for the candour, explain that the analysis is intended to show causal drivers rather than immediate fixes, and propose a short “options workshop” later that afternoon to co-create pragmatic pilot interventions with the COO and key operators. Stress readiness to tighten the recommendations for their priorities.",
        expertRationale: "This is a collaborative, slightly more assertive choice that turns friction into co-creation. It protects analytical integrity while quickly aligning around action. The risk is that it uses more calendar time and may feel like deferral if the COO wanted an immediate decision. Still, it’s a strong, relationship-building move.",
        expertRating: 4
      }
    ],
    overall: "Three credible consultant moves: A keeps rigour with optional detail, B converts insight into immediate decisions, C invites joint problem-solving. B is the cleanest route to influence in the moment, while A and C are defensible alternatives depending on personalities and political context.",
    takeAway: "Give executives the decision they need now — keep the analysis as backup, not the headline."
  },
  // 3. Client Expectations & Pressure (Best: B)
  {
    id: 3, 
    prompt: "Your project is mid-flight. The client’s Project Sponsor emails urgently: “The CEO wants to see draft recommendations by Monday.” Your full analysis isn’t due for another two weeks. Your team hasn’t validated all the data. Your Manager looks at you: “What do we tell them?”",
    responses: [
      {
        id: "A",
        text: "Agree to provide a draft for Monday, but narrow the scope: deliver a targeted “decision pack” covering the three issues most likely to be raised by the CEO (with clear assumptions and caveats), and promise the full, substantiated recommendations in two weeks. Internally, reallocate effort to create the pack and flag any parts that will be materially incomplete.",
        expertRationale: "This is pragmatic and client-facing: it demonstrates responsiveness while protecting depth. The danger is overcommitment — if internal capacity is misjudged, the “decision pack” can still look thin. It’s a reasonable compromise when the CEO needs visibility, but requires honest internal alignment to pull off well.",
        expertRating: 3
      },
      {
        id: "B",
        text: "Offer a high-level outline Monday morning that maps the emerging thesis, three headline recommendations, and their expected business impact, and request a short briefing with the CEO to walk through the logic. Commit to delivering the fully vetted recommendations on the original schedule once the analysis is complete.",
        expertRationale: "This reframes the ask into something useful and realistic: the CEO gets direction and the team preserves time to complete rigorous work. It buys time without appearing evasive and gives the client a platform to steer priorities. It’s the best trade-off between pace and quality.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Acknowledge the request and promise whatever is available by Monday, but label it explicitly as “working hypotheses and evidence gaps” with a clear caveat. Alongside it, propose a list of remaining validation tasks and a follow-up calendar slot to discuss the final recommendations.",
        expertRationale: "This is honest and transparent: it meets the client half-way and signals where the work still needs validation. The downside is that executives sometimes penalise “work-in-progress” even when labelled; clarity and a tight structure for what will arrive are essential to prevent reputational damage.",
        expertRating: 4
      }
    ],
    overall: "All three options aim to preserve client trust while protecting quality. B (a topline outline + CEO briefing) most cleanly balances immediacy and substance; A and C are credible variants that depend on internal bandwidth and how the CEO typically reacts to drafts.",
    takeAway: "Give the CEO a directionally clear, tightly scoped update — don’t deliver a raw, unstructured draft."
  },
  // 4. Scoping & Scope Creep (Best: B)
  {
    id: 4, 
    prompt: "Mid-project, the client’s Sponsor casually asks: “Can you add a competitor benchmark while you’re at it?” Your Partner had warned last week to watch scope creep closely — margins are already thin. The Sponsor sounds like it’s a small ask, but you know it’s not.",
    responses: [
      {
        id: "A",
        text: "Accept the benchmarking request in principle but limit its ambition: propose a “rapid scan” that benchmarks three direct competitors on two high-impact metrics, deliverable in one week, and clarify that any deeper work (e.g., product-level or channel-level benchmarking) will be treated as a separate, chargeable workstream.",
        expertRationale: "This is pragmatic and client-friendly: it secures goodwill while constraining effort. However, “rapid scans” can metastasise into larger asks if results raise further questions. Unless the team strictly enforces the scope and communicates costs/trade-offs, this concession risks creeping into ongoing unpaid work.",
        expertRating: 3
      },
      {
        id: "B",
        text: "Thank the sponsor, explain current commitments, and present two options: (1) include a focused benchmarking slice within the existing budget by trading off a lower-impact deliverable, or (2) scope a short, paid add-on that delivers a comprehensive benchmark. Provide estimated effort and proposed timelines for both, and ask the sponsor to choose.",
        expertRationale: "This reframes the ask into a clear commercial decision and puts ownership back with the sponsor. It protects margins and timelines while signalling partnership. By quantifying effort and presenting trade-offs, the team looks disciplined and client-oriented simultaneously — a neat advisory move.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Decline the request on the spot, citing the agreed scope and partner guidance about margin protection, but offer to include a short executive summary of competitor activity (no new data collection) based on existing public sources, and propose a priced proposal if the sponsor wants a fuller analysis.",
        expertRationale: "This is firm and commercially defensible, and the free summary softens the refusal. It risks sounding inflexible if delivered brusquely, but paired with an attractive paid option, it can preserve the relationship and reinforce the expectation that additional work requires formal agreement.",
        expertRating: 4
      }
    ],
    overall: "All three options are sensible consultant plays. A edges toward accommodating while risking scope drift; B is the disciplined advisory approach that treats scope change as a decision; C is the firm commercial response softened by a low-effort value gesture.",
    takeAway: "Treat every “just add” as a decision — offer clear options with costs and trade-offs."
  },
  // 5. Project & Time Management (Best: B)
  {
    id: 5, 
    prompt: "You’re running a workstream that’s two weeks behind schedule because of missing client data and delayed stakeholder interviews. The Manager asks you to present a status update tomorrow. They’ll want clarity on risks and what you need from them.",
    responses: [
      {
        id: "A",
        text: "In tomorrow’s update, present the completed outputs honestly, then explain the blockers (missing dataset, delayed interviews) as factual constraints. Offer a concrete recovery plan with milestones: substitute data sources to test hypotheses, a revised interview schedule with alternate stakeholders, and a contingency timeline showing impact on deliverables if the blockers persist.",
        expertRationale: "This is pragmatic and responsible: it avoids dramatics and shows initiative. The limitation is that it asks the Manager to accept remedial work without explicitly requesting support — if the problems need client or partner intervention, this approach can under-communicate escalation requirements. Still, it’s more credible than hiding issues.",
        expertRating: 3
      },
      {
        id: "B",
        text: "Be direct about the delays, outline immediate remedial actions, and ask for two specific forms of support: (1) permission to reallocate internal resources for a fast push, or (2) partner help to press the client contact for the missing dataset. Include a brief risk matrix and a proposed new milestone plan.",
        expertRationale: "This shows ownership and good judgement: problems are surfaced with clear means to resolve them, and the request for targeted help is framed as a lever rather than an abdication. Managers value this mix of honesty plus a menu of practicable fixes.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Escalate immediately to the Partner with a concise brief: list the blockers, the potential client impact, and two suggested options (temporary scope reduction or Partner-led escalation). Make clear that escalation is asked only if the Manager endorses it, and propose a short call to align before any outreach to the client.",
        expertRationale: "This appropriately recognises when higher-level intervention might be needed and provides structured options. The risk is it can appear as bypassing or lack of confidence if done without Manager alignment. The proposed alignment call mitigates that risk — overall a defensible escalation strategy when stakes are high.",
        expertRating: 4
      }
    ],
    overall: "Each option shows credible judgement: A is responsible but self-contained; B combines transparency with a clear request for targeted support; C uses escalation thoughtfully but only with alignment. B gives Managers the best sightline and choices to preserve momentum.",
    takeAway: "Raise problems with a plan — and ask for the specific help you need, not a blanket rescue."
  },
  
  // 6. Managing Conflict (Best: B)
  {
    id: 6,
    prompt: "You're facilitating a critical workshop with a client team to finalize the design of a new operating model. The Head of Sales and the Head of Operations are openly hostile: Sales insists the new model must prioritize speed and customer experience, while Operations argues it must prioritize efficiency and cost control, viewing Sales' proposals as financially reckless. The conversation is deadlocked, and the Project Sponsor is silently observing how you handle the tension.",
    responses: [
      {
        id: "A",
        text: "Address the two leaders directly and validate both priorities by stating: “We need a model that is both fast and efficient.” Then, ask them to list the top three data points they believe are most critical to measure the success of their own priority (e.g., lead time, unit cost). Use these six metrics as the neutral foundation for the remainder of the design discussion.",
        expertRationale: "This is a strong, consultant-minded move. It reframes the conflict from a debate about feelings to a discussion about objective metrics. By getting them to define success with data, you create a neutral playing field. The risk is that if their existing metrics are poor, this could lead to a less productive, data-focused argument instead of solving the design problem.",
        expertRating: 4
      },
      {
        id: "B",
        text: "Acknowledge both perspectives as valid and reframe the conflict as a design trade-off, not a disagreement. Immediately map their two priorities (Speed/Experience vs. Efficiency/Cost) onto a simple 2x2 matrix. Ask them to jointly plot their top three proposed design elements onto this matrix, forcing them to visually agree on the trade-offs they are implicitly making.",
        expertRationale: "This remains the strongest advisory move. It validates both stakeholders while instantly converting emotional conflict into an objective, visual, and analytical problem. By having them *co-create* the map, it moves the conversation from debating opinions to making a joint decision on priorities, showing leadership and superior facilitation skills.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Pause the immediate discussion, but keep the leaders in the room. Pivot the workshop agenda to focus on the Customer Journey and have the team map the key pain points in the current state. Use this customer-centric view to organically identify where speed/experience and efficiency/cost are both critical (e.g., poor handoffs), thereby aligning the two leaders against a common external enemy (poor process).",
        expertRationale: "This is a sophisticated attempt to build alignment by appealing to a higher purpose (the customer). It can successfully de-escalate the tension by shifting the focus. The drawback is that it requires a significant agenda pivot, burns valuable workshop time, and may still fail if the two leaders resist letting go of their departmental mandates, making the return to the operating model design slower.",
        expertRating: 3
      }
    ],
    overall: "All options are credible consultant plays. A is excellent because it injects objective data; C is a clever move to shift focus and build consensus around the customer; B is superior because it uses a simple, neutral framework to force both leaders to immediately and jointly negotiate the terms of the trade-off.",
    takeAway: "Don't avoid conflict — acknowledge competing priorities and use a framework to turn a debate into a decision."
  },
  // 7. Managing Ethical/Data Issues (Best: A)
  {
    id: 7,
    prompt: "You find a minor error in the core data set that doesn't change the final recommendation but slightly reduces the projected cost savings from $20M to $18M. You have an executive meeting in an hour. Your Manager says, 'It's directional, no need to raise it now, just fix it for the final deck.'",
    responses: [
      {
        id: "A",
        text: "Raise the change proactively at the start of the meeting, stating, 'Our core finding is sound, but we've improved data accuracy; the impact is now $18M, not $20M. We wanted to ensure total accuracy before proceeding.'",
        expertRationale: "Integrity is paramount. While the Manager is trying to be pragmatic, proactively disclosing the minor correction builds long-term trust and reinforces the firm's commitment to accuracy, preventing a much larger crisis if the client notices the change later.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Follow the manager's guidance and only update the numbers in the final deck. Focus the current meeting on the strategic action steps, not the precise savings number, as the Manager suggested. Note the change privately to the Sponsor after the meeting.",
        expertRationale: "Defensible, as it follows internal guidance and focuses on the strategic value of the recommendation. However, it risks putting the Manager's short-term convenience over the fundamental principle of immediate, transparent disclosure, which can be damaging if the client were to spot the change later.",
        expertRating: 4
      },
      {
        id: "C",
        text: "Only mention the error and the corrected figure if specifically asked about the total savings number during Q&A. If not asked, proceed with the strategic discussion, making sure the slide deck uses the correct $18M number.",
        expertRationale: "Passive honesty. This is risky because the client might notice the change on the slide and feel the team was trying to hide information. It prioritizes avoiding an awkward conversation over fully owning the data, which is a key advisory requirement.",
        expertRating: 3
      }
    ],
    overall: "All options involve updating the data, but only A delivers the news proactively, which reinforces credibility. B is pragmatic but risks client trust. C is too passive for a high-integrity advisory role.",
    takeAway: "Always lead with integrity — minor data corrections are opportunities to reinforce trust, not tests to avoid."
  },
  // 8. Dealing with a Skeptical Expert (Best: C)
  {
    id: 8,
    prompt: "Your proposed digital roadmap relies heavily on a technology the client’s long-standing, respected CTO is publicly skeptical of. In a review session, he asks for the 'specific proof' that it will work in their unique, complex environment, clearly trying to derail the presentation.",
    responses: [
      {
        id: "A",
        text: "Acknowledge his expertise, but pivot back to the business outcome they're trying to achieve (e.g., faster time-to-market), and ask the CTO what technology he *would* recommend to achieve that specific outcome, using his answer to guide the path forward.",
        expertRationale: "A good consensus-building move that gives the CTO a voice and shifts the focus from technology to business value. However, it requires abandoning the team’s core, researched recommendation too easily and risks prolonging the project by starting over on the technology choice.",
        expertRating: 4
      },
      {
        id: "B",
        text: "Double-down on your analysis: present five detailed slides from the appendix that show technical evidence and case studies from similar environments, challenging his skepticism with pure data and methodology.",
        expertRationale: "Technically correct, but overly aggressive. By publicly challenging a respected internal expert with a purely analytical response, you risk alienating the most powerful technical decision-maker and turning the discussion into a debate about data integrity rather than strategic direction.",
        expertRating: 3
      },
      {
        id: "C",
        text: "Validate the CTO's deep knowledge and respectfully suggest a small, high-priority pilot program focused on his most critical area of concern, jointly defining the success metrics. This buys time, builds trust, and allows the data to speak for itself.",
        expertRationale: "This is the strongest approach. It builds relationship capital by validating the CTO's knowledge, defuses the tension by providing a non-threatening path forward, and relies on a concrete proof-of-concept to resolve the technical debate, aligning the expert through his own data.",
        expertRating: 5
      }
    ],
    overall: "A and B fail to fully handle the relationship risk. A gives up too much ground; B is too confrontational. C wins by using a pilot to build trust and allow the results to overcome the skepticism.",
    takeAway: "Don't argue with an expert's opinion — propose a way to let the data prove the concept."
  },
  // 9. Presenting Bad News/Pivot (Best: A)
  {
    id: 9,
    prompt: "Your three-month strategy study concludes the client must exit its largest but lowest-margin market segment to fund growth in a new adjacent area. This recommendation directly contradicts the CEO's decades-long commitment to that market. You must present this finding tomorrow.",
    responses: [
      {
        id: "A",
        text: "Lead with the 'Why': The core problem (lack of funding for growth), then present the two strategic options (Exit vs. Status Quo), framing the exit as the only viable path to future success based on the data. Keep the discussion focused on the trade-off and the new vision.",
        expertRationale: "This is the most strategic and trustworthy approach. It acknowledges the difficulty of the decision but forces the CEO to choose between their historical commitment and the future vision. Leading with the 'new' vision makes the bad news feel necessary, not critical.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Bury the bad news: Present the detailed analysis of the new growth market first (the good news), and only reveal the need to exit the old market on the final recommendation slide as a necessary funding mechanism.",
        expertRationale: "This attempts to cushion the blow but is too slow. It risks feeling manipulative or anticlimactic, and a CEO will likely latch onto the exit recommendation immediately, ignoring the detailed analysis that preceded it. It undercuts the power of the core strategic narrative.",
        expertRating: 4
      },
      {
        id: "C",
        text: "Deliver the bad news as a simple 'Must Exit Market X' headline. Spend the majority of the time defending the data and methodology that led to this conclusion, showing the financial drain the old market is causing.",
        expertRationale: "This is purely analytical and confrontational. It invites a fight about the data and the past, rather than a conversation about the future strategy. The consultant risks appearing insensitive to the CEO's commitment and failing to guide them towards a difficult but necessary decision.",
        expertRating: 3
      }
    ],
    overall: "The best approach requires both sensitivity and clarity. A is the most effective way to communicate a painful pivot by framing it as a choice for future success. B is too cautious; C is too combative.",
    takeAway: "When presenting bad news, focus on the future you enable, not the past you undo."
  },
  // 10. Prioritizing Team Needs over Client Demands (Best: B)
  {
    id: 10,
    prompt: "It’s late Friday. Your team is exhausted after a 60-hour week. The Client Sponsor emails, demanding a 'quick, five-slide memo' by Monday morning on a topic completely outside the agreed scope. It could be done, but it means burning the entire weekend. Your team is counting on the break.",
    responses: [
      {
        id: "A",
        text: "Respond immediately, thanking the client for the priority, and send a stripped-down, two-slide memo on Monday morning, with a note that you 'focused only on the key headlines' due to resource constraints. Tell the team you need a limited effort over the weekend.",
        expertRationale: "This accommodates the client's urgency but sacrifices the team's weekend and sets a poor precedent for future, urgent, out-of-scope demands. While it is responsive, it damages team morale and is commercially undisciplined.",
        expertRating: 3
      },
      {
        id: "B",
        text: "Respond by acknowledging the urgency, but proposing a two-step plan: (1) Provide a short email by Monday morning summarizing the initial thoughts/data available from the existing analysis, and (2) Schedule a 15-minute call Tuesday morning to agree on a formal scope/deliverable for the full memo, ensuring it's properly planned.",
        expertRationale: "This is the strongest management move. It is highly responsive by providing *something* on Monday morning (the email), but it protects the team's weekend and re-establishes professional boundaries and scope discipline for the actual deliverable. It validates the client's urgency without conceding the team's downtime.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Tell the Client Sponsor you cannot accommodate the request due to the team’s current workload and the scope boundary, but offer to provide an estimate for the work that can be formally charged as an add-on later in the week.",
        expertRationale: "Commercially strong, as it immediately moves to protect scope and charge for the work. However, it risks appearing unaccommodating to the client's urgent need and fails to provide any value until later in the week, potentially damaging the relationship.",
        expertRating: 4
      }
    ],
    overall: "The best response balances team sustainability with client service. A sacrifices the team; C is commercially correct but slow to respond. B achieves the best outcome by providing immediate value (email) while protecting the team and project discipline.",
    takeAway: "Protect your team's boundaries by providing a minimal 'bridge' solution, not by conceding a major deliverable."
  },
];

export default module1Scenarios;
