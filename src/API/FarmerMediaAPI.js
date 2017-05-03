//@flow
import fetchJSON from '../helpers/fetchJSON';

type ProductCategory = 'bibit' | 'pupuk' | 'pestisida' | 'alat-alat-pertanian';

export default {
  async fetchProductHighlight(commodity: ProductCategory) {
    const PRODUCT_HIGHLIGHTS_API = `/allproducthighlightinfo?category_id=${commodity}`;
    let response = await fetchJSON(PRODUCT_HIGHLIGHTS_API);
    return handleEmptyResponse(response);
  },
  async fetchPopularProduct(commodity: ProductCategory) {
    const POPULAR_PRODUCTS_API = `/allproductpopulerinfo?category_id=${commodity}`;
    let response = await fetchJSON(POPULAR_PRODUCTS_API);
    return handleEmptyResponse(response);
  },
  async fetchNewProduct(commodity: ProductCategory) {
    const NEW_PRODUCTS_API = `/allproductpopulerinfo?category_id=${commodity}`;
    let response = await fetchJSON(NEW_PRODUCTS_API);
    return handleEmptyResponse(response);
  },
};

function handleEmptyResponse(response) {
  if (response.result === 'gagal') {
    // throw new Error('No product from server.');
    return {message: []};
  } else {
    return response;
  }
}
