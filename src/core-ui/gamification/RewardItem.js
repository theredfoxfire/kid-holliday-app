// @flow
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {
  LinearGradient,
} from '../../core-ui';
import formatLargeNumbers from '../../helpers/formatLargeNumbers';
import formatNumber from '../../helpers/formatNumber';
import styles from './RewardItem-style';
import shovel from '../../images/shovel.png';

import {GRADIENT} from '../../constants/color';

type Props = {
  name: string;
  thumbnail?: ImageSource;
  price?: number;
  coin?: number;
  style?: StyleSet;
  onPress: () => void;
  children?: ReactNode;
  customImageStyle?: StyleSet;
};

export default function RewardItem(props: Props) {
  let {name, onPress, children, style, customImageStyle, price, coin, thumbnail} = props;
  let footer = (
    <View style={styles.overlayContainer}>
      <Text style={styles.infoText}>{name}</Text>
      <View>
        <View style={styles.separator} />
        <View style={styles.infoContainer}>
          <Text style={styles.numberText}>{price ? formatNumber(price + '', {prefix: 'Rp', separator: '.'}) : 0}</Text>
          <View style={styles.flexRow}>
            <Text style={styles.numberText}>{coin ? formatLargeNumbers(coin) : 0}</Text>
            <View style={styles.shovelContainer}>
              <Image
                resizeMode="cover"
                source={shovel}
                style={styles.shovel}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  let thumb;
  if (thumbnail) {
    thumb = (
      <Image
      resizeMode="cover"
      source={thumbnail}
      style={[styles.imageVertical, customImageStyle]}
      />
    );
  } else {
    thumb = (<View style={styles.noImage} />);
  }
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        {thumb}
        <LinearGradient colors={GRADIENT} style={styles.overlayContainer}>
          {footer}
        </LinearGradient>
      </TouchableOpacity>
      {children}
    </View>
  );
}
