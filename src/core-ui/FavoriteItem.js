// @flow
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './FavoriteItem-style';

import type {Favorite} from '../types/Favorite';

type Props = {
  favorite: Favorite;
  onPress: () => void;
  onDeleteButtonPress: () => void;
};

export default function FavoriteItem(props: Props) {
  let {favorite, onPress, onDeleteButtonPress} = props;

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.root}>
        <Icon name="bookmark-border" size={20} style={styles.bookmarkIcon} />
        <View style={styles.favoriteDesc}>
          <Text>{favorite.description}</Text>
        </View>
        <Icon.Button
          name="delete-forever"
          iconStyle={styles.deleteIcon}
          backgroundColor="transparent"
          onPress={onDeleteButtonPress}
        />
      </View>
    </TouchableHighlight>
  );
}
