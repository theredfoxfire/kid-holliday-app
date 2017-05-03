// @flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  favoriteDesc: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  deleteIcon: {
    color: '#ff6b6b',
    marginRight: 5,
  },
  bookmarkIcon: {
    marginLeft: 10,
  },
});
