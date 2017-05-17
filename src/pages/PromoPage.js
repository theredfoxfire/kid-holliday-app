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
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './PromoPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/bg-side-menu.png';

type State = {

};
type Props = {
  promoDetails?: (id: string) => void;
  isFetchPromoLoading?: boolean;
  isFetchPromoDetailLoading?: boolean;
  promo?: Array<Object>;
  fetchPromo?: () => void;
  currentUser?: Object;
  isPostTodoLoading?: boolean;
  newTodo: () => void;
};

export default class PromoPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  componentDidMount() {
    this.props.fetchPromo();
  }

  render() {
    let {promoDetails, promo, isFetchPromoLoading, isFetchPromoDetailLoading, newTodo, currentUser, isPostTodoLoading} = this.props;
    if (isFetchPromoLoading || isFetchPromoDetailLoading || isPostTodoLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Discounts & Promotions"
            />
          </View>
          <ScrollView>
            <LoadingIndicator />
          </ScrollView>
        </View>
      );
    } else {
      let list = [];
      Object.values(promo).slice(0,-1).forEach((item, idx) => {
        list.push(
          <View style={styles.placeContainer} key={idx}>
            <View style={styles.itemPlaceContainer}>
              <Image source={{uri: `http://liburananak.com/images/events/${item.image_small}`}} style={styles.image} resizeMode="stretch" />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title_promotion}</Text>
                <Text>{item.location}</Text>
              </View>
            </View>
            <View style={styles.bottomPlaceContainer}>
              <View style={styles.distanceContainer}>
                <Text style={styles.distance}>{item.event_start} s/d {item.event_end}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => promoDetails(item.id)}
                  />
                <Button
                    text="ADD TO TODO LIST"
                    textStyle={styles.centeredButton}
                    inverted
                    onPress={() => newTodo('discount_promotion', item.id, currentUser.username)}
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
              title="Discounts & Promotions"
            />
          </View>
          <ScrollView>
            {
              list.length > 0 ? list :
              <View style={styles.init}>
                <Text style={styles.lableText}>There is no promotions or discounts for today.</Text>
              </View>
            }
          </ScrollView>
        </View>
      );
    }
  }
}
