// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlaceDetailPage from '../pages/PlaceDetailPage';

export function mapStateToProps(state: RootState) {
  return {
    isFetchSearchNameDetailLoading: state.loadingIndicator.isFetchSearchNameDetailLoading,
    isPostTodoLoading: state.loadingIndicator.isPostTodoLoading,
    searchNameDetailResult: state.searchNameDetailResult,
    placeDetailID: state.placeDetailID,
    currentUser: state.currentUser,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToPlace: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'places',
      });
    },
    newTodo(module: string, module_id: string, user: string) {
      dispatch({type: 'POST_NEW_TODO', module, module_id, user});
    },
    fetchDetail(id: string) {
      dispatch({type: 'FETCH_SEARCH_NAME_DETAIL', id});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailPage);
