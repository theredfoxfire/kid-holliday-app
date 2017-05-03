// @flow
let {describe, it} = global;

import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Button from '../Button';

describe('Button', () => {

  it('should render a button', () => {
    let wrapper = shallow(
      <Button text="Hello" />
    );
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(1);
  });

  it('should render text and icon', () => {
    let wrapper = shallow(
      <Button text="Hello" icon="phone" />
    );
    expect(wrapper.find(Text).length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(1);
  });

  it('should handle a press event', () => {
    let press = createSpy();
    let wrapper = shallow(
      <Button text="Hello" onPress={press} />
    );
    wrapper.find(TouchableOpacity).simulate('press');
    expect(press).toHaveBeenCalled();
  });

});
