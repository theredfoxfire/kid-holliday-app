//@flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 4,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.25,
    borderColor: 'white',
    marginVertical: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  thumbnailContainerStretch: {
    width: 120,
    height: 120,
  },
  cardContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  cardText: {
    color: '#CCCCCC',
  },
  thumbnailContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  optionButtonContainer: {
    width: 20,
    height: 30,
    marginTop: 5,
    marginRight: 5,
  },
  optionButton: {
    color: '#CCCCCC',
    fontSize: 20,
  },
});
