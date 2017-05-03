// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import autobind from 'class-autobind';
import {
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import {
  Button,
  LoadingIndicator,
} from '../core-ui';
import styles from './NearestStoreModal-style';
import noImage from '../images/no_image.png';

import type {Toko} from '../types/NearbyStore';
import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';

type Props = {
  nearbyStores: Array<Toko>;
  isLoading: boolean;
  isShowing: boolean;
  onClose: () => void;
  fetchNearestStoreByProducts: (lat: number, lon: number) => void;
};

export class NearestStoreModal extends Component {
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.fetchNearestStoreByProducts(position.coords.latitude, position.coords.longitude);
      },
      () => {
        ToastAndroid.show('Gagal Mendapatkan Lokasi GPS. Silakan Coba sesaat lagi.', ToastAndroid.SHORT);
      },
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 10000},
    );
  }
  _renderItem(store: Toko) {
    let {id, storeProfilePicture, address, name} = store;
    let storeImage = null;
    if (typeof storeProfilePicture === 'object' || typeof storeProfilePicture === 'number') {
      storeImage = storeProfilePicture;
    } else {
      storeImage = storeProfilePicture ? {uri: storeProfilePicture} : noImage;
    }
    return (
      <View key={id} style={styles.rowWrapper}>
        <View style={styles.storeImageWrapper}>
          <Image source={storeImage} style={styles.storeImage} resizeMode="cover" />
        </View>
        <View style={styles.storeDescription}>
          <Text style={styles.storeName}>{name}</Text>
          <Text style={styles.storeAddress} numberOfLines={2}>{address}</Text>
        </View>
      </View>
    );
  }
  render() {
    let {nearbyStores, isLoading} = this.props;
    let listItem = null;
    if (isLoading) {
      listItem = <LoadingIndicator />;
    } else {
      listItem = !isLoading && nearbyStores.length === 0 && nearbyStores ?
        <Text style={styles.noStoreText}>Tidak ada Toko Tersedia</Text> : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableWithoutFeedback>
              <View style={{flex: 1}}>
                {nearbyStores.map((store) => this._renderItem(store))}
              </View>
            </TouchableWithoutFeedback>
            <Button text="OK" style={styles.button} onPress={() => this.props.onClose()} />
          </ScrollView>
        );
    }
    return (
      <Modal
        animationType="fade"
        visible={this.props.isShowing}
        transparent={true}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={() => this.props.onClose()}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.content}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>TOKO TERDEKAT</Text>
                </View>
                {listItem}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export function mapStateToProps(state: RootState) {
  let {nearbyStore, loadingIndicator} = state;
  let {nearbyStores} = nearbyStore;
  let {isNearestStoreLoading} = loadingIndicator;

  return {
    isLoading: isNearestStoreLoading,
    nearbyStores: Array.from(nearbyStores.values()),
  };
}
export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchNearestStoreByProducts(lat: number, lon: number) {
      dispatch({
        type: 'FETCH_STORE_BY_PRODUCT_REQUESTED',
        lat,
        lon,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NearestStoreModal);
