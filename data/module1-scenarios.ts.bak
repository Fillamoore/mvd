export interface Response {
  id: "A" | "B" | "C";
  title: string;
  text: string;
  expertRationale: string;
  expertRanking: 1 | 2 | 3;
}

export interface Scenario {
  id: number;
  moduleId: 1;
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
];
