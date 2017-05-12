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
import styles from './NearbyPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/new-kuta.jpg';
import woodyKid from '../images/woody-kid-zone.jpg';
import Permissions from 'react-native-permissions';

type State = {

};
type Props = {
  nearby?: Array<Object>;
  onPressDetail: () => void;
  isFetchNearbyLoading?: boolean;
  fetchNearby?: () => void;
};

export default class NearbyPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        this.setState({
          latitude: latitude,
          longitude: longitude,
          error: null,
        });
        if (latitude !== null && longitude !== null) {
          this.props.fetchNearby(`${latitude},${longitude}`);
        }
      },
      (error) => ToastAndroid.show(error.message, ToastAndroid.LONG),
      { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
    );
  }

  render() {
    let {onPressDetail, isFetchNearbyLoading, fetchNearby, nearby} = this.props;
    let {latitude, longitude} = this.state;
    if (latitude === null || longitude === null || isFetchNearbyLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Nearby Places"
            />
          </View>
          <ScrollView>
            <LoadingIndicator />
          </ScrollView>
        </View>
      );
    } else {
      let list = [];
      Object.values(nearby).slice(0,-1).forEach((item, idx) => {
        list.push(
          <View style={styles.placeContainer} key={idx}>
            <View style={styles.itemPlaceContainer}>
              <Image source={{uri: `http://liburananak.com/images/holiday_spots/tn/${item.thumb}`}} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance {item.dist} km</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="INFO"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={onPressDetail}
                  />
                <Button
                    text="DIRECTION"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
              </View>
            </View>
          </View>
        );
      });
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Nearby Places"
            />
          </View>
          <ScrollView>
            {
              list.length > 0 ? list :
              <View style={styles.init}>
                <Text style={styles.lableText}>There is no place nearby you.</Text>
              </View>
            }
          </ScrollView>
        </View>
      );
    }
  }
}
