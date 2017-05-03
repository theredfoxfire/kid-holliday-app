// @flow
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './ProductDetail-style';
import {
  GradientCard,
} from '../core-ui';

type ProductDetailProps = {
  photo: ?ImageSource;
  name: string;
  priceRange: string;
  producerName: string;
  producerCity: ?string;
  isHorizontal?: boolean;
  highlight?: ReactNode;
  style?: StyleSet;
  onPress: () => void;
};

export default function ProductDetail(props: ProductDetailProps) {
  let {priceRange, producerName, producerCity, highlight, isHorizontal, ...productCardProps} = props;
  return (
    <GradientCard {...productCardProps} type="product" highlight={highlight} isHorizontal={isHorizontal}>
      <View style={styles.container}>
        <Text style={styles.priceText}>{priceRange}</Text>
        <Text ellipsizeMode="tail" numberOfLines={2}>{producerName}</Text>
        <Text style={styles.smallText}>{producerCity}</Text>
      </View>
    </GradientCard>
  );
}
