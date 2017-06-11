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
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './PlaceDetailPage-style';
import autobind from 'class-autobind';
import SERVER_API from '../constants/defaultServerAPIUrl';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

type State = {

};
type Props = {
  backToPlace: () => void;
  isFetchSearchNameDetailLoading: boolean;
  searchNameDetailResult: Object;
  isPostTodoLoading: boolean;
  currentUser: boolean;
  newTodo: (module: string, module_id: string, user: string) => void;
  placeDetailID: string;
};

export default class PlaceDetailPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  _onOptionSelect(value: string) {
    let {searchNameDetailResult, currentUser, newTodo, placeDetailID} = this.props;
    if (value === 1) {
      const eventConfig = {
        title: searchNameDetailResult.title,
        location: searchNameDetailResult.location,
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
    } else if (value === 2) {
      newTodo('kids_holiday_spots', placeDetailID, currentUser.username);
    }
  }

  componentDidMount() {
    this.props.fetchDetail(this.props.placeDetailID);
  }

  render() {
    let {backToPlace, searchNameDetailResult, isPostTodoLoading, currentUser, placeDetailID} = this.props;
    let index = 0;
    let todoOption = currentUser.username ? { key: index++, label: 'Add to my todo list', value: 2 } : { key: index++};
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
        todoOption,
    ];
    if (isPostTodoLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Place Detail"
              iconName="arrow-back"
              onIconButtonPress={backToPlace}
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
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Place Detail"
              iconName="arrow-back"
              onIconButtonPress={backToPlace}
              rightIcon="more-vert"
              optionData={data}
              onRighIconPress={this._onOptionSelect}
            />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>
              <WebView
                source={{uri: `${SERVER_API}/detail.php?act=detail&type=holiday&id=${this.props.placeDetailID}`}}
                style={styles.textContainer}
              />
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}
