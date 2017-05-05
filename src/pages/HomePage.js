// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import {
  Button,
  TitleBar,
} from '../core-ui';
import styles from './HomePage-style';
import autobind from 'class-autobind';
import backroungCover from '../images/la-background.png';
import laLogo from '../images/la-logo.png';



type State = {

};
type Props = {

};

export default class HomePage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Liburan Anak"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image source={laLogo} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subtitle}>Liburan Anak</Text>
        </View>
        <View style={styles.wall}>
          <Image source={backroungCover} style={styles.backgroundImage} />
        </View>
      </View>
    );
  }
}
