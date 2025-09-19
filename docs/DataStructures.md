### 1\. Core Data Structures 🧱

The app's state is stored in a single blob in the browser's Local Storage, managed by Zustand's `persist` middleware. This blob contains two top-level keys:

1.1. **`lastModuleVisited`**: A simple string (`moduleId`) that acts as a bookmark, telling the app which module to display when it starts up. When the entire curriculum is completed, this value will be set to a special marker, such as `"CURRICULUM_COMPLETE"`.

1.2. **`pickUpAndPutDown`**: A comprehensive object where each key is a `moduleId` string, and its value is a `PickUpAndPutDownState` object.

The **`PickUpAndPutDownState`** is structured to hold all the necessary information for a single module's progress.

```typescript
interface PickUpAndPutDownState {
  // A history of all scenarios the user has fully completed.
  completedScenarios: {
    scenarioId: number;
    userRatings: { [responseId: string]: number };
    score: number;
    timestamp: string; // The individual scenario score is stored for efficiency.
  }[];

  // The state of the single scenario the user is currently working on.
  currentScenario: {
    scenarioId: number;
    userRatings: { [responseID: string]: number | null };
    isRevealed: boolean;
  } | null;
}
```

This structure cleanly separates the **completed history** from the **active, in-progress scenario**.

-----

### 2\. App Logic: User Flow 🚶

The app's behavior is driven entirely by the data in these two fields.

2.1. **On App Load (Restoring State)** 📖

1.  **Read State**: The app first reads the `lastModuleVisited` field. If its value is `"CURRICULUM_COMPLETE"`, the app immediately displays a final "Curriculum Complete" screen. Otherwise, it uses the `lastModuleVisited` ID to determine the correct module. If this field is `null`, it defaults to the first module.
2.  **Render the Trail**: It then uses the `moduleId` to access the `pickUpAndPutDown` blob. The app iterates through the `completedScenarios` array and renders each one in a non-interactive "history" format. Each card will show the user's ratings, expert ratings, the pre-calculated score, and the timestamp.
3.  **Render the Current Scenario**: The app checks the `currentScenario` object for the current module. If it's not `null`, the app renders the corresponding scenario card. The `userRatings` from this object are used to pre-populate the ratings, and the `isRevealed` status determines whether to show the expert rationale.
4.  **Restore Scroll Position**: A `useEffect` hook reads the scroll position from Local Storage and scrolls the page to that exact point, ensuring the "chat page" looks exactly as the user left it.
5.  **Fade-in**: The main content area smoothly fades in to create a polished user experience.

2.2. **During User Interaction** ✍️

1.  **Updating Ratings**: As the user rates responses, a `setRating` action updates the `userRatings` object inside the `currentScenario` blob. The `lastModuleVisited` field is also updated with the current module's ID.
2.  **Revealing a Scenario**: When the user clicks "Reveal," the `isRevealed` boolean inside the `currentScenario` is flipped to `true`. This triggers a re-render to display the expert rationale and the final scenario score.
3.  **Completing a Scenario**: When the user clicks "Next," a `completeScenario` action is called. This action:
      * Moves the data from the `currentScenario` object into the `completedScenarios` array.
      * Populates `currentScenario` with the data for the next scenario.
      * Updates the `lastModuleVisited` field.

-----

### 3\. UI Flow on Module Completion 🏁

When the user completes the last scenario in a module, a pop-up should appear to provide confirmation and guide the user's next action.

1.  **Show Pop-up**: After the last scenario's completion is processed, a pop-up appears, congratulating the user on completing the module. The pop-up should display the final module score (calculated on the fly).
2.  **User Options**: The pop-up offers two buttons:
      * **'Proceed to Next Module'**: Clicking this button triggers an action to update `lastModuleVisited` to the next module's ID, and the UI transitions to the first scenario of that new module.
      * **'Cancel'**: Clicking this button simply dismisses the pop-up, allowing the user to scroll up and down the completed module's scenarios to review them.
3.  **Module Switching**: At any point, the user can choose a different module to work on or review:
      * **On Desktop**: The user can select a new module from a dedicated **DesktopSidebar** panel. Selecting a new module will update the `lastModuleVisited` field and re-render the UI with the selected module's trail and current state.
      * **On Mobile**: The user can navigate to a **MasterView** screen to select and switch to a different module.

-----

### 4\. UI Flow on Curriculum Completion 🎉

When the user completes the last scenario in the last module, a more substantial acknowledgment is given.

1.  **Trigger Final Popup**: The 'Next' button action for the final scenario will check if it's the last one in the last module. If so, it will trigger a special **"Curriculum Complete" popup** instead of the standard "Module Complete" one.
2.  **Display Summary**: This popup will be more detailed. It will display a summary of the user's overall performance. This summary is calculated on the fly and could include an overall score, highlights and lowlights, and the completion date.
3.  **Final State**: The popup offers only one option: a button labeled **'Review'**. Clicking this button closes the popup and keeps the user on the final module's chat page, allowing them to scroll and review their work. At this point, the "Next" button disappears, and the `lastModuleVisited` field is set to `"CURRICULUM_COMPLETE"`. The user can then only switch to other completed modules for review. .

-----

### 5\. Analytics Overlap 📈

This data model is perfectly suited for analytics. The `pickUpAndPutDown` blob serves as a single, centralized source of truth for all user progress. A service worker can periodically read this blob, identify new completed scenarios (using the `timestamp` field), and send the relevant data to your analytics service without needing a separate tracking system.