// src/store/data/initial-data.ts

import type { PickUpAndPutDownStore } from '../store/useLocalStore';

export const initialData: Partial<PickUpAndPutDownStore> = {
  pickUpAndPutDown: {
    '1': {
      completedScenarios: [],
      currentScenario: {
        scenarioId: 1,
        userRatings: {},
        userRatingDirections: {
          'A': true,
          'B': true,
          'C': true,
        },
        isRevealed: false,
        dateStarted: new Date().toISOString(),
        dateCompleted: undefined,
      },
    },
  },
  currentModule: '1',
};