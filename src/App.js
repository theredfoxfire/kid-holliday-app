// @flow
import React, {Component} from 'react';
import {View, Platform, AppState, ToastAndroid} from 'react-native';
import {Provider} from 'react-redux';

import createAppStore from './store/configureStore';
import RootNavigationContainer from './navigation/RootNavigationContainer';

let store = createAppStore();

export default class App extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <RootNavigationContainer />
        </View>
      </Provider>
    );
  }
}
