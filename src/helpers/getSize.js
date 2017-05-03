import {Dimensions} from 'react-native';

export function getScreenSize() {
  let {height, width} = Dimensions.get('window');
  return {height, width};
}
