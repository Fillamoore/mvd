
Generate the complete and final TypeScript file named ***"module6-scenarios.ts"***.

The file must define and export a constant array named "scenarios" containing exactly ***50*** unique, high-stakes professional services and consulting scenarios, following the structure of the attached template file ("scenarios-template.ts.bak"). 

---

### Structural Requirements

1.  **Export:** Export the final array "scenario.
2.  **moduleID:** is always ***6***. 
3.  **scenarioID:** goes from ***1 to 50***.
4.  **responseID:** goes from "A" to "C".

### Content and Quality Requirements

1.  **Scenario Coverage:** The ***50*** scenarios must be on the topic: ***Environment and Sustainability**. Don't use ***'environment'*** or ***'sustainability'*** all the time. Use everyday similes.
2.  **Response Quality:** All three response options (A, B, C) for every scenario must be plausible, professional, and defensible choices for a smart, junior-to-middle-level consultant i.e. there are no 'no-brainer' bad options. The narrative should include political, emotional and rationale aspects and client-side and internal dynamics. And expose 'unwritten rules' and other hueristics where they apply. Savvy, shrewd, even humorous narratives are ok here. Conversational style but no 'I'd do...' or 'You woulds...'.
3.  **Expert Ranking:** For each response, there is an expertRanking value which can be 3 (good), 2 (better) and 1 (best).
4.  **Ranking Distribution:** The highest ranking value 1 must be spread randomly among options A, B, and C across the ***50*** scenarios to force nuanced judgment and prevent pattern recognition. ***25*** of the scenarios should be 'close calls' i.e. at least 2 of the responses can at least initially be considered to rank as 'the best' in order to surface trade offs and situational nuances. For some scenarios it may be appropriate for the narratives and / or the overall perspective to explain 'if these circumstance then this, but if those circumstances then that' conditionality.
5.  **Expert Rationale:** For each response, there is the expert rationale narrative that explain the ranking (1-3) that has been applied.
6.  **Overall Perspective:** For each scenario, there is the expert overall perspective on all three responses and additional insight(s) regarding the ranking.
7.  **Final take away:** For each scenario, there is a final pithy take away text to reinforce the knowhow exemplified in the scenario. 
8.  **Narratives:** The scenario prompt, the three responses and the three expert rationales should be rich in colour, personality, and contextual detail. See word count guidance below.

### Data Field Constraints

| Field Name | Approximate Word Count | Constraint |
| :--- | :--- | :--- |
| `title` | 2-6 words | Pithy lead-in / hook to the scenario. |
| `prompt` | 60-100 words | Must clearly define the high-stakes professional services / consulting situation |
| `responses.title` | 2-6 words | Pithy lead-in / hook to the response. |
| `responses.text` | 50–60 words | Must be a specific, plausible, professional action. |
| `responses.expertRationale` | 40–60 words | Must explain the nuance of the ranking and the trade-offs under consideration. |
| `responses.expertRanking` | 1, 2, 3 | Ranking must reflect the response quality constraint and the jumbling of which option A, B or C is highest-ranked. |
| `overall` | 2–3 sentences | Must summarize why the highest-ranked response wins and / or why the lower-ranked responses are lower. |
| `takeAway` | 1 sentence | Must provide a concise, actionable distinction for the knowhow exemplified in this scenario. |

### Final Formatting Constraint (Crucial)

* **Remove all Markdown Formatting:** The content of all string fields (`prompt`, `text`, `expertRationale`, `overall`, and `takeAway`) must contain only **plain text**. Absolutely no Markdown characters (no single asterisks `*` or double asterisks `**`) are allowed.
