import { RECEIVE_USERS, SET_AUTH } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SET_AUTH:
      return {
        ...state,
        ...action.authedUser,
      };

    default:
      return state;
  }
}
