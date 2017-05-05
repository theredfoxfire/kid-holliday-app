// @flow

import React, {Children, Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import BurgerButtonContainer from '../containers/BurgerButtonContainer';
import styles from './TitleBar-style';

type Props = {
  style?: StyleSet;
  children?: ReactNode;
  title: string;
  onIconButtonPress?: () => any;
};

export default class TitleBar extends Component {
  props: Props;

  render() {
    let {style, children, title, onIconButtonPress} = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.block}>
          <View style={styles.logo}>
            <BurgerButtonContainer />
          </View>
          <Text style={styles.title}>{title}</Text>
          {Children.count(children) !== 0 ? children : null}
        </View>
      </View>
    );
  }
}
