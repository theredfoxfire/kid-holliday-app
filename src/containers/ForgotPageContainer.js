// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import ForgotPage from '../pages/ForgotPage';

export function mapStateToProps(state: RootState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onEmailSubmit(email: string) {
      dispatch({type: 'FORGOT_SUBMIT', email: email});
    },
    backToLogin: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'initial',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPage);
