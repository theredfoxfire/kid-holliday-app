import {StyleSheet} from 'react-native';
import {getScreenSize} from '../helpers/getSize';

let modalSize = getScreenSize().height;
let widthSize = getScreenSize().width;

export default StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: modalSize,
    justifyContent: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  fieldContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: widthSize * 0.75,
    height: modalSize * 0.25,
    padding: 10,
  },
  submit: {
    marginTop: 20,
  },
});
