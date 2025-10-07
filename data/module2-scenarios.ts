export const scenarios: Scenario[] = [
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
    TakeAway: "Reclaim credit using a contract 'hedge' as a shield; never sacrifice the client relationship for ego."
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
    TakeAway: "Satisfy client demands through framing (e.g., 'Upside Scenario'), not through factual distortion."
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
    TakeAway: "Lead with the data to define the 'What,' but use politics to manage the 'How' and the 'Who' of implementation."
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
    TakeAway: "When the client sponsor introduces the CEO's 'preference,' all prior work becomes a 'B-Plan'—pivot immediately."
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
        text: "Acknowledge the model's complexity. Give a 30-second, high-level, analogy-based explanation of the simulation's purpose (e.g., 'It's a digital stress-test that shuffles 5,000 possibilities to give us a realistic floor and ceiling'). Then, immediately pivot back to the report's conclusion: 'The key takeaway remains that even in the bottom 10% of outcomes, the strategy is still viable because of the two key levers we identified.'",
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
    TakeAway: "The 'So What' always trumps the 'How'—treat complex models as evidence, not as the primary argument."
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
    TakeAway: "Never criticize a client's recent, visible decision; reframe it as a strategic asset for your proposed solution."
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
    TakeAway: "Manage scope creep by immediately quantifying its cost in time, money, or lost features; never just say 'no'."
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
    TakeAway: "The true advisory move is to embed the necessary hard work inside the client's preferred easy project."
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
    TakeAway: "Bypass emotional data disputes by re-anchoring the decision on the client's non-negotiable strategic objectives."
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
    TakeAway: "When faced with an ethical breach by a superior, use the firm's official risk or legal channels; do not engage in a direct, personal conflict."
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
    TakeAway: "Pro-bono 'Adoption Reviews' convert stalled projects into new, paid 'Change Management' engagements and protect the brand."
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
    TakeAway: "Ethical boundaries are non-negotiable; refuse, document, and let the client know your firm’s reputation is the non-tradeable asset."
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
    TakeAway: "Defend custom work with powerful analogies; frame the use of a template as a high-risk, catastrophic mistake."
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
    TakeAway: "The best advice makes the client’s existing, emotionally charged decision the hero of your new, necessary solution."
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
    TakeAway: "Protect your career by using your firm's legal policy as a non-negotiable shield against restrictive, career-limiting NDAs."
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
    TakeAway: "Group low-impact actions into a single, high-impact 'Tranche' to satisfy executives' need for a big headline number."
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
    TakeAway: "When a technical expert derails a strategic meeting, immediately 'Parking Lot' the detail for a later, private session to control the room."
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
    TakeAway: "Acknowledge the emotional cost, but immediately reframe the difficult decision as a non-negotiable act of fiduciary responsibility."
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
    TakeAway: "The client's 'quick fix' is your best opportunity: use it as the high-stakes pilot for your necessary, long-term solution."
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
    TakeAway: "Accept the client’s political delay, but immediately quantify the 'Cost of Delay' and use it to force an early, irreversible step."
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
    TakeAway: "Frame essential, low-priority work (like Change Management) as a non-negotiable 'Insurance Policy' for the high-cost project."
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
    TakeAway: "Meet impossible deadlines by splitting the deliverable: the 'Headline' report for the deadline, the 'Detail' report for rigor."
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
    TakeAway: "Frame the required political firing as a necessary 'first step' to prove executive commitment to the larger structural change."
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
    TakeAway: "True professional courage means delivering necessary pain, not just pleasant possibilities."
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
    TakeAway: "Frame the necessary, unglamorous fix as the non-negotiable 'fuel' that powers the client's exciting, high-profile project."
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
    TakeAway: "When a client asks for a 'rubber stamp,' reframe your correction as a non-negotiable 'Risk Mitigation' phase."
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
    TakeAway: "Transparency is non-negotiable in conflicts of interest; immediately disclose and establish a procedural 'Firewall Protocol'."
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
    TakeAway: "Convert hostile resistance into co-creation by framing the implementation as a shared effort to find the 'least painful' path."
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
    TakeAway: "If a client needs a scapegoat, frame the scapegoat's failure as a 'symptom' that proves the need for your real, internal solution."
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
    TakeAway: "Frame non-negotiable investment costs as the 'Hurdle Rate' or 'Contingency' required to unlock the strategy's massive return."
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
    TakeAway: "When a client pushes for an impossible timeline, force them to own the quantifiable 'Risk of Failure' it entails."
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
    TakeAway: "Turn a client’s poor political appointment into an upsell opportunity for a necessary 'Co-Leadership' risk-mitigation structure."
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
    TakeAway: "Answer simple questions (e.g., 'Go/No-Go') with a confident, single word, but immediately attach a non-negotiable contingency for its success."
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
    TakeAway: "Refuse to engage in client politics; focus on the systemic flaw (the 'system') and use the solution to force warring executives to collaborate."
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
    TakeAway: "When a client is in denial, frame the necessary, painful action as the only way to avoid an even greater, catastrophic loss."
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
    TakeAway: "Neutralize an undermining executive by leveraging their ego; force them to 'co-sign' the methodology to buy their silence and endorsement."
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
    TakeAway: "Bypass a personal conflict of interest by framing the non-negotiable action as a mandate from a higher, irrefutable authority (e.g., the CFO or the Board)."
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
    TakeAway: "Meet the demand for executive simplicity (e.g., a 10-slide deck) by making a comprehensive 'Implementation Anchor' non-negotiable."
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
    TakeAway: "Bypass an unethical firing request by framing the political rival's removal as a necessary, structural 're-deployment' or 'role change.'"
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
    TakeAway: "Enforce a 'No-Go' conclusion by offering a documented 'Management Override Scenario' that shifts the liability to the client CEO."
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
    TakeAway: "Protect your objectivity by using a 'firm policy' to politely refuse personal favors, re-anchoring the relationship on business."
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
    TakeAway: "Agree to a political structure (e.g., a committee) for 'oversight' but insist on a non-negotiable 'Single Executive Sponsor' for final accountability."
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
    TakeAway: "Sell 'unsexy' foundational work by framing it as the non-negotiable 'Insurance Policy' against the catastrophic failure of the client’s 'sexy' headline project."
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
    TakeAway: "When faced with cultural resistance to a global standard, co-create a localized 'pilot' to set the standard for acceptable future customization."
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
    TakeAway: "When a target is impossible, separate the client's 'Ambition' from the firm's final, non-negotiable 'Professional Forecast.'"
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
    TakeAway: "Sell internal rigor to creative partners by framing the process as the 'Insurance Policy' that protects their 'freedom' to focus on high-value work."
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
    TakeAway: "When a client requests a 'white-label' report, agree to remove the main logo but embed a non-negotiable, subtle legal boilerplate on every page."
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
    TakeAway: "Refuse to participate in a client's provable lie; instead, provide a factual, neutral narrative (e.g., 'Strategic Separation') for public use."
  }
];