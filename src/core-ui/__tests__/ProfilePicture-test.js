// @flow
let {describe, it} = global;

import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Icon} from '../../core-ui';
import ProfilePicture from '../ProfilePicture';

describe('Profile Picture', () => {

  it('should render a profile picture', () => {
    let wrapper = shallow(
      <ProfilePicture />
    );
    expect(wrapper.find(View).length).toBe(1);
    expect(wrapper.find(Image).length).toBe(0);
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapper.find(Icon).length).toBe(2);
  });

  it('should handle a press event', () => {
    let press = createSpy();
    let wrapper = shallow(
      <ProfilePicture onPress={press} />
    );
    wrapper.find(TouchableOpacity).simulate('press');
    expect(press).toHaveBeenCalled();
  });

});
