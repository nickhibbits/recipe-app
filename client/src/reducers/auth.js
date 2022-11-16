import { SET_AUTH } from "../actions/auth";

export function auth(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      // const { auth } = action.auth;
      console.log("auth action", action);
      return {
        ...state,
        loggedIn: true,
        user: action.auth,
      };

    default:
      return state;
  }
}
