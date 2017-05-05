// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlacesPage from '../pages/PlacesPage';

export function mapStateToProps(state: RootState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);
