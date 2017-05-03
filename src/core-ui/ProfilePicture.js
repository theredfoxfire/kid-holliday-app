// @flow
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Icon} from '../core-ui';

import styles from './ProfilePicture-style';

type Props = {
  source?: ImageSource;
  onPress?: () => void;
};

export default function ProfilePicture(props: Props) {
  let {source, onPress} = props;

  return (
    <View style={styles.profilePicture}>
      {source && source.uri ? (
        <Image
          style={styles.avatarImage}
          source={source}
        />
      ) : (
        <Icon name="person" size={60} style={styles.personIcon} />
      )}
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <Icon name="photo-camera" style={styles.cameraIcon} />
      </TouchableOpacity>
    </View>
  );
}
