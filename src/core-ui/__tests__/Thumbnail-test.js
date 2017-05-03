// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import Thumbnail from '../Thumbnail';
import {Image, View} from 'react-native';
import image from '../images/karsa-01.png';


describe('Thumbnail Test', () => {
  let wrapper = shallow(<Thumbnail image={image} />);
  it('Should render Image component', () => {
    expect(wrapper.find(Image).length).toBe(1);
    expect(wrapper.find(View).length).toBe(1);
  });
});
