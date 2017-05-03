// @flow
import React, {Component} from 'react';
import {View, Modal, StyleSheet, Text} from 'react-native';

import {LoadingIndicator} from '../core-ui';

type Props = {
  style?: StyleSheet;
  isShowing: boolean;
  downloadProgress: number;
  totalDownloadSize: number;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: 5,
    backgroundColor: 'white',
    minHeight: 100,
    marginHorizontal: 50,
    padding: 20,
    justifyContent: 'space-around',
  },
  buttonContainer: {
    minWidth: 100,
  },
  textContainer: {
    flexWrap: 'wrap',
  },
  text: {
    textAlign: 'center',
  },
  loadingIndicatorContainer: {
    maxHeight: 50,
  },
});

export default class DownloadIndicator extends Component {
  props: Props
  constructor() {
    super(...arguments);
  }
  render() {
    let {style, isShowing, downloadProgress, totalDownloadSize} = this.props;
    let currentDownloaded = downloadProgress || 0;
    let totalDownload = totalDownloadSize || 100;
    return (
      <Modal
        visible={isShowing}
        transparent={true}
        onRequestClose={() => {}}
        animationType="fade"
      >
        <View style={[styles.root, style]}>
          <View style={styles.container}>
            <View style={styles.loadingIndicatorContainer}>
              <LoadingIndicator />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Mengunduh update...
                {' '}
                {Math.round((currentDownloaded / totalDownload) * 100)} %
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
