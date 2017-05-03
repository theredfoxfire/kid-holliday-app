// @flow

import {StyleSheet} from 'react-native';

import {PRIMARY_GREEN, PRIMARY_GREY} from '../../constants/color';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  padding: {
    padding: 20,
  },
  barSpacer: {
    borderWidth: 0.5,
    marginHorizontal: 10,
    alignSelf: 'center',
    borderColor: 'rgba(120, 120, 120, 0.4)',
    flex: 1,
  },
  grayContainer: {
    backgroundColor: PRIMARY_GREY,
    borderRadius: 5,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  marginRight: {
    marginRight: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  smallMarginBottom: {
    marginBottom: 4,
  },
  pointWidth: {
    width: 60,
  },
  pointText: {
    color: PRIMARY_GREEN,
    textAlign: 'right',
  },
});
