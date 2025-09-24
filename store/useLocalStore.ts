// store/useLocalStore.ts - COMPLETE WITH PROPER INITIAL STATE
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Core Data Structures
interface CompletedScenario {
  scenarioId: number;
  userRatings: { [responseId: string]: number | null };
  expertRatings: { [responseId: string]: number | null };
  score: number;
  timestamp: string;
  dateStarted: string;
  dateCompleted: string;
}

interface PickUpAndPutDownState {
  completedScenarios: CompletedScenario[];
  currentScenario: {
    scenarioId: number;
    userRatings: { [responseID: string]: number | null };
    expertRatings: { [responseID: string]: number | null };
    userRatingDirections: { [responseID: string]: boolean };
    isRevealed: boolean;
    dateStarted: string;
    dateCompleted?: string;
    shouldComplete?: boolean;
  } | null;
}

export interface PickUpAndPutDownStore {
  currentModule: string | null;
  pickUpAndPutDown: {
    [moduleId: string]: PickUpAndPutDownState;
  };
  
  // Actions
  setCurrentModule: (moduleId: number) => void;
  setCurrentScenario: (moduleId: number, scenarioId: number) => void;
  setExpertRatings: (moduleId: number, scenarioId: number, ratings: { [responseId: string]: number }) => void;
  rateScenario: (moduleId: number, scenarioId: number, responseId: string, rating: number | null, direction: boolean) => void;
  revealScenario: (moduleId: number) => void;
  clearCurrentScenario: (moduleId: number) => void;
  completeCurrentScenario: (completedScenario: CompletedScenario) => void;
  setNextScenario: (scenarioId: number) => void;
  triggerScenarioCompletion: () => void;
}

export const useLocalStore = create<PickUpAndPutDownStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        // PROPER INITIAL STATE - Always have module 1, scenario 1
        currentModule: "1",
        pickUpAndPutDown: {
          "1": {
            completedScenarios: [],
            currentScenario: {
              scenarioId: 1,
              userRatings: {},
              expertRatings: {},
              userRatingDirections: { 'A': true, 'B': true, 'C': true },
              isRevealed: false,
              dateStarted: new Date().toISOString(),
              dateCompleted: undefined,
              shouldComplete: false,
            },
          },
        },

        // Actions
        setCurrentModule: (moduleId: number) => {
          set((state) => {
            state.currentModule = moduleId.toString();
            
            // Ensure the module exists in the structure
            const moduleKey = moduleId.toString();
            if (!state.pickUpAndPutDown[moduleKey]) {
              state.pickUpAndPutDown[moduleKey] = {
                completedScenarios: [],
                currentScenario: {
                  scenarioId: 1,
                  userRatings: {},
                  expertRatings: {},
                  userRatingDirections: { 'A': true, 'B': true, 'C': true },
                  isRevealed: false,
                  dateStarted: new Date().toISOString(),
                  dateCompleted: undefined,
                  shouldComplete: false,
                },
              };
            }
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
              userRatings: {},
              expertRatings: {},
              userRatingDirections: { 'A': true, 'B': true, 'C': true },
              isRevealed: false,
              dateStarted: new Date().toISOString(),
              dateCompleted: undefined,
              shouldComplete: false,
            };
          });
        },

        setExpertRatings: (moduleId: number, scenarioId: number, ratings: { [responseId: string]: number }) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            if (scenario && scenario.scenarioId === scenarioId) {
              scenario.expertRatings = ratings;
            }
          });
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

        clearCurrentScenario: (moduleId: number) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const moduleData = state.pickUpAndPutDown[moduleKey];
            
            if (moduleData) {
              moduleData.currentScenario = null;
            }
          });
        },

        completeCurrentScenario: (completedScenario: CompletedScenario) => {
          set((state) => {
            if (!state.currentModule) return;
            const moduleKey = state.currentModule;
            const moduleData = state.pickUpAndPutDown[moduleKey];
            
            if (moduleData) {
              moduleData.completedScenarios.push(completedScenario);
            }
          });
        },

        setNextScenario: (scenarioId: number) => {
          set((state) => {
            if (!state.currentModule) return;
            const moduleKey = state.currentModule;
            const moduleData = state.pickUpAndPutDown[moduleKey];
            
            if (moduleData) {
              moduleData.currentScenario = {
                scenarioId,
                userRatings: {},
                expertRatings: {},
                userRatingDirections: { 'A': true, 'B': true, 'C': true },
                isRevealed: false,
                dateStarted: new Date().toISOString(),
                dateCompleted: undefined,
                shouldComplete: false,
              };
            }
          });
        },

        triggerScenarioCompletion: () => {
          set((state) => {
            if (!state.currentModule) return;
            const moduleKey = state.currentModule;
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            if (scenario) {
              scenario.shouldComplete = true;
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
            } else if (state) {
              // Ensure valid state after rehydration (especially when localStorage is empty)
              if (!state.currentModule) {
                state.currentModule = "1";
              }
              if (!state.pickUpAndPutDown || !state.pickUpAndPutDown["1"]) {
                state.pickUpAndPutDown = {
                  "1": {
                    completedScenarios: [],
                    currentScenario: {
                      scenarioId: 1,
                      userRatings: {},
                      expertRatings: {},
                      userRatingDirections: { 'A': true, 'B': true, 'C': true },
                      isRevealed: false,
                      dateStarted: new Date().toISOString(),
                      dateCompleted: undefined,
                      shouldComplete: false,
                    },
                  },
                };
              }
            }
          };
        },
      }
    ),
    { name: 'PickUpAndPutDownStore' }
  )
);