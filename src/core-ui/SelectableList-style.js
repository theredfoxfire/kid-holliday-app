// @flow

import {StyleSheet, Dimensions} from 'react-native';
import {PRIMARY_GREEN, ALTERNATE_GREY} from '../constants/color';

let {width, height} = Dimensions.get('window');


export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  content: {
    maxWidth: width * 0.8,
    maxHeight: height * 0.8,
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  contentHeader: {
    height: 60,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_GREEN,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  listItem: {
    width: width * 0.8,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  listItemSelected: {
    backgroundColor: ALTERNATE_GREY,
  },
  modalScrollView: {
    flex: 1,
    width: width * 0.8,
  },
});
