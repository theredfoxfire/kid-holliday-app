let {describe, it} = global;

import expect from 'expect';
import mapObjectToDropdownOptions from '../mapObjectToDropdownOptions';

describe('mapObjectToDropdownOptions', () => {
  let mapObj = new Map();
  mapObj.set(1, {id: 1, name: 'nameFoo', city: 'cityFoo'});
  mapObj.set(2, {id: 2, name: 'nameBar', city: 'cityBar'});

  it('should return dropdown options from given map object & options', () => {
    let actual = mapObjectToDropdownOptions(mapObj, {value: 'id', label: 'name'});
    let expected = [{value: 1, label: 'nameFoo'}, {value: 2, label: 'nameBar'}];
    expect(actual).toEqual(expected);
    actual = mapObjectToDropdownOptions(mapObj, {value: 'id', label: 'city'});
    expected = [{value: 1, label: 'cityFoo'}, {value: 2, label: 'cityBar'}];
    expect(actual).toEqual(expected);
    actual = mapObjectToDropdownOptions(mapObj, {value: 'name', label: 'city'});
    expected = [{value: 'nameFoo', label: 'cityFoo'}, {value: 'nameBar', label: 'cityBar'}];
    expect(actual).toEqual(expected);
  });

  it('should throw an error if defined property(ies) in options is not found in the given object', () => {
    let error = () => mapObjectToDropdownOptions(mapObj, {value: 'foo', label: 'name'});
    expect(error).toThrow();
    error = () => mapObjectToDropdownOptions(mapObj, {value: 'id', label: 'foo'});
    expect(error).toThrow();
  });
});
