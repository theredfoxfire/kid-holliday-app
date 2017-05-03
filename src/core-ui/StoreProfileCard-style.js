import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

let text = {
  backgroundColor: 'transparent',
  color: '#fff',
  paddingTop: 3,
  // fontFamily: '', //TODO: change font family
};

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    borderRadius: 3,
    width: width - 20,
    height: width * 0.6,
  },
  overlay: {
    borderRadius: 3,
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  textBig: {
    ...text,
    fontSize: 20,
  },
  textSmall: {
    ...text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: 'transparent',
    color: '#ccc',
    paddingTop: 3,
    paddingRight: 5,
  },
});
