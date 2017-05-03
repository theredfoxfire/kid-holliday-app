// @flow

import formatNumber from './formatNumber';

export default function formatPriceRange(priceMin: ?number, priceMax: ?number) {
  let option = {
    prefix: 'Rp',
    separator: '.',
  };
  let priceMinimum = priceMin ? priceMin : 0;
  let priceMaximum = priceMax ? priceMax : 0;
  let min = formatNumber(priceMinimum.toString(), option);
  let max = formatNumber(priceMaximum.toString(), option);
  return `${min} - ${max}`;
}
