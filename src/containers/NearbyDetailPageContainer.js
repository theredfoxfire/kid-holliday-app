// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import NearbyDetailPage from '../pages/NearbyDetailPage';

export function mapStateToProps(state: RootState) {
  return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(NearbyDetailPage);
