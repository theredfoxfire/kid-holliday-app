// @flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import styles from './Tabs-style';

type Props = {
  renderScenes: Array<() => ReactNode>;
  configureScene: () => {
    tabTitles: Array<string>;
    pickStyle: 'primary' | 'secondary';
  };
};

type State = {
  renderScenes: Array<Function>;
  currentScene: number;
  tabTitles: Array<string>;
  pickStyle: 'primary' | 'secondary';
};

export default class Tabs extends Component {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    autobind(this);
    let {renderScenes, configureScene} = this.props;
    this.state = {
      currentScene: 0,
      renderScenes,
      ...configureScene(),
    };
  }

  _onTabPress(index) {
    return () => {
      this.setState({currentScene: index});
    };
  }

  _renderNav() {
    let {tabTitles, currentScene} = this.state;
    let tabStyle = this._pickStyle('tabStyle');
    let selectedItemBorder = this._pickStyle('selectedItemBorder');

    return tabTitles.map((title, index) =>
      <TouchableWithoutFeedback
        key={index}
        onPress={this._onTabPress(index)}
      >
        <View style={[tabStyle, (index === currentScene) && selectedItemBorder]}>
          <Text style={this._pickStyle('selectedText', index)}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  _pickStyle(request, index) {
    let {pickStyle, currentScene} = this.state;
    switch (request) {
      case 'tabStyle':
        return (pickStyle === 'primary') ? styles.navigationItem1 : styles.navigationItem2;
      case 'selectedItemBorder':
        return (pickStyle === 'primary') ? styles.selectedItem1 : styles.selectedItem2;
      case 'selectedText': {
        return [
          (pickStyle === 'primary') ? styles.navigationText1 : styles.navigationText2,
          (index === currentScene && pickStyle === 'secondary') && styles.selectedItemText,
        ];
      }
    }
  }

  render() {
    let {renderScenes, currentScene, pickStyle} = this.state;
    let RenderScene = renderScenes[currentScene];
    let navigationStyle = (pickStyle === 'primary') ? styles.navigation1 : styles.navigation2;

    return (
      <View style={{flex: 1}}>
        <View style={navigationStyle}>
          {this._renderNav()}
        </View>
        <ScrollView style={{flex: 1}}>
          <RenderScene />
        </ScrollView>
      </View>
    );
  }
}
