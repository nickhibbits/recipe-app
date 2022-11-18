import { RECEIVE_USERS, CREATE_USER } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_USER:
      console.log("state", state);
      return {
        byId: {
          ...state.byId,
          [action.username]: {
            username: action.username,
            password: action.password,
          },
        },
        allIds: [...state.allIds, action.username],
      };

    default:
      return state;
  }
}
