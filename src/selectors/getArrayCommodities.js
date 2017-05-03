// @flow

import {createSelector} from 'reselect';

const getCommodities = (state) => state.commodities;
const getArrayCommodities = createSelector(
  getCommodities,
  (commodities: Set<string>): Array<string> => {
    return Array.from(commodities);
  },
);

export {getArrayCommodities};
