// @flow
import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';

let SaranaTaniAPI = {
  storeMobileActivity(token: string, page: string) {
    let urlEncoded = formatUrlEncoded({page: page});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/storemobileactivity?token=${token}`, options);
  },
  getAllProductHighlightInfo(categoryID: string) {
    return fetchJSON(`/allproducthighlightinfo?category_id=${categoryID}`);
  },
  getAllProductPopulerInfo(categoryID: string) {
    return fetchJSON(`/allproductpopulerinfo?category_id=${categoryID}`);
  },
  getAllProductNewInfo(categoryID: string) {
    return fetchJSON(`/allproductnewinfo?category_id=${categoryID}`);
  },
  getDetailProduct(token: string, productID: string) {
    return fetchJSON(`/detailproductsaranatani?id=${productID}&token=${token}`);
  },
  getReviewsProduct(page: string, productID: string) {
    return fetchJSON(`/reviewsproduct?id=${productID}&page=${page}`);
  },
};

export default SaranaTaniAPI;
