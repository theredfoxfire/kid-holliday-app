// @flow

import React from 'react';

import {
  View,
  Image,
} from 'react-native';

import styles from './Comment-style';
import avatar from '../images/default-avatar.png';
type Props = {
  image: ?ImageSource;
  imageStyle?: StyleSet;
  children?: ReactNode;
};

export default function Comment(props: Props) {
  let {image, imageStyle, children} = props;
  return (
    <View style={styles.root}>
      <Image
        source={image ? image : avatar}
        style={[styles.avatarWrapper, imageStyle]}
        resizeMode="cover"
      />
      <View style={styles.childrenWrapper}>
        {children}
      </View>
    </View>
  );
}
