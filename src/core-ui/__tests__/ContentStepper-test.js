//@flow
const {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {Text, View} from 'react-native';
import ContentStepper from '../ContentStepper';

describe('ContentStepper tests', () => {
  const steps1 = [
    {position: 'start', isActive: true, label: 'Step 1'},
    {position: 'center', isActive: false, label: 'Step 2'},
    {position: 'end', isActive: false, label: 'Step 3'},
  ];
  const steps2 = [
    {position: 'start', isActive: false, label: 'Step 1'},
    {position: 'center', isActive: true, label: 'Step 2'},
    {position: 'end', isActive: false, label: 'Step 3'},
  ];
  const steps3 = [
    {position: 'start', isActive: false, label: 'Step 1'},
    {position: 'center', isActive: false, label: 'Step 2'},
    {position: 'end', isActive: true, label: 'Step 3'},
  ];
  const activeAtStart = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#50da62',
    borderTopColor: '#50da62',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftColor: '#50da62',
    borderLeftWidth: 1,
  };
  const activeAtMiddle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#50da62',
    borderTopColor: '#50da62',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginLeft: -10,
  };
  const activeAtEnd = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#50da62',
    borderTopColor: '#50da62',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginLeft: -10,
    borderRightColor: '#50da62',
    borderRightWidth: 1,
  };
  it('should renders ContentStepper with active in the first', () => {
    let wrapper = shallow(<ContentStepper steps={steps1} />);
    expect(wrapper.find(Text).length).toBe(6);
    expect(wrapper.find(View).length).toBe(20);
    expect(wrapper.find(View).at(2).props().style).toEqual(activeAtStart);
  });
  it('should renders ContentStepper with active in the middle', () => {
    let wrapper = shallow(<ContentStepper steps={steps2} />);
    expect(wrapper.find(Text).length).toBe(6);
    expect(wrapper.find(View).length).toBe(20);
    expect(wrapper.find(View).at(9).props().style).toEqual(activeAtMiddle);
  });
  it('should renders ContentStepper with active in the end', () => {
    let wrapper = shallow(<ContentStepper steps={steps3} />);
    expect(wrapper.find(Text).length).toBe(6);
    expect(wrapper.find(View).length).toBe(20);
    expect(wrapper.find(View).at(16).props().style).toEqual(activeAtEnd);
  });
});
