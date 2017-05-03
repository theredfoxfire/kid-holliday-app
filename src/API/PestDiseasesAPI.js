// @flow
import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';

type PlantProductForm = {
  plant_id: string;
  product_id: string;
};

type CommentProductForm = {
  rating: string;
  post: string;
  id_review: ?string;
  id_product: string;
};

let PestDiseasesAPI = {
  async getDiseasesByPage(page: string) { // page consist of 8
    let result = await fetchJSON(`/diseases?page=${page}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPestsByPage(page: string) {
    let result = await fetchJSON(`/pests?page=${page}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async searchPestDisease(category: string, query: string) {
    let result = await fetchJSON(`/searchpestdisease?category=${category}&q=${query}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getCommodityPestDiseases(category: string) { // category is hama | penyakit
    let result = await fetchJSON(`/commoditypestdisease?category=${category}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async filterPestDiseases(category: string, commodityID: string, page: string) {
    // category is the same and commodity came from get commoditypestdisease
    // page is used for scrolling
    let result = await fetchJSON(`/filterpestdisease?commodity_id=${commodityID}&category=${category}&page=${page}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
  async getPestDetail(pestID: string) {
    let result = await fetchJSON(`/pests/${pestID}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error('Hama Tidak ditemukan!');
    }
  },
  async getDiseaseDetail(diseaseID: string) {
    let result = await fetchJSON(`/diseases/${diseaseID}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error('Penyakit tidak ditemukan!');
    }
  },
  getProductDetail(token: string, productID: string) {
    return fetchJSON(`/detailproductsaranatani?id=${productID}&token=${token}`);
  },
  getMyplantForProduct(token: string, productID: string) {
    return fetchJSON(`/myplantforproduct?product_id=${productID}&token=${token}`);
  },
  getProductReviews(token: string, productID: string, page: string) {
    return fetchJSON(`/reviewsproduct?product_id=${productID}&page=${page}`);
  },
  addPlantProduct(token: string, plantProductData: PlantProductForm) {
    let urlEncoded = formatUrlEncoded(plantProductData);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/addplanttoproduct?token=${token}`, options);
  },
  addCommentProduct(token: string, commentProductData: CommentProductForm) {
    let urlEncoded = formatUrlEncoded(commentProductData);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/storecommentproduct?token=${token}`, options);
  },
};

export default PestDiseasesAPI;
