// @flow

import React, {Children} from 'react';
import {View} from 'react-native';

import styles from './TileButtonWrapper-style';

type Props = {
  children?: ReactNode;
};

export default function TileButtonWrapper(props: Props) {
  let {children} = props;
  return Children.count(children) !== 0 ? (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        {children}
      </View>
    </View>
  ) : null;
}
