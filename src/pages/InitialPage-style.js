//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';

const height = Platform.OS === 'ios' ? 175 : 250;

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  imageContainer: {
    height: 150,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    width: getScreenSize().width,
    height: getScreenSize().height,
  },
  formContainer: {
    width: getScreenSize().width * 0.9,
    height: 200,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
  },
  buttonContainer: {
    width: getScreenSize().width * 0.9,
    height: 220,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
