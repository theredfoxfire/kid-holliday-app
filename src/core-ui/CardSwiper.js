// @flow
import React, {Children} from 'react';
import {View} from 'react-native';
import formatPriceRange from '../helpers/formatPriceRange';
import {ProductHighlight} from '../core-ui/GradientCard';
import ProductDetail from '../core-ui/ProductDetail';
import Swiper from 'react-native-swiper';
import styles from './CardSwiper-style';

type Props = {
  children?: ReactNode;
};

export default function CardSwiper(props: Props) {
  let {children} = props;

  let cardProducts = [];
  Children.forEach(children, (child) => {
    if (child.type === CardProduct) {
      cardProducts.push(child);
    }
  });

  let dot = <View style={styles.dot} />;
  let activeDot = <View style={styles.activeDot} />;

  return (
    <View style={{position: 'relative', right: 10}}>
      <Swiper
        height={150}
        paginationStyle={styles.pagination}
        dot={dot}
        activeDot={activeDot}
        autoplayTimeout={3}
        autoplay
        loop
      >
        {cardProducts}
      </Swiper>
    </View>
  );
}

type CardProps = {
  productName: string;
  priceMax: ?number;
  priceMin: ?number;
  producerPhoto: ?ImageSource;
  producerName: string;
  city: ?string;
  onPress: () => void;
};

export function CardProduct(props: CardProps) {
  let {producerName, productName, priceMin, priceMax, producerPhoto, city, onPress} = props;
  let highlightBadge = <ProductHighlight icon="bookmark" text="Highlight" />;
  return (
    <View style={styles.productHighlight}>
      <ProductDetail
        type="product"
        isHorizontal
        highlight={highlightBadge}
        name={productName}
        priceRange={formatPriceRange(priceMin, priceMax)}
        photo={producerPhoto}
        producerName={producerName}
        producerCity={city}
        onPress={onPress}
      />
    </View>
  );
}
