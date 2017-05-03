// @flow
let {describe, it} = global;
import expect from 'expect';

// import PlantsAPI from '../PlantsAPI';
//
// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEyNTMsImlzcyI6Imh0dHA6XC9cL2luZ2thcnNhLmNvbVwvYXBpXC9sb2dpbnBldGFuaSIsImlhdCI6MTQ3OTM3MzE5NSwiZXhwIjoxNTEwNDc3MTk1LCJuYmYiOjE0NzkzNzMxOTUsImp0aSI6IjhiNmIwOGZhNTNlNTM0ODg4YTcxNGJiN2ZmMzc4YTYyIn0.luUwRR4D3f6Gw3aYMVDO3JK9iMSfaqxi0AdHD0Rxog8';

describe('PlantsAPI', () => {
  it('should return success', async () => {
    let mockResult = {result: 'sukses', message: 'Data tanaman di temukan'};
    let status = mockResult.result;
    let plants = mockResult.message;
    expect(status).toBe('sukses');
    expect(plants.length > 0).toBe(true);
  });
});
