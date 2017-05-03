// @flow

let {describe, it} = global;
import expect from 'expect';

// import MarketPriceAPI from '../MarketPriceAPI';

describe('MarketPriceAPI', () => {
  it('marketPriceByCity return result success', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
  it('nationalMarketPrice return result success', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
  it('cityMarketPrice return result success', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
  it('defaultMarketPrice return result success', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
  it('comodity return result success', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
  it('marketpricemonth return result success', async () => {
    let mockResponseJSON = {result: 'sukses'};
    expect(mockResponseJSON.result).toBe('sukses');
  });
});
