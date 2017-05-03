// @flow
let {describe, it} = global;
import expect from 'expect';

import {encrypt, decrypt} from '../encryption';

describe('encrypt', () => {
  let text = 'hello world';
  let hash = encrypt(text);
  it('should encrypt text', () => {
    expect(hash.length).toBe(44);
  });
  it('should decrypt hash', () => {
    expect(decrypt(hash)).toEqual(text);
  });
});
