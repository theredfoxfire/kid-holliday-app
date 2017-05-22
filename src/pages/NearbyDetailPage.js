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
  backToNearby: () => void;
  isFetchNearbyDetailLoading: boolean;
  nearbyDetailResult: Object;
  newTodo: (module: string, module_id: string, user: string) => void;
  currentUser: Object;
  fetchDetail: () => void;
  selectedNearbyID: string,
};

export default class NearbyDetailPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  _onOptionSelect(value: string) {
    let {nearbyDetailResult, currentUser, newTodo} = this.props;
    if (value === 1) {
      const eventConfig = {
        title: nearbyDetailResult.title,
        location: nearbyDetailResult.location,
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
      newTodo('kids_holiday_spots', nearbyDetailResult.id, currentUser.username);
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchDetail(this.props.selectedNearbyID);
    }, 400);
  }

  render() {
    let {backToNearby, isFetchNearbyDetailLoading, nearbyDetailResult, currentUser, isPostTodoLoading} = this.props;
    let index = 0;
    let todoOption = currentUser.username ? { key: index++, label: 'Add to my todo list', value: 2 } : { key: index++};
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
        todoOption,
    ];
    if (isFetchNearbyDetailLoading || isPostTodoLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Nearby Detail"
              iconName="arrow-back"
              onIconButtonPress={backToNearby}
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
      let {content} = getContentFromHTML(nearbyDetailResult.content);
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Nearby Detail"
              iconName="arrow-back"
              onIconButtonPress={backToNearby}
              rightIcon="more-vert"
              optionData={data}
              onRighIconPress={this._onOptionSelect}
            />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>
              <Text style={styles.title}>{nearbyDetailResult.title}</Text>
              <Text style={styles.text}>{nearbyDetailResult.location}</Text>
              <ContentView content={content} />
            </ScrollView>
            <View style={{height: 50}}/>
          </View>
        </View>
      );
    }
  }
}
