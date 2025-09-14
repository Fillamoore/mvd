import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ScenariosProgressState {
  // Current ratings for all responses across all scenarios
  ratings: {
    [scenarioId: string]: { // We can add scenario-level organization later
      [responseId: string]: number | null;
    };
  };
  
  // Actions to update the state
  setRating: (scenarioId: string, responseId: string, rating: number | null) => void;
  cycleRating: (scenarioId: string, responseId: string) => void;
  resetScenario: (scenarioId: string) => void;
  resetAllProgress: () => void;
}

// Default empty state
const defaultState = {
  ratings: {
    // We'll initialize with a default scenario for now
    'default-scenario': {
      A: null,
      B: null, 
      C: null,
    },
  },
};

// Create the persisted store with clear naming
export const useScenariosProgressLocalStore = create<ScenariosProgressState>()(
  persist(
    (set, get) => ({
      ...defaultState,

      // Set a specific rating for a specific scenario
      setRating: (scenarioId, responseId, rating) =>
        set((state) => ({
          ratings: {
            ...state.ratings,
            [scenarioId]: {
              ...(state.ratings[scenarioId] || {}),
              [responseId]: rating,
            },
          },
        })),

      // Cycle the rating for a specific response in a specific scenario
      cycleRating: (scenarioId, responseId) =>
        set((state) => {
          const currentRating = state.ratings[scenarioId]?.[responseId] ?? null;
          
          let newRating: number | null;

          if (currentRating === null) {
            newRating = 1;
          } else if (currentRating === 5) {
            newRating = 4;
          } else if (currentRating === 1) {
            newRating = 2;
          } else {
            newRating = currentRating < 5 ? currentRating + 1 : currentRating - 1;
          }

          return {
            ratings: {
              ...state.ratings,
              [scenarioId]: {
                ...(state.ratings[scenarioId] || {}),
                [responseId]: newRating,
              },
            },
          };
        }),

      // Reset a specific scenario
      resetScenario: (scenarioId) =>
        set((state) => ({
          ratings: {
            ...state.ratings,
            [scenarioId]: {
              A: null,
              B: null,
              C: null,
            },
          },
        })),

      // Reset all progress across all scenarios
      resetAllProgress: () => set(defaultState),
    }),
    {
      name: 'scenarios-progress-store', // Clear localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);