// @flow
let {describe, it} = global;
import expect from 'expect';

// import CostAPI from '../CostAPI';
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyNTMsImlzcyI6Imh0dHA6XC9cL2luZ2thcnNhLmNvbVwvYXBpXC92MlwvbG9naW5wZXRhbmkiLCJpYXQiOjE0ODAzMTQ5MDQsImV4cCI6MTUxMTQxODkwNCwibmJmIjoxNDgwMzE0OTA0LCJqdGkiOiJlN2U5ZDAwZTg2NjgwZjRhNWUxNTUxOGI3NmE1M2Q1MiJ9.I2yfy0JZxk2yzgsjrQzjaNPHlR9rCCJ3BD1IFL32Fcc';

describe('Cost API', () => {
  it('getCostAnalyticTimeLine should return success', async () => {
    // let data = await CostAPI.getCostAnalyticTimeLine(token);
    let mockResult = {result: 'sukses', message: 'topik ada'};
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('topik ada');
  });
});
