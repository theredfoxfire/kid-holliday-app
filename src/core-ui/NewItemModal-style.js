import {StyleSheet} from 'react-native';
import {getScreenSize} from '../helpers/getSize';

let modalSize = getScreenSize().height;

export default StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    height: modalSize,
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 15,
  },
  guestModalContainer: {
    justifyContent: 'space-between',
    height: 150,
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 15,
  },
  guestModalContainerText: {
    alignItems: 'center',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    width: 65,
    height: 65,
  },
  fieldContainer: {
    backgroundColor: '#fff',
    flex: 1,
    height: 120,
    marginTop: -100,
  },
  image: {
    width: 50,
    height: 50,
  },
  imageCamera: {
    width: 35,
    height: 35,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
