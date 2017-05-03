// @flow

import {SECONDARY_GREEN} from '../constants/color';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  header: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  headerLink: {
    flex: 1,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerTitleLink: {
    fontWeight: 'bold',
    fontSize: 14,
    color: SECONDARY_GREEN,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
  },
  contentWrapper: {
    flex: 1,
  },
});
