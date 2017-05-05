// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import SignupPage from '../pages/SignupPage';

export function mapStateToProps(state: RootState) {
  return {};
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onSignupSubmit(email: string) {
      dispatch({type: 'SIGNUP_SUBMIT', email: email});
    },
    backToLogin: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'initial',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
