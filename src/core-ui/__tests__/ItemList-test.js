// @flow

const {describe, it} = global;

import React from 'react';
import {View, Text} from 'react-native';
import expect from 'expect';
import {shallow} from 'enzyme';

import ItemList, {ItemHeader, ItemContent} from '../ItemList';
import TextCard from '../TextCard';

describe('ItemList test', () => {
  let wrapper = shallow(
    <ItemList>
      <ItemHeader title="something">
        <Text>asd</Text>
      </ItemHeader>
      <ItemContent>
        <TextCard
          title="Asd"
          textItems={['1', '2', '3']}
        />
        <TextCard
          title="Asd"
          textItems={['1', '2', '3']}
        />
      </ItemContent>
    </ItemList>

  );
  it('Should render the right amount of ItemHeader component', () => {
    expect(wrapper.find(ItemHeader).length).toBe(1);
  });
  it('Should render the right amount of ItemContent Component', () => {
    expect(wrapper.find(ItemContent).length).toBe(1);
  });
  it('Should render Text Component', () => {
    expect(wrapper.find(View).length).toBe(1);
  });
  it('Should render TextCard Component', () => {
    expect(wrapper.find(TextCard).length).toBe(2);
  });
});
