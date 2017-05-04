//@flow

import type {Action} from '../types/Action';

let initialState = false;

export default function drawerReducer(state: boolean = initialState, action: Action) {
  switch (action.type) {
    case 'OPEN_DRAWER': {
      return true;
    }
    case 'CLOSE_DRAWER': {
      return false;
    }
  }
  return state;
}
