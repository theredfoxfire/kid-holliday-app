// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import {View, Text} from 'react-native';
import TitleBar from '../TitleBar';
import IconButton from '../IconButton';

import image from '../images/karsa-01.png';

describe('TitleBar', () => {
  it('should render children in TitleBar', () => {
    const wrapper = shallow(
      <TitleBar title="Test" logoImage={image}>
        <IconButton icon="search" />
      </TitleBar>
    );
    expect(wrapper.find(View).length).toEqual(3);
    expect(wrapper.find(Text).length).toEqual(1);
    expect(wrapper.find(IconButton).length).toEqual(1);
  });
});
