// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {View, Text} from 'react-native';

import ProfileHeaderText from '../ProfileHeaderText';

describe('ProfileHeaderText', () => {
  it('Should render ProfileHeaderText for store', () => {
    let wrapper = shallow(
      <ProfileHeaderText
        profileTitle="Title"
        personInCharge="Jono"
        profileType="store"
        productTotal={20}
      />
    );
    expect(wrapper.find(Text).length).toEqual(3);
    expect(wrapper.find(View).length).toEqual(1);
  });
  it('Should render ProfileHeaderText for group', () => {
    let wrapper = shallow(
      <ProfileHeaderText
        profileTitle="Title"
        personInCharge="Jono"
        profileType="group"
        groupInfo={{
          member: 4,
          thread: 10,
        }}
      />
    );
    expect(wrapper.find(Text).length).toEqual(6);
    expect(wrapper.find(View).length).toEqual(5);
  });
  it('Should render ProfileHeaderText for small group', () => {
    let wrapper = shallow(
      <ProfileHeaderText
        profileTitle="Title"
        personInCharge="Jono"
        profileType="small-group"
      />
    );
    expect(wrapper.find(Text).length).toEqual(2);
    expect(wrapper.find(View).length).toEqual(1);
  });
});
