// store/useLocalStore.test.ts
import { useLocalStore } from './useLocalStore';

// Mock localStorage for persist middleware
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useLocalStore', () => {
  beforeEach(() => {
    // Clear all mocks and reset store state
    localStorageMock.clear();
    useLocalStore.setState(useLocalStore.getInitialState());
  });

  test('setRating should update ratings', () => {
    const { setRating } = useLocalStore.getState();
    setRating(1, 1, 'A', 5);
    
    const ratings = useLocalStore.getState().ratings;
    expect(ratings['1-1']?.A?.value).toBe(5);
  });

  test('setRevealed should update revealedScenarios', () => {
    const { setRevealed } = useLocalStore.getState();
    setRevealed(1, 1, true);
    
    const revealedScenarios = useLocalStore.getState().revealedScenarios;
    expect(revealedScenarios['1-1']).toBe(true);
  });

  test('recordPerformanceEvent should add event to performanceEvents', () => {
    const { recordPerformanceEvent } = useLocalStore.getState();
    const userRatings = { A: 3, B: 4, C: 5 };
    const expertRatings = { A: 4, B: 5, C: 3 };
    
    recordPerformanceEvent(1, 1, userRatings, expertRatings);
    
    const performanceEvents = useLocalStore.getState().performanceEvents;
    expect(performanceEvents).toHaveLength(1);
    expect(performanceEvents[0].moduleId).toBe(1);
    expect(performanceEvents[0].score).toBeDefined();
  });

  test('resetAllProgress should reset user progress but keep performanceEvents', () => {
    // First set some state
    const { setRating, setRevealed, recordPerformanceEvent, resetAllProgress } = useLocalStore.getState();
    setRating(1, 1, 'A', 5);
    setRevealed(1, 1, true);
    recordPerformanceEvent(1, 1, { A: 5 }, { A: 4 });
    
    resetAllProgress();
    
    const state = useLocalStore.getState();
    expect(state.ratings['1-1']).toBeUndefined(); // Cleared
    expect(state.revealedScenarios['1-1']).toBeUndefined(); // Cleared
    expect(state.performanceEvents).toHaveLength(1); // Kept
  });
});