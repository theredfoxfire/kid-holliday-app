// @flow

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  LinearGradient,
  Button,
  LoadingIndicator,
} from '../core-ui';
import styles from './ThreadGroupCard-style';
import {GRADIENT} from '../constants/color';

type ThreadGroup = {
  groupName: string;
  groupDescription: string;
  groupMemberCount: number;
  groupTopicCount: number;
  groupImageThumbnail: ImageSource;
};

type Props = {
  onGroupPress?: Function;
  onButtonPress?: Function;
  buttonLoading?: boolean;
  groupHeader: ThreadGroup;
  buttonTitle?: string;
  isButtonDisabled?: boolean;
};

export default function ThreadGroupCard(props: Props) {
  let {onGroupPress, onButtonPress, groupHeader, buttonTitle, isButtonDisabled, buttonLoading} = props;
  let {groupName, groupDescription, groupMemberCount, groupTopicCount, groupImageThumbnail} = groupHeader;
  return (
    <TouchableOpacity onPress={onGroupPress} style={styles.container}>
      <View style={styles.groupImage}>
        <Image resizeMode="cover" style={styles.groupImage} source={groupImageThumbnail} />
        <LinearGradient colors={GRADIENT} style={styles.gradientOverlay}>
          <View style={styles.gradientOverlay}>
            <View style={styles.spacer} />
            <View style={styles.imageText}>
              <View style={styles.textWrapper}>
                <Text style={styles.numberText}>{groupMemberCount}</Text>
                <Text style={styles.contentText}>Anggota</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.numberText}>{groupTopicCount}</Text>
                <Text style={styles.contentText}>Topik</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.groupInfo}>
        <View style={styles.groupDetailWrapper}>
          <Text style={styles.groupName}>Kelompok {groupName}</Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.groupDesc}>{groupDescription}</Text>
        </View>
        {
          buttonLoading ? (
            <Button
              style={[styles.buttonStyle, {backgroundColor: 'grey', borderColor: 'grey'}]}
              disabled={true}
            >
              <LoadingIndicator style={{padding: 1}} size={20} />
            </Button>
          ) : (
            <Button
              text={buttonTitle ? buttonTitle : 'GABUNG'}
              style={[
                styles.buttonStyle,
                isButtonDisabled ? {backgroundColor: 'grey', borderColor: 'grey'} : null,
              ]}
              textStyle={{fontSize: 10, fontWeight: '700'}}
              disabled={isButtonDisabled}
              onPress={() => {
                onButtonPress ? onButtonPress() : {};
              }}
            />
          )
        }
      </View>
    </TouchableOpacity>
  );
}
