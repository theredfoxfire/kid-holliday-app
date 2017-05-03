// @flow

const {describe, it} = global;

import expect from 'expect';
import {
  getFirstStagePests,
  getFirstStageDiseases,
} from '../getFirstStagePestsDiseases';
import pestImage1 from '../../images/karsa-01.png';
import diseaseImage1 from '../../images/karsa-01.png';
const pest = {
  id: 123,
  type: 'pest',
  photo: pestImage1,
  name: 'Hama Walang Sangit',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem enim, tristique quis maximus non, rhoncus in erat. Sed tempus neque a urna mollis, facilisis.',
  causes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  symptoms: [
    'Aliquam a nisl finibus, congue augue fermentum, congue lacus.',
    'Cras venenatis dolor vestibulum eros rutrum, sit amet venenatis leo aliquam.',
    'Fusce accumsan augue a bibendum bibendum.',
    'Curabitur tristique massa sed quam placerat consectetur eget eu urna.',
    'Nam at quam pulvinar, mattis libero sit amet, posuere dolor.',
    'Nulla vitae felis ac sem venenatis dictum.',
  ],
  treatments: [
    'Integer dapibus purus auctor tempus eleifend.',
    'Phasellus volutpat purus eget molestie finibus.',
    'Mauris nec augue a ex consectetur auctor ut eu massa.',
    'Duis sed mauris pulvinar, efficitur libero non, cursus enim.',
    'Cras sit amet est in sem volutpat mollis quis ut erat.',
    'Vestibulum scelerisque dolor ac libero fermentum euismod.',
  ],
};
const disease = {
  id: 271,
  type: 'disease',
  photo: diseaseImage1,
  name: 'Penyakit Blas',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sem enim, tristique quis maximus non, rhoncus in erat. Sed tempus neque a urna mollis, facilisis.',
  causes: 'Lorem ipsum dolor sit amet',
  symptoms: [
    'Aliquam a nisl finibus, congue augue fermentum, congue lacus.',
    'Cras venenatis dolor vestibulum eros rutrum, sit amet venenatis leo aliquam.',
    'Fusce accumsan augue a bibendum bibendum.',
    'Curabitur tristique massa sed quam placerat consectetur eget eu urna.',
    'Nam at quam pulvinar, mattis libero sit amet, posuere dolor.',
    'Nulla vitae felis ac sem venenatis dictum.',
  ],
  treatments: [
    'Integer dapibus purus auctor tempus eleifend.',
    'Phasellus volutpat purus eget molestie finibus.',
    'Mauris nec augue a ex consectetur auctor ut eu massa.',
    'Duis sed mauris pulvinar, efficitur libero non, cursus enim.',
    'Cras sit amet est in sem volutpat mollis quis ut erat.',
    'Vestibulum scelerisque dolor ac libero fermentum euismod.',
  ],
};

let pests = new Map();
pests.set(pest.id, {
  ...pest,
  gallery: [],
  countermeasures: [],
});
pests.set(124, {
  ...pest,
  gallery: [],
  countermeasures: [],
});

let diseases = new Map();
diseases.set(disease.id, {
  ...disease,
  gallery: [],
  countermeasures: [],
});

const mockState = {
  pests,
  diseases,
};

describe('Get First Stage Pests & Diseases', () => {
  it('should return first stage data (type PestDisease)', () => {
    let actual = getFirstStagePests(mockState);
    let expected = [pest, pest];
    expect(actual).toEqual(expected);

    actual = getFirstStageDiseases(mockState);
    expected = [disease];
    expect(actual).toEqual(expected);
  });
});
