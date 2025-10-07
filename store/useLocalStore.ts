// store/useLocalStore.ts - COMPLETE WITH PROPER INITIAL STATE
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Core Data Structures
interface CompletedScenario {
  scenarioId: number;
  userRankings: { [responseId: string]: number | null };
  expertRankings: { [responseId: string]: number | null };
  score: number;
  timestamp: string;
  dateStarted: string;
  dateCompleted: string;
}

interface PickUpAndPutDownState {
  completedScenarios: CompletedScenario[];
  currentScenario: {
    scenarioId: number;
    userRankings: { [responseID: string]: number | null };
    expertRankings: { [responseID: string]: number | null };
    userRankingDirections: { [responseID: string]: boolean };
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
  setExpertRankings: (moduleId: number, scenarioId: number, rankings: { [responseId: string]: number }) => void;
  rankScenario: (moduleId: number, scenarioId: number, responseId: string, ranking: number, direction: boolean) => void;
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
              userRankings: {},
              expertRankings: {},
              userRankingDirections: { 'A': true, 'B': true, 'C': true },
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
                  userRankings: {},
                  expertRankings: {},
                  userRankingDirections: { 'A': true, 'B': true, 'C': true },
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
              userRankings: {},
              expertRankings: {},
              userRankingDirections: { 'A': true, 'B': true, 'C': true },
              isRevealed: false,
              dateStarted: new Date().toISOString(),
              dateCompleted: undefined,
              shouldComplete: false,
            };
          });
        },

        setExpertRankings: (moduleId: number, scenarioId: number, rankings: { [responseId: string]: number }) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            if (scenario && scenario.scenarioId === scenarioId) {
              scenario.expertRankings = rankings;
            }
          });
        },

        rankScenario: (moduleId: number, scenarioId: number, responseId: string, ranking: number, direction: boolean) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            if (scenario) {
              scenario.userRankings[responseId] = ranking;
              scenario.userRankingDirections[responseId] = direction;
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
                userRankings: {},
                expertRankings: {},
                userRankingDirections: { 'A': true, 'B': true, 'C': true },
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
                      userRankings: {},
                      expertRankings: {},
                      userRankingDirections: { 'A': true, 'B': true, 'C': true },
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