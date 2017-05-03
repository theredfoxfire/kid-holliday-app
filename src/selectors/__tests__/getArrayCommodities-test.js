// @flow

const {describe, it} = global;

import expect from 'expect';
import {getArrayCommodities} from '../getArrayCommodities';

let commodities = new Set();
commodities.add('Cabe');
commodities.add('Jagung');

const mockState = {
  commodities,
};

describe('Get Array Commodities', () => {
  it('should return array of Commodities', () => {
    let actual = getArrayCommodities(mockState);
    let expected = ['Cabe', 'Jagung'];
    expect(actual).toEqual(expected);
  });
});
