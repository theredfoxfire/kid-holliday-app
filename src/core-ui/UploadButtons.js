// @flow
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Icon} from '../core-ui';
import styles from './UploadButtons-style';

type Props = {
  onCameraPress?: () => void;
  onGalleryPress?: () => void;
};

export default function UploadButtons(props: Props) {
  let {onCameraPress, onGalleryPress} = props;
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={onCameraPress} style={styles.camera}>
        <Icon name="camera" style={styles.icon} />
        <Text style={styles.text}>Kamera</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity onPress={onGalleryPress} style={styles.gallery}>
        <Icon name="image" style={styles.icon} />
        <Text style={styles.text}>Galeri</Text>
      </TouchableOpacity>
    </View>
  );
}
