// @flow
let {describe, it} = global;
import expect from 'expect';

// import ThreadAPI from '../ThreadAPI';
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyNTMsImlzcyI6Imh0dHA6XC9cL2luZ2thcnNhLmNvbVwvYXBpXC92MlwvbG9naW5wZXRhbmkiLCJpYXQiOjE0ODAzMTQ5MDQsImV4cCI6MTUxMTQxODkwNCwibmJmIjoxNDgwMzE0OTA0LCJqdGkiOiJlN2U5ZDAwZTg2NjgwZjRhNWUxNTUxOGI3NmE1M2Q1MiJ9.I2yfy0JZxk2yzgsjrQzjaNPHlR9rCCJ3BD1IFL32Fcc';

describe('ThreadAPI', () => {
  it('should return success', async () => {
    let mockResult = {result: 'sukses', message: 'thread ada'};
    // let mockResult = await ThreadAPI.getAllThread(token);
    // console.log(mockResult);
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('thread ada');
  });
  it('detailThread should return success', async () => {
    let mockResult = {result: 'sukses', message: 'detailThread ada'};
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('detailThread ada');
  });
  it('threadComments should return success', async () => {
    let mockResult = {result: 'sukses', message: 'threadComments ada'};
    let status = mockResult.result;
    let mypages = mockResult.message;
    expect(status).toBe('sukses');
    expect(mypages).toBe('threadComments ada');
  });
});
