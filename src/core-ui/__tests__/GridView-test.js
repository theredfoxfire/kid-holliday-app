// @flow
let {describe, it} = global;

import React from 'react';
import {shallow} from 'enzyme';
import expect, {createSpy} from 'expect';

import GridView, {groupItems} from '../GridView';

describe('GridView', () => {
  it('should group items correctly', () => {
    let items = [1, 2, 3, 4];
    let groupedItems = groupItems(items, 2);
    expect(groupedItems.length).toBe(2);
    expect(groupedItems[0].length).toBe(2);
    expect(groupedItems[1].length).toBe(2);

    items = [1, 2, 3, 4, 5, 6, 7, 8];
    groupedItems = groupItems(items, 3);
    expect(groupedItems.length).toBe(3);
    expect(groupedItems[0].length).toBe(3);
    expect(groupedItems[1].length).toBe(3);
    expect(groupedItems[2].length).toBe(2);
  });

  it('should have a ScrollView and its children', () => {
    let renderItem = createSpy();
    const wrapper = shallow(
      <GridView
        items={['one', 'two', 'three', 'four', 'five']}
        itemsPerRow={2}
        renderItem={renderItem}
      />
    );
    expect(wrapper.find('ListView').length).toBe(1);
  });
});
