import { SET_AUTH } from "../actions/auth";

export function auth(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        loggedIn: action.loggedIn,
        user: action.user,
      };

    default:
      return state;
  }
}
