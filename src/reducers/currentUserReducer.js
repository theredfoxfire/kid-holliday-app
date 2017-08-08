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
        ...action.currentUser,
      };
    }
    case 'LOGOUT_SUCCESS': {
      return {};
    }
    case 'EDIT_PROFILE_SUBMITTED': {
      let {tempProfile} = action;
      return {
        ...state,
        ...tempProfile,
      };
    }
    case 'REGISTER_USER_SUCCESS': {
      return {
        ...state,
        ...action.user,
      };
    }

    default: return state;
  }
}
