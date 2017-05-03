// @flow
import React from 'react';
import {Modal, ScrollView, Text, View} from 'react-native';

import Dialog from '../Dialog';
import ButtonRow from '../ButtonRow';
import Button from '../Button';

type Props = {
  visible: boolean;
  isSuccess: boolean;
  onClose: () => void;
};

export default function RewardBuyInfo(props: Props) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={props.visible}
      onRequestClose={() => props.onClose()}
    >
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Dialog
          title="Pembelian Sukses"
          flexContent
          style={{flex: 1, margin: 20}}
          onClose={() => props.onClose()}
        >
          <ScrollView style={{flex: 1}}>
            <Text>*******************************</Text>
            <Text>TODO: Replace with Hasan's work</Text>
            <Text>*******************************</Text>
          </ScrollView>
          <View style={{borderTopWidth: 1, padding: 10}}>
            <Text>
              Anda dapat menunjukkan kode/barcode yang terdapat pada
              'HadiahKu' ke Indomaret terdekat untuk mengambil barang yang
              telah dibeli.
            </Text>
            <ButtonRow>
              <Button text="Ke HadiahKu" onPress={() => props.onClose()} />
              <Button text="Kembali ke daftar hadiah" onPress={() => props.onClose()} />
            </ButtonRow>
          </View>
        </Dialog>
      </View>
    </Modal>
  );
}
