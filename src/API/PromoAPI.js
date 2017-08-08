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

const PromoAPI = {
  async promoList(): Promise<FetchReturn> {
    return await fetchJSON(`/promo.php?act=list`);
  },
  async promoDetails(id: string): Promise<FetchReturn> {
    return await fetchJSON(`/promo.php?act=detail&id=${id}`);
  },
};

export default PromoAPI;
