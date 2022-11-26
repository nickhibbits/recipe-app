import { RECEIVE_USERS, CREATE_USER, SAVE_RECIPE } from "../actions/users";

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case CREATE_USER:
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
    case SAVE_RECIPE:
      const { username, recipeId } = action;

      return {
        byId: {
          ...state.byId,
          [username]: {
            ...state.byId[username],
            savedRecipes: [...state.byId[username].savedRecipes],
          },
        },
        allIds: [...state.allIds],
      };

    default:
      return state;
  }
}
