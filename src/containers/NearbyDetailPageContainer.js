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
    selectedNearbyID: state.selectedNearbyID,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToNearby: () => {
      dispatch({
        type: 'POP_ROUTE',
      });
    },
    newTodo(module: string, module_id: string, user: string) {
      dispatch({type: 'POST_NEW_TODO', module, module_id, user});
    },
    fetchDetail(id: string) {
      dispatch({type: 'FETCH_NEARBY_DETAIL', id: id});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyDetailPage);
