// @flow
import {StyleSheet} from 'react-native';

import {PRIMARY_GREEN, DARK_YELLOW} from '../../constants/color';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  normalText: {
    color: '#fff',
  },
  smallText: {
    color: '#fff',
    fontSize: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginHorizontal: 10,
  },
  profileTextWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileFullName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileRole: {
    color: '#fff',
    fontSize: 12,
  },
  bigShovelWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: PRIMARY_GREEN,
    borderColor: '#fff',
    borderWidth: 3,
  },
  bigShovel: {
    width: 30,
    height: 30,
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinStatusWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderColor: '#aaa',
  },
  coinLabel: {
    color: '#fff',
    marginRight: 10,
  },
  coinCount: {
    color: '#fff',
  },
  smallShovelWrapper: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARK_YELLOW,
  },
  smallShovel: {
    width: 10,
    height: 10,
  },
  progressWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressLabel: {
    color: '#fff',
    marginHorizontal: 10,
  },
  progressBarWrapper: {
    flex: 1,
    marginRight: 10,
  },
  progressBar: {
    flexDirection: 'row',
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  progressBarValue: {
    height: 5,
    backgroundColor: PRIMARY_GREEN,
    borderRadius: 5,
  },
  progressCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
