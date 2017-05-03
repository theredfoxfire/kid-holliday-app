// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import StoreProfileCard from '../StoreProfileCard';

import image from '../images/karsa-01.png';

describe('StoreProfileCard', () => {
  it('should render stuff properly', () => {
    const props = {
      name: 'foo',
      address: 'bar',
      phoneNumber: '+62 - 123',
      productCount: 100,
      picture: image,
    };
    const wrapper = shallow(<StoreProfileCard {...props} />);
    expect(wrapper.find('View').length).toBe(3);
    expect(wrapper.find('Image').length).toBe(1);
    expect(wrapper.find('LinearGradient').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(4);
  });
});
