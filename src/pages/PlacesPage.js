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
  TextField,
} from '../core-ui';
import styles from './PlacesPage-style';
import autobind from 'class-autobind';
import backroungCover from '../images/la-background.png';
import laLogo from '../images/la-logo.png';
import {LA_RED, LA_WHITE} from '../constants/color';
import newKuta from '../images/new-kuta.jpg';
import woodyKid from '../images/woody-kid-zone.jpg';

type State = {

};
type Props = {

};

export default class PlacesPage extends Component {
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
            title="Places"
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.field}>
            <TextField placeholder="Location" iconNamePre="room" iconStylePre={styles.iconStylePre} rootStyle={styles.rootField} />
          </View>
          <View style={styles.field}>
            <TextField placeholder="Find Your Kids Places" iconNameEnd="search" iconStyleEnd={styles.iconStyleEnd} rootStyle={styles.rootField} />
          </View>
          <View style={styles.lableContainer}>
            <Text style={styles.lableText}>Recomended Places:</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.listContainer}>
            <Image source={newKuta} style={styles.image} resizeMode="stretch" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>New Kuta Green Park</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Woody Kids</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <Image source={newKuta} style={styles.image} resizeMode="stretch" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>New Kuta Green Park</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Woody Kids</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <Image source={newKuta} style={styles.image} resizeMode="stretch" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>New Kuta Green Park</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
