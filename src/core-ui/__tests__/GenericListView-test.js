// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';

import {ScrollView, View, Text} from 'react-native';
import GenericListView, {ListItem} from '../GenericListView';

describe('GenericListView', () => {
  it('should have a ScrollView and its children', () => {
    const wrapper = shallow(
      <GenericListView>
        <View>
          <Text>Just a simple test with awesome text!!</Text>
        </View>
      </GenericListView>
    );
    expect(wrapper.find(ScrollView).length).toEqual(1);
    expect(wrapper.find(ListItem).length).toEqual(1);
  });
});
