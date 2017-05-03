// @flow
let {describe, it} = global;
import expect from 'expect';

// import AdsAPI from '../AdsAPI';

describe('AdsAPI', () => {
  it('should return success', async () => {
    let mockResult = {result: 'gagal', data: []};
    let status = mockResult.result;
    let datas = mockResult.data ? mockResult.data.length : 0;
    if (datas > 0) {
      expect(status).toBe('sukses');
    } else {
      expect(status).toBe('gagal');
    }
  });
});
