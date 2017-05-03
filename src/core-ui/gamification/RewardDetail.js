// @flow
import React from 'react';
import {Modal, ScrollView, Text, View} from 'react-native';

import Button from '../Button';
import Dialog from '../Dialog';
import type {Reward} from '../../types/Reward';

type Props = {
  visible: boolean;
  reward: Reward;
  onClose: () => void;
  onBuyReward: (id: number) => void;
};

export default function RewardDetail(props: Props) {
  const {visible, reward, onClose, onBuyReward} = props;
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Dialog
          title="Detail hadiah"
          flexContent
          style={{flex: 1, margin: 20}}
          onClose={() => onClose()}
        >
          <ScrollView>
            <Text>*******************************</Text>
            <Text>TODO: Replace with Hasan's work</Text>
            <Text>*******************************</Text>
          </ScrollView>
          <View style={{borderTopWidth: 1, height: 50}}>
            <Button text="Beli" onPress={() => onBuyReward(reward.id)} />
          </View>
        </Dialog>
      </View>
    </Modal>
  );
}
