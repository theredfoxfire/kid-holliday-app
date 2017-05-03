// @flow

import {
  object, sequence, oneOf,
  string, number,
} from 'validated/schema';
import {validate} from 'validated/object';

import type {JSONValue} from './JSONValue';

let marketData = object({
  id: number,
  date: string,
  comodity: string,
  price_1: number,
  price_2: number,
});

let nationalMarketPriceResponseSchema = object({
  result: string,
  message: oneOf(string, object({
    market_data: sequence(marketData),
    market_date: string,
  })),
});

let cityMarketData = object({
  id: number,
  comodity: string,
  date: string,
  price: number,
  price_up_down: string,
});

let cityMarketPriceResponseSchema = object({
  result: string,
  message: oneOf(string, object({
    market_data: sequence(cityMarketData),
    market_date: string,
  })),
});

let defaultMarketData = object({
  id: number,
  date: string,
  city: string,
  comodity: string,
  price_1: number,
  up_down_1: string,
  price_2: number,
  up_down_2: string,
  created_at: string,
  updated_at: string,
});

let defaultMarketPriceResponseSchema = object({
  result: string,
  message: oneOf(string, object({
    data: sequence(defaultMarketData),
    city: string,
    latest_update_old: string,
    latest_update_now: string,
    market_date: string,
  })),
});

let monthMarketData = object({
  date: sequence(string),
  comodity: string,
  price: sequence(number),
});

let monthMarketPriceResponseSchema = object({
  result: string,
  message: oneOf(string, monthMarketData),
});

export function validateNationalMarketPrice(nationalMarketPrice: JSONValue) {
  try {
    return validate(nationalMarketPriceResponseSchema, nationalMarketPrice);
  } catch (error) {
    return null;
  }
}

export function validateCityMarketPrice(cityMarketPrice: JSONValue) {
  try {
    return validate(cityMarketPriceResponseSchema, cityMarketPrice);
  } catch (error) {
    return null;
  }
}

export function validateDefaultMarketPrice(defaultMarketPrice: JSONValue) {
  try {
    return validate(defaultMarketPriceResponseSchema, defaultMarketPrice);
  } catch (error) {
    return null;
  }
}

export function validateMonthMarketPrice(monthMarketPrice: JSONValue) {
  try {
    return validate(monthMarketPriceResponseSchema, monthMarketPrice);
  } catch (error) {
    return null;
  }
}
