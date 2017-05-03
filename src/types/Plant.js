// @flow

import type {CapturedImage} from './User';
export type PlantHeader = {
  id: number;
  plantName: string; // plant_name
  plantCategory: string; // plant_category_name
  plantVariant: string; // plant_varieties_name
  plantAddressGps: string; // plant_address
  photo: ImageSource; // foto
  photoThumb: ImageSource; // foto_thumb
  provinceName: string; // province_name
  cityName: string; // city_name
  subdistrictName: string; //subdistrict_name
  villageName: string; //village_name
  status: string; // status
};

export type SharePlant = {
  plantID: number;
  categoryID: number;
  subCategoryID: number;
  forumSlug: string;
  title: string;
  description: string;
};

export type PlantForm = {
  email: string;
  plant_id: number;
  plant_cat_id: number;
  plant_var_id: number;
  plant_ph: string;
  plant_recomend: string;
  plant_date: string;
  plant_area: number;
  plant_unit: string;
  plant_desc: string;
  plant_system: number;
  plant_fase: number;
  plant_height: string;
  plant_location: string;
  plant_long: ?string;
  plant_lat: ?string;
  province: ?string;
  city: ?string;
  subdistrict: ?string;
  village: ?string;
  plant_address_gps: ?string;
  photo?: ImageData;
};

type Suggestion = {
  suggestionName: ?string; // NOTE: in the server this field is named 'name'
  suggestions: Array<string>;
  daysAfterPlanting: ?string; // NOTE: in the server this field is named 'hst'
};

export type PhaseSuggestion = {
  phaseDescription: string; // NOTE: in the server this field is named 'desc'
  phaseSuggestions: Array<Suggestion>; // NOTE: in the server this is suggest
  nextPhaseTime: string; // NOTE: in the server this field is named 'time'
};

export type Plant = {
  id: number;
  userID: number;
  plantID: number;
  date?: string;
  type: ?string; // example data ("example") or not ("", will be converted to null)
  plantName: string;
  plantCategoryID: number;
  plantCategory: string; // NOTE: in the server this field is named 'plant_category_name'
  plantVariantID: number;
  plantVariant: string; // NOTE: in the server this field is named 'plant_varieties_name'
  plantingMethod: string; // NOTE: in the server this field is named 'cropping_system'
  plantDate: string; // 2016-11-03
  area: number;
  unit: string;
  description: ?string;
  provinceID: number; // NOTE: in the server this field is named 'province'
  cityID: number; // NOTE: in the server this field is named 'city'
  subdistrictID: number; // NOTE: in the server this field is named 'subdistrict'
  villageID: number; // NOTE: in the server this field is named 'village'
  photo: ?ImageSource; // NOTE: in the server this is foto
  photoThumb: ?ImageSource; // NOTE: in the server this is foto_thumb
  seedID: ?number; // null
  watering: ?string; // null
  landType: ?string; // null NOTE: in the server this field is named 'type_land'
  fertility: ?string; // null
  usingSeedBed: ?boolean; // null NOTE: in the server this field is named 'using_persemian'
  landHeight: string; // NOTE: in the server this field is named 'height_land'
  longitude: string;
  latitude: string;
  status: string;
  soilPH: string;
  plantPhase: string;
  plantAddressGps: string;
  isTemporaryVariety: boolean;
  tempPhase: string;
  provinceName: ?string; // null
  cityName: ?string; // null
  subdistrictName: ?string; // null
  villageName: ?string; // null
  seedName: ?string; // null
  disclaimer: string;
  plantAge: string;
  soilReaction: string; // NOTE: in the server this field is named 'reaction'
  dolomiteRequirement: string; // NOTE: in the server this field is named 'dolomit'
};

export type PlantDetail = Plant & {
  harvestDate: string; // NOTE: in the server this field is named 'estimates'
  harvestPotential: number; // NOTE: in the server this field is named 'potential'
  plantSystem: number; // NOTE: I have no idea what it is or what it's for
  isSeedBed: boolean; // NOTE: a duplicate of 'usingSeedBed' a.k.a 'using_persemian'
  phase: PhaseSuggestion & {
    seedBed: PhaseSuggestion;
  };
};

export type PlantPhoto = {
  id: number;
  plantID: number; // NOTE: in the server this field is named 'plants_id'
  photo: ImageSource;
  photoThumb: ImageSource; // NOTE: in the server this field is named 'img_thumb'
  status: boolean; // whether this photo is the main photo (if true use photo instead of photoThumb)
  createdAt: string; // 2016-11-11 13:50:05
};

export type PlantDetailWithPhotos = PlantDetail & {
  photos: Array<PlantPhoto>;
};

export type GalleryData = {
  photo: string;
  id_tanaman?: string | number;
  plantID: string | number;
  tempImage?: CapturedImage;
};

export type PlantingInformation = {
  id: number;
  seedRequirement: string;
  manureRequirement: string;
  chemicalRequirement: string;
  simplePlanting: string;
  landElevation: string; // difference with landHeight, this: 'x m above sea level'
  temperature: string;
  weather: ?string; // NOTE: so far this is always null
  rainfallRate: string;
  productionResult: string;
  pestsAndDiseasesInfo: string;
};
