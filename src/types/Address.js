//@flow

type Options = {
  value: string;
  label: string;
};

export type AddressOptions = {
  province: Options;
  city: Options;
  district: Options;
  village: Options;
};

export type TempProfileAddress = {
  province: {
    provinceName: string;
    province: number;
    allProvinceData: Array<{value: string; label: string}>;
  };
  city: {
    cityName: string;
    city: number;
    allCitiesData: Array<{value: string; label: string}>;
  };
  fullAddress: string;
};
