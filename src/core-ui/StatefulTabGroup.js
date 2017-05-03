// @flow

import React, {Children, Component} from 'react';
import autobind from 'class-autobind';

import {TabGroup, Tab} from '../core-ui';

export default class StatefulTabGroup extends Component {
  props: {
    scrollable?: boolean;
    children?: ReactNode;
    onTabSelect?: (newIndex: number) => void;
    styling: 'primary' | 'secondary';
  }
  state: {
    selectedIndex: number;
  }
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    let {children, onTabSelect, styling, scrollable} = this.props;
    return (
      <TabGroup styling={styling} scrollable={scrollable}>
        {Children.map(children, (child, index) => {
          let {onSelect, ...others} = child.props;
          if (child.type === Tab) {
            return (
              <Tab
                key={index}
                {...others}
                selectedIndex={this.state.selectedIndex === index}
                onSelect={() => {
                  this.setState({selectedIndex: index});
                  onTabSelect && onTabSelect(index);
                  onSelect && onSelect();
                }
              }
              />
            );
          }
        })}
      </TabGroup>
    );
  }
}
