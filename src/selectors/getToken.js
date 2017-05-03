// @flow

import type {RootState} from '../types/RootState';

export default function getToken(state: RootState) {
  return state.currentUser.token;
}
