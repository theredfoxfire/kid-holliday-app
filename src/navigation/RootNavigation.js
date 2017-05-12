//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  AsyncStorage,
  View,
  NavigationExperimental,
  BackAndroid,
  Alert,
  StatusBar,
} from 'react-native';
import autobind from 'class-autobind';

import {LA_GREY} from '../constants/color';

import InitialPageContainer from '../containers/InitialPageContainer';
import LoginPageContainer from '../containers/LoginPageContainer';
import HomePageContainer from '../containers/HomePageContainer';
import PlacesPageContainer from '../containers/PlacesPageContainer';
import NearbyPageContainer from '../containers/NearbyPageContainer';
import TodoPageContainer from '../containers/TodoPageContainer';
import PromoPageContainer from '../containers/PromoPageContainer';
import ForgotPageContainer from '../containers/ForgotPageContainer';
import SignupPageContainer from '../containers/SignupPageContainer';
import NearbyDetailPageContainer from '../containers/NearbyDetailPageContainer';
import TodoDetailPageContainer from '../containers/TodoDetailPageContainer';
import PromoDetailPageContainer from '../containers/PromoDetailPageContainer';
import PlaceDetailPageContainer from '../containers/PlaceDetailPageContainer';

let {CardStack: NavigationCardStack} = NavigationExperimental;

import Drawer from 'react-native-drawer';
import {DrawerComponent, DownloadIndicator} from '../core-ui';
import {decrypt} from '../helpers/encryption';

import type {NavigationState} from '../types/Navigation';

type Props = {
  navigation: NavigationState;
  isDrawerOpen: boolean;
  popRoute: () => void;
  backToHome: () => void;
  onPressClose: () => void;
  onPressPlaces: () => void;
  onPressLogout: () => void;
  onPressNearBy: () => void;
  onPressTodo: () => void;
  onPressPromo: () => void;
  autoLogin: (userAuth: {email: string; password: string}) => void;
};

class RootNavigation extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
  }

  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      let firstRouteKey = this.props.navigation.routes[0].key;
      if (['initial', 'homepage'].indexOf(firstRouteKey) !== -1) {
        Alert.alert('Liburan Anak', 'Keluar dari aplikasi?', [
          {text: 'Iya', onPress: () => BackAndroid.exitApp()},
          {text: 'Tidak'},
        ]);
      } else {
        this.props.backToHome();
      }
    } else {
      this.props.popRoute();
    }
    return true;
  }
  _renderScene({scene}) {
    let {route} = scene;
    let {key, props} = route;
    switch (key) {
      case 'login': return <LoginPageContainer />;
      case 'initial': return <InitialPageContainer />;
      case 'homepage': return <HomePageContainer />;
      case 'places': return <PlacesPageContainer />;
      case 'nearby': return <NearbyPageContainer />;
      case 'todo': return <TodoPageContainer />;
      case 'promo': return <PromoPageContainer />;
      case 'forgot': return <ForgotPageContainer />;
      case 'signup': return <SignupPageContainer />;
      case 'nearbyDetail': return <NearbyDetailPageContainer />;
      case 'todoDetail': return <TodoDetailPageContainer />;
      case 'promoDetail': return <PromoDetailPageContainer />;
      case 'placeDetail': return <PlaceDetailPageContainer />;
    }
  }

  render() {
    let firstRouteKey = this.props.navigation.routes[0].key;
    return (
      <View style={{flex: 1, zIndex: 1}}>
        <Drawer
          open={this.props.isDrawerOpen}
          type="overlay"
          content={<DrawerComponent {...this.props} />}
          panCloseMask={0.5}
          tapToClose={true}
          openDrawerOffset={0.3}
          closedDrawerOffset={-3}
          tweenDuration={200}
          onCloseStart={this.props.onPressClose}
          tweenHandler={(ratio) => ({
            mainOverlay: {backgroundColor: `rgba(0, 0, 0, ${ratio / 2})`},
          })}
        >
          <StatusBar
            backgroundColor={LA_GREY}
          />
          <NavigationCardStack
            direction="horizontal"
            navigationState={this.props.navigation}
            onNavigateBack={this._handleBackAction}
            renderScene={this._renderScene}
          />
        </Drawer>
      </View>
    );
  }
}

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
      dispatch({
        type: 'RESET_ROUTE', key: 'places',
      });
      dispatch({
        type: 'CLOSE_DRAWER',
      });
    },
    onPressTodo(username: string) {
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
    autoLogin(userAuth) {
      dispatch({type: 'LOGIN', userAuth});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
