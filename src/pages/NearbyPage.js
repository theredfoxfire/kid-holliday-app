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
import getDirections from 'react-native-google-maps-directions'

type State = {

};
type Props = {
  nearby?: Array<Object>;
  onPressDetail: () => void;
  onPressMap: () => void;
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
      (error) => {
        this.setState({error: error.message});
        return ToastAndroid.show(`${error.message}, please TURN OFF your GPS for run faster.`, ToastAndroid.LONG);
      },
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 },
    );
  }

  _handleGetDirections = (lat, long) => {
    const data = {
      source: {
       latitude: this.state.latitude,
       longitude: this.state.longitude
      },
      destination: {
       latitude: Number(lat),
       longitude: Number(long)
      },
        params: [
          {
            key: "dirflg",
            value: "w"
          }
        ]
      };
      getDirections(data);
    };

  render() {
    let {onPressDetail, isFetchNearbyLoading, fetchNearby, nearby, onPressMap} = this.props;
    let {latitude, longitude, error} = this.state;
    if (latitude === null || longitude === null || isFetchNearbyLoading) {
      if (error !== null) {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.barContainer}>
              <TitleBar
                title="Nearby Places"
              />
            </View>
            <ScrollView>
              <View style={styles.init}>
                <Text style={styles.lableText}>There is no place nearby you.</Text>
              </View>
            </ScrollView>
          </View>
        );
      } else {
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
      }
    } else {
      let list = [];
      Object.values(nearby).forEach((item, idx) => {
        list.push(
          <View style={styles.placeContainer} key={idx}>
            <View style={styles.itemPlaceContainer}>
              <Image source={{uri: `http://liburananak.com/images/holiday_spots/tn/${item.thumb}`}} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title.substr(0,45)}{item.title.length > 45 ? '...' : null}</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance {item.dist.toString()} km</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="INFO"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => onPressDetail(item.id)}
                  />
                <Button
                    text="DIRECTION"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => this._handleGetDirections(item.lat, item.long)}
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
