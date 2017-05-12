// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PromoPage from '../pages/PromoPage';

export function mapStateToProps(state: RootState) {
  return {
    promo: state.promo,
    isFetchPromoLoading: state.loadingIndicator.isFetchPromoLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    promoDetails() {
      dispatch({type: 'PUSH_ROUTE', key: 'promoDetail'});
    },
    fetchPromo() {
      dispatch({type: 'FETCH_PROMO'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoPage);
