// @flow
import React, {Component} from 'react';
import ActivityList from '../../core-ui/gamification/ActivityList';
import createGamificationActivityList from '../../helpers/createGamificationActivityList';

import {View, Text} from 'react-native';
import {LoadingIndicator} from '../../core-ui';
import {PRIMARY_GREEN} from '../../constants/color';

import type {Activity} from '../../types/Activity';
import type {GamificationAction, UserGamificationAction, UserScore} from '../../types/Gamification';

const styles = {
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  labelIcon: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    padding: 5,
    backgroundColor: PRIMARY_GREEN,
    borderRadius: 5,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '700',
    padding: 5,
  },
};

type Props = {
  loading: boolean;
  activities: Array<Activity>;
  actions: Array<GamificationAction>;
  userActions: Array<UserGamificationAction>;
  userScores: Array<UserScore>;
  fetchActions: () => void;
  fetchUserActions: () => void;
  fetchUserScores: () => void;
  saveActivities: () => void;
};

export default class MyActivityList extends Component {
  props: Props;

  componentWillMount() {
    let {fetchActions, fetchUserActions, fetchUserScores} = this.props;
    fetchActions();
    fetchUserActions();
    fetchUserScores();
  }

  componentWillReceiveProps(nextProps: Props) {
    let {props} = this;
    let {actions, userActions, userScores} = nextProps;
    let dataCompleted = actions.length > 0 && userActions.length > 0 && userScores.length > 0;
    let dataChanged = props.actions.length !== actions.length || props.userActions.length !== userActions.length || props.userScores.length !== userScores.length;
    if (dataCompleted && dataChanged) {
      createGamificationActivityList(actions, userScores)
        .then((activities) => {
          this.props.saveActivities(activities);
        });
    }
  }

  render() {
    // TODO: this is a LOT of data to render; consider displaying it like an Accordion
    const {loading, activities} = this.props;
    if (loading && activities.length === 0) {
      return (
        <View style={[styles.flex, styles.center]}>
          <LoadingIndicator />
        </View>
      );
    }
    if (activities.length === 0) {
      return (
        <View style={[styles.flex, styles.center]}>
          <Text>Gagal mendapatkan informasi kegiatan gamifikasi.</Text>
        </View>
      );
    }
    let types = activities.map((activity) => activity.name);
    return (
      <View>
        {
          types.map((type, i) => <ActivityList key={i} activities={activities} typeFilter={type} />)
        }
      </View>
    );

    // NOTE: the comment below might still be needed
    // return (
    //   <View>
    //     <View style={styles.label}>
    //       <Text style={styles.labelIcon}>1x</Text>
    //       <Text style={styles.labelText}>Hanya dilakukan sekali</Text>
    //     </View>
    //     <ActivityList activities={activities} typeFilter="ONETIME" />
    //     <View style={styles.label}>
    //       <Text style={styles.labelIcon}>4x</Text>
    //       <Text style={styles.labelText}>Dapat dilakukan empat kali</Text>
    //     </View>
    //     <ActivityList activities={activities} typeFilter="FOURTIMES" />
    //     <View style={styles.label}>
    //       <Icon name="cached" style={styles.labelIcon} />
    //       <Text style={styles.labelText}>Harian</Text>
    //     </View>
    //     <ActivityList activities={activities} typeFilter="DAILY" />
    //   </View>
    // );
  }
}
