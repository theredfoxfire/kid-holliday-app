// @flow

let {describe, it} = global;
import expect from 'expect';

describe('UserAPI', () => {
  it('forgot return result failed', async () => {
    let mockResponseJSON = {result: 'gagal'};
    expect(mockResponseJSON.result).toBe('gagal');
  });
  it('getRoles return result failed', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
});
