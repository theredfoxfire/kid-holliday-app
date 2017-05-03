// @flow

import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import styles from './ProfileHeader-style';

type Props = {
  children?: ReactNode;
  headerType: 'small' | 'large';
  image: ImageSource;
};

export default function ProfileHeader(props: Props) {
  let {headerType, image, children} = props;
  let overlayStyle = [];
  let profileImageStyle = [];
  let blurStyle = [];
  let imageContainerStyle = [];
  let textContainerStyle = [];
  if (headerType === 'small') {
    overlayStyle.push(styles.overlaySmall);
    profileImageStyle.push(styles.profileImageSmall);
    blurStyle.push(styles.blurSmall);
    imageContainerStyle.push(styles.imageContainerSmall);
    textContainerStyle.push(styles.textContainerSmall);
  } else {
    overlayStyle.push(styles.overlayLarge);
    profileImageStyle.push(styles.profileImageLarge);
    blurStyle.push(styles.blurLarge);
    imageContainerStyle.push(styles.imageContainerLarge);
    textContainerStyle.push(styles.textContainerLarge);
  }
  return (
    <View>
      <Image source={image} style={overlayStyle}>
        <View style={blurStyle}>
          <View style={imageContainerStyle}>
            <Image source={image} style={profileImageStyle} resizeMode="cover" />
          </View>
          <View style={textContainerStyle}>
            {children}
          </View>
        </View>
      </Image>
    </View>

  );
}
