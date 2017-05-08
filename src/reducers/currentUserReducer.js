// @flow
import type {Action} from '../types/Action';
import type {User} from '../types/User';

export default function currentUserReducer(state: User, action: Action) {
  if (state == null) {
    return {
      token: '',
    };
  }
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        ...action.currentUser,
      };
    }
    case 'LOGOUT_SUCCESS': {
      return {
        token: '',
      };
    }
  }
  return state;
}
