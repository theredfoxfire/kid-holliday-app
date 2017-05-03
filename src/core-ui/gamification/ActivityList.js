// @flow
import React from 'react';
import {View} from 'react-native';

import ActivityListItem from './ActivityListItem';
import type {Activity} from '../../types/Activity';

type Props = {
  activities: Array<Activity>;
  typeFilter: string;
};

export default function ActivityList(props: Props) {
  const {activities, typeFilter} = props;
  const filteredActivities = activities.filter((activity) => activity.type === typeFilter);
  return (
    <View>
      {filteredActivities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          headerText={activity.name}
          isDone={activity.isDone}
          coin={activity.coin}
          activities={activity.subActivities}
        />
      ))}
    </View>
  );
}
