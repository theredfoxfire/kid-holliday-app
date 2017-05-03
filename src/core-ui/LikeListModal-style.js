import {StyleSheet} from 'react-native';
import {getScreenSize} from '../helpers/getSize';
import {PRIMARY_GREEN, PRIMARY_GREY} from '../constants/color';

let {width, height} = getScreenSize();

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainWrapper: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
  },
  contentWrapper: {
    backgroundColor: 'white',
    borderRadius: 3,
    maxHeight: height * 0.8,
    width: width * 0.8,
  },
  headerWrapper: {
    backgroundColor: PRIMARY_GREEN,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    height: 40,
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    height: 40,
  },
  userLike: {
    borderBottomWidth: 1,
    borderColor: PRIMARY_GREY,
    padding: 7,
  },
});
