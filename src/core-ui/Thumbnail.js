// @flow

import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import styles from './Thumbnail-style';

type Props = {
  shape?: 'round' | 'square' | 'stretch';
  image?: ImageSource;
  style?: StyleSet;
};

export default function Thumbnail(props: Props) {
  let {shape, image, style} = props;
  let thumbnailStyle = [];
  switch (shape) {
    case 'round': thumbnailStyle.push(styles.rounded); break;
    case 'square': thumbnailStyle.push(styles.square); break;
    case 'stretch': thumbnailStyle.push(styles.stretch); break;
    default: thumbnailStyle.push(styles.default);
  }
  if (style) {
    thumbnailStyle.push(style);
  }
  return shape === 'stretch' ? (
    <View style={styles.container}>
      <Image
        style={thumbnailStyle}
        source={image}
        resizeMode="contain"
        resizeMethod="resize"
      />
    </View>
  ) : (
    <View>
      <Image
        style={thumbnailStyle}
        source={image}
        resizeMethod="resize"
      />
    </View>
  );
}
