// @flow
import React, {Component} from 'react';
import autobind from 'class-autobind';
import {
  View,
} from 'react-native';
import {Dropdown} from '../../core-ui';
import type {Option, Value} from '../../core-ui/Dropdown';
import type {Location} from '../../types/Location';

type State = {
  selectedProvinceID: Value;
  selectedCityID: Value;
  selectedSubDistrictID: Value;
  selectedVillageID: Value;
};

type Props = {
  provinceOptions: Array<Option>;
  cityOptions: Array<Option>;
  subDistrictOptions: Array<Option>;
  villageOptions: Array<Option>;

  onProvinceSelect: (provinceID: Value) => void;
  onCitySelect: (cityID: Value) => void;
  onSubDistrictSelect: (subDistrictID: Value) => void;
  getSelectedValues: (location: Location) => void; // This received function is used to get the selected values for each dropdown.
  // The page which called this view, should send the function as a props and includes setState() or another way to preserve the data.
};

export default class LocationDropdown extends Component {
  state: State;
  props: Props;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      selectedProvinceID: '',
      selectedCityID: '',
      selectedSubDistrictID: '',
      selectedVillageID: '',
    };
  }

  render() {
    let {provinceOptions, cityOptions, subDistrictOptions, villageOptions} = this.props;
    let {selectedProvinceID, selectedCityID, selectedSubDistrictID, selectedVillageID} = this.state;
    return (
      <View>
        <Dropdown
          placeholder="Pilih provinsi"
          options={provinceOptions}
          onSelect={this._onProvinceSelect}
          selectedValue={selectedProvinceID}
        />
        <Dropdown
          placeholder="Pilih kota/kabupaten"
          options={cityOptions}
          onSelect={this._onCitySelect}
          selectedValue={selectedCityID}
        />
        <Dropdown
          placeholder="Pilih kecamatan"
          options={subDistrictOptions}
          onSelect={this._onSubDistrictSelect}
          selectedValue={selectedSubDistrictID}
        />
        <Dropdown
          placeholder="Pilih desa"
          options={villageOptions}
          onSelect={this._onVillageSelect}
          selectedValue={selectedVillageID}
        />
      </View>
    );
  }

  _onProvinceSelect(selectedProvinceID: Value) {
    // let provinceName = this.props.provinceOptions.filter((option) => {
    //   return option.value === selectedProvinceID;
    // })[0].label;
    // TODO move this to add new plant submit
    this.setState({selectedProvinceID});
    this.setState({selectedSubDistrictID: ''});
    this.setState({selectedVillageID: ''});
    this.props.onProvinceSelect(selectedProvinceID);
    this.props.getSelectedValues({
      province: selectedProvinceID,
    });
  }

  _onCitySelect(selectedCityID: Value) {
    let {selectedProvinceID} = this.state;
    this.setState({selectedCityID});
    this.setState({selectedVillageID: ''});
    this.props.onCitySelect(selectedCityID);
    if (selectedProvinceID) {
      this.props.getSelectedValues({
        province: selectedProvinceID,
        city: selectedCityID,
      });
    }
  }

  _onSubDistrictSelect(selectedSubDistrictID: Value) {
    let {selectedProvinceID, selectedCityID} = this.state;
    this.setState({selectedSubDistrictID});
    this.props.onSubDistrictSelect(selectedSubDistrictID);
    if (selectedProvinceID && selectedCityID) {
      this.props.getSelectedValues({
        province: selectedProvinceID,
        city: selectedCityID,
        subdistrict: selectedSubDistrictID,
      });
    }
  }

  _onVillageSelect(villageID: Value) {
    let {selectedProvinceID, selectedCityID, selectedSubDistrictID} = this.state;
    this.setState({selectedVillageID: villageID});
    if (selectedProvinceID && selectedCityID && selectedSubDistrictID) {
      this.props.getSelectedValues({
        province: selectedProvinceID,
        city: selectedCityID,
        subdistrict: selectedSubDistrictID,
        village: villageID,
      });
    }
  }

}
