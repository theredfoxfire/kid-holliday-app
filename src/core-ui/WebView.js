// @flow

import React from 'react';
import {
  WebView as WebViewNative,
  ActivityIndicator,
  View,
} from 'react-native';

type Props = {
  uri: string;
  style: StyleSet;
};

export default function WebView(props: Props) {
  let {uri} = props;
  return (
    <WebViewNative
      source={{uri}}
      style={[{flex: 1}, style]}
      renderLoading={() => {
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator
              animating={true}
              size="large"
            />
          </View>
        );
      }}
      {...props}
    />
  );
}
