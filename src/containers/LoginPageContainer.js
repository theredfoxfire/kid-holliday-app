// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import LoginPage from '../pages/LoginPage';

type UserLogin = {
  email: string;
  password: string;
};

export function mapStateToProps(state: RootState) {
  return {
    isLoading: state.loadingIndicator.isLoginLoading,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onLoginSubmit(user: UserLogin) {
      user = {
        email: user.email,
        password: user.password,
      };
      dispatch({type: 'LOGIN', userAuth: user});
    },
    onPressForgot() {
      dispatch({type: 'PUSH_ROUTE', key: 'forgot'});
    },
    onPressSignup() {
      dispatch({type: 'PUSH_ROUTE', key: 'signup'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
