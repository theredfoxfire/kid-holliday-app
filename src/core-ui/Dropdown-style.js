//@flow
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const optionText = {
  textAlign: 'center',
  marginRight: 10,
};
export default StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 2,
    height: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
  },
  option: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  defaultOptionText: {
    ...optionText,
    flex: 1,
    fontWeight: '500',
  },
  optionText: {
    ...optionText,
    marginVertical: 10,
    fontWeight: '500',
    color: '#666',
  },
  descriptionText: {
    paddingHorizontal: 10,
    paddingBottom: 5,
    textAlign: 'center',
  },
  icon: {
    fontSize: 20,
    textAlign: 'center',
  },
  modalScrollView: {
    width: width * 0.8,
    maxHeight: height * 0.5,
  },
  optionItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  placeholder: {
    flex: 1,
    textAlign: 'left',
  },
});
