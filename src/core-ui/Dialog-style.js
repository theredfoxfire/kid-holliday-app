//@flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#00C853',
    paddingVertical: 10,
  },
  title: {
    flex: 9,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  clearWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  clear: {
    fontSize: 24,
    color: 'white',
  },
  contentWrapper: {
    backgroundColor: 'white',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#00C853',
    borderRadius: 4,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
  },
});
