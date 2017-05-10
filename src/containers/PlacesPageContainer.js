// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlacesPage from '../pages/PlacesPage';

export function mapStateToProps(state: RootState) {
  return {
    searchNameResult: state.searchNameResult,
    isFetchSearchNameLoading: state.loadingIndicator.isFetchSearchNameLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    placeDetail() {
      dispatch({type: 'PUSH_ROUTE', key: 'placeDetail'});
    },
    searchNameAction(name: string) {
      dispatch({type: 'FETCH_SEARCH_NAME', name: name});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);
