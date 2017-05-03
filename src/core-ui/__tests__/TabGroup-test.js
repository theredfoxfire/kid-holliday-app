// @flow
const {describe, it} = global;

import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import {View, Text, TouchableOpacity} from 'react-native';
import TabGroup, {Tab} from '../TabGroup';

describe('Tab Group test', () => {
  let wrapper = shallow(
    <TabGroup styling="primary">
      <Tab
        title="First Tab"
        isSelected={true}
        onSelect={() => {}}
      >
        <View><Text>Hello First Page</Text></View>
      </Tab>
    </TabGroup>
  );
  let wrapperNotSelected = shallow(
    <TabGroup styling="primary">
      <Tab
        title="First Tab"
        isSelected={false}
        onSelect={() => {}}
      >
        <View><Text>Hello First Page</Text></View>
      </Tab>
    </TabGroup>
  );
  it('Should render correct number of View', () => {
    expect(wrapper.find(View).length).toBe(5);
    expect(wrapperNotSelected.find(View).length).toBe(5);
  });
  it('Should render correct number of Text', () => {
    expect(wrapper.find(Text).length).toBe(2);
    expect(wrapperNotSelected.find(Text).length).toBe(2);
  });
  it('Should render correct number of Tab', () => {
    expect(wrapper.find(Tab).length).toBe(1);
    expect(wrapperNotSelected.find(Tab).length).toBe(1);
  });
  it('Should render correct number of TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity).length).toBe(1);
    expect(wrapperNotSelected.find(TouchableOpacity).length).toBe(1);
  });
});
