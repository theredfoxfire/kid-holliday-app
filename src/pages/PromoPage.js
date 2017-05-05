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
  ButtonRow,
} from '../core-ui';
import styles from './NearbyPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/new-kuta.jpg';
import woodyKid from '../images/woody-kid-zone.jpg';



type State = {

};
type Props = {

};

export default class NearbyPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Discounts & Promotions"
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
                <Text style={styles.distance}>12 - 18 Mei 2017</Text>
              </View>
              <View style={styles.buttonContainer}>
                <ButtonRow>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                <Button
                    text="ADD TO TODO LIST"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                </ButtonRow>
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
                <Text style={styles.distance}>12 - 18 Mei 2017</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                <Button
                    text="ADD TO TODO LIST"
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
                <Text style={styles.distance}>12 - 18 Mei 2017</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                <Button
                    text="ADD TO TODO LIST"
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
                <Text style={styles.distance}>12 - 18 Mei 2017</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                <Button
                    text="ADD TO TODO LIST"
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
                <Text style={styles.distance}>12 - 18 Mei 2017</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                <Button
                    text="ADD TO TODO LIST"
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
                <Text style={styles.distance}>12 - 18 Mei 2017</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => {}}
                  />
                <Button
                    text="ADD TO TODO LIST"
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
