// @flow
import React from 'react';
import {View} from 'react-native';

import RewardCard from './RewardCard';
import type {MyReward} from '../../types/Reward';

type Props = {
  rewards: Array<MyReward>;
};

export default function MyRewardList(props: Props) {
  const {rewards} = props;
  return (
    <View style={{flex: 1}}>
      {rewards.map((reward) => (
        <RewardCard
          key={reward.id}
          rewardThumbnail={reward.thumbnail}
          rewardName={reward.name}
          rewardSubText={reward.distributorName}
          isClaimed={reward.isClaimed}
        />
      ))}
    </View>
  );
}
