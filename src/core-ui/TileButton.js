// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {FlatButton} from '../core-ui';

import styles from './TileButton-style';
type Props = {
  onPress: () => void;
  image: ImageSource;
  tileName: string;
  tileDescription?: string;
  isHorizontal?: boolean;
  colorStyle?: StyleSet;
  imageSize?: {
    width: number;
    height: number;
  };
};

export default function TileButton(props: Props) {
  let {onPress, tileDescription, tileName, image, isHorizontal, imageSize} = props;
  let {colorStyle} = props;
  if (isHorizontal == null) {
    isHorizontal = false;
  }
  let color = [styles.lightBackground, colorStyle];
  return isHorizontal ? (
    <FlatButton onPress={onPress} style={[styles.mainContainer, styles.contentAtStart, styles.flex, color]}>
      <View style={styles.rowContainer}>
        <Image source={image} style={[styles.tileImage, imageSize]} resizeMode="contain" />
        <View style={styles.rowTextContainer}>
          <Text style={styles.tileHeader}>{tileName}</Text>
          <Text style={styles.tileDetail}>{tileDescription}</Text>
        </View>
      </View>
    </FlatButton>
  ) : (
    <FlatButton style={[styles.mainContainer, styles.flex, color]} onPress={onPress}>
      <View style={styles.collumnContainer}>
        <Image source={image} style={[styles.tileImage, styles.centerSelf, imageSize]} />
        <Text style={styles.tileColumnHeader}>{tileName}</Text>
      </View>
    </FlatButton>
  );
}
