//@flow
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    borderColor: 'white',
    flexDirection: 'row',
    shadowColor: 'gray',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  card: {
    width: 50,
    height: 120,
    flex: 1,
    flexDirection: 'row',
  },
  cardContent: {
    flex: 1,
    padding: 8,
  },
  cardText: {
    color: '#CCCCCC',
  },
  thumbnailContainerStretch: {
    width: 120,
    height: 120,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  optionButtonContainer: {
    width: 20,
    height: 30,
  },
  optionButton: {
    color: '#CCCCCC',
    fontSize: 20,
  },
});
