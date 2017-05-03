import {StyleSheet} from 'react-native';
import {
  GREEN,
} from '../constants/color';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderTopWidth: 0.5,
    borderTopColor: '#999',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000000',
  },
  icon: {
    color: '#999',
    fontSize: 26,
  },
  activeIcon: {
    color: GREEN,
    fontSize: 26,
  },
  menuText: {
    fontSize: 9,
    color: '#999',
    marginTop: 3,
  },
  activeMenuText: {
    fontSize: 9,
    color: GREEN,
    marginTop: 3,
  },
  addBox: {
    borderWidth: 0,
    borderRadius: 4,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    marginHorizontal: 6,
  },
  addIcon: {
    fontSize: 34,
    color: 'white',
  },
});
