export type PlantOptions = {
  value: string;
  label: string;
};

export type NewPlantState = {
  plantTypes: Array<PlantOptions>;
  plantCategories: Array<PlantOptions>;
  plantVarieties: Array<PlantOptions>;
  plantingMethods: Array<PlantOptions>;
  plantingRecommendation: string;
};

export type SelectedNewPlantState = {
  plantType: PlantOptions;
  plantCategory: PlantOptions;
  plantVariant: PlantOptions;
  plantingMethod: PlantOptions;
  fieldAltitude: PlantOptions;
  plantingPhase: PlantOptions;
};
