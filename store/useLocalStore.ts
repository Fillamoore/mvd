// store/useLocalStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// Data Structures
interface PickUpAndPutDownState {
  currentScenario: {
    scenarioId: number;
    userRankings: { [responseID: string]: number | null };
    expertRankings: { [responseID: string]: number | null };
    userRankingDirections: { [responseID: string]: boolean };
    isRevealed: boolean;
    shouldComplete?: boolean;
  } | null;
}

interface ModulePerformance {
  moduleId: number;
  scenariosCompleted: number;
  averageScore: number;
  lastUpdated: string;
}

interface PendingSync {
  id: string;
  type: 'performance_update';
  timestamp: string;
  data: ModulePerformance[];
  email: string;
  retryCount: number;
}

export interface PickUpAndPutDownStore {
  // Core state
  currentModule: string | null;
  pickUpAndPutDown: { [moduleId: string]: PickUpAndPutDownState };
  performanceData: ModulePerformance[];
  
  // Auth state
  email: string | null;
  
  // Offline state
  isOnline: boolean;
  pendingSyncs: PendingSync[];
  lastSuccessfulSync: string | null;

  // Core actions
  setCurrentModule: (moduleId: number) => void;
  setCurrentScenario: (moduleId: number, scenarioId: number) => void;
  setExpertRankings: (moduleId: number, scenarioId: number, rankings: { [responseId: string]: number }) => void;
  rankScenario: (moduleId: number, scenarioId: number, responseId: string, ranking: number, direction: boolean) => void;
  revealScenario: (moduleId: number, userRankings: { [responseId: string]: number | null }, expertRankings: { [responseId: string]: number }) => void;
  clearCurrentScenario: (moduleId: number) => void;
  setNextScenario: (scenarioId: number) => void;
  triggerScenarioCompletion: () => void;

  // Performance actions
  updateModulePerformance: (moduleId: number, scenariosCompleted: number, averageScore: number) => void;
  incrementScenariosCompleted: (moduleId: number, newScore: number) => void;

  // Auth actions
  setEmail: (email: string) => void;
  clearAuth: () => void;

  // Sync actions
  syncOnAppLoad: () => Promise<void>;
  setOnlineStatus: (isOnline: boolean) => void;
  syncPerformanceToServer: () => Promise<void>;
  syncPerformanceFromServer: () => Promise<void>;
  retryPendingSyncs: () => Promise<void>;
}

