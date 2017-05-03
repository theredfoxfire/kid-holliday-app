//@flow
import type {NavigationState} from '../types/Navigation';
import type {Action} from '../types/Action';

let initialState = {
  index: 0,
  routes: [
    {
      key: 'initial',
    },
  ],
};

function navigationReducer(state: NavigationState = initialState, action: Action) {
  switch (action.type) {
    case 'RESET_ROUTE': {
      return {
        index: 0,
        routes: [
          {
            key: action.key,
          },
        ],
      };
    }
    case 'PUSH_ROUTE': {
      let {routes} = state;
      let {key, props} = action;
      if (routes.some((route) => route.key === key)) {
        return state;
      }
      let newRoutes = [...state.routes, {key: action.key, props}];
      return {
        index: state.index + 1,
        routes: newRoutes,
      };
    }
    case 'POP_ROUTE': {
      let newRoutes = state.routes.slice(0, state.routes.length - 1);
      return {
        index: state.index - 1,
        routes: newRoutes,
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        index: 0,
        routes: [
          {key: 'homepage'},
        ],
      };
    }
    case 'REGISTER_USER_SUCCESS': {
      return {
        index: 0,
        routes: [
          {key: 'homepage'},
        ],
      };
    }
    case 'GUEST_LOGIN': {
      return {
        index: 0,
        routes: [
          {key: 'homepage'},
        ],
      };
    }
  }

  return state;
}

export default navigationReducer;
