// @flow

import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import formatLargeNumbers from '../../helpers/formatLargeNumbers';

import styles from './GamificationHeader-style';

type Props = {
  user: {
    avatar: string;
    name: string;
    role: string;
    coins: number;
    level: number;
    requirement: number;
    experience: number;
  };
};

export default class GamificationHeader extends Component {
  props: Props;

  render() {
    const {user} = this.props;
    let {level, experience, requirement, coins} = user;
    const percentage = (experience / requirement);
    return (
      <Image source={{uri: user.avatar}} style={styles.root}>
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Image source={{uri: user.avatar}} style={styles.profileImage} />
            <View style={styles.profileTextWrapper}>
              <Text style={styles.profileFullName}>{user.name}</Text>
              <Text style={styles.profileRole}>{user.role}</Text>
            </View>
            <View style={styles.bigShovelWrapper}>
              <Image
                source={require('../../images/shovel.png')}
                style={styles.bigShovel}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.coinStatusWrapper}>
              <Text style={styles.coinLabel}>Koin</Text>
              <Text style={styles.coinCount}>{formatLargeNumbers(coins)}</Text>
              <View style={styles.smallShovelWrapper}>
                <Image
                  source={require('../../images/shovel.png')}
                  style={styles.smallShovel}
                />
              </View>
            </View>
            <View style={styles.progressWrapper}>
              <Text style={styles.progressLabel}>Level {level}</Text>
              <View style={styles.progressBarWrapper}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressBarValue, {flex: percentage}]} />
                  <View style={{flex: 1 - percentage}} />
                </View>
                <View style={styles.progressCount}>
                  <Text style={styles.smallText}>{experience}</Text>
                  <Text style={styles.smallText}>{requirement}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Image>
    );
  }

}
