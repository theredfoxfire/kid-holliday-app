// @flow
let {describe, it} = global;

import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import SwipeableThumbnail from '../SwipeableThumbnail';

describe('SwipeableThumbnail', () => {

  it('should render a swipeable thumbnail', () => {
    let wrapper = shallow(
      <SwipeableThumbnail>
        <View />
      </SwipeableThumbnail>
    );
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapper.find(View).length).toBe(1);
  });

  it('should handle a press event', () => {
    let press = createSpy();
    let wrapper = shallow(
      <SwipeableThumbnail>
        <View onPress={press} />
      </SwipeableThumbnail>
    );
    wrapper.find(TouchableOpacity).simulate('press');
    expect(press).toHaveBeenCalled();
  });

});
