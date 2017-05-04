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
    // onLoginSubmit(user: UserLogin) {
    //   user = {
    //     email: user.email.trim(),
    //     password: user.password,
    //   };
    //   console.log(user);
    //   dispatch({type: 'LOGIN', userAuth: user});
    // },
    onLoginSubmit() {
      dispatch({type: 'RESET_ROUTE', key: 'homepage'});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
