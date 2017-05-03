// @flow

import {
  object, partialObject, sequence, oneOf,
  string, number, boolean,
} from 'validated/schema';
import {validate} from 'validated/object';

import type {JSONValue} from './JSONValue';

let pestDiseasePhoto = partialObject({
  primary: boolean,
  photo_thumb: string,
});

let pestSchema = object({
  id: number,
  hama: string,
  gejala: sequence(string),
  pengendalian: sequence(string),
  penyebab: string,
  deskripsi: string,
  photo: string,
  created_at: string,
  updated_at: string,
});

let pestsResponseSchema = object({
  result: string,
  message: oneOf(string, sequence(pestSchema)),
});

export function validatePests(pests: JSONValue) {
  try {
    return validate(pestsResponseSchema, pests);
  } catch (error) {
    return null;
  }
}

let pestDetailSchema = object({
  id: number,
  hama: string,
  gejala: sequence(string),
  pengendalian: sequence(string),
  penyebab: string,
  deskripsi: string,
  photo: string,
  created_at: string,
  updated_at: string,
  galleries: sequence(pestDiseasePhoto),
});

let pestDetailResponseSchema = object({
  result: string,
  message: oneOf(string, pestDetailSchema),
});

export function validatePestDetail(pestDetail: JSONValue) {
  try {
    return validate(pestDetailResponseSchema, pestDetail);
  } catch (error) {
    return null;
  }
}

let diseaseSchema = object({
  id: number,
  penyakit: string,
  gejala: sequence(string),
  pengendalian: sequence(string),
  penyebab: string,
  deskripsi: string,
  photo: string,
  created_at: string,
  updated_at: string,
});

let diseasesResponseSchema = object({
  result: string,
  message: oneOf(string, sequence(diseaseSchema)),
});

export function validateDiseases(diseases: JSONValue) {
  try {
    return validate(diseasesResponseSchema, diseases);
  } catch (error) {
    return null;
  }
}

let diseaseDetailSchema = object({
  id: number,
  penyakit: string,
  gejala: sequence(string),
  pengendalian: sequence(string),
  penyebab: string,
  deskripsi: string,
  photo: string,
  created_at: string,
  updated_at: string,
  galleries: sequence(pestDiseasePhoto),
});

let diseaseDetailResponseSchema = object({
  result: string,
  message: oneOf(string, diseaseDetailSchema),
});

export function validateDiseaseDetail(diseaseDetail: JSONValue) {
  try {
    return validate(diseaseDetailResponseSchema, diseaseDetail);
  } catch (error) {
    return null;
  }
}
