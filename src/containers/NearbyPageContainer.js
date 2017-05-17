// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import NearbyPage from '../pages/NearbyPage';

export function mapStateToProps(state: RootState) {
  return {
    nearby: state.nearby,
    isFetchNearbyLoading: state.loadingIndicator.isFetchNearbyLoading,
    isFetchNearbyDetailLoading: state.loadingIndicator.isFetchNearbyDetailLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onPressDetail(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'nearbyDetail'});
      dispatch({type: 'FETCH_NEARBY_DETAIL', id: id});
    },
    onPressMap(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'mapDirection'});
      dispatch({type: 'FETCH_NEARBY_DETAIL', id: id});
    },
    fetchNearby(latLong: string) {
      dispatch({
        type: 'FETCH_NEARBY',
        latLong: latLong,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyPage);
