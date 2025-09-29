export type Resource = {
  title: string;
  url: string;
};

export type ScenarioResponse = {
  id: string;
  text: string;
  expertRationale: string;
  expertRating: number;
  resources?: Resource[];
};

export type Scenario = {
  id: number;
  moduleId: number;
  prompt: string;
  responses: ScenarioResponse[];
  overall?: string;
  takeAway?: string;
};

export const scenarios: Scenario[] = [
  // MODULE 2: Professional Curiosity
  {
    id: 1, // Scenario 1 of Module 2
    moduleId: 2,
    prompt: "During a major cost-cutting project for a retail client, you notice their in-house legal team is consistently taking three times longer than benchmark to review procurement contracts. This is outside your current scope focused on Supply Chain, but it clearly affects project speed and potential savings. The Project Director tells everyone to 'stay in their lane.'",
    responses: [
      {
        id: "A",
        text: "Document the legal bottleneck and quantify its impact on the Supply Chain savings target. Privately raise this quantified finding as an observation with your Project Manager, framed as a risk to the current scope's success.",
        expertRationale: "This is a shrewd, high-curiosity move. You acknowledge the political boundary (staying in your lane) but use quantifiable data to justify raising the issue to your PM. Framing it as a 'risk to the current scope' rather than a 'suggestion for a new project' is the professional way to elevate an out-of-scope finding.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Briefly mention the legal review duration to the client's Chief Procurement Officer during an informal coffee break, suggesting they might want to look into it once your current project closes.",
        expertRationale: "This is unprofessional and politically risky. Bypassing your own PM and the Director to raise a concern directly with a senior client is a violation of the 'no surprises' unwritten rule and could undermine team cohesion. It is too casual for a high-stakes finding.",
        expertRating: 1
      },
      {
        id: "C",
        text: "Ignore the observation entirely, focusing only on the supply chain tasks defined in the Statement of Work. It is not your job to fix the legal department, and you should respect the Project Director's instruction.",
        expertRationale: "While respecting the Project Director is important, ignoring a major, quantifiable risk to the client's overall outcome shows a lack of professional curiosity and value generation. A consultant's job is not just to execute tasks but to spot strategic opportunities and risks. Too cautious.",
        expertRating: 3
      }
    ],
    overall: "Option A demonstrates professional curiosity by quantifying the issue and strategically raising it through the correct internal channel (the PM) as a risk to the current scope, minimizing political exposure. Ignoring the finding (C) is a missed opportunity, and going directly to the client (B) is politically unwise.",
    takeAway: "Quantify your curious observations and raise them internally as risks, not just potential new work."
  },
  {
    id: 2, // Scenario 2 of Module 2
    moduleId: 2,
    prompt: "You are analyzing customer churn data for a major Telco. Your analysis suggests that 40 percent of the churn is related to an old billing system, but the client team insists that the main driver is aggressive competitor pricing. They refuse to grant you access to the billing system's incident logs, claiming they are 'too sensitive' and 'off-limits' for your engagement.",
    responses: [
      {
        id: "A",
        text: "Accept the constraint. Adjust your analysis to exclude the billing system and instead focus on gathering more market data to support the client's preferred 'competitor pricing' hypothesis, as this is the path of least resistance.",
        expertRationale: "This prioritizes peace over truth. While it keeps the client relationship smooth, it results in a flawed analysis that provides little real value. It is the opposite of professional curiosity: abandoning a strong hypothesis based on resistance.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Escalate the data access issue to your Project Leader. Frame the lack of incident log access as a critical methodological dependency that prevents you from validating or disproving the strongest statistical finding you have so far.",
        expertRationale: "This is the correct, professional way to handle a data brick wall. You use the strength of your existing data to justify the request, and you escalate it through the internal chain, protecting the relationship with the client team member by involving a senior stakeholder.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Search internal company document repositories and shared client drives for any unlabelled or public-facing documents (like annual reports or press releases) that discuss the billing system's historical performance or known issues.",
        expertRationale: "This is proactive curiosity, but it risks violating data governance rules and bypassing the official request process. While you might find information, this behavior can be seen as invasive and risks burning trust if the client team finds out you went around them.",
        expertRating: 3
      }
    ],
    overall: "The best approach (B) is to formally and professionally escalate the data dependency, using the statistical evidence to back the need. Option A produces a false answer, and Option C risks political fallout by seeking information secretively.",
    takeAway: "Use strong data findings to justify the need for more sensitive data access when a client resists."
  },
  {
    id: 3, // Scenario 3 of Module 2 (Close Call)
    moduleId: 2,
    prompt: "The client's Head of Operations, Ms. Chen, is the main contact for your post-merger integration project. She is highly detail-oriented and answers every question meticulously. However, you've noticed she is deliberately excluding Mr. Davies, the Head of IT, from critical data-sharing meetings, even though IT systems integration is 70 percent of the project's risk profile. You suspect a political conflict.",
    responses: [
      {
        id: "A",
        text: "Contact Mr. Davies privately under the guise of 'initial data gathering' to get his side of the IT integration status and invite him to the next key data-sharing meeting without explicitly checking with Ms. Chen.",
        expertRationale: "This is the most direct, but also most politically dangerous, move. You risk making Ms. Chen feel undermined, potentially jeopardizing the entire relationship, and confirm the existence of a 'shadow' channel. Too aggressive for a junior consultant.",
        expertRating: 2
      },
      {
        id: "B",
        text: "Raise the issue of IT representation during your weekly internal team meeting with your Engagement Partner. Suggest the Partner gently raise the issue with the client Steering Committee, citing the need for 'holistic risk coverage' and not mentioning Ms. Chen directly.",
        expertRationale: "This correctly uses the formal political process. By elevating the risk to the Partner and suggesting a SteerCo solution, you maintain your professional distance and allow senior leadership to address the political issue neutrally based on risk. This is the unwritten rule: let the most senior person address client politics.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Start framing your questions to Ms. Chen specifically around IT integration. For example, ask 'What is Mr. Davies' perspective on this API integration timeline?' to gently force her to acknowledge his importance or include him in the conversation.",
        expertRationale: "This shows good soft-curiosity and attempts to use indirect influence. It is a very safe option, but it may fail if Ms. Chen is determined to isolate Mr. Davies. It delays solving the core problem: the IT head's lack of involvement. This is a close call with B.",
        expertRating: 4
      }
    ],
    overall: "The best move (B) is to elevate the political risk formally, protecting the junior consultant's relationship with the client while ensuring the project's success. Option C (rated 4) is a professional, low-risk tactic, but Option B directly addresses the structural problem using the right channel.",
    takeAway: "When client politics impact project risk, elevate the issue to your Partner for an official resolution."
  },
  {
    id: 4, // Scenario 4 of Module 2
    moduleId: 2,
    prompt: "You are asked to analyze the feasibility of the client's new market entry strategy into South America. The internal presentation slides from the client's strategy team are extremely polished but lack detailed figures, relying heavily on anecdotal evidence about competitor failure. They state, 'Our internal data is proprietary, so we cannot share it yet.'",
    responses: [
      {
        id: "A",
        text: "Use external, publicly available industry reports and economic data (GDP growth, consumer spending, import tariffs) to create your own initial model for market sizing. Present this model to the client and ask them to 'validate the assumptions' using their proprietary data.",
        expertRationale: "This is the embodiment of professional curiosity and savvy. Instead of passively waiting for data, you create a proxy model that forces the client to either share their data to correct your work or concede that your external estimate is reasonable. This is a subtle power move that uses curiosity to unlock information.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Inform your client contact that your analysis cannot proceed without their proprietary data and that this will result in a delay to the project timeline, placing the political burden back on them to justify the delay.",
        expertRationale: "This is a defensive but too aggressive response. While technically correct, it shifts the blame and creates an unnecessarily adversarial relationship. A consultant should first attempt to find a workaround before issuing a project delay notice. It shows a lack of initiative.",
        expertRating: 2
      },
      {
        id: "C",
        text: "Assume the client's internal data supports their narrative and proceed with the analysis using the anecdotal evidence provided. The client is ultimately responsible for the input data's quality and you are only responsible for the logical structure of the advice.",
        expertRationale: "This is dangerously passive. It's the equivalent of 'garbage in, garbage out.' Professional curiosity demands you challenge the underlying assumptions, especially when the data source is intentionally opaque. This is a failure to exercise due diligence.",
        expertRating: 1
      }
    ],
    overall: "Option A is the most professional and resourceful response, leveraging external data to build a provisional model that serves as a tool to unlock the client's protected information. Waiting or blaming the client (B and C) demonstrates insufficient initiative.",
    takeAway: "When internal data is withheld, create a proxy model using external data to force the client's hand."
  },
  {
    id: 5, // Scenario 5 of Module 2 (Close Call)
    moduleId: 2,
    prompt: "You are shadowing a team meeting to understand the company culture for a digital transformation project. The discussion revolves around a technical delivery issue. The tone is highly formal, and everyone avoids mentioning the name of the Project Lead, Mr. Smith, even though the issue is clearly his responsibility. You suspect the team is afraid of him.",
    responses: [
      {
        id: "A",
        text: "Later that day, interview a mid-level team member one-on-one. Start by asking open-ended questions about 'team communication flow' and 'project friction points' to allow them to organically share the political dynamics without direct questioning about Mr. Smith.",
        expertRationale: "This is a shrewd way to exercise curiosity in a sensitive political climate. By using open-ended, non-judgmental language ('friction points'), you create psychological safety for the interviewee to explain the 'unwritten rule' of avoiding Mr. Smith, which is vital context for your transformation project. Close call with C.",
        expertRating: 5
      },
      {
        id: "B",
        text: "During the next team meeting, directly ask, 'Since this is a delivery issue, what is Mr. Smith's current view on the suggested remediation steps?' to break the tension and force transparency.",
        expertRationale: "This is a highly disruptive move. You may be seen as politically naive or even confrontational. Breaking a client's internal 'unwritten rule' in a public forum creates immediate discomfort and may cause the team to shut down entirely for future interviews. It's too high-risk.",
        expertRating: 1
      },
      {
        id: "C",
        text: "Observe three more team meetings. If the pattern of avoidance persists, note the observation as a 'cultural obstacle' to your PM, recommending a change management specialist be added to the project without detailing the specific political conflict.",
        expertRationale: "This is a very professional and safe option (rated 4) that prioritizes observation over immediate action. However, waiting three more meetings might delay the necessary intervention. Option A is marginally better because it is a low-risk, immediate action to gather necessary context privately.",
        expertRating: 4
      }
    ],
    overall: "Gathering political context privately (A) is crucial for a change management project. While C is safe, the immediate, targeted private interview (A) provides the necessary context faster without causing public offense, which is key to advisory work.",
    takeAway: "In politically charged environments, use one-on-one interviews and neutral framing to uncover unwritten rules."
  },
  {
    id: 6, // Scenario 6 of Module 2 (Close Call)
    moduleId: 2,
    prompt: "A client requests a 10 percent reduction in headcount for their finance department. Your data confirms this is feasible, but your deep-dive analysis reveals that a 20 percent reduction is actually possible if they also implement a new automation tool that they currently do not plan to buy. The client is explicit: 'Only tell us how to cut 10 percent based on current tools.'",
    responses: [
      {
        id: "A",
        text: "Deliver the 10 percent reduction plan as requested. Include a single, brief annex slide at the end of the deck, labeled 'Further Opportunity,' which outlines the 20 percent potential and the automation tool requirement without detailed explanation.",
        expertRationale: "This is an effective, curious compromise. You fulfill the explicit request (10 percent) but still introduce the larger, hidden opportunity (20 percent) via a low-profile mechanism. This respects the client's mandate while showing true value and foresight. This is a close call with B.",
        expertRating: 4
      },
      {
        id: "B",
        text: "Present the 10 percent plan first. Then, in the discussion, use the 'Two Birds, One Stone' analogy to introduce the 20 percent plan and the automation tool. State that it is your professional duty to point out the full potential savings they are leaving on the table.",
        expertRationale: "This is strong (rated 5) because it forces the conversation on value. By first meeting the explicit 10 percent need, and then immediately pivoting to the 'duty to inform' about the 20 percent, you demonstrate courage and professional conviction. A direct conversation on value is often better than a hidden slide.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Adjust your 10 percent reduction plan to be extremely conservative and politically difficult to implement, hoping the client will then ask 'Is there another way?' which opens the door to the 20 percent plan.",
        expertRationale: "This is manipulative and risks damaging your credibility. Delivering a deliberately poor or difficult solution to force a better idea is passive-aggressive and unprofessional. You are paid to deliver the best answer, not to play games.",
        expertRating: 1
      }
    ],
    overall: "Option B is the best as it is professionally courageous, using the completed 10 percent analysis to justify the pivot to the 20 percent opportunity, maximizing client value. Option A (rated 4) is safer but less impactful than a direct, value-driven discussion.",
    takeAway: "Always share the full potential value you find, even if it requires a courageous conversation with the client."
  },
  {
    id: 7, // Scenario 7 of Module 2 (Close Call)
    moduleId: 2,
    prompt: "A manufacturing client's COO asks you to audit efficiency on Line 3. Your preliminary analysis of Line 3 data shows it is already highly optimized. However, Line 7's data, which you accessed through standard internal data links, shows massive downtime that the COO did not mention and is likely unaware of. Line 7 is not in scope.",
    responses: [
      {
        id: "A",
        text: "Deliver the report on Line 3 as requested, but also prepare a separate, concise one-page 'Urgent Business Risk' memo focused solely on Line 7's downtime and its quantified impact. Present both to the COO simultaneously.",
        expertRationale: "This prioritizes the biggest value and risk, using the current meeting as leverage for a critical intervention. You fulfill the SOW while responsibly flagging the critical finding, using data to justify going outside of scope.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Complete the Line 3 report only, and schedule a separate, formal meeting with your Engagement Partner to discuss the Line 7 finding as a potential next project, strictly following the 'stay in scope' rule.",
        expertRationale: "This respects the scope boundary and internal hierarchy (rated 4), but it delays intervention on what appears to be an urgent, massive problem that the COO is unaware of. Immediate, data-driven action is often preferred in high-risk scenarios.",
        expertRating: 4
      },
      {
        id: "C",
        text: "Simply delete the Line 7 data and focus only on Line 3, as any out-of-scope work could complicate the current Statement of Work and invoicing, which is a key priority for the firm.",
        expertRationale: "This shows a complete lack of professional curiosity and a failure of fiduciary duty to the client. A consultant must always prioritize client value and the mitigation of significant, identified risks over administrative ease.",
        expertRating: 2
      }
    ],
    overall: "Option A is the best as it leverages the current momentum and data to immediately address the largest risk, delivering unexpected value while fulfilling the scope. Option B is too slow for an 'urgent' risk.",
    takeAway: "When curiosity uncovers an urgent, quantifiable risk, present it immediately and concisely."
  },
  {
    id: 8, // Scenario 8 of Module 2
    moduleId: 2,
    prompt: "You notice three different client team members using three different Excel formulas to calculate 'Customer Lifetime Value' (CLV). They are all mid-level VPs and each defends their method passionately, resulting in drastically different CLV figures that invalidate the core premise of your current marketing spend optimization project. The Project Director asks you to use 'the average.'",
    responses: [
      {
        id: "A",
        text: "Refuse to use the average. Immediately halt the marketing spend analysis and schedule a 'data governance workshop' with the three VPs and the Director, focusing on standardizing the CLV calculation as a critical dependency for the entire project's success.",
        expertRationale: "This demonstrates high professional courage and curiosity. It addresses the root cause—data integrity—which is the only professional choice. Using the average on invalid inputs produces an invalid output, making the entire project useless.",
        expertRating: 5
      },
      {
        id: "B",
        text: "Use the average as requested to keep the project moving, but add a major disclaimer to every slide explaining the lack of data standardization and the resulting low confidence interval in the final recommendation.",
        expertRationale: "This is too passive. A consultant's job is not just to report issues but to fix them. A disclaimer doesn't absolve the firm of the responsibility for using fundamentally broken inputs. This choice is politically safer but professionally weak.",
        expertRating: 3
      },
      {
        id: "C",
        text: "Choose the CLV calculation method that provides the most favorable outcome for the project's success metrics, ensuring the consulting engagement looks like a win for both parties.",
        expertRationale: "This is highly unethical and unprofessional. It compromises integrity and intentionally misleads the client to engineer a favorable outcome, showing a total absence of professional responsibility and curiosity for the truth.",
        expertRating: 1
      }
    ],
    overall: "Option A is the only responsible action: halting work on a fundamentally flawed premise and insisting on data standardization. Using a broken average (B) or fabricating a win (C) undermines the consulting mission.",
    takeAway: "Never compromise the integrity of your core data, even under pressure to maintain project momentum."
  },
  {
    id: 9, // Scenario 9 of Module 2 (Close Call)
    moduleId: 2,
    prompt: "You are synthesizing final findings and realize a key assumption—that the client's sales team uses a specific Salesforce functionality—is based only on a casual comment from a junior analyst, not on hard evidence or system checks. The final deck is due in 2 hours, and the analyst has left for the day. Your PM is pushing for the final draft.",
    responses: [
      {
        id: "A",
        text: "Insert a large, prominent comment box into the presentation draft, flagged 'URGENT PM REVIEW: UNVERIFIED ASSUMPTION,' detailing the risk. Submit the deck and state you will follow up with the system check immediately.",
        expertRationale: "This is a good, high-transparency move (rated 4). It respects the PM's urgency while passing the risk to the appropriate person. However, professional curiosity encourages the consultant to take personal ownership of verification when possible.",
        expertRating: 4
      },
      {
        id: "B",
        text: "Immediately spend the next hour running a quick query on the Salesforce system log (which you have access to) to confirm or deny the functionality use, and only then update the finding and submit the deck, even if it delays submission by 30 minutes.",
        expertRationale: "This is the ideal balance of curiosity, data rigor, and responsibility. Verifying a critical assumption personally, even at the cost of a minor delay, shows ownership and ensures the final advice is grounded in fact. This edges out A because it solves the problem, not just flags it.",
        expertRating: 5
      },
      {
        id: "C",
        text: "Trust the junior analyst's comment and remove any reference to the assumption's source. Submit the final deck on time, prioritizing punctuality over final data integrity for a crucial deadline.",
        expertRationale: "This is a failure of due diligence. While punctuality is important, knowingly presenting an unverified, critical assumption as fact is a major professional misstep that sacrifices truth for process compliance.",
        expertRating: 2
      }
    ],
    overall: "Option B is superior because curiosity compels one to verify critical data points directly, even under tight deadlines, rather than passing the risk to the PM (A) or hoping for the best (C).",
    takeAway: "Verify critical assumptions with hard data yourself, regardless of pressure or deadline."
  },
  {
    id: 10, // Scenario 10 of Module 2
    moduleId: 2,
    prompt: "You are interviewing an elderly, long-tenured factory worker, Mr. Johnson, about process flow. His verbal description of the workflow contradicts the official process map provided by the client's middle management. When you politely show him the official map, he just laughs and says, 'That's what they think we do. It’d never work in the real world.'",
    responses: [
      {
        id: "A",
        text: "Report the official process map to be incorrect, suggesting a complete re-mapping project. Use Mr. Johnson's verbal description as the new standard, ignoring the complexity of his informal process.",
        expertRationale: "This is reactive. While you value Mr. Johnson's insight, over-relying on a single, unverified source and immediately declaring the official map obsolete is premature. You need to understand the 'why' behind the workaround first.",
        expertRating: 2
      },
      {
        id: "B",
        text: "State that there is a discrepancy but advise the client to stick to the official map, as implementing the informal, 'unwritten' process would be too difficult to standardize and audit across other sites.",
        expertRationale: "This prioritizes organizational ease over operational reality. Professional curiosity demands you investigate the efficient, real-world process. Dismissing it means the client will continue operating sub-optimally based on a broken map.",
        expertRating: 3
      },
      {
        id: "C",
        text: "Document Mr. Johnson's 'real-world' process as an unofficial but efficient 'workaround.' Quantify the time savings of his method versus the official map's time. Use this discrepancy to launch a discussion with middle management on closing the 'process gap.'",
        expertRationale: "This is excellent advisory work. Professional curiosity means finding the actual process, valuing the hidden, 'tribal' knowledge, and using the quantified gap to drive a targeted discussion on why the official process fails and how to standardize the better workaround.",
        expertRating: 5
      }
    ],
    overall: "Option C correctly values the hidden knowledge (the factory floor reality) and uses quantification to professionally challenge middle management on the 'process gap,' leading to real, sustainable improvements. The lowest score (A) is too quick to discard the official standard.",
    takeAway: "Seek out and quantify the efficient 'workarounds' on the ground; they represent true, hidden process optimization."
  }
];

export function getScenariosByModuleId(moduleId: number): Scenario[] {
  return scenarios.filter(scenario => scenario.moduleId === moduleId);
}
