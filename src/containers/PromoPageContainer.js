// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PromoPage from '../pages/PromoPage';

export function mapStateToProps(state: RootState) {
  return {
    promo: state.promo,
    isFetchPromoLoading: state.loadingIndicator.isFetchPromoLoading,
    isFetchPromoDetailLoading: state.loadingIndicator.isFetchPromoDetailLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    promoDetails(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'promoDetail'});
      dispatch({type: 'FETCH_PROMO_DETAIL', id});
    },
    fetchPromo() {
      dispatch({type: 'FETCH_PROMO'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoPage);
