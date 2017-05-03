// @flow

import expect from 'expect';
import sortArrayByServerDate from '../sortArrayByServerDate';

const {beforeEach, describe, it} = global;

describe('sortArrayByServerDate', () => {
  let array;
  beforeEach(() => {
    array = [
      {id: 1, date: '2017-03-15 10:11:12'},
      {id: 2, date: '2017-03-13 12:13:14'},
      {id: 3, date: '2017-03-17 10:11:12'},
      {id: 4, date: '2017-03-15 12:13:14'},
    ];
  });

  it('should sort arrays by dates ascending properly', () => {
    let actual = sortArrayByServerDate(array, {key: 'date'});
    let actualAscending = sortArrayByServerDate(array, {key: 'date', sort: 'ascending'});
    let expected = [
      {id: 2, date: '2017-03-13 12:13:14'},
      {id: 1, date: '2017-03-15 10:11:12'},
      {id: 4, date: '2017-03-15 12:13:14'},
      {id: 3, date: '2017-03-17 10:11:12'},
    ];
    expect(actual).toEqual(expected);
    expect(actualAscending).toEqual(expected);
  });
  it('should sort arrays by dates descending properly', () => {
    let actual = sortArrayByServerDate(array, {key: 'date', sort: 'descending'});
    let expected = [
      {id: 3, date: '2017-03-17 10:11:12'},
      {id: 4, date: '2017-03-15 12:13:14'},
      {id: 1, date: '2017-03-15 10:11:12'},
      {id: 2, date: '2017-03-13 12:13:14'},
    ];
    expect(actual).toEqual(expected);
  });
  it(`should throw error if the Object doesn't have provided key`, () => {
    expect(() => sortArrayByServerDate(array, {key: 'foo'})).toThrow(/Object property 'foo' not found/);
  });
  it('should throw error if provided data is not server date string', () => {
    expect(() => sortArrayByServerDate(array, {key: 'id'})).toThrow(/Object property 'id' is not a date string/);
  });
  it('should handle empty arrays', () => {
    let actual = sortArrayByServerDate([], {key: 'date'});
    let expected = [];
    expect(actual).toEqual(expected);
  });
});
