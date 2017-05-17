// @flow

import {connect} from 'react-redux';

import type {RootState} from '../types/RootState';
import type {Dispatch} from '../types/Store';
import PlacesPage from '../pages/PlacesPage';

export function mapStateToProps(state: RootState) {
  return {
    searchNameResult: state.searchNameResult,
    isFetchSearchNameLoading: state.loadingIndicator.isFetchSearchNameLoading,
    isFetchSearchNameDetailLoading: state.loadingIndicator.isFetchSearchNameDetailLoading,
    isFetchProvinceLoading: state.loadingIndicator.isFetchProvinceLoading,
    isFetchCityLoading: state.loadingIndicator.isFetchCityLoading,
    province: state.province,
    city: state.city,
  };
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    placeDetail(id: string) {
      dispatch({type: 'PUSH_ROUTE', key: 'placeDetail'});
      dispatch({type: 'FETCH_SEARCH_NAME_DETAIL', id});
    },
    searchNameAction(name: string) {
      dispatch({type: 'FETCH_SEARCH_NAME', name});
    },
    fetchCity(province: string) {
      dispatch({type: 'FETCH_CITY', province});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);
