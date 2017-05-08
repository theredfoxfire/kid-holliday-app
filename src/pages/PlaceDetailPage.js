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
import styles from './PlaceDetailPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/new-kuta.jpg';
import woodyKid from '../images/woody-kid-zone.jpg';

type State = {

};
type Props = {
  backToPlace: () => void;
};

export default class PlaceDetailPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  render() {
    let {backToPlace} = this.props;
    let index = 0;
    const data = [
        { key: index++, label: 'Add to calendar' },
        { key: index++, label: 'Add to my todo list' },
    ];
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Discounts & Promotions Detail"
            iconName="arrow-back"
            onIconButtonPress={backToPlace}
            rightIcon="more-vert"
            optionData={data}
          />
        </View>
        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.title}>New Kuta Green Park</Text>
            <Text style={styles.text}>Bali</Text>
            <Image source={newKuta} style={styles.image} resizeMode="stretch" />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum ligula, congue ut ultricies consequat, feugiat ac sem. Nunc faucibus enim et ullamcorper volutpat. Fusce malesuada, eros vel rutrum mattis, libero odio accumsan lacus, eget aliquam enim mauris et sapien. Cras ultricies ut ipsum vel faucibus. Nunc feugiat neque non justo maximus cursus. Aliquam bibendum sem enim, a accumsan quam sollicitudin ac. Donec tempus, neque ut convallis dictum, metus ipsum ultricies lorem, ac tempor nibh lacus non lectus. Phasellus sit amet lectus odio. Ut eu imperdiet lacus. Curabitur egestas magna ac odio dignissim aliquet. Duis non lorem aliquam tellus condimentum convallis.
            </Text>
            <Text style={styles.text}>
              Nullam mattis consectetur ligula et venenatis. Nunc sed pharetra dolor, ac porta est. Vestibulum sagittis tellus quis vulputate tincidunt. Aenean ut felis quis urna euismod eleifend. Aliquam non est sodales, elementum nisl non, viverra sapien. Sed nibh ex, ullamcorper sit amet turpis sed, ultricies tincidunt purus. Pellentesque id interdum eros.
            </Text>
            <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ipsum ligula, congue ut ultricies consequat, feugiat ac sem. Nunc faucibus enim et ullamcorper volutpat. Fusce malesuada, eros vel rutrum mattis, libero odio accumsan lacus, eget aliquam enim mauris et sapien. Cras ultricies ut ipsum vel faucibus. Nunc feugiat neque non justo maximus cursus. Aliquam bibendum sem enim, a accumsan quam sollicitudin ac. Donec tempus, neque ut convallis dictum, metus ipsum ultricies lorem, ac tempor nibh lacus non lectus. Phasellus sit amet lectus odio. Ut eu imperdiet lacus. Curabitur egestas magna ac odio dignissim aliquet. Duis non lorem aliquam tellus condimentum convallis.
            </Text>
            <Text style={styles.text}>
              Nullam mattis consectetur ligula et venenatis. Nunc sed pharetra dolor, ac porta est. Vestibulum sagittis tellus quis vulputate tincidunt. Aenean ut felis quis urna euismod eleifend. Aliquam non est sodales, elementum nisl non, viverra sapien. Sed nibh ex, ullamcorper sit amet turpis sed, ultricies tincidunt purus. Pellentesque id interdum eros.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}
