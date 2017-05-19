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
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './PlaceDetailPage-style';
import autobind from 'class-autobind';
import {ContentView} from './ContentView';
import getContentFromHTML from '../selectors/getContentFromHTML';
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
    let {searchNameDetailResult, currentUser, newTodo} = this.props;
    if (value === 1) {
      const eventConfig = {
        title: searchNameDetailResult.title,
        location: searchNameDetailResult.location,
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
    } else if (value === 2) {
      newTodo('kids_holiday_spots', searchNameDetailResult.id, currentUser.username);
    }
  }

  componentDidMount() {
    this.props.fetchDetail(this.props.placeDetailID);
  }

  render() {
    let index = 0;
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
        { key: index++, label: 'Add to my todo list', value: 2 },
    ];
    let {backToPlace, isFetchSearchNameDetailLoading, searchNameDetailResult, isPostTodoLoading, placeDetailID} = this.props;
    if (isFetchSearchNameDetailLoading || isPostTodoLoading) {
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
      let {content} = getContentFromHTML(searchNameDetailResult.content);
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
              <Text style={styles.title}>{searchNameDetailResult.title}</Text>
              <Text style={styles.text}>{searchNameDetailResult.location}</Text>
              <ContentView content={content} />
            </ScrollView>
            <View style={{height: 50}}/>
          </View>
        </View>
      );
    }
  }
}
