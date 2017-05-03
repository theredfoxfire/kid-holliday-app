// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './RewardCard-style';

type Props = {
  rewardThumbnail: string;
  rewardName: string;
  rewardSubText: string;
  isClaimed: boolean;
};

export default function RewardCard(props: Props) {
  let {rewardThumbnail, rewardName, rewardSubText, isClaimed} = props;

  return (
    <View style={[styles.container, styles.bottomBorder, styles.paddingBottom, styles.paddingTop, styles.marginBottom]}>
      <View style={styles.flexRow}>
        <Image style={styles.thumbnail} source={{uri: rewardThumbnail}} />
        <View style={[styles.flex, styles.leftMargin]}>
          <Text style={styles.headerText}>{rewardName}</Text>
          <Text style={styles.subText}>{rewardSubText}</Text>
        </View>
      </View>
      {!isClaimed ? (
        <View style={styles.extremeLeftPadding}>
          <Text style={[styles.yellowText, styles.marginBottom, styles.italicText]}>Hadiah Sedang Diproses</Text>
        </View>
      ) : (
        <View style={styles.extremeLeftPadding}>
          <Text style={[styles.greenText, styles.boldText, styles.marginBottom, styles.boldText]}>Hadiah Telah Dikirim</Text>
        </View>
      )}
    </View>
  );
}
