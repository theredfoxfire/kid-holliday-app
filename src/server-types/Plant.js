// @flow

import {
  object, sequence, maybe, oneOf,
  string, number, boolean,
} from 'validated/schema';
import {validate} from 'validated/object';

import type {JSONValue} from './JSONValue';

let plantSchema = object({
  id: number,
  user_id: number,
  plant_id: number,
  date: string,
  area: number,
  unit: string,
  desc: string,
  province: number,
  city: number,
  subdistrict: number,
  village: number,
  foto: maybe(string),
  foto_thumb: maybe(string),
  cropping_system: string,
  seed_id: maybe(number),
  watering: maybe(string),
  type_land: maybe(string),
  fertility: maybe(string),
  using_persemian: maybe(string),
  height_land: string,
  longitude: string,
  latitude: string,
  created_at: string,
  updated_at: string,
  plant_category_id: number,
  plant_varieties_id: number,
  status: string,
  soil_ph: string,
  plant_fase: string,
  plant_address_gps: string,
  is_temporary_variety: boolean,
  temp_fase: maybe(string),
  type: maybe(string),
  plant_category_name: string,
  plant_varieties_name: string,
  province_name: maybe(string),
  city_name: maybe(string),
  subdistrict_name: maybe(string),
  village_name: maybe(string),
  plant_name: string,
  seed_name: maybe(string),
  disclaimer: string,
  age_plant: string,
  estimate: string,
  potential: string,
  reaction: string,
  dolomit: string,
});

let plantsResponseSchema = object({
  result: string,
  message: oneOf(string, sequence(plantSchema)),
});

export function validatePlants(plant: JSONValue) {
  try {
    return validate(plantsResponseSchema, plant);
  } catch (error) {
    return null;
  }
}

let plantDetailSchema = object({
  id: number,
  user_id: number,
  plant_id: number,
  date: string,
  area: number,
  unit: string,
  desc: string,
  province: number,
  city: number,
  subdistrict: number,
  village: number,
  foto: maybe(string),
  foto_thumb: maybe(string),
  cropping_system: string,
  seed_id: maybe(number),
  watering: maybe(string),
  type_land: maybe(string),
  fertility: maybe(string),
  using_persemian: maybe(string),
  height_land: string,
  longitude: string,
  latitude: string,
  created_at: string,
  updated_at: string,
  plant_category_id: number,
  plant_varieties_id: number,
  status: string,
  soil_ph: string,
  plant_fase: string,
  plant_address_gps: string,
  is_temporary_variety: boolean,
  temp_fase: maybe(string),
  type: maybe(string),
  plant_category_name: string,
  plant_varieties_name: string,
  seed_name: maybe(string),
  disclaimer: string,
  province_name: maybe(string),
  city_name: maybe(string),
  subdistrict_name: maybe(string),
  village_name: maybe(string),
  plant_name: string,
  plant_system: number,
  persemaian: boolean,
});

let suggestionSchema = object({
  name: string,
  suggest: sequence(string),
  hst: string,
});

let plantPhaseSchema = object({
  desc: string,
  suggest: sequence(suggestionSchema),
  time: string,
  persemaian: object({
    desc: string,
    suggest: sequence(suggestionSchema),
    time: string,
  }),
});

let plantDetailResponseSchema = object({
  result: string,
  message: oneOf(string, object({
    detail: plantDetailSchema,
    fase: plantPhaseSchema,
    estimates: string,
    potential: number,
  })),
});

export function validatePlantDetail(plantDetail: JSONValue) {
  try {
    return validate(plantDetailResponseSchema, plantDetail);
  } catch (error) {
    return null;
  }
}

let plantingInformationResponseSchema = object({
  result: string,
  message: oneOf(string, object({
    id: number,
    type_plant_id: number,
    category_plant_id: number,
    seed_requirement: string,
    manure_requirement: string,
    chemical_requirement: string,
    simple_planting: string,
    land_elevation: string,
    temperature: string,
    weather: maybe(string),
    rainfall: string,
    production_result: string,
    pests_diseases: string,
    created_at: string,
    updated_at: string,
    plant_crop_id: number,
  })),
});

export function validatePlantingInformation(plantingInformation: JSONValue) {
  try {
    return validate(plantingInformationResponseSchema, plantingInformation);
  } catch (error) {
    return null;
  }
}

let plantPhotosResponseSchema = object({
  result: string,
  message: oneOf(string, sequence(
    object({
      id: number,
      plants_id: number,
      photo: string,
      img_thumb: string,
      status: boolean,
      created_at: string,
      updated_at: string,
    })
  )),
});

export function validatePlantPhotos(plantPhotos: JSONValue) {
  try {
    return validate(plantPhotosResponseSchema, plantPhotos);
  } catch (error) {
    return null;
  }
}
