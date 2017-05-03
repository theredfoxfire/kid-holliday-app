//@flow
import fetchJSON from '../helpers/fetchJSON';

let NearbyStoreAPI = {
  async getNearbyStore(token: string, lat: number, lon: number, page: number) {
    let result = await fetchJSON(`/getnearbystore?lat=${lat}&lon=${lon}&page=${page}&token=${token}`);
    if (result.result === 'sukses') {
      return result.data;
    } else if (result.message === 'toko terdekat anda tidak tersedia') {
      return [];
    } else {
      throw new Error(result.message);
    }
  },
  async getProductsOfStore(token: string, storeID: number, page: number) {
    let result = await fetchJSON(`/productsstores?token=${token}&store_id=${storeID}&page=${page}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error('Fail getting producs of store!');
    }
  },
  async getStoresByProduct(productID: number, lat: number, lon: number) {
    let result = await fetchJSON(`/nearbystoresbyproduct?product_id=${productID}&latitude=${lat}&longitude=${lon}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
};

export default NearbyStoreAPI;
