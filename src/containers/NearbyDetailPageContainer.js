// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import NearbyDetailPage from '../pages/NearbyDetailPage';

export function mapStateToProps(state: RootState) {
  return {
    isFetchNearbyDetailLoading: state.loadingIndicator.isFetchNearbyDetailLoading,
    isPostTodoLoading: state.loadingIndicator.isPostTodoLoading,
    nearbyDetailResult: state.nearbyDetailResult,
    currentUser: state.currentUser,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToNearby: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'nearby',
      });
    },
    newTodo(module: string, module_id: string, user: string) {
      dispatch({type: 'POST_NEW_TODO', module, module_id, user});
      dispatch({type: 'FETCH_TODO', username: user});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyDetailPage);
