// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Picker,
} from 'react-native';
import {
  Button,
  TitleBar,
  Icon,
} from '../core-ui';
import styles from './TodoPage-style';
import autobind from 'class-autobind';
import newKuta from '../images/new-kuta.jpg';
import woodyKid from '../images/woody-kid-zone.jpg';
import ModalPicker from 'react-native-modal-picker';

type State = {

};
type Props = {
  todoDetails?: () => void;
};

export default class TodoPage extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      selectedOption: '',
    };
  }

  _selectedAction(selectedOption: number) {
    if (selectedOption === 1) {
      return this.props.todoDetails();
    }
  }

  render() {
    let index = 0;
    const data = [
        { key: index++, label: 'View details', value: 1 },
        { key: index++, label: 'Uncheck this item', value: 2 },
        { key: index++, label: 'Remove from list', value: 3 },
    ];
    return (
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <TitleBar
            title="Todo List"
          />
        </View>
        <ScrollView>
        <ModalPicker
          data={data}
          initValue=""
          onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={newKuta} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>New Kuta Green Park</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                  <Icon name="done" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Woody Kid Zone</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                  <Icon name="done" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={newKuta} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>New Kuta Green Park</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                  <Icon name="done" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Woody Kid Zone</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                 <Icon name="more-vert" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={newKuta} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>New Kuta Green Park</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                 <Icon name="more-vert" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Woody Kid Zone</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                 <Icon name="more-vert" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={newKuta} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>New Kuta Green Park</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                 <Icon name="more-vert" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Woody Kid Zone</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                 <Icon name="more-vert" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={newKuta} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>New Kuta Green Park</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                  <Icon name="done" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
          <ModalPicker
            data={data}
            initValue=""
            onChange={(option)=>{this._selectedAction(option.value)}}>
            <View style={styles.placeContainer}>
              <View style={styles.itemPlaceContainer}>
                <Image source={woodyKid} style={styles.image} resizeMode="stretch" />
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Woody Kid Zone</Text>
                  <Text>Tanah Abang, Jakarta Selatan</Text>
                </View>
                <View style={styles.checklistContainer}>
                  <Icon name="done" style={styles.checlist} />
                </View>
              </View>
            </View>
          </ModalPicker>
        </ScrollView>
      </View>
    );
  }
}
