// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './ThumbnailCard-style';
import defaultImage from '../images/la-logo.png';
import {Thumbnail, IconButton} from '../core-ui';

type Props = {
  children?: ReactNode;
  image?: ImageSource;
  shape?: 'round' | 'square' | 'stretch';
  toggleOption?: boolean;
  style?: StyleSet;
  thumbnailStyle?: StyleSet;
  onPress?: () => void;
};

export default function ThumbnailCard(props: Props) {
  let {children, image, shape, toggleOption, onPress, style, thumbnailStyle} = props;
  image = image ? image : defaultImage;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <View style={styles.card}>
          {
            shape === 'stretch' ? (
              <View style={styles.thumbnailContainerStretch}>
                <Thumbnail image={image} shape={shape} style={thumbnailStyle} />
              </View>
            ) : (
              <View style={styles.thumbnailContainer}>
                <Thumbnail image={image} shape={shape} style={thumbnailStyle} />
              </View>
            )
          }
          <View style={styles.cardContent}>
            {children}
          </View>
          {toggleOption ?
            <View style={styles.optionButtonContainer}>
              <IconButton icon="more-vert" style={styles.optionButton} />
            </View> : null
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}
