// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 8,
    flex: 1,
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderBottomWidth: 0,
  },
  childrenWrapper: {
    padding: 6,
    flex: 1,
  },
});
