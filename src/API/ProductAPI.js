// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';

let productAPI = {
  async postPlantForProduct(token: string, plantID: Array<number>, productID: number) {
    let urlEncoded = formatUrlEncoded({
      product_id: productID,
    });
    plantID.forEach((id) => {
      urlEncoded += '&' + formatUrlEncoded({
        'plant_id[]': id,
      });
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/addplanttoproduct?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.result;
    } else {
      throw new Error(result.message);
    }
  },
  async getPlantForProduct(productID: number | string, token: string) {
    let result = await fetchJSON(`/myplantforproduct?product_id=${productID}&token=${token}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getReviewsProduct(productID: number | string, page: number) {
    let result = await fetchJSON(`/reviewsproduct?product_id=${productID}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getProductDetail(productID: number | string, token: string) {
    let result = await fetchJSON(`/detailproductsaranatani?id=${productID}&token=${token}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async postReviewProduct(token: string, productID: number, rating: number, post: string) {
    let urlEncoded = formatUrlEncoded({
      id_produk: productID,
      rating,
      post,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/storecommentproduct?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async updateReviewProduct(token: string, productID: number, reviewID: number, post: string, rating: number) {
    let urlEncoded = formatUrlEncoded({
      id_review: reviewID,
      rating,
      post,
      id_produk: productID,
    });
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    let result = await fetchJSON(`/storecommentproduct?token=${token}`, options);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getProductPest(pestID: string) {
    let result = await fetchJSON(`/productpest?pest_id=${pestID}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error('Produk Belum Tersedia');
    }
  },
  async getProductDisease(diseaseID: string) {
    let result = await fetchJSON(`/productdisease?disease_id=${diseaseID}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error('Produk Belum Tersedia');
    }
  },
  async getProductOfPlant(plantID: number, token: string) {
    let result = await fetchJSON(`/productofplant?token=${token}&plant_id=${plantID}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error('Tidak ada Produk yang tersedia');
    }
  },
  async getAllProductList(productCategory: string, page: number) {
    let result = await fetchJSON(`/allproductinfo?category_id=${productCategory}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getFilteredProductList(productCategory: string, subCategory: string, page: number) {
    let result = await fetchJSON(`/filterproductinfo?category_id=${productCategory}&subcategory_id=${subCategory}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getSearchedProductList(productCategory: string, searchKey: string, page: number) {
    let result = await fetchJSON(`/searchproduct?category_id=${productCategory}&q=${searchKey}&page=${page}`);
    if (result.result === 'sukses') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  },
  async getProductDropdown(productCategory: string) {
    let result = await fetchJSON(`/subcategoryproduct?product_category_id=${productCategory}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error(result.message);
    }
  },
};

export default productAPI;
