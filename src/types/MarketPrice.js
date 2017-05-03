//@flow
import type {NationalPriceInfo, ProvincePriceInfo, CommodityPriceInfo} from './Price';
export type MarketPrice = {
  nationalPriceInfo: NationalPriceInfo;
  provincePriceInfo: ProvincePriceInfo;
  commodityPriceInfo: CommodityPriceInfo;
  currentDate: string;

  activeCommodity: string;
  activeProvince: string;

  provinces: Array<string>;
  commodities: Array<string>;
};
