const {describe, it} = global;

import expect from 'expect';
import formatPriceRange from '../formatPriceRange';

describe('formatPriceRange', () => {
  it('should format price range properly', () => {
    let actual = formatPriceRange('100', '500');
    let expected = 'Rp 100 - Rp 500';
    expect(actual).toBe(expected);
  });

  it('should format null data properly', () => {
    let actual = formatPriceRange(null, null);
    let expected = 'Rp 0 - Rp 0';
    expect(actual).toBe(expected);
  });
});
