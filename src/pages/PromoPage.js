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
  ResponsiveImage,
} from '../core-ui';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import styles from './PromoPage-style';
import autobind from 'class-autobind';

type State = {

};
type Props = {
  promoDetails?: (id: string) => void;
  isFetchPromoLoading?: boolean;
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
    setTimeout(() => {
      this.props.fetchPromo();
    }, 400);
  }

  render() {
    let {promoDetails, promo, isFetchPromoLoading, newTodo, currentUser, isPostTodoLoading} = this.props;
    if (isFetchPromoLoading || isPostTodoLoading) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Kids Events"
            />
          </View>
          <ScrollView>
            <LoadingIndicator />
          </ScrollView>
        </View>
      );
    } else {
      let list = [];
      Object.values(promo).forEach((item, idx) => {
        list.push(
          <View style={styles.placeContainer} key={idx}>
            <View style={styles.itemPlaceContainer}>
              <ResponsiveImage source={{uri: `http://liburananak.com/images/events/${item.image_small}`}} style={styles.image} />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title_event.substr(0,25)}{item.title_event.length > 25 ? '...' : null}</Text>
                <Text>{item.location.substr(0,32)}{item.location.length > 32 ? '...' : null}</Text>
                <Text style={styles.distance}>{item.event_start} s/d {item.event_end}</Text>
              </View>
            </View>
            <View style={styles.bottomPlaceContainer}>
              <View style={styles.distanceContainer}>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                    text="DETAIL"
                    style={{width: 10}}
                    inverted
                    onPress={() => promoDetails(item.id)}
                  />
                {
                  currentUser.username ?
                  <Button
                      text="ADD TO TODO LIST"
                      inverted
                      onPress={() => newTodo('kids_parent_event', item.id, currentUser.username)}
                    /> : <View />
                }
              </View>
            </View>
          </View>
        );
      });
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Kids Events"
            />
          </View>
          <ScrollView>
            {
              list.length > 0 ? list :
              <View style={styles.init}>
                <Text style={styles.lableText}>There is no available event.</Text>
              </View>
            }
          </ScrollView>
        </View>
      );
    }
  }
}
