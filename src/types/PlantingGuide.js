export type PlantingGuideDetail = {
  plantTypeID: number;
  plantingDetailName: string;
  htmlValue: string;
};

export type PlantingGuide = {
  plantTypeID: number;
  plantingDetailName: string;
};

export type PlantingGuideState = {
  plantingGuides: Array<PlantingGuide>;
  fetchedPlantingGuideDetails: Map<PlantingGuideDetail>;
};
