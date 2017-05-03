// @flow
import React, {Children} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  Share,
} from 'react-native';
import {
  LinearGradient,
  Button,
} from '../core-ui';
import Swiper from 'react-native-swiper';
import styles from './ImageSwiper-style';

import {IMAGE_SLIDE_RATIO} from '../constants/size';
import {GRADIENT} from '../constants/color';

type Props = {
  children?: ReactNode;
  height?: number;
};

const {width} = Dimensions.get('window');

export function ImageSwiper(props: Props) {
  let {children, height, ...rest} = props;
  let dot = <View style={styles.dot} />;
  let activeDot = <View style={styles.activeDot} />;

  let imageSlides = [];
  Children.forEach(children, (child) => {
    if (child.type === ImageSlide) {
      imageSlides.push(child);
    }
  });

  return (
    <View style={styles.container}>
      <Swiper
        height={(height != null) ? height : width * IMAGE_SLIDE_RATIO}
        dot={dot}
        activeDot={activeDot}
        paginationStyle={styles.pagination}
        autoplayTimeout={3}
        autoplay
        loop
        {...rest}
      >
        {imageSlides}
      </Swiper>
    </View>
  );
}

type ImageSlideProps = {
  picture?: ImageSource;
  children?: ReactNode;
  gradient?: Array<string>;
  onPress?: () => void;
};

export function ImageSlide(props: ImageSlideProps) {
  let {picture, children, gradient, onPress} = props;
  let Container = onPress ? TouchableOpacity : View;
  let linearGradient = (
    <LinearGradient colors={gradient ? gradient : GRADIENT} style={styles.overlayContainer}>
      {children}
    </LinearGradient>
  );
  return (
    <Container style={styles.imageSlide} onPress={onPress} activeOpacity={0.85}>
      <Image resizeMode="cover" style={styles.image} source={picture} />
      {Children.count(children) === 0 ? null : linearGradient}
    </Container>
  );
}

// type ShareContent = {
//   contentType: 'link';
//   contentUrl: string;
//   contentDescription?: string;
// };

type CardLayoutProps = {
  title: string;
  date: string;
  source: string;
  shareContent?: Object; // NOTE: when using ShareContent type, flow will throw Error because ShareContent
                         //       is not exactly the same as FB's flow type for ShareDialog
};

export function ImageSlideOverlay(props: CardLayoutProps) {
  let {title, date, source, shareContent} = props;
  let shareButton = shareContent ? (
    <Button
      icon="share" text="BAGIKAN"
      iconStyle={{marginRight: 2}}
      style={{flex: 0, alignSelf: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderWidth: 0}}
      onPress={() => {
        shareContent ? share(shareContent) : null;
      }}
    />
  ) : (
    <View />
  );
  let sourceLink = (
    <Text style={styles.textLink}>{source}</Text>
  );
  return (
    <View style={styles.overlayContainer}>
      <View style={styles.buttonContainer}>
        {shareButton}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDate}>
          {date}, via: {sourceLink}
        </Text>
      </View>
    </View>
  );
}

function share(shareContent) {
  let {contentUrl, contentDescription} = shareContent;
  Share.share({
    message: `Baca berita "${contentDescription}" selengkapnya di ${contentUrl}`,
  })
  .catch(() => ToastAndroid.show(`Gagal membagikan berita`, ToastAndroid.SHORT));
}
