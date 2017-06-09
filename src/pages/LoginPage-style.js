//@flow

import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
const mainWidth = Dimensions.get('window').width;

import {INFO_TEXT} from '../constants/color';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: (Platform.OS === 'ios') ? 15 : 50,
    height: 200,
  },
  field: {
    width: mainWidth * 0.80,
  },
  forgot: {
    width: mainWidth * 0.80,
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
  buttonWidth: {
    width: mainWidth * 0.80,
  },
});
