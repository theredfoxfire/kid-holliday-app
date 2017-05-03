// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import InitialPage from '../pages/InitialPage';

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
        email: user.email.trim(),
        password: user.password,
      };
      // dispatch({type: 'LOGIN', userAuth: user});
      dispatch({type: 'RESET_ROUTE', key: 'homepage'}); // Temporary for dismiss login page
    },
    onPressForgot() {
      // dispatch({type: 'PUSH_ROUTE', key: 'forgotPassword'});
    },
    onFacebookLoginButtonPress() {
      // dispatch({type: 'FACEBOOK_LOGIN'});
      dispatch({type: 'RESET_ROUTE', key: 'homepage'}); // Temporary for dismiss login page
    },
    onGoogleLoginButtonPress() {
      // dispatch({type: 'FACEBOOK_LOGIN'});
      dispatch({type: 'RESET_ROUTE', key: 'homepage'}); // Temporary for dismiss login page
    },
    onGuestLoginButtonPress() {
      // dispatch({type: 'GUEST_LOGIN'});
      dispatch({type: 'RESET_ROUTE', key: 'homepage'}); // Temporary for dismiss login page
    },
  };
}
// TODO add dispatch to props for title bar
export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);
