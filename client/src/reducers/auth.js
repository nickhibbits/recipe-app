import { SET_AUTH } from "../actions/auth";

export function auth(state = {}, action) {
  const { loggedIn, user } = action;

  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        loggedIn,
        user,
      };

    default:
      return state;
  }
}
