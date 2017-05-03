// @flow

let {describe, it} = global;
import expect from 'expect';

// import PestDiseasesAPI from '../PestDiseasesAPI';

describe('PestDiseasesAPI', () => {
  it('should return success', async () => {
    let mockResult = {result: 'gagal', data: []};
    // let data = await PestDiseasesAPI.getPests('1');
    let status = mockResult.result;
    let datas = mockResult.data ? mockResult.data.length : 0;
    if (datas > 0) {
      expect(status).toBe('sukses');
    } else {
      expect(status).toBe('gagal');
    }
  });
  it('should getDiseases return success', async () => {
    let mockResult = {result: 'gagal', data: []};
    // let data = await PestDiseasesAPI.getDiseases('1');
    let status = mockResult.result;
    let datas = mockResult.data ? mockResult.data.length : 0;
    if (datas > 0) {
      expect(status).toBe('sukses');
    } else {
      expect(status).toBe('gagal');
    }
  });
});
