// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import NearbyPage from '../pages/NearbyPage';

export function mapStateToProps(state: RootState) {
  return {
    nearby: state.nearby,
    isFetchNearbyLoading: state.loadingIndicator.isFetchNearbyLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onPressDetail(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'nearbyDetail'});
      dispatch({type: 'NEARBY_DETAIL', selectedNearbyID: id});
    },
    onPressMap(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'mapDirection'});
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
