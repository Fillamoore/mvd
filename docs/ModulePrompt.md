```
Generate the complete and final TypeScript file named `module2.ts`.

The file must define and export a constant array named `scenarios` containing exactly **10** unique consulting advisory scenarios, following the structure of the attached template file (`module-template.ts`). 

---

### Structural Requirements

1.  **Export:** Export the final array `scenarios`.
2.  **scenarioID:** goes from 1 to 10.
3.  The types are coming from the import on line 1.
4.  The last line of the file is: export default module2Scenarios;
5.  Do 1 to 10 then stop.

### Content and Quality Requirements

1.  **Scenario Coverage:** The 10 scenarios must be on the topic: *Professional Curiosity*. Don't use 'curiosity' all the time. Use everyday similes.
2.  **Response Quality:** All three response options (A, B, C) for every scenario must be plausible, professional, and defensible choices for a smart, junior-to-middle-level consultant (no "no-brainer" bad options). The narrative should include political, emotional and rationale aspects and client-side and internal dynamics. And expose 'unwritten rules' where they apply. Savvy, shrewd, even humorous narratives are ok here. Conversational style but no 'I'd do...' or 'You woulds...'.
3.  **Rating Distribution:** The highest rating (5/5) must be strategically distributed among options A, B, and C across the 10 scenarios to force nuanced judgment and prevent pattern recognition. I'd like 4 of the scenarios to be 'close calls' on at least 2 of the options so one rated 5 and one rated 4 to recognise trade offs and nuances. The expertRationale needs to explain why the 5 edged it.

### Data Field Constraints

| Field Name | Approximate Word Count | Constraint |
| :--- | :--- | :--- |
| `prompt` | 60-100 words | Must clearly define the high-stakes consulting situation |
| `responses.text` | 50–60 words | Must be a specific, plausible, professional action. |
| `responses.expertRationale` | 40–60 words | Must explain the nuance of the rating and trade-offs. |
| `responses.expertRating` | 1, 2, 3, 4, or 5 | Rating must reflect the response quality constraint. |
| `overall` | 2–3 sentences | Must summarize why the highest-rated option wins and / or why the low score(s) are so low. |
| `takeAway` | 1 sentence | Must provide a concise, actionable lesson. |

### Final Formatting Constraint (Crucial)

* **Remove all Markdown Formatting:** The content of all string fields (`prompt`, `text`, `expertRationale`, `overall`, and `takeAway`) must contain only **plain text**. Absolutely no Markdown characters (no single asterisks `*` or double asterisks `**`) are allowed.
```