const {describe, it} = global;

import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import {View, Text, ScrollView} from 'react-native';
import Tabs from '../Tabs';

describe('Tabs tests', () => {

  it('should render tabs properly', () => {
    function ComponentA() {
      return (
        <View>
          <Text>Renders Component A</Text>
        </View>
      );
    }
    function ComponentB() {
      return (
        <View>
          <Text>Renders Component A</Text>
        </View>
      );
    }

    let renderScenes = [ComponentA, ComponentB];
    let configureScene = () => {
      return {
        tabTitles: ['Tab 1', 'Tab 2'],
        pickStyle: 'primary',
      };
    };

    let wrapper = shallow(<Tabs renderScenes={renderScenes} configureScene={configureScene} />);
    expect(wrapper.find(View).length).toBe(4);
    expect(wrapper.find(ScrollView).at(0).children().text()).toBe('<ComponentA />');

    wrapper.find(View).at(1).children().last().simulate('press');
    expect(wrapper.find(ScrollView).at(0).children().text()).toBe('<ComponentB />');

    wrapper.find(View).at(1).children().first().simulate('press');
    expect(wrapper.find(ScrollView).at(0).children().text()).toBe('<ComponentA />');

    // selected tab pickStyle 1, with border and background color
    let selectedWrapper = wrapper.find(View).at(1).children().children().first().props();
    expect(selectedWrapper.style[0].backgroundColor).toBe('#00C853');
    expect(selectedWrapper.style[1].borderBottomWidth).toBe(4);
    expect(selectedWrapper.style[1].borderBottomColor).toBe('#818181');

    // unselected tab pickStyle 1, with border, same background color as the above
    let unselectedWrapper = wrapper.find(View).at(1).children().at(1).children().props();
    expect(unselectedWrapper.style[0].backgroundColor).toBe('#00C853');
    expect(unselectedWrapper.style[1]).toBe(false);

    configureScene = () => {
      return {
        tabTitles: ['Tab 1', 'Tab 2'],
        pickStyle: 'secondary',
      };
    };
    wrapper = shallow(<Tabs renderScenes={renderScenes} configureScene={configureScene} />);

    // selected tab pickStyle 2, with border, no background color
    selectedWrapper = wrapper.find(View).at(1).children().at(0).children().props();
    expect(selectedWrapper.style[0].backgroundColor).toNotExist();
    expect(selectedWrapper.style[1].borderBottomWidth).toBe(4);
    expect(selectedWrapper.style[1].borderBottomColor).toBe('#00C853');

    // unselected tab pickStyle 2, no border, no background color
    unselectedWrapper = wrapper.find(View).at(1).children().at(1).children().props();
    expect(unselectedWrapper.style[0].backgroundColor).toNotExist();
    expect(unselectedWrapper.style[1].borderWidth).toNotExist();

    expect(selectedWrapper.children.props.children).toBe('Tab 1');
    expect(unselectedWrapper.children.props.children).toBe('Tab 2');
  });
});
