// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PromoDetailPage from '../pages/PromoDetailPage';

export function mapStateToProps(state: RootState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToPromo: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'promo',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoDetailPage);
