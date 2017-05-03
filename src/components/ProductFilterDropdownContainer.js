// @flow

import {connect} from 'react-redux';

import {Dropdown} from '../core-ui';

import type {RootState} from '../types/RootState';

export function mapStateToProps(state: RootState) {
  let {productCommodity} = state;
  let productOptions = productCommodity.map((commodity) => {
    return {
      value: commodity.id,
      label: commodity.categoryName,
    };
  });
  return {
    options: [...productOptions, {value: -1, label: 'Semua'}],
  };
}

export default connect(mapStateToProps, {})(Dropdown);
