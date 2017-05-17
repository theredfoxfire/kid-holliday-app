/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/App';
import SplashScreen from 'react-native-splash-screen';

export default class LiburanAnak extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }

  render() {
    return <App />
  }
}

AppRegistry.registerComponent('LiburanAnak', () => LiburanAnak);