export const useLocalStore = create<PickUpAndPutDownStore>()(
  devtools(
    persist(
      immer((set, get) => ({
        // INITIAL STATE
        currentModule: "1",
        pickUpAndPutDown: {
          "1": {
            currentScenario: {
              scenarioId: 1,
              userRankings: {},
              expertRankings: {},
              userRankingDirections: { 'A': true, 'B': true, 'C': true },
              isRevealed: false,
              shouldComplete: false,
            },
          },
        },

        performanceData: Array.from({ length: 49 }, (_, index) => ({
          moduleId: index + 1,
          scenariosCompleted: 0,
          averageScore: 0,
          lastUpdated: new Date().toISOString(),
        })),

        email: null,

        // Offline state - default to true
        isOnline: true,
        pendingSyncs: [],
        lastSuccessfulSync: null,

        // Core actions
        setCurrentModule: (moduleId: number) => {
          set((state) => {
            state.currentModule = moduleId.toString();
            const moduleKey = moduleId.toString();
            if (!state.pickUpAndPutDown[moduleKey]) {
              state.pickUpAndPutDown[moduleKey] = {
                currentScenario: {
                  scenarioId: 1,
                  userRankings: {},
                  expertRankings: {},
                  userRankingDirections: { 'A': true, 'B': true, 'C': true },
                  isRevealed: false,
                },
              };
            }
          });
        },

        setCurrentScenario: (moduleId: number, scenarioId: number) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            if (!state.pickUpAndPutDown[moduleKey]) {
              state.pickUpAndPutDown[moduleKey] = { currentScenario: null };
            }
            state.pickUpAndPutDown[moduleKey].currentScenario = {
              scenarioId,
              userRankings: {},
              expertRankings: {},
              userRankingDirections: { 'A': true, 'B': true, 'C': true },
              isRevealed: false,
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

        revealScenario: (moduleId: number, userRankings: { [responseId: string]: number | null }, expertRankings: { [responseId: string]: number }) => {
          set((state) => {
            const moduleKey = moduleId.toString();
            const scenario = state.pickUpAndPutDown[moduleKey]?.currentScenario;
            
            if (scenario) {
              scenario.isRevealed = true;
            }
          });

          // Calculate score and update performance OUTSIDE the set function
          let totalDifference = 0;
          let ratedResponses = 0;
          
          Object.entries(userRankings).forEach(([responseId, userRanking]) => {
            const expertRanking = expertRankings[responseId];
            if (userRanking !== null && userRanking !== undefined && expertRanking !== undefined) {
              totalDifference += Math.abs(userRanking - expertRanking);
              ratedResponses++;
            }
          });
          
          if (ratedResponses > 0) {
            const averageDifference = totalDifference / ratedResponses;
            const score = Math.round(100 - (averageDifference / 2) * 100);
            
            console.log('🔴 REVEAL: Calling incrementScenariosCompleted with:', { moduleId, score });
            // Update performance AFTER the state update is complete
            get().incrementScenariosCompleted(moduleId, score);
          }
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

        // Performance actions
        updateModulePerformance: (moduleId: number, scenariosCompleted: number, averageScore: number) => {
          console.log('STORE: updateModulePerformance called with:', { moduleId, scenariosCompleted, averageScore });
          set((state) => {
            const performanceIndex = state.performanceData.findIndex(p => p.moduleId === moduleId);
            if (performanceIndex >= 0) {
              state.performanceData[performanceIndex] = {
                moduleId,
                scenariosCompleted,
                averageScore,
                lastUpdated: new Date().toISOString(),
              };
              console.log('STORE: Performance data updated:', state.performanceData[performanceIndex]);
            }
          });
        },

        incrementScenariosCompleted: (moduleId: number, newScore: number) => {
          console.log('🔴 SCENARIO COMPLETED: Starting', { moduleId, newScore });
          
          set((state) => {
            console.log('🔴 SCENARIO COMPLETED: Inside set', { 
              isOnline: state.isOnline, 
              email: state.email,
              hasEmail: !!state.email 
            });
            
            const performanceIndex = state.performanceData.findIndex(p => p.moduleId === moduleId);
            
            if (performanceIndex >= 0) {
              const current = state.performanceData[performanceIndex];
              const newScenariosCompleted = current.scenariosCompleted + 1;
              const newAverageScore = ((current.averageScore * current.scenariosCompleted) + newScore) / newScenariosCompleted;
              
              state.performanceData[performanceIndex] = {
                moduleId,
                scenariosCompleted: newScenariosCompleted,
                averageScore: Math.round(newAverageScore * 100) / 100,
                lastUpdated: new Date().toISOString(),
              };
              
              console.log('🔴 SCENARIO COMPLETED: Performance updated', state.performanceData[performanceIndex]);
              
              // Handle sync based on online status
              if (state.isOnline && state.email) {
                console.log('🔴 SCENARIO COMPLETED: Online with email - scheduling sync');
                setTimeout(() => {
                  console.log('🔴 SCENARIO COMPLETED: Executing sync');
                  get().syncPerformanceToServer();
                }, 100);
              } else if (state.email) {
                console.log('🔴 SCENARIO COMPLETED: Offline with email - queuing sync');
                const newSync: PendingSync = {
                  id: Math.random().toString(36),
                  type: 'performance_update' as const,
                  timestamp: new Date().toISOString(),
                  data: [...state.performanceData],
                  email: state.email,
                  retryCount: 0
                };
                state.pendingSyncs.push(newSync);
              } else {
                console.log('🔴 SCENARIO COMPLETED: No email - skipping sync');
              }
            }
          });
        },

        // Auth actions
        setEmail: (email: string) => {
          console.log('🚨 STORE: setEmail called with:', email);
          set((state) => {
            state.email = email;
          });
        },

        clearAuth: () => {
          set((state) => {
            state.email = null;
            state.pendingSyncs = [];
            state.lastSuccessfulSync = null;
          });
        },

        // Sync actions
        setOnlineStatus: (isOnline: boolean) => {
          console.log('🌐 NETWORK: setOnlineStatus called with:', isOnline);
          set((state) => {
            const wasOffline = !state.isOnline && isOnline;
            state.isOnline = isOnline;
            
            console.log('🌐 NETWORK: Online status changed', { 
              wasOffline, 
              pendingSyncs: state.pendingSyncs.length,
              hasEmail: !!state.email
            });
            
            // Auto-retry pending syncs ONLY when coming online
            if (wasOffline && state.pendingSyncs.length > 0 && state.email) {
              console.log('🌐 NETWORK: Back online - scheduling retry of pending syncs');
              setTimeout(() => {
                console.log('🌐 NETWORK: Executing pending sync retry');
                get().retryPendingSyncs();
              }, 1000);
            }
          });
        },

        syncOnAppLoad: async () => {
          const state = get();
          if (!state.email || !state.isOnline) {
            console.log('🔄 APP LOAD: Cannot sync - missing email or offline');
            return;
          }

          try {
            console.log('🔄 APP LOAD: Local state BEFORE sync:', state.performanceData);
            
            const response = await fetch(`/api/performance?email=${state.email}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const serverData = await response.json();
            console.log('🔄 APP LOAD: Server data:', serverData.performanceData);

            // COMPLETE SYNC: Merge server data with local, adding any missing modules
            set((state) => {
              const serverModules = serverData.performanceData || [];
              const localModules = state.performanceData || [];
              
              // Create a map of local modules for easy lookup
              const localModuleMap = new Map();
              localModules.forEach(module => {
                localModuleMap.set(module.moduleId, module);
              });
              
              // Merge strategy: for each server module, use server data if it's more recent/complete
              // OR if the module doesn't exist locally
              const mergedPerformanceData = serverModules.map((serverModule: ModulePerformance) => {
                const localModule = localModuleMap.get(serverModule.moduleId);
                
                if (!localModule) {
                  // Module exists only on server - add it
                  return serverModule;
                }
                
                // Module exists in both - use the one with higher progress
                if (serverModule.scenariosCompleted > localModule.scenariosCompleted) {
                  return serverModule;
                }
                
                // Local has same or better progress - keep local
                return localModule;
              });
              
              // Update the state with the merged data
              state.performanceData = mergedPerformanceData;
            });

            // POSITIONING LOGIC - remains the same
            const { performanceData, currentModule, pickUpAndPutDown } = get();
            
            if (!performanceData || performanceData.length === 0) return;

            // Get the most recently updated module that's still in progress
            const modulesInProgress = performanceData
              .filter(module => module.scenariosCompleted > 0 && module.scenariosCompleted < 50)
              .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());

            if (modulesInProgress.length > 0) {
              const latestModule = modulesInProgress[0];
              const nextScenarioId = latestModule.scenariosCompleted + 1;
              
              console.log('🔄 POSITIONING: Moving to scenario', nextScenarioId, 'in module', latestModule.moduleId);

              set((state) => {
                state.currentModule = latestModule.moduleId.toString();
                const moduleKey = latestModule.moduleId.toString();
                if (!state.pickUpAndPutDown[moduleKey]) {
                  state.pickUpAndPutDown[moduleKey] = { currentScenario: null };
                }
                state.pickUpAndPutDown[moduleKey].currentScenario = {
                  scenarioId: nextScenarioId,
                  userRankings: {},
                  expertRankings: {},
                  userRankingDirections: { 'A': true, 'B': true, 'C': true },
                  isRevealed: false,
                  shouldComplete: false,
                };
              });
            }
            
          } catch (error) {
            console.warn('🔄 APP LOAD: Sync failed:', error);
          }
        },

        syncPerformanceToServer: async () => {
          const state = get();
          console.log('📡 SYNC: syncPerformanceToServer called', { 
            email: state.email,
            isOnline: state.isOnline,
            pendingSyncs: state.pendingSyncs.length
          });

          if (!state.email) {
            console.log('📡 SYNC: Cannot sync - email is null in store');
            return;
          }

          try {
            console.log('📡 SYNC: Starting sync to server with performanceData length:', state.performanceData.length);
            console.log('performanceData:',state.performanceData);
            const response = await fetch('/api/performance', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                performanceData: state.performanceData,
                email: state.email,
                timestamp: new Date().toISOString()
              }),
            });
            
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${await response.text()}`);
            }
            
            const result = await response.json();
            console.log('📡 SYNC: Sync successful:', result);
            
            set((state) => {
              state.lastSuccessfulSync = new Date().toISOString();
              const beforeClear = state.pendingSyncs.length;
              // Clear only successful syncs
              state.pendingSyncs = state.pendingSyncs.filter(sync => 
                !(sync.type === 'performance_update' && sync.email === state.email)
              );
              const afterClear = state.pendingSyncs.length;
              console.log('📡 SYNC: Cleared pending syncs', { beforeClear, afterClear });
            });
            
          } catch (error) {
            console.warn('📡 SYNC: Sync failed:', error);
            set((state) => {
              // Only add to pending syncs if we're offline
              if (!state.isOnline) {
                console.log('📡 SYNC: Offline - adding to pending syncs');
                const newSync: PendingSync = {
                  id: Math.random().toString(36),
                  type: 'performance_update' as const,
                  timestamp: new Date().toISOString(),
                  data: state.performanceData,
                  email: state.email!,
                  retryCount: 0
                };
                state.pendingSyncs.push(newSync);
                console.log('📡 SYNC: Added to pending syncs:', newSync);
                console.log('📡 SYNC: Total pending syncs now:', state.pendingSyncs.length);
              } else {
                console.log('📡 SYNC: Online but sync failed - not adding to pending syncs');
              }
            });
          }
        },

        syncPerformanceFromServer: async () => {
          const state = get();
          
          if (!state.email || !state.isOnline) {
            console.log('STORE: Cannot fetch - missing email or offline');
            return;
          }

          try {
            console.log('STORE: Fetching performance data from server');
            const response = await fetch(`/api/performance?email=${encodeURIComponent(state.email)}`);
            
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${await response.text()}`);
            }
            
            const serverData = await response.json();
            console.log('STORE: Fetched server data:', serverData);
            
            set((state) => {
              state.performanceData = serverData.performanceData;
              state.lastSuccessfulSync = new Date().toISOString();
            });
          } catch (error) {
            console.warn('STORE: Failed to fetch performance data:', error);
          }
        },

        retryPendingSyncs: async () => {
          const state = get();
          console.log('🔄 RETRY: retryPendingSyncs called', {
            isOnline: state.isOnline,
            hasEmail: !!state.email,
            pendingSyncs: state.pendingSyncs.length
          });
          
          if (state.isOnline && state.email && state.pendingSyncs.length > 0) {
            console.log('🔄 RETRY: Conditions met - executing sync');
            get().syncPerformanceToServer();
          } else {
            console.log('🔄 RETRY: Conditions not met - skipping', {
              isOnline: state.isOnline,
              hasEmail: !!state.email,
              pendingSyncs: state.pendingSyncs.length
            });
          }
        },
      })),
      {
        name: 'pick-up-and-put-down-storage',
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'PickUpAndPutDownStore' }
  )
);