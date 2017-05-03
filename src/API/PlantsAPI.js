// @flow

import fetchJSON from '../helpers/fetchJSON';
import type {GalleryData, PlantForm, SharePlant} from '../types/Plant';
import formatUrlEncoded from '../helpers/formatUrlEncoded';

let PlantsAPI = {
  async getAllPlant(token: string, page: number) {
    let result = await fetchJSON(`/plants?token=${token}&page=${page}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async searchPlant(token: string, keyword: string) {
    let result = await fetchJSON(`/searchmyplant?token=${token}&key=${keyword}`);
    if (result.result === 'sukses') {
      return result.data;
    } else if (result.message === 'tanaman yang anda cari tidak ada') {
      return [];
    } else {
      throw new Error(result.message);
    }
  },
  getPlantForCostAnalytic(token: string) {
    return fetchJSON(`/plantforcostanalytic?token=${token}`);
  },
  async getPlantingInfo(token: string, plantID: string) {
    let result = await fetchJSON(`/plantinginformation/${plantID}?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantProduct(token: string, plantID: string) {
    let result = await fetchJSON(`/productofplant?plant_id=${plantID}&token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantDetail(token: string, plantID: string) {
    let result = await fetchJSON(`/plantdetail/${plantID}?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantGalleries(token: string, plantID: string) {
    let result = await fetchJSON(`/plantgalleries/${plantID}?token=${token}`);
    if (result.result === 'sukses' && result.message.length !== 0) {
      return result.message;
    } else {
      return [];
    }
  },
  addGalleryPlants(token: string, galleryData: GalleryData) {
    let {tempImage} = galleryData;
    let formData = new FormData();
    if (tempImage) {
      formData.append('photo', {
        uri: tempImage.uri,
        name: tempImage.fileName,
        type: tempImage.type,
      });
    }
    formData.append('id_tanaman', galleryData.id_tanaman);
    formData.append('token', token);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
    return fetchJSON(`/plantaddgallery?token=${token}`, options);
  },
  async updateGalleryPlants(token: string, galleryData: GalleryData) {
    let {tempImage} = galleryData;
    let formData = new FormData();
    if (tempImage) {
      formData.append('photo', {
        uri: tempImage.uri,
        name: tempImage.fileName,
        type: tempImage.type,
      });
    }
    formData.append('id_tanaman', galleryData.plantID);
    formData.append('token', token);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
    let result = await fetchJSON(`/updategaleryplants?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantVarieties(token: string, categoryPlantID: string, typePlantID: string) {
    let result = await fetchJSON(`/plantvarieties?type_plant_id=${typePlantID}&cat_plant_id=${categoryPlantID}&token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantingRecommendation(token: string, typePlantID: string, categoryPlantID: string, variantPlantID: string, fieldAltitude: string) {
    let result = await fetchJSON(`/plantformulationplanting?plant_type_id=${typePlantID}&plant_cat_id=${categoryPlantID}&plant_var_id=${variantPlantID}&height=${fieldAltitude}&token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantCategories(token: string, typePlantID: string) {
    let result = await fetchJSON(`/plantcategories?type_plant_id=${typePlantID}&token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantingMethods(token: string, categoryPlantID: string, typePlantID: string) {
    let result = await fetchJSON(`/getsystemplant?plant_type_id=${typePlantID}&plant_cat_id=${categoryPlantID}&token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getTypePlant() {
    let result = await fetchJSON(`/gettypeplants`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async addNewPlant(token: string, plant: PlantForm) {
    let formData = new FormData();
    let fieldNames = [
      'email', 'plant_id', 'plant_cat_id', 'plant_var_id', 'plant_ph', 'plant_recomend',
      'plant_date', 'plant_area', 'plant_unit', 'plant_desc', 'plant_system', 'plant_fase',
      'plant_height', 'plant_location', 'plant_long', 'plant_lat', 'province', 'city',
      'subdistrict', 'village', 'plant_address_gps',
    ];
    for (let fieldName of fieldNames) {
      formData.append(fieldName, plant[fieldName] ? plant[fieldName] : '');
    }
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    };
    let result = await fetchJSON(`/plantstore?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async deletePlant(token: string, plantID: number) {
    let urlEncoded = formatUrlEncoded({
      plant_id: plantID,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/deleteplant?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async sharePlantToForum(token: string, share: SharePlant) {
    let urlEncoded = formatUrlEncoded({
      plant_id: share.plantID,
      category_id: share.categoryID,
      subcategory_id: share.subCategoryID,
      forum_slug: 'petani',
      title: share.title,
      desc: share.description,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/shareplanttoforum?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
};

export default PlantsAPI;
