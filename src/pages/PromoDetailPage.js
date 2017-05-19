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
import styles from './PromoDetailPage-style';
import autobind from 'class-autobind';
import {ContentView} from './ContentView';
import getContentFromHTML from '../selectors/getContentFromHTML';
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
    let {promoDetailResult, currentUser, newTodo} = this.props;
    if (value === 1) {
      const eventConfig = {
        title: promoDetailResult.title_promotion,
        location: promoDetailResult.location,
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
      newTodo('discount_promotion', promoDetailResult.id, currentUser.username);
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.fetchDetail(this.props.selectedPromoID);
    }, 400);
  }

  render() {
    let {backToPromo, promoDetailResult, isPostTodoLoading, isFetchPromoDetailLoading} = this.props;
    let index = 0;
    const data = [
        { key: index++, label: 'Add to calendar', value: 1 },
        { key: index++, label: 'Add to my todo list', value: 2 },
    ];
    let {content} = getContentFromHTML(promoDetailResult.content);
    if (isPostTodoLoading, isFetchPromoDetailLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Discounts & Promotions Detail"
              iconName="arrow-back"
              onIconButtonPress={backToPromo}
              rightIcon="more-vert"
              optionData={data}
              onRighIconPress={this._onOptionSelect}
            />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>
              <Text style={styles.title}>{promoDetailResult.title_promotion}</Text>
              <Text style={styles.text}>{promoDetailResult.location}</Text>
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
            title="Discounts & Promotions Detail"
            iconName="arrow-back"
            onIconButtonPress={backToPromo}
            rightIcon="more-vert"
            optionData={data}
            onRighIconPress={this._onOptionSelect}
          />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.title}>{promoDetailResult.title_promotion}</Text>
            <Text style={styles.text}>{promoDetailResult.location}</Text>
            <Image source={{uri: `http://liburananak.com/images/events/${promoDetailResult.image_small}`}} style={styles.image} resizeMode="stretch" />
            <ContentView content={content} />
            <View style={{height: 50}}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}
