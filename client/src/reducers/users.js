import {
  RECEIVE_USERS,
  CREATE_USER,
  SAVE_RECIPE,
  UPDATE_USER_CUISINES,
  UPDATE_NEW_USER_STATUS,
} from "../actions/users";

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
            newUser: true,
          },
        },
        allIds: [...state.allIds, action.username],
      };
    case UPDATE_USER_CUISINES:
      return {
        byId: {
          ...state.byId,
          [action.username]: {
            ...state.byId[action.username],
            savedRecipeCategories: action.updatedCuisines,
          },
        },
        allIds: [...state.allIds],
      };
    case UPDATE_NEW_USER_STATUS:
      return {
        byId: {
          ...state.byId,
          [action.username]: {
            ...state.byId[action.username],
            newUser: action.newUserStatus,
          },
        },
      };
    case SAVE_RECIPE:
      const { username } = action;

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
