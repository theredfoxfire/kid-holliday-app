//@flow

import type {GalleryPhoto} from './GalleryPhoto';

export type ProductCategory = {
  id: number | string; // product_subcategory_id
  categoryName: string; // subcategory_name
};

export type Product = {
  id: number; // in the server this is called 'product_id'
  name: string; // in the detail endpoint, this is named 'brand', usual called 'product_name'
  highlight: boolean;
  description: ?string; // in the server it's called 'desc'
  photo: ?ImageSource; // NOTE: the primary photo in 'gallery'
  priceMin: ?number; // in the server it's called 'price_min'
  priceMax: ?number; // in the server it's called 'price_max'
  producerID: number; // NOTE: in the server this field is named 'userID'
  producerName: string; // in the server it's called 'produsen_name'
  producerAddress: ?string; // in the server it's called 'produsen_address'
  producerProvince: ?string; // in the server it's called 'province'
  producerCity: ?string; // in the server it's called 'city'
  gallery: Array<GalleryPhoto>;
  rate: string; // in the server it's called rating
  reviewCount: number; // in the server it's called count_comment
  new: boolean;
  popular: boolean;
  pestID?: number;
  diseaseID?: number;
  plantID?: number;
  productID?: number;
  storeID?: number;
};

export type Pesticide = {
  formulations: string;  // pesticide_formulations
  color: string; // pesticide_color
  purity: string;  // pesticide_purity
  toxicType: string; // pesticide_toxix_type
  licenseNumber: string; // pesticide_license_number
  type: string; // pesticide_pesticide
  description: string; // pesticide_desc
  howToUse: string; // pesticide_how_app
  packing: string; // pesticide_packing
  dose: string; // pesticide_dose
  procedure: string; // pesticide_procedure
  commodity: string; // pesticide_commodity
  pest: string; // pesticide_pest
  materials: string; // pesticide_materials
};
export type Seed = {
  variety: string; // seeds_variety
  recomendation: string;  // seeds_recomendation
  sprout: number; // seeds_sprout
  purity: string; // seeds_purity
  licenseNumber: string; // seeds_license_number
  age: number; // seeds_age
  weight: number; // seeds_weight
  durability: string; // seeds_durability
  potency: string; // seeds_potency
  netto: string; // seeds_netto
  plantType: string; // seeds_plant_type_name
};
export type Fertilizer = {
  composition: string; // fert_composition
  purity: string;  // fert_purity
  classification: string;  // fert_classification
  color: string; // fert_color
  licenseNumber: string; // fert_license_number
  group: string; // fert_group
  excellence: string;  // fert_excellence
  howToUse: string;  // fert_how_app
  dose: string;  // fert_dose
  procedure: string; // fert_procedure
  netto: string; // fert_netto
  warning: string; // fert_warning
};
// NOTE: I couldn't find any equipment product, so the Equipment type may be inaccurate
export type Equipment = {
  sniISO: string; // eq_sni_iso
  type: string; // eq_type_product
  classification: string; // eq_classification
  category: string; // eq_cat_product
  dimension: string; // eq_dimention
  howToUse: string; // eq_how_app
  weight: string; // eq_weight
  materials: string; // eq_materials
  usefulness: string; // eq_usefulness
  warning: string; // eq_warning
};

export type ProductDetail = Product & {
  reviews: Array<Review>;
  // ProductCategory in server is called: product_cat
  productCategory: string; // bibit, pupuk, pestisida, peralatan; use this to determine which property to get the data from
  pesticide: Pesticide;
  seed: Seed;
  fertilizer: Fertilizer;
  equipment: Equipment;
};
export type Review = {
  id: number;
  userID: number; // user_id
  productID: number; // product_id
  review: string;
  createdAt: string; // created_at
  rate: string;
  firstName: string; // first_name
  avatar: ?ImageSource;
  avatarFB: ?ImageSource; // avatar_fb
  premium: boolean;
};
export type ProductState = {
  allId: Array<number>;
  byHighlight: Array<number>;
  byPopularity: Array<number>;
  byLatest: Array<number>;
};
export type ProductPayload = ProductState & {
  allProducts: Array<Product>;
};
