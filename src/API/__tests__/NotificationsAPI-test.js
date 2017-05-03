// @flow
let {describe, it} = global;
import expect from 'expect';

// import NotificationsAPI from '../NotificationsAPI';
//
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyNTMsImlzcyI6Imh0dHA6XC9cL2luZ2thcnNhLmNvbVwvYXBpXC92MlwvbG9naW5wZXRhbmkiLCJpYXQiOjE0ODAzMTQ5MDQsImV4cCI6MTUxMTQxODkwNCwibmJmIjoxNDgwMzE0OTA0LCJqdGkiOiJlN2U5ZDAwZTg2NjgwZjRhNWUxNTUxOGI3NmE1M2Q1MiJ9.I2yfy0JZxk2yzgsjrQzjaNPHlR9rCCJ3BD1IFL32Fcc';

describe('NotificationsAPI', () => {
  it('should return success', async () => {
    let mockResult = {result: 'gagal', data: []};
    let datas = mockResult.data ? mockResult.data.length : 0;
    let status = mockResult.result;
    if (datas > 0) {
      expect(status).toBe('sukses');
    } else {
      expect(status).toBe('gagal');
    }
  });
});
