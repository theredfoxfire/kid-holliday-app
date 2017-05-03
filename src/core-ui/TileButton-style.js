// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    margin: 5,
  },
  contentAtStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  columnContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBackground: {
    backgroundColor: '#1FBD66',
  },
  lightBackground: {
    backgroundColor: '#33BBA0',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  rowTextContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  tileImage: {
    width: 64,
    height: 64,
    backgroundColor: 'transparent',
  },
  tileColumnHeader: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    textAlign: 'center',
  },
  tileHeader: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  tileDetail: {
    color: 'white',
    fontSize: 13,
    flexWrap: 'wrap',
  },
});
