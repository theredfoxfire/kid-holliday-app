// @flow

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#00C853',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    backgroundColor: 'transparent',
  },
  logo: {
    marginRight: 10,
    width: 40,
    alignSelf: 'flex-start',
    paddingTop: 5,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leftIcon: {
    marginTop: 9,
    padding: 0,
    paddingBottom: 2,
  },
});
