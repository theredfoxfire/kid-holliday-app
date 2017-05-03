// @flow

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './ProfileHeaderText-style';


type Props = {
  profileTitle: string;
  personInCharge?: string;
  profileType: 'store' | 'group' | 'small-group' | 'person';
  productTotal?: number;
  groupInfo?: {
    member: number;
    thread: number;
  };
  userRole?: string;
};
export default function ProfileHeaderText(props: Props) {
  let {profileTitle, personInCharge, profileType} = props;
  if (profileType === 'small-group') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{profileTitle}</Text>
        <Text style={styles.person}>Penyuluh: {personInCharge}</Text>
      </View>
    );
  } else if (profileType === 'group') {
    let {groupInfo} = props;
    return groupInfo ? (
      <View style={styles.containerLarge}>
        <Text style={styles.title}>{profileTitle}</Text>
        <Text style={styles.person}>Penyuluh: {personInCharge}</Text>
        <View style={styles.groupWrapper}>
          <View style={styles.groupItems}>
            <Text style={styles.groupNumbering}>{groupInfo.member}</Text>
            <Text style={styles.defaultText}>Anggota</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.groupItems}>
            <Text style={styles.groupNumbering}>{groupInfo.thread}</Text>
            <Text style={styles.defaultText}>Thread</Text>
          </View>
        </View>
      </View>
   ) : null;
  } else if (profileType === 'store') {
    let {productTotal} = props;
    return productTotal ? (
      <View style={styles.containerLarge}>
        <Text style={styles.title}>{profileTitle}</Text>
        <Text style={styles.storeNumber}>{productTotal} Produk</Text>
        <Text style={styles.defaultText}>Dimiliki oleh: {personInCharge}</Text>
      </View>
   ) : null;
  } else {
    let {userRole} = props;
    return userRole ? (
      <View style={styles.containerLarge}>
        <Text style={styles.title}>{profileTitle}</Text>
        <Text style={styles.userRole}>{userRole}</Text>
      </View>
   ) : null;
  }
}
