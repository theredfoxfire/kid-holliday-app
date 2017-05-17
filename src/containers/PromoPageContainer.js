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
    currentUser: state.currentUser,
    isPostTodoLoading: state.loadingIndicator.isPostTodoLoading,
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
    newTodo(module: string, module_id: string, user: string) {
      dispatch({type: 'POST_NEW_TODO', module, module_id, user});
      dispatch({type: 'FETCH_TODO', username: user});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoPage);
