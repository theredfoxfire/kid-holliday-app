// @flow

import React, {Children, Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import BurgerButtonContainer from '../containers/BurgerButtonContainer';
import styles from './TitleBar-style';
import {IconButton} from '../core-ui';

type Props = {
  style?: StyleSet;
  children?: ReactNode;
  title: string;
  iconName?: string;
  onIconButtonPress?: () => void;
};

export default class TitleBar extends Component {
  props: Props;

  render() {
    let {style, children, title, onIconButtonPress, iconName} = this.props;
    const leftIcon = iconName ? <IconButton containerStyle={styles.leftIcon} icon={iconName} onPress={() => onIconButtonPress ? onIconButtonPress() : null} /> : <BurgerButtonContainer />;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.block}>
          <View style={styles.logo}>
            {leftIcon}
          </View>
          <Text style={styles.title}>{title}</Text>
          {Children.count(children) !== 0 ? children : null}
        </View>
      </View>
    );
  }
}
