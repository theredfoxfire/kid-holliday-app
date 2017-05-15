// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {
  Button,
  TitleBar,
} from '../core-ui';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './PlaceDetailPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/bg-side-menu.png';
import {ContentView} from './ContentView';
import getContentFromHTML from '../selectors/getContentFromHTML';

type State = {

};
type Props = {
  backToPlace: () => void;
  isFetchSearchNameDetailLoading: boolean;
  searchNameDetailResult: Object;
};

export default class PlaceDetailPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let index = 0;
    const data = [
        { key: index++, label: 'Add to calendar' },
        { key: index++, label: 'Add to my todo list' },
    ];
    let {backToPlace, isFetchSearchNameDetailLoading, searchNameDetailResult} = this.props;
    if (isFetchSearchNameDetailLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Place Detail"
              iconName="arrow-back"
              onIconButtonPress={backToPlace}
              rightIcon="more-vert"
              optionData={data}
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
            />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>
              <Text style={styles.title}>{searchNameDetailResult.title}</Text>
              <Text style={styles.text}>{searchNameDetailResult.location}</Text>
              <Image source={newKuta} style={styles.image} resizeMode="stretch" />
              <ContentView content={content} />
            </ScrollView>
            <View style={{height: 50}}/>
          </View>
        </View>
      );
    }
  }
}
