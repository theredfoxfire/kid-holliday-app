const {describe, it} = global;

import React from 'react';
import {View} from 'react-native';
import expect from 'expect';
import {shallow} from 'enzyme';
import Table, {Label} from '../Table';

describe('Table tests', () => {
  let dataSource = [
    {
      commodity: 'Cabe',
      prevPrice: 20000,
      currPrice: 20000,
    },
    {
      commodity: 'Jagung',
      prevPrice: 15500,
      currPrice: 20000,
    },
    {
      commodity: 'Tomat',
      prevPrice: 21000,
      currPrice: 20000,
    },
  ];

  let wrapper = shallow(
    <Table dataSource={dataSource}>
      <Label title="No." />
      <Label title="Komoditas" />
      <Label title="Harga 22/01/2016" />
      <Label title="Harga 23/01/2016" />
    </Table>
  );

  it('should renders table', () => {
    expect(wrapper.find(View).length).toBe(2);
    expect(wrapper.find(Label).length).toBe(4);
  });
});
