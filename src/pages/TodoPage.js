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
  removeTodo?: (id: string) => void;
  isRemoveTodoLoading?: boolean;
  isRemoveTodoDone?: boolean;
  isActionTodoLoading?: boolean;
  actionTodo: () => void;
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

  componentDidMount() {
    this.props.fetchTodo(this.props.currentUser.username);
  }

  _selectedAction(selectedOption: number, id: string, type: string, todoID: string, action: string) {
    let {currentUser, todoDetails, removeTodo, actionTodo} = this.props;
    if (selectedOption === 1) {
      todoDetails(id, type);
    } else if (selectedOption === 3) {
      removeTodo(todoID, currentUser.username);
    } else if (selectedOption === 2) {
      actionTodo(todoID, action, currentUser.username);
    }
  }

  render() {
    let {todo, isFetchTodoLoading, isFetchTodoDetailLoading, isRemoveTodoLoading, isActionTodoLoading} = this.props;
    let index = 0;
    let isDone = (isDone: boolean) => {
      return {
        label: isDone === 'true' ? 'Unchecklist this item' : 'Checklist this item',
        action: isDone === 'true' ? 'undone' : 'done',
      };
    };
    if (isFetchTodoLoading || isFetchTodoDetailLoading || isRemoveTodoLoading || isActionTodoLoading) {
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
        const data = [
            { key: index++, label: 'View details', value: 1 },
            { key: index++, label: isDone(item.done).label, value: 2 },
            { key: index++, label: 'Remove from list', value: 3 },
        ];
        let todoType;
         if (item.module === 'la_holiday_spots') {
           todoType = 'holiday';
         } else if (item.module === 'la_fun_courses') {
           todoType = 'fun';
         } else if (item.module === 'la_discounts_promotions') {
           todoType = 'promo';
         }
        list.push(
          <View key={idx}>
            <ModalPicker
              data={data}
              initValue=""
              onChange={(option)=>{this._selectedAction(option.value, item.module_id, todoType, item.id, isDone(item.done).action)}}>
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
