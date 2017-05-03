// @flow

import {createSelector} from 'reselect';

import type {PestDisease, PestDiseaseDetail, PestDiseaseDetailWithCountermeasure} from '../types/PestDisease';

const getPests = (state) => state.pests;
const getDiseases = (state) => state.diseases;
const getFirstStagePestDisease = (pestsDiseases: Map<number, PestDisease | PestDiseaseDetail | PestDiseaseDetailWithCountermeasure>): Array<PestDisease> => {
  return Array.from(pestsDiseases.values()).map((pestDisease) => {
    let {id, type, name, causes, symptoms, treatments, description, photo} = pestDisease;
    return {
      id,
      type,
      name,
      causes,
      symptoms,
      treatments,
      description,
      photo,
    };
  });
};

const getFirstStagePests = createSelector(
  getPests,
  getFirstStagePestDisease,
);

const getFirstStageDiseases = createSelector(
  getDiseases,
  getFirstStagePestDisease,
);

export {
  getFirstStagePests,
  getFirstStageDiseases,
};
