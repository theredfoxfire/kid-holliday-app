// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  WebView,
  ActivityIndicator,
} from 'react-native';
import {
  Button,
  TitleBar,
} from '../core-ui';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './MapDirectionPage-style';
import autobind from 'class-autobind';

const BGWASH = 'rgba(255,255,255,0.8)';

type State = {

};
type Props = {
  backToNearby: () => void;
  isFetchNearbyDetailLoading: boolean;
  nearbyDetailResult: Object;
  newTodo: (module: string, module_id: string, user: string) => void;
  currentUser: Object;
};

export default class MapDirectionPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let source = {
        latitude: -33.8356372,
        longitude: 18.6947617
      };
    let destination = {
        latitude: -33.8600024,
        longitude: 18.697459
      };
    let paramsStr = [
        {
          key: "dirflg",
          value: "w"
        }
      ];
    let {backToNearby, isFetchNearbyDetailLoading, nearbyDetailResult} = this.props;
    // let uri = `https://www.google.co.id/maps/dir/'-7.7385481,110.3845018'/'-7.7707661,110.3764305'/@-7.7546703,110.365375,14z`;
    let uri = `http://maps.google.com/maps?saddr=${source.latitude},${source.longitude}&daddr=${destination.latitude},${destination.longitude}${paramsStr}`;
    if (isFetchNearbyDetailLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Nearby Direction"
              iconName="arrow-back"
              onIconButtonPress={backToNearby}
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
              title="Nearby Direction"
              iconName="arrow-back"
              onIconButtonPress={backToNearby}
            />
          </View>
          <View style={styles.contentContainer}>
            <ScrollView>
              <Text style={styles.title}>{nearbyDetailResult.title}</Text>
              <Text style={styles.text}>{nearbyDetailResult.location}</Text>
              <WebView
                style={{
                  backgroundColor: BGWASH,
                  height: 500,
                }}
                source={{uri: uri}}
                scalesPageToFit={true}
                renderLoading={() => {
                  return (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                      <ActivityIndicator
                        animating={true}
                        size="large"
                      />
                    </View>
                  );
                }}
              />
            </ScrollView>
            <View style={{height: 50}}/>
          </View>
        </View>
      );
    }
  }
}
