export const scenarios: Scenario[] = [
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
]