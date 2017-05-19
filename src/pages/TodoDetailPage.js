// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {
  Button,
  TitleBar,
} from '../core-ui';
import styles from './TodoDetailPage-style';
import autobind from 'class-autobind';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import {ContentView} from './ContentView';
import getContentFromHTML from '../selectors/getContentFromHTML';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

type State = {

};
type Props = {
  backToTodo: () => void;
  isFetchTodoDetailLoading: boolean;
  todoDetailResult: Object;
  todoDetailID: Object;
  fetchDetail: () => void;
};

export default class TodoDetailPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  componentDidMount() {
    this.props.fetchDetail(this.props.todoDetailID.id, this.props.todoDetailID.todoType);
  }

  _onOptionSelect(value: string) {
    let {todoDetailResult} = this.props;
    if (value === 1) {
      const eventConfig = {
        title: todoDetailResult.title,
        location: todoDetailResult.location,
      };

      AddCalendarEvent.presentNewCalendarEventDialog(eventConfig)
        .then(eventId => {
          if (eventId) {
            ToastAndroid.show('Event berhasil ditambahkan ke kalender.', ToastAndroid.LONG);
          }
        })
        .catch((error: string) => {
          ToastAndroid.show(error, ToastAndroid.LONG);
      });
    }
  }

  render() {
    let {backToTodo, todoDetailResult, isFetchTodoDetailLoading} = this.props;
    let {content} = getContentFromHTML(todoDetailResult.content);
    let index = 0;
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
    ];
    if (isFetchTodoDetailLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Todo Detail"
              iconName="arrow-back"
              onIconButtonPress={backToTodo}
              rightIcon="more-vert"
              optionData={data}
              onRighIconPress={this._onOptionSelect}
            />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>
              <LoadingIndicator />
            </ScrollView>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Todo Detail"
            iconName="arrow-back"
            onIconButtonPress={backToTodo}
            rightIcon="more-vert"
            optionData={data}
            onRighIconPress={this._onOptionSelect}
          />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.title}>{todoDetailResult.title}</Text>
            <Text style={styles.text}>{todoDetailResult.location}</Text>
            <ContentView content={content} />
            <View style={{height: 50}}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}
