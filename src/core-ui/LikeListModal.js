// @flow
import React from 'react';
import styles from './LikeListModal-style';
import listViewDataSource from '../helpers/listViewDataSource';

import {View, ListView, Modal, Text, TouchableWithoutFeedback} from 'react-native';
import {Button, LoadingIndicator} from '../core-ui';

import type {UserLike} from '../types/User';

type Props = {
  visible: boolean;
  userLikes: ?Array<UserLike>;
  onClose: () => void;
};

export default function LikeListModal(props: Props) {
  let {visible, userLikes, onClose} = props;
  let ds = listViewDataSource();
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.flex, styles.mainWrapper]}>
          <View style={styles.contentWrapper}>
            <TouchableWithoutFeedback>
              <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Orang yang menyukai ini</Text>
              </View>
            </TouchableWithoutFeedback>
            {
              userLikes ? (
                <ListView
                  dataSource={ds.cloneWithRows(userLikes)}
                  renderRow={
                    (userLike) => (
                      <TouchableWithoutFeedback>
                        <View>
                          <Text style={styles.userLike}>{userLike.firstName}</Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )
                  }
                />
              ) : (
                <LoadingIndicator small />
              )
            }
            <Button text="OK" onPress={onClose} style={styles.button} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
