// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import ThumbnailCard from '../ThumbnailCard';
import Thumbnail from '../Thumbnail';
import IconButton from '../IconButton';
import {View, Text} from 'react-native';

import image from '../images/karsa-01.png';

describe('ThumbnailCard Test', () => {
  let wrapper = shallow(
    <ThumbnailCard image={image} toggleOption={true}>
      <Text>Hi hi hi</Text>
    </ThumbnailCard>
  );
  it('Should render Thumbnail component', () => {
    expect(wrapper.find(Thumbnail).length).toBe(1);
  });
  it('Should render IconButton when toggle option enable', () => {
    expect(wrapper.find(IconButton).length).toBe(1);
  });
  it('Should render Text as a children', () => {
    expect(wrapper.find(Text).length).toBe(1);
  });
  it('Should have the right number of view', () => {
    expect(wrapper.find(View).length).toBe(5);
  });
});
