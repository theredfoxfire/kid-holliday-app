// @flow
const {describe, it} = global;
import expect from 'expect';

import formatNumber from '../formatNumber';

describe('formatNumber test', () => {
  it('Should format the number based on prefix and separator', () => {
    expect(formatNumber('', {separator: '.'})).toEqual('');
    expect(formatNumber('123', {separator: '.', prefix: 'Rp.'})).toEqual('Rp. 123');
    expect(formatNumber('1234', {separator: '.', prefix: 'Rp.'})).toEqual('Rp. 1.234');
    expect(formatNumber('12345', {separator: '.', prefix: 'Rp.'})).toEqual('Rp. 12.345');
    expect(formatNumber('12345678', {separator: '.', prefix: 'Rp.'})).toEqual('Rp. 12.345.678');
  });
});
