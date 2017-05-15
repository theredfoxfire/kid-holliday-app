// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlacesPage from '../pages/PlacesPage';

export function mapStateToProps(state: RootState) {
  return {
    searchNameResult: state.searchNameResult,
    isFetchSearchNameLoading: state.loadingIndicator.isFetchSearchNameLoading,
    isFetchSearchNameDetailLoading: state.loadingIndicator.isFetchSearchNameDetailLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    placeDetail(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'placeDetail'});
      dispatch({type: 'FETCH_SEARCH_NAME_DETAIL', id: id});
    },
    searchNameAction(name: string) {
      dispatch({type: 'FETCH_SEARCH_NAME', name: name});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);
