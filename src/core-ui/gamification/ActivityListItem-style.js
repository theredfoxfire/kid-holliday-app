// @flow

import {StyleSheet} from 'react-native';
import {PRIMARY_GREEN, ALTERNATE_GREY} from '../../constants/color';


export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  headerContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 5,
  },
  iconDone: {
    color: PRIMARY_GREEN,
    fontSize: 14,
  },
  leftMargin: {
    marginLeft: 6,
  },
  smallActivityText: {
    fontSize: 14,
  },
  barSpacer: {
    borderWidth: 0.5,
    marginHorizontal: 10,
    alignSelf: 'center',
    borderColor: 'rgba(120, 120, 120, 0.4)',
    flex: 1,
  },
  container: {
    padding: 4,
    margin: 4,
    borderRadius: 10,
    backgroundColor: ALTERNATE_GREY,
  },
  activitiesContainer: {
    paddingLeft: 23,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
  },
  shovelIcon: {
    width: 12,
    height: 12,
  },
  shovelIconWrapper: {
    borderRadius: 100,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8D21C',
  },
  infoWrapper: {
    width: 65,
    alignItems: 'center',
  },
  fixedWidth: {
    width: 40,
  },
  rightTextAlign: {
    textAlign: 'right',
  },
});
