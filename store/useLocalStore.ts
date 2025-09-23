import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// 1. Core Data Structures
interface CompletedScenario {
  scenarioId: number;
  userRatings: { [responseId: string]: number | null };
  expertRatings: { [responseId: string]: number };
  score: number;
  timestamp: string;
  dateCompleted?: string;
}

interface PickUpAndPutDownState {
  completedScenarios: CompletedScenario[];
  currentScenario: {
    scenarioId: number;
    userRatings: { [responseID: string]: number | null };
    userRatingDirections: { [responseID: string]: boolean };
    isRevealed: boolean;
    dateStarted?: string;
    dateCompleted?: string;
  } | null;
}

// The main store interface
export interface PickUpAndPutDownStore {
  currentModule: string | null;
  pickUpAndPutDown: {
    [moduleId: string]: PickUpAndPutDownState;
  };
  
  // Actions
  setCurrentModule: (moduleId: number) => void;
  setCurrentScenario: (moduleId: number, scenarioId: number) => void;
  getCurrentScenario: (moduleId: number) => {
    scenarioId: number;
    userRatings: { [responseID: string]: number | null };
    isRevealed: boolean;
  } | null;
  rateScenario: (moduleId: number, scenarioId: number, responseId: string, rating: number | null, direction: boolean) => void;
  revealScenario: (moduleId: number) => void;
  recordPerformanceEvent: (
    moduleId: number,
    scenarioId: number,
    userRatings: { [key: string]: number | null },
    expertRatings: { [key: string]: number },
  ) => void;
  clearCurrentScenario: (moduleId: number) => void;
  advanceToNextScenario: (moduleId: number, expertRationales: any) => void;
}

export const useLocalStore = create<PickUpAndPutDownStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        // Initial State
        currentModule: null,
        pickUpAndPutDown: {},

        // Actions
        setCurrentModule: (moduleId: number) => {
          set((state) => {
            state.currentModule = moduleId.toString();
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
            
            state.pickUpAndPutDown[moduleKey].currentScenario = {
              scenarioId,
              userRatings: {}, // <-- Correct: Always reset user ratings
              userRatingDirections: {}, // <-- Correct: Always reset user directions
              isRevealed: false, // <-- Correct: Always set to false for a new scenario
              dateStarted: new Date().toISOString(),
              dateCompleted: undefined,
            };
          });
        },

        getCurrentScenario: (moduleId: number) => {
          const state = get();
          const moduleKey = moduleId.toString();
          return state.pickUpAndPutDown[moduleKey]?.currentScenario || null;
        },

        rateScenario: (moduleId: number, scenarioId: number, responseId: string, rating: number | null, direction: boolean) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            if (scenario) {
              scenario.userRatings[responseId] = rating;
              scenario.userRatingDirections[responseId] = direction;
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

        advanceToNextScenario: (moduleId: number, expertRationales: any) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const moduleData = state.pickUpAndPutDown[moduleKey];
            const currentScenario = moduleData?.currentScenario;
            
            if (moduleData && currentScenario && currentScenario.isRevealed) {
              const userRatings = currentScenario.userRatings;
              const expertRatings: { [key: string]: number } = {};
              expertRationales.forEach((exp: any) => {
                expertRatings[exp.id] = exp.expertRating;
              });

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

              const completedScenario = {
                scenarioId: currentScenario.scenarioId,
                userRatings: currentScenario.userRatings,
                expertRatings,
                score,
                timestamp: new Date().toISOString(),
                dateCompleted: new Date().toISOString(),
              };

              moduleData.completedScenarios.push(completedScenario);

              const nextScenarioId = currentScenario.scenarioId + 1;
              moduleData.currentScenario = {
                scenarioId: nextScenarioId,
                userRatings: {},
                userRatingDirections: {
                  'A': true,
                  'B': true,
                  'C': true,
                },
                isRevealed: false,
                dateStarted: new Date().toISOString(),
                dateCompleted: undefined,
              };
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