//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {GREY, LA_BLUE_OLD, DARK_GREY, LA_RED} from '../constants/color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  image: {
    width: 90,
    height: 70,
  },
  placeContainer: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: GREY,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginHorizontal:5,
    backgroundColor: '#fff',
  },
  barContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  itemPlaceContainer: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    width: 220,
    marginLeft: 10,
    marginTop: -5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checklistContainer: {
    width: 30,
  },
  checlist: {
    marginTop: 15,
    color: LA_BLUE_OLD,
    marginRight: 5,
    fontSize: 30,
  },
  picker: {
    width: 100,
  },
  init: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  lableText: {
    color: LA_RED,
    fontWeight: 'bold',
  },
});
