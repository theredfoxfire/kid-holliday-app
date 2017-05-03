// @flow
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import IconButton from './IconButton';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'black',
  },
  icon: {
    color: '#afafaf',
  },
  iconplus: {
    backgroundColor: 'red',
  },
});

type Props = {
  onBackPress?: () => void;
  onHomePress?: () => void;
  onMenuPress?: () => void;
};

export function AndroidButtons(props: Props) {
  return (
    <View style={styles.root}>
      <IconButton style={styles.icon} icon="keyboard-return" onPress={props.onBackPress} />
      <IconButton style={styles.icon} icon="home" onPress={props.onHomePress} />
      <IconButton style={styles.icon} icon="menu" onPress={props.onMenuPress} />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const {navigation} = stateProps;
  const {dispatch} = dispatchProps;
  return {
    onBackPress() {
      if (navigation.index === 0) {
        const firstRouteKey = navigation.routes[0].key;
        if (['walkthrough', 'initial', 'homepage'].indexOf(firstRouteKey) !== -1) {
          // TODO: can we exit ios app programmatically?
          // Alert.alert('Karsa', 'Keluar dari aplikasi?', [
          //   {text: 'Iya', onPress: () => {}},
          //   {text: 'Tidak'},
          // ]);
        } else {
          dispatch({type: 'RESET_ROUTE', key: 'homepage'});
        }
      } else {
        dispatch({type: 'POP_ROUTE'});
      }
    },
  };
};

export default connect(mapStateToProps, null, mergeProps)(AndroidButtons);
