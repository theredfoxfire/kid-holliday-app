// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import NearbyPage from '../pages/NearbyPage';

export function mapStateToProps(state: RootState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyPage);
