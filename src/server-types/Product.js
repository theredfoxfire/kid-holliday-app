// @flow

import {
  object, partialObject, sequence, maybe, oneOf,
  string, number, boolean,
} from 'validated/schema';
import {validate} from 'validated/object';

import type {JSONValue} from './JSONValue';

let photoSchema = object({
  photo: string,
  photo_thumb: string,
  primary: boolean,
});

let gallerySchema = object({
  message: string,
  data: sequence(photoSchema),
});

let reviewSchema = object({
  id: number,
  user_id: number,
  product_id: number,
  review: string,
  created_at: string,
  updated_at: string,
  rate: string,
  first_name: string,
  avatar: maybe(string),
  avatar_fb: maybe(string),
  premium: boolean,
});

let reviewListSchema = object({
  message: string,
  data: sequence(reviewSchema),
});

let productListItemSchema = object({
  product_id: number,
  highlight: boolean,
  store_id: string,
  user_id: number,
  product_name: string,
  price_min: maybe(number),
  price_max: maybe(number),
  produsen_name: string,
  produsen_address: maybe(string),
  province: string,
  city: maybe(string),
  subdistrict: string,
  village: string,
  phone: string,
  active_ingredients: string,
  target_pest: string,
  group: string,
  commodity: string,
  desc: string,
  dose: string,
  usage_procedure: string,
  store_email: string,
  store_owner: string,
  created_at: string,
  updated_at: string,
  longitude: string,
  latitude: string,
  distance: string,
  store_profile_pic: string,
  gallery_id: maybe(number),
  product_photo: string,
  gallery: gallerySchema,
  rate: string,
  count_comment: number,
  new: boolean,
  popular: boolean,
});

let productSchema = partialObject({
  id: number,
  user_id: number,
  desc: maybe(string),
  photo_gallery_id: maybe(number),
  created_at: string,
  updated_at: string,
  product_cat: string,
  brand: string,
  pesticide: maybe(string),
  commodity: string,
  pest: string,
  dose: maybe(string),
  procedure: maybe(string),
  price_1: maybe(number),
  price_2: maybe(number),
  view: number,
  slug: string,
  toxix_type: maybe(string),
  how_app: maybe(string),
  highlight: boolean,
  color: maybe(string),
  purity: maybe(string),
  license_number: maybe(string),
  pesticide_formulations: maybe(string),
  packing: maybe(string),
  product_owner: string,
  avatar: maybe(string),
  avatar_fb: maybe(string),
  address: maybe(string),
  province_name: maybe(string),
  city_name: maybe(string),
  product_id: number,
  materials: string,
  plant_type_name: string,
  plant_cat_name: string,
  plant_var_name: string,
  gallery: gallerySchema,
  rating: string,
  count_reviews: number,
  reviews: reviewListSchema,
});

// NOTE: this schema can be used for several endpoints
let farmerMediaProductListSchema = object({
  result: string,
  message: oneOf(string, sequence(productListItemSchema)),
});

let farmerMediaProductByIDResponseSchema = object({
  result: string,
  message: string,
  data: maybe(productSchema),
});

let pesticideSchema = object({
  pesticide_formulations: string,
  pesticide_color: string,
  pesticide_purity: maybe(string),
  pesticide_toxix_type: maybe(string),
  pesticide_license_number: string,
  pesticide_pesticide: string,
  pesticide_desc: string,
  pesticide_how_app: string,
  pesticide_packing: string,
  pesticide_dose: string,
  pesticide_procedure: string,
  pesticide_commodity: string,
  pesticide_pest: string,
  pesticide_materials: string,
});

let seedSchema = object({
  seeds_variety: string,
  seeds_recomendation: string,
  seeds_sprout: oneOf(string, number),
  seeds_purity: string,
  seeds_license_number: string,
  seeds_age: oneOf(string, number),
  seeds_weight: oneOf(string, number),
  seeds_durability: string,
  seeds_potency: string,
  seeds_netto: string,
  seeds_plant_type_name: string,
});

let fertilizerSchema = object({
  fert_composition: string,
  fert_purity: string,
  fert_classification: string,
  fert_color: string,
  fert_license_number: string,
  fert_group: string,
  fert_excellence: string,
  fert_how_app: string,
  fert_dose: string,
  fert_procedure: string,
  fert_netto: string,
  fert_warning: string,
});

let equipmentSchema = object({
  eq_sni_iso: string,
  eq_type_product: string,
  eq_classification: string,
  eq_cat_product: string,
  eq_dimention: string,
  eq_how_app: string,
  eq_weight: string,
  eq_materials: string,
  eq_usefulness: string,
  eq_warning: string,
});

let farmerMediaProductDetailSchema = object({
  id: number,
  user_id: number,
  brand: string,
  product_cat: string,
  price_1: number,
  price_2: number,
  photo_product: string,
  product_owner: string,
  avatar: string,
  avatar_fb: string,
  address: string,
  province_name: string,
  city_name: string,
  gallery: gallerySchema,
  count_reviews: number,
  reviews: reviewListSchema,
  rating: string,
  status: object({
    status: string,
    id_review: string,
    post: string,
    rating: number,
  }),
  pesticide: pesticideSchema,
  seeds: seedSchema,
  fertilizer: fertilizerSchema,
  equipment: equipmentSchema,
});

let farmerMediaProductDetailResponseSchema = object({
  result: string,
  message: string,
  data: farmerMediaProductDetailSchema,
});

export function validateFamerMediaProductList(farmerMediaProducts: JSONValue) {
  try {
    return validate(farmerMediaProductListSchema, farmerMediaProducts);
  } catch (error) {
    return null;
  }
}

export function validateFarmerMediaProductByID(farmerMediaProduct: JSONValue) {
  try {
    return validate(farmerMediaProductByIDResponseSchema, farmerMediaProduct);
  } catch (error) {
    return null;
  }
}

export function validateFarmerMediaProductDetail(farmerMediaProductDetail: JSONValue) {
  try {
    return validate(farmerMediaProductDetailResponseSchema, farmerMediaProductDetail);
  } catch (error) {
    return null;
  }
}
