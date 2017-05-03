// @flow
import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import FavoriteItem from './FavoriteItem';
import styles from './FavoriteList-style';

import type {Favorite} from '../types/Favorite';

type Props = {
  favorites: Array<Favorite>;
  onFavoriteSelect: (favorite: Favorite) => void;
  onFavoriteDelete: (favoriteId: string) => void;
};

export default function FavoriteList(props: Props) {
  let {favorites, onFavoriteSelect, onFavoriteDelete} = props;
  let renderFavorite = <View />;

  if (favorites.length === 0) {
    renderFavorite = (
      <View style={styles.favoriteEmpty}>
        <Text>Daftar favorit Anda masih kosong.</Text>
      </View>
    );
  } else {
    renderFavorite = (
      <ScrollView style={styles.root}>
        {favorites.map((favorite) => (
          <FavoriteItem
            key={favorite.id}
            favorite={favorite}
            onPress={() => onFavoriteSelect(favorite)}
            onDeleteButtonPress={() => onFavoriteDelete(favorite.id)}
          />
        ))}
      </ScrollView>
    );
  }

  return renderFavorite;
}
