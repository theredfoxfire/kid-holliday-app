// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import HomePage from '../pages/HomePage';

export function mapStateToProps(state: RootState) {
  return {
    isLoading: state.loadingIndicator.isLoginLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onGuestLoginButtonPress() {
      dispatch({type: 'RESET_ROUTE', key: 'homepage'}); // Temporary for dismiss login page
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
