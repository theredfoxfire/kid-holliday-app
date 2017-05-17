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
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToPromo: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'promo',
      });
    },
    newTodo(module: string, module_id: string, user: string) {
      dispatch({type: 'POST_NEW_TODO', module, module_id, user});
      dispatch({type: 'FETCH_TODO', username: user});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoDetailPage);
