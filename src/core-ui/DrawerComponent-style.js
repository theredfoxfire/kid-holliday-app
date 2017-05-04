//@flow
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {LIGHT_GREY, LA_BLUE_OLD} from '../constants/color';

import {getScreenSize} from '../helpers/getSize';

const height = Platform.OS === 'ios' ? 75 : 100;

export default StyleSheet.create({
  containerDrawer: {
    flexDirection: 'row',
  },
  containerMenus: {
    backgroundColor: '#fff',
    height: getScreenSize().height,
  },
  drawerItem: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: getScreenSize().width / 12,
  },
  drawerItemLable: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  footerText: {
    color: LA_BLUE_OLD,
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  headerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    paddingBottom: 40,
    paddingTop: 30,
  },
  headerBottomRight: {
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  image: {
    width: getScreenSize().width * 0.40,
    height: height,
  },
  logoTop: {
    fontSize: 30,
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    color: '#3ece73',
  },
  logoBottom: {
    marginTop: -5,
    fontSize: 16,
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    color: LIGHT_GREY,
  },
  drawerBody: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    backgroundColor: LA_BLUE_OLD,
  },
  icon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconFooter: {
    color: LA_BLUE_OLD,
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerFooter: {
    paddingTop: 5,
    marginBottom: 30,
    marginHorizontal: 10,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 1,
  },
  onClose: {
    flex: 1,
    backgroundColor: LA_BLUE_OLD,
  },
});
