// @flow

import type {GalleryPhoto} from './GalleryPhoto';
import type {Product} from './Product';

export type PestDiseaseCommodity = {
  id: number;
  commodity: string;
};

export type PestDisease = {
  id: number;
  type: 'pest' | 'disease';
  name: string;               // in server it's called hama / penyakit
  causes: string;             // in server it's called penyebab
  symptoms: Array<string>;    // in server it's called gejala
  treatments: Array<string>;  // in server it's called pengendalian
  description: string;        // in server it's called deskripsi
  photo: ImageSource;         // in server it's called photo
};

export type PestDiseaseDetail = {
  id: number;
  type: 'pest' | 'disease';
  name: string;                 // in server it's called hama / penyakit
  causes: string;               // in server it's called penyebab
  symptoms: Array<string>;      // in server it's called gejala
  treatments: Array<string>;    // in server it's called pengendalian
  description: string;          // in server it's called deskripsi
  photo: ImageSource;           // in server it's photo
  gallery: Array<GalleryPhoto>; // in server it's called galleries
  // GalleryPhoto (primary, photo, photoThumb: in server it's called photo_thumb)
};

export type PestDiseaseDetailWithCountermeasure = {
  id: number;
  type: 'pest' | 'disease';
  name: string;
  causes: string;
  symptoms: Array<string>;
  treatments: Array<string>;
  description: string;
  photo: ImageSource;
  gallery: Array<GalleryPhoto>;
  countermeasures: Array<Product>;
};
