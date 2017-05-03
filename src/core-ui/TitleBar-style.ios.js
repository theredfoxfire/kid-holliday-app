// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 62,
    backgroundColor: '#00C853',
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent',
  },
  backButton: {
    paddingBottom: 4,
  },
  backIcon: {
    color: 'white',
    fontSize: 25,
  },
  logo: {
    marginRight: 10,
    width: 40,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  leftIcon: {
    padding: 0,
    paddingBottom: 2,
  },
});
