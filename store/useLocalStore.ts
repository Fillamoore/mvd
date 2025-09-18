import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Simple interface for storing rating values
interface RatingValue {
  value: number | null;
}

// Helper function to create consistent storage keys
const getScenarioKey = (moduleId: number, scenarioId: number) => `${moduleId}-${scenarioId}`;

// Data that resets when user wants to start fresh
const defaultUserProgressState = {
  ratings: {
    'default': {
      A: { value: null },
      B: { value: null },
      C: { value: null },
    },
  },
  revealedScenarios: {},
  currentModuleId: 1,
  currentScenarioIndex: 0,
  userLevel: 'Foundation' as const,
};

// Analytics data that persists across resets
const defaultAnalyticsState = {
  performanceEvents: [],
};

export interface LocalStoreState {
  // User progress state
  ratings: {
    [key: string]: {
      [responseId: string]: RatingValue;
    };
  };
  revealedScenarios: {
    [key: string]: boolean;
  };
  currentModuleId: number;
  currentScenarioIndex: number;
  userLevel: 'Foundation' | 'Intermediate' | 'Advanced';
  
  // Analytics state
  performanceEvents: Array<{
    moduleId: number;
    scenarioId: number;
    userRatings: { [responseId: string]: number | null };
    expertRatings: { [responseId: string]: number };
    timestamp: string;
    score: number;
  }>;
  
  // Basic CRUD operations
  setRating: (moduleId: number, scenarioId: number, responseId: string, value: number | null) => void;
  resetAllProgress: () => void;
  
  setRevealed: (moduleId: number, scenarioId: number, isRevealed: boolean) => void;
  recordPerformanceEvent: (
    moduleId: number, 
    scenarioId: number,
    userRatings: { [responseId: string]: number | null },
    expertRatings: { [responseId: string]: number }
  ) => void;
  clearPerformanceEvents: () => void;
  
  setCurrentModule: (moduleId: number) => void;
  setCurrentScenarioIndex: (index: number) => void;
  setUserLevel: (level: 'Foundation' | 'Intermediate' | 'Advanced') => void;
}

export const useLocalStore = create<LocalStoreState>()(
  persist(
    (set, get) => ({
      ...defaultUserProgressState,
      ...defaultAnalyticsState,

      // Simple value setter
      setRating: (moduleId, scenarioId, responseId, value) =>
        set((state) => {
          const key = getScenarioKey(moduleId, scenarioId);
          return {
            ratings: {
              ...state.ratings,
              [key]: {
                ...(state.ratings[key] || {}),
                [responseId]: { value },
              },
            },
          };
        }),

      resetAllProgress: () => set({
        ...defaultUserProgressState,
      }),
      
      setRevealed: (moduleId, scenarioId, isRevealed) =>
        set((state) => {
          const key = getScenarioKey(moduleId, scenarioId);
          return {
            revealedScenarios: {
              ...state.revealedScenarios,
              [key]: isRevealed,
            },
          };
        }),
      
      recordPerformanceEvent: (moduleId, scenarioId, userRatings, expertRatings) =>
        set((state) => {
          const diffs: number[] = [];
          Object.keys(userRatings).forEach((key) => {
            const userRating = userRatings[key];
            const expertRating = expertRatings[key];
            if (userRating !== null && expertRating !== undefined) {
              diffs.push(Math.abs(userRating - expertRating));
            }
          });
          
          const averageDifference = diffs.reduce((a, b) => a + b, 0) / diffs.length;
          const score = Math.round(100 - (averageDifference / 4) * 100);

          const newEvent = {
            moduleId,
            scenarioId,
            userRatings,
            expertRatings,
            score,
            timestamp: new Date().toISOString(),
          };

          return {
            performanceEvents: [...state.performanceEvents, newEvent],
          };
        }),

      clearPerformanceEvents: () => set({ performanceEvents: [] }),
      
      setCurrentModule: (moduleId) =>
        set({ 
          currentModuleId: moduleId,
          currentScenarioIndex: 0
        }),
      
      setCurrentScenarioIndex: (index) =>
        set({ currentScenarioIndex: index }),

      setUserLevel: (level) =>
        set({ userLevel: level }),
    }),
    {
      name: 'local-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);