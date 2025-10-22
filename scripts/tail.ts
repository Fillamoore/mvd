
console.log('=== SCENARIOS CONTENT DEBUGGING ===');
console.log('Total modules in SCENARIOS_CONTENT:', SCENARIOS_CONTENT.length);

// Parse the JSON content and cache scenarios by module
const scenariosCache = new Map<number, Scenario[]>();

SCENARIOS_CONTENT.forEach(moduleContent => {
  console.log(`\n--- Processing Module ${moduleContent.module_id}: ${moduleContent.title} ---`);
  console.log('Content body type:', typeof moduleContent.content_body);
  console.log('Content body length:', moduleContent.content_body.length);
  console.log('First 200 chars of content_body:', moduleContent.content_body.substring(0, 200));
  
  try {
    const scenariosData: any[] = JSON.parse(moduleContent.content_body);
    console.log(`✅ Successfully parsed JSON for module ${moduleContent.module_id}`);
    console.log('Parsed scenarios data type:', typeof scenariosData);
    console.log('Number of scenarios in module:', scenariosData.length);
    
    if (scenariosData.length > 0) {
      console.log('First scenario sample:', {
        id: scenariosData[0].scenarioId || scenariosData[0].id,
        title: scenariosData[0].title,
        hasResponses: !!scenariosData[0].responses,
        responsesCount: scenariosData[0].responses?.length
      });
    }
    
    const scenarios: Scenario[] = scenariosData.map((data, index) => {
      const scenarioId = data.scenarioId || data.id;
      console.log(`  Scenario ${index + 1}:`, {
        scenarioId,
        title: data.title,
        responsesCount: data.responses?.length
      });
      
      return {
        id: scenarioId,
        moduleId: moduleContent.module_id,
        title: data.title,
        prompt: data.prompt,
        responses: data.responses,
        overall: data.overall,
        takeAway: data.takeAway
      };
    });
    
    scenariosCache.set(moduleContent.module_id, scenarios);
    console.log(`✅ Cached ${scenarios.length} scenarios for module ${moduleContent.module_id}`);
    
  } catch (error) {
    console.error(`❌ Error parsing scenarios for module ${moduleContent.module_id}:`, error);
    console.log('Content body that failed to parse:', moduleContent.content_body);
    scenariosCache.set(moduleContent.module_id, []);
  }
});

console.log('\n=== SCENARIOS CACHE SUMMARY ===');
console.log('Total modules in cache:', scenariosCache.size);
scenariosCache.forEach((scenarios, moduleId) => {
  console.log(`Module ${moduleId}: ${scenarios.length} scenarios`);
});

// Export functions
export function getAllModules(): ModuleContent[] {
  console.log('getAllModules called, returning', SCENARIOS_CONTENT.length, 'modules');
  return SCENARIOS_CONTENT;
}

export function getModuleById(moduleId: number): ModuleContent | undefined {
  const module = SCENARIOS_CONTENT.find(module => module.module_id === moduleId);
  console.log(`getModuleById(${moduleId}):`, module ? `Found "${module.title}"` : 'NOT FOUND');
  return module;
}

export function getScenariosByModuleId(moduleId: number): Scenario[] {
  const scenarios = scenariosCache.get(moduleId) || [];
  console.log(`getScenariosByModuleId(${moduleId}): returning ${scenarios.length} scenarios`);
  if (scenarios.length > 0) {
    console.log('First scenario:', {
      id: scenarios[0].id,
      title: scenarios[0].title,
      responses: scenarios[0].responses?.length
    });
  }
  return scenarios;
}