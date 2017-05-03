// @flow
import fetchJSON from '../helpers/fetchJSON';

let PlantingGuideAPI = {
  async getAllPlantingGuide() {
    let errorMessage = 'Failed to get planting guides.';
    let result = await fetchJSON(`/plant-guides`);
    if (result.data && result.data.length > 0) {
      return result.data;
    } else {
      throw new Error(errorMessage);
    }
  },
  async getPlantingGuideDetail(plantDetail: string) {
    let result = await fetchJSON(`/plant-guide?plant_detail=${plantDetail}`);
    if (result.data) {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
};

export default PlantingGuideAPI;
