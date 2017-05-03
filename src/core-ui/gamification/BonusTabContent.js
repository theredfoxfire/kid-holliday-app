// @flow

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './BonusTabContent-style';
import LoadingIndicator from '../LoadingIndicator';

import type {Bonus} from '../../types/Gamification';

type Props = {
  bonusList: Array<Bonus>;
  isLoading: boolean;
  fetchLevels: () => void;
};

export default class BonusTabContent extends Component {
  props: Props;

  componentWillMount() {
    if (this.props.bonusList.length === 0) {
      this.props.fetchLevels();
    }
  }

  render() {
    let {bonusList, isLoading} = this.props;
    return (
      <View style={[styles.flex, styles.padding]}>
        <Text>Setiap level Anda naik, Anda mendapatkan tambahan point level dan koin</Text>
        <View style={styles.flex}>
          {isLoading && bonusList.length === 0 ? <LoadingIndicator /> :
            !isLoading && bonusList.length === 0 ? (
              <Text>Tidak bisa menampilkan data level. Silahkan periksa koneksi anda.</Text>
            ) : (
              <View style={styles.grayContainer}>
                <Text style={[styles.headerText, styles.marginBottom]}>BONUS</Text>
                {bonusList.map((bonus, i) => {
                  return (
                    <View key={i} style={[styles.flexRow, styles.smallMarginBottom]}>
                      <Text style={[styles.marginRight]}>{bonus.name}</Text>
                      <View style={styles.barSpacer} />
                      <Text style={[styles.pointText, styles.pointWidth]}>{bonus.coins}</Text>
                    </View>
                  );
                })}
              </View>
            )}
        </View>
      </View>
    );
  }
}
