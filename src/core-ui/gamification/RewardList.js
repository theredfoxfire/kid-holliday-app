// @flow
import React from 'react';
import {View} from 'react-native';

import RewardItem from './RewardItem';
import type {Reward} from '../../types/Reward';

type Props = {
  rewards: Array<Reward>;
};

export default function RewardList(props: Props) {
  const {rewards} = props;
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {rewards.map((reward) => (
        <RewardItem
        {...reward}
        onPress={() => {}}
        />
      ))}
    </View>
  );
}
