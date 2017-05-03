// @flow

import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import {Icon} from '../../core-ui';
import Shovel from '../../images/shovel.png';
import styles from './ActivityListItem-style';
import type {SubActivity} from '../../types/Activity';

type Props = {
  headerText: string;
  coin: number;
  isDone: boolean;
  activities: Array<SubActivity>;
};

export default function ActivityListItem(props: Props) {
  let {headerText, coin, activities, isDone} = props;
  let rightHeader;
  if (activities.length === 0) {
    if (isDone) {
      rightHeader = <Icon name="done" style={[styles.iconDone, {fontSize: 24}]} />;
    } else {
      rightHeader = (
        <View style={[styles.flexRow, styles.alignCenter]}>
          <Text style={[styles.smallActivityText, styles.textAlign]}>{coin}</Text>
          <View style={[styles.leftMargin, styles.shovelIconWrapper]}>
            <Image source={Shovel} resizeMode="cover" style={styles.shovelIcon} />
          </View>
        </View>
      );
    }
  }
  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, styles.headerContainer]}>
        <Text style={[styles.flex, styles.header]}>{headerText}</Text>
        {rightHeader}
      </View>
      {
        activities != null && activities.length !== 0 ?
          (
            <View style={styles.activitiesContainer}>
              {activities.map(({id, name, isDone, coin}) => {
                return (
                  <View key={id} style={[styles.flexRow, styles.alignCenter]}>
                    <Text style={styles.smallActivityText}>{name}</Text>
                    <View style={styles.barSpacer} />
                    <View style={[styles.flexRow, styles.infoWrapper]}>
                      <Text style={[styles.smallActivityText, styles.fixedWidth, styles.textAlign]}>{coin}</Text>
                      {
                        isDone ? (
                          <Icon name="done" style={[styles.iconDone, styles.leftMargin]} />
                        ) : (
                          <View style={[styles.leftMargin, styles.shovelIconWrapper]}>
                            <Image source={Shovel} resizeMode="cover" style={styles.shovelIcon} />
                          </View>
                        )
                      }
                    </View>
                  </View>
                );
              })}
            </View>
          ) : null
      }
    </View>
  );
}
