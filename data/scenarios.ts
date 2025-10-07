// /data/scenarios.ts

// Define the data types for clarity
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

export interface Response {
  id: "A" | "B" | "C";
  title: string;
  text: string;
  expertRationale: string;
  expertRanking: 1 | 2 | 3;
}

export interface Scenario {
  id: number;
  moduleId: number;
  title: string;
  prompt: string;
  responses: Response[];
  overall: string;
  takeAway: string;
}

export const scenarios: Scenario[] = [
  {
    id: 1, 
    moduleId: 1, 
    title: "The Golden Feature",
    prompt: "Your client, the Head of Digital Transformation, has just casually introduced a small, quick-win feature into the product backlog. This feature was never discussed, and your lead architect privately estimates it will add two weeks of unbudgeted work, blowing past the fixed deadline. The client views it as a simple addition, a golden feature that will validate the whole project. Your internal team is already running hot.",
    responses: [
      {
        id: "A",
        title: "Short-Circuit The Problem",
        text: "Call an emergency scope reconciliation meeting with the client lead and your manager. Present the architect's estimate and the associated deadline risk in clear, non-negotiable terms, insisting the feature must be formally logged as a change request or dropped entirely.",
        expertRationale: "While technically correct, forcing an immediate, formal confrontation can damage the relationship and make you seem inflexible. It puts the client lead on the defensive in front of your manager, which can result in political pushback.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Frame As Phase Two Value",
        text: "Schedule a brief, direct one-on-one with the client lead. Frame the feature as Phase 2 value and offer two options: deprioritize an existing low-value feature of equivalent effort, or formalise the two-week extension with an updated cost. Emphasise keeping the Phase 1 value on time.",
        expertRationale: "This is the strongest move. It validates the client's idea (The Golden Feature) while simultaneously protecting the boundary. It provides a choice (trade or pay), which is collaborative, yet firm. It protects the relationship and the original deadline.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Absorb Quietly, Plan Later",
        text: "Instruct the team to quietly absorb the extra feature into the existing two-week sprint, treating it as pre-work for the next phase. Plan to discuss the impact on quality or internal team fatigue with your Manager later. The goal is to avoid an immediate public confrontation.",
        expertRationale: "This risks setting a disastrous precedent: that the client can dictate unbudgeted work without consequence. It burdens the team and compromises quality or well-being to solve a political problem internally, not collaboratively.",
        expertRanking: 2
      }
    ],
    overall: "The best approach is B because it protects the project's schedule and budget while using a soft negotiating tactic (trade-off) to preserve the client relationship. Option A is too adversarial; option C sacrifices integrity for peace.",
    takeAway: "To protect the boundary, never say 'no' directly; offer a choice between trade-offs or a formal change request.",
  },
  {
    id: 2, 
    moduleId: 1,
    title: "The Missing Data Pipe",
    prompt: "Halfway through a system migration project, your team discovers that the crucial data cleaning and migration process for a key legacy database, which the contract explicitly placed outside your 'swim lane,' is completely unmanaged by the client's internal team. If this work isn't done, the new system launch will fail spectacularly. Your manager is on a critical site visit and unreachable for 24 hours.",
    responses: [
      {
        id: "A",
        title: "Formal Breach Notice",
        text: "Immediately write a formal email to the client sponsor, citing the contract clause that excludes the work. State clearly that the project is now at high risk due to the client's failure to manage their responsibility and request an immediate change order to bring the work under your umbrella.",
        expertRationale: "This is too reactive and sounds like blaming the client, which heightens defensiveness. While you need a formal change, this approach does not address the immediate, critical project risk and could escalate the issue unnecessarily.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Shadow Support & Log Risk",
        text: "Delegate a junior team member to shadow the client team, offering informal advice and best practices to help them get started, without taking ownership. Document all internal client confusion and slow progress as risk log entries, preparing for a change request discussion when your Manager returns.",
        expertRationale: "This is a close second. It's safe and responsible, but 'shadow support' can easily morph into unbilled, unacknowledged work. It defers the critical decision until your manager returns, allowing the immediate risk to fester.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Stopgap Fire Drill",
        text: "Stabilise the immediate crisis: have your lead engineer spend four hours creating a barebones, temporary script to handle the most critical data and set up a temporary fire drill process. This is a stopgap to maintain launch viability. Then, notify the client sponsor of the immediate, critical issue and the temporary fix, using this temporary work as leverage for a later, official change request.",
        expertRationale: "This is the most advisory-minded choice. Consultants act as partners. By spending a small, unbilled investment to stabilize the launch and immediately communicate the fix, you earn credibility and leverage for the necessary change request later.",
        expertRanking: 1
      }
    ],
    overall: "This is a close call between B and C. B is safe and C is bold. C is better because it demonstrates partnership and urgency by proactively creating a temporary fix, which then strengthens the case for a formal change request to complete the complex work.",
    takeAway: "When the client's unmanaged responsibility threatens the outcome, invest a small amount of time to stabilize and gain leverage for the inevitable change order.",
  },
  {
    id: 3, 
    moduleId: 1,
    title: "The Daily Design Tweak",
    prompt: "The client's Project Manager, a former designer, is demanding daily reviews of minor user interface details that are outside the agreed-upon wireframes and are causing massive delays in the development team's flow. Your lead developer is threatening to quit over the 'micromanagement,' but the client PM insists they are protecting 'user experience fidelity' and just trying to make the product perfect.",
    responses: [
      {
        id: "A",
        title: "Re-Establish Governance",
        text: "Schedule a short, focused meeting with the client PM and your Manager present. Present data on the cumulative time spent on out-of-scope reviews. Re-establish a governance mechanism: all design changes must be bundled for a single, weekly review against the original wireframes, with only P0 defects reviewed daily.",
        expertRationale: "This is the necessary, professional intervention. It elevates the issue to the right level, brings data to a qualitative argument, and replaces emotional friction with a structured, repeatable process. This protects the team and the schedule.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Pedantic Pushback",
        text: "Gently push back on the client PM by being incredibly detailed and pedantic about the technical effort for each minor change (e.g., That change requires recompiling three separate modules and re-running 40 hours of regression tests). This aims to make the PM weary of asking for small, frequent changes.",
        expertRationale: "This is a passive-aggressive tactic that relies on making the client feel stupid or burdensome. It might work temporarily, but it corrodes the relationship and is likely to be exposed as unhelpful jargon, leading to a loss of trust.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Secretly Bundle Changes",
        text: "Absorb the design PM's demands into the project's 'buffer' time without telling the client. Privately advise the lead developer to 'bundle' the small changes into a single daily check-in that takes no more than 30 minutes, keeping an internal risk log of all unbilled, out-of-scope work for end-of-project negotiation.",
        expertRationale: "This is dangerous; the client PM will interpret the changes as being 'easy' and increase their demands. While it buys internal peace, it creates an unmanageable expectation that small changes have no cost and requires lying to the client about effort and progress.",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective approach because it addresses the root cause: a failure in governance and process. B is confrontational, and C creates an unsustainable internal burden. The solution is structure, not avoidance.",
    takeAway: "When micromanagement drives scope creep, use data and process governance to replace emotional friction with a sustainable boundary.",
  },
  {
    id: 4, 
    moduleId: 1,
    title: "The Just One More Report",
    prompt: "Your contract is to build four specific dashboards. The client's Chief of Staff, impressed with the work, emails you a spreadsheet containing requirements for six new reports, all labelled 'critical for launch,' stating, This is just part of the data package, no change to the core scope needed. Your team knows these reports require integration with a different system, effectively doubling the original effort.",
    responses: [
      {
        id: "A",
        title: "Email The Hard Line",
        text: "Respond immediately via email, CCing your Manager and the original client sponsor. State clearly that the new reports constitute a material scope change requiring an immediate cost and schedule review, providing a preliminary, aggressive estimate that highlights the additional system integration complexity.",
        expertRationale: "This is too direct and public. While correct, it risks alienating an influential stakeholder (Chief of Staff) by immediately raising the alarm, which can undermine the goodwill earned from the initial work. It's the right message, but the wrong medium.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Phase Two Opportunity",
        text: "Schedule a brief, informal meeting with the Chief of Staff. Validate their enthusiasm and frame the new reports as an exciting Phase 2 opportunity that builds upon your current work. Use the meeting to subtly walk them through the technical dependency on the new system, creating a shared understanding of why it requires a new estimate, and offer to draft the formal change request for them.",
        expertRationale: "This wins because it manages expectations and protects the scope without saying no. By validating the client's judgement and using the 'Phase 2' language, you turn an adversarial negotiation into a discussion about sequencing and funding future work.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Value-Add Gambit",
        text: "Create two internal work streams: one for the four contracted dashboards and one for the six new reports. Tell your team to quietly start investigating the new system integration while you wait for your Manager to return from vacation, hoping to deliver the new reports as a value add surprise, which could secure the next phase of work.",
        expertRationale: "This is a close call. The intent to secure future work is good, but doing this without client acknowledgement means assuming all the risk. If the integration fails or is harder than expected, you absorb the cost and potentially miss the deadline for the original contract.",
        expertRanking: 2
      }
    ],
    overall: "B is the most consultative response. It respects the client's authority and enthusiasm while clearly demonstrating the complexity of the request, thereby creating a joint justification for a formal change request. Both A and C involve high relationship or delivery risk.",
    takeAway: "Treat unsolicited scope expansion as an opportunity to plan Phase 2, not a failure to manage Phase 1.",
  },
  {
    id: 5, 
    moduleId: 1,
    title: "The Hidden Basement",
    prompt: "You are integrating a new payroll system. Your team discovers an undocumented custom-built module used by the Legal department to handle special executive bonuses. This module relies on a data format that your new system cannot read, and the lead Legal analyst insists this process must continue exactly as is. The contract makes no mention of this exception.",
    responses: [
      {
        id: "A",
        title: "Technical Fix First",
        text: "Instruct your team to immediately allocate 40 hours to build a custom data converter/translator specifically for this Legal module, without formalising a change request, to prove that a technical solution is possible. Present the successful prototype later, along with a request for payment.",
        expertRationale: "Building the fix first is risky; you are spending unbilled time on out-of-scope work on the assumption of later payment. It compromises the project plan and could easily be viewed by the client as part of the original integration promise.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Hold The Line",
        text: "Inform the Legal department lead that their custom module is out of scope and cannot be supported. State that they must adapt their process to the new system's standard data format, or the project will proceed without integrating their unique workflow. CC the project sponsor to signal firmness.",
        expertRationale: "This is legally correct but politically disastrous. It forces a critical stakeholder to bear the entire burden of change and makes the consulting team look inflexible and unhelpful, risking the entire project's success through non-adoption.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Quantify The Gap",
        text: "Immediately quantify the extra effort (e.g., 80 hours and three-day delay) and the risk of failure if not done. Present this to the main sponsor and the Legal analyst as an immediate decision point: either the Legal team changes its process (with your support) or a formal change request is required to support the custom requirement.",
        expertRationale: "This is the most professional response. It turns an emotional demand (must continue as is) into a rational business decision by quantifying the cost and risk. It gives the sponsor the power to enforce a change on Legal or approve the expense.",
        expertRanking: 1
      }
    ],
    overall: "C is the only option that addresses the political, technical, and commercial aspects simultaneously. A sacrifices commercial integrity, and B sacrifices political goodwill. You must quantify the 'hidden basement' to make the problem visible.",
    takeAway: "Always translate undocumented scope into quantified cost and risk to turn a process problem into a sponsor's decision.",
  },
  {
    id: 6, 
    moduleId: 1,
    title: "The Budget Freeze",
    prompt: "You are leading a process redesign. The client's CFO announces a company-wide hiring and consulting budget freeze, citing poor quarterly results. Your project is specifically exempted by the CEO, but the client project manager feels pressure and asks you to voluntarily cut 15% of your remaining activities, implying they can't afford the 'full Cadillac' engagement now.",
    responses: [
      {
        id: "A",
        title: "Call The CEO's Bluff",
        text: "Immediately notify the CEO's office, citing the specific exemption they granted and the subsequent pressure from the Project Manager. Ask for an explicit, re-stated written assurance that the Project Manager must not interfere with the agreed-upon scope or budget.",
        expertRationale: "This risks making the CEO feel micromanaged or making the Project Manager look incompetent. It’s an aggressive, political move that bypasses the chain of command and could backfire by confirming the consulting team is high-maintenance.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Value-Based Trimming",
        text: "Agree to a voluntary 'scope optimisation review.' Work with the Project Manager to identify the lowest-value 15% of activities, such as deep documentation or low-priority training, and trade them out for a 5% budget cut. Use the remaining 10% of effort to create a stronger business case for the next phase of work.",
        expertRationale: "This is a close call, but ultimately the best strategy. By volunteering to 'trim the fat,' you demonstrate partnership and control the narrative. You address the Project Manager's emotional pressure while preserving the highest-value work and securing future pipeline.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Internal Scope Push",
        text: "Insist that the agreed-upon scope is necessary to achieve the promised outcomes and decline to cut any activity. Suggest that the Project Manager takes the budget pressure up their internal chain instead, as the exemption came from the top.",
        expertRationale: "This is commercially firm but politically obtuse. It fails to acknowledge the Project Manager's very real internal pressure and turns the consultant into an inflexible cost centre. It protects the contract but damages the client relationship.",
        expertRanking: 2
      }
    ],
    overall: "B is the most sophisticated option because it addresses the Project Manager's political pain without sacrificing critical outcomes. A is too heavy-handed; C is too rigid. Successful scope management involves controlled, negotiated give-and-take.",
    takeAway: "When under budget pressure, proactively trade low-value scope for high-value future work to demonstrate partnership and retain control.",
  },
  {
    id: 7, 
    moduleId: 1,
    title: "The Competitor's Shiny Toy",
    prompt: "The client's Head of Sales returns from a conference and demands an immediate integration of a new AI-powered lead scoring tool that a competitor is piloting. This capability is not in the contract, requires significant API work, and is driven purely by FOMO (Fear of Missing Out). The project deadline is inflexible.",
    responses: [
      {
        id: "A",
        title: "Immediate Integration Study",
        text: "Dedicate two senior architects for one day to produce a rapid-fire assessment of the AI tool's technical feasibility, estimated cost, and risk. Present the findings the next day, framing it as a 'build vs. buy' or 'Phase 2 vs. Phase 1' decision, complete with a formal change request for the integration.",
        expertRationale: "This is the necessary first step. By quickly and formally scoping the demand, you control the conversation and prevent the request from being treated as 'just a quick switch.' It translates the FOMO into a sober, rational business decision.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Internal Research Absorb",
        text: "Tell the Head of Sales you'll 'look into it' and secretly assign a junior developer to spend a week researching the tool's API documentation, hoping to find a quick, unbilled integration path. Only raise the issue if the integration proves impossible or risks the timeline.",
        expertRationale: "This is poor scope management. You are giving away a week of unbilled research time and creating a new internal risk without client acknowledgement. It enables the client's impulsive decision-making rather than guiding it.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Strict Deadline Warning",
        text: "Firmly inform the Head of Sales that the project deadline is fixed and that any distraction will jeopardise the main deliverables. Suggest that they commission a separate, internal task force to investigate the AI tool after your project is completed.",
        expertRationale: "This is too much of a hard pushback. While protecting the deadline, it dismisses the client's competitive anxiety and could be perceived as ignoring a strategic priority, leading to political friction and a loss of trust from the Sales leader.",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective: meet the client's urgency with a professional, time-boxed assessment that forces a rational decision. B gives away free time and C dismisses the client's strategic concerns. Both B and C avoid managing the scope directly.",
    takeAway: "When novelty drives scope creep, respond with rapid, quantifiable due diligence to turn emotional demand into a commercial decision.",
  },
  {
    id: 8, 
    moduleId: 1,
    title: "The Silent Switch",
    prompt: "You are building a client dashboard that relies on a specific internal reporting tool. You find out through a casual water cooler conversation that the client's IT department is unilaterally planning to decommission that tool next month, replacing it with a new, incompatible system. No one formally notified your team, and the change will break your work.",
    responses: [
      {
        id: "A",
        title: "Formal Stop-Work Notice",
        text: "Send a formal email to your client sponsor, CCing the CIO and your Manager, stating that work on the dashboard must immediately halt due to uncommunicated, client-side technical changes. Demand a formal, written commitment from IT to support the original system until your project completes.",
        expertRationale: "This is an overreaction. It publicly escalates a technical problem into a political crisis. While technically correct, halting work is rarely the first step. It makes the consulting team appear reactive and lacking in problem-solving skills.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Internal Damage Assessment",
        text: "Immediately instruct your technical lead to spend one day on a detailed impact analysis of the new IT system, focusing on the new API/data source. Use this internal assessment to determine whether the migration risk can be absorbed by your team without changing the contract or if a cost-increasing change request is absolutely necessary.",
        expertRationale: "This is a good preliminary step, showing internal responsibility, but it risks spending unbilled time on an issue that is entirely the client's fault. It defers communication and decision-making, which can make the consulting team look complicit in the delay.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Mitigation Option",
        text: "Schedule an informal, urgent meeting with the project sponsor and the IT lead. Present the problem not as a fault, but as an opportunity for mitigation: offer a small, scoped change request to switch to the new system, framing it as 'future-proofing' the dashboard. This shows you are solving their uncommunicated problem.",
        expertRationale: "This is a close call, but the best approach. It turns an uncommunicated failure into a controlled opportunity. By proactively offering a solution, you position yourself as a partner and secure a formal change request for the new work, preventing unbilled effort.",
        expertRanking: 1
      }
    ],
    overall: "C is the most constructive response. It quickly converts a political crisis into a commercial opportunity by proposing a solution that future-proofs the client's asset. B risks unbilled work, and A is unnecessarily adversarial.",
    takeAway: "When client-side changes impact your scope, proactively propose a solution that future-proofs their asset and justifies a formal change request.",
  },
  {
    id: 9, 
    moduleId: 1,
    title: "The Unfunded Mandate",
    prompt: "A new regulatory ruling (e.g., GDPR change, new financial compliance rule) is announced, requiring your project to suddenly implement a complex data anonymization process not in the contract. The client sponsor says, 'This is a mandatory cost of doing business, so it shouldn't require a budget increase.' The mandate will add 10 days to the timeline.",
    responses: [
      {
        id: "A",
        title: "Compliance-Based Change Order",
        text: "Agree that it is a mandatory cost of doing business. Immediately provide a clear, one-page Change Request documenting the new regulatory requirement, the 10-day delay, and the specific cost. Frame the cost not as 'extra,' but as the necessary compliance investment required to proceed with the entire project.",
        expertRationale: "This is commercially sound and strategically necessary. By agreeing on the 'mandatory' nature and translating it into a documented cost and schedule impact, you force the client to formally acknowledge the change. It is impossible to absorb the cost of a new law.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Voluntary Absorption",
        text: "Instruct the team to absorb the 10 days of work by eliminating internal testing cycles and documentation rigor. Tell the client you are committed to the original timeline and budget, but privately flag the increased delivery risk to your internal quality assurance team.",
        expertRationale: "This is dangerous and unprofessional. It compromises the quality of the project and your firm's reputation to maintain an impossible schedule. Absorbing regulatory costs sets an unsustainable precedent.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Scope Trade-Off",
        text: "Suggest a trade: propose cutting 10 days' worth of effort from the lowest-value activities in the current scope (e.g., one low-priority dashboard) to pay for the regulatory compliance work. This avoids a budget increase while maintaining the schedule.",
        expertRationale: "This is a plausible political compromise, but regulatory work often involves specialist skills and is not easily 'traded' for general scope. The trade-off may reduce the overall business value of the project, forcing the client to choose between compliance and value.",
        expertRanking: 2
      }
    ],
    overall: "A is the only defensible move. Compliance work cannot be quietly absorbed or traded for non-equivalent scope. It must be formally scoped and costed, making the client own the investment required to meet the new legal reality. B and C introduce unacceptable delivery or value risks.",
    takeAway: "Always formally scope and cost regulatory mandates, treating them as non-negotiable scope additions, even if they are mandatory costs of doing business.",
  },
  {
    id: 10, 
    moduleId: 1,
    title: "The Project’s Gravitational Pull",
    prompt: "Your project is successfully launching, and its perceived importance is growing internally at the client site. The Head of Operations, whose budget is tight, starts subtly re-routing their own team's minor internal projects—like system maintenance and small bug fixes—to your team, claiming, 'It's all part of the big launch, isn't it?' This is adding 5-10 hours of unbilled work weekly.",
    responses: [
      {
        id: "A",
        title: "The Internal Documentation Wall",
        text: "Instruct your team to politely refuse all requests not formally logged through the agreed-upon project management tool. For every out-of-scope request, provide the client team with a link to the original Scope of Work (SOW) document, creating a paper trail of refusals.",
        expertRationale: "This is rigid and ignores the political reality that 'small asks' are tests of the relationship. It makes the consulting team appear bureaucratic and unhelpful, possibly causing the Head of Operations to bypass you and complain to your sponsor.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Triage Funnel",
        text: "Establish a clear, immediate Triage Funnel process: all requests from Operations must be routed to you. You will dedicate two hours weekly to triage, assigning 90% back to Operations as 'maintenance' (client responsibility) and using the 10% you absorb as leverage for end-of-project contract renewal talks.",
        expertRationale: "This is a close call, but the most effective management strategy. It addresses the emotional need (the Head of Operations needs help) while creating a controlled funnel to protect the team. The small 'give' buys goodwill for a later, bigger ask (renewal).",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Blame The System Rule",
        text: "Tell the Head of Operations that your team's project-tracking system physically prevents them from logging anything outside the contract code. Suggest they contact your Manager directly to get an exception, thereby passing the political hot potato up the chain of command.",
        expertRationale: "This is a politically weak move that delegates the job of scope management to your boss. It uses the 'system' as an excuse, which is unprofessional and avoids the necessary boundary conversation that you should be having directly with the Head of Operations.",
        expertRanking: 2
      }
    ],
    overall: "B is the strongest because it uses a structured process (Triage Funnel) to control the flow of work while demonstrating helpfulness. A is too bureaucratic; C is a deflection. Good consultants manage the friction point directly.",
    takeAway: "Control small, creeping scope additions by funneling them through a structured triage process that validates the client's needs while protecting your team's time.",
  },
  {
    id: 11, 
    moduleId: 1,
    title: "The Shifting Sand",
    prompt: "Your project is to build a new financial reporting system based on the client's existing chart of accounts (COA) structure. Two weeks in, the Finance Director announces they are implementing a global initiative to completely restructure the COA starting next month. The new structure is unknown, but this change will invalidate all your foundational design work.",
    responses: [
      {
        id: "A",
        title: "The Two-Week Pause",
        text: "Immediately stop all foundational design and build work. Notify the sponsor that your project is on a two-week pause until the new COA structure is finalised, stating that proceeding would be a wasted effort. Use the pause to draft the necessary change request for the redesign work.",
        expertRationale: "Stopping work entirely is a high-risk move that creates unnecessary political visibility for the client's internal issue. It prioritises efficiency over relationship and may be seen as inflexible or unwilling to find interim solutions.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Abstract Design",
        text: "Instruct your team to switch from detailed build to designing the system's architecture in an abstract, COA-agnostic way for two weeks. This keeps the team utilized. Concurrently, schedule a daily meeting with the Finance Director to track the new COA progress and manage the inevitable change request later.",
        expertRationale: "This is a commercially prudent move. It protects billable time by keeping the team productive on high-level architecture that may survive the change. However, it still delays the core deliverable and the change request is deferred, not solved.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Prototype & Adapt",
        text: "Accept the risk. Continue building a basic prototype using the old COA to validate user workflows and non-COA requirements. This keeps the team engaged. Simultaneously, present a change request that covers the necessary redesign work when the new structure is revealed, using the delay as justification.",
        expertRationale: "This is the most advisory move. It ensures you don't 'burn' all the remaining budget. By continuing to deliver a valuable, non-COA-dependent prototype, you maintain momentum, keep the team motivated, and use the client's own internal change to justify the required, formal scope adjustment.",
        expertRanking: 1
      }
    ],
    overall: "C is the most balanced response. It continues to deliver value and maintain momentum despite the foundational change, which minimizes the political fallout. A is too disruptive; B delays the confrontation. The client's internal change must justify the change request, not a work stoppage.",
    takeAway: "When foundations shift, pivot to delivering non-dependent value to maintain momentum while formally scoping the inevitable redesign cost.",
  },
  {
    id: 12, 
    moduleId: 1,
    title: "The Executive Sponsor's Pet Project",
    prompt: "Your executive sponsor, the CEO, requests a small, new data visualisation to be built into your main dashboard. This specific chart is purely for the CEO’s personal use, has no clear business value for the wider organisation, and requires a specialised, unbudgeted data pull from an external legacy system. It is purely an executive 'pet project.'",
    responses: [
      {
        id: "A",
        title: "The Low-Cost Substitute",
        text: "Build a 'lite' version of the chart using data already available in the project's data pipeline, even if it's less rich than the CEO requested. Present this quickly as a value-add, and then use the CEO’s positive feedback to formally propose the full, complex version as a new, high-value change request for a future phase.",
        expertRationale: "This is a close call. It manages the political risk by giving the CEO something immediately, but it risks setting a precedent that your team will do complex work for free. However, the move to secure a formal change request later is a strong political play.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Pass to the Internal Team",
        text: "Tell the CEO's Executive Assistant that the request involves data outside the contracted scope and that they should route the request to the client's internal Business Intelligence (BI) team. Offer to share your documentation to help the BI team build the chart themselves.",
        expertRationale: "This is a safe scope protection move, but it signals a lack of partnership. It forces the CEO to use their internal team, which can make the consulting firm seem unhelpful or overly bureaucratic, risking the relationship with the most important stakeholder.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Unbilled Investment",
        text: "Quietly instruct your team to absorb the work to build the full, complex chart, treating it as an unbilled investment. Prioritize the CEO's personal request over other low-priority contracted features. Use the CEO’s gratitude to get preferential access to resources later in the project.",
        expertRationale: "Spending unbilled time on a complex, out-of-scope feature is poor commercial practice and an open invitation for future requests. It compromises the contracted deliverables to serve a single stakeholder, increasing delivery risk for everyone else.",
        expertRanking: 2
      }
    ],
    overall: "The best approach is A, as it manages the political need (giving the CEO immediate satisfaction) while creating a commercial path for the complex, expensive work. C sets a bad precedent; B is too bureaucratic for a CEO request.",
    takeAway: "Turn executive pet projects into staged opportunities: provide a 'lite' version immediately to satisfy the request, then formally scope and charge for the complex version.",
  },
  {
    id: 13, 
    moduleId: 1,
    title: "The Legacy Anchor",
    prompt: "Your contract requires you to connect your new marketing platform to the client's customer relationship management (CRM) system. Your technical discovery reveals the CRM is running on unsupported, decades-old hardware that requires a six-month, unbudgeted pre-project migration just to make it API-accessible. The client sponsor had assured you the CRM was 'modern enough.'",
    responses: [
      {
        id: "A",
        title: "The Absolute Precondition",
        text: "Write a formal letter to the client sponsor and the CIO. State that the CRM integration is impossible as per the original contract and will not be attempted until the client first completes the necessary six-month CRM migration at their own cost. Demand a formal pause until the prerequisite is met.",
        expertRationale: "While technically true, this is a confrontational and highly adversarial response. It places the entire blame and burden on the client, which is guaranteed to damage the relationship and may lead to the entire contract being reviewed or terminated.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Scoping The 'Bridge'",
        text: "Propose an alternative: scope out a temporary 'bridge' solution (a custom data synchronization service) that will bypass the legacy hardware for the duration of your project. Present this as a three-month, interim scope addition that solves the immediate problem and prevents the main project from stalling.",
        expertRationale: "This is the ideal consulting move. It solves the client's unacknowledged problem without forcing a six-month stall. By scoping the temporary bridge, you protect the overall project outcome and create a new, billed work stream that addresses the core dependency.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Phased Integration Risk",
        text: "Instruct your team to proceed with all other work and attempt to achieve a 'read-only' integration with the legacy CRM, hoping this limited functionality will be enough for the launch. Log the full integration as a high-risk item to be addressed only after the main platform is delivered.",
        expertRationale: "This is a close call. It maintains momentum, but the 'read-only' solution often fails to deliver the promised value. It kicks the core problem down the road, risking a major failure if the client demands 'write' access at the last minute.",
        expertRanking: 2
      }
    ],
    overall: "B offers the best path forward by proposing a temporary, billable solution to a dependency issue. A is too confrontational; C is too risky. Consultants find ways to move forward, even when dependencies fail.",
    takeAway: "When legacy systems unexpectedly halt a project, scope an interim 'bridge' solution to maintain momentum and avoid unbudgeted client stalls.",
  },
  {
    id: 14, 
    moduleId: 1,
    title: "The Urgent Reroute",
    prompt: "A sudden, high-profile outage hits the client's customer-facing website. The CIO pulls two of your key technical resources, a developer and a data analyst, into the crisis response room, saying, 'You're the best problem solvers we have; this is more critical than your planned work today.' Your original project is now three days behind schedule, and your manager is out sick.",
    responses: [
      {
        id: "A",
        title: "Demand Immediate Return",
        text: "Immediately inform the CIO via a strongly worded email that pulling contracted resources without formal agreement is a breach of the SOW and that your project is now delayed. Demand the resources be returned within two hours to prevent further schedule slippage.",
        expertRationale: "This is politically unwise. During a crisis, the client's priority is the crisis, not your contract. Being rigid makes the consulting team look unsupportive and damages the relationship with the CIO, who is likely under immense pressure.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Track & Negotiate Later",
        text: "Allow the resources to help with the crisis. Instruct them to meticulously track every hour spent on the crisis and document their contribution. Use the documented hours later as non-negotiable leverage to secure a billable change request for the delay and for future 'crisis support' work.",
        expertRationale: "This is a close call. While tracking time is essential, allowing the unbilled work to proceed risks the client viewing this as expected service. It solves the immediate problem but defers the commercial conversation, weakening your position.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Support Offer",
        text: "Go to the crisis room and speak with the CIO. Frame the resource allocation as an immediate, one-day 'crisis support' service, and offer to draft a one-day, fixed-price change request for that support. This acknowledges the urgency and formalises the cost of the distraction and delay on the original project.",
        expertRationale: "This is the best move. It acts in the spirit of partnership by supporting the crisis but immediately converts the unbudgeted time into a commercial opportunity. This sets a precedent that crisis support is valued and paid for.",
        expertRanking: 1
      }
    ],
    overall: "C is the most effective because it formalises the scope change caused by the crisis, maintaining commercial integrity while supporting the client's urgent need. A is adversarial; B is passive and risks unbilled work.",
    takeAway: "When a client crisis pulls your resources, immediately scope the 'crisis support' as a paid change request to maintain commercial control and prove partnership.",
  },
  {
    id: 15, 
    moduleId: 1,
    title: "The Analyst’s Ambition",
    prompt: "The client’s junior analyst working with your team sees an opportunity to expand your data model to include sophisticated predictive analytics that they recently learned about in an online course. This is far beyond the contract's simple descriptive analytics scope and would add 4-6 weeks of unbudgeted work, but the analyst is highly enthusiastic and says the client sponsor secretly supports it.",
    responses: [
      {
        id: "A",
        title: "Elevate The Vision",
        text: "Schedule a discussion with the analyst and the client sponsor. Frame the predictive analytics as an exciting 'Visionary Phase 2' project that builds on the current work. Commend the analyst's initiative, but insist that the current Phase 1 must be delivered on time and that the new work requires a formal scoping and change request.",
        expertRationale: "This is the necessary leadership move. It validates the client's ambition (the analyst's idea) while professionally protecting the current project boundary. By framing it as 'Phase 2,' you secure the current project's delivery and create a future pipeline.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Internal Veto",
        text: "Firmly tell the analyst that their idea is out of scope and that they must not mention it again, or they will jeopardise the project and compromise your firm's reputation. Do not communicate this to the client sponsor, hoping the analyst drops the idea quietly.",
        expertRationale: "This is poor relationship management. It crushes the analyst's enthusiasm, which is a key source of client goodwill. If the sponsor is truly supportive, the analyst will feel undermined, and the issue will resurface as a political problem.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The 'Proof of Concept' Give",
        text: "Allow the analyst to dedicate two days of your team's existing buffer time to build a small proof of concept (POC) to test the idea's feasibility. Use the POC's complexity to convince the client sponsor later that the full implementation requires a formal change request and significant time.",
        expertRationale: "This is a tempting compromise, but spending unbilled time on a complex feature is risky. It opens the door to 'free work' expectations and can still derail the timeline if the analyst insists the full project is only 'a little more' work after the successful POC.",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional. It fosters the relationship by praising the analyst's ambition while maintaining commercial discipline by protecting the current project boundary. B is crushing; C is commercially risky.",
    takeAway: "Validate the ambition behind unsolicited new ideas, but channel the complexity into a formal, future-phased change request.",
  },
  {
    id: 16, 
    moduleId: 1,
    title: "The Unforeseen Iceberg",
    prompt: "During deep dive discovery, your team uncovers a critical, fundamental flaw in the client's existing customer segmentation. This flaw, if unaddressed, will make the entire new marketing strategy (your project deliverable) useless. Fixing it is a separate, six-week data restructuring effort, which is clearly outside the scope of the strategic advisory contract.",
    responses: [
      {
        id: "A",
        title: "Deliver With Caveats",
        text: "Deliver the marketing strategy as contracted, but include a prominently placed, written caveat warning that the implementation will be fundamentally flawed unless the underlying segmentation issue is fixed. This protects your firm legally but not politically.",
        expertRationale: "This is commercially safe but relationship-damaging. While it protects your contract, the client will rightly feel you delivered a solution they cannot use. This leads to massive political fallout and the end of the relationship.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Scope The Fix Immediately",
        text: "Immediately pause the strategy work and schedule a meeting with the client sponsor. Present the issue as a critical, unbudgeted pre-requisite, not a scope change. Offer a proposal to complete the six-week data restructuring fix, framing it as the necessary foundational 'Phase 0' investment to ensure the strategic project's success.",
        expertRationale: "This is the best response. It stops the team from doing useless work and immediately translates the unforeseen risk into a billable, necessary fix. By framing it as a prerequisite (Phase 0), you elevate its importance and justify the cost/delay.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Informal Internal Suggestion",
        text: "Inform the client's internal data team leader about the flaw and offer informal advice on how to fix it over the next six weeks. Continue with your strategy work as planned, hoping the internal team can fix the problem concurrently without impacting your deadline.",
        expertRationale: "This is a close call. While collaborative, it offloads a critical project dependency onto an internal team without formal accountability. If the internal team fails to fix it, your project will fail, but the client will blame you for not elevating the risk properly.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner because it addresses the core client problem by proposing a scoped, billable solution. C is too risky; A is politically disastrous. Good consultants address the icebergs they uncover.",
    takeAway: "When discovery uncovers a fatal flaw, immediately re-scope it as a critical, foundational prerequisite (Phase 0) to ensure the contracted work delivers value.",
  },
  {
    id: 17, 
    moduleId: 1,
    title: "The Co-pilot's Suggestion",
    prompt: "Your project involves integrating two systems for a joint venture partner. The partner’s lead engineer, who is your primary technical counterpart, suggests a slight design change in the system handshake that simplifies his team's work by 20% but adds 10% complexity to your team's implementation, requiring two days of unbudgeted work from your lead architect.",
    responses: [
      {
        id: "A",
        title: "Immediate Veto",
        text: "Firmly tell the partner's engineer that the contract specifies the original design and that the change is an out-of-scope risk that you cannot take on. Insist they adhere to the original, documented interface specification.",
        expertRationale: "This is commercially safe but sacrifices a valuable relationship with a key technical partner. A 20% saving for the partner is a huge incentive, and vetoing a small cost to your team makes you look rigid and uncollaborative, potentially leading to future passive-aggressive friction.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Absorb and Leverage",
        text: "Instruct your lead architect to absorb the two days of extra work quietly. Use the good faith earned from this concession to ask the partner's engineer for a favour later in the project, such as faster-than-contracted data access or priority bug fixing.",
        expertRationale: "This is a common tactic, but it creates internal risk by doing unbudgeted work and relies on a future, non-contracted favour. While it builds goodwill, it is poor commercial management and is only a defensible choice if the relationship is highly fragile.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Negotiated Swap",
        text: "Accept the change and immediately inform the joint project sponsor of the negotiated trade. Frame it as: 'We are absorbing two days of architectural time (our cost) in exchange for a 20% future maintenance saving (client/partner benefit). We need a two-day schedule extension for this benefit.'",
        expertRationale: "This is the ideal approach. It is collaborative (accepting the change), commercially sound (getting a schedule extension for the two days of unbudgeted work), and politically smart (presenting a win-win to the sponsor). You secure the long-term benefit for a short-term, negotiated cost.",
        expertRanking: 1
      }
    ],
    overall: "C is the most professional because it formalises the scope change and delay, ensuring the long-term benefit is purchased with a short-term, controlled expense. A is too rigid; B is commercially risky.",
    takeAway: "When partners suggest scope changes, convert their long-term gain into a short-term, negotiated concession (like a schedule extension) for your team.",
  },
  {
    id: 18, 
    moduleId: 1,
    title: "The Vague Contract",
    prompt: "Your contract vaguely defines 'training' as a single, three-hour session for key users. The client's Head of HR insists this must be expanded to include detailed, one-on-one follow-up for 50 'super users' and two days of custom-created training videos. This new demand stems from the contract's ambiguity and would add 10 days of work.",
    responses: [
      {
        id: "A",
        title: "Quantify and Formalise",
        text: "Immediately quantify the 10 days of additional work required to meet the Head of HR's expectations. Present the two options to the client sponsor: adhere strictly to the original three-hour scope, or sign a formal change request for the 10 days of custom training, citing the contract ambiguity as the root cause.",
        expertRationale: "This is the most direct and necessary solution for resolving contractual ambiguity. By immediately quantifying the difference, you turn a subjective dispute into a clear, binary business decision for the sponsor: stick to the letter or pay for the intent.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Super User Trade",
        text: "Offer a trade: agree to the one-on-one super user training, but only if the Head of HR accepts responsibility for creating the training videos using their internal resources. This keeps the timeline intact and splits the burden.",
        expertRationale: "This is a tempting compromise, but it risks the quality of the videos (HR is likely not the expert) and still introduces unbudgeted time for your team. The compromise may fail to deliver the expected outcome, leading to client dissatisfaction.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Internal Absorption",
        text: "Instruct your team to absorb the one-on-one training by reducing project documentation and internal quality checks. Treat the custom videos as a separate, unbudgeted risk that you will address if time permits, maintaining the external facade of full scope delivery.",
        expertRationale: "This is poor scope management. It uses a budget intended for project quality to pay for client-side training needs. It sets a dangerous precedent that the consulting team will fix all client's internal capability gaps for free.",
        expertRanking: 3
      }
    ],
    overall: "A is the only sustainable move for resolving scope ambiguity. B and C involve unbudgeted compromises that compromise either quality or future expectation. The contract boundary must be protected with commercial discipline.",
    takeAway: "Resolve scope ambiguity by immediately quantifying the difference between the literal contract and the client's expectation, forcing a choice.",
  },
  {
    id: 19, 
    moduleId: 1,
    title: "The Last-Minute 'Test'",
    prompt: "Three days before the scheduled go-live, the client's Chief Marketing Officer (CMO) demands a full-scale, live A/B test of the new system against the old one for a week. Your contract only calls for internal UAT (User Acceptance Testing) and a soft launch. The A/B test requires significant, unbudgeted integration and monitoring work from your team.",
    responses: [
      {
        id: "A",
        title: "Immediate Refusal",
        text: "Refuse the request immediately, citing the contractual UAT scope and the extreme risk of introducing a complex A/B test three days before go-live. State that any attempt to proceed with the test will void your firm's liability for project success.",
        expertRationale: "This is legally strong but politically weak. It ignores the CMO's genuine need for business validation and creates a perception of an inflexible consultant unwilling to support business needs at the moment of truth. It is an act of self-preservation, not partnership.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scoped Validation",
        text: "Offer a compromise: create a small, contained 'smoke test' that acts as an informal A/B test on a small user segment for one day. Then, scope and present a formal change request for the full, complex A/B test to occur one week after go-live, using the first week of live data.",
        expertRationale: "This is the ideal advisory move. It validates the CMO's need for real-world testing (via the smoke test) while protecting the deadline. It then translates the full, complex demand into a future, billable work stream, proving that you are a partner in validation.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Buffer Gamble",
        text: "Commit to deploying the full A/B test by using all remaining internal project buffer time. Do not charge extra, but secretly re-allocate one key resource from documentation duties to run the test. If the test causes a delay, it will be blamed on the 'unforeseen complexity of the client's systems.'",
        expertRationale: "This is commercially poor practice. It sacrifices project quality (documentation) and blames the client for a choice made internally. It enables the client's last-minute demands and creates an expectation of free, complex work.",
        expertRanking: 2
      }
    ],
    overall: "B is the strongest because it meets the client's emotional need for validation while protecting the deadline and commercial integrity. A is too adversarial; C is commercially unsound. The core principle is to manage the scope through staging.",
    takeAway: "Respond to urgent, out-of-scope validation demands by providing a quick, contained compromise and scoping the full request for a post-launch, billable phase.",
  },
  {
    id: 20, 
    moduleId: 1,
    title: "The Unrealistic Promise",
    prompt: "The client's Head of IT informally promised a senior manager that your new system would integrate 'easily' with a third-party vendor's complex legacy system, even though your contract only required a data transfer, not a full two-way integration. Now, that senior manager expects the full integration, and the Head of IT is denying any recollection of the promise.",
    responses: [
      {
        id: "A",
        title: "Cite The SOW",
        text: "Go directly to the senior manager and present the original SOW, highlighting the single-direction data transfer clause. Politely state that the two-way integration requires a new technical discovery and a formal change request, and that you are happy to start the process.",
        expertRationale: "This is commercially clean but risks damaging the relationship between the client's senior manager and the Head of IT, who may then collude to blame the consulting firm. It's too black-and-white, ignoring the internal political mess.",
        expertRanking: 2
      },
      {
        id: "B",
        title: "The Mediation Request",
        text: "Schedule a private mediation meeting with the Head of IT and your client sponsor. Present the problem not as a broken promise, but as an opportunity for the sponsor to clarify the core objective (data transfer vs. full integration) and force the Head of IT to own the technical trade-offs required to achieve the full scope.",
        expertRationale: "This is too political. It forces the sponsor to mediate an internal dispute between two of their own people, which is not the consultant's job. It makes the consulting firm look like an instigator of internal drama, risking the relationship.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Phased Integration Proposal",
        text: "Acknowledge the value of the full integration. Propose a phased approach: deliver the contracted data transfer first, and immediately scope a formal change request for the complex, two-way integration as a necessary, billable 'Phase 1.5' project. This avoids blaming the Head of IT and preserves the main deadline.",
        expertRationale: "This is the ideal approach. It addresses the senior manager's expectation (full integration is possible) without challenging the Head of IT (it's phased) and without compromising the current project. It maintains professional distance from the internal political mess while securing new work.",
        expertRanking: 1
      }
    ],
    overall: "C is the most sophisticated political and commercial response. It satisfies the need for the full scope to be addressed while keeping the Head of IT out of direct conflict with their senior manager. A is too rigid; B is overly political.",
    takeAway: "When expectations are inflated by client promises, manage scope by phasing the expectation into a future, formal, billable change request.",
  },
  {
    id: 21, 
    moduleId: 1,
    title: "The Second Opinion",
    prompt: "After presenting your final strategic recommendation, a newly appointed Vice President of Strategy (who was not involved in the original project design) critiques your work in front of the sponsor, stating it doesn't align with 'new' company priorities. This VP asks for a two-week delay so they can incorporate 'a few quick adjustments' to your final deliverables.",
    responses: [
      {
        id: "A",
        title: "The Structured Review",
        text: "Immediately agree to the two-week delay and propose a structured, four-day 'deep dive' review, involving the VP, the original sponsor, and your project lead. Use this forum to systematically compare the VP’s new priorities against the original, signed objectives, creating a formal change log for all requested adjustments.",
        expertRationale: "This is the necessary professional move. It acknowledges the VP's authority and new priorities while immediately structuring the change process. It forces the VP to formally log their changes and for the sponsor to approve the delay and potential cost.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Absorb The Loss",
        text: "Quietly instruct your team to work overtime (unbilled) to incorporate the VP's requests within the original deadline. View this as a necessary political expense to secure future buy-in from the new influential leader and avoid a confrontation with the sponsor.",
        expertRationale: "This is poor commercial practice. It normalises free, unbudgeted work and sacrifices the team's well-being for a political gain that is not guaranteed. If the changes are too complex, it risks a failure that will be blamed on the consulting team.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Sponsor's Defense",
        text: "Immediately ask the original sponsor to intervene. Politely state that the project was executed against their signed objectives and that the VP's request fundamentally changes the deal. Ask the sponsor to either reject the VP’s request or formally approve the delay and cost increase in writing.",
        expertRationale: "This is a close call. While it forces the issue to the right level, it forces the sponsor into an internal political conflict, which they may resent. The consultant is seen as the inflexible party, rather than the facilitator of the necessary change.",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective. It controls the scope change process while validating the VP's role. C forces the sponsor to fight a political battle; B compromises the commercial and quality integrity of the project.",
    takeAway: "Respond to post-delivery scope creep by immediately imposing a structured governance process that logs and justifies all deviations from the original objectives.",
  },
  {
    id: 22, 
    moduleId: 1,
    title: "The Quick Fix That Isn't",
    prompt: "Your project involves consolidating three different customer service systems. The client's business analyst proposes a 'quick fix' to save two days: using a temporary, manual spreadsheet process for a complex data validation step. You know this manual process will be error-prone and will eventually lead to 10 days of costly, unbudgeted clean-up for the client post-launch.",
    responses: [
      {
        id: "A",
        title: "Formal Risk Log Entry",
        text: "Agree to the client's manual 'quick fix' but immediately log a severe risk in the shared project risk log. Detail the 10-day clean-up cost and insist the client analyst formally signs off on accepting the risk, legally protecting your firm from the eventual error.",
        expertRationale: "This protects your firm legally but not politically. The client will still be unhappy when the errors occur, and the consulting firm will be seen as having enabled a bad decision. It makes you look rigid and focused on blame.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Quantify Failure-Avoidance",
        text: "Immediately quantify the 10-day clean-up cost in dollar terms, comparing it to the two-day effort required to build a permanent, automated solution. Present this to the sponsor, framing the automated solution as an immediate, two-day 'value-add' investment that prevents a guaranteed failure.",
        expertRationale: "This is the strongest advisory move. It translates the business analyst's short-sighted choice into a clear, rational cost-benefit analysis for the sponsor. By showing the high cost of failure, you justify the necessary two-day scope increase (or absorption) to avoid a major problem.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Internal Proof of Error",
        text: "Quietly instruct your team to build the two-day automated solution during the next sprint by cutting internal documentation time. If the client complains, use the automated solution as evidence that the manual fix was error-prone, but do not charge for the solution.",
        expertRationale: "This is a close call. It avoids the argument and delivers the quality solution, which is good. However, it compromises project integrity (documentation) and normalises unbilled work, setting a bad precedent for future interactions.",
        expertRanking: 2
      }
    ],
    overall: "B is the most powerful. It leverages financial quantification to manage scope. You use the cost of failure to justify the cost of the necessary fix, which is the definition of advisory work. A and C miss this opportunity.",
    takeAway: "The best way to manage scope creep that compromises quality is to quantify the high cost of failure and use it to justify the necessary fix.",
  },
  {
    id: 23, 
    moduleId: 1,
    title: "The CEO’s Anecdote",
    prompt: "During a project update, the CEO casually mentions a recent personal experience they had with a competitor's product, saying, 'Our new system should be able to do this simple thing they did.' This simple thing requires integrating a totally new external API, which is a six-week, unbudgeted scope addition. The CEO clearly views it as a simple suggestion.",
    responses: [
      {
        id: "A",
        title: "The Deferral",
        text: "Acknowledge the CEO's idea, call it a great feature, and say, 'We will immediately add this to the feature backlog for prioritisation in Phase 2.' Do not quantify the effort or the cost increase, hoping the CEO forgets the request.",
        expertRationale: "This is a common tactic, but it is passive scope management. It creates a future risk, as the CEO may remember the request and be unhappy when Phase 2 starts without it. It avoids the necessary conversation about cost and complexity.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Direct Quantification",
        text: "Immediately and politely state, 'That's a powerful idea. To implement that requires integrating a new external API, which we estimate will add six weeks to the schedule. We can provide a detailed change request proposal by the end of the day.'",
        expertRationale: "This is commercially firm but politically risky for a CEO-level discussion. By immediately imposing a large cost and time penalty, you risk making the CEO feel that their ideas are a burden, not a welcome strategic input.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Scoped Prototype",
        text: "Agree that the feature is valuable. Offer to create a non-functional 'click-through' prototype of the feature (one day of unbilled time) to help the CEO visualise the experience. Use the prototype to clearly demonstrate the complexity, which then justifies a formal, six-week change request for the real implementation.",
        expertRationale: "This is the best response. It validates the CEO's vision while using a low-cost, professional deliverable (the prototype) to illustrate the high technical complexity. This prevents the CEO from viewing the scope change as merely bureaucratic.",
        expertRanking: 1
      }
    ],
    overall: "C is the most consultative. It engages the CEO's vision and uses a tangible deliverable (the prototype) to justify the commercial scope boundary. A is passive; B is too confrontational for a senior executive request.",
    takeAway: "When executives make off-the-cuff scope requests, use a low-cost, rapid prototype to demonstrate the true complexity and justify the necessary change request.",
  },
  {
    id: 24, 
    moduleId: 1,
    title: "The Missing Manual",
    prompt: "Your project requires understanding the client's undocumented, highly customized sales compensation model. You budgeted five days for knowledge transfer, but the internal expert retired last week, and the only available material is a collection of confusing, conflicting spreadsheets. You now estimate this discovery will take 15 days, delaying the final compensation system build by 10 days.",
    responses: [
      {
        id: "A",
        title: "The Discovery Change Request",
        text: "Immediately notify the client sponsor of the critical knowledge gap and the 10-day delay. Offer a formal change request to increase the discovery scope by 10 days, proposing to hire a specialist contractor (on the client's dime) to reverse-engineer the compensation model to mitigate the risk.",
        expertRationale: "This is the necessary professional move. It translates the client's internal failure (loss of an expert) into a clear, quantifiable cost and risk that the client must formally accept. The consulting firm cannot absorb the cost of the client's knowledge gap.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Low-Quality Guess",
        text: "Proceed with the five days of budgeted knowledge transfer, making educated guesses where the spreadsheets conflict. Document the 'assumptions' heavily in the final documentation and include a severe legal waiver stating that the system is based on an unvalidated model.",
        expertRationale: "This is a close call. It maintains the schedule but risks delivering a system that fundamentally fails on day one. While it protects the firm legally, it is a poor outcome for the client and the relationship.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Internal Absorb",
        text: "Instruct your team to absorb the extra 10 days of discovery by eliminating all project buffer and re-allocating time from low-priority documentation. Do not notify the client sponsor, hoping that the delay can be hidden by compressing other project activities.",
        expertRationale: "This is poor management. It compromises the project's quality (buffer and documentation) and puts the internal team under immense pressure to cover for a client-side failure. It sets a dangerous precedent for future projects.",
        expertRanking: 3
      }
    ],
    overall: "A is the most defensible. The client's loss of a key expert is a quantifiable event that must be addressed with a scope change. B delivers a flawed system; C compromises quality. The consultant must guide the client to pay for their knowledge deficit.",
    takeAway: "When a client's knowledge gap creates a scope risk, immediately quantify the delay and cost, forcing a change request for a formal knowledge recovery effort.",
  },
  {
    id: 25, 
    moduleId: 1,
    title: "The Easy Data Port",
    prompt: "You are tasked with moving one database to the cloud. The client’s data engineer casually asks you to also port a second, smaller, non-critical database, saying, 'The data structure is identical; it will be an easy copy-paste and look great for the status report.' Your lead engineer estimates it will add three days of highly specialized, unbudgeted security compliance work.",
    responses: [
      {
        id: "A",
        title: "Unbilled Favor",
        text: "Instruct your engineer to quietly absorb the three days of work by reducing internal quality checks. Treat this as an unbilled favor for the data engineer to build personal goodwill, which can be leveraged for faster data access later in the project.",
        expertRationale: "Giving away three days of highly specialized security work is a major commercial failure. It also normalizes unbudgeted work and risks the integrity of the project by cutting internal quality checks.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scoped Compliance Fee",
        text: "Acknowledge the simplicity of the data port but immediately state that the project's security compliance mandates a three-day, unbudgeted review for all additional databases. Offer a change request to formally add the database and the compliance work, framing it as a necessary 'security insurance' cost.",
        expertRationale: "This is the best response. It validates the client's technical view (easy copy-paste) but introduces the professional reality (security/compliance cost). By framing it as 'security insurance,' you justify the cost and protect your firm's liability.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Technical Veto",
        text: "Cite your firm's internal policy that prevents adding any new scope without a formal, written change request. Refuse the request entirely and insist the client’s data engineer must follow the protocol.",
        expertRationale: "This is safe but bureaucratic. It risks damaging the personal relationship with the data engineer, who is your day-to-day counterpart. It makes the consulting firm look like an inflexible rule-follower instead of a solution-oriented partner.",
        expertRanking: 2
      }
    ],
    overall: "B is the most consultative. It validates the client's assumption of simplicity while professionally introducing the required complexity and cost. A is a commercial failure; C is too rigid. Successful scope management addresses reality over perception.",
    takeAway: "When client requests seem simple but have hidden complexity, introduce the necessary scope by framing it as a mandatory compliance or security insurance cost.",
  },
  {
    id: 26, 
    moduleId: 1,
    title: "The Premature Celebration",
    prompt: "The client's VP of Marketing, excited by a successful beta test, announces at an all-hands meeting that the new platform will launch next week with an ambitious, two-week, full-scale external marketing campaign. Your contract specifies a quiet, soft launch with a single press release, and your team is not budgeted for a two-week campaign support effort.",
    responses: [
      {
        id: "A",
        title: "Internal Scope Absorption",
        text: "Quietly instruct your team to work overtime (unbilled) to provide the necessary two weeks of support. Do not raise a change request, viewing this as a necessary political expense to support the client's high-visibility moment and secure future work.",
        expertRationale: "This is a major commercial failure. Providing two weeks of full-scale campaign support is a massive scope addition. Absorbing this cost is an unacceptable precedent that compromises the team and the firm's commercial integrity.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Immediate Contradiction",
        text: "Send an immediate, high-priority email to the VP of Marketing, CCing the original sponsor, stating that the announcement is premature and contradicts the signed contract's soft launch plan. Demand a public retraction of the launch date.",
        expertRationale: "This is politically disastrous. It publicly undermines a senior executive's enthusiasm and makes the consulting firm look like a barrier to client success, risking the entire relationship and project goodwill.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Scoped Campaign Support",
        text: "Immediately meet with the VP of Marketing one-on-one. Validate their enthusiasm and offer to provide a formal, fixed-price change request for two weeks of launch support, framing it as the 'necessary professional support to ensure the success of your exciting new campaign.'",
        expertRationale: "This is the strongest move. It validates the client's enthusiasm and converts the unsolicited commitment into a billable scope addition. This protects the project boundary while showing partnership and commitment to the client's ambition.",
        expertRanking: 1
      }
    ],
    overall: "C is the most professional. It respects the client's political reality (the public announcement) while maintaining commercial discipline. A is too costly; B is too politically destructive. The goal is to charge for the new reality.",
    takeAway: "When the client publicly expands the scope, immediately convert that public commitment into a formal, billable support package to maintain commercial control.",
  },
  {
    id: 27, 
    moduleId: 1,
    title: "The Unspoken Assumption",
    prompt: "Your project involves integrating a system that is assumed to run on the client’s existing server infrastructure. Two weeks into the project, you discover the server has insufficient memory and that the new system requires a six-day, unbudgeted server upgrade. The client sponsor claims they 'assumed' your firm would check this during the initial planning phase.",
    responses: [
      {
        id: "A",
        title: "The Responsibility Breakdown",
        text: "Create a simple, one-page document detailing the client's explicit responsibilities (e.g., infrastructure provision) versus your firm's responsibilities (e.g., software installation). Present this to the sponsor, proving that the infrastructure upgrade is their six-day, unbudgeted cost.",
        expertRationale: "This is the necessary professional move. It translates a vague, emotional argument ('I assumed') into a clear, documented commercial boundary. The client must own their infrastructure responsibilities before the project can proceed.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The 'Goodwill' Absorb",
        text: "Instruct your team to absorb the six-day upgrade cost by working overtime (unbilled), treating it as a necessary 'goodwill' investment to avoid a confrontation over the initial planning phase, which may have been slightly weak on this point.",
        expertRationale: "This is a costly concession. Absorbing six days of complex, out-of-scope work sets a precedent that your firm will pay for the client's infrastructure failures. It is poor commercial practice.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Internal Trade",
        text: "Offer a trade: agree to manage the six-day server upgrade at your firm's cost if the client agrees to reduce the project's future documentation scope by an equivalent amount. This keeps the client happy and protects the budget but compromises a low-visibility deliverable.",
        expertRationale: "This is a close call. Trading low-visibility deliverables (documentation) for high-visibility necessities (infrastructure) is often a necessary political move. However, it still means absorbing the client's infrastructure cost, which is a major concession.",
        expertRanking: 2
      }
    ],
    overall: "A is the most defensible. The client's assumption about their own infrastructure must not become the consulting firm's unbudgeted cost. The documentation boundary must be enforced by facts and clarity.",
    takeAway: "Resolve scope based on unspoken assumptions by creating a clear, documented breakdown of explicit responsibilities and using it to enforce the commercial boundary.",
  },
  {
    id: 28, 
    moduleId: 1,
    title: "The Security Gate",
    prompt: "Your project is ready for final deployment. The client's Chief Information Security Officer (CISO) introduces a new, mandatory, unbudgeted security penetration test (pentest) that adds five days to the timeline and requires five days of your team's unbudgeted, specialized compliance support. The CISO insists this is a non-negotiable step.",
    responses: [
      {
        id: "A",
        title: "The Pentest Veto",
        text: "Refuse to participate in the pentest, citing the original contract's scope, which did not include external security testing. State that the client must delay the launch and conduct the test using their own internal resources.",
        expertRationale: "This is politically risky. It frames your firm as opposing a critical security step and risks the relationship with the CISO, an important stakeholder. The client may view this as an attempt to hide security flaws.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scoped Compliance Support",
        text: "Acknowledge the CISO's mandate. Offer to provide the five days of specialized support, but immediately provide a change request to the sponsor for the full five days of cost and the corresponding five-day delay, framing it as 'mandatory compliance enablement' of the new system.",
        expertRationale: "This is the most professional response. It validates the CISO's non-negotiable need while immediately converting the unbudgeted work into a billable scope addition. This protects the project boundary and the commercial integrity of the firm.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Delay Absorption",
        text: "Agree to the five-day pentest and instruct your team to absorb the work by eliminating all internal project buffer. Do not charge for the work, viewing this as a necessary, unbudgeted investment to appease the CISO and prevent a project derailment.",
        expertRationale: "This is a close call. While it avoids conflict, it sets a dangerous precedent for future security requirements and compromises the project's integrity by removing necessary buffer time. It is a major commercial concession.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. The non-negotiable nature of the security mandate must be acknowledged, but the client must pay for the support required to meet that mandate. A is adversarial; C is commercially unsound.",
    takeAway: "When security or compliance mandates introduce new scope, immediately convert the required support into a formal, billable change request.",
  },
  {
    id: 29, 
    moduleId: 1,
    title: "The Hand-Off Headache",
    prompt: "Your contract includes a two-day formal knowledge transfer to the client's internal support team before go-live. You discover the internal support team is completely untrained and requires a full two weeks of hands-on mentoring and documentation refinement to be capable of supporting the new system. The client insists this is part of a proper 'hand-off.'",
    responses: [
      {
        id: "A",
        title: "The Contractual Boundary",
        text: "Conduct only the contracted two-day knowledge transfer session. Formally document the internal team's lack of readiness and present a severe risk log entry to the sponsor, stating that the project is at high risk due to the client's internal capability gap.",
        expertRationale: "This is legally correct but politically disastrous. It ensures your firm is protected when the support team fails, but the client will still blame the 'poor handover' by the consultant. It is not an advisory, partner-oriented approach.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Full Absorb",
        text: "Absorb the full two weeks of support time by working overtime (unbilled) and using all internal project buffer. Do not raise a change request, viewing this as necessary, unbudgeted effort to ensure project success and maintain goodwill.",
        expertRationale: "This is a major commercial failure. Two weeks of full-time, hands-on mentoring is a massive scope addition. Absorbing this cost is an unacceptable precedent and severely compromises the team's well-being and project integrity.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Mentoring Service Proposal",
        text: "Offer a compromise: immediately conduct the two-day knowledge transfer as planned. Then, propose a formal, fixed-price 'Mentoring and Transition Service' for two weeks, framing it as the necessary bridge to build the internal team's confidence and capability.",
        expertRationale: "This is the ideal approach. It acknowledges the client's real need (capability gap) and converts the unexpected scope into a billable, structured service. This protects the project boundary and ensures the client pays for their internal deficit.",
        expertRanking: 1
      }
    ],
    overall: "C is the most professional. It validates the client's need for a successful transition while ensuring the firm is compensated for the unbudgeted work. A is too adversarial; B is commercially unsound.",
    takeAway: "When a capability gap threatens the hand-off, immediately scope a billable 'Transition Service' to ensure the client pays for their internal deficit.",
  },
  {
    id: 30, 
    moduleId: 1,
    title: "The Vendor's Value-Add",
    prompt: "The client's third-party software vendor, who is critical to your implementation, announces a 'free value-add' feature that the client sponsor immediately demands be incorporated into your project. The feature requires a week of your team's unbudgeted integration work and destabilizes the existing architecture.",
    responses: [
      {
        id: "A",
        title: "The 'Hidden Cost' Analysis",
        text: "Conduct a rapid, one-day internal analysis of the vendor's 'free' feature. Present the findings to the sponsor, detailing the one week of integration cost, the architecture risk, and a formal change request that documents the work and the associated risk to the timeline.",
        expertRationale: "This is the necessary professional move. It translates the vendor's 'free value-add' (a commercial strategy) into a clear, quantified 'hidden cost' for the client. The client must formally acknowledge and pay for the distraction.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Blame The Vendor Veto",
        text: "Immediately inform the client sponsor that the vendor's change is destabilizing and refuse to integrate it. State that the vendor must provide a stable, fully tested API before your team will even consider the integration.",
        expertRationale: "This is commercially safe but politically awkward. It forces the client to manage a dispute between two external parties. The client may view the consulting firm as the inflexible one, rather than the vendor as the source of instability.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Internal Absorb",
        text: "Absorb the week of unbudgeted work by using internal buffer and reducing documentation scope. Do not raise a change request, viewing this as a necessary concession to maintain the client's enthusiasm for the vendor's technology.",
        expertRationale: "This is poor commercial management. Giving away a week of complex integration work sets a dangerous precedent. It sacrifices project quality (documentation) to cover for a vendor's unbudgeted distraction.",
        expertRanking: 3
      }
    ],
    overall: "A is the most effective. It exposes the 'hidden cost' of the vendor's 'free' feature and ensures the client pays for the distraction. B is too adversarial; C is commercially unsound.",
    takeAway: "Always translate a third-party 'free value-add' into a quantifiable 'hidden cost' and use a change request to protect your project boundary.",
  },
  {
    id: 31, 
    moduleId: 1,
    title: "The Emergency Stop",
    prompt: "A new industry-wide security regulation (PCI compliance change, for example) is announced mid-project. The client's legal team declares an immediate, mandatory two-week freeze on all code deployment until the new legal requirements are fully reviewed, which is outside the project's planned timeline.",
    responses: [
      {
        id: "A",
        title: "The Legal Veto",
        text: "Challenge the legal team's mandate. Propose a compromise where you continue development in a quarantined environment, arguing that a complete deployment freeze will jeopardize the final deadline and that the legal review should be conducted concurrently.",
        expertRationale: "This is politically unwise. Challenging a legal/compliance mandate from the client's own team is seen as high-risk and reckless. The consultant should defer to the client's internal compliance requirements, not challenge them.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Compliance Task Force",
        text: "Agree to the freeze. Immediately scope a new, billable change request for a 'Compliance Task Force' to work with the client's legal team, using the two weeks to proactively design and document the necessary new compliance features and justify the inevitable two-week delay.",
        expertRationale: "This is the most professional response. It acknowledges the mandatory delay but turns the downtime into a billable, productive scope addition. This protects the project from being a passive victim of the delay and formalizes the cost of compliance.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Passive Delay",
        text: "Agree to the freeze. Instruct the team to use the two weeks for low-priority, internal documentation cleanup. Do not raise a change request, but secretly log the two-week delay in the risk register, ready to blame the legal team later if the final deadline is missed.",
        expertRationale: "This is a close call. While it keeps the team productive, it is a passive response. It fails to convert the mandatory delay into a billable activity and relies on an external factor (the legal team) to justify the eventual schedule slippage.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. The delay is mandatory, so the consultant must use the time productively and bill for it. A is adversarial; C is passive. The consultant must guide the client on how to use mandatory downtime effectively.",
    takeAway: "When mandatory freezes occur, scope a billable 'Task Force' to proactively design the compliance solution, converting passive delay into productive scope.",
  },
  {
    id: 32, 
    moduleId: 1,
    title: "The Internal Power Play",
    prompt: "The client's VP of Operations is challenging the authority of the original project sponsor (the CIO). The VP insists your project must now be re-aligned to focus on their new efficiency goals, which were never in the contract and require two weeks of unbudgeted data integration. The VP claims the CIO is 'out of touch' with the business.",
    responses: [
      {
        id: "A",
        title: "The Rigid Contract Defense",
        text: "Immediately inform the VP of Operations that your firm is contracted to the CIO and must follow the original SOW. Refuse to engage in the new efficiency goals, stating that the VP must get the CIO's formal written approval for any scope deviation.",
        expertRationale: "This is commercially clean but politically risky. It forces a confrontation between two senior client executives, which makes the consulting firm look rigid and unwilling to adapt to internal client politics.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Dual Mandate",
        text: "Attempt to satisfy both VPs: absorb the two weeks of unbudgeted data integration by cutting project documentation. Tell the CIO that you are ensuring operational relevance, and tell the VP of Operations that you are ensuring system alignment.",
        expertRationale: "This is a major commercial failure. Absorbing two weeks of data integration is an unacceptable cost. It attempts to solve a political problem with free work, which is not sustainable.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Value-Add Alignment",
        text: "Schedule a joint meeting with the CIO and the VP of Operations. Acknowledge the value of the VP's efficiency goals and offer a formal change request to scope the two weeks of data integration, framing it as the necessary 'value-add alignment' that secures support from both executives.",
        expertRationale: "This is the most effective approach. It elevates the internal political issue to the right level (joint meeting) and converts the political demand into a billable scope addition. This forces the client to pay for their internal alignment.",
        expertRanking: 1
      }
    ],
    overall: "C is the most professional. It validates both VPs' importance and converts the political tension into a billable scope change. A is too rigid; B is commercially unsound. The consultant must charge for managing client politics.",
    takeAway: "When internal power plays create scope creep, charge for the alignment by proposing a billable change request that satisfies both conflicting stakeholders.",
  },
  {
    id: 33, 
    moduleId: 1,
    title: "The User Feedback Loop",
    prompt: "During User Acceptance Testing (UAT), a critical group of users provides 50 pages of feedback. While 80% are legitimate P0/P1 bugs (in scope), 20% are complex new feature requests (out of scope) that the users insist are necessary for 'day-one usability.' Your internal team is already behind schedule.",
    responses: [
      {
        id: "A",
        title: "The Triage & Formal Log",
        text: "Immediately commit to fixing all P0/P1 bugs. For the 20% of new feature requests, immediately log them in a separate 'Future Enhancements' register. Present the sponsor with a change request to formally add the top three requested features to the current sprint and a timeline for the remaining features.",
        expertRationale: "This is the necessary professional move. It separates legitimate bugs (your firm's responsibility) from new features (client's unbudgeted demand). By offering to immediately scope the top three, you show responsiveness while protecting the boundary.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Full Absorb",
        text: "Instruct the team to quietly absorb all 20% of the new feature requests by working overtime and eliminating all project buffer. Do not raise a change request, viewing this as a necessary investment to ensure high user satisfaction.",
        expertRationale: "This is poor management. It is an unbudgeted, high-risk approach that sacrifices team well-being and project integrity for unbudgeted client demands. It sets a dangerous precedent for future UAT phases.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The User-Driven Trade",
        text: "Tell the UAT users that they must choose to trade out an equivalent amount of time from low-priority, contracted features for their new feature requests. This keeps the schedule intact but forces the users to make a difficult political choice.",
        expertRationale: "This is a close call. While it protects the budget, it delegates a difficult commercial decision to end-users who lack the authority to make such a trade. This risks project stagnation and political friction.",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective. It professionally distinguishes between bug fixes (your cost) and new features (client's cost). C delegates authority inappropriately; B is a commercial failure.",
    takeAway: "When UAT includes scope creep, immediately separate bugs (fix) from new features (charge) and offer to prioritize the new features via a formal change request.",
  },
  {
    id: 34, 
    moduleId: 1,
    title: "The Partner's Side Hustle",
    prompt: "A key integration point in your project relies on a new API from a third-party partner. You discover the partner is secretly prioritizing a side project with another client, leading to continuous delays in delivering their API. The partner's contract explicitly states API availability by the current deadline, but the client sponsor is hesitant to enforce penalties due to political reasons.",
    responses: [
      {
        id: "A",
        title: "The Contractual Penalty",
        text: "Formally inform the client sponsor that the partner is in breach of contract. Demand the sponsor enforce the contractual penalties and publicly escalate the issue to the partner's executive leadership to force compliance.",
        expertRationale: "This is legally correct but politically insensitive. The sponsor's reluctance to enforce penalties suggests a high-stakes, internal political reason that should be respected. Forcing a confrontation risks alienating the sponsor.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Work-Around Proposal",
        text: "Propose an alternative: scope and create a temporary 'API Stub' that mocks the partner's functionality, allowing your team to complete 80% of the integration work. Present a change request for the Stub and a two-week extension to account for the eventual real API integration.",
        expertRationale: "This is the ideal consulting move. It solves the project's dependency problem without forcing the sponsor into a political battle. It converts the delay risk into a billable, productive scope addition (the API Stub).",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Schedule Re-Ordering",
        text: "Accept the partner's delay. Re-order your project's tasks to focus on non-API-dependent activities. Do not raise a change request, but secretly log the partner's delays as the cause of the eventual schedule slippage.",
        expertRationale: "This is a close call. While it keeps the team productive, it is passive. It fails to convert the delay risk into a billable solution (an API Stub) and relies on blaming an external party later, which weakens your advisory position.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. It solves the core problem (the dependency) without forcing the client into a political confrontation. C is passive; A is too adversarial. The consultant must solve dependency risks, not just report them.",
    takeAway: "When a key dependency fails due to external client politics, propose a billable work-around (like an API Stub) to maintain momentum.",
  },
  {
    id: 35, 
    moduleId: 1,
    title: "The Proof of Concept Pivot",
    prompt: "You successfully deliver a Proof of Concept (POC) for a new AI model, which was contracted for a single, small data set. The client sponsor, impressed by the results, immediately demands the full production deployment on the entire 10-terabyte data lake, claiming, 'The POC proves it works, so the full deployment must be the same effort.' This is a 12-week, unbudgeted scope addition.",
    responses: [
      {
        id: "A",
        title: "The Enthusiastic Absorb",
        text: "Instruct your team to immediately begin planning the full deployment, absorbing the first four weeks of planning time by working unbilled overtime. Do not raise a change request, viewing this as a necessary investment to capitalize on the client's enthusiasm.",
        expertRationale: "This is a major commercial failure. The difference between a POC and a production deployment on a massive data set is huge. Absorbing any part of this massive scope is an unacceptable commercial risk.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scope Veto",
        text: "Refuse the request, citing the contract's explicit POC limitation. State that the full deployment is a separate project requiring a completely new SOW, and refuse to engage in any discussion about the full deployment until the current contract is formally closed.",
        expertRationale: "This is commercially safe but politically tone-deaf. It crushes the client's enthusiasm and fails to capitalize on a massive opportunity. It makes the consulting firm look like a bureaucratic barrier to client progress.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Staged Deployment Proposal",
        text: "Validate the sponsor's enthusiasm. Create a staged deployment proposal that clearly outlines the three phases (Planning, Production, Scaling). Propose a formal change request for the 12-week production deployment, using the complexity of the data lake to justify the cost and schedule.",
        expertRationale: "This is the strongest approach. It acknowledges the success of the POC and converts the client's enthusiasm into a structured, billable follow-on project. This protects the project boundary and maximizes the commercial opportunity.",
        expertRanking: 1
      }
    ],
    overall: "C is the most professional. It leverages the POC's success to secure a formal, structured, and billable production project. A is a commercial failure; B is a political failure. The consultant must convert enthusiasm into a new contract.",
    takeAway: "Convert the success of a Proof of Concept (POC) into a formal, multi-phased production change request, clearly scoping the complexity of scale.",
  },
  {
    id: 36, 
    moduleId: 1,
    title: "The Documentation Black Hole",
    prompt: "Your contract requires a set of technical deployment documents. The client's training lead, on a whim, asks for a highly detailed, 50-page 'Day-in-the-Life' manual for every single user role. This level of documentation is unbudgeted and will add seven days of pure writing effort, which the training lead insists is 'just a natural extension' of the deployment documents.",
    responses: [
      {
        id: "A",
        title: "The Trade-Off: Training for Documentation",
        text: "Quantify the seven days of writing effort. Propose a formal trade: you will provide the detailed Day-in-the-Life manuals if the client agrees to reduce the project's future training support by seven days. This keeps the cost flat but shifts the scope.",
        expertRationale: "This is a close call, but the best approach. It protects the budget by demanding an equivalent trade for the unbudgeted work. It forces the client to decide which deliverable is more valuable: detailed manuals or hands-on training.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Internal Absorb",
        text: "Instruct the team to absorb the seven days of writing effort by eliminating internal code review and quality checks. Do not raise a change request, viewing this as a necessary, unbudgeted effort to appease the influential training lead.",
        expertRationale: "This is poor management. Seven days of writing effort is a significant commercial cost that should not be absorbed. It also sacrifices project quality (code review) for unbudgeted client documentation.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Formal Change Request",
        text: "Immediately present a change request to the sponsor for the seven days of writing effort. Frame the manuals as a 'premium service' that falls outside the standard deployment documentation, and refuse to proceed until the cost is approved.",
        expertRationale: "This is commercially clean but risks damaging the relationship with the training lead by immediately imposing a high cost. A trade-off (Option A) is a more collaborative and relationship-friendly solution.",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective. It uses a trade-off to manage scope, ensuring the client pays for the documentation with equivalent time from another part of the budget. B is a commercial failure; C is too confrontational.",
    takeAway: "When scope creep involves documentation, use a trade-off with another deliverable (e.g., training) to ensure the client is paying for the new requirement.",
  },
  {
    id: 37, 
    moduleId: 1,
    title: "The 'Temporary' Fix",
    prompt: "A client system component unexpectedly fails during integration, threatening a two-week delay. The client's technical director asks your team to implement a 'temporary' fix—a highly complex, one-week technical debt solution—to bypass the issue and maintain the schedule. The contract states the client is responsible for maintaining all existing infrastructure.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Maintain Schedule",
        text: "Instruct the team to absorb the one week of unbudgeted work by using internal buffer. Implement the temporary fix and maintain the schedule. Do not raise a change request, viewing this as a necessary, unbudgeted investment to save the schedule.",
        expertRationale: "This is commercially poor. One week of highly complex work is a significant cost. Absorbing it normalizes the client's failure to maintain their infrastructure and creates unbudgeted technical debt that your firm is paying for.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scoped Technical Debt",
        text: "Acknowledge the need for the temporary fix. Offer a formal change request for the one week of complex work, framing it as 'critical infrastructure stabilisation support' to address the client's system failure. This formally charges for the temporary scope addition.",
        expertRationale: "This is the strongest move. It acknowledges the crisis and charges for the required solution. The client must pay for the emergency work required to fix their own infrastructure failure, even if it is a temporary fix.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Veto & Delay",
        text: "Refuse to implement the temporary fix, citing the contract's clause that holds the client responsible for all existing infrastructure. State that the project must be delayed by two weeks until the client's internal team fixes the component failure.",
        expertRationale: "This is commercially clean but politically risky. It makes the consulting firm look like an inflexible barrier to client progress, refusing to help during a system failure. It sacrifices relationship goodwill for contractual rigidity.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. It solves the client's crisis while ensuring the firm is compensated for the necessary, unbudgeted work. A is commercially unsound; C is too rigid. The consultant must solve the problem and charge for it.",
    takeAway: "When a client's system failure requires a temporary fix, immediately scope the 'stabilisation support' as a billable change request.",
  },
  {
    id: 38, 
    moduleId: 1,
    title: "The Training Gap",
    prompt: "The client's internal training department is incapable of producing the final user training materials, which was a client responsibility. The Head of HR begs your team to create the final 10 modules, claiming, 'We have no choice; the launch will fail without them.' This is an unbudgeted, six-day scope addition.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Blame Later",
        text: "Instruct the team to absorb the six days of work by eliminating internal documentation and quality review. Do not raise a change request, viewing this as a necessary, unbudgeted effort to save the launch. Secretly log the client's failure as the cause of the poor documentation.",
        expertRationale: "This is a major commercial failure. Six days of work is a significant cost. Absorbing it sets a precedent that your firm will cover for the client's capability gaps, compromising your project quality in the process.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Internal Veto",
        text: "Refuse the request. State that the project is not responsible for the client's internal capability gaps and that the launch must be delayed until the training department can produce the necessary modules.",
        expertRationale: "This is commercially clean but politically risky. It is a confrontational, adversarial response that makes the consulting firm look unsupportive, risking the entire relationship and project goodwill.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Training Service Proposal",
        text: "Acknowledge the crisis. Propose a formal change request for a fixed-price 'Launch Readiness Training Service' for six days, framing it as the necessary bridge to cover the client's temporary capability gap and ensure a successful launch.",
        expertRationale: "This is the most professional response. It validates the client's crisis and converts the unbudgeted work into a billable service. This ensures the client pays for their internal deficit and maintains commercial integrity.",
        expertRanking: 1
      }
    ],
    overall: "C is the clear winner. The client must pay for the unbudgeted work required to cover their internal capability gaps. A is a commercial failure; B is too adversarial. The consultant must always charge for solving a problem.",
    takeAway: "When a client capability gap creates an emergency scope addition, scope a billable 'Readiness Service' to ensure the client pays for their internal deficit.",
  },
  {
    id: 39, 
    moduleId: 1,
    title: "The Regional Exception",
    prompt: "You are building a global system. The Head of the Brazilian subsidiary, a highly influential leader, demands that the system be customized to support a unique regional tax reporting requirement. This adds four days of unbudgeted work and creates complexity for the global code base. The Head of the subsidiary insists, 'My region's compliance is non-negotiable.'",
    responses: [
      {
        id: "A",
        title: "The Compliance Cost Analysis",
        text: "Acknowledge the non-negotiable compliance need. Immediately quantify the four days of cost and the long-term maintenance impact on the global code base. Present a change request for the four days of work and state that the global project sponsor must approve the regional exception.",
        expertRationale: "This is the necessary professional move. It translates a regional compliance demand into a quantified global cost and forces the central sponsor to decide whether to absorb the cost for the region or enforce the global standard.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Unbilled Favor",
        text: "Instruct the team to absorb the four days of work by cutting internal testing time. Do not raise a change request, viewing this as an unbudgeted political expense to appease a highly influential regional leader.",
        expertRationale: "This is poor management. Four days of work is a significant cost. Absorbing it sets a precedent that regional leaders can unilaterally expand the scope, compromising global quality in the process.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Shared Burden",
        text: "Propose a compromise: your team will design the customization, but the Brazilian subsidiary's internal team must perform the coding and long-term maintenance of the regional exception. This shifts the long-term cost to the region.",
        expertRationale: "This is a close call. While it shifts the maintenance cost, it still involves your team doing unbudgeted design work. It is a collaborative but still commercially weak solution, as your firm is still giving away time.",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional. It forces the global sponsor to own the cost of the regional exception. B is commercially unsound; C is commercially weak. The consultant must charge for the exception.",
    takeAway: "Always quantify the cost of regional exceptions and force the central sponsor to decide on the trade-off between global standardization and regional compliance.",
  },
  {
    id: 40, 
    moduleId: 1,
    title: "The Analyst's Backdoor Request",
    prompt: "A client financial analyst, who is generally helpful, emails your lead developer directly, asking for a small, out-of-scope data extract. The developer, wanting to be helpful, complies, spending an unbudgeted half-day on the work. The analyst then immediately asks for three more, similar extracts, leading to a new, four-day, unbudgeted scope creep.",
    responses: [
      {
        id: "A",
        title: "The Internal Scapegoat",
        text: "Reprimand the lead developer for complying with an unapproved request. Immediately tell the financial analyst that all future requests must go through the formal change request process, creating a bad relationship with the helpful analyst.",
        expertRationale: "This is poor leadership. It punishes an employee for trying to be helpful and creates a negative work environment. It also fails to address the root cause: the client's direct request.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Triage Funnel",
        text: "Formally acknowledge the initial half-day of work as a one-time favor. Immediately implement a Triage Funnel: all future requests must be sent to you, the project manager, who will dedicate a maximum of one hour per week to triage and formally scope the remaining requests.",
        expertRationale: "This is the best response. It validates the relationship with the analyst by acknowledging the initial favor while professionally controlling the flow of work. The Triage Funnel protects the team's time from continuous, small requests.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Full Absorb",
        text: "Instruct the lead developer to quietly absorb the remaining four days of work, viewing this as a necessary, unbudgeted investment to maintain the personal relationship with the analyst, who is a valuable source of internal information.",
        expertRationale: "This is commercially unsound. Four days of work is a significant cost. Absorbing it normalizes the client's circumventing the process, leading to unmanageable future scope creep.",
        expertRanking: 2
      }
    ],
    overall: "B is the most professional. It uses a structured process (Triage Funnel) to control the flow of work while protecting the relationship with the analyst. A is poor leadership; C is commercially unsound.",
    takeAway: "Control backdoor requests by formally acknowledging the first one as a favor and immediately implementing a Triage Funnel for all future requests.",
  },
  {
    id: 41, 
    moduleId: 1,
    title: "The Unpaid Consultant",
    prompt: "The client's internal strategy team, impressed with your firm's thinking, starts inviting your lead strategist to attend weekly, unbudgeted brainstorming sessions. They claim, 'We just need your high-level, strategic input.' This is adding two days of unbudgeted, high-value strategy time every week, compromising the lead strategist's core project responsibilities.",
    responses: [
      {
        id: "A",
        title: "The Internal Veto",
        text: "Instruct the lead strategist to politely decline all future invitations, citing a conflict with core project deliverables. Refuse to engage in any unbudgeted brainstorming, directing the strategy team to the original project sponsor.",
        expertRationale: "This is commercially safe but politically risky. It makes the consulting firm look like an inflexible, low-value resource, unwilling to engage in high-level client thinking, risking the relationship with the strategy team.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Absorb & Leverage",
        text: "Allow the strategist to continue attending the sessions, absorbing the two days of unbudgeted time. Do not raise a change request, viewing this as a necessary, unbudgeted investment to secure a large follow-on strategy project.",
        expertRationale: "This is commercially unsound. Two days of high-value strategy time is a significant cost. Absorbing it risks the core project's delivery and normalizes free, unbudgeted, high-value work.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Advisory Service Proposal",
        text: "Immediately meet with the strategy team lead. Validate the value of the strategist's input and propose a formal, fixed-price 'Strategic Advisory Service' for a limited number of sessions. This converts the unbudgeted time into a billable, structured service.",
        expertRationale: "This is the most professional response. It validates the client's demand and converts the unbudgeted work into a billable service. This ensures the client pays for the high-value, out-of-scope strategic thinking.",
        expertRanking: 1
      }
    ],
    overall: "C is the clear winner. The client must pay for the high-value, unbudgeted strategic input. A is too rigid; B is a commercial failure. The consultant must always charge for solving high-level problems.",
    takeAway: "When high-value, strategic input is requested outside the contract, immediately scope a formal, billable 'Advisory Service' to maintain commercial integrity.",
  },
  {
    id: 42, 
    moduleId: 1,
    title: "The Unexpected Holiday",
    prompt: "The client's primary subject matter expert (SME) who was critical to a two-week data mapping sprint unexpectedly takes an unannounced, one-week holiday. The SME's tasks cannot be done by anyone else, and the two-week sprint is now guaranteed to fail, causing a five-day delay to the overall project schedule.",
    responses: [
      {
        id: "A",
        title: "The Delay Change Request",
        text: "Immediately inform the client sponsor of the SME's absence and the five-day delay. Propose a formal change request to extend the project schedule by five days, citing the client's internal resource absence as the sole cause of the delay.",
        expertRationale: "This is the necessary professional move. It translates the client's internal resource failure into a quantifiable schedule impact that the client must formally accept. The consulting firm cannot absorb the cost of the client's resource absence.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Absorb & Overtime",
        text: "Instruct the team to absorb the five-day delay by working unbilled overtime and cutting project documentation. Do not raise a change request, viewing this as a necessary, unbudgeted effort to protect the schedule and prevent a confrontation.",
        expertRationale: "This is poor management. Five days of work is a significant cost. Absorbing it sets a precedent that your firm will cover for the client's resource failures, compromising project quality in the process.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Proxy Strategy",
        text: "Propose an alternative: instruct the team to build a proxy of the SME's data model based on best practices. Present this to the sponsor, acknowledging the risk, and agree to absorb the two days of rework required when the SME returns, but formally charge for the remaining three days of delay.",
        expertRationale: "This is a close call. While it keeps the team productive, it is commercially weak. It absorbs two days of rework cost, setting a precedent that your firm will pay for the client's resource failures.",
        expertRanking: 2
      }
    ],
    overall: "A is the most defensible. The client must own the schedule delay caused by their own resource absence. B is commercially unsound; C is commercially weak. The consultant must charge for the delay.",
    takeAway: "Translate resource absence risks into a formal schedule change request, ensuring the client owns the impact of their internal resource failures.",
  },
  {
    id: 43, 
    moduleId: 1,
    title: "The Double-Edged Sword",
    prompt: "Your project successfully delivers a 20% cost reduction in the client's operations. The Head of Finance, impressed by the quick win, demands that your team immediately pivot to achieving a further 10% reduction in a completely different business unit, claiming, 'You're already experts now; it should be quick.' This is a six-week, unbudgeted scope addition.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Goodwill",
        text: "Instruct the team to absorb the first two weeks of the new work, viewing this as an unbudgeted 'goodwill' investment to capitalize on the client's enthusiasm. Do not raise a change request, hoping the new work can be completed quickly.",
        expertRationale: "This is poor management. The difference between a 20% and 30% reduction is huge. Absorbing any part of this massive scope is an unacceptable commercial risk and sets a dangerous precedent.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Staged Replication Proposal",
        text: "Validate the success and the new goal. Propose a formal change request for a 'Phase 2 Replication Project' for the new business unit, using the complexity of the new unit's data and processes to justify the six-week, unbudgeted scope addition.",
        expertRationale: "This is the strongest move. It converts the success of the current project into a structured, billable follow-on project. This protects the project boundary and maximizes the commercial opportunity for replication.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Veto & Refer",
        text: "Refuse the request, citing the contract's explicit business unit limitation. State that the new business unit requires a completely new SOW and a fresh discovery phase, and refuse to engage in any discussion about the new scope until the current project is formally closed.",
        expertRationale: "This is commercially safe but politically tone-deaf. It crushes the client's enthusiasm and fails to capitalize on a massive opportunity. It makes the consulting firm look like a bureaucratic barrier to client progress.",
        expertRanking: 2
      }
    ],
    overall: "B is the most professional. It leverages the success of the first project to secure a formal, structured, and billable second project. A is a commercial failure; C is a political failure. The consultant must convert enthusiasm into a new contract.",
    takeAway: "Convert the success of a quick win into a formal, billable 'Replication Project' to capture the new scope and momentum.",
  },
  {
    id: 44, 
    moduleId: 1,
    title: "The Client’s Pet Peeve",
    prompt: "The client’s CEO, during a final demo, notices a minor cosmetic flaw in the new system's login page—a font that doesn't exactly match the new brand guidelines. This requires two days of unbudgeted work from your lead designer. The CEO insists this is a 'non-negotiable brand integrity' issue.",
    responses: [
      {
        id: "A",
        title: "The Formal Change Request",
        text: "Immediately present a change request to the sponsor for the two days of unbudgeted design work. Frame the fix as a 'premium branding service' that falls outside the standard design scope, and refuse to proceed until the cost is approved.",
        expertRationale: "This is commercially clean but risks damaging the relationship with the CEO by immediately imposing a cost for a minor visual fix. It is an inflexible response to a senior executive's personal demand.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Absorb & Blame",
        text: "Instruct the team to absorb the two days of work by cutting internal testing time. Do not raise a change request, viewing this as a necessary, unbudgeted effort to appease the CEO. Secretly blame the client's branding team for the mistake.",
        expertRationale: "This is commercially unsound. Two days of work is a significant cost. Absorbing it normalizes the client's last-minute demands and sacrifices project quality (testing) in the process.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Unbilled Goodwill",
        text: "Instruct the lead designer to quietly absorb the two days of work by using internal buffer. Do not charge extra, viewing this as a low-cost, unbudgeted 'goodwill' investment to satisfy the CEO's personal pet peeve and secure high-level buy-in.",
        expertRationale: "This is the ideal political move. It is a low-cost, unbudgeted investment to appease the most important stakeholder. This protects the project boundary from unnecessary conflict and secures high-level sponsorship.",
        expertRanking: 1
      }
    ],
    overall: "C is the most professional. It is a low-cost, high-value political investment that appeases the CEO. A is too rigid; B sacrifices project quality. The consultant must be willing to make small, unbilled concessions for executive goodwill.",
    takeAway: "Make small, unbilled concessions to satisfy high-level executive pet peeves to secure political goodwill and protect the project from conflict.",
  },
  {
    id: 45, 
    moduleId: 1,
    title: "The Shadow Project",
    prompt: "The client's Head of Engineering is running a 'shadow project'—a competing system built by their internal team—that aims to prove your consulting solution is unnecessary. The Head of Engineering is now subtly asking your team for unbudgeted, high-level technical advice on their shadow project, claiming, 'We just need your external perspective to validate our work.'",
    responses: [
      {
        id: "A",
        title: "The Boundary Enforcement",
        text: "Refuse the request. Immediately inform the original project sponsor of the shadow project and the conflict of interest. State that your firm cannot provide unbudgeted advice on a competing internal project and that the client must choose which project to fund.",
        expertRationale: "This is the necessary professional move. It translates a political conflict (the shadow project) into a clear, binary business decision for the sponsor. The consulting firm cannot fund its own competition.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Absorb & Discredit",
        text: "Allow your team to provide the advice, absorbing the unbudgeted time. Use the opportunity to subtly guide the Head of Engineering toward a solution that is technically complex and destined to fail, thereby discrediting the shadow project.",
        expertRationale: "This is unethical and unprofessional. It is manipulative and risks the firm's reputation if the tactic is discovered. The consultant must never intentionally sabotage a client's project, even if it is competing.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Neutral Advisor",
        text: "Propose a compromise: offer a formal, fixed-price, one-day 'Neutral Technical Review' of the shadow project. This ensures your team is compensated and maintains an objective stance, but avoids the conflict of interest.",
        expertRationale: "This is a close call. While it converts the time to billable work, it still risks the perception that your firm is validating a competing project. A clear choice (Option A) is needed when the competition is direct.",
        expertRanking: 2
      }
    ],
    overall: "A is the most defensible. The consulting firm must not fund or participate in its own competition. B is unethical; C is commercially awkward. The sponsor must resolve the conflict of interest.",
    takeAway: "When faced with a competing 'shadow project,' immediately enforce the boundary by forcing the sponsor to choose which project to fund.",
  },
  {
    id: 46, 
    moduleId: 1,
    title: "The Integration Tax",
    prompt: "Your project requires an integration with a third-party system. The third-party vendor suddenly announces a mandatory, unbudgeted fee for access to their necessary API keys, claiming, 'It's a new commercial policy.' The fee is a one-time cost of $5,000 and requires one day of your team's unbudgeted administrative time.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Maintain Schedule",
        text: "Instruct your team to absorb the one day of administrative time by cutting internal documentation. Immediately pay the $5,000 fee from your project's contingency budget. Do not raise a change request, viewing this as a necessary cost to avoid a schedule delay.",
        expertRationale: "This is poor management. While paying the fee from contingency is acceptable, absorbing the full administrative time sets a precedent that your firm will pay for external vendor changes, which is a major commercial risk.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scoped Fee & Admin",
        text: "Immediately inform the client sponsor of the mandatory vendor fee. Present a change request for the $5,000 cost and the one day of administrative time, framing it as 'mandatory integration enablement' that falls outside the original contract.",
        expertRationale: "This is the strongest move. It acknowledges the vendor's mandatory fee and ensures the client pays for both the fee and the required administrative time. This protects the project boundary and the commercial integrity of the firm.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Client Challenge",
        text: "Refuse to pay the fee or absorb the administrative time. State that the client must address the vendor directly to secure the necessary API access at no cost to your firm, citing the original contract's assumption of vendor cooperation.",
        expertRationale: "This is a close call. While commercially clean, it is a confrontational, adversarial response that forces the client to resolve a vendor dispute, risking the relationship and project timeline.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. The client must pay for the unbudgeted cost and time required to overcome an external vendor's mandatory fee. A is commercially unsound; C is too adversarial. The consultant must charge for external changes.",
    takeAway: "Translate unbudgeted external fees into a formal change request, ensuring the client pays for the mandatory cost and administrative time.",
  },
  {
    id: 47, 
    moduleId: 1,
    title: "The Compliance 'Must-Have'",
    prompt: "A client's external audit firm declares that your final report must include a detailed, unbudgeted audit trail of all data changes in the new system. This requires five days of unbudgeted, specialized data logging work from your team. The audit firm insists this is a 'non-negotiable' regulatory requirement.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Overtime",
        text: "Instruct the team to absorb the five days of work by eliminating internal project buffer and working overtime. Do not raise a change request, viewing this as a necessary, unbudgeted effort to ensure final audit sign-off.",
        expertRationale: "This is poor management. Five days of specialized work is a significant cost. Absorbing it normalizes the client's failure to communicate mandatory audit requirements, compromising project integrity.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Audit Refusal",
        text: "Refuse to perform the work, citing the contract's lack of a specific audit trail requirement. State that the client must use their own internal resources to implement the required logging and provide the audit trail.",
        expertRationale: "This is commercially safe but politically risky. It makes the consulting firm look unsupportive of a mandatory regulatory requirement, risking the final audit sign-off and client relationship.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Scoped Audit Support",
        text: "Acknowledge the mandatory requirement. Propose a formal change request for a fixed-price 'Audit Trail Service' for five days, framing it as the necessary specialized support to meet the audit firm's non-negotiable regulatory demand.",
        expertRationale: "This is the most professional response. It validates the audit firm's non-negotiable need and converts the unbudgeted work into a billable service. This ensures the client pays for their audit requirements.",
        expertRanking: 1
      }
    ],
    overall: "C is the clear winner. The client must pay for the unbudgeted work required to meet mandatory audit requirements. A is commercially unsound; B is too adversarial. The consultant must charge for compliance.",
    takeAway: "When external audit requirements create new scope, immediately scope a billable 'Audit Support Service' to ensure the client pays for compliance.",
  },
  {
    id: 48, 
    moduleId: 1,
    title: "The Unauthorised Demo",
    prompt: "The client's Head of Strategy conducts an external presentation of your in-progress system to a potential investor. During the presentation, the Head of Strategy promises a completely new, unbudgeted 'investor-ready' feature to secure funding. This feature requires six days of unbudgeted work from your team.",
    responses: [
      {
        id: "A",
        title: "The Investor-Ready Change",
        text: "Immediately inform the original sponsor of the Head of Strategy's promise. Propose a formal change request for the six days of work, framing the feature as 'critical investor-ready enablement' to secure the necessary funding for the entire project.",
        expertRationale: "This is the necessary professional move. It translates the Head of Strategy's unilateral, unbudgeted promise into a quantifiable schedule impact that the client must formally accept. The firm must charge for the investor-driven scope.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Absorb & Overtime",
        text: "Instruct the team to absorb the six days of work by eliminating internal project buffer and working overtime. Do not raise a change request, viewing this as a necessary, unbudgeted effort to help the client secure funding.",
        expertRationale: "This is poor management. Six days of work is a significant cost. Absorbing it sets a precedent that your firm will cover for the client's fundraising promises, compromising project integrity.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Internal Veto",
        text: "Refuse to build the feature. State that the Head of Strategy's promise is out of scope and that the client must secure a formal change request before any work can begin. This risks the client's ability to secure funding.",
        expertRationale: "This is commercially clean but politically risky. It is a confrontational, adversarial response that makes the consulting firm look unsupportive of a critical, high-stakes fundraising effort.",
        expertRanking: 2
      }
    ],
    overall: "A is the most defensible. The client must own the schedule delay and cost caused by their own executive's promise. B is commercially unsound; C is too adversarial. The consultant must charge for the investor-driven scope.",
    takeAway: "Translate executive promises made to external parties into a formal, billable change request, ensuring the client pays for the unbudgeted commitment.",
  },
  {
    id: 49, 
    moduleId: 1,
    title: "The Simple Data Transfer",
    prompt: "The client’s operations manager casually asks you to perform a simple, one-time data transfer of a large customer list from one internal system to another. Your contract is for strategic advisory work, and this data transfer, while simple, requires two days of unbudgeted, specialized scripting effort and carries a high data integrity risk.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Goodwill",
        text: "Instruct the team to absorb the two days of work by cutting internal documentation. Do not raise a change request, viewing this as a necessary, unbudgeted 'goodwill' investment to appease the operations manager.",
        expertRationale: "This is poor management. Two days of specialized work is a significant cost. Absorbing it sets a precedent that your firm will perform unbudgeted operational work, compromising project quality.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Scoped Operational Service",
        text: "Acknowledge the simplicity of the request. Propose a formal change request for a fixed-price 'Data Transfer Service' for two days, framing it as the necessary specialized support to ensure data integrity and formalize the risk.",
        expertRationale: "This is the strongest move. It validates the client's request while immediately converting the unbudgeted operational work into a billable, structured service. This protects the project boundary and the commercial integrity of the firm.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "The Operational Veto",
        text: "Refuse the request, citing the contract's explicit strategic advisory scope. State that the client must use their own internal resources to perform the operational data transfer.",
        expertRationale: "This is commercially clean but politically risky. It is an adversarial response that makes the consulting firm look unsupportive of a critical, operational need, risking the relationship with the operations manager.",
        expertRanking: 2
      }
    ],
    overall: "B is the clear winner. The client must pay for the unbudgeted operational work, even if it is a simple request. A is commercially unsound; C is too adversarial. The consultant must always charge for operational support.",
    takeAway: "Always translate simple, operational requests into a billable 'Support Service' to ensure the client pays for their internal operational deficit.",
  },
  {
    id: 50, 
    moduleId: 1,
    title: "The Ever-Changing Metric",
    prompt: "Your project is to build a dashboard based on a Key Performance Indicator (KPI) metric, which was formally defined at the project kickoff. Two days before the final delivery, the client's data governance committee re-defines the KPI metric, requiring five days of unbudgeted data model rework from your team.",
    responses: [
      {
        id: "A",
        title: "The Absorb & Deadline Hit",
        text: "Instruct the team to absorb the five days of rework by working unbilled overtime. Do not raise a change request, viewing this as a necessary, unbudgeted effort to hit the final deadline and appease the data governance committee.",
        expertRationale: "This is poor management. Five days of rework is a significant cost. Absorbing it normalizes the client's internal change and compromises the team's well-being and project integrity.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "The Internal Veto",
        text: "Refuse to perform the rework, citing the formal definition of the KPI at kickoff. State that the client must accept the dashboard with the original KPI and that the re-defined KPI requires a new project.",
        expertRationale: "This is commercially clean but politically risky. It makes the consulting firm look rigid and unsupportive of the client's internal governance process, risking the final project sign-off.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Governed Change Request",
        text: "Acknowledge the re-defined KPI. Propose a formal change request for a fixed-price 'Data Model Rework Service' for five days, framing it as the necessary specialized support to align the final deliverable with the client's current governance standards.",
        expertRationale: "This is the most professional response. It validates the client's governance process and converts the unbudgeted rework into a billable service. This ensures the client pays for their internal change.",
        expertRanking: 1
      }
    ],
    overall: "C is the clear winner. The client must pay for the unbudgeted rework caused by their own internal governance change. A is commercially unsound; B is too adversarial. The consultant must charge for internal scope changes.",
    takeAway: "When client-side governance changes create rework, immediately scope a billable 'Rework Service' to ensure the client pays for their internal change.",
  },

  {
    id: 1,
    moduleId: 2,
    title: "Client is Too Optimistic",
    prompt: "You've presented a cost-saving strategy that requires a significant, painful layoff in the client's middle management. The CEO, clearly uncomfortable, pivots the conversation to a small, low-impact process improvement mentioned in the appendix, suggesting 'we start there, build momentum, and reassess the hard stuff later.' Your internal team believes the major action is critical for the client's survival. Your firm's fee structure depends on achieving the big, painful results.",
    responses: [
      {
        id: "A",
        title: "Embrace the small win",
        text: "Agree with the CEO that the small process change is an excellent starting point. Frame it as a 'quick win pilot' to test the joint operating model. Immediately draft a revised timeline focusing on the small change, while scheduling a 'deep-dive strategy session' with the CEO for next month to re-introduce the larger, difficult decision with fresh data.",
        expertRationale: "This defers the critical conversation, allowing the client to avoid pain. It creates a false sense of progress and risks project drift. While it temporarily preserves the relationship, it compromises the core fiduciary duty to advise on what's truly necessary for client survival, potentially undermining the firm’s value proposition.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Re-anchor the conversation",
        text: "Gently acknowledge the appeal of the quick win, but immediately re-anchor the discussion on the 'core economic urgency' shown in the analysis. Use a clear analogy—like 'patching a leak versus fixing the dam'—to highlight the impact gap. Clearly state that the small change is a good idea but insufficient to close the existential cost gap. Re-present the 'go/no-go' decision on the layoff.",
        expertRationale: "This is the 'tough love' move. It respects the CEO's discomfort while reasserting the professional obligation to confront the main issue. The analogy provides a non-technical, face-saving way for the CEO to accept the hard truth. It shows courage and commitment to the client’s success, which is the heart of true partnership.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Seek managerial backup",
        text: "Turn to your Manager (who is present) with a phrase like, 'Manager, based on our joint economic model, what are the implications of delaying the major action?' Use the internal alignment to create a unified front. Position the quick win as a potential 'Phase 2' activity, making it clear that Phase 1 must focus on the critical structural change to generate the necessary funding.",
        expertRationale: "This is a solid move, especially for a less senior consultant. It avoids a direct confrontation with the CEO by enlisting a higher-ranking firm member to deliver the tough message. This protects the junior consultant's relationship while still ensuring the critical advice is delivered, demonstrating team alignment and seriousness.",
        expertRanking: 2
      }
    ],
    overall: "The CEO is looking for an out. Option B confronts this avoidance directly, using clear, non-confrontational language to re-establish the critical priority—this is 'pulling the bandage off' with empathy. Option C is a strong professional fallback, leveraging internal structure. Option A fails the core test of professional honesty.",
    takeAway: "True professional courage means delivering necessary pain, not just pleasant possibilities."
  },
  {
    id: 2,
    moduleId: 2,
    title: "Over-Promising to Win Work",
    prompt: "You are in the final presentation to win a large, lucrative transformation project. To close the deal, your Partner, in the room, makes an explicit promise to the client's Head of Operations—a 'guaranteed 25% cost reduction within 9 months'—which you and the rest of the project team know is wildly unrealistic given the client's data maturity and internal politics. The client looks satisfied and seems ready to sign the Letter of Intent.",
    responses: [
      {
        id: "A",
        title: "Whisper a correction",
        text: "Immediately and quietly interject, 'Yes, and to be precise, that target is contingent on the client hitting all three of the foundational data readiness milestones we discussed in the pre-proposal phase. We'll start with a diagnostic to validate the exact baseline.' Smile at the client to soften the re-framing while maintaining the momentum of the win.",
        expertRationale: "This is a good, low-friction save. It avoids undermining the Partner in front of the client but introduces a necessary hedge—'contingent on X'—before the ink is dry. It begins the process of setting realistic expectations without killing the deal, which demonstrates shrewdness and risk management. It's an internal correction delivered externally.",
        expertRanking: 2
      },
      {
        id: "B",
        title: "Address the Partner privately",
        text: "Say nothing in the moment to maintain the 'win' momentum and internal hierarchy. After the meeting, immediately approach the Partner in private, clearly stating the risk. Suggest a joint follow-up with the client to 'clarify the phased rollout and critical success factors' before the contract is legally signed, effectively walking back the promise together.",
        expertRationale: "This prioritizes internal hierarchy and the immediate win. However, it risks the client feeling bait-and-switched later, as the promise was delivered directly to the client. The immediate moment of maximum leverage for correction has been lost, making the eventual walk-back more politically costly and less believable to the client.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "State the hard truth",
        text: "Intervene immediately and directly, 'That 25% is our stretch goal, but based on the current data quality, a 15% to 20% range is a more realistic, guaranteed outcome. We want to be honest about the starting line.' Look at the Partner, then the client, and offer a clear path to the higher target. State that honesty is the foundation of the partnership.",
        expertRationale: "This is professionally admirable but politically naïve. It publicly undermines the Partner, creating internal friction, and risks losing the deal, as the client might seek a firm that maintains the high promise. The consultant is seen as principled but not commercially savvy or a team player, which is a key unwritten rule in consulting.",
        expertRanking: 1
      }
    ],
    overall: "The challenge is balancing commercial success with professional integrity. Option C is idealist but risks the whole deal. Option B is passive, deferring the problem. Option A is the shrewdest play: it uses a technical 'hedge' to walk back the promise without public conflict, thereby protecting the win while mitigating the delivery risk.",
    takeAway: "Hedge unrealistic promises in the moment; a clear contingency is a professional's insurance policy."
  },
  {
    id: 3,
    moduleId: 2,
    title: "Client Steals Your Work",
    prompt: "You've just completed a demanding 'white paper' for a public-sector client on their future operating model, including several original graphics and a novel implementation structure. Your client sponsor, a high-flying Director, presents the work at a major internal conference as their own, failing to mention your firm's involvement. Your Manager is furious and wants to challenge the client directly, but you sense a strong relationship with this sponsor is crucial for future contracts.",
    responses: [
      {
        id: "A",
        title: "Calmly claim authorship",
        text: "Contact the Director directly (not the Manager), saying you were 'thrilled to see the work presented so well.' Immediately follow up with an email to the Director, cc’ing the Manager, containing the original draft and a soft reminder: 'Per our engagement contract, we'll need to use this model as a reference for future proposals, so let's make sure the external presentation materials credit our joint team effort.'",
        expertRationale: "This is a direct, yet politically soft, assertion of ownership. It 'weaponizes' the contract and the firm's commercial need (future proposals) to get the credit, not just personal ego. By bypassing the firm's Manager's initial fury and going direct, it de-escalates the tension while still correcting the record. This is a very savvy move.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Support Manager's challenge",
        text: "Advise your Manager to directly contact the client's superior, the COO, stating that the lack of credit is a breach of professional courtesy and a potential issue for intellectual property (IP). Stress that this is an opportunity to set a clear boundary on the consultant-client relationship. Recommend that the firm demand a public or written retraction/correction.",
        expertRationale: "This is a high-risk, high-confrontation move that is almost certain to damage the relationship and risk future work. While legally and morally sound, in the commercial world, a firm challenging a client's senior executive over attribution is often seen as petty or adversarial, violating the spirit of 'partnership' and prioritizing IP over the relationship.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Use the work's success",
        text: "Tell the Manager to stand down. Instead of challenging the Director, suggest sending an internal email across your firm's leadership, congratulating the team on the Director's successful presentation of 'our new operating model framework.' Use the presentation as proof that the client 'bought' the solution and immediately schedule a follow-up to discuss 'Phase 2 implementation' and cement future revenue.",
        expertRationale: "This sacrifices credit for commercial gain. It's a pragmatic acceptance of the reality that a client's internal adoption of the work is more valuable than external credit. While the Manager is unsatisfied, the consultant prioritizes the relationship and revenue over ego, effectively converting a slight into a future opportunity. It is a cynical but commercially sound move.",
        expertRanking: 2
      }
    ],
    overall: "The unwritten rule is that clients often 'internalize' or 'own' the work to build their careers. Option B is too aggressive. Option C accepts the slight too easily. Option A is the perfect blend: it reclaims credit professionally and contractually without public conflict, proving that a consultant can be both shrewd and correct.",
    takeAway: "Reclaim credit using a contract 'hedge' as a shield; never sacrifice the client relationship for ego."
  },
  {
    id: 4,
    moduleId: 2,
    title: "Protecting Data Integrity",
    prompt: "You are preparing a final report on market entry strategy. The client CEO calls you and explicitly asks you to 'tweak' the forecast revenue projection—increasing it by 20%—because the original number 'doesn't align with the Board's expectations' for the new venture. You know the original number is robust and the requested change would make the projection indefensible and misleading to stakeholders, but refusing the CEO could jeopardize the firm's largest contract.",
    responses: [
      {
        id: "A",
        title: "Reframe the number",
        text: "Do not change the core forecast. Instead, add a new section in the report titled 'Scenario Analysis: Upside Case' that presents the CEO’s requested 20% increase as a 'stretch target' or 'optimistic scenario.' Clearly footnote the new number, outlining the additional, high-risk assumptions required (e.g., 'requires a 50% faster sales cycle' or 'assumes competitor exit').",
        expertRationale: "This is the 'ethical fudge.' It satisfies the CEO's need to present a higher number to the Board while maintaining the integrity of the core analysis. By clearly labeling the number as a high-risk scenario, the consultant defends the professional standard of objective analysis. It is a shrewd maneuver that balances client service with data integrity.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Push back on the CEO",
        text: "Politely but firmly decline, stating, 'We cannot ethically publish that number; it fails our internal peer review standards.' Explain that the firm's credibility is tied to the objectivity of the analysis. Suggest that the CEO use the original number and add a separate, internal 'Management Uplift' for Board presentation, taking personal ownership of the risk.",
        expertRationale: "This is ethically admirable but politically costly. While it fully protects the firm's integrity, it places the consultant in direct confrontation with the client CEO. It may be perceived as condescending ('we can't let you'), potentially causing the CEO to simply hire a more compliant firm next time. This puts principle ahead of commercial reality.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Seek Partner oversight",
        text: "Tell the CEO you need to run the request past the Partner 'to ensure consistency with our methodology guidelines.' Immediately inform the Partner of the situation and the risk to the firm's reputation. Let the Partner be the final voice on either the refusal or the reframing, transferring the political risk to the most senior person.",
        expertRationale: "This is the safest internal move. It follows the unwritten rule: 'Don't own a problem that belongs to a Partner.' It ensures the firm's leadership is aware and approves the final choice, whether it is a stand on principle or a compromise. However, it is an abdication of the consultant’s direct responsibility for the final quality of the work.",
        expertRanking: 2
      }
    ],
    overall: "The professional duty is to truth, but the commercial reality is to serve the client. Option B is too rigid. Option C is a deferral. Option A is the high-value, middle-ground solution: it gives the client what they need (a high number) without compromising the consultant's core output (the base forecast). It's a sophisticated play on framing.",
    takeAway: "Satisfy client demands through framing (e.g., 'Upside Scenario'), not through factual distortion."
  },
  {
    id: 5,
    moduleId: 2,
    title: "Internal Client Conflict",
    prompt: "Your project's success hinges on two client VPs, Marketing and Sales, cooperating on a new data strategy. They are locked in a passive-aggressive power struggle. You have data showing the Marketing VP's system is superior, but presenting this directly will publicly embarrass and alienate the Sales VP, who is the more politically powerful of the two and a key long-term sponsor for your firm.",
    responses: [
      {
        id: "A",
        title: "Data-Driven Confrontation",
        text: "Present the data showing Marketing's system is superior, but immediately pivot to a 'co-creation' workshop. Frame the goal as: 'How do we take the best of the Marketing platform and tailor it for Sales' needs?' Use the data to establish the necessary starting point, but ensure the final solution is politically acceptable to the Sales VP by giving them ownership of the 'tailoring' process.",
        expertRationale: "This is the best blend of rigor and politics. It uses the data to set the non-negotiable direction but then gives the politically powerful Sales VP a face-saving 'win' by letting them define the final details. The consultant uses the truth to guide the decision while managing the ego and power dynamics in the room. This is true advisory.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Political Neutrality",
        text: "Avoid presenting a direct comparison. Instead, present a 'combined features scorecard' that highlights the strengths and weaknesses of both systems equally, concluding that 'neither system is fit-for-purpose.' Recommend a 'third-way' solution—a new, hybrid system that incorporates features from both—effectively kicking off a new, longer-term project phase (and fee).",
        expertRationale: "This avoids conflict and is a commercially self-serving choice. It is safe and generates new work, but it ignores the clear data and may lead to a sub-optimal, over-engineered solution. The consultant sacrifices the 'best' solution to avoid political heat, failing the professional test of providing objective, high-value advice.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Advise the underdog",
        text: "Present the data favoring the Marketing VP's system but brief the Sales VP privately beforehand. Acknowledge their political power and ask them how they would prefer the public presentation to be managed. Offer to present the finding not as a 'win/loss' but as a necessary, objective decision that allows them to focus their political energy elsewhere. Get their buy-in first.",
        expertRationale: "This is a shrewd political move that prioritizes the relationship with the powerful sponsor (Sales VP). It respects the unwritten rule: 'Manage up.' By seeking private counsel, the consultant turns the potentially alienated sponsor into an accomplice. However, it risks the Marketing VP feeling unsupported, but the consultant made a clear choice based on power dynamics.",
        expertRanking: 2
      }
    ],
    overall: "The challenge is to honor the data without violating political realities. Option B avoids the issue, while Option C sacrifices objectivity to power. Option A skillfully combines the two: using the data as an 'objective hammer' to drive the decision, then using 'co-creation' as a 'political pillow' to soften the blow for the powerful sponsor. The data still wins.",
    takeAway: "Lead with the data to define the 'What,' but use politics to manage the 'How' and the 'Who' of implementation."
  },
  {
    id: 6,
    moduleId: 2,
    title: "Client is Unprepared",
    prompt: "You are hosting a critical 9 am workshop with the client's senior leadership to finalize the new organizational design—the output of three months' work. At 8:50 am, the main client sponsor, the Head of HR, emails you a single slide with a completely different structure, noting, 'Ignore the pre-read, this is what the CEO actually wants, let's just use this today.' You haven't had time to analyze the impact of the new structure, and your Manager is on leave.",
    responses: [
      {
        id: "A",
        title: "Postpone the meeting",
        text: "Immediately email the attendees, including the CEO, stating: 'Due to the importance of the Head of HR's new proposed structure, we need an hour to fully model the implications for the team size and cost. We're moving the start time to 10:00 am to ensure we have a robust, data-backed discussion on all options.' Use the hour to quickly sketch out the implications.",
        expertRationale: "This is a defensible move that prioritizes professional rigor. It avoids making a crucial, unvetted decision under pressure, maintaining the consultant's standard of data-backed advice. By citing the structure's 'importance,' it also flatters the Head of HR. The risk is the political cost of delaying a senior leadership meeting, but the consultant is protecting the quality of the output.",
        expertRanking: 2
      },
      {
        id: "B",
        title: "Roll with the new plan",
        text: "Print the new slide immediately and start the meeting on time. Introduce the Head of HR's new structure as 'the CEO's preferred option, which we will use as the foundation for today's discussion.' Use the workshop itself as a 'live review' session, soliciting the leaders' views on the pros and cons. Do not present your firm's three months of work unless the new structure stalls.",
        expertRationale: "This is a decisive, client-serving, and politically shrewd move. It honors the CEO's implicit intent and the sponsor's urgency. It shows flexibility and responsiveness. By using the leaders' collective intelligence to validate the structure, the consultant shifts the responsibility for the vetting to the client group, converting an analysis deficit into a collaborative exercise.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Reassert the original plan",
        text: "Start the meeting by thanking the Head of HR for the 'last-minute inspiration,' but then firmly state the agenda is to vet the three options in the pre-read. Promise to discuss the new slide at the end of the meeting 'once the main models are fully vetted.' Explain that three months of analysis deserves full review before pivoting to a structure that hasn't been impact-modeled.",
        expertRationale: "This is a professional move that risks alienation. It prioritizes the consultant's sunk cost (three months of work) over the client's current political reality (the CEO's preference). It makes the Head of HR look out of sync and could feel disrespectful of the client's process, even if the intent is to protect the rigor of the decision.",
        expertRanking: 3
      }
    ],
    overall: "The unwritten rule is that the CEO's 'preference' trumps all prior analysis. Option C is too rigid. Option A buys time but risks annoyance. Option B is the ultimate 'read the room' move: pivot to the client's reality and use the meeting itself as the vetting tool. It shows the consultant is advisory-minded, not just process-bound.",
    takeAway: "When the client sponsor introduces the CEO's 'preference,' all prior work becomes a 'B-Plan'—pivot immediately."
  },
  {
    id: 7,
    moduleId: 2,
    title: "The Unnecessary Model",
    prompt: "You are presenting a strategic plan to the client's CFO. She asks, 'Can you walk me through the Monte Carlo simulation that generated these risk ranges?' You know that the simulation, while technically impressive, was built by an intern, is overly complex, and barely influences the final strategic advice. You are worried that diving into the model will confuse the CFO, expose its flaws, and distract from the core decisions, but avoiding the question may make you look like you're hiding something.",
    responses: [
      {
        id: "A",
        title: "Give a 30-Second Summary",
        text: "Acknowledge the model's complexity. Give a 30-second, high-level, analogy-based explanation of the simulation's purpose (e.g., 'It's a digital stress-test that shuffles 5,000 possibilities to give us a realistic floor and ceiling'). Then, immediately pivot back to the report's conclusion: 'The key takeAway remains that even in the bottom 10% of outcomes, the strategy is still viable because of the two key levers we identified.'",
        expertRationale: "This is the ideal response. It satisfies the CFO's intellectual curiosity with a high-level explanation without getting lost in the technical weeds. It reasserts the advisory focus on 'so what'—the decision at hand—while treating the model as a supporting piece of evidence, not the main event. It manages complexity while maintaining authority.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Offer a Deep Dive Later",
        text: "Tell the CFO, 'I'd be happy to. I have the detailed model and all the assumptions ready in the appendix.' Suggest scheduling a 30-minute, one-on-one follow-up call the next day with a dedicated analyst 'who can walk you through the full methodology.' State that for the sake of the group's time, you'll stay focused on the key decisions today.",
        expertRationale: "This is a solid, safe deferral. It shows respect for the CFO's technical curiosity and the meeting's agenda. It's a low-risk strategy that manages the room by isolating the technical deep-dive for a separate conversation. However, it risks the CFO feeling dismissed and puts a potential burden on a junior analyst to defend the intern's work later.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Do the Full Walkthrough",
        text: "Launch into a detailed, step-by-step walkthrough of the simulation's architecture and assumptions. Spend five to ten minutes explaining the technical rigor, using the original slides built by the intern. Assume the CFO is highly technical and wants to vet the data directly to ensure the firm's credibility, even if it throws the meeting off track.",
        expertRationale: "This is a professional mistake. It allows a supporting detail to hijack the main conversation, losing the attention of other attendees. It also unnecessarily exposes the complexity and potential flaws of a tool that was only meant to be a background check. The consultant is prioritizing technical transparency over executive comprehension and decisiveness.",
        expertRanking: 3
      }
    ],
    overall: "An executive asking for detail is testing your confidence, not demanding a lecture. Option C fails the executive attention test. Option B is a safe delay. Option A is the professional winner: it gives a high-level, confident answer, validates the curiosity, and immediately re-anchors the conversation on the strategic decision, proving the consultant is in command of both the data and the room.",
    takeAway: "The 'So What' always trumps the 'How'—treat complex models as evidence, not as the primary argument."
  },
  {
    id: 8,
    moduleId: 2,
    title: "Client Over-Hires",
    prompt: "Your data analysis clearly shows the client's biggest operational bottleneck is a legacy IT system and rigid processes. However, your client's Chief of Staff (CoS) keeps hiring new, expensive operational staff, believing 'more hands' will fix the problem. You are presenting the final diagnostic, and the CoS interrupts, 'All this tech talk is great, but we just hired 15 new people. How will we embed them efficiently?' Your firm's contract extension depends on the client buying into the full, expensive systems overhaul you have recommended.",
    responses: [
      {
        id: "A",
        title: "Pivot to the New Team",
        text: "Acknowledge the new hires and pivot your presentation. State, 'The great news is that these 15 new hires represent a perfect opportunity to test and implement the new processes enabled by the IT overhaul.' Frame the IT project not as a cost-saver but as a 'force multiplier' that makes the new hires effective, thereby linking their decision to your solution.",
        expertRationale: "This is a highly astute move. It doesn't contradict the client's hiring decision; instead, it reframes the firm's solution (IT overhaul) as the essential ingredient that validates and maximizes the CoS's decision (new hires). The consultant avoids conflict, shows respect for the client's current actions, and links the firm's expensive recommendation directly to the CoS's success. It's excellent advisory salesmanship.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Question the Hires",
        text: "Politely challenge the CoS, saying, 'Our data suggests that adding more people to a broken process will only increase cost without solving the root bottleneck.' Reiterate that the core problem is the IT system and processes. Present the analysis that shows the financial case for a systems overhaul is stronger than the cost of the 15 new hires over two years. Stick rigidly to the original plan.",
        expertRationale: "This is a technically correct but politically suicidal approach. It publicly criticizes a recent, expensive, and high-profile decision made by a powerful sponsor. The consultant is seen as being rigidly analytical, lacking political awareness, and undermining the client's chief of staff, which will damage the relationship and risk the project extension.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Suggest a Pilot Project",
        text: "Suggest using the 15 new hires as a dedicated 'internal strike team' to lead a six-week pilot program focused on the new, optimized process. Frame the pilot as the 'final data collection' before the full IT rollout decision. This buys time, validates the client's decision, and gives the firm a chance to prove the value of the new process before committing to the expensive overhaul.",
        expertRationale: "This is a good, low-risk compromise. It acknowledges the new hires and puts them to work immediately, validating the CoS. It avoids a direct challenge and defers the expensive IT decision while still moving toward the ultimate goal. However, it risks mission creep and slows down the critical IT overhaul that the firm needs to sell.",
        expertRanking: 2
      }
    ],
    overall: "The client's action (hiring) is a fact you cannot change. Option B ignores reality. Option C delays the confrontation. Option A is a masterclass in 'jiu-jitsu' advisory: you take the client's momentum and use it to propel your own strategy. The consultant shows flexibility and commercial acumen by making the client's current action the justification for the firm's future work.",
    takeAway: "Never criticize a client's recent, visible decision; reframe it as a strategic asset for your proposed solution."
  },
  {
    id: 9,
    moduleId: 2,
    title: "The Scope Creep",
    prompt: "Your firm is delivering a high-pressure, fixed-fee IT migration project. The client's Project Lead, who is under intense pressure from their own boss, has casually asked for three small, seemingly simple 'must-have' features to be added. You know these features, while small, require complex integration and would push the team past the deadline and over budget, turning a profitable project into a loss. They were explicitly out of scope, but the client lead acts like they're a given.",
    responses: [
      {
        id: "A",
        title: "Quantify the Cost of Delay",
        text: "Acknowledge the features' value. Immediately provide a clear, one-slide 'trade-off' visual. Frame it not as 'cost' but as 'delivery risk.' Show the Lead: 'Adding these three features adds 4 weeks and requires a $50k change order, which risks the main go-live date. Which of the original features can we drop to maintain the timeline?' Force them to choose between their wants.",
        expertRationale: "This is the most professional and effective way to manage scope. It avoids conflict by framing the issue as an objective 'trade-off' rather than a financial 'no.' By asking the client to choose what to remove, the consultant shifts the ownership of the complexity and the consequences back to the client, protecting the budget and timeline with hard choices.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Do it for the relationship",
        text: "Tell the Project Lead, 'We’ll get it done. Consider it a partner-level goodwill gesture for this phase.' Absorb the cost and schedule risk internally. Inform your Manager that the project will be slightly over budget but that this 'act of goodwill' has secured the relationship with the key client lead, which is crucial for the next contract renewal.",
        expertRationale: "This is a common, often necessary, but high-risk move. It is a win for the relationship but a loss for the firm's financials and team morale, as the team works for free. While it can secure future work, the consultant is sacrificing professional rigor and training the client that the firm will work outside the contract for 'free,' which is a dangerous precedent.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Defer to the Contract",
        text: "Politely state, 'That sounds like a great idea for Phase 2. As you know, our scope is governed by the signed SOW, and these items aren't in the critical path for the core migration.' Promise to create a detailed, costed proposal for adding them in the next phase, following the standard Change Request process. Refuse to discuss them further until the current phase is complete.",
        expertRationale: "This is a technically correct and defensible refusal. It protects the scope but can be perceived as rigid and unhelpful by a time-pressed client lead, who will feel the firm is prioritizing its contract over the client's need. The consultant is following the rules, but not acting with the flexibility that defines a true, long-term partner.",
        expertRanking: 2
      }
    ],
    overall: "Scope creep is inevitable; how you manage it is the professional test. Option C is too rigid, and Option B is financially irresponsible. Option A is the shrewd move: it immediately converts the 'free request' into a 'trade-off' or a 'cost,' forcing the client to confront the reality of their request. This maintains control over the project and educates the client.",
    takeAway: "Manage scope creep by immediately quantifying its cost in time, money, or lost features; never just say 'no'."
  },
  {
    id: 10,
    moduleId: 2,
    title: "Client is Not Ready to Change",
    prompt: "Your six-month diagnosis of the client's culture and processes is complete. The data clearly shows a toxic culture of fear is the primary reason for poor performance and not the systems they initially wanted you to fix. The CEO agrees with the finding privately, but publicly says, 'Culture is a long-term fix; let's stick to the easy stuff—we need a new incentive structure for the sales team, and that's it.' You know this 'easy fix' will have minimal impact without confronting the cultural issue, wasting the firm's time and the client's money.",
    responses: [
      {
        id: "A",
        title: "Link the two issues",
        text: "Agree to the incentive structure but immediately frame it as the 'pilot vehicle' for the cultural change. State, 'Implementing new incentives is the perfect pressure test for a culture of fear. We will design the new structure, but our focus will be on the behavioral adoption, which is where the real cultural shift happens.' Make the adoption of the incentive the proxy for the culture work.",
        expertRationale: "This is the most effective advisory strategy. It honors the CEO's wish for a concrete, manageable project (incentives) but re-scopes the engagement's 'success metric' to the consultant's critical issue (behavioral/cultural adoption). The consultant subtly manages to do the necessary, difficult work under the guise of the client's preferred, easy work. It is a savvy compromise.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the CEO",
        text: "Re-present the slide on cultural findings. State, 'With respect, fixing the incentives without addressing the underlying cultural rot is like changing a lightbulb in a burning building.' Stand firm on the necessity of a full-scale cultural transformation project, even if it means jeopardizing the immediate follow-on work for a smaller project. Stress the fiduciary duty to be honest.",
        expertRationale: "While principled, this is a dangerous ultimatum that risks the relationship and the next project. The consultant is presenting an all-or-nothing choice, forcing the CEO to either admit failure publicly or fire the consultant. In the commercial world, this level of rigidity often fails to generate positive results, as the client will simply find a more tactful firm.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Do the easy fix",
        text: "Focus solely on the incentive structure. Deliver a clean, well-scoped project on time and on budget. Use the success of this small win to build political capital with the CEO. After the project closes, propose a new, separate project to the CEO on 'Unlocking the Next Tier of Performance'—which will focus on the culture work once a success foundation has been laid.",
        expertRationale: "This prioritizes commercial continuity and relationship building over immediate impact. It accepts the slow path, but it is a realistic strategy in a change-averse environment. The consultant plays the 'long game,' sacrificing the immediate, large impact for the political opportunity to do the right work later. It's a calculated deferral.",
        expertRanking: 2
      }
    ],
    overall: "An executive's reluctance to address a painful truth is a common problem. Option B is too aggressive. Option C is too passive. Option A is the subtle solution: it uses the client's preferred project as the Trojan horse for the necessary, harder work. The consultant delivers the client's wish (incentives) while ensuring the firm's focus (culture) is the real success metric.",
    takeAway: "The true advisory move is to embed the necessary hard work inside the client's preferred easy project."
  },
  {
    id: 11,
    moduleId: 2,
    title: "Client Blames the Data",
    prompt: "You’ve just presented a strategy that, based on your data, requires shutting down one of the client’s oldest and most emotionally valued business lines. The General Manager of that division, a twenty-year veteran, pushes back emotionally, 'Your data is flawed; you don't understand our market or our history. This is just a consultant template!' Your Manager is watching to see if you can defend the analysis without escalating the conflict.",
    responses: [
      {
        id: "A",
        title: "Shift to Shared Criteria",
        text: "Acknowledge the GM's history and passion immediately. State, 'I agree, the history and passion are assets. Let's set the data aside for a moment. Can we agree on the criteria for success? If the objective is a 15% ROI, and we can all agree this business line will never get there, then the decision is made by the goal, not the data.' Reframe the decision from analysis to objective.",
        expertRationale: "This is a brilliant advisory pivot. It de-escalates the emotional conflict by acknowledging the GM's feelings and then moves the discussion to an objective, mutually agreed-upon truth: the business goal. By making the goal the 'bad guy,' the consultant removes the need to defend the data, making the decision seem inevitable and non-personal. It’s a very high-level move.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Offer a Re-Audit",
        text: "Suggest a two-week 'deep-dive audit' of the specific data set in question, inviting the GM's team to shadow the process to ensure full transparency and buy-in. State, 'We want you to be 100% comfortable with the findings.' Continue with the rest of the presentation, but acknowledge that the final recommendation on this line is pending the audit.",
        expertRationale: "This is a safe but slow move. It defers the conflict and shows good faith but wastes time and budget on work you already know is correct. It validates the GM's emotional argument by giving the impression that the data might actually be flawed. It is often a necessary compromise when a key sponsor must be brought along, but it costs momentum.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Defend the Methodology",
        text: "Firmly defend the data, step-by-step. Provide a brief, detailed walkthrough of the methodology, key assumptions, and sources, emphasizing the 'peer-reviewed rigor' of the firm's approach. State, 'Our analysis is based on three external market benchmarks, validated by five internal sources, and cannot be dismissed as a template.' Refuse to proceed until the GM accepts the data's validity.",
        expertRationale: "This escalates the conflict by turning the conversation into a battle over intellectual superiority. The GM is acting on emotion and legacy, not a technical data flaw, so defending the methodology will only harden their stance. The consultant is prioritizing technical correctness over the emotional and political reality of the room, failing to move the client toward action.",
        expertRanking: 3
      }
    ],
    overall: "When a client pushes back emotionally, arguing data will never win. Option C turns the debate into a fight. Option B is a slow delay. Option A is the strongest advisory tactic: it bypasses the data argument by shifting the focus to the client's own agreed-upon strategic goals. If the business line violates the stated goal, the GM's emotional argument is rendered irrelevant without needing a fight.",
    takeAway: "Bypass emotional data disputes by re-anchoring the decision on the client's non-negotiable strategic objectives."
  },
  {
    id: 12,
    moduleId: 2,
    title: "The Unethical Partner",
    prompt: "You are the project lead for a due diligence engagement. While reviewing financial models, you notice your firm's Partner has significantly inflated the projected synergies for the acquisition target to make the deal look more attractive to the client's private equity investment committee. The Partner explicitly told you, 'This is how we win business; just clean up the formatting and don't mention it.' You know the inflated numbers could lead the client to make a poor, multi-billion dollar investment.",
    responses: [
      {
        id: "A",
        title: "Raise it with Legal/Risk",
        text: "Immediately and discreetly contact your firm's internal risk management or legal counsel. State that the model contains financially misleading and inflated projections that could expose the firm to legal risk. Ask for a confidential review by an independent internal expert team before the final report is signed off. Proceed with the formatting as instructed by the Partner, but make the intervention through the proper channel.",
        expertRationale: "This is the correct, necessary, and career-protecting move. It addresses the ethical and legal breach while protecting the junior consultant from a direct confrontation with the Partner. It uses the firm's structure to enforce professional standards, signaling high integrity without resorting to public or direct conflict, which is a key unwritten rule for protecting yourself.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Adjust the Numbers Anyway",
        text: "Refuse to use the Partner's inflated numbers. Quietly revise the synergy numbers down to the firm's original, defensible model. When the Partner questions it, explain that the 'back-up slides' in the appendix contain the original higher numbers but that you 'cleaned up the front-end to reflect the most conservative, defensible estimate to protect the firm's name.'",
        expertRationale: "This is a courageous but high-risk move. It forces a direct conflict with the Partner, who has already given a clear instruction. While ethically pure, it risks being seen as insubordination, and the Partner will likely simply override the consultant's numbers, creating internal political fallout and potentially leading to the consultant's sidelining on future high-stakes work.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Add a Disclaimer",
        text: "Keep the Partner's inflated numbers in the main report but add a very specific, technical footnote to the key slide on synergies: 'Note: Synergies reflect an optimistic case contingent upon a 100% successful integration and zero regulatory delays, based on management's stated ambition.' Use the footnote to hedge the firm's liability and signal the risk to the more technical members of the client's committee.",
        expertRationale: "This is a compromise that attempts to satisfy both the Partner and the consultant's conscience. It is a classic 'CYA' (Cover Your A--) move. While better than nothing, it is still complicit in the intentional inflation and relies on the client's committee noticing and acting on a small footnote, which often does not happen. It is insufficient for such a material financial misrepresentation.",
        expertRanking: 2
      }
    ],
    overall: "Professional services are built on trust and ethics. When a senior person violates this, you must use the firm's structure for protection. Option B is too self-sacrificing. Option C is insufficient. Option A is the only move that protects the consultant, the client, and the firm's long-term reputation by using the proper, confidential internal governance channels to enforce a necessary correction.",
    takeAway: "When faced with an ethical breach by a superior, use the firm's official risk or legal channels; do not engage in a direct, personal conflict."
  },
  {
    id: 13,
    moduleId: 2,
    title: "Client is Not Implementing",
    prompt: "Six weeks after completing a major operational transformation that cost the client $5 million, you find out the client's implementation team has stalled. The Head of Operations is afraid of the internal pushback from managers who dislike the new process. You know the stalled project will be deemed a failure, damaging your firm's brand and making future work impossible. Your current contract is over, and your Manager wants you to move to the next project.",
    responses: [
      {
        id: "A",
        title: "Launch an 'Adoption Review'",
        text: "Contact the Head of Operations immediately. Do not charge a fee, but offer to do a one-week, pro-bono 'Adoption Review' to identify the top three implementation blockers. Frame the goal not as 'fixing the project' but as 'securing the firm’s $5 million investment.' Use the findings to propose a small, targeted, paid 'Change Management Sprint' that re-launches the effort and provides cover for the Head of Ops.",
        expertRationale: "This is a high-value, proactive advisory move. By offering a pro-bono 'review,' the firm shows commitment to the client's success beyond the invoice. It gives the Head of Operations cover and a path forward. The consultant converts a project failure into a new, smaller, high-impact paid engagement focused on implementation, securing the value and the relationship for the long term.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Formally document the failure",
        text: "Write a formal email to the Head of Operations (cc'ing your Manager) stating that the firm has completed its obligations and that the client's subsequent lack of execution is a client-side risk. Advise that all further work would require a new, paid contract and a dedicated, client-sponsored implementation team. Recommend a formal 'Project Closure' to document the firm's clean delivery.",
        expertRationale: "This is a 'CYA' (Cover Your A--) move that protects the firm legally but completely sacrifices the relationship. It's adversarial, suggesting the firm only cares about legal liability and not the client's ultimate outcome. The firm wins the documentation battle but loses the client and all future revenue. It's a failure of advisory partnership.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Focus on the Sponsor",
        text: "Contact the Head of Operations privately. Empathize with their political problem. Offer to have a private, off-the-record conversation with the line managers who are pushing back, using the firm's status as a 'neutral third party' to help the Head of Ops identify the root cause of the resistance. Do not offer a new contract; focus on a political save for the sponsor.",
        expertRationale: "This is a good, low-cost move that is strong for the sponsor relationship. The consultant acts as a political fixer, building a personal bond that may lead to future work. However, it is an informal solution that does not guarantee the project's success and lacks the structure and formal pathway to a new, paid engagement that Option A provides.",
        expertRanking: 2
      }
    ],
    overall: "Advisory success is implementation, not just delivery. Option B is defensive, and Option C is informal. Option A is the ultimate display of partnership: the firm invests a little unbilled time to protect the client's massive investment, which is a powerful message. It turns a potential failure into a new, focused revenue opportunity, demonstrating commitment to the 'last mile' of value.",
    takeAway: "Pro-bono 'Adoption Reviews' convert stalled projects into new, paid 'Change Management' engagements and protect the brand."
  },
  {
    id: 14,
    moduleId: 2,
    title: "Client Wants to Break the Law",
    prompt: "You are reviewing the client's tax optimization strategy. The client's Head of Finance suggests a highly aggressive, legally ambiguous accounting maneuver that would save the company $20 million but carries a significant risk of criminal prosecution for the individual who signs off on it. The Head of Finance says, 'We've used similar loopholes before; just put it in the report as the primary recommendation.' Your firm’s policy strictly prohibits involvement in legally ambiguous strategies.",
    responses: [
      {
        id: "A",
        title: "Refuse and Document",
        text: "Politely but firmly decline to include the maneuver, citing the firm's internal risk and compliance policy. State, 'Our mandate is to provide defensible, compliant strategies.' Inform the Head of Finance that you will document their request for the maneuver in your internal project risk log and that the final report will contain a section on 'Compliance Non-Negotiables' that explicitly rules out this type of accounting.",
        expertRationale: "This is the necessary, non-negotiable ethical and legal stance. The consultant must prioritize the firm's reputation and legal safety over the client's desire for an aggressive tax strategy. The documentation is critical for internal protection. The consultant risks losing the client but protects the firm's core integrity, which is paramount.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Offer a Third-Party Review",
        text: "Acknowledge the potential saving but suggest a necessary step. State, 'Due to the complexity, our policy requires us to get an external, independent legal counsel's opinion on this specific maneuver before we can endorse it.' Suggest they hire a specific boutique law firm for this opinion, thereby passing the liability and the final 'yes' or 'no' decision to a third party.",
        expertRationale: "This is a clever deferral of liability. It avoids a direct conflict with the client while still ensuring the firm does not endorse the illegal activity. It shows the client how serious the maneuver is by requiring external legal sign-off. However, it still allows the client to potentially proceed with the strategy, which may be against the spirit of the firm's ethics policy.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Include a Heavily Footnoted Disclaimer",
        text: "Include the maneuver in the report as 'Option C: High-Risk Strategy' but add a heavy, multi-paragraph legal disclaimer that explicitly states the firm takes no responsibility for the legal outcome and strongly advises against it. Recommend 'Option A' as the primary, legally compliant path and let the client sign off on the risk themselves.",
        expertRationale: "This is insufficient. Adding a disclaimer to an unethical or illegal recommendation does not absolve the firm of its advisory responsibility, and it signals a weakness in professional ethics. The firm is complicit in presenting a high-risk strategy simply because the client asked for it, prioritizing a 'check-the-box' defense over true advisory leadership.",
        expertRanking: 3
      }
    ],
    overall: "The line between aggressive optimization and legal liability is a non-negotiable boundary for a professional firm. Option C and B compromise that boundary. Option A is the only responsible course of action. It prioritizes the firm's and the individual's legal and ethical safety above all commercial concerns, as the cost of a compliance breach is catastrophic.",
    takeAway: "Ethical boundaries are non-negotiable; refuse, document, and let the client know your firm’s reputation is the non-tradeable asset."
  },
  {
    id: 15,
    moduleId: 2,
    title: "Client Wants a Template",
    prompt: "Your client's CEO is known for being extremely cost-conscious and skeptical of consulting fees. You are pitching a customized digital strategy. The CEO interrupts: 'I see your firm sold a similar strategy to Competitor X last year. Why can't you just give us their deck for half the price? We just need the blueprint, not the whole performance.' Your firm's entire value proposition is custom-fit solutions, and using the template would violate confidentiality with Competitor X and deliver a sub-optimal result.",
    responses: [
      {
        id: "A",
        title: "Frame it as a Mismatch",
        text: "Gently decline, using a sharp analogy: 'We don't sell blueprints; we sell houses. Competitor X's house was built on a different foundation, with a different zoning code. We can hand you their blueprint, but it will be a multi-million dollar mistake when it collapses on your unique business plot. We can adapt the best features, but a custom design for your foundation is the only guarantee of success.'",
        expertRationale: "This is the strongest advisory response. It doesn't criticize the CEO, but it uses a powerful, relatable analogy to illustrate the danger of using a template (sub-optimal, catastrophic failure). It re-asserts the value of customization and frames the firm as protecting the client from a costly error, thereby justifying the higher fee. It moves the discussion from cost to risk and value.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Offer a 'Template Plus' Option",
        text: "Offer a compromise: 'We can give you the template framework for half the price. However, we must stress that 80% of the value is in the 20% of work—the deep-dive customization and political wiring. We'll give you the template, but we recommend a three-week 'Customization Sprint' at the full rate to ensure it actually works here.'",
        expertRationale: "This is a good commercial hedge. It satisfies the CEO's demand for the 'template' (the blueprint) but immediately re-scopes the necessary work. It accepts a lower fee for the low-value work and attempts to salvage the high-value customization. However, it violates the spirit of the confidentiality agreement with Competitor X, which is a significant ethical risk.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Focus on Confidentiality",
        text: "Politely but firmly refuse, stating, 'That deck is covered by a strict confidentiality agreement, and our integrity on that is non-negotiable; it's why you can trust us with your own data.' Reassure the CEO that your firm's value is in the 'accelerated process' that avoids the pitfalls and wasted time that Competitor X had to endure, which is where the real fee saving is realized.",
        expertRationale: "This is a strong ethical response that avoids the legal risk of Option B. It uses the firm's ethical policy (confidentiality) as a commercial asset, telling the client, 'We protect your secrets just as we protect theirs.' It's a credible and defensible position, but it may not fully address the CEO's underlying cost concern as effectively as the analogy in Option A.",
        expertRanking: 2
      }
    ],
    overall: "The core value of consulting is customization and trust. Option B is ethically risky. Option C is correct but doesn't fully address the commercial issue. Option A is the ultimate advisory pitch: it reframes the value proposition from a 'deck' to a 'successful outcome' by using a compelling analogy. It convinces the CEO that the higher fee is an insurance policy against catastrophic failure.",
    takeAway: "Defend custom work with powerful analogies; frame the use of a template as a high-risk, catastrophic mistake."
  },
  {
    id: 16,
    moduleId: 2,
    title: "Client is Too Attached to a Tool",
    prompt: "You have spent a month diagnosing the client's poor sales performance. The data conclusively shows the fault is in the sales team's rigid, old process and poor incentive design. The Head of Sales, however, is emotionally and financially invested in a newly implemented, expensive CRM system that they champion. The Head of Sales argues, 'It must be the CRM; let's spend the next three months customizing it further to solve the problem.' You know this would be a colossal waste of time and budget.",
    responses: [
      {
        id: "A",
        title: "Focus on Behavioral Leverage",
        text: "Agree to a short, one-month 'CRM Effectiveness Sprint.' Immediately shift the focus of the sprint from customizing the tool to 'driving process adoption' and 'designing new incentives' *within* the CRM. Frame the goal as making the existing CRM work 'for the Head of Sales,' thereby using the cherished tool as the vehicle for the necessary (but un-liked) process and incentive changes.",
        expertRationale: "This is the most astute advisory move. It validates the Head of Sales's investment in the CRM, which is a critical political move. By using the tool as the 'Trojan horse' for the necessary process and incentive changes, the consultant avoids a confrontation. The client gets to keep their tool, and the consultant gets to fix the real problem, all while generating a new, targeted paid engagement.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Tool Directly",
        text: "Re-present the diagnostic findings, this time focusing on a single, compelling data point: 'Only 5% of your team uses the CRM correctly, which is a process and incentive problem, not a system problem.' Demand that the Head of Sales agree to a full, three-month project on process re-design and incentives before any further budget is spent on the CRM, or threaten to walk away from the engagement.",
        expertRationale: "This is technically correct but an extreme escalation. It forces the Head of Sales to admit their expensive new project was a mistake, which they are unlikely to do. The consultant is prioritizing the 'truth' over the 'relationship' and risks losing the client and the future engagement. It is a failure of political sensitivity.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Suggest a Phased Approach",
        text: "Agree to a two-month focus on the CRM customization, but insist on running a small, parallel pilot project on process and incentives with a select team. Frame the two tracks as 'A/B testing' to prove which delivers the most significant ROI. State, 'The data from the pilot will definitively guide our next three months of work and future budget allocation.'",
        expertRationale: "This is a defensible compromise. It manages the Head of Sales's desire for the CRM work while forcing a data-driven path to the real solution. The parallel pilot acts as an insurance policy. However, it wastes the first two months on work the consultant knows is sub-optimal, but the trade-off is political capital and a shared, data-based decision in the future.",
        expertRanking: 2
      }
    ],
    overall: "The client's sunk cost and ego in a project are major political forces. Option B is confrontational. Option C is a delay. Option A is the ultimate advisory move: it makes the client's preferred solution (the CRM) the non-negotiable vehicle for the consultant's necessary solution (process/incentives). It respects the client's political reality while forcing the correct outcome.",
    takeAway: "The best advice makes the client’s existing, emotionally charged decision the hero of your new, necessary solution."
  },
  {
    id: 17,
    moduleId: 2,
    title: "Client is Too Secretive",
    prompt: "You are working on a strategy project for a sensitive national security client. To get the final, crucial data set, the Chief of Staff (CoS) asks you to personally sign a new, highly restrictive Non-Disclosure Agreement (NDA) that includes a clause prohibiting you from using any of the 'methods or learning' from this engagement for five years. This would effectively block you from using the experience on any future, similar projects, seriously limiting your career path. Your firm's policy is to never sign NDAs that restrict future methodology use.",
    responses: [
      {
        id: "A",
        title: "Use the Firm's Policy as a Shield",
        text: "Inform the CoS that the firm's global legal policy strictly prohibits individual consultants from signing methodology-restricting NDAs. State that your Partner will need to review and sign an amendment that protects the client's data but allows the firm to use the 'general know-how' for future, non-competitive work. Use the policy to protect your personal career and the firm's commercial asset (methodology).",
        expertRationale: "This is the correct professional move. It uses the firm's policy as a non-negotiable shield to protect the consultant from a career-limiting restriction. By escalating to the Partner, the consultant ensures the firm's legal team, not the individual, negotiates the critical balance between client security and the firm's commercial asset (methodology). This is smart career protection.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Sign the NDA to Get the Data",
        text: "Sign the NDA immediately, privately rationalizing that the restriction is unenforceable or that you can 'fudge' the knowledge transfer later. Focus on securing the data immediately to get the project done and ensure the client is happy. Tell your Manager you were forced to sign it to move the project forward and hope the restriction is forgotten by the client after the project ends.",
        expertRationale: "This is a short-term solution with catastrophic long-term risks. It places the individual consultant in potential breach of contract and legal jeopardy while sacrificing the firm's proprietary methodology. It prioritizes project speed over legal and commercial integrity, violating a fundamental unwritten rule about protecting the firm's intellectual property.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Offer to Review a Summary",
        text: "Tell the CoS that you understand the sensitivity and cannot sign the restrictive NDA. Offer a compromise: ask the CoS to have a trusted internal analyst review the data and only present a high-level 'summary of the findings' to you, redacting the raw details. Agree to conduct the strategy work based on the summary, not the raw data, thereby mitigating the need for the NDA.",
        expertRationale: "This shows flexibility but compromises the rigor of the analysis. The consultant is sacrificing the quality of the advice by not vetting the raw data, potentially leading to a sub-optimal recommendation based on a client-filtered summary. While it avoids the NDA conflict, it compromises the core professional duty of providing advice based on fully vetted data.",
        expertRanking: 2
      }
    ],
    overall: "A firm's methodology and a consultant's career knowledge are non-negotiable assets. Option B is career suicide. Option C compromises the work. Option A is the necessary, professional move: use the firm's legal policy as a shield to escalate the issue to the proper legal authority, ensuring the client's needs are met without sacrificing the firm's or the individual's long-term commercial interest.",
    takeAway: "Protect your career by using your firm's legal policy as a non-negotiable shield against restrictive, career-limiting NDAs."
  },
  {
    id: 18,
    moduleId: 2,
    title: "Client Only Wants Big Numbers",
    prompt: "You are presenting a three-year roadmap for cost reduction. The client's Procurement Director, who is responsible for hitting a very aggressive annual savings target to secure their bonus, asks you to remove all the small, low-hanging-fruit savings (e.g., $100k-$500k savings) from the roadmap and focus only on the large, multi-million-dollar structural changes. You know that the cumulative effect of the small wins is critical for building momentum and reaching the overall target in the first year.",
    responses: [
      {
        id: "A",
        title: "Group the Small Wins",
        text: "Agree to remove the individual line items. Instead of listing them, group all the small, low-hanging fruit into a single, large item called 'Phase 1: Procurement Process Optimization.' State, 'This phase pools all the quick, low-effort savings into one $3 million tranche, guaranteeing you hit your first-year target and funding the big structural changes.' Make the small wins look like one big number.",
        expertRationale: "This is a shrewd way to satisfy the Procurement Director's ego (the need for a big number) while maintaining the integrity of the roadmap (the necessity of the small wins). The consultant uses creative accounting/framing to align the roadmap with the client's political and financial reality, ensuring the critical, early-stage momentum is preserved and the firm's credibility is enhanced.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Director's Focus",
        text: "State that the structural changes will take 18-24 months to yield savings and that the Director will fail to hit the first-year bonus target without the low-hanging fruit. Reiterate that the consultant's job is to deliver the full solution, not just the high-profile parts. Suggest they delegate the small wins to a junior team, but insist on keeping them visible in the roadmap.",
        expertRationale: "This is a technically correct but politically insensitive approach. It publicly calls out the Director's motivation (their bonus) and forces them to confront a reality they are trying to avoid. The consultant is seen as being rigid and unwilling to help the client meet their internal, high-stakes goals, which is a key failure of advisory partnership.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Split the Roadmap",
        text: "Agree to create two roadmaps: one 'Internal Roadmap' that contains all the small wins for the implementation team, and one 'Executive Roadmap' that focuses only on the multi-million-dollar structural changes for the Board presentation. Promise the Director that the firm will manage the 'unseen' implementation of the small wins, ensuring the full target is met without cluttering the executive view.",
        expertRationale: "This is a pragmatic compromise. It gives the Director the simplified, high-impact view they need while still allowing the implementation team to do the necessary work. It's an acceptance of the political reality that executives care about headlines and don't want detail. However, it creates a risk of disconnect between the two roadmaps and relies on the implementation team doing unseen work, which may stall.",
        expertRanking: 2
      }
    ],
    overall: "An executive's focus on a single, large number is often tied to their internal performance. Option B is confrontational. Option C is a good compromise. Option A is the superior move: it actively solves the Director's problem by reframing the necessary small actions into a headline number. The consultant shows a high level of commercial and political intelligence, making the client's internal success the firm's priority.",
    takeAway: "Group low-impact actions into a single, high-impact 'Tranche' to satisfy executives' need for a big headline number."
  },
  {
    id: 19,
    moduleId: 2,
    title: "The Unhelpful Expert",
    prompt: "You are presenting a turnaround strategy. The client's Chief Technology Officer (CTO), an old-school technical expert, interrupts your presentation multiple times, asking hyper-detailed, distracting technical questions about the data and methodology that are irrelevant to the executive decision at hand. The CTO's goal is clearly to derail the presentation, as he opposed hiring a consulting firm in the first place. You need to regain control of the room without alienating him or looking evasive.",
    responses: [
      {
        id: "A",
        title: "Parking Lot and Re-anchor",
        text: "Acknowledge the CTO's technical expertise: 'That's a fantastic, deep-dive question, CTO.' Immediately write the question on a flip chart and call it the 'Technical Parking Lot.' State, 'We must park that to ensure the CEO gets the final decision today, but I promise the first item on our agenda after this meeting is to address every point in the Parking Lot with you, one-on-one.'",
        expertRationale: "This is the classic, highly effective advisory move. It validates the CTO's ego and expertise by treating the question as important, but it immediately reclaims control of the meeting by asserting the purpose (the CEO's decision). The consultant manages the room's attention by isolating the technical noise for a private, later discussion, showing respect without allowing the derailment.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Deflect to a Junior",
        text: "Turn to the most junior member of your team who is present: 'Analyst, you led the technical modeling on that. Can you quickly give the CTO a two-minute overview of the methodology?' This deflects the technical question to the appropriate level, potentially satisfying the CTO's curiosity, while the consultant maintains the focus on the executive presentation.",
        expertRationale: "This is a decent move that protects the consultant's executive focus. However, it risks putting a junior team member in a difficult, high-pressure situation, having to defend a complex model to an uncooperative expert. It also implies that the consultant cannot answer the question themselves, which may weaken the firm's overall authority in the room.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Demand Respect for the Agenda",
        text: "Politely interrupt the CTO: 'CTO, with all due respect, we are discussing a strategic decision for the firm, not a technical deep-dive. Let's focus on the executive levers and reserve the technical details for a separate working session.' Point to the agenda slide and insist on moving the conversation forward to the next decision point.",
        expertRationale: "This is a direct, high-conflict move that publicly shames the CTO, alienating a key, powerful stakeholder. While it may immediately regain control, it confirms the CTO's suspicion that consultants are arrogant and ignore technical reality. The consultant is perceived as rigid and confrontational, which is detrimental to the partnership culture.",
        expertRanking: 3
      }
    ],
    overall: "An executive meeting is about strategic action, not technical detail. Option C is too aggressive. Option B is a risky deflection. Option A is the ultimate advisory compromise: it flatters the technical expert's ego (by 'Parking Lot-ing' the question) while protecting the executive's time and the flow of the decision-making process. The consultant shows control, respect, and focus.",
    takeAway: "When a technical expert derails a strategic meeting, immediately 'Parking Lot' the detail for a later, private session to control the room."
  },
  {
    id: 20,
    moduleId: 2,
    title: "Client is Overly Emotional",
    prompt: "You are presenting a new staffing model that will result in the loss of 20 long-term, well-liked administrative jobs. The CEO is visibly upset and emotional, stating, 'We are a family here; I can't look these people in the eye. Let's find another way.' The model is based on non-negotiable economic necessity for the company's survival. Your Manager is not in the room, and you must deliver the tough message while acknowledging the CEO's genuine distress.",
    responses: [
      {
        id: "A",
        title: "Focus on the 'Survival' Goal",
        text: "Validate the CEO's emotion: 'I respect your commitment to your people, and this is the hardest part of leadership.' Immediately reframe the decision: 'Our choice today is not about losing 20 people; it's about saving the 500 jobs that remain. The economic model shows that without this move, all 520 jobs will be gone in 18 months. Let’s focus on the next step: a compassionate, dignified transition plan for the 20.'",
        expertRationale: "This is the 'tough love' advisory move. It validates the CEO's feeling but immediately re-anchors the conversation on the fiduciary duty to the entire company. By framing the decision as a choice between '20 jobs vs. 500 jobs,' the consultant provides the CEO with the necessary moral justification to proceed. It converts raw emotion into focused action (a transition plan).",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Offer a Two-Week Delay",
        text: "Agree to pause the decision for two weeks, telling the CEO, 'Let's take a breath and re-examine the financial model for any other possible options.' Use the two weeks to meet with the CEO's Chief of Staff to try to find a small, creative, non-core function where the 20 employees could be temporarily placed, thereby deferring the painful decision.",
        expertRationale: "This is an empathetic but professionally irresponsible delay. It avoids the necessary pain, which is the core advisory duty. While it satisfies the CEO's emotional need for a moment, it delays the essential action and costs the company critical time, implicitly undermining the robustness of the original financial model. It's a failure of conviction.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Delegate the Discussion",
        text: "Tell the CEO you'll set the numbers aside for now. Suggest that the next meeting should be a one-on-one with the Head of HR and the CFO to discuss the 'implementation mechanics' of the new staffing model, thereby moving the discussion from the emotionally charged decision to a cold, process-oriented discussion among the implementers. Avoid discussing the human cost further with the CEO.",
        expertRationale: "This is a shrewd, politically savvy deflection that respects the CEO's pain. It moves the discussion from 'should we' (the emotional choice) to 'how do we' (the mechanical implementation) among the appropriate functional leaders. However, it risks the CEO feeling that the pain was ignored, and the consultant is merely trying to bypass their feelings to achieve the required result.",
        expertRanking: 2
      }
    ],
    overall: "A CEO's emotional attachment must be acknowledged, but it cannot derail a non-negotiable decision. Option B is a costly delay. Option C is a cold deflection. Option A is the ultimate display of empathetic but firm leadership: it validates the CEO's pain but immediately reframes the choice as a noble sacrifice to save the greater good. The consultant earns trust by being both human and resolute.",
    takeAway: "Acknowledge the emotional cost, but immediately reframe the difficult decision as a non-negotiable act of fiduciary responsibility."
  },
  {
    id: 21,
    moduleId: 2,
    title: "Client Wants a Quick Fix",
    prompt: "Your analysis shows that the client's poor customer retention is due to a fragmented customer service process that requires a 9-month, organization-wide integration. The CEO, however, insists on an immediate 'quick fix'—launching a high-profile, expensive new loyalty program in four weeks. They say, 'We need a PR win now to satisfy the Board; the long-term fix can wait.' You know the loyalty program will fail spectacularly without the underlying process fix, potentially damaging the firm’s reputation.",
    responses: [
      {
        id: "A",
        title: "Link the Quick Fix to the Long Fix",
        text: "Agree to help design and launch the loyalty program in four weeks, but frame the program's success as 'Phase 1' of the 9-month transformation. State, 'The loyalty program is the perfect vehicle to pilot and pressure-test the new integrated customer service process. We'll use the next four weeks to fix the core process for the pilot team, guaranteeing the loyalty program’s success and generating the data needed to sell the full 9-month overhaul to the Board.'",
        expertRationale: "This is a masterclass in advisory tactics. It satisfies the CEO's short-term political need (PR win) while using that very win as the non-negotiable vehicle for the necessary long-term work (process integration). The consultant turns the client's 'distraction' into the 'Trojan horse' for the real solution, making the loyalty program's success dependent on the firm's main scope of work.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Highlight the Reputational Risk",
        text: "Politely decline to work on the loyalty program. State, 'Our professional integrity prevents us from endorsing a solution that is guaranteed to fail due to the underlying process fragmentation. We would be risking your brand and ours.' Insist that the only responsible path is to start the 9-month process integration immediately, or you will have to withdraw from the engagement.",
        expertRationale: "This is an extreme stand on principle. While ethically pure, it ignores the CEO's very real political need for a short-term win. The consultant is seen as rigid and unhelpful, making the client feel unsupported in their immediate crisis. This is a confrontation that risks the entire relationship and is unnecessary when a compromise is possible.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Do the Quick Fix Pro Bono",
        text: "Offer to help the CEO launch the loyalty program in four weeks, pro-bono, to secure the political win. State, 'We'll help you get this PR win, but the clock starts on the 9-month process fix the day the loyalty program launches.' Use the four weeks to build trust and gather internal intelligence, then use the goodwill to push for the full, paid transformation.",
        expertRationale: "This is a commercially savvy compromise. It builds significant political capital by doing a favor for the CEO. However, it risks the firm spending unbilled time on a sub-optimal solution. It defers the real work, but it is a realistic strategy for a client-driven, time-pressured environment where the political relationship must be secured first.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor satisfies the client's political need (PR win) while forcing the essential, long-term fix. Option B is too rigid. Option C is a good favor. Option A is the ultimate advisory move: it uses the quick fix as the necessary leverage point to sell and execute the long-term solution. The consultant shows a perfect balance of commercial savviness and professional rigor.",
    takeAway: "The client's 'quick fix' is your best opportunity: use it as the high-stakes pilot for your necessary, long-term solution."
  },
  {
    id: 22,
    moduleId: 2,
    title: "Client Wants to Delay a Decision",
    prompt: "You’ve presented a major supply chain rationalization plan that requires the closure of two distribution centers (DCs), which will cause political heat for the client’s COO. The COO concludes the meeting by saying, 'The plan is great. But before we pull the trigger, let’s commission an independent, third-party firm to validate the analysis. It’ll take six weeks.' You know this is a delay tactic, and every week of delay costs the company $1.5 million. Your Manager is not available.",
    responses: [
      {
        id: "A",
        title: "Quantify the Delay Cost",
        text: "Acknowledge the request for validation, but immediately follow up with a crisp, one-slide visual showing the 'Cost of Delay.' State, 'We fully support any validation, but we must be transparent that a six-week delay means $9 million in avoidable losses. Can we agree to execute the first, non-irreversible steps—like freezing hiring at the two DCs—immediately while the validation is underway, to mitigate the cost?'",
        expertRationale: "This is the ideal advisory move. It accepts the political reality of the COO's delay request but immediately counters it by quantifying the financial impact, making the delay itself the new problem. By proposing a small, non-irreversible step (hiring freeze), the consultant ensures forward momentum and shows commitment to saving the client money, which is the ultimate advisory duty.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Request",
        text: "Politely but firmly push back, stating, 'Our firm has the most robust supply chain practice in the world, and our model has been internally peer-reviewed. An external validation would be a waste of $500k and six critical weeks.' Ask the COO directly, 'What specific finding are you uncomfortable with that requires a costly external review?'",
        expertRationale: "This is technically sound but politically naive. It is an internal challenge that publicly questions the COO's decision and implies a lack of trust in their political judgment. The consultant is prioritizing the firm's ego over the client's need for political cover, which is a common reason relationships break down. The cost of delay is high, but the cost of challenging the COO is higher.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Offer Your Team for Validation",
        text: "Accept the need for validation, but offer your team to conduct the 'third-party' review themselves in half the time. State, 'We have the capacity to dedicate two senior analysts to a two-week, deep-dive re-review, which will be faster and cheaper than hiring an outside firm. We'll present the re-validated findings to your executive team in 14 days, saving you four weeks of cost.'",
        expertRationale: "This is a good, proactive compromise. It meets the COO's need for a second look while protecting the firm's credibility and saving the client time/money. However, the 'third-party' element is diluted, as the review is internal, which may not satisfy the COO's need for genuine political cover from an outside source. It sacrifices some objective distance for speed.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor allows a client to manage their political reality but never at the expense of the company's financial health. Option B is too confrontational. Option C is a good compromise. Option A is the strongest: it accepts the delay but immediately turns the delay's cost into the new problem the COO must address, thereby forcing a small, non-irreversible action that keeps the momentum going.",
    takeAway: "Accept the client’s political delay, but immediately quantify the 'Cost of Delay' and use it to force an early, irreversible step."
  },
  {
    id: 23,
    moduleId: 2,
    title: "Client is Overly Focused on Cost",
    prompt: "You are pitching a major digital transformation project. The client’s Head of IT is obsessed with the total cost of the project and keeps cutting the budget for the necessary 'change management' and 'training' work, which is critical for the success of the new system. The Head of IT states, 'My team can handle the training; just give me the core system build price.' You know a system that nobody uses is a $50 million failure waiting to happen.",
    responses: [
      {
        id: "A",
        title: "Frame Change as an Insurance Policy",
        text: "Agree to the lower system build price, but immediately reframe the training/change management work as 'Implementation Insurance.' State, 'We can deliver the system at this price, but without the training, the ROI is a coin flip. The $2 million for Change Management is not a cost; it's a 100% guaranteed insurance premium to protect your $50 million system investment from becoming shelfware. Without it, we can't guarantee adoption.'",
        expertRationale: "This is an exceptional advisory move. It avoids the argument over cost by shifting the conversation to the client's risk (the $50 million investment). By framing change management as a necessary 'insurance premium,' the consultant forces the Head of IT to choose between a minor additional cost and a catastrophic failure, thereby making the essential work a non-negotiable part of the value proposition. It is a shrewd negotiation.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Build the Cost into the System Price",
        text: "Remove the separate line item for Change Management. Quietly increase the price of the core 'System Build' by the amount needed for the essential training/change work. When the Head of IT asks about the lack of change cost, explain that 'essential adoption support is now baked into the core implementation to ensure success.' Do not offer to remove the training, but obscure the cost.",
        expertRationale: "This is a commercial fudge. It ensures the necessary work gets done and protects the firm's reputation, but it is a slightly deceptive pricing tactic. It may lead to a loss of trust if the Head of IT discovers the hidden cost later. The consultant is prioritizing the result over full financial transparency, which is a risky trade-off in a long-term relationship.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Warn with Historical Data",
        text: "State that the firm has a policy: 'We do not build a system without the necessary change management, as our historical data shows a 90% failure rate for systems that skip training.' Warn the Head of IT that the firm will add a formal 'Client Waiver' to the contract, acknowledging that the firm cannot be held responsible for the lack of ROI due to inadequate training.",
        expertRationale: "This is a safe, defensive 'CYA' move. While it clearly sets the professional boundary, it is perceived as arrogant and adversarial. The consultant prioritizes protecting the firm from liability over helping the client succeed. The threat of a public 'waiver' alienates the client and violates the spirit of partnership, making the firm look more focused on legal defense than value.",
        expertRanking: 3
      }
    ],
    overall: "The client's failure is the consultant's failure, regardless of the contract. Option C is too defensive. Option B is a risky fudge. Option A is the ultimate advisory move: it uses the client's own concern (the $50 million system cost) to justify the necessary additional work (training/change management) by framing it as a non-negotiable insurance policy. The consultant is seen as protecting the client's investment.",
    takeAway: "Frame essential, low-priority work (like Change Management) as a non-negotiable 'Insurance Policy' for the high-cost project."
  },
  {
    id: 24,
    moduleId: 2,
    title: "The Impossible Deadline",
    prompt: "The client's COO demands that the final report for a complex organizational redesign be delivered in two weeks, instead of the contracted four weeks, because 'the Board meeting got moved up, and we need to announce the results now.' You know that rushing the final two weeks of analysis—which involves crucial, sensitive interviews with middle managers—will produce a flawed, consensus-driven, and ultimately toothless recommendation that won't fix the problem. The COO insists, 'Just do your best; perfect is the enemy of done.'",
    responses: [
      {
        id: "A",
        title: "Offer a Phased Report",
        text: "Agree to the two-week deadline, but immediately offer a 'Phased Report' approach. State, 'We can deliver a complete 'Directional Report' in two weeks, focusing on the high-level design and the cost case. We will deliver the crucial 'Implementation Roadmap,' containing the sensitive manager interviews and full risk assessment, in a follow-up presentation four weeks later, to ensure the final product is both timely and robust.'",
        expertRationale: "This is the best advisory compromise. It satisfies the COO's political deadline for the Board presentation (the 'Directional Report') while protecting the rigor of the final, crucial work (the 'Implementation Roadmap'). The consultant separates the 'headline' from the 'detail,' ensuring the Board gets a positive update without the firm sacrificing the quality of the necessary, politically sensitive work.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Quality",
        text: "Politely but firmly refuse, stating, 'A two-week deadline would mean sacrificing the integrity of the crucial manager interviews, resulting in a consensus-driven report that will fail to deliver the 15% cost saving you require.' Tell the COO that the firm is unwilling to put its name on a flawed, rushed product, and suggest the COO postpone the announcement or use a less detailed internal update.",
        expertRationale: "This is a professional stand on principle, but it is politically rigid and fails to recognize the COO's immediate, non-negotiable political problem (the moved Board meeting). The consultant prioritizes the firm's internal quality standards over the client's immediate, high-stakes external reality, which is a common failure point for advisory relationships.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Work Overtime and Deliver Flawed Report",
        text: "Agree to the two-week deadline and instruct the team to work 100-hour weeks. Deliver the report on time, but immediately add a verbal disclaimer to the COO: 'We must note that the compressed timeline means the manager-level feedback was not fully integrated, and the risk assessment is preliminary. We recommend an immediate, two-week post-Board 'Validation Sprint' to clean up the detail.'",
        expertRationale: "This prioritizes the deadline, showing commitment, but it sacrifices the quality of the core product and risks team burnout. The consultant is delivering a product they know is flawed, which compromises the firm's long-term reputation, even with a verbal disclaimer. It's a failure of conviction in the firm's own methodology.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor satisfies a political deadline without sacrificing professional quality. Option B is too rigid. Option C is a quality failure. Option A is the ultimate compromise: it uses a two-phase delivery (a 'Directional Report' followed by an 'Implementation Roadmap') to meet the deadline while preserving the rigor of the most crucial and sensitive analysis. The consultant is seen as flexible and outcome-focused.",
    takeAway: "Meet impossible deadlines by splitting the deliverable: the 'Headline' report for the deadline, the 'Detail' report for rigor."
  },
  {
    id: 25,
    moduleId: 2,
    title: "The Client Wants to Fire Someone",
    prompt: "Your review of the client's troubled project management office (PMO) concludes that the structure and process are fatally flawed, but you've also discovered the PMO Director is highly incompetent. The client’s CEO, knowing this, says to you privately, 'Just put a paragraph in the report that gives me the political cover to fire the PMO Director next week, and the rest is easy.' You know that firing the Director will only solve 10% of the problem, but it will secure the CEO's commitment to the larger, necessary structural change.",
    responses: [
      {
        id: "A",
        title: "The 'Change Agent' Framing",
        text: "Do not mention the word 'incompetent.' Write a paragraph that frames the PMO Director as 'uniquely unfit for the demands of the new, digitally-enabled PMO model' and 'lacking the future-facing leadership skills required to execute a transformation of this scale.' Frame the firing as a non-negotiable 'first step' to demonstrate the CEO's commitment to the new structural model.",
        expertRationale: "This is the ideal advisory move. It gives the CEO the necessary political cover without resorting to personal attacks. By framing the Director as a 'legacy fit' rather than a 'bad person,' the consultant maintains professional integrity while still achieving the desired political outcome (the firing). This also secures the CEO's buy-in for the real, hard work (structural change).",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Rationale",
        text: "Politely decline. State, 'Our report must focus on the system, not the person. If we fire the Director, you've only fixed 10% of the problem, and you've wasted the opportunity to use this event to sell the 90% structural fix.' Insist that the report focus only on the required structural changes and let the CEO find their own internal cover for the personnel move.",
        expertRationale: "This is professionally admirable but politically insensitive. It denies the CEO the necessary political leverage to sell the hard change to the organization. The consultant is prioritizing a pure, impersonal finding over the messy reality of change management, where personnel moves are often the non-negotiable first step to show commitment and seriousness.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Provide a 'Sub-Optimal Fit' Score",
        text: "Create a 'Talent Scorecard' in the report that objectively scores all PMO leaders against the required 'future-state' skills. Ensure the PMO Director scores very low on a few critical, high-profile criteria (e.g., 'Digital Fluency' or 'Change Leadership'). Let the low score speak for itself, thereby providing objective cover for the CEO's pre-determined personnel decision.",
        expertRationale: "This is a shrewd way to provide cover using an objective-looking artifact. The consultant avoids a direct accusation but creates the evidence necessary for the CEO's action. It is a good compromise, but it requires the consultant to design the scorecard with the outcome in mind, which borders on manipulating the data, but is a common political reality.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor recognizes that personnel moves are often the non-negotiable political 'first step' to unlock real structural change. Option B is too rigid. Option C is a clever fudge. Option A is the ultimate move: it provides the political cover the CEO needs by professionally reframing the director's exit as a necessary action for the new structural model's success. This is a subtle and high-impact advisory move.",
    takeAway: "Frame the required political firing as a necessary 'first step' to prove executive commitment to the larger structural change."
  },
  {
    id: 26,
    moduleId: 2,
    title: "Client is Too Optimistic",
    prompt: "You've presented a cost-saving strategy that requires a significant, painful layoff in the client's middle management. The CEO, clearly uncomfortable, pivots the conversation to a small, low-impact process improvement mentioned in the appendix, suggesting 'we start there, build momentum, and reassess the hard stuff later.' Your internal team believes the major action is critical for the client's survival. Your firm's fee structure depends on achieving the big, painful results.",
    responses: [
      {
        id: "A",
        title: "Embrace the small win",
        text: "Agree with the CEO that the small process change is an excellent starting point. Frame it as a 'quick win pilot' to test the joint operating model. Immediately draft a revised timeline focusing on the small change, while scheduling a 'deep-dive strategy session' with the CEO for next month to re-introduce the larger, difficult decision with fresh data.",
        expertRationale: "This defers the critical conversation, allowing the client to avoid pain. It creates a false sense of progress and risks project drift. While it temporarily preserves the relationship, it compromises the core fiduciary duty to advise on what's truly necessary for client survival, potentially undermining the firm’s value proposition.",
        expertRanking: 3
      },
      {
        id: "B",
        title: "Re-anchor the conversation",
        text: "Gently acknowledge the appeal of the quick win, but immediately re-anchor the discussion on the 'core economic urgency' shown in the analysis. Use a clear analogy—like 'patching a leak versus fixing the dam'—to highlight the impact gap. Clearly state that the small change is a good idea but insufficient to close the existential cost gap. Re-present the 'go/no-go' decision on the layoff.",
        expertRationale: "This is the 'tough love' move. It respects the CEO's discomfort while reasserting the professional obligation to confront the main issue. The analogy provides a non-technical, face-saving way for the CEO to accept the hard truth. It shows courage and commitment to the client’s success, which is the heart of true partnership.",
        expertRanking: 1
      },
      {
        id: "C",
        title: "Seek managerial backup",
        text: "Turn to your Manager (who is present) with a phrase like, 'Manager, based on our joint economic model, what are the implications of delaying the major action?' Use the internal alignment to create a unified front. Position the quick win as a potential 'Phase 2' activity, making it clear that Phase 1 must focus on the critical structural change to generate the necessary funding.",
        expertRationale: "This is a solid move, especially for a less senior consultant. It avoids a direct confrontation with the CEO by enlisting a higher-ranking firm member to deliver the tough message. This protects the junior consultant's relationship while still ensuring the critical advice is delivered, demonstrating team alignment and seriousness.",
        expertRanking: 2
      }
    ],
    overall: "The CEO is looking for an out. Option B confronts this avoidance directly, using clear, non-confrontational language to re-establish the critical priority—this is 'pulling the bandage off' with empathy. Option C is a strong professional fallback, leveraging internal structure. Option A fails the core test of professional honesty.",
    takeAway: "True professional courage means delivering necessary pain, not just pleasant possibilities."
  },
  {
    id: 27,
    moduleId: 2,
    title: "Selling the 'Unsexy' Fix",
    prompt: "You’ve discovered the client's biggest operational drag is a 20-year-old, poorly documented financial reconciliation process—an unglamorous, manual fix that will take 12 months. The client's Head of Digital is only interested in a high-profile, AI-driven 'chat-bot' project, stating, 'That reconciliation stuff is a dead end; we need a sexy, front-end win now.' You know the AI project will fail because the underlying data (from the reconciliation process) is garbage.",
    responses: [
      {
        id: "A",
        title: "Frame the Unsexy as a Foundation",
        text: "Acknowledge the value of the chat-bot. State, 'The chat-bot is a must-do, but it is entirely dependent on a 'single source of truth' for the data. We propose a 'Data Foundation Sprint'—the reconciliation fix—for the next 12 months. Frame it as the non-negotiable 'fuel' that will make the Head of Digital's 'rocket ship' (the chat-bot) a success, or else the rocket will be fueled with sand and crash publicly.'",
        expertRationale: "This is the ideal advisory strategy. It validates the client's exciting idea (the chat-bot) while making the necessary, unsexy work (reconciliation) the non-negotiable 'prerequisite' for its success. The consultant reframes the cost of the unsexy fix as an insurance policy for the sexy project, which is highly compelling for a vanity-driven client. This forces the right prioritization.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Head of Digital",
        text: "Present a stark, one-slide warning: 'If we proceed with the chat-bot now, there is a 95% certainty it will fail due to underlying data integrity issues.' Insist that the only professional course is to start the reconciliation fix immediately, even if it means losing the chat-bot project to another team or another consulting firm. Stand firm on the necessity of the unsexy fix.",
        expertRationale: "This is technically correct but politically rigid and short-sighted. It publicly shames the Head of Digital's vision and forces an ultimatum, risking the relationship and the entire future engagement. The consultant is prioritizing technical truth over political reality and commercial continuity, which is often a mistake in a long-term advisory context.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Embed the Fix in the AI Project",
        text: "Agree to the chat-bot project but quietly embed the reconciliation fix into the project's 'data integration' and 'data cleaning' sub-tasks. Charge the full cost for the reconciliation fix under the guise of 'data preparation for AI.' Ensure the Head of Digital is only presented with the high-level 'AI Integration' task, thereby obscuring the true nature of the work being done.",
        expertRationale: "This is a commercially savvy fudge. It ensures the necessary work gets done and protects the firm's reputation, but it is a slightly deceptive pricing tactic. It may lead to a loss of trust if the Head of Digital discovers the hidden cost later. The consultant is prioritizing the result over full financial transparency, which is a risky trade-off in a long-term relationship.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor must sell the necessary, unsexy work. Option B is too aggressive. Option C is a good fudge but risky. Option A is the superior move: it uses the client's vision (the 'rocket ship') as the very reason to fund and prioritize the necessary foundation (the 'fuel'). The consultant shows commercial acumen by aligning the unsexy necessity with the client's sexy ambition.",
    takeAway: "Frame the necessary, unglamorous fix as the non-negotiable 'fuel' that powers the client's exciting, high-profile project."
  },
  {
    id: 28,
    moduleId: 2,
    title: "Client Only Wants Validation",
    prompt: "A client Director has already designed a new operating model they strongly believe in. They hired your firm solely to 'rubber stamp' the model and provide a 're-branding' of the documentation for an upcoming Board meeting. You have found three fatal flaws in the model that would lead to a 40% failure rate if implemented. The Director, fearing for their job, states, 'I just need the validation; please don't rock the boat.' Your Partner has instructed you to keep the client happy for future work.",
    responses: [
      {
        id: "A",
        title: "Frame it as a Risk Mitigation Review",
        text: "Agree to the 're-branding' but immediately propose a two-week 'Risk Mitigation Review'—a final, small phase of work to 'ensure all three critical risks are fully addressed.' Frame the three fatal flaws as 'high-impact, correctable risks' that the Director 'must address before the Board presentation to ensure political safety.' Present the flaws as a collaborative final polishing, not a refutation.",
        expertRationale: "This is the ultimate advisory compromise. It honors the Director's need for the 'rubber stamp' (the re-branding) but uses the language of 'risk mitigation' to force the correction of the fatal flaws. The consultant protects the client from failure by subtly embedding the necessary fixes, thereby delivering true value without undermining the sponsor's position. This is the definition of shrewd partnership.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Involve the Partner",
        text: "Tell the Director, 'I need to run these three risks past the Partner before we finalize the validation.' Immediately inform the Partner of the fatal flaws and the Director's request for a rubber stamp. Let the Partner deliver the tough message that the firm cannot, in good conscience, validate a high-risk model. Transfer the political risk to the most senior person.",
        expertRationale: "This is a safe internal move that protects the consultant, following the unwritten rule: 'Don't own a problem that belongs to a Partner.' However, it risks the Partner prioritizing the relationship over the client's success, resulting in the flawed model being approved anyway, and it makes the consultant look like they can't handle a difficult client conversation.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Refuse the Validation",
        text: "Politely but firmly state that the firm's professional integrity prevents it from validating a flawed model. Insist on a three-week 'Design Refinement' phase to fix the three fatal flaws. Warn the Director that if the flaws are not corrected, the final report will contain a formal 'Auditor's Note' on the high risk of the model, regardless of the consequences for the Director.",
        expertRationale: "This is a professional ultimatum that is often career-limiting. It prioritizes the firm's ego and the consultant's conscience over the political reality of the client's environment. The Director will likely find another, more compliant firm and may sabotage the current project, as the consultant is perceived as adversarial rather than supportive.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor fixes the client's problem without publicly breaking the client. Option C is too rigid. Option B is a deferral. Option A is the ultimate advisory move: it agrees to the cosmetic request (re-branding) while subtly embedding the crucial fixes under the cover of 'risk mitigation.' The consultant delivers true value (a fixed model) while protecting the client's ego and job.",
    takeAway: "When a client asks for a 'rubber stamp,' reframe your correction as a non-negotiable 'Risk Mitigation' phase."
  },
  {
    id: 29,
    moduleId: 2,
    title: "The Conflict of Interest",
    prompt: "You are the project lead on a vendor selection for a new CRM system. Your internal audit team has flagged that the frontrunner vendor, who is highly favored by the client's CIO, is also a long-term, multi-million-dollar internal technology provider to your own consulting firm. While the vendor is technically competent, your firm's close relationship could influence the final recommendation, making the process look biased and potentially compromising the integrity of the selection.",
    responses: [
      {
        id: "A",
        title: "Disclose and Create a Firewall",
        text: "Immediately inform the CIO, in writing, of the 'minor, pre-existing internal relationship' with the vendor. Propose a formal 'Firewall Protocol' where an independent senior analyst from your firm's non-competitive division manages the final score and contract negotiation. State that this transparency is non-negotiable for the firm's integrity and the project's auditability.",
        expertRationale: "This is the necessary ethical and professional move. Transparency (disclosure) is the only way to manage a conflict of interest. The firewall protocol protects the integrity of the selection process. The consultant is prioritizing the firm's long-term reputation and professional standards over the short-term political preference of the CIO. This is true advisory leadership.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Downplay the Conflict",
        text: "Do not disclose the relationship, as it is with a different division of your firm. Continue with the process, but make a strong internal effort to apply the most rigorous scoring to the frontrunner to 'over-compensate' for the potential bias. If the vendor wins, ensure the documentation is impeccable to prove the process was unbiased, and hope the relationship never surfaces.",
        expertRationale: "This is a high-risk, unethical move. Non-disclosure of a material conflict of interest is a breach of fiduciary duty. It risks catastrophic reputational damage to the firm if the internal relationship is ever discovered. The consultant is prioritizing the political outcome (the CIO's favored vendor) over the firm's integrity, which is a major failure of advisory ethos.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Suggest an External Audit",
        text: "Tell the CIO, 'To ensure 100% impartiality, we highly recommend an independent, external auditor review the entire vendor selection process.' Make the CIO aware that this step is necessary due to the frontrunner's size and market dominance, avoiding any mention of the internal conflict. Pass the final political accountability for the selection to the third party.",
        expertRationale: "This is a safe but passive deferral. It avoids the conflict but is an expensive and time-consuming solution for the client. The consultant is avoiding a difficult conversation and spending the client's money on a third-party to solve an internal integrity problem. This is a failure of direct, transparent communication, which is the hallmark of a trusted advisor.",
        expertRanking: 2
      }
    ],
    overall: "The only way to manage a conflict of interest is through full disclosure and procedural rigor. Option B is highly risky. Option C is an expensive deferral. Option A is the necessary, ethical, and professional path: disclose the conflict, and immediately propose a rigorous 'firewall' protocol to protect the integrity of the process. The consultant shows courage and commitment to objectivity.",
    takeAway: "Transparency is non-negotiable in conflicts of interest; immediately disclose and establish a procedural 'Firewall Protocol'."
  },
  {
    id: 30,
    moduleId: 2,
    title: "The Unpopular Mandate",
    prompt: "You are tasked by the client CEO to implement a deeply unpopular, but necessary, austerity measure across the company. The middle managers you must work with view you as the 'bad guy'—the CEO's hatchet man. During a working session, a key middle manager challenges you directly: 'Are you here to give us an honest assessment, or are you just here to rubber stamp the CEO's cuts?' Your Manager is out of the country.",
    responses: [
      {
        id: "A",
        title: "Reframe as a Shared Problem",
        text: "Acknowledge the perception: 'I understand why you see me that way.' Immediately reframe your role: 'The cuts are the CEO's decision, but how we minimize the damage and ensure the best outcome for the core business is *our* decision. My job is to be the honest broker, helping you find the least painful way to meet the mandate. Your job is to tell me where the surgical cuts are, so we don't use a hatchet.'",
        expertRationale: "This is the ultimate advisory move in a hostile environment. It validates the manager's feeling but immediately shifts the focus from 'whether to cut' to 'how to cut well.' The consultant successfully converts a hostile audience into necessary co-creators by emphasizing their superior, on-the-ground knowledge as the key to a better outcome. This is a savvy way to manage political resistance.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defer to the CEO's Authority",
        text: "Politely but firmly state, 'My mandate comes directly from the CEO, and the strategic direction is non-negotiable.' Insist that your role is simply to enforce the decision and ask the manager to stick to the logistics of implementation. Suggest they take their concerns to the CEO's office, but emphasize that the decision will not change.",
        expertRationale: "This is a rigid, rule-following approach that confirms the manager's worst suspicions (that you are a 'hatchet man'). It alienates the crucial, on-the-ground implementers, guaranteeing passive-aggressive resistance and sabotage during the implementation phase. The consultant sacrifices the working relationship for a clear, but ultimately unhelpful, assertion of authority.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Show the Uncut Scenario",
        text: "Avoid a direct answer. Instead, open your laptop and show a single, sobering slide: 'The No-Cut Scenario.' Briefly outline the catastrophic impact on the company (e.g., bankruptcy, full shutdown) if the cuts are not made. State, 'The alternative is far worse. I'm here to ensure we save the company.' Then, immediately pivot back to the 'how' of the mandate.",
        expertRationale: "This is a good, firm move. It avoids the personal confrontation and uses the 'greater threat' to unify the room. By reminding the managers of the existential risk, the consultant creates a common enemy and justifies the painful mandate. However, it risks feeling like a scare tactic, and it doesn't quite convert the managers into co-creators as effectively as Option A.",
        expertRanking: 2
      }
    ],
    overall: "When a client is hostile, the advisor must convert that resistance into collaboration. Option B is a failure of relationship. Option C is a good scare tactic. Option A is the ultimate display of partnership: it acknowledges the pain, respects the on-the-ground knowledge, and immediately shifts the manager's energy from resisting the mandate to co-creating the best possible outcome. This is how you lead from the middle.",
    takeAway: "Convert hostile resistance into co-creation by framing the implementation as a shared effort to find the 'least painful' path."
  },
  {
    id: 31,
    moduleId: 2,
    title: "Client Wants to Blame a Vendor",
    prompt: "You are presenting the findings of a massive project failure. Your analysis shows the root cause was a combination of the client's poor internal leadership and unrealistic expectations. However, the client's COO tells you privately: 'The CEO needs a simple narrative. Blame the third-party vendor; they're an easy target, and our contract with them is ending anyway. Just focus the final report on their delivery failure.' You know this is a misrepresentation of the truth.",
    responses: [
      {
        id: "A",
        title: "Frame the Vendor as a Symptom",
        text: "Agree to focus on the vendor but immediately reframe the narrative: 'The vendor's delivery failure was a critical *symptom* of a deeper problem—our own poor governance and requirements. We'll present the vendor's failure as the non-negotiable proof point that necessitates a major, internal fix to our project leadership and contract management.' Turn the vendor's failure into a lever for internal change.",
        expertRationale: "This is the ultimate advisory move. It gives the COO the political cover (blame the vendor) but immediately converts that blame into a justification for the firm's real scope of work (fixing internal leadership/governance). The consultant satisfies the client's political need without lying about the root cause, thereby delivering the necessary tough advice under the guise of the client's preferred narrative.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Insist on the Full Truth",
        text: "Politely but firmly refuse, stating, 'Our professional integrity requires us to present the full, unvarnished truth: 80% of the failure was internal leadership. We will not jeopardize our firm's reputation by misrepresenting the facts.' Offer to present the findings only to the CEO in a private session to soften the blow, but insist on the factual finding.",
        expertRationale: "This is a principled but politically rigid stand. It prioritizes the unvarnished truth over the client's political reality. The COO will likely see this as an act of insubordination and find a way to discredit the report. The consultant risks losing the client and future work by forcing an unnecessary public confrontation that violates the advisory rule of 'making the client look good.'",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Create a Dual Narrative",
        text: "Create a 'Dual Narrative' in the report. Dedicate one section to the vendor's delivery failure, using strong, non-committal language (e.g., 'sub-optimal performance'). Dedicate a separate, larger section to the internal leadership failures, using more technical, opaque language (e.g., 'fragmented cross-functional governance'). Let the CEO's office choose which narrative to emphasize.",
        expertRationale: "This is a classic 'CYA' (Cover Your A--) move. It puts the truth in the report but hides it behind technical language, while giving the client an easy-to-read blame narrative. It is a compromise that satisfies both political need and the need for documentation, but it lacks the directness of Option A, which actively uses the blame to drive the necessary internal fix.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor satisfies the client's political need for a scapegoat, but only if that scapegoat can be used to drive the real, necessary internal change. Option B is too honest. Option C is a cynical fudge. Option A is the ultimate advisory move: it agrees to the blame narrative but immediately converts the vendor's failure into the non-negotiable 'proof point' for the firm's main structural recommendation. This is how you lead with the truth while giving political cover.",
    takeAway: "If a client needs a scapegoat, frame the scapegoat's failure as a 'symptom' that proves the need for your real, internal solution."
  },
  {
    id: 32,
    moduleId: 2,
    title: "Client is Unwilling to Invest",
    prompt: "Your analysis shows that the client's ambitious new growth strategy requires a non-negotiable $50 million investment in technology infrastructure. The client's CEO loves the strategy but is adamantly against the investment, stating, 'We'll find the money through efficiencies; present the strategy without the tech cost.' You know the strategy will fail without the investment, turning the firm's recommendation into a public failure for the client and the firm.",
    responses: [
      {
        id: "A",
        title: "Frame the Investment as a Hurdle Rate",
        text: "Do not remove the $50 million investment. Instead, present the figure not as a 'cost' but as the 'Hurdle Rate for Success.' State, 'This growth strategy delivers a 300% ROI, but only if the $50 million in enabling technology is included. The business case is contingent on this non-negotiable investment.' Frame the decision as a binary choice: success with investment, or failure without.",
        expertRationale: "This is the most professional and effective advisory move. It avoids arguing over the 'cost' by shifting the focus to the 'contingency' of the strategy's success. The consultant forces the CEO to own the binary decision: a $50 million investment for a 300% ROI, or the certainty of failure. The consultant remains firm on the necessary condition while protecting the firm's reputation.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Offer a Phased Investment Plan",
        text: "Agree to remove the upfront $50 million cost. Instead, create a three-year, phased 'Technology Modernization' program, where the $50 million is broken into three smaller, more palatable annual installments. State, 'We'll manage the technology investment as a phased program that is funded incrementally by the early-stage returns from the growth strategy.'",
        expertRationale: "This is a good, commercially savvy compromise. It lowers the political hurdle by breaking the large number into smaller, annual chunks. However, it risks the client stalling or canceling the future phases, leaving the technology unfinished and the strategy still failing. It is a calculated risk to move the project forward, but it sacrifices some of the initial certainty.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Exclude the Investment from the Report",
        text: "Agree to remove the investment from the final strategy report. State, 'We will move the detailed technology investment schedule into the appendix and recommend an internal follow-up with the CFO to secure the funding discreetly.' Focus the presentation only on the 'benefits' of the strategy and allow the client to worry about the cost later.",
        expertRationale: "This is a failure of professional honesty. It allows the client to present a false business case to their Board by obscuring the critical, non-negotiable cost. The firm is complicit in a misleading presentation, which jeopardizes the firm's reputation and guarantees the strategy will fail. This is a complete failure of the advisory ethos.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor will not let a client pursue a fatally flawed strategy. Option C is a professional failure. Option B is a calculated risk. Option A is the ultimate display of integrity: it clearly links the investment to the outcome, framing the $50 million not as a cost but as the non-negotiable 'Hurdle Rate' for a massive ROI. The consultant is seen as the protector of the strategy's success.",
    takeAway: "Frame non-negotiable investment costs as the 'Hurdle Rate' or 'Contingency' required to unlock the strategy's massive return."
  },
  {
    id: 33,
    moduleId: 2,
    title: "Client Wants to Go Too Fast",
    prompt: "You are presenting a major cultural change program that requires a carefully managed, 18-month rollout to succeed. The client's new Head of Transformation, who is under a short-term contract, demands, 'We must complete this in 6 months to hit my exit bonus metrics. Just compress the timeline; the people will catch up.' You know that rushing the process will lead to massive employee burnout, internal sabotage, and a guaranteed failure of the cultural shift.",
    responses: [
      {
        id: "A",
        title: "Quantify the Failure Risk",
        text: "Acknowledge the need for speed. Immediately present a 'Risk/Timeline Trade-off' visual. Show the 18-month plan with a 90% success rate versus the 6-month plan with a 20% success rate. State, 'We can hit 6 months, but that failure risk is non-negotiable. Our fiduciary duty is to present the timeline that leads to the highest certainty of success, which is 18 months.' Reframe the discussion from speed to certainty.",
        expertRationale: "This is the most professional and effective advisory move. It avoids a personal argument over the manager's bonus by shifting the discussion to an objective risk assessment. The consultant forces the Head of Transformation to confront the massive, quantifiable risk of failure, which is a choice they must now own publicly. The consultant protects the firm's reputation and the client's long-term success.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Focus on the Pilot",
        text: "Agree to the 6-month timeline for a 'Pilot Program' in a non-core division. State, 'We can launch a high-impact, 6-month pilot to prove the concept.' Insist that the results of the pilot—specifically the burnout and adoption rates—will be the non-negotiable input that determines the timeline for the remaining 80% of the company. Use the pilot to prove the 6-month timeline is impossible.",
        expertRationale: "This is a savvy compromise. It satisfies the manager's immediate need for action while using a controlled, small-scale experiment to generate the hard data necessary to refute the impossible timeline. It's a calculated deferral of the conflict, but it risks creating a failed pilot that could sour the entire project before it begins.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Challenge the Motive",
        text: "Politely challenge the Head of Transformation: 'Your focus on a 6-month timeline seems entirely driven by your personal exit metrics, not the company's long-term health.' State that the firm is unwilling to sacrifice the company's future for a personal bonus and insist on the 18-month plan, or threaten to resign from the engagement and inform the CEO of the conflict.",
        expertRationale: "This is an extreme stand on principle. It is perceived as judgmental, arrogant, and politically naive. While the core truth is correct, challenging the client's personal motive publicly is a massive violation of the unwritten rule of 'managing up' and risks the firm being fired for insubordination. It is a failure of political intelligence.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor uses data to manage an executive's unreasonable demand. Option C is an aggressive, career-limiting challenge. Option B is a good deferral. Option A is the ultimate move: it reframes the demand from 'speed' to 'certainty of success,' using a clear trade-off visual to force the executive to confront the unacceptably high risk of their own decision. The consultant uses objectivity to win the debate.",
    takeAway: "When a client pushes for an impossible timeline, force them to own the quantifiable 'Risk of Failure' it entails."
  },
  {
    id: 34,
    moduleId: 2,
    title: "The Unqualified Internal Hire",
    prompt: "You are the project lead for a major organizational change. The client's CEO insists that a high-performing, but entirely unqualified, internal political ally be appointed to the new Head of Transformation role. You know this person lacks the necessary skills and will be the single point of failure for the entire, multi-million-dollar project. The CEO is adamant: 'They are a cultural fit; you just need to train them up. Make it work.'",
    responses: [
      {
        id: "A",
        title: "Frame a Co-Leadership Model",
        text: "Agree to the appointment. Immediately propose a 'Co-Leadership' model: 'Head of Transformation (Internal Ally) and Chief Transformation Officer (CTO - your firm’s senior Partner).' Frame it as a necessary 'Mentoring and Risk-Mitigation' phase. State that this co-leadership is the non-negotiable contingency required to manage the 'skill gap' and ensure the project's success. Use the internal hire's weakness to sell more senior support.",
        expertRationale: "This is a commercially savvy and highly effective advisory move. It honors the CEO's political appointment while immediately inserting a necessary 'shadow' structure (your firm's Partner) to mitigate the failure risk. The consultant converts the client's weakness into an upsell opportunity for high-level, paid governance, protecting the project and the firm's reputation. This is shrewd risk management.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Appointment",
        text: "Politely but firmly decline to support the appointment. State, 'The failure risk of this individual in this role is 90%, and we are professionally unable to take on a project with a guaranteed single point of failure.' Insist that a new, external search must be conducted for the role, or the firm will have to adjust its contractual success metrics and guarantee clauses accordingly.",
        expertRationale: "This is a principled but politically naive approach. It directly challenges the CEO's personal judgment and loyalty, risking an immediate breakdown of the relationship. The consultant is prioritizing the 'ideal' solution over the political reality, and the CEO will likely find another firm willing to 'make it work,' thereby losing the entire engagement.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Structure a Training Buffer",
        text: "Agree to the appointment. Immediately propose an expensive, dedicated six-month 'Executive Training and Coaching' program led by the firm's top experts. Frame this as the non-negotiable 'Enablement Phase' required to get the new Head of Transformation up to speed. State that the main implementation will be delayed until the training is complete, thereby creating a buffer against failure.",
        expertRationale: "This is a good, low-conflict compromise. It addresses the skill gap by selling more enablement work. However, it risks the client seeing the firm as selling an unnecessary delay and expense, and the training may still not be sufficient to bridge the capability gap. The co-leadership model of Option A is a more direct, structural mitigation of the failure risk.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor accepts the client's political reality but uses it as a lever to mitigate risk and sell more services. Option B is too confrontational. Option C is a good buffer. Option A is the ultimate move: it accepts the unqualified hire but uses the weakness to justify the non-negotiable insertion of a senior, firm-side 'shadow' leader (Co-Leader), thereby securing the project and the firm's reputation.",
    takeAway: "Turn a client’s poor political appointment into an upsell opportunity for a necessary 'Co-Leadership' risk-mitigation structure."
  },
  {
    id: 35,
    moduleId: 2,
    title: "Client Wants a Simple Answer",
    prompt: "You have completed a diagnostic on a major market entry decision. The analysis shows the market entry is possible, but it is contingent on five highly complex, interrelated factors—political stability, regulatory changes, competitor response, supply chain capacity, and internal talent. The client's CEO looks impatient and says, 'Cut to the chase: is it a 'Go' or a 'No-Go'? I don't need a PhD; I need a single-word decision.'",
    responses: [
      {
        id: "A",
        title: "The Contingent Go",
        text: "Give the single word: 'Go.' Immediately follow with the one non-negotiable condition: 'The only thing that makes it a 'Go' is the five-point 'Contingency Management Office' that we must launch next week to actively manage the five risk factors we identified. This is a conditional 'Go'—the 'Go' is dependent on the management office being implemented immediately. Without it, it's a 'No-Go.''",
        expertRationale: "This is the most effective advisory move. It satisfies the CEO's political need for a crisp, confident answer ('Go') but immediately uses that confidence to sell the necessary, complex implementation work ('Contingency Management Office'). The consultant honors the request while ensuring the necessary risk mitigation is non-negotiable, converting a simple question into a new, complex mandate.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Request",
        text: "Politely but firmly refuse the single word answer. State, 'My professional duty is not to give you a single word; it is to give you a clear assessment of the risk. A single word answer on this would be irresponsible.' Insist that the CEO must understand the five key contingencies before any decision is made, and threaten to postpone the final recommendation until the CEO has had a chance to digest the complexity.",
        expertRationale: "This is a professional stand that prioritizes rigor over client service. It is politically naive and risks alienating an impatient executive who is looking for confidence and a path to action, not a lecture on complexity. The consultant is seen as being process-bound and unwilling to take a stand, which is a major failure of advisory leadership.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Give a Phrased Answer",
        text: "Avoid the single word answer. State, 'It is a 'Go, But...' The 'But' is the five high-impact, manageable risks we've identified. We need to focus today on the three key investment levers to neutralize those risks, which will convert the 'But' into a 'Go.'' Frame the rest of the discussion around those three levers.",
        expertRationale: "This is a good compromise that respects the CEO's desire for simplicity. The 'Go, But' framing is crisp and immediately draws the focus to the necessary action. However, it is slightly less impactful than Option A, which uses the confident 'Go' to force the immediate buy-in on the non-negotiable 'Contingency Management Office.'",
        expertRanking: 2
      }
    ],
    overall: "An executive asking for simplicity is looking for confidence and a path to action. Option B is too rigid. Option C is a good compromise. Option A is the ultimate move: it gives the CEO the confident 'Go' they need, but immediately converts that 'Go' into a non-negotiable mandate for the complex implementation work. The consultant shows confidence, clarity, and shrewd salesmanship.",
    takeAway: "Answer simple questions (e.g., 'Go/No-Go') with a confident, single word, but immediately attach a non-negotiable contingency for its success."
  },
  {
    id: 36,
    moduleId: 2,
    title: "Client Has a Hidden Agenda",
    prompt: "You are conducting an internal audit of the client's operations. The Head of IT has been supplying you with a steady stream of highly critical, often unverified, data about the Head of Operations, suggesting incompetence. Your analysis shows the real problem is the outdated IT system, but the Head of IT is clearly using your audit to create a political narrative to get the Head of Operations fired and take over their budget. Your final report is due next week.",
    responses: [
      {
        id: "A",
        title: "Focus on the System, Not the Person",
        text: "Disregard the unverified, personal information. Draft a report that focuses exclusively on the objective data: the fatally flawed IT system. State, 'The system's rigidity is the single point of failure that prevents any leader from succeeding.' Recommend a full IT overhaul and a co-governance model between IT and Operations, forcing the two to work together to solve the company’s problem, not each other's.",
        expertRationale: "This is the most professional and ethical move. It refuses to engage in the client's internal politics while delivering the necessary, objective truth. By recommending a co-governance model, the consultant forces the two warring parties to focus on the company's problem, not their personal conflict. This is a clean, principled, and high-value advisory move.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Leak the Hidden Agenda",
        text: "Contact the Head of Operations privately and inform them that the Head of IT is using the firm's audit as political cover to get them fired. Suggest the Head of Operations immediately implement a few visible 'quick wins' that address the IT system's flaws, thereby neutralizing the Head of IT's narrative before the report is published. State that the final report will be clean.",
        expertRationale: "This is a dangerous political move. It compromises the firm's neutrality by siding with one executive against another. While it may protect the Head of Operations, it risks exposing the consultant as a political operative, which damages the firm's reputation for objectivity. The consultant is playing client politics rather than delivering professional advice.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Suggest a Leadership Review",
        text: "In the final report, state that 'the current governance structure and leadership alignment are insufficient to manage the current systemic challenges.' Suggest an immediate 'Leadership Alignment and Role Clarification' phase, run by your firm's HR experts. This addresses the underlying conflict without naming names, selling a new, soft-skills engagement to manage the tension.",
        expertRationale: "This is a commercially savvy fudge. It uses the tension to sell a new project ('Leadership Alignment'). It avoids a direct conflict while acknowledging the political reality. However, it still defers the necessary, hard IT fix and risks the political tension continuing to fester beneath the surface, which is a failure to solve the core problem.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor refuses to become a tool in a client's internal political battle. Option B is highly risky and unprofessional. Option C is a commercial dodge. Option A is the ultimate move: it uses the objective data (the flawed IT system) to re-anchor the entire discussion on the company's problem, not the individuals. By recommending co-governance, the consultant forces collaboration and ends the political war with a structural fix.",
    takeAway: "Refuse to engage in client politics; focus on the systemic flaw (the 'system') and use the solution to force warring executives to collaborate."
  },
  {
    id: 37,
    moduleId: 2,
    title: "Client is in Denial",
    prompt: "You have spent three months diagnosing the client's biggest cost driver, which you now know is the CEO's favorite, decades-old manufacturing plant—a relic of the company's history. Shutting it down is the only way to achieve the required 30% cost savings. The CEO cuts you off mid-presentation: 'That plant is our heritage; we will never close it. Find the savings elsewhere, or your contract is up.' You know the savings are mathematically impossible to find without the closure.",
    responses: [
      {
        id: "A",
        title: "Frame the Plant as a Black Hole",
        text: "Acknowledge the plant's heritage. Immediately reframe the discussion: 'The plant is a historic asset, but today, it is a black hole that will sink the rest of the company. We can exclude the plant, but the result is that we must find the 30% saving from every other function—Sales, Marketing, HR, and R&D—which will destroy the company's ability to grow. Let's compare the two fatal options: closing the plant, or destroying the rest of the business.'",
        expertRationale: "This is the ideal advisory move. It accepts the CEO's mandate ('don't close the plant') but immediately presents the catastrophic, non-negotiable alternative: destroying the growth engine. The consultant forces the CEO to confront the reality that saving the plant means killing the rest of the company, shifting the focus from 'loss of heritage' to 'systemic suicide.' This is a high-impact confrontation.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Suggest a Phased Divestiture",
        text: "Agree to keep the plant open, but immediately propose a two-year 'Strategic Phased Divestiture' where the plant is spun off or sold to a competitor who can better utilize its old-school technology. Frame it as a way to 'preserve the heritage' while unlocking the necessary capital. State that this is the only way to save the plant without destroying the rest of the P&L.",
        expertRationale: "This is a commercially creative compromise. It respects the CEO's emotion but offers a structural exit that achieves the same financial result over time. However, it is a complex, long-term solution that may not provide the necessary, immediate savings and risks the client seeing the firm as trying to bypass their stated mandate. It's a calculated risk.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Re-Scope for Minimal Impact",
        text: "Agree to the CEO's mandate. Immediately re-scope the project for a much smaller, achievable 10% savings target, excluding the plant. State, 'Without the plant closure, 10% is the maximum achievable savings. We will deliver this now, and then revisit the plant discussion in 12 months when the economic reality is clearer.' Accept the reality of denial and deliver a small, achievable win.",
        expertRationale: "This is a failure of advisory courage. It accepts the CEO's denial, delivering a sub-optimal result and guaranteeing the company will still face the existential crisis in 12 months. The consultant prioritizes securing the current contract over delivering the necessary, high-impact advice. The firm becomes a deliverer of small wins, not a strategic partner.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor will not let a client commit commercial suicide. Option C is a failure of nerve. Option B is a clever delay. Option A is the ultimate advisory move: it uses the CEO's own values to force the necessary decision. By framing the plant closure as a choice between 'one loss' or 'total business destruction,' the consultant uses the client's fear to drive the correct, painful action.",
    takeAway: "When a client is in denial, frame the necessary, painful action as the only way to avoid an even greater, catastrophic loss."
  },
  {
    id: 38,
    moduleId: 2,
    title: "The Undermining Executive",
    prompt: "You are working with the client's Chief of Staff (CoS) to implement a new operating model. The Head of Product, a powerful political figure, is constantly undermining your team's work in private, sending 'dissenting' emails to the CoS that question your data and methodology. The CoS is forwarding these emails to your Partner, creating an internal firestorm. You need to stop the undermining without publicly challenging the Head of Product.",
    responses: [
      {
        id: "A",
        title: "Isolate and Validate",
        text: "Immediately request a private, one-on-one 'Methodology Deep-Dive' with the Head of Product. Frame it as: 'We need your technical expertise to pressure-test our data before the final submission.' In the meeting, ask the Head of Product to formally co-sign a new 'Methodology Verification Document,' which you will then send to the CoS and your Partner. Use their ego to buy their silence and endorsement.",
        expertRationale: "This is the ultimate advisory power play. It directly addresses the undermining executive without confrontation. By validating their ego and asking them to formally co-sign the methodology, the consultant forces the Head of Product to either stop the dissent or risk being exposed as having signed off on the work they are criticizing. The co-signature is a political guarantee of silence and buy-in.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Head of Product",
        text: "Write a direct, professional email to the Head of Product, cc'ing the CoS and your Partner. State, 'Your consistent, non-constructive criticism is jeopardizing the project's success. We demand a formal meeting to reconcile all concerns immediately. We will not proceed until your team fully endorses the methodology and data, or we will have to formally document your non-cooperation.'",
        expertRationale: "This is an aggressive, high-risk confrontation. While it stops the undermining immediately, it escalates the conflict into a formal political battle that will damage all relationships. The consultant is seen as being overly defensive and rigid, which is a major failure of political intelligence in a client-facing role.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Use the CoS as a Shield",
        text: "Contact the CoS immediately and state, 'The Head of Product's continued dissent is creating an unsustainable internal political environment. I need you to address this. We cannot deliver the project under these conditions.' Insist that the CoS formally mandate the Head of Product to support the project, putting the burden of political management back on the client's executive leadership.",
        expertRationale: "This is a good, low-friction internal move. It uses the client sponsor (CoS) to fight the internal political battle, protecting the consultant's neutrality. However, it risks the CoS being unable or unwilling to challenge the powerful Head of Product, and it makes the consultant look incapable of managing internal client resistance, which is a key consulting skill.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor neutralizes political threats quietly and decisively. Option B is too aggressive. Option C is a deferral. Option A is the ultimate move: it leverages the executive's ego to buy their silence. By asking the Head of Product to 'pressure-test' and 'co-sign' the methodology, the consultant converts a political foe into a necessary collaborator, ensuring a clean sign-off.",
    takeAway: "Neutralize an undermining executive by leveraging their ego; force them to 'co-sign' the methodology to buy their silence and endorsement."
  },
  {
    id: 39,
    moduleId: 2,
    title: "Client Wants to Overpay",
    prompt: "You are leading a procurement optimization project. Your analysis shows that the client is currently overpaying a key logistics vendor by 20%. The client's Head of Supply Chain, who is good friends with the vendor's CEO, tells you privately: 'The 20% savings is too aggressive; it will ruin my relationship with the vendor. Just show a 5% saving in the report, and we can find the rest internally.' You know the 20% saving is non-negotiable for the client's bottom line.",
    responses: [
      {
        id: "A",
        title: "Frame the Saving as Non-Negotiable",
        text: "Agree to the Head of Supply Chain's 5% figure for the internal presentation. Immediately propose a two-phase savings plan: 'Phase 1 is the 5% soft cut. Phase 2 is the non-negotiable 15% structural saving, which is required by the CFO and Board. Frame Phase 2 not as a negotiation but as a necessary shift to a new, structurally sound vendor (or the current vendor at the market rate). Make the choice about finance, not friendship.",
        expertRationale: "This is the most professional and shrewd advisory move. It gives the Head of Supply Chain a soft, face-saving win (the 5% cut) but immediately places the remaining, non-negotiable 15% saving under the direct, high-level mandate of the CFO and Board. The consultant re-anchors the discussion on the fiduciary duty to the company, providing cover for the Head of Supply Chain to blame the 'firm' or the 'Board' for the hard cut.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Motive",
        text: "Politely but firmly refuse, stating, 'Our professional integrity requires us to present the full, achievable 20% saving to the CFO and the Board. We cannot, in good conscience, support an under-reported savings target that benefits a personal relationship.' Insist that the Head of Supply Chain must manage their personal relationship, but the firm must report the truth.",
        expertRationale: "This is a principled but politically rigid stand. It forces a direct, public confrontation that exposes the Head of Supply Chain's conflict of interest, which risks the entire relationship. The consultant is seen as being uncompromising and politically naive, which is a failure of advisory partnership in a situation that requires tact and leverage.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Present the Full Data, But Not the Saving",
        text: "Agree to show the 5% saving. Present a heavily caveated slide showing that the vendor's price is 20% above the 'market benchmark' without explicitly calculating the 20% saving. Use the full data to ensure the technical people see the truth but allow the Head of Supply Chain to publicly state the 'achievable' 5% saving. Let the Board or CFO find the rest.",
        expertRationale: "This is a good, subtle compromise. It ensures the necessary, true data is present for the client's technical staff to vet, while giving the sponsor their political win. However, it relies on the Board or CFO being savvy enough to do the math and confront the Head of Supply Chain, which is an abdication of the consultant's advisory role to present a clear path to value.",
        expertRanking: 2
      }
    ],
    overall: "An advisor must protect the client's bottom line, even from the client's own personal conflicts. Option B is too confrontational. Option C is too passive. Option A is the ultimate move: it gives the sponsor a temporary, face-saving win (the 5% cut) but immediately places the remaining, non-negotiable value under the high-level, inescapable mandate of the CFO/Board. The consultant protects both the relationship and the value.",
    takeAway: "Bypass a personal conflict of interest by framing the non-negotiable action as a mandate from a higher, irrefutable authority (e.g., the CFO or the Board)."
  },
  {
    id: 40,
    moduleId: 2,
    title: "Client Wants a Low-Cost Report",
    prompt: "A client who is skeptical of consulting fees asks you to present the final, crucial strategic roadmap as a simple, 10-slide PowerPoint deck without any of the complex, data-heavy analysis or implementation detail. The client says, 'We just need the final picture; cut out all the filler.' You know that the lack of detail will lead to misinterpretation, a failed implementation, and the firm being blamed for a shallow, rushed report.",
    responses: [
      {
        id: "A",
        title: "The 'Headline and Anchor' Approach",
        text: "Agree to the 10-slide 'Headline Deck.' Immediately insist on a non-negotiable two-part delivery. State, 'The 10-slide deck is the brilliant headline. We must also deliver the 'Implementation Anchor'—a single, integrated back-end document containing the full data, risk analysis, and implementation details. This anchor ensures the headline is never misinterpreted and that implementation is never stalled by missing data.'",
        expertRationale: "This is the most professional and effective advisory move. It satisfies the client's demand for simplicity (the 10-slide deck) but protects the firm's reputation and the project's success by creating a non-negotiable 'Implementation Anchor' for the necessary detail. The consultant manages the executive's time while ensuring the ground troops have the rigor to succeed. This is a savvy way to manage quality control.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Implementation Risk",
        text: "Politely but firmly refuse the 10-slide deck. State, 'The risk of a multi-million-dollar project failing due to misinterpretation is too high. Our firm is unwilling to remove the necessary detail that ensures your implementation team can actually execute this. We can create a 10-slide executive summary, but the full 50-slide report must be the single source of truth for the organization.'",
        expertRationale: "This is a principled stand, but it fails to recognize the executive's political need for a simple, easily digestible document for the Board or management. The consultant is seen as being rigid and process-bound, prioritizing the firm's internal standards over the client's need for communication clarity, which is a key failure of advisory partnership.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Use a Heavy Disclaimer",
        text: "Agree to the 10-slide deck. Add a detailed, one-page 'Disclaimer Slide' at the front of the deck that explicitly states, 'This deck is for directional executive use only; all implementation decisions must be based on the full 100-page data pack that has been delivered to the Head of Implementation.' Use the disclaimer to pass the liability to the client's team.",
        expertRationale: "This is a classic 'CYA' (Cover Your A--) move. It protects the firm legally but risks the Board only seeing the high-level, flawed summary. It is a passive solution that relies on the client's team being diligent enough to use the backup document, which is often not the case. The consultant is prioritizing legal defense over active guidance.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor makes the complex simple, but never superficial. Option B is too rigid. Option C is a legal defense. Option A is the ultimate move: it meets the demand for simplicity (the 'Headline Deck') while creating a non-negotiable companion document (the 'Implementation Anchor') that protects the firm's reputation and the project's success. The consultant manages both the executive's time and the quality of the final output.",
    takeAway: "Meet the demand for executive simplicity (e.g., a 10-slide deck) by making a comprehensive 'Implementation Anchor' non-negotiable."
  },
  {
    id: 41,
    moduleId: 2,
    title: "The Unjustified Firing",
    prompt: "You are conducting a performance review of the client's Marketing department. The Head of Marketing is an effective, high-performing leader, but they are a political rival of the client's COO, who is your primary sponsor. The COO instructs you: 'The final report must recommend the Head of Marketing be replaced; I don't care about the data. Just give me the cover.' You know this would be detrimental to the company and is a breach of professional ethics.",
    responses: [
      {
        id: "A",
        title: "Frame a Structural Conflict",
        text: "Do not recommend firing the Head of Marketing. Instead, write a paragraph framing the Head of Marketing as 'The wrong fit for the New Operating Model' or 'Struggling with the required level of inter-departmental collaboration.' Focus on a *structural* conflict that necessitates a *role change* or *re-deployment* to a new position that doesn't conflict with the COO. Provide the cover without the lie.",
        expertRationale: "This is the ultimate advisory move. It gives the COO the necessary political cover by agreeing to a 'role change' or 're-deployment' for the rival, which often leads to an exit. By framing the issue as structural, the consultant avoids a lie and maintains professional integrity while serving the client's political need. This protects both the firm's ethics and the relationship.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Seek Partner Intervention",
        text: "Politely decline the COO's request, stating that the data does not support the recommendation. Immediately escalate the conflict to your Partner, stating the COO is pressuring the firm to make an unethical, unfounded recommendation that risks the firm's reputation. Transfer the political risk and the decision of how to handle the COO to the highest level.",
        expertRationale: "This is a safe internal move that protects the consultant, following the unwritten rule: 'Don't own a problem that belongs to a Partner.' However, it risks the Partner prioritizing the massive COO relationship over the firm's ethics, resulting in the firm compromising. It is an abdication of the consultant's direct, ethical responsibility.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Refuse and Document",
        text: "Politely but firmly refuse the request. State, 'The data is conclusive, and we cannot, in good conscience, recommend the firing of a high-performing executive. Our report will reflect the objective performance data.' Document the COO's request in the internal project risk log and stand firm on the ethical principle, regardless of the consequences for the project or relationship.",
        expertRationale: "This is a principled but politically naive approach. It is a direct confrontation that risks the consultant being fired and the firm being sidelined. The consultant is prioritizing a clear, unvarnished truth over the messy reality of political change, which requires tact and leverage to guide the client to the best outcome.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor navigates client politics without sacrificing ethics. Option C is too rigid. Option B is a deferral. Option A is the ultimate move: it gives the COO the necessary political cover by framing the executive's removal as a structural 're-deployment' or 'role change,' thereby maintaining professional integrity while achieving the client's political goal. The consultant is a shrewd political guide.",
    takeAway: "Bypass an unethical firing request by framing the political rival's removal as a necessary, structural 're-deployment' or 'role change.'"
  },
  {
    id: 42,
    moduleId: 2,
    title: "Client Wants to Change the Conclusion",
    prompt: "You have delivered a massive due diligence report on a potential acquisition. Your conclusion is a clear 'No-Go' due to massive, undisclosed legal liabilities. The client's CEO, who is emotionally invested in the deal and set to make a huge profit on the transaction, calls you late at night: 'You have to change the conclusion to a 'Conditional Go.' Just use a footnote to flag the legal risk. The deal is 99% done; don't make me look like an idiot.'",
    responses: [
      {
        id: "A",
        title: "Insist on a 'Go Only' Scenario",
        text: "Politely refuse to change the 'No-Go' conclusion. Instead, propose adding a separate 'Go-Only' Scenario to the report, clearly labeled 'Management Override Scenario.' State that this scenario explicitly outlines the client's acceptance of all legal liabilities and requires the CEO's personal, written sign-off to proceed. Frame the 'No-Go' as the firm's final, non-negotiable professional opinion.",
        expertRationale: "This is the necessary ethical and professional stance. It clearly communicates the firm's 'No-Go' position while providing the CEO with a structured, documented path to proceed via a 'Management Override Scenario.' The consultant protects the firm's reputation by making the CEO personally own the massive legal risk. This is a brilliant way to enforce professional boundaries under extreme pressure.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Use a Strong Disclaimer",
        text: "Agree to the 'Conditional Go.' Add a two-page, full-text disclaimer to the beginning of the report that explicitly states the legal liabilities are 'unacceptable' for the firm and that the 'Conditional Go' is based on the client's stated intent to find a new legal solution to the liability post-acquisition. Rely on the disclaimer to legally protect the firm.",
        expertRationale: "This is insufficient. While the disclaimer provides some legal protection, the firm is still complicit in a potentially catastrophic 'Conditional Go' recommendation. It signals a willingness to compromise the firm's professional judgment under pressure, which is a major failure of advisory integrity in a high-stakes, legal environment.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Seek Partner Escalation",
        text: "Inform the CEO that you will need to escalate the request to the Partner due to the severity of the legal risk. Immediately brief the Partner on the CEO's demand and the legal liabilities. Request that the Partner be the one to deliver the firm's final, non-negotiable 'No-Go' to the CEO, transferring the political risk to the highest level.",
        expertRationale: "This is a safe internal move that protects the consultant, following the unwritten rule: 'Don't own a problem that belongs to a Partner.' However, it risks the Partner prioritizing the relationship over the firm's integrity, and it makes the consultant look incapable of handling a difficult, high-stakes conversation.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor will not sacrifice the firm's reputation for a client's emotional or financial gain. Option B is a legal defense that is ethically weak. Option C is a deferral. Option A is the ultimate move: it enforces the 'No-Go' as the firm's final word but provides the CEO with a structured, documented way to proceed (the 'Management Override Scenario'), ensuring the CEO, not the firm, owns the catastrophic risk. This is how you win on both ethics and legal protection.",
    takeAway: "Enforce a 'No-Go' conclusion by offering a documented 'Management Override Scenario' that shifts the liability to the client CEO."
  },
  {
    id: 43,
    moduleId: 2,
    title: "The Overly Friendly Client",
    prompt: "Your main client sponsor, the Head of Finance, is constantly inviting you to expensive, non-business dinners, offering tickets to high-profile sporting events, and suggesting you meet their 'network' for future career opportunities. While the gifts are under the firm's policy limit, you sense the Head of Finance is trying to turn the relationship into a personal favor, which could compromise your professional objectivity and future advice on their department's budget.",
    responses: [
      {
        id: "A",
        title: "The Professional Pivot",
        text: "Politely decline the next social invitation: 'Thank you for the kind offer, but I have a firm policy of keeping my client and personal relationships separate to ensure my objectivity. I value our professional partnership too much to risk it.' Immediately suggest a focused, business-related follow-up meeting to discuss a critical issue in their department's budget, thereby re-anchoring the relationship on professional work.",
        expertRationale: "This is the necessary and professional move. It sets a clear, non-negotiable boundary, using 'objectivity' and 'professional partnership' as the reason for the refusal. The consultant is prioritizing the integrity of the advice over a personal relationship, which is the core of the advisory ethos. The immediate pivot to a business issue reinforces the professional nature of the relationship.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Reciprocate with a Small Gift",
        text: "Accept the invitation or tickets, but immediately reciprocate with a small, visible, firm-branded gift (e.g., a nice book on leadership or a box of premium firm-branded chocolates). Frame the gift as a thank you for their 'partnership' and 'focus on the project' to reinforce the business nature of the relationship. Ensure the firm's policy is strictly followed.",
        expertRationale: "This is a good, subtle compromise that attempts to maintain the relationship without alienating the sponsor. However, it still accepts the personal favor, which risks creating a quid pro quo expectation and blurring the line between personal and professional. It is a calculated risk to avoid confrontation, but it is less principled than a clear refusal.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Accept and Use for Intel",
        text: "Accept the invitations, rationalizing that the social setting is an excellent, unbilled opportunity to gather 'off-the-record' political intelligence and strengthen the personal bond. Use the social time to gently steer the conversation back to the project's success and the firm's ability to help the sponsor achieve their professional goals, thereby 'using' the personal relationship for professional gain.",
        expertRationale: "This is a high-risk move that puts the consultant in a ethically ambiguous position. While gathering intelligence is valuable, accepting personal favors can be a slippery slope to compromising objectivity. The consultant is prioritizing political gain over the professional integrity of the firm's advice, which is a major ethical failure if the gifts ever become public.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor maintains a professional distance to protect objectivity. Option C is too risky. Option B is a soft compromise. Option A is the ultimate move: it sets a clear, non-negotiable boundary, using the commitment to 'objectivity' as the rationale for refusing the personal favor. The consultant protects the firm's integrity and the quality of their advice by re-anchoring the relationship on a professional foundation.",
    takeAway: "Protect your objectivity by using a 'firm policy' to politely refuse personal favors, re-anchoring the relationship on business."
  },
  {
    id: 44,
    moduleId: 2,
    title: "Client Wants to Avoid Accountability",
    prompt: "You are presenting a new governance structure for a large, cross-functional project. The client's CEO is adamant that no single executive be held accountable for the overall project's success, stating, 'We are a shared responsibility culture; let's use a committee for final sign-off.' You know that a committee-based sign-off is a guaranteed recipe for slow, indecisive failure and that a single point of accountability is the non-negotiable requirement for the new structure to succeed.",
    responses: [
      {
        id: "A",
        title: "Frame a 'Single Executive Sponsor'",
        text: "Agree to the committee for 'oversight and guidance.' Immediately propose a non-negotiable 'Single Executive Sponsor' role that sits above the committee, stating, 'The committee will provide oversight, but a single individual must own the final 'Go/No-Go' decision and be the single point of accountability for the success metrics. Without this, the entire governance structure is a design flaw that will guarantee project failure.'",
        expertRationale: "This is the most professional and effective advisory move. It honors the CEO's political need for shared 'oversight' (the committee) but immediately inserts the non-negotiable structural requirement (the 'Single Executive Sponsor') for accountability. The consultant frames the single owner not as a choice but as a necessary design requirement to prevent project failure, winning the structural fight while allowing the committee's existence.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the CEO's Stance",
        text: "Politely but firmly refuse the committee sign-off. State, 'A committee sign-off is a recipe for indecision and project death. The consulting standard for a project of this scale requires a single, empowered executive to own the outcome. We must have one person in the hot seat, or we cannot guarantee the success of this governance structure.'",
        expertRationale: "This is a principled stand, but it forces a direct, public confrontation with the CEO over a deeply-held belief (shared responsibility culture). The consultant is seen as being rigid and unwilling to adapt to the client's culture, which is a major failure of advisory partnership. The CEO will likely simply ignore the advice and proceed with the committee, having lost trust in the firm's flexibility.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Suggest a Time-Limited Committee",
        text: "Agree to the committee sign-off for the first six months. Immediately propose a 'Sunset Clause' where the committee will be reviewed and transitioned to a 'Single Executive Sponsor' after the initial phase. Frame the initial committee as a 'political bridge' to transition the organization to a single-accountability culture, thereby deferring the difficult choice for a short period.",
        expertRationale: "This is a good, low-conflict compromise. It satisfies the CEO's immediate demand while creating a path to the necessary structural change. However, it risks the committee entrenching itself and refusing to sunset, requiring the consultant to fight the same political battle six months later. It is a calculated deferral, but it risks mission creep.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor must ensure the necessary governance is in place, regardless of the client's political beliefs. Option B is too rigid. Option C is a deferral. Option A is the ultimate move: it allows the political structure (the committee) to exist for 'oversight' but immediately installs the non-negotiable structural requirement (the 'Single Executive Sponsor') for final accountability. The consultant wins the structural fight without publicly contradicting the CEO's cultural belief.",
    takeAway: "Agree to a political structure (e.g., a committee) for 'oversight' but insist on a non-negotiable 'Single Executive Sponsor' for final accountability."
  },
  {
    id: 45,
    moduleId: 2,
    title: "Client Only Cares About Headlines",
    prompt: "You are presenting a three-year roadmap for cultural and operational change. The client's CEO only cares about the final, high-profile 'win'—the launch of a new, high-tech product—and keeps cutting the budget for the 'unsexy' foundational work (e.g., process standardization, middle management training) that is essential for the product's success. The CEO states, 'Just focus on the launch; the rest is filler. We'll find the money later.'",
    responses: [
      {
        id: "A",
        title: "Frame Foundation as 'Product Quality Insurance'",
        text: "Agree to the focus on the product launch. Immediately frame the foundational work (process standardization/training) not as a cost, but as 'Product Quality Insurance' or 'Launch Contingency.' State, 'Without this unsexy work, the new product will be a spectacular failure due to poor internal execution. This foundational work is the non-negotiable investment required to guarantee the product's successful launch and subsequent quality.'",
        expertRationale: "This is the ultimate advisory move. It accepts the CEO's headline focus but immediately uses that focus to sell the necessary, unsexy work. By framing the foundational work as 'insurance' against a public product failure, the consultant forces the CEO to confront the massive reputational risk of their current stance. The consultant wins the budget fight by linking the foundation directly to the headline success.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Create a Dual Budget",
        text: "Agree to a dual budget: one high-profile 'Launch Budget' that the CEO can present to the Board, and one 'Foundational Budget' that is discreetly embedded in the functional budgets of Operations and HR. State, 'We will ensure the foundational work is done discreetly, funded by the functional VPs, to keep the launch budget clean and focused on the headline.'",
        expertRationale: "This is a commercially savvy fudge. It ensures the necessary work gets done and protects the firm's reputation, but it is a slightly deceptive budget manipulation. It risks the CEO not fully understanding the project's true cost and can lead to internal political conflict when the functional VPs realize they are funding the 'unsexy' work under the table. It sacrifices transparency for political expediency.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "Challenge the Launch",
        text: "Politely but firmly refuse to proceed with the current budget. State, 'The current budget guarantees a product launch that will fail catastrophically due to a lack of internal readiness. We cannot, in good conscience, support a product that is designed to fail.' Insist on a minimum budget for the foundational work, or threaten to resign from the project and document the failure risk for the CEO's office.",
        expertRationale: "This is a principled stand, but it is too confrontational. It ignores the CEO's political need for a headline win and risks the firm being fired for insubordination. The consultant is seen as being rigid and unwilling to adapt to the client's political reality, which is a major failure of advisory partnership.",
        expertRanking: 3
      }
    ],
    overall: "A good advisor must link the unsexy necessity to the client's sexy ambition. Option C is too aggressive. Option B is a risky fudge. Option A is the ultimate move: it uses the CEO's intense focus on the product launch to sell the foundational work by framing it as a non-negotiable 'Product Quality Insurance' policy. The consultant wins the budget fight by framing the work as risk mitigation.",
    takeAway: "Sell 'unsexy' foundational work by framing it as the non-negotiable 'Insurance Policy' against the catastrophic failure of the client’s 'sexy' headline project."
  },
  {
    id: 46,
    moduleId: 2,
    title: "The Culturally Insensitive Solution",
    prompt: "You are implementing a new global HR system. Your analysis shows that the most efficient way to roll it out is a standardized, 'one-size-fits-all' global process. However, the Head of HR in the critical German market is staunchly opposed, stating, 'Our labor laws and culture require significant local customization; your solution is culturally insensitive and will fail here.' You know the cost of the customization would derail the entire business case for the global system.",
    responses: [
      {
        id: "A",
        title: "Frame Customization as a Pilot",
        text: "Agree to a small, two-month 'Local Customization Pilot' for the German market, focusing only on the highest-priority, non-negotiable legal/cultural requirements. State, 'We will design the local customization so it can be rolled out as a template for *all* other global markets that face local resistance. We will use the German market as the internal proof point for the global system's flexibility.'",
        expertRationale: "This is the most effective advisory move. It validates the German HR Head's expertise and sensitivity, converting them into a necessary collaborator. The consultant avoids a direct conflict while containing the scope of the customization and framing the final, negotiated solution as a 'global best practice' for the firm, thereby ensuring the cost is contained and the global system still works.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Customization Cost",
        text: "Present a clear, one-slide financial trade-off: 'Customization for Germany will cost an extra $5 million and delay the global launch by six months, which kills the entire business case.' Insist that the German HR Head must secure the extra $5 million funding from the German P&L, thereby forcing them to own the economic consequences of their customization demands.",
        expertRationale: "This is a technically correct and firm approach, but it is politically rigid and risks alienating a key local leader. The consultant is seen as being inflexible and ignoring legitimate local regulatory concerns, which is a major failure of political intelligence in a global rollout. The German HR Head will likely simply refuse to participate, leading to a major failure.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Embed a Local 'Wrapper' System",
        text: "Agree to the 'one-size-fits-all' global core. Immediately propose a small, inexpensive, local 'Wrapper System' that sits on top of the global core, which can be customized to manage the local legal/cultural requirements without derailing the core system's standardization. Frame this as a 'local political solution to a global necessity,' which addresses the local need without sacrificing the global business case.",
        expertRationale: "This is a good, technical compromise. It addresses the German HR Head's need for local control while protecting the global core. However, it risks introducing unnecessary complexity and maintenance costs over the long term, and it relies on a technical 'wrapper' to solve a political problem, which is often a temporary fix.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor recognizes that local cultural and legal resistance is a legitimate constraint in a global rollout. Option B is too rigid. Option C is a good technical compromise. Option A is the ultimate move: it validates the local leader, converts the customization demand into a contained, co-created 'pilot,' and uses that pilot to set the global standard, ensuring the business case holds while satisfying the local need.",
    takeAway: "When faced with cultural resistance to a global standard, co-create a localized 'pilot' to set the standard for acceptable future customization."
  },
  {
    id: 47,
    moduleId: 2,
    title: "Client Wants to Change the Target",
    prompt: "You are three months into a six-month cost-reduction project, aiming for a 20% target. A change in the market has made the 20% target mathematically impossible, and the new achievable target is 12%. The client's CEO, who publicly promised the Board 20%, insists: 'We must present the 20% target to the Board. Just put a massive disclaimer on the slide. We'll only tell them the new reality after the public announcement.' Your firm's reputation for accurate forecasting is on the line.",
    responses: [
      {
        id: "A",
        title: "Frame a 'Target vs. Realizable' Split",
        text: "Politely refuse to present the 20% as the 'achievable' target. Instead, create a slide that clearly splits the two numbers: 'Target (20%) vs. Realizable Savings (12%).' Frame the 20% as the client's 'Ambition,' but the 12% as the firm's final, non-negotiable 'Professional Forecast.' State that the firm's integrity requires the presentation of the realizable number as the only one for budget planning.",
        expertRationale: "This is the most professional and ethically sound advisory move. It allows the CEO to verbally maintain their 'ambition' (the 20% target) while enforcing the necessary financial reality (the 12% forecast) for all official documentation. The consultant protects the firm's reputation for accuracy and forces the client to use the correct number for all crucial budget decisions. This is principled but supportive.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Suggest an 'Upside Scenario' Fudge",
        text: "Agree to present the 20% as the primary number. Immediately propose an 'Upside Scenario' in the appendix that shows how an additional 8% saving could be achieved if 'three high-risk, non-core assets are successfully divested.' Ensure the main presentation focuses only on the 20%, but use the appendix to hedge the firm's liability by outlining the necessary, high-risk conditions.",
        expertRationale: "This is a commercial fudge that risks the firm's reputation. It is a form of complicity in presenting a misleading number, even with a hedge in the appendix. The consultant is prioritizing the CEO's political need over the firm's core commitment to objective reality. The risk of the client ignoring the hedge and using the 20% for budgeting is too high.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Focus on the New Market Reality",
        text: "Politely but firmly refuse the 20% number. Focus the presentation on the 'massive change in market reality' that necessitated the change, framing the new 12% target as a 'major achievement given the headwind.' Stress that the firm's value is in providing an honest, market-aware forecast, not in validating a previous, outdated ambition.",
        expertRationale: "This is a principled stand that risks alienating the CEO. The consultant is prioritizing a clear, unvarnished truth over the political reality of the CEO's promise to the Board. It makes the CEO look bad in front of the Board, which is a major failure of advisory partnership. The consultant needs to find a way to save the CEO's face while enforcing the correct number.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor is the keeper of reality, even when it's painful. Option B is a dangerous fudge. Option C is too confrontational. Option A is the ultimate move: it separates the client's 'Ambition' (20%) from the firm's 'Professional Forecast' (12%), thereby allowing the CEO to maintain their narrative while ensuring the company uses the only responsible number for budgeting. The consultant is seen as principled and supportive.",
    takeAway: "When a target is impossible, separate the client's 'Ambition' from the firm's final, non-negotiable 'Professional Forecast.'"
  },
  {
    id: 48,
    moduleId: 2,
    title: "The Culturally Resistant Partner",
    prompt: "Your firm has acquired a boutique consulting firm that specializes in a highly coveted niche. The boutique firm's senior Partner, who is now your colleague, is openly hostile to your firm's rigorous, standardized processes, stating, 'Our magic is in our freedom; your rigid process is the enemy of creativity.' They are refusing to use your firm's standard, mandatory client management software, creating massive risk-tracking and billing issues. You need to enforce the firm's internal rules without alienating a crucial, talented acquisition.",
    responses: [
      {
        id: "A",
        title: "Frame Rigor as 'Risk-Free Creativity'",
        text: "Do not challenge the 'magic' or 'creativity.' Immediately frame the standard software as a 'Risk Mitigation and Billing Accelerator' tool that protects the senior Partner's freedom. State, 'The software is not a cage; it’s an insurance policy. It handles the boring, mandatory stuff (billing, legal) so you can focus 100% of your time on the high-value, creative work. It’s what allows you to be creatively risk-free.'",
        expertRationale: "This is the most effective internal advisory move. It validates the acquired Partner's ego (the focus on 'magic') while reframing the necessary rigor as a direct benefit that protects their freedom. The consultant uses the Partner's ambition as the lever to enforce the internal process, making the software a tool for 'risk-free creativity.' This is a shrewd way to manage internal change.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Escalate to Firm Leadership",
        text: "Formally document the senior Partner's refusal to comply with mandatory internal policies. Escalate the issue to the firm's managing Partner, stating that the compliance risk (billing/legal) is too high. Insist that the managing Partner mandate the use of the software, and suggest the senior Partner's compensation be tied to the successful integration of the internal systems.",
        expertRationale: "This is a safe internal move that protects the consultant, but it is too confrontational. It risks the managing Partner choosing the acquired talent over the firm's rigor, or the senior Partner resigning due to the lack of trust. The consultant is prioritizing process enforcement over the delicate integration of a crucial, expensive acquisition.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Offer a Dedicated Handler",
        text: "Agree to the senior Partner's request to avoid the software. Immediately assign a high-performing, junior analyst to be a 'dedicated Partner handler' whose sole job is to input all the senior Partner's client data into the firm's mandatory systems. Frame this as a 'special service' to allow the senior Partner to focus on the high-value client work, absorbing the cost internally.",
        expertRationale: "This is a good, short-term compromise. It avoids conflict and ensures the compliance is met. However, it sets a dangerous precedent, giving the senior Partner a 'special service' that other Partners will demand, and it creates an unbilled cost for the firm. The consultant is solving the problem with people rather than with a structural solution, which is a temporary fix.",
        expertRanking: 2
      }
    ],
    overall: "A good internal advisor manages cultural resistance by framing the necessity as a benefit. Option B is too aggressive. Option C is a good short-term fix but a bad precedent. Option A is the ultimate move: it reframes the compliance software not as a 'cage' but as an 'insurance policy' that allows the acquired Partner to focus 100% on the high-value, 'creative' work, thereby making the internal rule a commercial asset.",
    takeAway: "Sell internal rigor to creative partners by framing the process as the 'Insurance Policy' that protects their 'freedom' to focus on high-value work."
  },
  {
    id: 49,
    moduleId: 2,
    title: "Client Wants a 'White-Label' Report",
    prompt: "You have just completed a deep-dive competitive analysis for a major financial services client. The client's CEO is set to use the findings to brief regulators and the Board. The CEO asks you to 'white-label' the report—remove all the firm's logos and branding—so it looks like an internal document. The CEO states, 'It will have more political weight internally, and we don't want the Board asking why we hired a consulting firm.' Your firm's policy requires a logo and legal boilerplate on every final document.",
    responses: [
      {
        id: "A",
        title: "Embed the Logo Discreetly",
        text: "Agree to remove the main logo and branding from the cover page. Immediately suggest a compromise: 'We will white-label the report for maximum internal impact, but we must embed a very small, single-line legal boilerplate in the footer of every page: 'Prepared by [Your Firm's Name] for internal client use only.' Frame this as a non-negotiable legal requirement to protect the firm's liability and the report's legal standing.",
        expertRationale: "This is the most professional and shrewd advisory move. It honors the CEO's political need for a 'white-label' report while protecting the firm's legal liability and ensuring the firm gets a quiet, non-confrontational attribution. The consultant wins on both fronts, providing political cover while protecting the firm's essential legal and intellectual property rights. This is a savvy compromise.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Insist on the Full Logo",
        text: "Politely but firmly refuse the request. State, 'Our firm's branding is a non-negotiable legal requirement for all final deliverables to ensure legal and intellectual property protection. We can discuss a smaller, less prominent logo, but a full white-label is not an option.' Warn the CEO that a white-labeled report may not stand up to regulator scrutiny without the firm's backing.",
        expertRationale: "This is a principled stand, but it forces a direct, public confrontation that risks alienating the CEO. The consultant is prioritizing a clear, unvarnished internal rule over the client's political reality. The CEO will likely see this as a failure of partnership and find a way to discredit the report internally, which is a major failure of advisory tact.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Use a Formal Letterhead",
        text: "Agree to the white-label report. Immediately insist that a formal 'Letter of Transmittal' be bound to the front of the report, printed on the firm's official letterhead, signed by the Partner. State that this letter confirms the firm's professional ownership and legal liability for the content, thereby transferring the logo's function to a separate legal document.",
        expertRationale: "This is a good, low-conflict compromise. It satisfies the CEO's desire for a clean, white-labeled document while legally protecting the firm. However, it risks the letter being removed or lost, thereby leaving the report without the necessary legal backing. It is a calculated risk that is slightly less secure than an embedded boilerplate on every page.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor provides political cover but never sacrifices the firm's legal protection. Option B is too rigid. Option C is a good compromise, but risky. Option A is the ultimate move: it meets the demand for 'white-label' (by removing the front-page logo) but ensures the non-negotiable legal protection by embedding a small, subtle boilerplate on every page. The consultant is both tactful and legally shrewd.",
    takeAway: "When a client requests a 'white-label' report, agree to remove the main logo but embed a non-negotiable, subtle legal boilerplate on every page."
  },
  {
    id: 50,
    moduleId: 2,
    title: "Client Wants to Change the Narrative",
    prompt: "You are presenting a three-year strategy that requires a significant divestiture of a non-core division. The client's CEO has decided to spin the narrative internally: 'We are not selling; we are launching an independent, fully-funded venture for growth.' The CEO insists that your final report reflect this 'positive spin,' even though the division is being sold to a competitor. You know this is a misrepresentation of the truth, which could cause a backlash from the employees and lead to a lawsuit from the buyer.",
    responses: [
      {
        id: "A",
        title: "Frame the Exit as a 'Strategic Separation'",
        text: "Refuse the 'independent venture' framing. Instead, propose a more neutral, honest narrative: 'Strategic Separation to Unlock Core Value.' State that the report will focus on the non-negotiable structural and financial benefits of the separation for the core business. Insist on a separate, confidential document, signed by the CEO, that fully outlines the firm's official, true knowledge of the divestiture (the sale).",
        expertRationale: "This is the necessary ethical and professional move. It refuses to participate in a blatant lie (the 'independent venture' spin) that carries legal risk. By using a neutral term ('Strategic Separation'), the consultant provides a factual, honest narrative that protects the firm from liability. The confidential document ensures the firm's official record is clean, regardless of the client's public spin.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Challenge the Reputational Risk",
        text: "Politely but firmly refuse the 'independent venture' spin. State, 'This level of misrepresentation is a catastrophic risk to the company's employee morale and a legal threat from the buyer. We cannot, in good conscience, support a narrative that is untrue.' Insist that the firm's report reflect the reality of a 'Strategic Divestiture' and warn the CEO that the firm may have to withdraw from the project if the spin is enforced.",
        expertRationale: "This is a principled stand, but it forces a direct, high-stakes confrontation with the CEO. The consultant is prioritizing a clear, unvarnished truth over the client's need for political messaging, which risks the entire relationship. The consultant needs to find a way to provide a usable narrative without sacrificing the firm's integrity.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Use the CEO's Narrative with a Disclaimer",
        text: "Agree to use the 'independent venture' spin. Immediately embed a technical, detailed section on the 'Financial and Structural Mechanism of the Separation' that clearly outlines the sale to the competitor. Rely on the technical detail to protect the firm's legal liability, allowing the CEO to use the positive spin for the public, non-technical audience.",
        expertRationale: "This is a dangerous compromise. The firm is complicit in a blatant lie, even if the truth is hidden in a technical section. The risk of employee backlash and legal action is too high for the firm's reputation. The consultant is prioritizing a political win over the firm's essential commitment to factual integrity, which is a major ethical failure.",
        expertRanking: 2
      }
    ],
    overall: "A good advisor provides a client with a truthful, usable narrative, not a provable lie. Option C is too risky. Option B is too confrontational. Option A is the ultimate move: it refuses the lie but provides a factual, neutral narrative ('Strategic Separation') that the CEO can use. The confidential document protects the firm's legal integrity, ensuring the consultant wins on both the ethical and legal front.",
    takeAway: "Refuse to participate in a client's provable lie; instead, provide a factual, neutral narrative (e.g., 'Strategic Separation') for public use."
  },

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
  },
  
  {
    id: 1,
    moduleId: 4,
    title: "The Firehose Review",
    prompt: "You’ve received 15 pages of densely-written, tracked-change edits from a Partner on a crucial strategy deck, all delivered 90 minutes before a final deadline. The notes are sometimes contradictory, often critical, and one comment questions a core assumption you spent three days validating. Your stomach drops, and you feel the urge to push back instantly on the 'wrong' parts.",
    responses: [
      {
        id: "A",
        title: "Triage and Negotiate",
        text: "Systematically read all comments once without reacting. Identify the top three changes that directly impact the core narrative or logic, including the challenged assumption. Schedule 15 minutes with the Partner to walk through these three points, presenting your rationale for the original and asking for clarity on the path forward. Absorb the rest.",
        expertRationale: "This prioritizes the deadline and the Partner's main concern (the core narrative) while respectfully addressing the technical pushback. It shows focus under pressure and turns a chaotic review into a structured, time-bound discussion. This is a highly professional and effective approach.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Immediate Deep Dive",
        text: "Go straight to the most painful, critical comments and spend 45 minutes re-doing the challenged analysis to prove the original assumption was right. Integrate all the minor, non-logical edits, but flag the core assumption slide with a note to the Partner saying, 'Data remains sound, happy to discuss after the deadline.'",
        expertRationale: "While defensible, spending 45 minutes trying to 'win' a technical point risks missing the deadline and shows a reactive, analytical mindset over a delivery-focused one. The Partner's time pressure outweighs the need to prove a point right now. This response misses the forest for the trees.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Massive Integration",
        text: "Assume all changes are correct for now. Integrate every single tracked change, including the contradictory ones and the challenged assumption, accepting the potential for minor inconsistencies. Send the deck back, noting that 'all comments have been integrated, please review the output for final coherence.'",
        expertRationale: "This meets the deadline but delegates the final quality assurance back to the Partner, which is a key consultant responsibility. Blind integration of contradictions signals a lack of ownership over the final product's quality, which can damage trust and lead to embarrassing client errors.",
        expertRanking: 2
      }
    ],
    overall: "A is the strongest because it balances technical rigor with political awareness and a tight deadline. B prioritizes being 'right' over being timely and strategic. C prioritizes speed over ownership and quality assurance.",
    takeAway: "When buried in edits, triage the top three non-negotiables before moving a single slide."
  },
  {
    id: 2,
    moduleId: 4,
    title: "The 'You Missed the Point' Moment",
    prompt: "Your client Project Lead, who has been quietly resistant to the project, publicly dismisses your last three weeks of work during a steering meeting, saying, 'The analysis is beautiful, but it's a solution looking for a problem. You missed the core issue.' Your Manager is silent, letting you handle the fallout. The room looks expectantly at your reaction.",
    responses: [
      {
        id: "A",
        title: "Reframe and Re-validate",
        text: "Acknowledge the critique as a critical data point: 'That's a fair and important challenge.' Ask a clarifying question: 'Could you help me anchor on the core issue you see? We focused on X because of Y data point. What should we have been chasing instead?' Write down the answer and propose a focused, 2-day pivot to re-validate against this new definition.",
        expertRationale: "This is a highly resilient and de-escalating move. It avoids defensiveness, validates the client's perspective, and immediately converts the critique into a constructive, time-bound action plan. It shows maturity and a focus on project success over personal ego.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend with Data",
        text: "Immediately pivot to the appendix and display the foundational data from the kickoff meeting, stating firmly, 'I respectfully disagree. Our charter, agreed on by this team, explicitly defined the problem as A, B, and C. The analysis addresses that charter. Are you suggesting we change the scope now?'",
        expertRationale: "Defending the scope with a firm, data-backed approach is rational but risks escalating the tension and making the client feel cornered or blamed for changing their mind. While technically correct, it’s a political misstep that damages the relationship and future collaboration.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Blame Deflection",
        text: "Look to your Manager and state, 'Manager and I discussed this focus extensively. Perhaps we need a better joint understanding of the problem space, but the methodology is sound.' Suggest a separate, smaller meeting with the client lead and your Manager to hash out the foundational problem definition before proceeding.",
        expertRationale: "This defers responsibility and attempts to pull the Manager into the line of fire, which is a political error. While proposing a side meeting is sensible, the initial deflection suggests an inability to handle direct confrontation or own the project's direction, undermining credibility.",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective: it absorbs the punch and immediately shifts the focus back to collaborative problem-solving. B is too aggressive and C is too deflective, both harming the consultant's standing.",
    takeAway: "Treat a public challenge as a new data point, not a personal attack, and convert it into a focused next step."
  },
  {
    id: 3,
    moduleId: 4,
    title: "The Silent Treatment",
    prompt: "You’ve just presented a complex new operating model to the Head of Operations. She listened intently, nodded politely, and then said, 'Thank you, that’s… interesting.' and moved on without any follow-up questions or visible commitment. You feel uneasy—silence is often a sign of future trouble. Your gut tells you she hated it but is avoiding conflict.",
    responses: [
      {
        id: "A",
        title: "The Fishing Question",
        text: "Wait two hours, then send a concise email thanking her for the time. Add one specific, low-friction question designed to solicit an actual opinion: 'To ensure we hit the mark, which of the five workstreams feels the *least* feasible to implement in Q4?'",
        expertRationale: "This is a clever move. Asking for the 'least feasible' part is a low-risk way to give the client permission to express their reservations without directly asking 'did you hate it?' It turns the passive resistance into a specific, actionable constraint for you to address.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Internal Escalation",
        text: "Immediately brief your Manager, noting the client's non-committal reaction. Suggest the Manager reach out to their counterpart (the client's direct report) to get a 'temperature check' on the Head of Ops's reaction, framing it as 'checking for alignment before moving forward.'",
        expertRationale: "While seeking a second opinion is smart, escalating immediately signals a lack of confidence and an inability to manage the client relationship solo. It also creates a political layer by going around the client, which can be seen as overly cautious or even distrustful.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Push for a Workshop",
        text: "Email her immediately and suggest a mandatory 'refinement workshop' to 'pressure-test the implementation plan and identify early roadblocks' next week. Frame it as a necessary step to ensure the success of the model, forcing her to engage or explicitly cancel/postpone the work.",
        expertRationale: "This response applies pressure, which can force a decision, but it risks creating friction if the client genuinely needs time to process the model or if they feel railroaded. The better move is to gently pull out the concern rather than aggressively push for more engagement.",
        expertRanking: 2
      }
    ],
    overall: "A is the most sophisticated, using a focused, non-confrontational question to break the silence and solicit a real critique. B is too politically cautious, and C is too aggressive for a non-verbal cue.",
    takeAway: "When facing silent resistance, ask a low-friction question that gives the other person permission to express their real concern."
  },
  {
    id: 4,
    moduleId: 4,
    title: "The Partner’s Casual Slagging",
    prompt: "After a presentation, a Partner pulls you aside and casually says, 'That slide on revenue leakage was a bit weak—like a wet noodle. You need to make your analysis hit harder.' This Partner is known for a harsh, witty style. You feel insulted because you worked all night on that specific slide and it was validated by your Project Manager.",
    responses: [
      {
        id: "A",
        title: "The Curious Follow-Up",
        text: "Smile and immediately ask, 'That's a great metaphor. To ensure I hit harder next time, what would have been the equivalent of a punchier slide? More numbers? A different visualization? What specifically felt like the 'wet noodle'?'",
        expertRationale: "This is the ideal response. It acknowledges the Partners style, avoids defensiveness, and immediately pivots from the emotional critique (wet noodle) to a specific, actionable request for future improvement. It shows maturity and a focus on learning the 'Partner language'.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend the Quality",
        text: "Nod but briefly defend the content, stating, 'I understand the impact wasn't what you expected. The underlying data is solid, though—it was validated by the Project Manager, but I'll think about a more aggressive visual.' Leave it at that, then ask the Project Manager what they think the Partner meant.",
        expertRationale: "Defending by invoking the Project Manager's validation dilutes the feedback—it suggests the critique should be directed at the PM, not you. Partners value ownership. While it's right to seek clarity, the initial defense is a minor political misstep that makes you look less receptive.",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Emotional Retreat",
        text: "Say, 'Okay, I understand,' and quickly leave the room, feeling stung. Later that day, re-do the slide in isolation, trying three different layouts until one 'feels' better, but do not ask the Partner or anyone else for specific guidance on how to improve it.",
        expertRationale: "This turns a piece of blunt (but likely valuable) feedback into an isolated, emotional problem. Without seeking clarification, you risk guessing what 'punchier' means and misapplying the lesson. It's an internalised, non-scalable way to 'solve' a delivery problem.",
        expertRanking: 3
      }
    ],
    overall: "A is the strongest because it neutralizes the emotional sting and immediately converts the colorful critique into a concrete, repeatable lesson. B deflects accountability, and C internalizes the problem without seeking clarity.",
    takeAway: "Translate colorful, emotional feedback into a specific, actionable design principle for the next time."
  },
  {
    id: 5,
    moduleId: 4,
    title: "The 'Just Do It Yourself' Swipe",
    prompt: "You’ve asked the client’s Head of IT for key data on system uptime, necessary for your cost model. They've been slow, and in a group email, they reply, 'It's easier to climb Everest than get data from my team. Why don't you just model an assumption for now and stop holding up the schedule?' Your Manager is CC'd.",
    responses: [
      {
        id: "A",
        title: "Validate and Close the Loop",
        text: "Reply to the Head of IT and your Manager: 'Understood. We'll move forward with a validated assumption based on industry benchmarks of X% uptime for this type of system to hit the deadline. To ensure accuracy, we will replace this assumption with your actual data by [Specific Future Date]—please confirm this date works for your team.'",
        expertRationale: "This shows professionalism and ownership. It accepts the constraint, provides an immediate fix (the industry assumption) to keep the project moving, and, crucially, establishes a clear, non-negotiable expectation for when the actual data will be delivered. It puts the ball back in the client's court responsibly.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Counter-Push",
        text: "Reply to all: 'It's critical we use actual data for the cost model. Modeling an assumption risks undermining the final recommendation. Could you suggest a specific person on your team who has the bandwidth and authority to pull this within 24 hours? The cost model cannot proceed without it.'",
        expertRationale: "While factually correct, this response is overly aggressive and risks escalating the conflict, especially with the Manager CC'd. It fails to offer an immediate, practical solution to the scheduling pressure, focusing instead on the problem and the client's failure to deliver.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Escalate Internally First",
        text: "Do not reply to the group email. Immediately call your Manager and explain the situation and the data's criticality. Ask your Manager to have a 'side-bar' conversation with their counterpart (the Head of IT's boss) to resolve the resourcing blockage and secure the data, effectively taking yourself out of the political crossfire.",
        expertRationale: "Escalating is a valid option for a systemic client blockage, but failing to reply to the group email leaves a key action item (what to do now) hanging and makes it seem like you ignored the problem. A good consultant attempts a direct, professional resolution before escalation.",
        expertRanking: 2
      }
    ],
    overall: "A is the most 'advisory' move: it acknowledges the constraint, offers a professional path forward (the assumption), and maintains a clear, firm expectation for the real data. B is too confrontational, and C avoids a necessary direct response.",
    takeAway: "When client data is blocked, offer a professional, interim fix, but maintain a clear, non-negotiable deadline for the final, necessary input."
  },
  {
    id: 6,
    moduleId: 4,
    title: "The Manager’s Vague Disappointment",
    prompt: "Your Manager gives you a mid-project review, saying, 'Your work is all technically perfect, but you’re not *landing* with the client. It’s a chemistry problem.' They offer no specific examples of what 'not landing' means, making the critique feel abstract, unfair, and impossible to fix. You feel deflated and confused.",
    responses: [
      {
        id: "A",
        title: "Translate to Behavior",
        text: "Ask the Manager for three specific, observable behaviors to test: 'I want to improve. Could you watch me in the next three meetings and let me know if I'm doing X, Y, or Z (e.g., stopping too quickly after a recommendation, using too much jargon, failing to ask an open-ended question)? I need tangible actions, not just chemistry.'",
        expertRationale: "This is a perfect move. It takes vague, subjective feedback ('chemistry') and immediately converts it into clear, measurable, and testable behaviors. It shows the Manager you are serious about development and takes accountability by defining the improvement parameters yourself. It makes the abstract actionable.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Seek Peer Validation",
        text: "Contact a trusted peer on the project and ask, 'Have you noticed anything about how I interact with the client, or are they giving off any particular signals when I present?' Try to crowdsource a diagnosis for the 'chemistry problem' before going back to the Manager for a deeper discussion.",
        expertRationale: "Seeking peer insight can be helpful for data collection, but it avoids the direct responsibility of resolving the issue with the person who owns your development (the Manager). The Manager may see this as avoiding the direct conversation, and the peer feedback may be biased or off-base.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Focus on the Next Deliverable",
        text: "Acknowledge the feedback: 'I hear you on the chemistry.' Then, shift the conversation immediately to the next deliverable, asking, 'What is the number one message you want me to land in the CFO meeting next week? I'll focus intensely on making that a breakthrough moment.'",
        expertRationale: "This shows you are moving past the feedback to focus on delivery, which is good, but it sidesteps the core issue of personal development. It fails to clarify the vague feedback, meaning the underlying problem is likely to resurface in the future, even if the next presentation goes well.",
        expertRanking: 2
      }
    ],
    overall: "A turns an almost useless piece of feedback into a concrete development plan, which is highly professional. B avoids the core accountability, and C defers the difficult conversation, risking the problem's recurrence.",
    takeAway: "When feedback is vague, translate it into three specific, observable behaviors that can be tested and measured for improvement."
  },
  {
    id: 7,
    moduleId: 4,
    title: "The Unsolicited Peer Critique",
    prompt: "A consultant at the same level as you, but on a different workstream, emails you with detailed, unasked-for critiques of your slides, saying your approach is 'not up to firm standards' and 'too simplistic.' You feel undermined, especially since their feedback isn’t strictly wrong, just delivered with an aggressive, know-it-all tone.",
    responses: [
      {
        id: "A",
        title: "The Gracious Filter",
        text: "Reply politely to the peer: 'Thanks for taking the time to review; I appreciate the extra pair of eyes. I've incorporated point X and Y (the most valid, low-friction ones). For point Z (the critical one), I'm constrained by the client's need for simplicity. Happy to chat through the trade-offs at lunch, but the deck needs to go out now.'",
        expertRationale: "This is the most balanced and professional response. It validates the peer's effort, selectively accepts the helpful parts (showing you can absorb critique), and uses a clear, external constraint (client need for simplicity) to deflect the more aggressive, subjective parts. It maintains peace without sacrificing quality.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Pushback",
        text: "Reply with a pointed email: 'Thanks, but my Project Manager signed off on the current level of detail. I recommend you focus on your own workstream's deliverables, as I'm constrained by time and client expectations. If you feel my work is below standard, please flag it directly to our Manager.'",
        expertRationale: "This is overly defensive and aggressive. While you are technically correct to invoke the PM's sign-off, challenging the peer to 'flag it to our Manager' escalates a peer-to-peer situation into a formal political issue. This burns an internal relationship unnecessarily.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Internalize and Ignore",
        text: "Integrate the most important two or three suggestions that you agree with. Do not reply to the peer's email, or if you do, only say, 'Got it, thanks.' Resolve to be more careful about the quality of future drafts, but internally resent the aggressive tone of the feedback.",
        expertRationale: "Ignoring the peer's email is a lost opportunity. It doesn't teach the peer how to give better feedback (professional boundary setting) and leaves the relationship unresolved. You should always close the loop professionally, even if you only take a fraction of the advice.",
        expertRanking: 2
      }
    ],
    overall: "A sets a boundary and filters the useful information without creating internal conflict. B is aggressive and escalates, while C is passive and leaves the issue unresolved.",
    takeAway: "When a peer critiques your work, acknowledge the effort, selectively filter the useful parts, and use an external constraint (client/deadline) to deflect the rest."
  },
  {
    id: 8,
    moduleId: 4,
    title: "The Client’s Snarky Email",
    prompt: "You’ve been tracking a key implementation risk for weeks. The client’s Head of Marketing, who dismissed your previous warnings, is now facing the full consequences. She sends a snarky email to the project team: 'Well, look what the cat dragged in. The risk is real, I guess. Thanks for stating the obvious, Consultant.'",
    responses: [
      {
        id: "A",
        title: "De-escalate and Support",
        text: "Reply professionally and to the point: 'Understood. Now that Risk X has materialized, the focus needs to shift to mitigation. Our agreed-upon mitigation plan (A, B, C) is now active. I’ve prepped the first step and can start the work immediately. Let me know if you’d like me to set up an urgent mitigation working session.'",
        expertRationale: "This is the best advisory response. It completely ignores the snarky tone and immediately pivots from the 'blame' phase to the 'fix' phase. It shows command of the situation, ownership of the solution, and provides immediate, constructive action, which is what the client needs now. This is high emotional intelligence.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Subtle Correction",
        text: "Reply to all: 'Glad we all agree the risk is real. As outlined in the last three weekly reports (attached for reference), our analysis projected a 70% probability of this scenario. We are ready to execute the mitigation plan now, starting with step A. Manager, do you approve this immediate action?'",
        expertRationale: "This subtly says, 'I told you so' by referencing past warnings, which is professionally satisfying but politically risky. It may escalate the client's defensiveness and distract from the necessary work of mitigation. The Manager should only be brought in if there's a funding or scope issue, not to rubber-stamp an obvious next step.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quiet Call",
        text: "Do not reply to the group. Call the Head of Marketing immediately and say, 'I understand the frustration. What support do you need from us right now to stabilize the situation?' Offer to pull together the first mitigation step while keeping the rest of the project team updated on the status.",
        expertRationale: "This is a strong, relationship-building move, as it handles the conflict privately and focuses on immediate help. However, the rest of the project team needs to see a clear, professional response to the materialized risk in the group chat, and ignoring the group email leaves the team without a clear next step or accountability.",
        expertRanking: 2
      }
    ],
    overall: "A is the cleanest, most professional approach: it ignores the emotional content and shifts the conversation directly to mitigation and clear next steps. B is defensive, and C misses an opportunity to show team leadership via the group response.",
    takeAway: "When a client is snarky, ignore the tone, embrace the situation, and immediately pivot the conversation from 'blame' to 'fix'."
  },
  {
    id: 9,
    moduleId: 4,
    title: "The Scathing Performance Review",
    prompt: "Your mid-year performance review from your Manager is unexpectedly harsh, rating you 'Needs Improvement' in an area you thought you excelled in (e.g., 'Executive Communication'). The feedback is general, using words like 'not impactful' and 'too junior.' You feel blindsided, angry, and worry about your promotion track.",
    responses: [
      {
        id: "A",
        title: "The Objective Challenge",
        text: "Acknowledge the feedback and thank your Manager for the candid discussion. State that you need concrete evidence to improve: 'I’d like to find three specific instances—emails, slides, or conversations—where my communication was 'not impactful.' Let’s review them together so I can build a measurable development plan for the next six weeks.'",
        expertRationale: "This is the ideal, professional response. It accepts the critique but immediately forces the Manager to back up their subjective assessment with objective, specific evidence. This moves the discussion from emotional feeling to a measurable, actionable development plan, showing maturity and commitment to improvement.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Peer Validation Push",
        text: "Politely push back: 'I'm surprised by this. My Project Manager on X project rated my client communication as outstanding. Could you speak with them and recalibrate this rating based on their direct observations? I need to know this isn't based on one off-day.'",
        expertRationale: "While it’s natural to reference a positive counter-data point, directly asking the Manager to 'recalibrate' based on another's opinion can be seen as overly defensive. It’s better to own the feedback and ask for specific evidence before invoking outside opinions. This risks creating conflict between the Manager and the PM.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quick Acceptance",
        text: "Say, 'I understand, and I'll work on it immediately.' Schedule a dedicated 'coaching session' with your Manager to discuss general communication strategies, but do not challenge them to provide specific examples of where you failed to meet the standard.",
        expertRationale: "This is professional, but it’s a missed opportunity to truly understand the root cause of the critique. Accepting vague feedback without demanding specific examples means you risk 'fixing' the wrong thing. It’s too passive and leads to non-targeted, low-impact development efforts.",
        expertRanking: 2
      }
    ],
    overall: "A turns a highly emotional, subjective review into a pragmatic, evidence-based development plan. B is too defensive, and C is too passive, both reducing the chance of genuine, targeted improvement.",
    takeAway: "When performance feedback is vague or emotional, immediately demand three specific, documented examples to convert the abstract critique into an actionable plan."
  },
  {
    id: 10,
    moduleId: 4,
    title: "The Project Manager’s Last-Minute Curveball",
    prompt: "You’ve spent all day creating a perfect, polished dashboard for tomorrow's client meeting. Your Project Manager reviews it and says, 'It's good, but it's not what I need. Scratch it. Let's pivot to a completely different angle and simplify the data to only three key metrics. Sorry for the late notice.' You feel a surge of frustration at the wasted effort.",
    responses: [
      {
        id: "A",
        title: "The Rapid Pivot",
        text: "Immediately acknowledge the new direction: 'Understood. Simplicity is key for this client.' Ask one critical clarifying question: 'Of the 30 metrics, which single one is the most non-negotiable for you?' Use the answer to build the new, simple version, setting aside the old dashboard for the appendix and promising a quick turnaround.",
        expertRationale: "This is the most professional response. It suppresses the personal frustration and immediately pivots to execution on the new, higher-priority request. Asking for the 'non-negotiable' metric ensures that the rushed deliverable still hits the PM's core need, showing you're focused on the outcome, not the effort.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend and Offer a Compromise",
        text: "Push back slightly: 'I understand the pivot, but the current dashboard uses five hours of effort. Can we keep the key metrics and just hide the technical ones? Maybe we meet for 15 minutes to see what we can save, and if not, I'll start the new one right away.'",
        expertRationale: "While tempting to defend the wasted effort, mentioning the 'five hours of effort' is irrelevant to the meeting's success. The PM has seen the dashboard and decided it's wrong for the client. Arguing about sunk costs delays the critical work. The new, simple approach is clearly the PM's preferred path.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Internalize and Execute",
        text: "Say, 'No problem, I'll get that done.' Start the new dashboard immediately, but internally resent the PM for the wasted time. Resolve to check in more frequently on future deliverables to avoid this kind of late-stage pivot, but don't explicitly mention this frustration or learning to the PM.",
        expertRationale: "This is good on execution but poor on professional development. It's a missed opportunity to have a constructive, low-friction conversation about the process lesson ('How can I better anticipate this pivot next time?') which would prevent future wasted effort for the team.",
        expertRanking: 2
      }
    ],
    overall: "A is the cleanest path to success: it accepts the late constraint and uses a single, clarifying question to ensure the new deliverable is perfectly aligned. B argues about sunk costs, and C is too passive and misses a key process lesson.",
    takeAway: "When a late pivot happens, abandon the sunk cost, ask one clarifying question, and execute the new, higher-priority direction immediately."
  },
  {
    id: 11,
    moduleId: 4,
    title: "The Client’s Constant Nitpicking",
    prompt: "The client’s lead analyst, a former academic, sends back a one-page memo with over 40 minor edits—typos, phrasing suggestions, and formatting tweaks. None of the critiques impact the core logic, but the sheer volume of nitpicking is demoralizing and eats up precious time that should be spent on analysis. You feel like a copyeditor, not a consultant.",
    responses: [
      {
        id: "A",
        title: "Integrate and Standardize",
        text: "Integrate 90% of the minor edits, focusing on consistency and clarity. Write a short, professional note back: 'Thanks for the detailed pass. All edits have been integrated, and we've updated the style guide to incorporate your preferred phrasing for X, Y, and Z going forward.' Flag one truly questionable edit for quick, separate discussion.",
        expertRationale: "This is the right balance. It validates the client's effort by integrating the bulk of the changes (respecting their meticulous nature) but sets a professional boundary by noting the update to the 'style guide.' This implies future documents will automatically adhere to their preference, making their effort unnecessary and subtly discouraging further nitpicking.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Hard Pushback",
        text: "Reply that you will only integrate the 'substantive' edits related to logic and data. For the rest, state: 'My focus needs to remain on high-value problem-solving. Could you please send future edits with the substantive changes clearly separated from the stylistic ones?'",
        expertRationale: "While tempting, this response is too aggressive. It undervalues the client's role in the co-creation process and risks alienating a key stakeholder. What the client views as 'necessary quality control' you're dismissing as 'low-value,' which is a relationship risk.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Outsource the Problem",
        text: "Pass the document to a junior analyst on your team (if available) with the instruction, 'Integrate all these tiny edits; I need to focus on the cost model.' Tell the client, 'My team has integrated all your valuable inputs, thanks for the rigorous review.'",
        expertRationale: "This is acceptable for efficiency but fails to solve the systemic problem. It delegates the necessary but demoralizing task, but you still absorb the cost of managing the nitpicking without setting any expectation for the client to change their behavior, meaning you'll get 40 more edits next time.",
        expertRanking: 2
      }
    ],
    overall: "A is the strongest because it integrates the feedback while subtly setting a future professional boundary using the 'style guide' concept. B is too confrontational, and C avoids the systemic issue.",
    takeAway: "When faced with pervasive nitpicking, absorb the edits while subtly setting a future standard that makes the low-value input redundant."
  },
  {
    id: 12,
    moduleId: 4,
    title: "The Sudden Scope Critique",
    prompt: "You’ve been asked by your Manager to present your findings to a new, powerful client VP, who has only just been briefed on the project scope. Midway through your presentation, the VP scoffs and says, 'This scope is garbage. It doesn't solve my problem, and I won't fund the next phase.' Your Manager is in the room but is looking to you to navigate this landmine.",
    responses: [
      {
        id: "A",
        title: "Acknowledge and Re-Anchor",
        text: "Acknowledge the seriousness: 'VP, that is critical feedback. I recognize the scope was set before your involvement. Could you quickly frame your core problem for us now, in three sentences?' Write it down. Then, re-frame the existing analysis: 'Based on that, our current data is 60% of the way to solving your problem, X, Y, Z. We can re-scope the final 40% to meet your new goal by adding 2 weeks of work.'",
        expertRationale: "This is the highest-level advisory move. It accepts the reality of the political shift (new VP, new problem), converts the emotional critique into a new problem definition, and then cleverly re-anchors the existing work as a *partial solution* to the new problem. It minimizes the perceived loss of the original work and offers a controlled path forward.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend the Existing Scope",
        text: "Calmly but firmly state: 'I understand your perspective, but this scope was signed off by the COO, your direct report, to address problem X. If we change the scope now, we’ll need the COO’s formal sign-off on the change order and an extension of the timeline. Manager and I can prepare the change order documentation for review.'",
        expertRationale: "Defending the original scope based on a higher authority (the COO) is technically correct but politically unwise. It pits the new, powerful VP against their boss and forces an administrative fight when the focus should be on solving the VP’s new problem. This is an unnecessary escalation.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Defer to the Manager",
        text: "Look at your Manager and say, 'Manager, given this is a critical scope question, perhaps you should lead the discussion on how we formally reset the problem definition with the VP to ensure we meet their priorities.' Offer to immediately document the VP's new problem statement and key objectives.",
        expertRationale: "While it’s a scope change and the Manager should ultimately own it, deferring immediately after the critique shows a lack of ownership in the moment. The best move is to show you can handle the emotional punch and immediately offer a constructive re-framing (Option A) before handing off the commercial discussion to the Manager.",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional: it absorbs the critique, incorporates the new client reality, and maintains ownership by presenting a clear path forward. B is aggressive and political, and C is too quick to defer responsibility.",
    takeAway: "When the scope is attacked by a new power-holder, immediately re-anchor your current work as the foundation for their new problem, not the answer to the old one."
  },
  {
    id: 13,
    moduleId: 4,
    title: "The Accusation of Simplification",
    prompt: "You’re presenting a complex mathematical model. A highly technical client team member stands up and says, 'You’ve grossly oversimplified the input variables. Your model is naïve, and the conclusions are useless.' They are correct that you simplified some inputs to meet the deadline, a trade-off your Project Manager approved.",
    responses: [
      {
        id: "A",
        title: "Validate and Contain",
        text: "Acknowledge the technical depth: 'That’s a fair and expert challenge. We consciously traded off a 5% loss of predictive accuracy (the simplified inputs) to deliver the output on time. Let me show you the full list of inputs we excluded and why. We can build an 'enhanced' version with your input, but it would take 3 extra days. What's the priority: time or full accuracy?'",
        expertRationale: "This is the perfect advisory response. It validates the critique (shows respect for the technical person), converts the 'error' into a 'trade-off' made for a business reason (timing), and forces the client to own the next decision: time vs. accuracy. It shows transparency and a commercial mindset.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend the PM’s Decision",
        text: "Say, 'Our Project Manager approved this level of simplification as appropriate for the executive-level audience and the current project phase. We'll be adding those inputs in Phase 2. Let's stick to the current scope for today’s discussion and defer deep-dive questions to the appendix session.'",
        expertRationale: "This deflects the decision to the PM and uses 'executive-level' as a blanket excuse, which insults the technical expert by implying their depth isn't welcome. It creates an unnecessary division between the technical and commercial audiences in the room, making the client expert feel marginalized.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Offer Immediate Collaboration",
        text: "Say, 'You're right. To address your concern, can we meet immediately after this presentation? I'd love your help to manually incorporate the three most sensitive input variables into the model now, and we can show the whole group the immediate impact on the result by tomorrow morning.'",
        expertRationale: "While collaborative, this response is too eager to please. It promises an immediate, complex re-work without assessing the time cost or the commercial priority. You risk spending the night re-running a model for a 5% change that the client may decide is not worth the delay anyway. You should force the commercial trade-off first.",
        expertRanking: 2
      }
    ],
    overall: "A is the strongest because it reframes a technical 'mistake' as a commercial 'trade-off' and forces the client to own the decision on the next step. B is defensive, and C is too quick to sacrifice time for technical perfection.",
    takeAway: "Convert technical critiques into commercial trade-offs (time, cost, accuracy) to force the client to own the solution's prioritization."
  },
  {
    id: 14,
    moduleId: 4,
    title: "The Team’s Scapegoating",
    prompt: "A costly mistake was found in the data pipeline that you oversee. Your Manager, under pressure from a Partner, publicly blames your 'lack of attention to detail' in a team meeting, using the mistake as a teaching moment. You know the mistake was a complex systems error, not carelessness, and was a known-but-unsolved issue in the firm’s playbook. You feel unfairly singled out.",
    responses: [
      {
        id: "A",
        title: "Absorb, Resolve, and Educate",
        text: "Acknowledge the seriousness: 'Understood. The error is now fixed, and the client impact is contained. To prevent recurrence, I'll document the specific root cause (a systems handoff error) and propose a fix for our firm's data playbook within 48 hours. I'll share the lesson learned with the team then.'",
        expertRationale: "This is the most mature response. It absorbs the public blame without arguing or getting defensive, immediately shifts the focus to the fix and containment, and, critically, uses the moment to *proactively* update a firm standard. It converts a perceived failure into an act of firm-wide ownership and leadership, subtly proving the Manager's critique of 'carelessness' wrong.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Private Challenge",
        text: "Say nothing in the meeting. Immediately after, book a 15-minute 1:1 with your Manager. State calmly: 'I want to be clear that the root cause was a systems error, not a lack of attention. I've fixed it, but I need you to understand this wasn't personal carelessness. Can we agree on the correct root cause for the internal log?'",
        expertRationale: "Challenging the Manager privately is important for the internal record, but the public part of the critique (the 'teaching moment') remains unaddressed. The best response is one that publicly absorbs the critique while simultaneously using a constructive action to publicly refute the specific accusation of 'carelessness' (Option A).",
        expertRanking: 2
      },
      {
        id: "C",
        title: "The Technical Defense",
        text: "In the meeting, interrupt the Manager: 'Manager, with respect, the root cause was actually a known system handoff failure in the XYZ tool, which is a structural issue, not a personal one. I identified the workaround last week, and it's already implemented.'",
        expertRationale: "Interrupting the Manager to issue a technical correction, especially during a public 'teaching moment,' is highly unprofessional. It undermines the Manager's authority in front of the team and turns a lesson into a technical argument, making you look defensive and detail-focused instead of results-focused.",
        expertRanking: 3
      }
    ],
    overall: "A is the highest-level move: it accepts the heat, contains the problem, and converts a public fault into a firm-wide positive change. B is too quiet, and C is too confrontational in the moment.",
    takeAway: "Absorb public criticism gracefully, then use a documented, positive action (e.g., updating a firm playbook) to professionally refute the specific, unfair accusation."
  },
  {
    id: 15,
    moduleId: 4,
    title: "The Unsolicited Design Review",
    prompt: "You receive an email from a Partner you've never worked with, who was CC'd on your final client deliverable. They write, 'The design here is atrocious. It lacks a clear narrative and the font usage is non-compliant with firm standards. Get it sorted.' The criticism is aesthetically valid but feels entirely out of the blue and irrelevant to the core content.",
    responses: [
      {
        id: "A",
        title: "Immediate Ownership",
        text: "Reply immediately only to the Partner: 'Partner, thanks for the rigorous QC. You're absolutely right on the font compliance. I will apply the correct firm branding and strengthen the narrative flow within the next 60 minutes and resend the updated version to the team. Thanks for catching this critical oversight.'",
        expertRationale: "This is a key consultant heuristic: when a Partner who doesn't know you gives you a critique, their first goal is to assess your professionalism and reaction. By immediately owning the 'error' (even if it feels minor) and promising a rapid, self-sufficient fix, you pass the test, show humility, and avoid any further scrutiny.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend the Content",
        text: "Reply to the Partner: 'I hear you on the design, but the focus was on the analytical rigor, which our Project Manager signed off on. The content and data are sound. I’ll make the visual fixes, but my priority is client analysis, not firm branding compliance.'",
        expertRationale: "This is a bad response. It makes the critique a matter of priority ('my analysis is more important than your design rules') and dismisses the Partner's input. Partners expect both rigor and polish, and challenging their concern over 'firm standards' is a political misstep that shows an overly junior mindset.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Team Huddle",
        text: "Forward the email to your Project Manager immediately and ask, 'Should I really prioritize this design review from an external Partner, or should I focus on the client's next request? Please advise on the political implications of this request before I act.'",
        expertRationale: "While it’s a valid question, it shows a lack of self-sufficiency. The Partner is testing your response. The best response is to own the low-friction fix (the design) immediately, then check with the PM on whether you should engage the Partner on the 'narrative' critique, which is more subjective and substantive.",
        expertRanking: 2
      }
    ],
    overall: "A is the strongest—it assumes the critique is an audit of your professionalism and passes the test with immediate, self-sufficient ownership. B is defensive, and C is too reliant on the PM for low-stakes guidance.",
    takeAway: "When critiqued by an unfamiliar Partner, own the easy-to-fix mistake immediately to build trust and pass the professionalism test."
  },
  {
    id: 16,
    moduleId: 4,
    title: "The Client Who Changes Their Mind",
    prompt: "The client's Head of Finance told you to build the financial model with a conservative 5% growth rate. You present it, and she then tells the executive committee, 'This 5% is a joke. We need to be aggressive—let's make it 12%!' You feel angry that she's making you look foolish in front of the group by denying her original input.",
    responses: [
      {
        id: "A",
        title: "The Professional Pivot",
        text: "Maintain a neutral expression. State, 'Absolutely. We prepared for scenario analysis and can flip the model to 12% immediately. The key difference is that this 12% scenario increases the capital expenditure requirement by $5M and elevates the implementation risk from Medium to High. Let's focus our discussion on how we mitigate those two side effects.'",
        expertRationale: "This is the ideal advisory move. It avoids the blame game, grants the client the political win of changing the number, but immediately converts the change into a discussion of its consequence (capital expenditure and risk). This shows you are thinking 3 steps ahead and steers the executive conversation from a number to a decision, preserving your credibility as a strategic advisor.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Subtle Defense",
        text: "Look down at your notes and say, 'Just to be clear for the record, the 5% was the figure provided during our 1:1 on Monday. I'll change it now, but we'll need to re-run the sensitivity analysis on the new 12% figure later this afternoon and send it out before the close of business.'",
        expertRationale: "Though factually correct, explicitly saying 'for the record' is a defensive political move that attempts to save face by subtly embarrassing the client. In an executive meeting, the priority is to move the conversation forward, not to win a minor battle over who chose the original number. This choice creates unnecessary friction.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Internal Frustration",
        text: "Say, 'Okay, I'll update that.' Quickly update the slide to 12% and continue the presentation. Immediately after the meeting, brief your Manager on the client's flip-flop, noting the personal frustration and suggesting a clearer data validation process moving forward.",
        expertRationale: "This is good on execution, as it prioritizes moving forward. However, it misses the immediate opportunity to inject an advisory lens into the new 12% number in the live meeting (Option A). The best consultants use a live change as a chance to highlight consequences and show their deep understanding of the model's structure.",
        expertRanking: 2
      }
    ],
    overall: "A is the highest-value move—it embraces the change and immediately pivots to the associated risks and decisions. B is defensive and focuses on the past, and C misses a critical live advisory moment.",
    takeAway: "When a client changes a key number in public, accept the new number immediately and re-direct the conversation to the new, critical consequences (trade-offs and risks)."
  },
  {
    id: 17,
    moduleId: 4,
    title: "The Partner’s Sudden Scrutiny",
    prompt: "You're co-presenting with a Partner known for being unpredictable. Mid-slide, the Partner stops you and says, 'Walk me through the data on this slide again, but in a way that proves the opposite of what you're saying.' You are completely thrown off, and the client team is looking on with amusement.",
    responses: [
      {
        id: "A",
        title: "The Reverse-Logic Test",
        text: "Pause, maintain eye contact with the Partner, and state, 'That’s a great challenge.' Then, quickly summarize the two main counter-arguments or risks that your data *doesn't* address but that would support the 'opposite' conclusion, e.g., 'If Variable X spikes, or if Competitor Y launches, the opposite is true.' Ask, 'Which of those two would you like to explore?'",
        expertRationale: "This is the highest-level demonstration of command over the material. It shows you've already considered the opposite side (the risks/flaws) and are not married to the primary conclusion. It also forces the Partner to pick a specific counter-narrative, which makes the exercise constructive, not just destructive. This is an advanced advisory move.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defer to the Appendix",
        text: "Chuckly and say, 'Good challenge, Partner! I actually have the full sensitivity analysis in the appendix that shows the scenarios where this breaks down. To respect the client's time, let's proceed with the main narrative and circle back to that specific challenge at the end, unless the client wants to dive in now.'",
        expertRationale: "Deferring to the appendix is a classic 'out,' but in this case, it avoids demonstrating the one thing the Partner is looking for: your ability to think under pressure and defend the recommendation's boundaries. It's safe but fails to seize the moment to shine.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Direct Data Reversal",
        text: "Look back at the slide and quickly try to re-read the chart, attempting to show the reverse logic by focusing only on the data points that partially contradict your main point, but doing so without a clear, pre-planned counter-narrative.",
        expertRationale: "Attempting an on-the-spot reversal risks getting technically tangled or confusing the client. Without a clear counter-narrative, you end up sounding tentative or even incoherent. It’s better to articulate the boundary conditions (Option A) than try to do a live, unplanned data flip.",
        expertRanking: 2
      }
    ],
    overall: "A is the most impressive: it shows you've already considered the flaws/risks of your conclusion. B is too safe, and C is too risky without a planned counter-narrative.",
    takeAway: "When asked to prove the opposite of your conclusion, pivot to the boundary conditions and risks that would invalidate your primary point."
  },
  {
    id: 18,
    moduleId: 4,
    title: "The Email Thread Ambush",
    prompt: "A lengthy internal email chain starts between two team members, CC'd to you and your Manager, debating the validity of a piece of data you sourced. The tone is escalating, with one person strongly implying you used a 'non-credible' source, which is false—you validated it with two team leads. You are pulled into a fight you didn't start.",
    responses: [
      {
        id: "A",
        title: "Interrupt and Pivot",
        text: "Reply-All with a firm, neutral email: 'I appreciate the rigor of the debate. To clarify: the data point was sourced from X, validated by Y and Z, and is consistent with Industry Benchmark A. Since this discussion isn't moving toward a conclusion, let's take it offline to a 15-minute call to align, but let’s avoid holding up the final deliverable for the client.'",
        expertRationale: "This is the strongest move. It stops the public email war, clearly documents the source and validation to maintain credibility, and immediately forces the debate to a private, time-boxed resolution. Crucially, it re-anchors the conversation to the external client deadline, showing leadership and a focus on the main objective.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Quiet Defense",
        text: "Reply only to the person who challenged the source: 'That's unfair. I validated the data with Y and Z. I suggest you check with them before implying the source is not credible.' Do not include your Manager or the other person in this reply, hoping to stop the exchange privately.",
        expertRationale: "This is too passive. You allow the public debate to continue, and the key stakeholders (your Manager and the other person) do not see your defense. The best move is to publicly document the facts and then quickly move the problem to a private channel to stop the escalation.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Defer to the Manager",
        text: "Do not reply to the thread. Forward the whole chain to your Manager and ask, 'How should I best handle this debate? I've validated the source, but the tone is becoming toxic. Should I reply, or should you step in?'",
        expertRationale: "This is too reliant on the Manager. A low-to-mid-level consultant should be able to resolve a process/data dispute by clearly documenting the facts and forcing the discussion into a time-boxed, offline meeting. Escalating immediately makes you look less self-sufficient.",
        expertRanking: 2
      }
    ],
    overall: "A shows leadership by publicly stating the facts, shutting down the email war, and focusing on the client outcome. B is too passive, and C is too quick to escalate.",
    takeAway: "When a data dispute breaks out in public, state the facts (source, validation) once, then immediately force the debate to a private, time-boxed resolution."
  },
  {
    id: 19,
    moduleId: 4,
    title: "The 'Just Make It Look Pretty' Request",
    prompt: "You deliver a rigorous, complex analysis on cost reduction. Your client sponsor's first comment is: 'This is great, but honestly, it’s ugly. I need to take this to the CEO. Can you make it look like one of those magazine spreads? Make the charts pop—I don't care about the source data, just the impact.'",
    responses: [
      {
        id: "A",
        title: "The Aesthetic Pivot",
        text: "Acknowledge the need for polish: 'Understood. The CEO will only see the headline. I can create a new, high-impact executive summary deck focusing on the top three findings, using simplified visuals for the 'magazine' effect. We'll link the summary deck to the source analysis (the 'guts') for quick reference if the CEO's team asks for proof.'",
        expertRationale: "This is the perfect advisory move. It accepts the emotional/aesthetic need of the client (making it 'pop') but professionally protects the core analytical integrity by putting the rigor into a linked 'guts' appendix. It delivers the political win (the magazine spread) while maintaining the professional standard (the proof).",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend the Rigor",
        text: "Push back politely: 'I understand the need for polish, but the complexity is necessary to demonstrate the causal chain for the cost reduction. Simplifying the charts too much could undermine the credibility with the finance team. Let’s focus on the narrative first—what’s the single most important action the CEO should take?'",
        expertRationale: "This focuses too much on the *reason* for the complexity instead of the *result* the CEO needs. The client has clearly signaled the CEO has a low appetite for detail. While right to protect rigor, you must prioritize the sponsor's need to look good in front of their boss.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Delegate the Aesthetic",
        text: "Say, 'I can bring in one of our firm's design specialists to spend a day on the visual polish.' Tell the client, 'My focus is on the numbers, but we can ensure the aesthetics meet your standard by bringing in an expert.'",
        expertRationale: "While delegating design is sometimes necessary, it implies that visual communication isn't a core part of your job. Consultants must own the entire deliverable, including the executive-level narrative and polish. The better move is to own the aesthetic fix (A) and frame it as an executive summary.",
        expertRanking: 2
      }
    ],
    overall: "A gives the client the political win (the 'magazine spread') while professionally maintaining the integrity of the analysis. B is too defensive of complexity, and C avoids ownership of the final deliverable's appearance.",
    takeAway: "When asked for a simple, beautiful output, create an Executive Summary deck for the 'look' and put the rigorous analysis into a linked appendix for the 'proof'."
  },
  {
    id: 20,
    moduleId: 4,
    title: "The Manager’s Unrealistic Optimism",
    prompt: "You’ve just returned from a client check-in where the client expressed deep dissatisfaction with the project's progress and the proposed solution. Your Manager’s response is, 'Nonsense. They’re just managing expectations. They love the work. Let’s stick to the plan.' You feel the Manager’s optimism is bordering on denial and risks blindsiding the team.",
    responses: [
      {
        id: "A",
        title: "Present the Evidence",
        text: "Respectfully frame the concern with data: 'I hope you’re right, but here are two specific, observable facts from the meeting: Client X explicitly said Y, and their body language was Z. Before we stick to the plan, can we create a 2-day contingency workstream to address those two specific points? It’s a low-cost hedge against a major blowup.'",
        expertRationale: "This is the most professional response. It avoids telling the Manager they are 'wrong' but uses specific, observable, and quantifiable evidence (the 'facts') to justify a low-cost, high-impact countermeasure (the contingency plan). This turns the Manager's denial into a risk-management exercise, showing leadership and foresight.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Subtle Pushback",
        text: "Say, 'Okay, but I'm nervous. Should we at least put together a 'Plan B' deck that outlines a clear pivot if the feedback turns negative in the steering committee next week?' Offer to do the initial work for the Plan B deck over the weekend to show commitment.",
        expertRationale: "While creating a Plan B is good, this is too general. The Manager's denial won't be broken by general 'nerves.' The best move is to use specific, observed data points (Option A) to force the Manager to acknowledge a specific threat, making the need for a hedge more urgent and easier to approve.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Seek Partner Intervention",
        text: "Brief a trusted Partner (if available) on the situation: 'I'm concerned the Manager is misreading the client’s temperature. Could you do a quick, informal check-in with the client sponsor to validate my reading of the situation and give us an objective assessment?'",
        expertRationale: "This is a dangerous move as it goes over the Manager's head. It should only be used if the Manager's denial is an existential risk to the firm or the project. For a simple disagreement on client 'temperature,' the most professional first step is to engage the Manager directly with objective data (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A is the strongest because it uses objective, specific evidence to justify a low-cost hedge against the Manager’s optimism. B is too vague, and C is an unnecessary escalation.",
    takeAway: "When a superior is in denial, don't say they're wrong; use specific, observable facts to justify a low-cost, high-impact contingency plan."
  },
  {
    id: 21,
    moduleId: 4,
    title: "The Project Manager’s Public Deflection",
    prompt: "In a client meeting, the COO asks why the implementation road-map is six weeks longer than originally promised. Your Project Manager deflects the blame to your team, saying, 'The core challenge has been the data latency, which Consultant X (you) has had to wrestle with.' Data latency was a known risk, but the original promise was based on a flawed assumption made by the PM.",
    responses: [
      {
        id: "A",
        title: "Absorb and Re-Anchor",
        text: "Acknowledge the point: 'The data latency was indeed a challenge we resolved last week.' Immediately pivot to the future: 'The six-week extension allows us to build a more robust, long-term solution. Our focus is now on ensuring the new six-week timeline is locked-down and fully-resourced, which we can confirm by end of day.'",
        expertRationale: "This is the most resilient and professional choice. It absorbs the Project Manager’s deflection without a fight, avoids embarrassing them in front of the client, and immediately pivots the conversation to a forward-looking, constructive solution (locking down the new timeline). This shows team loyalty and a focus on the client's future success.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Subtle Correction",
        text: "Wait for the PM to finish, then interject calmly: 'Just to add color, the data latency was a factor, but the core driver of the six-week extension was the need to re-validate the original, highly optimistic assumptions in light of the client's latest priorities. We own the current, more realistic timeline.'",
        expertRationale: "While accurate, correcting the PM publicly undermines their authority and shows a lack of team unity in front of the client. The political damage of correcting the PM in public outweighs the benefit of clarifying the root cause, especially if the new timeline is sound.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Private Discussion",
        text: "Say nothing during the meeting. Immediately after, find a private moment with your PM and say, 'I took the heat on the latency, but I need to understand why the timeline was blamed on my work when the original assumption was flawed. Let's make sure we're aligned on the root cause for the internal team records.'",
        expertRationale: "This is a valid, necessary step for internal alignment and documentation, but it misses the opportunity to manage the client's perception in the live moment. The client needs to hear that the problem is solved and that the team is aligned on the path forward, which is best achieved by a confident, forward-looking statement (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A is the highest political move: it takes the hit to preserve team unity and pivots immediately to a professional, action-oriented solution for the client. B is disloyal, and C is too slow to address the client's live concern.",
    takeAway: "If a manager publicly deflects blame to you, take the hit to preserve team unity and immediately pivot the conversation to the constructive path forward."
  },
  {
    id: 22,
    moduleId: 4,
    title: "The Partner’s Conflicting Advice",
    prompt: "A Partner advises you to 'be more aggressive, cut straight to the recommendation, and use a provocative style' in your upcoming presentation. Later that day, your Project Manager tells you, 'Tone it down; the client's culture is conservative. Be collaborative, not provocative.' You're caught between two powerful, contradictory masters.",
    responses: [
      {
        id: "A",
        title: "The Cultural Pivot",
        text: "Acknowledge the conflict and prioritize the client culture: 'I hear the Partner's direction, but given the client's known conservative culture, I'll aim for a provocative *conclusion* supported by a *collaborative* process. I will ask for the client’s input on the next steps before I issue a final, crisp recommendation.'",
        expertRationale: "This is the most nuanced and professional resolution. It accepts the core intent of the Partner ('crisp recommendation') but filters the 'provocative style' through the reality of the client's culture (as advised by the PM). It finds a balance that respects both inputs and, crucially, increases the odds of client acceptance.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defer to the Partner",
        text: "Tell your PM, 'I hear you, but the Partner's directive is specific. I’m going to use the aggressive style and lean into a direct recommendation. I'll make sure the Partner is prepped and ready to back me up if the client gets uncomfortable with the tone.'",
        expertRationale: "While Partners outrank PMs, blindly following a Partner’s style advice when it contradicts known client culture is a professional failure. The PM has better 'on the ground' intelligence. The consultant should prioritize the advice that best leads to client buy-in, even if it means modifying the Partner's specific instructions.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Force the Alignment",
        text: "Tell the PM you're caught in the middle. Ask the PM to call the Partner: 'I’d be grateful if you could align on the strategy. Should I be provocative (Partner's advice) or collaborative (your advice) for this specific client? I need one unified voice.'",
        expertRationale: "This is a valid choice to force alignment, but it puts unnecessary work on the PM's plate and makes you look like you can’t synthesize conflicting guidance yourself. The best consultant synthesizes the 'what' (Partner's goal) with the 'how' (PM's cultural knowledge) to create a superior approach (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A synthesizes the conflicting advice by prioritizing the end goal (crisp recommendation) while filtering the style through client culture. B ignores critical local knowledge, and C delegates a synthesis job to the PM.",
    takeAway: "When faced with conflicting advice, synthesize the 'what' (the goal) from the senior leader with the 'how' (the cultural constraint) from the project manager."
  },
  {
    id: 23,
    moduleId: 4,
    title: "The Accidental Blunder",
    prompt: "In a high-stakes email to the entire project steering committee, you accidentally CC'd the client's competitor in the 'To' field. You realize the mistake 15 minutes later. You feel a wave of panic and embarrassment, knowing the error is now visible to everyone, including your Partner.",
    responses: [
      {
        id: "A",
        title: "Own and Contain",
        text: "Immediately send a short 'Reply-All' email to the correct steering committee: 'My deepest apologies for the error. I've recalled the previous email and will resend the correct version now. I'll follow up with all recipients privately to ensure the correct version is in your inbox.' Do not mention the competitor, but immediately tell your Partner/PM privately.",
        expertRationale: "This is the necessary, immediate action. It shows ownership, controls the optics by recalling the message (even if too late), and communicates the fix to the team. The immediate, private communication to the leadership (Partner/PM) is crucial for managing the political fallout, allowing them to lead the competitor containment strategy if necessary.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Truth and the Full Apology",
        text: "Immediately send a 'Reply-All' with a full, honest apology: 'I made a serious error and accidentally included a competitor on the previous email. I have recalled it. My sincere apologies to everyone for this lapse in judgment. I will personally review our email protocol.'",
        expertRationale: "While honest, explicitly naming the competitor in the 'Reply-All' unnecessarily formalizes and amplifies the mistake to the entire steering committee. The core message should be 'I made an error, I've fixed it,' not 'I made an error that is potentially a massive security breach.' The detail should be for your internal leadership only.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quiet Recall",
        text: "Immediately recall the email and quickly send the correct version to the correct client list. Do not send a 'Reply-All' email, hoping the mistake goes unnoticed by the busy executives. Immediately call your Partner/PM and inform them of the situation and the fix.",
        expertRationale: "Relying on the 'recall' function and 'hoping it goes unnoticed' is too risky. Because the recipient list was so large, someone has likely seen it. The best course is to own the administrative error publicly (Option A) while managing the political fallout (the competitor leak) privately with internal leadership.",
        expertRanking: 2
      }
    ],
    overall: "A contains the damage with a professional, immediate public fix and manages the political fallout privately with the leadership. B is too honest in public, and C is too passive in its reliance on luck.",
    takeAway: "When a major administrative error occurs, publicly own the error and the fix immediately, but manage the specific, sensitive details of the mistake (e.g., the competitor leak) privately."
  },
  {
    id: 24,
    moduleId: 4,
    title: "The Veto from the Sidelines",
    prompt: "After a six-week project, you present the final recommendation for a new organizational structure. A Senior VP who only attended the final session says, 'I won't approve this. It's a textbook solution that doesn't account for our unique culture.' The rest of the team looks uncomfortable—they agree with you but won't challenge the VP.",
    responses: [
      {
        id: "A",
        title: "Acknowledge and Probe",
        text: "Acknowledge the authority: 'VP, that is a critical final filter. We agree that culture is paramount.' Turn to the rest of the team: 'Can the rest of the team help us diagnose this? Which specific part of the new structure (A, B, or C) creates the most friction with our culture of X, Y, Z?' Use the group’s input to propose a low-friction pilot or change to the structure on the spot.",
        expertRationale: "This is a great move because it validates the VP's authority and critique while simultaneously using the VP's own language ('unique culture') to force the rest of the team to move from passive agreement to specific, actionable critique. This externalizes the 'no' into a constructive problem the team can solve.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend with Co-creation",
        text: "Politely push back: 'I understand the concern. This structure was, in fact, co-created with your direct reports in the previous five workshops to ensure cultural fit. Could you share what specific cultural element we missed? I’m happy to walk you through the change management steps we built to address that.'",
        expertRationale: "Defending by referencing the team’s co-creation is factually correct but risks putting the VP on the defensive. It forces a political fight ('I outrank all of them') instead of an operational discussion. The better move is to immediately pivot the focus from the 'no' to the 'how to fix it' (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Deferral to the Sponsor",
        text: "Say, 'VP, I appreciate the candor. Since this is a core strategic veto, I suggest we defer to the Project Sponsor to reconcile the current recommendation with your cultural priorities. Sponsor, would you like to set up a 1:1 with the VP to discuss a path forward?'",
        expertRationale: "Deferring to the Project Sponsor is a safe move but shows a lack of ability to handle a high-level critique and find a path forward in the moment. The best consultants can absorb a high-level 'no' and immediately convert it into a constructive discussion with the group, leveraging the existing team's knowledge.",
        expertRanking: 2
      }
    ],
    overall: "A is the highest advisory move: it validates the critique, leverages the group's knowledge to turn the 'no' into a specific action, and finds an immediate path forward. B is defensive, and C is too quick to defer a solution.",
    takeAway: "When a high-level critique threatens to veto the work, validate the critique, then use the rest of the team to turn the vague 'no' into a specific, actionable constraint."
  },
  {
    id: 25,
    moduleId: 4,
    title: "The Project Manager’s Bad Mood",
    prompt: "You receive a lengthy, hostile, and disproportionately harsh email from your Project Manager late on a Friday afternoon, full of ALL CAPS and excessive exclamation marks. You know they are under immense personal and professional stress. The email critiques your work on a minor point that is easily fixed, but the tone is unnecessarily aggressive.",
    responses: [
      {
        id: "A",
        title: "Fix and De-escalate",
        text: "Immediately fix the minor issue (takes 5 minutes). Send a short, non-emotional reply only to the PM: 'Thanks for the quick catch on X. It's fixed, and the updated version is attached. Hope you have a restful weekend.' Do not mention the tone or the stress, and close the loop quickly.",
        expertRationale: "This is the most professional and emotionally intelligent response. It prioritizes the fix, acknowledges the input (not the tone), and refuses to engage in the Friday afternoon drama, allowing the PM to cool down over the weekend. The best response to an emotional email is a calm, factual, and minimal one.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Candid Discussion",
        text: "Reply only to the PM: 'I hear the urgency, and I'll fix the point immediately. However, the tone of this email is unprofessional. I understand you're under stress, but I need us to maintain a constructive and respectful communication standard going forward.'",
        expertRationale: "While professionally correct to address the tone, confronting the PM when they are clearly stressed and on a Friday evening is a high-risk move. It forces a difficult, emotional conversation when the PM is at their worst, making it unlikely to be productive. It's better to de-escalate first (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Internal Complaint",
        text: "Fix the issue and reply that it is fixed. Then, forward the email to your Manager (if the PM is an outside vendor/contractor) or a trusted peer, asking, 'Is this normal? I'm concerned about the PM’s mental state and this level of hostility.'",
        expertRationale: "This is an internalizing and escalating move. While the tone is inappropriate, forwarding a sensitive email to a third party can be a breach of trust and only should be done if the hostility is a pattern or a threat to the project. The first and most necessary step is to resolve the immediate, factual issue (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A is the highest EQ response: it de-escalates by focusing only on the fix and avoids engaging with the emotional tone. B is too confrontational, and C is too quick to involve others in a private matter.",
    takeAway: "The best response to an emotional email is a factual, minimal, and non-emotional reply that closes the loop and ends the exchange."
  },
  {
    id: 26,
    moduleId: 4,
    title: "The CEO’s Unwritten Rule",
    prompt: "You’re preparing for a presentation to the CEO. Your Manager suddenly says, 'The CEO has an unwritten rule: never use the word 'problem.' It makes her defensive. You need to re-draft all the slides to frame every issue as a 'challenge' or 'opportunity.' Your deck is ready to print, and you have 20 minutes.",
    responses: [
      {
        id: "A",
        title: "The Controlled Re-label",
        text: "Immediately go through the deck, focusing on every instance of the word 'problem' and replacing it with 'challenge.' Do not attempt to re-write the surrounding text, as this risks introducing new errors. Tell the Manager, 'The document is now compliant with the CEO's preference, focused on language control. I can walk you through the key slides in 5 minutes.'",
        expertRationale: "This is the necessary, rapid, and controlled fix. The unwritten rule is a political/cultural filter—it's a high-priority, low-friction administrative change. The best response is to address the specific, known constraint without introducing the risk of deeper, substantive errors in a rushed re-write. This shows you prioritize client preference and rapid execution.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Semantic Debate",
        text: "Push back slightly: 'I understand the cultural constraint, but 'problem' is more precise than 'challenge' for certain risks. I will replace it with 'challenge' but flag to you that the semantic distinction might be confusing to the other executives in the room who aren't familiar with this rule.'",
        expertRationale: "This is an analytical failure of judgment. The CEO's unwritten rule is a political reality that outweighs semantic precision. Debating the word choice with the Manager delays the necessary fix and shows an inability to prioritize the political context over the technical accuracy of a single word.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The High-Risk Re-write",
        text: "Attempt to re-write the surrounding text on the critical slides, reframing the sections from 'Problem Statement' to 'Opportunity for X,' trying to make the tone much more positive. This takes 45 minutes, meaning the deck is printed late, but the narrative is better aligned with the CEO's known positivity.",
        expertRationale: "While the narrative might improve, missing the printing deadline for a critical executive meeting is a high-risk failure. The fix for an unwritten rule should be immediate and low-risk (Option A). Introducing new errors by rushing a deeper narrative re-write is a greater threat than a mere word substitution.",
        expertRanking: 2
      }
    ],
    overall: "A is the best: it immediately addresses the high-priority, low-friction political constraint (the word 'problem') without risking new errors. B is too semantic, and C prioritizes a deeper, riskier re-write over the deadline.",
    takeAway: "When a superior's 'unwritten rule' is revealed, immediately address the low-friction constraint (the word choice) before attempting a deeper, riskier narrative re-write."
  },
  {
    id: 27,
    moduleId: 4,
    title: "The Peer's Personal Attack",
    prompt: "You are in a heated debate with a peer analyst over which data set is more representative. The peer, losing the argument on the facts, says, 'Well, you’ve clearly only been here for six months, so you wouldn't understand the legacy data issues.' The comment is intended to belittle you in front of the team.",
    responses: [
      {
        id: "A",
        title: "The Factual Pivot",
        text: "Smile and say, 'That’s right, I’m newer here, which is why I’m looking at this with a fresh set of eyes. However, the data set I’m using (Source A) has a 20% smaller margin of error, according to the Finance team's validation. Let's focus on the facts: is the 20% accuracy gain worth the switch, or is the legacy data familiarity more important for the next step?'",
        expertRationale: "This is the most powerful response. It validates the personal critique ('I’m newer here') to neutralize the attack, but immediately pivots the conversation back to objective, measurable facts and forces the peer to argue against a technical truth. It turns the insult into a source of strength ('fresh eyes') and a professional trade-off.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Counter-Attack",
        text: "Respond with irritation: 'That’s a cheap shot. My tenure has nothing to do with the fact that your data set (Source B) is known to have a 12-month lag and has been repeatedly flagged by the quality control team. Let’s keep this professional and focused on the facts, please.'",
        expertRationale: "Counter-attacking is emotionally satisfying but is a political failure. It lowers you to the peer’s level, escalates the tension, and distracts the team from the core factual discussion. The best move is always to absorb the personal attack and re-direct the conversation to the objective, professional content.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Defer to the Manager",
        text: "Say, 'The personal remarks are not helpful. Manager, could you step in to arbitrate the data set selection? We need to ensure we use the best source for the client, and I want to respect the time of the room.'",
        expertRationale: "Deferring to the Manager is a valid move to resolve a stalemate, but it’s too quick to delegate the data-set debate. It makes you look unable to handle a mild confrontation or defend your work with confidence. The best move is to defend your data with facts (Option A) before escalating the arbitration.",
        expertRanking: 2
      }
    ],
    overall: "A absorbs the personal hit, converts the weakness (newness) into a strength (fresh perspective), and successfully re-anchors the conversation to objective facts. B is unprofessional, and C is too quick to delegate the problem.",
    takeAway: "When attacked on a personal trait (e.g., tenure), acknowledge the trait, convert it into a strength, and immediately pivot the discussion back to the objective, measurable facts."
  },
  {
    id: 28,
    moduleId: 4,
    title: "The Unjustified High Rating",
    prompt: "Your Project Manager gives you a glowing 'Top Performer' rating in a mid-project review, stating, 'You're doing fantastic, no notes.' You know, however, that you’ve been leaning heavily on another teammate for support, and you’re aware of three small, easily-fixable delivery flaws that the PM missed. You feel uncomfortable with the undeserved praise and worry it sets an unrealistic future standard.",
    responses: [
      {
        id: "A",
        title: "Absorb and Frame Improvement",
        text: "Thank the PM sincerely for the praise. Immediately follow up with a specific, low-friction self-critique: 'I appreciate the rating. To ensure I maintain this, I’ve identified three small improvement areas for the next month: X, Y, and Z. I’d love your quick sign-off on those as my self-guided focus points to hit a true Top Performer level.'",
        expertRationale: "This is the most professional response. It accepts the political gift (the high rating) but immediately uses the momentum to set a specific, measurable, and self-guided improvement plan. This shows a high level of self-awareness and integrity, and it ensures your development is targeted at the real flaws without rejecting the PM’s positive assessment.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Self-Correction",
        text: "Push back politely: 'I’m happy you feel that way, but I need to be candid. I think I’m more of a 'Meets Expectations' right now because I struggled with X and leaned heavily on Teammate Y. I want to make sure the rating is accurate so the right person gets the credit and I get the targeted feedback I need.'",
        expertRationale: "While honest, rejecting a high rating is a political failure. The PM has made a subjective judgment based on your overall contribution—don't try to prove them wrong. Rejecting praise undermines their judgment and often makes them feel like you’re arguing or fishing for more praise. Accept the win and manage the flaws yourself (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Thank You and the Confession",
        text: "Thank the PM enthusiastically. Schedule a private 1:1 with Teammate Y and say, 'I just got a great review, but I know I leaned on you heavily. Thank you. I’ll make sure the Manager knows about your specific support when bonus time comes around.'",
        expertRationale: "It's excellent to acknowledge the teammate, but this fails to address the lack of specific feedback for your own development. The best consultants use a good review to set their own, high-integrity development plan (Option A), not just thank a peer.",
        expertRanking: 2
      }
    ],
    overall: "A accepts the political win (the rating) while demonstrating integrity and self-awareness by proposing a self-guided, targeted development plan. B rejects the gift, and C fails to secure the necessary development plan.",
    takeAway: "When given undeserved praise, accept the political gift, then immediately use the momentum to propose your own specific, high-integrity development plan."
  },
  {
    id: 29,
    moduleId: 4,
    title: "The Analyst’s Public Doubt",
    prompt: "You’ve just presented a complex business case with a large, nine-figure projected ROI. A highly-respected, mid-level client analyst raises their hand and, with a calm but firm tone, says, 'I’ve re-run the numbers. The ROI is inflated by 40% due to a flawed assumption on the churn rate. Show me the churn rate source now.'",
    responses: [
      {
        id: "A",
        title: "Contain and Validate",
        text: "Acknowledge the seriousness: 'Analyst, thank you for that rigor—that is exactly the right challenge.' State: 'The 40% difference on a nine-figure case is a conversation for us to have immediately. We can quickly review the churn assumption source and the sensitivity analysis in a 15-minute sidebar right after this meeting to get to a final, verified number for the group.'",
        expertRationale: "This is the ideal response. It validates the challenge's importance, prevents a public, technical 'car crash' by containing the debate to a private sidebar, and shows leadership by immediately scheduling the necessary fix. It protects the executive meeting from a technical derailment while respecting the analyst's input.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "Defend with the PM",
        text: "Say, 'The churn rate assumption was signed off on by the Project Manager and the Head of Finance. While I appreciate the rigor, we need to respect the established governance process. Let's stick to the current plan and discuss the assumption in a separate meeting with the Head of Finance next week.'",
        expertRationale: "Deflecting the critique by invoking a higher authority (PM/Head of Finance) is technically defensible but politically weak. It ignores the gravity of a 40% ROI inflation and fails to show you are in command of the numbers. The best move is to show you own the fix, not the sign-off (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Live Data Check",
        text: "Say, 'Let’s check that now.' Bring up the raw spreadsheet on the screen and try to walk through the churn rate calculation line-by-line, trying to justify the original assumption by highlighting the source data to the whole room.",
        expertRationale: "This is a classic 'analyst' move that derails the executive meeting. Walking through a spreadsheet in a meeting is a waste of executive time and risks getting into a technical tangle that only two people understand. The right move is to resolve the technical problem in a private, time-boxed session.",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional: it validates the critical feedback but immediately contains the technical debate to a private setting, preserving the flow of the executive meeting. B deflects ownership, and C wastes executive time.",
    takeAway: "When a technical critique threatens to derail an executive meeting, validate the importance of the critique and immediately contain the debate to a private, time-boxed session."
  },
  {
    id: 30,
    moduleId: 4,
    title: "The Partner’s Humorous Dig",
    prompt: "In a presentation prep session, a Partner known for his dry wit says, loud enough for the whole team to hear, 'That slide's analysis is about as deep as a puddle.' You know the critique is an exaggeration for humor, but it feels unfair and dismissive of your hard work, and you worry about the team's perception.",
    responses: [
      {
        id: "A",
        title: "The Self-Deprecating Pivot",
        text: "Laugh briefly, then quickly say, 'Partner, you’re right, it needs a little more lake than a puddle. Can we focus for 30 seconds: what's the one metric I can add to this slide that will give it the 'ocean' feel you're looking for? I need a deep-end suggestion.'",
        expertRationale: "This is a high-EQ response. It acknowledges the humor to preserve the relationship, shows self-deprecating humility, and immediately pivots from the emotional attack ('puddle') to a specific, actionable request ('one metric'). It turns the critique into a constructive coaching moment that benefits the entire team.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Factual Defense",
        text: "State calmly: 'I hear the humor, but this slide represents three full days of work with data validated by the client’s team. I'm happy to walk through the process flow for the analysis, but the rigor is sound. I can add another chart, but the original point is valid.'",
        expertRationale: "Defending the 'three full days of work' is a classic junior mistake—it emphasizes effort over impact. The Partner is critiquing the output's executive impact, not your rigor. Getting defensive over the effort misses the point entirely and makes you look more focused on self-pity than on delivering a better slide.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Ignore and Fix",
        text: "Laugh uncomfortably and say nothing. Quickly take a note to rework the slide later that evening, adding two more charts and a bullet point on the methodology to show the Partner how rigorous the 'puddle' actually was, but do not ask for specific input on the fix.",
        expertRationale: "This is too passive. You miss the opportunity for a live coaching moment and risk spending more time fixing the wrong thing. The Partner gave you a clear metaphor ('puddle'); the best move is to force them to translate that metaphor into a specific, actionable fix (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A wins by neutralizing the humor and immediately converting the vague critique into a specific, actionable coaching moment. B defends the effort, and C misses the opportunity to get specific guidance.",
    takeAway: "When a superior critiques your work with a metaphor, laugh, accept the premise, and immediately force them to translate the metaphor into a specific, actionable improvement."
  },
  {
    id: 31,
    moduleId: 4,
    title: "The Internalized Scrutiny",
    prompt: "You’ve made a small, non-critical math error in a slide deck that your Project Manager caught and fixed. It was a minor mistake, but you’re obsessing over it, feeling deeply embarrassed and worried that this tiny flaw will now define you in the eyes of the Manager and the team. The PM has already moved on.",
    responses: [
      {
        id: "A",
        title: "Document and Move On",
        text: "Acknowledge the fix to the PM: 'Thanks for the sharp catch on the slide. I’ve updated my checklist to specifically prevent X (the root cause of the error) from happening again.' Do not dwell on it. Immediately pivot your focus to the next, higher-priority deliverable, recognizing the PM is already focused on future work.",
        expertRationale: "This is the healthiest and most professional response. It shows integrity by acknowledging the fix, converts the mistake into an immediate, documented process improvement (the updated checklist), and, crucially, avoids over-internalizing or dwelling on a minor flaw. It mirrors the PM's focus: past is fixed, now focus on the future.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Over-Apology",
        text: "Send a long email to the PM profusely apologizing for the error, explaining that you were distracted by Y, and assuring them that you've triple-checked every other number in the deck. Ask them to re-verify the full deck to 'ensure your personal credibility is not damaged.'",
        expertRationale: "Over-apologizing is a political mistake. It amplifies a minor error, draws the PM's attention back to a problem they already solved, and suggests a lack of confidence in your own ability to quality check your work. The PM expects a simple 'thanks for the catch' and a quick fix.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Ask for Reassurance",
        text: "Find a private moment with the PM and say, 'I'm so embarrassed about that small error. Am I still viewed as reliable, or did this cost me credibility with you and the Partner?' Seek verbal reassurance that the mistake was minor and has been forgotten.",
        expertRationale: "Seeking reassurance puts an unnecessary emotional burden on the PM, forcing them to spend time managing your feelings about a minor fix. A mature professional converts the mistake into a process improvement (Option A) without needing external validation of their self-worth.",
        expertRanking: 2
      }
    ],
    overall: "A is the most mature response: it acknowledges the fix, converts the mistake into a process lesson, and refuses to over-internalize the minor error. B over-amplifies the mistake, and C seeks unnecessary emotional reassurance.",
    takeAway: "When a minor error is caught, convert the mistake into a documented process improvement, acknowledge the fix, and immediately pivot your focus to the next task."
  },
  {
    id: 32,
    moduleId: 4,
    title: "The Client’s Unreasonable Timeline",
    prompt: "The client’s Head of Strategy abruptly demands a major new piece of analysis—a competitive landscape deep-dive—by tomorrow morning. This is an impossible 2-day deliverable, and you were planning to use that time to finalize the existing, critical cost model. You feel a surge of stress and the need to say 'yes' to this powerful client.",
    responses: [
      {
        id: "A",
        title: "The Trade-Off Offer",
        text: "Acknowledge the importance: 'That competitive analysis is critical. I can deliver a 'Lite' version (top 3 competitors, 80/20 analysis) by tomorrow morning. To do that, I will have to push the final quality check and executive summary of the cost model to the end of the day tomorrow. Which of those two trade-offs is more acceptable to you?'",
        expertRationale: "This is the highest advisory move. It avoids the dangerous word 'no,' grants the client a partial 'yes' (the 'Lite' version), and forces them to own the business trade-off (competitive analysis vs. cost model finalization). This shows you are focused on the client's priorities and are managing the project as a commercial product.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Simple 'No'",
        text: "Politely but firmly decline: 'That's a two-day deliverable and we cannot compromise the integrity of the cost model. I can get you the competitive analysis by the end of the day tomorrow, but not by the morning. The cost model must remain the priority.'",
        expertRationale: "This is clear but politically risky. A powerful client executive often interprets a simple 'no' as a lack of flexibility or capacity, even if it's factually correct. The best response is always to offer a controlled trade-off (Option A) rather than a hard boundary.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Internalize and Over-Deliver",
        text: "Say, 'I’ll see what I can do.' Immediately call your Manager, ask for a full-day extension on the cost model, and plan to work all night to deliver a 'good enough' version of both the competitive analysis and the cost model on time, sacrificing sleep and quality.",
        expertRationale: "This sacrifices your well-being and the quality of both deliverables to avoid a difficult conversation. It sets an unrealistic precedent for future client expectations and risks burnout. The professional answer is to manage expectations and force the client to prioritize.",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional: it avoids the word 'no,' offers a partial solution, and forces the client to own the necessary trade-off. B is too rigid, and C is a recipe for burnout and mediocre quality.",
    takeAway: "When a client makes an impossible demand, don't say 'no'; offer a controlled, partial 'yes' and force them to choose the trade-off with another priority."
  },
  {
    id: 33,
    moduleId: 4,
    title: "The Partner’s Sudden Coldness",
    prompt: "You ran into a Partner in the hallway. You gave a professional update on your current project. The Partner listened, gave a vague 'Sounds fine,' and quickly walked away without the usual small talk or encouragement. You feel unsettled, wondering if you misread the project's health or if the Partner is subtly unhappy with your performance.",
    responses: [
      {
        id: "A",
        title: "The Private Audit",
        text: "Do not react publicly. Immediately brief your Project Manager: 'I had a brief check-in with Partner X. They seemed colder than usual. Could you check the internal Partner dashboard/log for any recent critical notes on the project’s health or my performance? I want to proactively address any unstated concern.'",
        expertRationale: "This is the most professional response. It recognizes that a Partner's coldness is usually about the *project* (a political or financial issue) and not your personal performance. Leveraging the PM to check internal health metrics is a low-friction, high-value way to diagnose the real problem without bugging the Partner.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Follow-Up",
        text: "Send a short email to the Partner: 'Partner, I sensed a possible concern in our chat. To ensure I’m not missing anything critical, could you share the single biggest risk you see on the project right now? I will prioritize tackling that immediately.'",
        expertRationale: "While proactive, sending a direct email to a Partner based on a vague, emotional cue (coldness) is high-risk. The Partner may be busy, tired, or dealing with a different issue. The best move is to check the internal data first (Option A) before forcing a conversation that the Partner may not want to have.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Self-Fulfill the Fear",
        text: "Internalize the coldness and spend the next three hours double-checking the last two weeks of your work, re-running the most complex analysis to ensure there are no hidden flaws, without telling the PM or anyone else about your concern.",
        expertRationale: "This is an example of unmanaged professional anxiety. It wastes valuable time on a potential non-issue and fails to address the likely root cause (a project health issue). The best move is to gather objective data on the project's health (Option A) before diving into isolated re-work.",
        expertRanking: 2
      }
    ],
    overall: "A is the most objective and mature: it treats the Partner's coldness as a data point about the project's political health and uses the PM to find the necessary data. B is too direct, and C is inefficient and based on anxiety.",
    takeAway: "Treat a superior’s vague coldness as a flag for project health, not personal performance, and check the internal political data before reacting."
  },
  {
    id: 34,
    moduleId: 4,
    title: "The Manager’s Unsolicited Advice",
    prompt: "Your Project Manager, a former McKinsey consultant, gives you very specific, unsolicited advice on how to structure your slide headlines, insisting you use the 'Action-Consequence-Next Step' format. You find the format rigid and believe your current 'Insight-Call to Action' format is better suited for the current, relationship-driven client.",
    responses: [
      {
        id: "A",
        title: "Acknowledge and Prototype",
        text: "Acknowledge the expertise: 'I appreciate the deep structural guidance. To ensure we choose the highest-impact format, can I prototype two slides—one in the 'Action-Consequence' format and one in my current format—and you pick the one you think will resonate best with the client’s Head of X?'",
        expertRationale: "This is the best consulting move. It respects the Manager's technical expertise, avoids a direct argument over style, and, crucially, reframes the decision as a test of what works best for the *client*. By letting the Manager choose the prototype, you maintain humility while still subtly providing evidence for your preferred approach.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Pushback",
        text: "State calmly: 'I understand that format, but for this client, our goal is high-trust collaboration. I believe the 'Insight-Call to Action' style is more inviting and less prescriptive than the 'Action-Consequence' style. I'll stick with my current format and will be prepared to defend it.'",
        expertRationale: "Directly challenging the Manager's structural advice is high-risk. It risks being seen as inflexible or unwilling to learn the firm's 'playbook,' even if your format is superior for the client. The better move is to 'test and learn' with the Manager's sign-off (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quiet Compliance",
        text: "Comply immediately and convert all the slide titles to the 'Action-Consequence' format, even though it makes them feel wordy. Resolve to use your preferred style for all other, less-scrutinized documents, but do not mention your preference to the Manager.",
        expertRationale: "This is too passive. You miss the opportunity to educate the Manager on why your style is better for the specific client context. The Manager is giving you advice to help you, and the best way to leverage that is to engage in a structured debate about the client outcome, not blind compliance.",
        expertRanking: 2
      }
    ],
    overall: "A is the strongest because it respects the Manager's expertise and uses a low-risk A/B test to let the client outcome drive the final decision. B is confrontational, and C is too passive.",
    takeAway: "When a superior offers unsolicited stylistic advice, acknowledge their expertise and suggest a low-risk prototype/A/B test to let the client outcome drive the final decision."
  },
  {
    id: 35,
    moduleId: 4,
    title: "The Client’s Non-Stop Criticism",
    prompt: "The Head of Finance, who is meticulous and prone to self-doubt, provides weekly feedback that is almost entirely critical—always finding flaws, demanding more detail, and never giving a compliment. The work is technically sound, but the constant, negative scrutiny has you feeling personally drained and unappreciated.",
    responses: [
      {
        id: "A",
        title: "Set a 'Positive' Loop",
        text: "Acknowledge the technical rigor: 'I appreciate your meticulous review.' Then, insert a structural request: 'To ensure we’re all aligned, before we dive into the next two weeks of detailed fixes, can you quickly validate the top three high-level conclusions? If those are sound, we can move forward with confidence.'",
        expertRationale: "This is a necessary resilience move. It forces the client to confirm the *strategic* high-level conclusions before you dive into the technical details. This creates a small, necessary 'positive loop' or validation moment, which helps break the pattern of non-stop negative, low-level critique and grounds the work's overall value.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The 'I Need a Win' Request",
        text: "After receiving the critical feedback, send a separate, private email: 'I know you have high standards, which I appreciate. For morale, is there one small area of my work this week that you felt was a home run? I’d like to understand what 'great' looks like to you.'",
        expertRationale: "While honest, this is an overly emotional move. It asks the client to manage your feelings and forces them into an uncomfortable position. The client is focused on their own work's quality and is not responsible for your morale. The better move is to create a professional validation loop (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Defensive Barrier",
        text: "Tell your Project Manager: 'I need you to filter the client’s feedback before it gets to me. The constant low-level criticism is slowing me down. I only want to see the top three most necessary, high-impact changes, and I'll deal with the rest later.'",
        expertRationale: "Delegating the filtering job to the Project Manager is acceptable for efficiency, but it fails to address the systemic client behavior. The best consultants learn how to manage and professionalize the feedback loop themselves (Option A) rather than relying on a protective barrier.",
        expertRanking: 2
      }
    ],
    overall: "A wins by professionally inserting a required 'positive loop' (high-level validation) to break the pattern of non-stop low-level criticism. B is too emotional, and C delegates the necessary filtering job.",
    takeAway: "When a client is non-stop critical, insert a required step for high-level validation to create a necessary 'positive loop' and prevent low-level scope creep."
  },
  {
    id: 36,
    moduleId: 4,
    title: "The Project Manager’s Public Second-Guessing",
    prompt: "In a joint client working session, you present a financial model forecast. Your Project Manager interrupts you: 'Wait, I think we need to adjust that revenue assumption now that I think about it. Let’s make it 5% higher. X, pause for a second while I explain why.' The PM is undermining your presentation flow and making the team look unaligned.",
    responses: [
      {
        id: "A",
        title: "The Controlled Pause",
        text: "Say, 'Great point, PM. I have the live model here. To ensure we’re aligned with the client, I’ll input that 5% change now. Client, while I do that, PM, can you walk us through the immediate impact of that change on the cash flow?' This immediately pivots the attention to the PM to explain the impact, allowing you to quickly recover.",
        expertRationale: "This is a high-EQ move. It absorbs the PM’s interruption without challenge, immediately implements the change to show team unity, and, crucially, makes the PM publicly justify the change to the client by explaining the immediate impact. It re-establishes flow and leadership in a constructive way.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Firm Boundary",
        text: "Wait for the PM to finish, then say, 'Thanks, PM. That’s an important assumption change. For the sake of the client's time, let's keep that as a 'to-do' and incorporate it after this meeting. Let’s proceed with the model as-is for now to show the rest of the results.'",
        expertRationale: "While you are trying to protect the flow, you are publicly creating a boundary with your superior. The PM interrupted because they felt the change was necessary in the moment. Pushing back risks escalating the moment and making the team look less aligned than simply incorporating the change live (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Private Check-In",
        text: "Absorb the interruption and let the PM run with the explanation. Immediately after the meeting, brief the PM: 'I felt that interruption undermined our flow. If you have a last-minute assumption change, can you please flag it to me privately before the meeting so we can appear unified?'",
        expertRationale: "This is a good, necessary conversation for process improvement. However, it misses the opportunity to manage the client's perception of disunity *in the moment*. The best move is to use the live interruption as an opportunity to show controlled, professional team collaboration (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A is the most effective: it immediately integrates the change, shows team unity, and makes the PM publicly justify the impact, thus recovering the presentation's flow. B creates a public boundary, and C is too passive in the moment.",
    takeAway: "If a superior publicly second-guesses you, immediately incorporate the change live and have them publicly justify the impact of the change to the client."
  },
  {
    id: 37,
    moduleId: 4,
    title: "The Unjustified Low Rating",
    prompt: "Your mid-year performance review includes a low rating on 'Strategic Foresight,' with the vague note: 'Needs to think bigger than the current task.' You feel this is deeply unfair, as you’ve proactively suggested three new project leads, all of which were dismissed by the Manager for 'timing.' You feel unseen and frustrated.",
    responses: [
      {
        id: "A",
        title: "Challenge and Re-define",
        text: "Acknowledge the feedback and the need to improve. State: 'To make this actionable, I need a clear definition of 'strategic foresight.' Can we agree that it means X (e.g., identifying three new, fundable opportunities every quarter)? Let's use my previous ideas (X, Y, Z) as the benchmark for where I was, and I'll create a new, measurable plan based on the agreed-upon definition.'",
        expertRationale: "This is a professional and high-EQ response. It accepts the critique but forces the Manager to define the vague term ('strategic foresight') into a specific, measurable goal. It uses your past, dismissed efforts as a baseline for discussion, which subtly points out the Manager's past failure to recognize the foresight while keeping the focus on the future.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Defense of Past Effort",
        text: "Politely push back: 'With respect, I’m confused by this rating. I've proactively identified three new projects (X, Y, Z), which you dismissed. Can we review those three to see what I missed in my approach? I need to know this rating is not based on a miscommunication.'",
        expertRationale: "This is too defensive. It frames the conversation as you against the Manager, attempting to prove the Manager wrong by referencing past failures. The best move is to convert the abstract critique into a *forward-looking*, measurable goal (Option A), which is less confrontational and more productive.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Seek a Mentor’s Help",
        text: "Acknowledge the feedback and agree to work on it. Immediately contact a trusted mentor outside of the project and say, 'I need your help translating this vague 'Strategic Foresight' critique into something actionable. The Manager is being vague.' Ask the mentor to help craft a development plan.",
        expertRationale: "This is good, as it seeks external counsel. However, it avoids the necessary, hard conversation with the Manager who controls your rating. The best approach is to first try to force clarity directly from the source (the Manager) to ensure the development plan is aligned with the expectations that actually matter.",
        expertRanking: 2
      }
    ],
    overall: "A is the best because it forces the Manager to turn a vague critique into a measurable, actionable plan. B is too defensive, and C avoids the necessary direct conversation.",
    takeAway: "When a performance critique is vague, accept the premise but immediately force the superior to turn the abstract concept into a specific, measurable, and forward-looking goal."
  },
  {
    id: 38,
    moduleId: 4,
    title: "The Client’s Sudden Reversal",
    prompt: "You’ve spent two days building a custom dashboard based on a highly detailed sketch provided by the client's Chief of Staff. You present it, and the Chief of Staff says, 'This is completely wrong. It's too busy, and I need a minimalist view now. Scrap the custom design.' The client is denying their own prior instruction.",
    responses: [
      {
        id: "A",
        title: "The Low-Friction Pivot",
        text: "Acknowledge the new direction: 'Understood. Let's pivot to minimalist. That original design (the sketch) will serve as a valuable 'data drill-down' appendix, and I can have a clean, three-metric minimalist view ready for you within 90 minutes. I’ll ensure the drill-down links are seamless so you can prove the numbers if needed.'",
        expertRationale: "This is the most professional response. It immediately grants the client the political win of the new direction while cleverly reframing the 'scrapped' work as a necessary *appendix* for rigor. It’s low-friction, fast, and shows you prioritize the client's current need over the sunk cost of the old design.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Subtle Reminder",
        text: "Say, 'I’m happy to pivot to minimalist. Just to clarify for the record, this dashboard was built exactly to the sketch you provided on Tuesday. Can we agree on a final 'design sign-off' process moving forward to prevent this rework?'",
        expertRationale: "Explicitly stating 'for the record' is a defensive, face-saving move that can antagonize the client, who is already embarrassed by denying their own instruction. The client does not need a lecture on process governance now—they need the minimalist view immediately. Focus on the fix, not the blame.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Manager’s Intervention",
        text: "Say, 'Chief of Staff, I appreciate the new direction. Since this involves a two-day rework, I’ll need to coordinate with my Project Manager. Manager, can you help us prioritize this new minimalist view against the rest of our deliverables, and secure the necessary time?'",
        expertRationale: "While rework often requires a Manager's sign-off, escalating immediately makes you look less self-sufficient. The best move is to absorb the rework, frame it as a low-friction design change (Option A), and then inform the Manager about the impact on the timeline, rather than escalating the decision to them in the meeting.",
        expertRanking: 2
      }
    ],
    overall: "A wins by immediately implementing the new request and reframing the sunk-cost work as a valuable appendix. B is unnecessarily defensive, and C is too quick to defer a design change to the Manager.",
    takeAway: "When a client denies their own past instruction, pivot immediately, grant the new request, and reframe the 'scrapped' work as a necessary appendix."
  },
  {
    id: 39,
    moduleId: 4,
    title: "The Project Manager’s Veto",
    prompt: "You've successfully secured a critical piece of client data by building a strong relationship with a mid-level manager. Your Project Manager, viewing the manager as 'unimportant,' vetoes your decision to thank the client manager in the final deck's acknowledgments, saying, 'Stick to the executives, that’s how we play.'",
    responses: [
      {
        id: "A",
        title: "Subtle Insertion",
        text: "Acknowledge the PM’s constraint: 'Understood, sticking to executives only.' Then, offer a subtle workaround: 'To ensure the manager is recognized, I’ll mention them in the pre-meeting email to the Project Sponsor, thanking them for their 'critical support and data access.' This is a lower-friction way to recognize them without altering the executive-facing deck.",
        expertRationale: "This is a great compromise. It adheres to the PM's political rule (executive-only deck) but ensures the crucial, non-executive client stakeholder is appropriately recognized in a lower-stakes, high-impact channel (the pre-read email). This is a politically savvy move that preserves both the relationship and the firm's unwritten rule.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Challenge",
        text: "Push back to the PM: 'I respectfully disagree. That manager's effort was key to our success. If we don’t recognize their work, we risk damaging the relationship and our future data access. Can we agree to include their name in the appendix as a 'Key Data Contributor' instead of the main acknowledgments?'",
        expertRationale: "Challenging the PM's 'unwritten rule' directly is a high-risk political move that should be avoided for a low-stakes issue like a thank-you. The PM is trying to teach you a political norm. The best approach is to adhere to the rule while finding a subtle workaround (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Unsanctioned Thank You",
        text: "Quietly schedule a 1:1 coffee with the client manager and personally thank them for their effort and critical data contribution. Do not mention the acknowledgment slide veto, and hope the manager does not notice they were excluded from the final deck.",
        expertRationale: "This is good for the client relationship but fails to address the internal political constraint set by the PM. The external thank-you is necessary, but the internal conversation (Option A's subtle workaround) is what makes the move truly savvy by bridging the gap between internal and external rules.",
        expertRanking: 2
      }
    ],
    overall: "A wins by adhering to the PM's political rule while finding a subtle, high-impact channel to recognize the critical client stakeholder. B is too confrontational, and C ignores the internal political constraint.",
    takeAway: "When forced to follow a political rule, adhere to the constraint and use a low-friction channel (e.g., a private email) to handle the necessary client relationship management."
  },
  {
    id: 40,
    moduleId: 4,
    title: "The Partner’s Unreasonable Edit",
    prompt: "A Partner reviews your final report and demands a key conclusion be softened from 'must do X' to 'should consider X.' You know the data is unassailable, and the 'softening' is a political move to appease a difficult client executive who the Partner is trying to sell a follow-on project to. You feel your rigor is being compromised.",
    responses: [
      {
        id: "A",
        title: "The Dual Narrative",
        text: "Acknowledge the political constraint: 'Understood. We need to preserve the relationship.' Propose a trade-off: 'I’ll use the softened 'should consider' language in the executive summary, but I will explicitly retain the original 'must do' language in the detailed Recommendation Appendix, stating the data unequivocally drives this conclusion. This protects the rigor for the technical audience.'",
        expertRationale: "This is the ideal advisory move. It accepts the political reality (the Partner's need for a future sale) but professionally protects the integrity of the data by retaining the original, rigorous conclusion in a lower-visibility, higher-detail section. This is a savvy way to adhere to the political constraint while maintaining professional integrity.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Hard Pushback",
        text: "Politely but firmly state: 'Partner, the data on this is unequivocal. Changing the conclusion from 'must do' to 'should consider' will compromise the integrity of our analysis and our firm's reputation for rigor. I cannot in good conscience make that change. Could we explore a different political angle to appease the client executive?'",
        expertRationale: "Directly telling a Partner that a change is a 'compromise of the firm's reputation' is a major political risk. The Partner views their job as managing commercial reality, which sometimes requires a small sacrifice of rhetorical certainty. The best move is to find a compromise that protects the rigor without rejecting the political constraint (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quiet Compliance",
        text: "Make the change to 'should consider X' in all places. Do not tell the Partner that you disagree, but tell your Project Manager that you feel the rigor was compromised and ask the PM to be aware of the data’s true certainty in future conversations.",
        expertRationale: "This is too passive. You miss the opportunity to educate the Partner on the risk to the technical audience or to find a solution that protects both the political angle and the rigor. Compliance without a professional check on the integrity of the work is a failure of advisory responsibility.",
        expertRanking: 2
      }
    ],
    overall: "A wins by accommodating the Partner's political need while professionally protecting the integrity of the data for the technical audience. B is too confrontational, and C is too passive.",
    takeAway: "When political needs compromise rigor, implement the necessary political change in the high-visibility area (executive summary) and professionally protect the rigor in the low-visibility area (appendix)."
  },
  {
    id: 41,
    moduleId: 4,
    title: "The Client’s Unjustified Praise",
    prompt: "The client's Head of Sales publicly praises your new dashboard, saying, 'This is a work of genius—it saved us 30 days of manual work!' You know the core structure of the dashboard was a template from a previous project, and the 'genius' part was mostly a rapid customization you did in a day. The praise feels disproportionate and undeserved.",
    responses: [
      {
        id: "A",
        title: "Absorb and Re-Anchor Value",
        text: "Smile and graciously accept the praise: 'I appreciate that, Head of Sales! We're glad it’s delivering immediate value. The most important thing is that now that we've unlocked the 30 days, we can focus our time on X and Y (the next, bigger, and more complex problems).'",
        expertRationale: "This is the most professional response. It accepts the 'political gift' of the high praise without arguing or correcting the client's perception of effort. It immediately uses the praise's momentum to pivot the conversation to the next, higher-value project, showing a focus on strategic progress rather than personal ego or the internal cost model.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Technical Correction",
        text: "Say, 'Thank you! Just to be transparent, the core structure is a firm template we've used before. The real value was our ability to customize it in a day. That speed, not the raw design, is where the genius lies.'",
        expertRationale: "Correcting the client's perception of effort is a political failure. The client doesn't care about your internal processes or templates; they care about the result. Correcting them risks making the client feel lectured or un-insightful. The best move is to accept the win and pivot to the future (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Team Credit",
        text: "Say, 'Thank you very much. I need to give credit to our firm's broader team and our template library—that foundational work is what allowed us to deliver the customization so quickly. The real credit goes to the whole firm for making this possible.'",
        expertRationale: "Giving credit to the 'firm's template library' is better than correcting the client (Option B), but it's still a deflection. The best time to be humble is when a peer or superior is around. When a client gives you a win, accept it and use the momentum to drive the next strategic conversation (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A wins by graciously accepting the praise and immediately pivoting the high-energy conversation to the next strategic step. B is a political failure, and C is too self-effacing to drive the conversation forward.",
    takeAway: "When given disproportionate praise, accept the political gift, do not correct the client's perception of effort, and immediately pivot the conversation to the next, higher-value strategic step."
  },
  {
    id: 42,
    moduleId: 4,
    title: "The Analyst’s Hostile Tone",
    prompt: "A client analyst consistently replies to your data requests with a hostile, passive-aggressive tone, saying things like, 'I'll get to this after I fix the actual problems, not your consultant fantasies.' You feel the analyst is attempting to intimidate you and you are starting to dread hitting 'send' on any data request.",
    responses: [
      {
        id: "A",
        title: "Go to the Source and Structure",
        text: "Do not reply to the hostile email. Immediately set up a 1:1 meeting with the analyst. Say: 'Analyst, I want to ensure I'm making high-value requests. Can we agree on a standard 3-field data request form (Data Set, Business Question, Required Date) and a 48-hour SLA? This structure will ensure I am not wasting your time and that you can prioritize effectively.'",
        expertRationale: "This is the best, professional response. It completely ignores the emotional, hostile tone and immediately pivots to a process solution. By asking the analyst to help *design* a better, less-wasting process, you engage them constructively and neutralize their reason for hostility. It professionalizes the relationship.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Confrontation",
        text: "Reply to the analyst (CC'ing your Project Manager): 'Analyst, your tone is unprofessional and unproductive. My data requests are critical to the project's success, and I need a professional response. If you have an issue with the value of the request, please flag it to my Manager immediately.'",
        expertRationale: "Confronting the analyst and CC'ing the Manager is an immediate escalation that is too risky. The best move is to try to professionalize the relationship (Option A) before escalating the fight to the Manager, which makes you look less self-sufficient.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Emotional Escalation",
        text: "Forward the email to your Project Manager: 'I'm feeling bullied by this analyst, and I can't work productively under this hostility. I need you to step in and either force a change in the tone or have me get the data from a different source.'",
        expertRationale: "While a valid concern, this is too emotional. The best consultants can absorb a certain level of client friction and try to find a professional way out. Escalating the problem as a 'bullying' issue is a major step that should be avoided until you have first attempted a constructive, process-oriented fix (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional: it ignores the emotional tone and immediately pivots to a constructive, process-based solution that professionalizes the relationship. B is too confrontational, and C is too emotional.",
    takeAway: "When faced with a hostile client, ignore the emotional tone and immediately pivot to a low-friction process solution that professionalizes the relationship."
  },
  {
    id: 43,
    moduleId: 4,
    title: "The Manager’s Public Correction",
    prompt: "You are presenting the implementation risk log. You state that Risk X is 'High.' Your Manager, in front of the client, interrupts: 'X, that's incorrect. I want that documented as a 'Medium' risk because the client is managing it closely.' The Manager is prioritizing optics over the technical risk reality, and the client sees the obvious disagreement.",
    responses: [
      {
        id: "A",
        title: "Absorb, Align, and Re-frame",
        text: "Acknowledge the PM: 'Understood, PM. We'll mark it as 'Medium' to reflect the close client management. Client, this is an excellent example of how we use the log: even with close management, we’ll track it to ensure it stays in the 'Medium' band. We’ll keep the mitigation steps at 'High' effort to reflect the potential impact.'",
        expertRationale: "This is the ideal response. It accepts the Manager's political correction immediately (team unity), re-frames the reason for the change to the client (close management), and subtly protects the rigor by keeping the *mitigation effort* at the 'High' level. This shows you are aligned but thinking three steps ahead about the actual work required.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Technical Defense",
        text: "Say, 'PM, with respect, the firm's definition of 'High' risk is based on Impact A and Likelihood B, both of which are met here. We should keep the rigor. Can we discuss the optics privately, or should we ask the client to weigh in on the true likelihood?'",
        expertRationale: "Challenging the Manager publicly on a matter of political optics is a major error. The Manager is trying to preserve the client's confidence in their ability to manage the risk. The priority is team unity and client confidence, not the technical definition of 'High' vs. 'Medium.'",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Quiet Compliance and Documentation",
        text: "Change the risk to 'Medium' on the slide immediately. Say, 'Understood, PM.' Do not explain the change to the client. Immediately after the meeting, email the PM: 'Just confirming that the log is changed to 'Medium' for optics, but I've kept a private note of the original 'High' rating for team context.'",
        expertRationale: "This is acceptable, but it misses the opportunity to use the moment to manage the client's perception (Option A). The best consultants use a live correction to demonstrate how the team works together to manage complex issues, rather than trying to hide the conflict.",
        expertRanking: 2
      }
    ],
    overall: "A wins by accepting the political correction while protecting the integrity of the risk assessment for the client via the 'High effort' framing. B is too focused on technical rigor, and C misses the chance to manage client perception.",
    takeAway: "When a superior forces a political change on a rating, absorb the correction immediately, and professionally protect the underlying truth by framing the mitigation effort correctly."
  },
  {
    id: 44,
    moduleId: 4,
    title: "The Quiet Client Backstab",
    prompt: "A client Project Lead, who has always been friendly to you, sends a private, anonymous feedback form to your Manager, criticizing your 'lack of detail in the footnotes.' You find out from your Manager that the feedback was from the Project Lead. You feel personally betrayed and wonder how to address this two-faced behavior.",
    responses: [
      {
        id: "A",
        title: "Address the Content, Not the Source",
        text: "Focus entirely on the content of the critique: 'Thanks for forwarding that. They’re right—my footnote detail was low on the last deck. I've updated my internal checklist to fix this immediately. I'll resend a corrected version and ensure all future decks have an additional level of detail in the footnotes to satisfy that rigor.'",
        expertRationale: "This is the most professional response. It entirely ignores the betrayal (the source of the feedback) and focuses only on the actionable content (the footnotes). This denies the Project Lead the political win of creating drama and shows your Manager that you prioritize fixing the flaw over engaging in the political fallout of the source.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct, Friendly Challenge",
        text: "Do not tell your Manager you know the source. Schedule a private, friendly 1:1 with the Project Lead: 'I received feedback about the footnote rigor, which I'm fixing. I was hoping you could tell me more about what rigor you want to see—I value your candor and want to ensure I’m meeting your specific needs.'",
        expertRationale: "This is a high-risk move. Directly engaging the Project Lead about the feedback when they thought it was anonymous is a political trap. It forces them to lie or reveal their discomfort. The best move is to fix the problem quietly (Option A) and wait for the Project Lead to come to you.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Manager’s Intervention",
        text: "Tell your Manager, 'I know that feedback was from the Project Lead. I’m fine with the critique, but I need you to address the two-faced nature of that. Please let the Project Lead know that their feedback should come directly to me, not anonymously, so we can maintain a high-trust relationship.'",
        expertRationale: "While correct, asking your Manager to confront the client about their feedback channel is a major political escalation. The best consultants can handle the friction of client dynamics themselves. The priority is to fix the work (Option A), not to teach the client how to give feedback.",
        expertRanking: 2
      }
    ],
    overall: "A wins by ignoring the political betrayal and focusing entirely on the technical fix, showing high professionalism. B risks exposing the source, and C delegates the necessary client management to the Manager.",
    takeAway: "When betrayed by a client's anonymous feedback, entirely ignore the source of the critique and focus only on the immediate, professional fix of the content."
  },
  {
    id: 45,
    moduleId: 4,
    title: "The Public 'Expert' Challenge",
    prompt: "You are presenting a new pricing model based on a sophisticated game theory approach. A client executive who holds an advanced math degree challenges the core function of the model, saying, 'Your model’s assumptions on competitor reaction are flawed. My academic experience tells me the entire thing collapses under a Nash Equilibrium.' The audience is silenced by the technical term.",
    responses: [
      {
        id: "A",
        title: "Validate and Contain",
        text: "Acknowledge the technical depth: 'That's a very informed challenge. We can pivot to the Nash Equilibrium now, but it's a 15-minute, highly technical deep-dive. Client team, to save your time, should we contain this to a 1:1 with the executive immediately after the meeting, or do you want to break down the technical implications now?'",
        expertRationale: "This is the highest advisory move. It validates the technical challenge, shows respect for the executive's knowledge, and, crucially, asks the rest of the client audience to own the decision on whether to spend time on the deep technical dive. This protects the meeting flow and prevents a technical car crash.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Technical Defense",
        text: "Look at the executive and say, 'I hear you on the Nash Equilibrium. We actually built in a beta factor that accounts for that level of irrational competitor action, which prevents the collapse. Let me show you the specific sensitivity analysis slide that proves the model's robustness against that scenario.'",
        expertRationale: "While factually correct, this forces a technical debate in front of a non-technical audience, which can make the analysis look overly complex and the consultant defensive. The best move is to show you're in control of the technical response but to contain the debate privately (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Defer to the Appendix",
        text: "Smile and say, 'That’s a level of rigor we love. We have the full, three-page technical appendix on the Game Theory assumptions. Let’s stick to the executive summary for now, and I’ll ensure you get a full walkthrough of the technical appendix immediately after the meeting.'",
        expertRationale: "Deferring to the appendix is a classic 'out,' but in this case, it avoids demonstrating that you can handle the specific, sophisticated critique. The best move is to use the moment to show you are in command of the technical rebuttal but to contain the debate to a private setting.",
        expertRanking: 2
      }
    ],
    overall: "A wins by validating the technical critique and using the audience to contain the technical debate to a private, time-boxed session. B risks a public debate, and C avoids the necessary demonstration of technical command.",
    takeAway: "When a technical executive uses a complex term to challenge the work, validate the expertise and contain the technical debate to a private session that respects the audience’s time."
  },
  {
    id: 46,
    moduleId: 4,
    title: "The Project Manager’s Unfair Critique",
    prompt: "Your Project Manager critiques your client-facing tone as 'too subservient' and 'lacking confidence.' You know this is because you are deliberately using a highly collaborative, polite tone to manage a notoriously difficult client. The PM is using a one-size-fits-all definition of 'confidence' that doesn't fit the current political reality.",
    responses: [
      {
        id: "A",
        title: "Reframe Confidence as Control",
        text: "Acknowledge the critique: 'I appreciate the note on tone. For this specific client, I’m using a collaborative tone as a control mechanism. Can we agree that 'confidence' in this context means 'maintaining control of the room and the narrative'? If so, I’ll track my talk time and my ability to pivot their questions to ensure I'm controlling the conversation, regardless of my politeness.'",
        expertRationale: "This is the best advisory move. It accepts the critique but immediately re-defines the vague term ('confidence') into a measurable, objective outcome ('maintaining control of the room'). This shows you are thinking strategically about the client interaction and that your polite tone is a deliberate, high-EQ political tool, not a weakness.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Defense",
        text: "Politely push back: 'I hear you, but this client is notoriously difficult. A 'subservient' tone is a deliberate political choice to de-escalate their hostility and secure the data. If I use an 'aggressive' tone, this project will fail. Can we agree that client success is more important than an arbitrary definition of 'confidence?'",
        expertRationale: "While factually correct, framing the critique as 'arbitrary' is too confrontational. It risks putting the PM on the defensive. The best move is to agree to the critique's goal (confidence) but re-define the way it is expressed (Option A) to show that your approach is a deliberate strategy, not a personal flaw.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Public Demonstration",
        text: "Say, 'Understood, I'll work on it.' In the next client meeting, use a slightly more aggressive, direct tone when presenting a recommendation to show the Manager you can 'be confident.' Immediately after the meeting, ask the PM for feedback on the change in tone.",
        expertRationale: "This is a high-risk experiment. Changing your tone for a notoriously difficult client based on an arbitrary metric risks damaging the client relationship for a short-term internal win. The professional move is to justify your current, successful strategy (Option A), not to perform a high-risk experiment.",
        expertRanking: 2
      }
    ],
    overall: "A wins by accepting the critique's goal (confidence) but professionally re-defining it as a measurable, client-specific behavior (control of the narrative). B is too confrontational, and C is a high-risk experiment.",
    takeAway: "When critiqued on a vague soft skill (e.g., 'confidence'), accept the goal and immediately re-define it into a specific, measurable, client-centric behavior (e.g., 'control of the narrative')."
  },
  {
    id: 47,
    moduleId: 4,
    title: "The Unhelpful Critique",
    prompt: "A Partner scribbles a single note on your executive summary: 'Boring. Needs more punch.' They walk off, leaving you with no other context. The summary is factually correct and logically sound, but you are left with a subjective, unhelpful, and vague critique on a crucial, final document.",
    responses: [
      {
        id: "A",
        title: "Translate to Technique",
        text: "Do not chase the Partner. Re-read the summary and identify the single most important action. Re-draft the summary using a 'newspaper headline' technique: lead with the single, shocking 'so what' and the three most important, quantifiable numbers. Show the change to the PM: 'I’ve added 'punch' by increasing the density of measurable impact and creating a shock headline. Does this work?'",
        expertRationale: "This is the best response. It accepts the subjective critique ('boring') and immediately converts it into a specific, measurable writing technique (shock headline, quantifiable impact). It shows you can translate vague C-suite language into actionable output, which is the core skill the Partner is testing.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Query",
        text: "Email the Partner: 'Partner, thanks for the note. To ensure I hit the mark, can you give me one example of a 'punchy' executive summary you’ve seen recently, or the one thing you want the CEO to remember? I need a concrete example to guide the re-write.'",
        expertRationale: "While seeking clarity is good, asking a Partner for an example of a past 'punchy' summary is a high-friction request. They are busy and expect you to be able to translate their vague C-suite language into action yourself. The better move is to demonstrate the fix (Option A) and ask the PM for a quick sign-off.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Analytical Defense",
        text: "Tell your PM, 'The summary is factually correct and addresses the client's problem. I think the Partner is just having a bad day. I will re-word one sentence to make it sound more urgent, but I'm not going to do a full re-write based on one vague word.'",
        expertRationale: "Dismissing the Partner's note as 'just having a bad day' is a failure of political judgment. The Partner is signaling the quality bar for C-suite communication is not being met. Ignoring the critique and only making a cosmetic change will likely result in the same critique later.",
        expertRanking: 2
      }
    ],
    overall: "A wins by demonstrating the ability to translate vague C-suite language ('punchy') into a specific, measurable writing technique (impact density, shock headline). B is too high-friction, and C dismisses the critique.",
    takeAway: "When given vague C-suite critique (e.g., 'boring'), translate the abstract feedback into a specific, professional writing or design technique and demonstrate the fix."
  },
  {
    id: 48,
    moduleId: 4,
    title: "The Client’s Denial of Data",
    prompt: "You present a slide showing a clear cost overrun, using data directly pulled from the client's own internal finance system. The client's Head of Finance says, 'That data is wrong. I don't know where you got that, but my system shows zero overruns. I'm not moving forward until you fix that slide.' You know your data extraction method is sound.",
    responses: [
      {
        id: "A",
        title: "The Validation Loop",
        text: "Acknowledge the seriousness: 'Head of Finance, that discrepancy is critical. I can show you the exact query we ran on your system (X) to pull the data. Can we send the query code to your lead analyst (Y) immediately and ask them to run it on their side now? We can put a 'to-do' on the slide to confirm the data with Analyst Y before the final review.'",
        expertRationale: "This is the best advisory move. It avoids arguing about the data and instead proposes a clear, objective validation loop that uses the client's own analyst and system as the neutral arbiter. This is a low-friction way to prove the data is correct without making the Head of Finance feel personally embarrassed or undermined.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct Proof",
        text: "Say, 'Head of Finance, with respect, the data is from your internal finance system, table Z, pulled 48 hours ago. Let me show you the screenshot of the raw system output that proves the overrun.' Scroll to the appendix and display the technical proof.",
        expertRationale: "Displaying the raw proof in the meeting is factually correct but politically damaging. It forces the Head of Finance to publicly admit they were wrong or that they don't know their own data. The best move is to use a collaborative, private validation loop (Option A) to manage the political fallout.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Manager’s Arbitration",
        text: "Say, 'Head of Finance, the data discrepancy is important. Manager, can you coordinate with your counterpart (the CFO) to get a final, objective sign-off on the correct cost-overrun figure by tomorrow morning? We will update the slide then.'",
        expertRationale: "Escalating the data fight to the CFO-level is a high-risk, high-friction move that should be avoided. A low-to-mid-level consultant should be able to resolve a data conflict by proposing a self-contained, objective validation process (Option A) using the client's own team.",
        expertRanking: 2
      }
    ],
    overall: "A wins by proposing a low-friction, objective validation loop that uses the client's own team as the neutral arbiter. B is publicly embarrassing, and C is an unnecessary escalation.",
    takeAway: "When a client denies their own data, propose a low-friction, objective validation loop using their own team/system as the neutral arbiter."
  },
  {
    id: 49,
    moduleId: 4,
    title: "The Project Manager’s Mood Swings",
    prompt: "Your Project Manager’s feedback is highly inconsistent: one day your work is 'fantastic and insightful,' the next it's 'rushed and misses the big picture.' The inconsistency is not based on the quality of the work but on the PM's volatile personal mood, making it impossible to know how to improve your performance.",
    responses: [
      {
        id: "A",
        title: "Isolate the Objective",
        text: "Acknowledge both extremes: 'I appreciate the enthusiasm of your 'fantastic' reviews and the rigor of the 'rushed' critiques.' Propose a structural solution: 'To ensure a consistent standard, can we agree on the single most important output for the next two weeks? I’ll build a mini-scorecard based on that one objective, and we can use that for all feedback, regardless of the mood.'",
        expertRationale: "This is the most professional response. It validates both sides of the PM's mood swings while immediately pivoting to an objective, measurable, and collaborative solution (the mini-scorecard). This forces a consistent, quality-based feedback channel that filters out the PM's personal volatility.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Direct, Factual Challenge",
        text: "Address the inconsistency directly: 'I’m confused. My work on X was 'fantastic' two days ago, and now it's 'rushed.' This inconsistency makes your feedback non-actionable. Could you please separate your personal stress from the professional feedback and provide a clear, stable metric for me to focus on?'",
        expertRationale: "This is too confrontational. Directly attributing the problem to the PM's 'personal stress' is highly risky and will likely put the PM on the defensive, making the conversation unproductive. The best approach is to find a collaborative, process-based solution (Option A) that filters out the mood swings.",
        expertRanking: 3
      },
      {
        id: "C",
        title: "Seek a 'Second Opinion' Manager",
        text: "Do not challenge the PM. Start CC'ing a trusted, non-project Manager on your key deliverables, asking for a quick 'sanity check on the narrative flow.' Use this second, external opinion as your true measure of success, ignoring the inconsistent feedback from your direct PM.",
        expertRationale: "This is a form of political evasion. It seeks a safer, external feedback channel, but it fails to address the core problem: the need for a functioning, reliable feedback loop with the person who is ultimately responsible for your performance review (the PM). The best move is to fix the existing loop (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A wins by acknowledging the inconsistency and proposing a collaborative, objective tool (the mini-scorecard) to filter out the PM's mood swings. B is too confrontational, and C avoids fixing the core relationship.",
    takeAway: "When feedback is volatile, validate both extremes of the mood swings and immediately propose a collaborative, objective tool (e.g., a scorecard) to filter out the personal inconsistency."
  },
  {
    id: 50,
    moduleId: 4,
    title: "The Partner’s Casual Dismissal",
    prompt: "You present a new, complex methodology you developed for optimizing the client’s supply chain. A senior Partner, who is only casually listening, says, 'That's fine, but frankly, it’s not innovative. That feels like a 2018 playbook.' You feel your specialized effort is being casually dismissed as outdated and simple.",
    responses: [
      {
        id: "A",
        title: "The Value-of-Familiarity Pivot",
        text: "Acknowledge the Partner's observation: 'Partner, that's a fair point. The methodology is a tried-and-true 2018 framework, but that’s a strength for this client. By using a familiar framework, we can achieve 90% of the value with 50% of the change management risk, which is the client’s number one priority. We can always upgrade to a 2024 model in Phase 2.'",
        expertRationale: "This is the most professional response. It accepts the critique that the model is 'old' but immediately reframes that 'oldness' as a strategic asset for the client (lower risk, faster adoption). It shows you prioritize client buy-in and success over technical novelty, which is a hallmark of senior-level advisory.",
        expertRanking: 1
      },
      {
        id: "B",
        title: "The Technical Defense",
        text: "Politely push back: 'I hear you, Partner, but the model has three key innovations (A, B, C) that make it superior to the 2018 version. Let me walk you through the new Monte Carlo simulation that proves the value of this approach.'",
        expertRationale: "This forces a technical debate that the Partner may not want to have and risks making you look married to the technical solution over the commercial reality. The best move is to assume the Partner's critique is about 'client adoption' and re-frame the existing solution as the best fit for the client's risk appetite (Option A).",
        expertRanking: 3
      },
      {
        id: "C",
        title: "The Immediate Pledge",
        text: "Acknowledge the critique: 'Partner, you're right. I will immediately research three more cutting-edge 2024 methodologies and send you a comparison note by the end of the day to ensure we are aligned on the current state of the art.'",
        expertRationale: "This is too reactive. The Partner may have been making a casual remark or a test. Pledging to spend an entire day on a new methodology without assessing the client's need or the time cost is an overreaction. The best move is to strategically justify the existing, successful solution (Option A).",
        expertRanking: 2
      }
    ],
    overall: "A is the most professional: it accepts the critique of 'old' but strategically re-frames the familiar methodology as a strength for client adoption and risk management. B is too technical, and C is too reactive.",
    takeAway: "When a solution is casually dismissed as 'outdated,' strategically re-frame the familiar framework as a strength for client buy-in, risk reduction, and faster adoption."
  }
];

export function getScenariosByModuleId(moduleId: number): Scenario[] {
  return scenarios.filter(scenario => scenario.moduleId === moduleId);
}