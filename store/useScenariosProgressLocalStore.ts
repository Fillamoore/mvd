import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface RatingState {
  value: number | null;
  isIncreasing: boolean; // We need to track direction for each rating
}

interface ScenariosProgressState {
  ratings: {
    [scenarioId: string]: {
      [responseId: string]: RatingState;
    };
  };
  
  setRating: (scenarioId: string, responseId: string, rating: RatingState) => void;
  cycleRating: (scenarioId: string, responseId: string) => void;
  resetScenario: (scenarioId: string) => void;
  resetAllProgress: () => void;
}

// Default empty state with proper structure
const defaultState = {
  ratings: {
    'default-scenario': {
      A: { value: null, isIncreasing: true },
      B: { value: null, isIncreasing: true },
      C: { value: null, isIncreasing: true },
    },
  },
};

export const useScenariosProgressLocalStore = create<ScenariosProgressState>()(
  persist(
    (set, get) => ({
      ...defaultState,

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

      cycleRating: (scenarioId, responseId) =>
        set((state) => {
          const currentState = state.ratings[scenarioId]?.[responseId] || 
                              { value: null, isIncreasing: true };
          
          let newValue: number | null;
          let newIsIncreasing: boolean = currentState.isIncreasing;

          if (currentState.value === null) {
            newValue = 1;
            newIsIncreasing = true;
          } else {
            if (currentState.isIncreasing) {
              if (currentState.value < 5) {
                newValue = currentState.value + 1;
                newIsIncreasing = true;
              } else {
                newValue = 4;
                newIsIncreasing = false;
              }
            } else {
              if (currentState.value > 1) {
                newValue = currentState.value - 1;
                newIsIncreasing = false;
              } else {
                newValue = 2;
                newIsIncreasing = true;
              }
            }
          }

          return {
            ratings: {
              ...state.ratings,
              [scenarioId]: {
                ...(state.ratings[scenarioId] || {}),
                [responseId]: { value: newValue, isIncreasing: newIsIncreasing },
              },
            },
          };
        }),

      resetScenario: (scenarioId) =>
        set((state) => ({
          ratings: {
            ...state.ratings,
            [scenarioId]: {
              A: { value: null, isIncreasing: true },
              B: { value: null, isIncreasing: true },
              C: { value: null, isIncreasing: true },
            },
          },
        })),

      resetAllProgress: () => set(defaultState),
    }),
    {
      name: 'scenarios-progress-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);