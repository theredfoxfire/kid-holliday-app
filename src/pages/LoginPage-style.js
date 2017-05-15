//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';

import {INFO_TEXT} from '../constants/color';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingBottom: (Platform.OS === 'ios') ? 15 : 50,
    height: 200,
  },
  field: {
    width: 300,
  },
  forgot: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
  },
  labelForgot: {
    color: INFO_TEXT,
    fontWeight: 'bold',
  },
  centeredButton: {
    textAlign: 'center',
  },
  placeholderStyle: {
    marginLeft: 20,
  },
  signUp: {
    flexDirection: 'row',
  },
});
