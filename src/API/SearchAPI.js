// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import SERVER_API from '../constants/defaultServerAPIUrl';

type Authentication = {
  email: string;
  password: string;
};

type FetchReturn = {
  data?: Object;
  result: string;
  message: Object | string | Array<Object>;
};

const SearchAPI = {
  searchName(name: string): Promise<FetchReturn> {
    return fetchJSON(`/search_area_new.php?act=search&name=${name}`);
  },
};

export default SearchAPI;
