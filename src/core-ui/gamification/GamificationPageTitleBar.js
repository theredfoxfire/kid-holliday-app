// @flow
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TitleBar from '../TitleBar';

type Props = {
  onIconPress: () => void;
};

export default function GamificationPageTitleBar(props: Props) {
  return (
    <TitleBar iconButtonName="menu" title="Prestasi">
      <Icon
        name="store"
        style={{color: '#fff', fontSize: 30}}
        onPress={() => props.onIconPress()}
      />
    </TitleBar>
  );
}
