// @flow
import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  TitleBar,
  TextField,
  Dropdown,
} from '../core-ui';
import styles from './PlacesPage-style';
import LoadingIndicator from '../core-ui/LoadingIndicator';
import autobind from 'class-autobind';
import dismissKeyboard from 'dismissKeyboard';
import {LA_RED, LA_WHITE} from '../constants/color';

type State = {

};

type Props = {
  placeDetail: (id: string) => void;
  searchNameAction: (name: string) => void;
  searchNameResult: {};
  isFetchSearchNameLoading: boolean;
  isFetchProvinceLoading: boolean;
  province: Object;
  fetchCity: (province: string) => void;
  city: Object;
  isFetchCityLoading: boolean;
  isFetchPlaceByCity: booelan;
  searchByCity: () => void;
};

export default class PlacesPage extends Component {
  state: State;
  props: Props;

  _onKeywordChange(text: string) {
    this.setState({
      keyword: text,
    });
  }

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      keyword: '',
      selectedProvince: '',
    };
  }

  _onSelect(selectedItem) {
    return (item: string | number) => {
      this.setState({
        [selectedItem]: item,
      });
      if (selectedItem === 'selectedProvince') {
        this.props.fetchCity(item);
      } else if (selectedItem === 'selectedCity') {
        this.props.searchByCity(this.state.selectedProvince, item);
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.searchNameAction(this.state.keyword);
    }, 400);
  }

  _onPressSearch() {
    this.props.searchNameAction(this.state.keyword);
    dismissKeyboard;
  }

  render() {
    let {placeDetail, searchNameAction, isFetchSearchNameLoading,
      searchNameResult, province,
      isFetchCityLoading, city, isFetchPlaceByCity, placeByCityResult,
      isFetchProvinceLoading} = this.props;
    let {selectedProvince, selectedCity} = this.state;
    if (isFetchSearchNameLoading || isFetchProvinceLoading || isFetchCityLoading || isFetchPlaceByCity) {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Places"
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.lableContainer}>
              <Text style={styles.lableText}>Search place by name:</Text>
            </View>
            <View style={styles.field}>
              <TextField placeholder="Type the name of place"
                onIconPressEnd={() => searchNameAction(this.state.keyword)}
                iconNameEnd="search" iconStyleEnd={styles.iconStyleEnd}
                onChangeText={this._onKeywordChange}
                placeholderTextColor="#9a9a9a"
                value={this.state.keyword}
                rootStyle={styles.rootField} />
            </View>
            <View style={styles.lableContainer}>
              <Text style={styles.lableText}>Recomended Places:</Text>
            </View>
          </View>
          <ScrollView>
            <LoadingIndicator />
          </ScrollView>
        </View>
      );
    } else {
      let provinceOptions = [];
      let cityOptions = [];
      Object.values(province).forEach((item, idx) => {
        provinceOptions.push({value: item.id, label: item.propinsi});
      });
      Object.values(city).forEach((item, idx) => {
        cityOptions.push({value: item.id, label: item.kota_kabupaten});
      });
      let list = [];
      Object.values(searchNameResult).forEach((item, idx) => {
        list.push(
          <View key={idx}>
          <TouchableOpacity onPress={() => placeDetail(item.id)}>
            <View style={styles.listContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title ? item.title.substr(0,55) : null}{item.title ? item.title.length > 55 ? '...' : null : null}</Text>
                <Text style={styles.subtitle}>{item.location ? item.location.substr(0,70) : null}{item.location ? item.location.length > 70 ? '...' : null : null}</Text>
              </View>
            </View>
          </TouchableOpacity>
          </View>
        );
      });
      return (
        <View style={styles.mainContainer}>
          <View style={styles.barContainer}>
            <TitleBar
              title="Places"
            />
          </View>
          <View style={styles.formContainer}>
            {/*<View style={styles.field}>
              <Dropdown
                placeholder="Select Province"
                onSelect={this._onSelect('selectedProvince')}
                options={provinceOptions}
                selectedValue={selectedProvince}
              />
            </View>
            <View style={styles.field}>
              <Dropdown
                placeholder="Select City"
                onSelect={this._onSelect('selectedCity')}
                options={cityOptions}
                selectedValue={selectedCity}
              />
            </View>*/}
            <View style={styles.lableContainer}>
              <Text style={styles.lableText}>Search place by name:</Text>
            </View>
            <View style={styles.field}>
              <TextField placeholder="Where to, what todo..."
                onIconPressEnd={() => this._onPressSearch()}
                iconNameEnd="search" iconStyleEnd={styles.iconStyleEnd}
                onChangeText={this._onKeywordChange}
                placeholderTextColor="#9a9a9a"
                value={this.state.keyword}
                rootStyle={styles.rootField} />
            </View>
            <View style={styles.lableContainer}>
              <Text style={styles.lableText}>Recomended Places:</Text>
            </View>
          </View>
          <ScrollView>
            {list.length > 0 ? list :
              <View style={styles.init}>
                <Text style={styles.lableText}>Where to, what todo...</Text>
              </View>
            }
          </ScrollView>
        </View>
      );
    }
  }
}
