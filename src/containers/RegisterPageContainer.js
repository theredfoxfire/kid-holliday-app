// @flow
import {connect} from 'react-redux';

import RegisterPage from '../pages/RegisterPage';
import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import type {Registration} from '../types/Registration';

const mapStateToProps = (state: RootState) => {
  let {loadingIndicator} = state;
  return {
    loading: loadingIndicator.isRegisterUserLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onRegisterButtonPress: (registration: Registration) => {
      dispatch({type: 'REGISTER_USER', registration});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
