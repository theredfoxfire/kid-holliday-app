// @flow

import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';

const MarketPriceAPI = {
  marketPriceByCity(city: string) {
    let urlEncoded = formatUrlEncoded({city});
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/marketpricebycity`, options);
  },

  nationalMarketPrice() {
    return fetchJSON(`/nationalmarketprice`);
  },
  cityMarketPrice() {
    return fetchJSON(`/citymarketprice`);
  },
  defaultMarketPrice() {
    return fetchJSON(`/defaultmarketprice`);
  },
  comodity() {
    return fetchJSON(`/comodity`);
  },
  marketpricemonth(commodityName: string) {
    return fetchJSON(`/marketpricemonth?comodity=${commodityName}`);
  },
};

export default MarketPriceAPI;
