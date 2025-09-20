// store/useLocalStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// 1. Core Data Structures
interface PickUpAndPutDownState {
  completedScenarios: {
    scenarioId: number;
    userRatings: { [responseId: string]: number | null };
    expertRatings: { [responseId: string]: number };
    score: number;
    timestamp: string;
  }[];
  currentScenario: {
    scenarioId: number;
    userRatings: { [responseID: string]: number | null };
    isRevealed: boolean;
  } | null;
}

export interface PickUpAndPutDownStore {
  lastModuleVisited: string | null;
  pickUpAndPutDown: {
    [moduleId: string]: PickUpAndPutDownState;
  };

  setCurrentModule: (moduleId: number) => void;
  setCurrentScenario: (moduleId: number, scenarioId: number) => void;
  rateScenario: (moduleId: number, scenarioId: number, responseId: string, rating: number | null) => void;
  revealScenario: (moduleId: number) => void;
  recordPerformanceEvent: (
    moduleId: number,
    scenarioId: number,
    userRatings: { [key: string]: number | null },
    expertRatings: { [key: string]: number },
  ) => void;
  clearCurrentScenario: (moduleId: number) => void;
}

// 2. Simplified Zustand Store Implementation
export const useLocalStore = create<PickUpAndPutDownStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        // Initial State
        lastModuleVisited: null,
        pickUpAndPutDown: {},

        setCurrentModule: (moduleId: number) => {
          set((state) => {
            state.lastModuleVisited = moduleId.toString();
          });
        },

        setCurrentScenario: (moduleId: number, scenarioId: number) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            
            if (!state.pickUpAndPutDown[moduleKey]) {
              state.pickUpAndPutDown[moduleKey] = {
                completedScenarios: [],
                currentScenario: null,
              };
            }
            
            const currentScenario = state.pickUpAndPutDown[moduleKey].currentScenario;
            
            // Set the scenario - trust that this is what we want current
            state.pickUpAndPutDown[moduleKey].currentScenario = {
              scenarioId,
              userRatings: currentScenario?.userRatings || {},
              isRevealed: currentScenario?.isRevealed || false,
            };
          });
        },

        rateScenario: (moduleId: number, scenarioId: number, responseId: string, rating: number | null) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            // SIMPLIFIED: Just update the rating, no scenario ID checks
            if (scenario) {
              scenario.userRatings[responseId] = rating;
            }
          });
        },

        revealScenario: (moduleId: number) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            if (scenario) {
              scenario.isRevealed = true;
            }
          });
        },

        recordPerformanceEvent: (
          moduleId: number,
          scenarioId: number,
          userRatings: { [key: string]: number | null },
          expertRatings: { [key: string]: number }
        ) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const moduleData = state.pickUpAndPutDown[moduleKey];

            if (!moduleData) return;

            let totalDifference = 0;
            let ratedCount = 0;

            Object.keys(userRatings).forEach((responseId) => {
              const userRating = userRatings[responseId];
              const expertRating = expertRatings[responseId];

              if (userRating !== null && userRating !== undefined && expertRating !== null && expertRating !== undefined) {
                totalDifference += Math.abs(userRating - expertRating);
                ratedCount++;
              }
            });

            const averageDifference = ratedCount > 0 ? totalDifference / ratedCount : 0;
            const score = Math.round(100 - (averageDifference / 4) * 100);

            const newPerformanceEvent = {
              scenarioId,
              userRatings,
              expertRatings,
              score,
              timestamp: new Date().toISOString(),
            };

            moduleData.completedScenarios.push(newPerformanceEvent);
          });
        },

        clearCurrentScenario: (moduleId: number) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const moduleData = state.pickUpAndPutDown[moduleKey];
            
            if (moduleData) {
              moduleData.currentScenario = null;
            }
          });
        },
      })),
      {
        name: 'pick-up-and-put-down-storage',
        version: 1,
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => {
          return (state, error) => {
            if (error) {
              console.error('Rehydration failed:', error);
            }
          };
        },
      }
    ),
    { name: 'PickUpAndPutDownStore' }
  )
);

// === SIMPLIFIED DEBUG UTILITIES ===
export const storeDebug = {
  checkStorage: () => {
    try {
      const stored = localStorage.getItem('pick-up-and-put-down-storage');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return null;
    }
  },

  clearAll: () => {
    try {
      localStorage.removeItem('pick-up-and-put-down-storage');
      useLocalStore.setState({
        lastModuleVisited: null,
        pickUpAndPutDown: {}
      });
      console.log('Cleared store and storage');
    } catch (error) {
      console.error('Clear error:', error);
    }
  },
};

// Make available globally for console debugging
if (typeof window !== 'undefined') {
  (window as any).debugStore = storeDebug;
}