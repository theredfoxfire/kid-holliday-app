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
import styles from './NearbyPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/new-kuta.jpg';
import woodyKid from '../images/woody-kid-zone.jpg';



type State = {

};
type Props = {
  onPressDetail: () => void;
};

export default class NearbyPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {onPressDetail} = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Nearby Places"
          />
        </View>
        <ScrollView>
          <View style={styles.placeContainer}>
            <View style={styles.itemPlaceContainer}>
              <Image source={newKuta} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>New Kuta Green Park</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance 8.7 km</Text>
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
          <View style={styles.placeContainer}>
            <View style={styles.itemPlaceContainer}>
              <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Woody Kid Zone</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance 8.7 km</Text>
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
          <View style={styles.placeContainer}>
            <View style={styles.itemPlaceContainer}>
              <Image source={newKuta} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>New Kuta Green Park</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance 8.7 km</Text>
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
          <View style={styles.placeContainer}>
            <View style={styles.itemPlaceContainer}>
              <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Woody Kid Zone, Tanah Abang, Jakarta Selatan</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance 8.7 km</Text>
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
          <View style={styles.placeContainer}>
            <View style={styles.itemPlaceContainer}>
              <Image source={newKuta} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>New Kuta Green Park</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance 8.7 km</Text>
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
          <View style={styles.placeContainer}>
            <View style={styles.itemPlaceContainer}>
              <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Woody Kid Zone</Text>
              </View>
            </View>
            <View style={styles.itemPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>Distance 8.7 km</Text>
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
        </ScrollView>
      </View>
    );
  }
}
