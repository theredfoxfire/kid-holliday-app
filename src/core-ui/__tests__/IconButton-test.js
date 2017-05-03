// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import {TouchableOpacity, Text, View} from 'react-native';
import {Icon} from '../../core-ui';
import IconButton from '../IconButton';

describe('Icon Button', () => {
  it('Should have render the right IconButton', () => {
    let spy = expect.createSpy();
    let wrapper = shallow(<IconButton icon="search" onPress={spy} />);
    expect(wrapper.find(TouchableOpacity).length).toEqual(1);
    let click = wrapper.find(TouchableOpacity).simulate('press');
    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find(View).length).toEqual(1);
    expect(click.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it('Should have a right IconButton with text', () => {
    let spy = expect.createSpy();
    let wrapper = shallow(<IconButton text="why?" icon="search" onPress={spy} />);
    expect(wrapper.find(TouchableOpacity).length).toEqual(1);
    let click = wrapper.find(TouchableOpacity).simulate('press');
    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find(Text).length).toEqual(1);
    expect(wrapper.find(View).length).toEqual(1);
    expect(click.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
});
