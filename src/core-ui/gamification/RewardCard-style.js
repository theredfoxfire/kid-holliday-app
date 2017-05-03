// @flow

import {StyleSheet} from 'react-native';
import {PRIMARY_GREEN, LIGHT_GREY} from '../../constants/color';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  flex: {
    flex: 1,
  },
  yellowText: {
    color: 'gold',
  },
  greenText: {
    color: PRIMARY_GREEN,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: LIGHT_GREY,
  },
  marginTop: {
    marginTop: 4,
  },
  flexRow: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paddingBottom: {
    paddingBottom: 5,
  },
  leftMargin: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  subText: {
    fontSize: 14,
  },
  infoText: {
    fontSize: 14,
  },
  extremeLeftPadding: {
    paddingLeft: 60,
  },
  codeText: {
    fontSize: 22,
    fontWeight: '700',
  },
  rewardImage: {
    width: 10,
    height: 10,
  },
  italicText: {
    fontStyle: 'italic',
  },
  marginBottom: {
    marginBottom: 6,
  },
});
