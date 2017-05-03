// @flow
import React from 'react';
import {Text, View} from 'react-native';

import MyActivityListContainer from '../../containers/gamification/MyActivityListContainer';

export default function MyActivitiesTabContent() {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{paddingBottom: 10}}>
        Dengan melakukan kegiatan di bawah, anda akan mendapatkan
        poin level dan koin. Kegiatan terbagi menjadi kegiatan yang
        hanya bisa dilakukan 1 kali dan kegiatan yang dapat diulang.
      </Text>
      <MyActivityListContainer />
    </View>
  );
}
