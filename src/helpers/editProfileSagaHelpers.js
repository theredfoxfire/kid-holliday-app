//@flow
import type {User} from '../types/User';
import type {RootState} from '../types/RootState';
import type {TempProfile} from '../types/User';
import {select} from 'redux-saga/effects';

type StateTransfer = 'currentUser' | 'tempProfile';
export function copyState(source: StateTransfer, destination: StateTransfer) {
  return (previousState: TempProfile & User) => {
    let {
      name,
      gender,
      avatar,
      avatarFb,
      noHp,
      province,
      city,
      provinceName,
      cityName,
    } = previousState;

    let copiedState = {
      name,
      gender,
      avatar,
      avatarFb,
      noHp,
      province,
      city,
      provinceName,
      cityName,
    };

    if (source === 'tempProfile' && destination === 'currentUser') {
      //$FlowFixMe
      Object.assign(copiedState, {
        address: previousState.fullAddress,
      });
    } else {
      //$FlowFixMe
      Object.assign(copiedState, {
        fullAddress: previousState.address,
        allProvinceData: [{value: province, label: provinceName}],
        allCitiesData: [{value: city, label: cityName}],
      });
    }
    return copiedState;
  };
}

export function getTempProfile(state: RootState) {
  let {
    avatar,
    tempImage,
    name,
    fullAddress,
    gender,
    noHp,
    city,
    province,
  } = state.tempProfile;

  return {
    profileToServer: {
      avatar,
      tempImage,
      name,
      province,
      city,
      gender,
      address: fullAddress,
      no_hp: noHp,
    },
    profileToReducer: {
      ...state.tempProfile,
      address: fullAddress,
    },
  };
}

export function getUserAddress(state: RootState) {
  return {
    provinceID: state.tempProfile.province,
    cityID: state.tempProfile.city,
  };
}

export function formatData(data: Array<Object>, subAddress: 'province' | 'city') {
  return data.map((item) => {
    return {
      value: item.id,
      label: item[subAddress + '_name'],
    };
  });
}

export const UserAction = {
  logIn: 'LOGIN_SUCCESS',
  cancelEditProfile: 'EDIT_PROFILE_CANCELED',
  submitNewProfile: 'POST_EDIT_PROFILE',
  changeAddress: 'SUB_ADDRESS_SELECTED',
  openEditProfilePage(action: {type: 'PUSH_ROUTE'; key: string}) {
    let isEditProfilePageOpen = (action.key === 'editProfile');
    return isEditProfilePageOpen;
  },
};

export function getAddressFromState(subAddress: string, subAddressID: string) {
  let isUserChangeProvince = (subAddress === 'province');
  const THE_ONLY_ITEM = 0;

  return select((state) => {
    if (isUserChangeProvince) {
      let filteredProvince = state.tempProfile.allProvinceData
        .filter((item) => item.value === subAddressID);
      return filteredProvince[THE_ONLY_ITEM];
    } else {
      let filteredCity = state.tempProfile.allCitiesData
        .filter((item) => item.value === subAddressID);
      return filteredCity[THE_ONLY_ITEM];
    }
  });
}
