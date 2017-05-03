// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {View, Image} from 'react-native';

import ProfileHeader from '../ProfileHeader';
import image from '../../images/karsa-01.png';

describe('ProfileHeader', () => {
  it('Should render ProfileHeader', () => {
    let wrapper = shallow(
      <ProfileHeader
        headerType="small"
        image={image}
      />
    );
    expect(wrapper.find(View).length).toEqual(4);
    expect(wrapper.find(Image).length).toEqual(2);
  });
});
