// @flow

import React from 'react';
import {View} from 'react-native';
import {
  IconButton,
} from '../core-ui';
import styles from './TitleBar-style';

type Props = {
  onIconButtonPress?: () => any;
};

export default function BurgerButton(props: Props) {
  let {onIconButtonPress} = props;
  let burgerButton = <IconButton containerStyle={styles.leftIcon} icon="menu" onPress={() => onIconButtonPress ? onIconButtonPress() : null} />;
  return (
    <View>
      {burgerButton}
    </View>
  );
}
