// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlaceDetailPage from '../pages/PlaceDetailPage';

export function mapStateToProps(state: RootState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    backToPlace: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'places',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailPage);
