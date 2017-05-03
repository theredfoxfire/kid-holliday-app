// @flow

export type MarketPrice = {
  commodity: string;
  prevPrice: number;
  currPrice: number;
};

export type CommodityPrice = {
  date: string;
  price: number;
};

export type NationalPriceInfo = {
  priceList: Array<MarketPrice>;
  currDate: string;
};

export type ProvincePriceInfo = {
  priceList: Array<MarketPrice>;
  provinceName: string;
  currDate: string;
};

export type CommodityPriceInfo = {
  priceList: Array<CommodityPrice>;
  commodityName: string;
};
