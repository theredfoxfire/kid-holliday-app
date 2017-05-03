//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';

import {LA_BLUE, LA_WHITE} from '../constants/color';

const height = Platform.OS === 'ios' ? 175 : 250;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  imageContainer: {
    height: 300,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  image: {
    width: getScreenSize().width * 0.50,
    height: height,
  },
  wall: {
    marginTop: -650,
    zIndex: 0,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  formContainer: {
    height: 200,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
  },
  buttonContainer: {
    height: 300,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  divider: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#686868',
    width: 125,
  },
  textDivider: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 14,
  },
});
