// lib/scenarioUtils.ts

export function calculateTileScore(moduleData: {
  completedScenarios: { score: number }[];
}): number {
  if (!moduleData || moduleData.completedScenarios.length === 0) return 0;

  const totalScore = moduleData.completedScenarios.reduce(
    (sum, scenario) => sum + scenario.score,
    0
  );

  return totalScore / moduleData.completedScenarios.length;
}
