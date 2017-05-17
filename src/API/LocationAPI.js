// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import SERVER_API from '../constants/defaultServerAPIUrl';

type FetchReturn = {
  data?: Object;
  result: string;
  message: Object | string | Array<Object>;
};

const LocationAPI = {
  async provinceList(): Promise<FetchReturn> {
    return await fetchJSON(`/search_area.php?act=prop`);
  },
  async cityList(province: string): Promise<FetchReturn> {
    return await fetchJSON(`/search_area.php?act=city&prop_id=${province}`);
  },
};

export default LocationAPI;
