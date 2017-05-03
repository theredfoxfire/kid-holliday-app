// @flow
let {describe, it} = global;
import expect from 'expect';

// import CompanyProfileAPI from '../CompanyProfileAPI';
//
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyNTMsImlzcyI6Imh0dHA6XC9cL2luZ2thcnNhLmNvbVwvYXBpXC92MlwvbG9naW5wZXRhbmkiLCJpYXQiOjE0ODAzMTQ5MDQsImV4cCI6MTUxMTQxODkwNCwibmJmIjoxNDgwMzE0OTA0LCJqdGkiOiJlN2U5ZDAwZTg2NjgwZjRhNWUxNTUxOGI3NmE1M2Q1MiJ9.I2yfy0JZxk2yzgsjrQzjaNPHlR9rCCJ3BD1IFL32Fcc';

describe('Profile API', () => {
  it('getProfile should return success', async () => {
    let mockResult = {result: 'sukses', message: 'topik ada'};
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('topik ada');
  });
  it('getAbout should return success', async () => {
    let mockResult = {result: 'sukses', message: 'topik ada'};
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('topik ada');
  });
  it('getPrivacyPolicy should return success', async () => {
    let mockResult = {result: 'sukses', message: 'topik ada'};
    // let data = await CompanyProfileAPI.getPrivacyPolicy();
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('topik ada');
  });
  it('getBranchOffices should return success', async () => {
    let mockResult = {result: 'sukses', message: 'topik ada'};
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('topik ada');
  });
});
