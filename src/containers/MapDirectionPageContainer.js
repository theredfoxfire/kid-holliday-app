// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import MapDirectionPage from '../pages/MapDirectionPage';

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapDirectionPage);
