// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Picker,
} from 'react-native';
import {
  Button,
  TitleBar,
  Icon,
} from '../core-ui';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './TodoPage-style';
import autobind from 'class-autobind';
import ModalPicker from 'react-native-modal-picker';

type State = {

};
type Props = {
  todoDetails?: () => void;
  todo: Array<Object>;
  isFetchTodoLoading: boolean;
  fetchTodo?: (username: string) => void;
};

export default class TodoPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      selectedOption: '',
    };
  }

  componentWillMount() {
    this.props.fetchTodo(this.props.currentUser.username);
  }

  _selectedAction(selectedOption: number) {
    if (selectedOption === 1) {
      return this.props.todoDetails();
    }
  }

  render() {
    let {todo, isFetchTodoLoading} = this.props;
    let index = 0;
    const data = [
        { key: index++, label: 'View details', value: 1 },
        { key: index++, label: 'Uncheck this item', value: 2 },
        { key: index++, label: 'Remove from list', value: 3 },
    ];
    if (isFetchTodoLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Todo List"
            />
          </View>
          <ScrollView>
            <LoadingIndicator />
          </ScrollView>
        </View>
    );
    } else {
      let list = [];
      Object.values(todo).slice(0,-1).forEach((item, idx) => {
        list.push(
          <View key={idx}>
            <ModalPicker
              data={data}
              initValue=""
              onChange={(option)=>{this._selectedAction(option.value)}}>
              <View style={styles.placeContainer}>
                <View style={styles.itemPlaceContainer}>
                  <Image source={{uri: item.thumb}} style={styles.image} resizeMode="stretch" />
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text>{item.location}</Text>
                  </View>
                  <View style={styles.checklistContainer}>
                    {item.done === 'true' ? <Icon name="done" style={styles.checlist} /> : <Icon name="more-vert" style={styles.checlist} />}
                  </View>
                </View>
              </View>
            </ModalPicker>
          </View>
        );
      });
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Todo List"
            />
          </View>
          <ScrollView>
            {list}
          </ScrollView>
        </View>
      );
    }
  }
}
