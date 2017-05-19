// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlacesPage from '../pages/PlacesPage';

export function mapStateToProps(state: RootState) {
  return {
    searchNameResult: state.searchNameResult,
    isFetchSearchNameLoading: state.loadingIndicator.isFetchSearchNameLoading,
    isFetchProvinceLoading: state.loadingIndicator.isFetchProvinceLoading,
    isFetchCityLoading: state.loadingIndicator.isFetchCityLoading,
    isFetchPlaceByCity: state.loadingIndicator.isFetchPlaceByCity,
    province: state.province,
    city: state.city,
    placeByCityResult: state.placeByCityResult,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    placeDetail(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'placeDetail'});
      dispatch({type: 'SEARCH_NAME_DETAIL', placeDetailID: id});
    },
    searchNameAction(name: string) {
      dispatch({type: 'FETCH_SEARCH_NAME', name});
    },
    fetchCity(province: string) {
      dispatch({type: 'FETCH_CITY', province});
    },
    searchByCity(province: string, city: string) {
      dispatch({type: 'FETCH_PLACE_BY_CITY', province, city});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);
