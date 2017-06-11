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
import styles from './PromoDetailPage-style';
import autobind from 'class-autobind';
import SERVER_API from '../constants/defaultServerAPIUrl';
import * as AddCalendarEvent from 'react-native-add-calendar-event';

type State = {

};
type Props = {
  backToPromo: () => void;
  promoDetailResult: Object;
  newTodo: (module: string, module_id: string, user: string) => void;
  isPostTodoLoading: void;
  isFetchPromoDetailLoading: boolean;
  fetchDetail: () => void;
  selectedPromoID: boolean;
  currentUser: Object;
};

export default class PromoDetailPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      action: null,
    };
  }

  _onOptionSelect(value: string) {
    let {promoDetailResult, currentUser, newTodo, selectedPromoID} = this.props;
    if (value === 1) {
      const eventConfig = {
        title: promoDetailResult.title_event,
        location: promoDetailResult.location,
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
      newTodo('kids_parent_event', selectedPromoID, currentUser.username);
    }
  }

  componentDidMount() {
    this.props.fetchDetail(this.props.selectedPromoID);
  }

  render() {
    let {backToPromo, promoDetailResult, isPostTodoLoading, currentUser} = this.props;
    let index = 0;
    let todoOption = currentUser.username ? { key: index++, label: 'Add to my todo list', value: 2 } : {key: index++};
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
        todoOption,
    ];
    if (isPostTodoLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Events Detail"
              iconName="arrow-back"
              onIconButtonPress={backToPromo}
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
            title="Events Detail"
            iconName="arrow-back"
            onIconButtonPress={backToPromo}
            rightIcon="more-vert"
            optionData={data}
            onRighIconPress={this._onOptionSelect}
          />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <WebView
              source={{uri: `${SERVER_API}/detail.php?act=detail&type=event&id=${this.props.selectedPromoID}`}}
              style={styles.textContainer}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
