// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PromoDetailPage from '../pages/PromoDetailPage';

export function mapStateToProps(state: RootState) {
  return {
    promoDetailResult: state.promoDetailResult,
    currentUser: state.currentUser,
    isPostTodoLoading: state.loadingIndicator.isPostTodoLoading,
    isFetchPromoDetailLoading: state.loadingIndicator.isFetchPromoDetailLoading,
    selectedPromoID: state.selectedPromoID,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToPromo: () => {
      dispatch({
        type: 'POP_ROUTE',
      });
    },
    newTodo(module: string, module_id: string, user: string) {
      dispatch({type: 'POST_NEW_TODO', module, module_id, user});
    },
    fetchDetail(id: string) {
      dispatch({type: 'FETCH_PROMO_DETAIL', id});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoDetailPage);
