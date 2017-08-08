// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  ToastAndroid,
  WebView,
} from 'react-native';
import {
  Button,
  TitleBar,
} from '../core-ui';
import styles from './TodoDetailPage-style';
import autobind from 'class-autobind';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import SERVER_API from '../constants/defaultServerAPIUrl';

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
            ToastAndroid.showWithGravity('Event berhasil ditambahkan ke kalender.', ToastAndroid.LONG, ToastAndroid.CENTER);
          }
        })
        .catch((error: string) => {
          ToastAndroid.showWithGravity(error, ToastAndroid.LONG, ToastAndroid.CENTER);
      });
    }
  }

  render() {
    let {backToTodo, todoDetailResult} = this.props;
    let index = 0;
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
    ];
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
            <WebView
              source={{uri: `${SERVER_API}/detail.php?act=detail&type=${this.props.todoDetailID.todoType}&id=${this.props.todoDetailID.id}`}}
              style={styles.textContainer}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
