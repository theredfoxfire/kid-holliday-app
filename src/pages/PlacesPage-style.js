//@flow

import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {LA_RED, LA_BLUE_LIGHT, GREY, LA_WHITE, LA_GREY} from '../constants/color';
const mainWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  formContainer: {
    height: 150,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LA_BLUE_LIGHT,
  },
  listContainer: {
    height: 100,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderBottomColor: GREY,
    borderBottomWidth: 2,
  },
  titleContainer: {
    width: mainWidth * 0.9,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
  },
  field: {
    width: mainWidth * 0.9,
    backgroundColor: GREY,
    marginTop: 15,
    height: 50,
    borderWidth: 1,
    borderColor: GREY,
    borderRadius: 5,
  },
  rootField: {
    marginTop: 0,
    marginBottom: 0,
  },
  iconStylePre: {
    color: LA_RED,
    fontSize: 40,
  },
  iconStyleEnd: {
    color: LA_WHITE,
    fontSize: 45,
    backgroundColor: LA_RED,
    borderColor: LA_RED,
    borderWidth: 2,
    borderRadius: 5,
  },
  lableContainer: {
    width: mainWidth * 0.9,
    marginTop: 15,
  },
  lableText: {
    color: LA_RED,
    fontSize: 16,
    fontWeight: 'bold',
  },
  barContainer: {
    height: 60,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  init: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
