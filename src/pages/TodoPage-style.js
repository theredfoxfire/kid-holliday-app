//@flow

import {
  StyleSheet,
  Platform,
} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {GREY, LA_BLUE_OLD, DARK_GREY} from '../constants/color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  image: {
    width: 90,
    height: 60,
  },
  placeContainer: {
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: GREY,
    borderBottomWidth: 2,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  barContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  itemPlaceContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    width: 250,
    marginLeft: 10,
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
    fontSize: 30,
  },
  picker: {
    width: 100,
  },
});
