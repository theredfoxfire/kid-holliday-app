// @flow

const {describe, it} = global;

import expect from 'expect';
import formatLargeNumbers from '../formatLargeNumbers';

describe('formatLargeNumbers', () => {
  it('should format to thousands', () => {
    expect(formatLargeNumbers(1)).toEqual('1');
    expect(formatLargeNumbers(100)).toEqual('100');
    expect(formatLargeNumbers(1000)).toEqual('1 Rb');
    expect(formatLargeNumbers(10000)).toEqual('10 Rb');
  });
  it('should format to millions', () => {
    expect(formatLargeNumbers(1000000)).toEqual('1 Jt');
    expect(formatLargeNumbers(10000000)).toEqual('10 Jt');
    expect(formatLargeNumbers(100000000)).toEqual('100 Jt');
  });
  it('should format to millions and keep the thousands', () => {
    expect(formatLargeNumbers(1004000)).toEqual('1 Jt');
    expect(formatLargeNumbers(11050000)).toEqual('11,05 Jt');
    expect(formatLargeNumbers(11250000)).toEqual('11,25 Jt');
    expect(formatLargeNumbers(111150000)).toEqual('111,15 Jt');
    expect(formatLargeNumbers(111100000)).toEqual('111,1 Jt');
  });
});
