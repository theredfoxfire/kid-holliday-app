// @flow

import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import styles from './IconButton-style';
import {Icon} from '../core-ui';

type Props = {
  onPress?: () => any;
  icon: string;
  text?: string;
  style?: StyleSet;
  textStyle?: StyleSet;
  containerStyle?: StyleSet;
};

export default function IconButton(props: Props) {
  let {onPress, icon, text, style, textStyle, containerStyle} = props;
  let customStyle = [styles.iconSize, style];
  return text ? (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.containerWithText, containerStyle]}>
        <Icon name={icon} style={[styles.iconSizeSmall, style]} />
        <Text style={[styles.iconText, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.containerNoText, containerStyle]}>
        <Icon name={icon} style={customStyle} />
      </View>
    </TouchableOpacity>
  );
}
