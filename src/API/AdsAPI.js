// @flow
import fetchJSON from '../helpers/fetchJSON';

let AdsAPI = {
  getAds() {
    return fetchJSON(`/getads`);
  },
};

export default AdsAPI;
