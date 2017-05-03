// @flow
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Icon,
  LinearGradient,
} from '../core-ui';
import styles from './GradientCard-style';

import {GRADIENT, FULL_GRADIENT} from '../constants/color';

type Props = {
  photo: ?ImageSource;
  type: 'product' | 'plant';
  style?: StyleSet;
  name: string;
  plantCategory?: string;
  plantVariant?: string;
  plantAge?: string;
  producerName?: string;
  highlight?: ReactNode;
  onPress: () => void;
  children?: ReactNode;
  isHorizontal?: boolean;
  customImageStyle?: StyleSet;
};

export function GradientCard(props: Props) {
  let {name, type, highlight, onPress, children, style, isHorizontal, customImageStyle} = props;
  let footer;
  let gradientColor = GRADIENT;
  if (type === 'product') {
    let {producerName} = props;
    footer = (
      <View style={styles.overlayContainer}>
        <View style={styles.spacer}>{highlight}</View>
        <Text style={styles.nameText}>{name}</Text>
        {
          (producerName != null) ? (
            <View>
              <View style={styles.separator} />
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{producerName}</Text>
              </View>
            </View>
          ) : (
            null
          )
        }
      </View>
    );
  } else {
    let {plantCategory, plantVariant, plantAge} = props;
    gradientColor = FULL_GRADIENT;
    footer = (
      <View style={styles.overlayContainer}>
        {highlight}
        <View style={styles.spacer} />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.subNameText}>{plantCategory ? `${plantCategory}, ` : null}{plantVariant}</Text>
        <View style={styles.separator} />
        <View style={styles.ageContainer}>
          <Text style={styles.ageText}>Usia tanam: {plantAge}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={[styles.container, isHorizontal ? styles.flexRow : {margin: 5}, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode="cover"
          source={props.photo}
          style={[isHorizontal ? styles.imageHorizontal : styles.imageVertical, customImageStyle]}
        />
        <LinearGradient colors={gradientColor} style={styles.overlayContainer}>
          {footer}
        </LinearGradient>
      </TouchableOpacity>
      {children}
    </View>
  );
}

type ProductHighlightProps = {
  icon?: string;
  text: string;
};

export function ProductHighlight(props: ProductHighlightProps) {
  return (
    <View style={styles.highlightContainer}>
      {
        props.icon ? (
          <Icon style={styles.highlightIcon} name={props.icon} />
        ) : null
      }
      <Text style={styles.highlightText}>{props.text}</Text>
    </View>
  );
}
