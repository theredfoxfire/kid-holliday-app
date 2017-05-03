// @flow
import React from 'react';
import {View} from 'react-native';

import MyRewardListContainer from '../../containers/gamification/MyRewardListContainer';

export default function MyRewardListTabContent() {
  return (
    <View style={{flex: 1}}>
      <MyRewardListContainer />
    </View>
  );
}
