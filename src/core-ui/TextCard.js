// @flow

import {View, Text} from 'react-native';
import React from 'react';

import styles from './TextCard-style';

type Props = {
  title?: string;
  textItems: ?Array<string>;
  style?: StyleSet;
  isBold?: boolean;
};

export default function TextCard(props: Props) {
  let {title, textItems, style, isBold} = props;
  let customStyle = [styles.root, style];
  if (textItems == null) {
    return;
  }
  return (
    <View style={customStyle}>
      <Text style={styles.title}>{title}</Text>
      {textItems.map((item, index) => (
        <Text key={index} style={[styles.innerText, isBold ? {fontWeight: '700'} : {}]}>{item}</Text>
      ))}
    </View>
  );
}
