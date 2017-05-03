// @flow

import {connect} from 'react-redux';
import type {Dispatch} from '../../types/Store';
import LocationDropdown from './LocationDropdownView';

import type {RootState} from '../../types/RootState';

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onProvinceSelect(provinceID: string) {
      dispatch({type: 'FETCH_CITY_LIST_REQUESTED', provinceID});
    },
    onCitySelect(cityID: string) {
      dispatch({type: 'FETCH_SUBDISTRICT_LIST_REQUESTED', cityID});
    },
    onSubDistrictSelect(subDistrictID: string) {
      dispatch({type: 'FETCH_VILLAGE_LIST_REQUESTED', subDistrictID});
    },
  };
}

export function mapStateToProps(state: RootState) {
  let {location} = state;
  let {provinceList, cityList, subDistrictList, villageList} = location;

  return {
    provinceOptions: provinceList ? provinceList : null,
    cityOptions: cityList ? cityList : null,
    subDistrictOptions: subDistrictList ? subDistrictList : null,
    villageOptions: villageList ? villageList : null,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDropdown);
