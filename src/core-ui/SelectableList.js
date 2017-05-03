// @flow

import React, {Component} from 'react';

import {
  Button,
} from '../core-ui';

import {
  View,
  Modal,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import autobind from 'class-autobind';

import styles from './SelectableList-style';

type Props = {
  title: string;
  data: Array<any>;
  renderRow: (data: any) => ReactNode;
  onListConfirm: () => any;
};
type State = {
  isModalShown: boolean;
  dataRecord: Map<number, any>;
  selectedItem: Set<number>;
};

export default class SelectableList extends Component {
  props: Props;
  state: State;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      isModalShown: true,
      dataRecord: new Map(),
      selectedItem: new Set(),
    };
  }
  componentWillMount() {
    let {data} = this.props;
    let tempMap = new Map();
    for (let i = 0; i < data.length; i++) {
      tempMap.set(i, {
        ...data[i],
      });
    }
    this.setState({
      dataRecord: new Map(tempMap),
    });
  }
  _onItemPress(idx: number) {
    let tempSet = this.state.selectedItem;
    if (tempSet.has(idx)) {
      tempSet.delete(idx);
    } else {
      tempSet.add(idx);
    }
    this.setState({
      selectedItem: new Set(tempSet),
    });
  }
  _onConfirmPress() {
    let tempArr = [];
    for (let key of this.state.selectedItem.values()) {
      tempArr.push(this.state.dataRecord.get(key));
    }
    this.props.onListConfirm(tempArr);
    this.setState({
      isModalShown: false,
      dataRecord: new Map(),
      selectedItem: new Set(),
    });
  }
  render() {
    let {title, renderRow, data} = this.props;
    return (
      <Modal
        visible={this.state.isModalShown}
        transparent={true}
        onRequestClose={() => {}}
      >
        <TouchableWithoutFeedback onPress={() => this.setState({isModalShown: false})}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text style={styles.headerText}>{title}</Text>
                </View>
                <ScrollView style={styles.modalScrollView}>
                  {data.map((item, idx) => {
                    return (
                      <TouchableOpacity
                        key={idx}
                        onPress={() => this._onItemPress(idx)}
                      >
                        <View style={[
                          styles.listItem,
                          this.state.selectedItem.has(idx) ? styles.listItemSelected : null]}
                        >
                          {renderRow(item)}
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
                <Button
                  text="OK" style={{maxHeight: 40, minHeight: 0, height: 40}}
                  onPress={this._onConfirmPress}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
