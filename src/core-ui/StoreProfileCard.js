// @flow
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {
  Icon,
  LinearGradient,
} from '../core-ui';
import styles from './StoreProfileCard-style';

import {GRADIENT} from '../constants/color';

type Props = {
  name: string;
  address: string;
  phoneNumber: string;
  productCount: number;
  picture: ImageSource;
};

export default function StoreProfileCard(props: Props) {
  let {name, address, phoneNumber, productCount, picture} = props;
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={picture} style={styles.image} />
      <LinearGradient colors={GRADIENT} style={styles.overlay}>
        <Text style={styles.textBig}>{name}</Text>
        <Text style={styles.textSmall}>{address}</Text>
        <View style={styles.row}>
          <View style={styles.iconWithText}>
            <Icon name="phone" style={styles.icon} />
            <Text style={styles.textSmall}>{phoneNumber}</Text>
          </View>
          <Text style={styles.textSmall}>{productCount} Products</Text>
        </View>
      </LinearGradient>
    </View>
  );
}
