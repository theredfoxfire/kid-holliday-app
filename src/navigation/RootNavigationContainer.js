// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import RootNavigation from './RootNavigation';


function mapStateToProps(state) {
  let {navigation, isDrawerOpen, currentUser} = state;
  return {
    navigation,
    isDrawerOpen,
    currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    popRoute: () => {
      dispatch({
        type: 'POP_ROUTE',
      });
    },
    backToHome: () => {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'homepage',
      });
    },
    onPressClose() {
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    onPressLogout: () => {
      dispatch({type: 'LOGOUT'});
      dispatch({type: 'RESET_ROUTE', key: 'initial'});
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    onPressNearBy: (latLong: string) => {
      dispatch({
        type: 'RESET_ROUTE', key: 'nearby',
      });
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    onPressHome() {
      dispatch({
        type: 'RESET_ROUTE',
        key: 'homepage',
      });
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    onPressPlaces() {
      dispatch({type: 'RESET_ROUTE', key: 'places'});
      // dispatch({type: 'FETCH_PROVINCE'});
      dispatch({type: 'CLOSE_DRAWER'});
    },
    onPressTodo() {
      dispatch({
        type: 'CLOSE_DRAWER',
      });
      dispatch({
        type: 'RESET_ROUTE', key: 'todo',
      });
    },
    onPressPromo() {
      dispatch({
        type: 'RESET_ROUTE', key: 'promo',
      });
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    closeDrawer() {
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    autoLogin(userAuth) {
      dispatch({type: 'LOGIN', userAuth});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
