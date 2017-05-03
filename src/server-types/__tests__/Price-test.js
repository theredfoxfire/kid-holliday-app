// @flow

let {describe, it} = global;

import expect from 'expect';
import {
  validateNationalMarketPrice,
  validateCityMarketPrice,
  validateDefaultMarketPrice,
  validateMonthMarketPrice,
} from '../Price';

let exampleNationalMarketPrice = {
  result: 'sukses',
  message: {
    market_data: [
      {
        comodity: 'Bawang (Kg)',
        price_1: 42860,
        price_2: 43148,
        date: '2016-11-16',
        id: 1947,
      },
      {
        comodity: 'Beras(Kg)',
        price_1: 10666,
        price_2: 10693,
        date: '2016-11-16',
        id: 1938,
      },
      {
        comodity: 'Cabai(Kg)',
        price_1: 51936,
        price_2: 52136,
        date: '2016-11-16',
        id: 1946,
      },
    ],
    market_date: '2016-11-16',
  },
};

let exampleCityMarketPrice = {
  result: 'sukses',
  message: {
    market_data: [
      {
        id: 1085,
        comodity: 'Beras(Rp/Kg)',
        price: 10590,
        price_up_down: '',
        date: '2016-11-16',
      },
      {
        id: 1103,
        comodity: 'Cabe(Rp/Kg)',
        price: 73000,
        price_up_down: '(7.1%)',
        date: '2016-11-16',
      },
      {
        id: 1086,
        comodity: 'Gula(Rp/Kg)',
        price: 14773,
        price_up_down: '(0.3%)',
        date: '2016-11-16',
      },
    ],
    market_date: '2016-11-16',
  },
};

let exampleDefaultMarketPrice = {
  result: 'sukses',
  message: {
    data: [
      {
        id: 1085,
        comodity: 'Beras(Rp/Kg)',
        city: 'DKI Jakarta',
        price_1: 10590,
        up_down_1: '',
        price_2: 10590,
        up_down_2: '',
        created_at: '2016-11-16 15:39:38',
        updated_at: '2016-11-16 15:39:38',
        date: '2016-11-16',
      },
      {
        id: 1086,
        comodity: 'Gula(Rp/Kg)',
        city: 'DKI Jakarta',
        price_1: 14733,
        up_down_1: '(-2.1%)',
        price_2: 14773,
        up_down_2: '(0.3%)',
        created_at: '2016-11-16 15:40:10',
        updated_at: '2016-11-16 15:40:10',
        date: '2016-11-16',
      },
    ],
    city: 'DKI Jakarta',
    latest_update_old: '15/11/2016',
    latest_update_now: '16/11/2016',
    market_date: '2016-11-16',
  },
};

let exampleMonthMarketPrice = {
  result: 'sukses',
  message: {
    date: [
      '17/10/2016', '18/10/2016', '19/10/2016', '20/10/2016', '21/10/2016', '24/10/2016',
      '25/10/2016', '26/10/2016', '27/10/2016', '28/10/2016', '31/10/2016', '01/11/2016',
      '02/11/2016', '03/11/2016', '07/11/2016', '08/11/2016', '09/11/2016', '10/11/2016',
      '11/11/2016', '14/11/2016', '15/11/2016', '16/11/2016',
    ],
    comodity: 'Beras(Kg)',
    price: [
      10658, 10659, 10663, 10656, 10686, 10665,
      10683, 10671, 10691, 10680, 10696, 10673,
      10711, 10711, 10704, 10711, 10676, 10664,
      10683, 10691, 10666, 10693,
    ],
  },
};

describe('Market Price Response Validator', () => {
  it('should validate response data of nationalMarketPrice endpoint', () => {
    expect(validateNationalMarketPrice(exampleNationalMarketPrice)).toNotEqual(null);
    expect(validateNationalMarketPrice({foo: 123, bar: '123'})).toEqual(null);
  });

  it('should validate response data of marketPriceByCity endpoint', () => {
    expect(validateCityMarketPrice(exampleCityMarketPrice)).toNotEqual(null);
    expect(validateCityMarketPrice({foo: 123, bar: '123'})).toEqual(null);
  });

  it('should validate response data of defaultMarketPrice endpoint', () => {
    expect(validateDefaultMarketPrice(exampleDefaultMarketPrice)).toNotEqual(null);
    expect(validateDefaultMarketPrice({foo: 123, bar: '123'})).toEqual(null);
  });

  it('should validate response data of marketPriceMonth endpoint', () => {
    expect(validateMonthMarketPrice(exampleMonthMarketPrice)).toNotEqual(null);
    expect(validateMonthMarketPrice({foo: 123, bar: '123'})).toEqual(null);
  });
});
