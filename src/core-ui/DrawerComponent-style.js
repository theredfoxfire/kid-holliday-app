//@flow
import {StyleSheet, Dimensions} from 'react-native';
import {LIGHT_GREY} from '../constants/color';

let {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  containerDrawer: {
    flexDirection: 'row',
  },
  containerMenus: {
    backgroundColor: '#fff',
    height: height,
  },
  drawerItem: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width / 12,
  },
  drawerItemLable: {
    color: '#8e8e8e',
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  drawerHeader: {
  },
  headerBottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f7f7f7',
    paddingBottom: 40,
    paddingTop: 30,
  },
  headerBottomLeft: {
  },
  headerBottomRight: {
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  image: {
    height: 65,
    width: 50,
    backgroundColor: 'transparent',
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
  },
  icon: {
    color: '#3ece73',
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
  spacer: {
  },
});
