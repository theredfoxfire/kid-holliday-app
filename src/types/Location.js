import type {Option} from '../core-ui/Dropdown';

export type Coordinates = {
  longitude: ?number;
  latitude: ?number;
};

export type Location = {
  provinceID?: number;
  province: string;
  cityID?: number;
  city: string;
  subdistrictID?: number;
  subdistrict: string;
  villageID?: number;
  village: string;
};


export type GPSAddress = {
  province: string;
  city: string;
  subdistrict: string;
  village: string;
  fullAddress: string;
  lat: string;
  long: string;
};

export type LocationState = {
  gpsAddress: GPSAddress;
  provinceList: Array<Option>;
  cityList: Array<Option>;
  subDistrictList: Array<Option>;
  villageList: Array<Option>;
};
