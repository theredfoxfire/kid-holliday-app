// @flow
import {StyleSheet} from 'react-native';

import {PRIMARY_BUTTON} from '../constants/color';
let SECONDARY_COLOR = '#fff';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: PRIMARY_BUTTON,
    borderColor: PRIMARY_BUTTON,
    borderRadius: 3,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    maxHeight: 40,
    minHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  invertedButton: {
    backgroundColor: SECONDARY_COLOR,
  },
  text: {
    color: SECONDARY_COLOR,
  },
  invertedText: {
    color: PRIMARY_BUTTON,
  },
  icon: {
    fontSize: 16,
  },
});
