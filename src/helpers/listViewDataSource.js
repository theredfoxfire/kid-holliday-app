import {ListView} from 'react-native';

export default function listViewDataSouce() {
  return new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
}
