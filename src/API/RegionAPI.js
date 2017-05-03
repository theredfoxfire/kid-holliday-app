// @flow
import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import {GOOGLE_MAPS_API} from '../constants/defaultServerAPIUrl';
import {GOOGLE_GEOCODING_KEY} from '../constants/keys';

let RegionAPI = {
  getProvince() {
    return fetchJSON(`/getprovinces`);
  },
  getCities(provinceID: string) {
    let urlEncoded = formatUrlEncoded({province_id: provinceID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/getcities`, options);
  },
  getSubDistricts(cityID: string) {
    let urlEncoded = formatUrlEncoded({city_id: cityID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/getsubdistricts`, options);
  },
  getVillages(subDistrictID: string) {
    let urlEncoded = formatUrlEncoded({subdistrict_id: subDistrictID});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/getvillages`, options);
  },
  async getFullAddress(longitude: number, latitude: number) {
    let response = await fetch(`${GOOGLE_MAPS_API}/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_GEOCODING_KEY}`);
    let result = await response.json();
    if (result.status === 'OK') {
      return result.results;
    } else {
      throw new Error(result.status);
    }
  },
};

export default RegionAPI;
