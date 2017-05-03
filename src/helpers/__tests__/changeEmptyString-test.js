let {describe, it} = global;

import expect from 'expect';
import changeEmptyString from '../changeEmptyString';

describe('changeEmptyString', () => {
  it('should change an object\'s empty string value to null', () => {
    let data = {
      foo: 'hello world',
      bar: 123,
      baz: '',
    };
    let expected = {
      ...data,
      baz: null,
    };
    expect(changeEmptyString(data)).toEqual(expected);
  });

  it('should change a nested object\'s empty string value to null', () => {
    let data = {
      foo: 'hello',
      bar: '',
      baz: {
        foo: 123,
        bar: '',
        baz: {
          foo: 123,
          bar: '',
        },
      },
    };
    let expected = {
      foo: 'hello',
      bar: null,
      baz: {
        foo: 123,
        bar: null,
        baz: {
          foo: 123,
          bar: null,
        },
      },
    };
    expect(changeEmptyString(data)).toEqual(expected);
  });
});
