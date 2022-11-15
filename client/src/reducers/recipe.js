import { RECEIVE_RECIPE, SAVE_RECIPE } from "../actions/recipe";

export function recipe(state = {}, action) {
  switch (action.type) {
    case SAVE_RECIPE:
      const { recipeId, user } = action;
      // how is the store constructed?
      // what steps need happen to remove recipe from userProfile?
      return { recipeId, user };
    case RECEIVE_RECIPE:
      const { recipe: recipeInfo } = action;
      return recipeInfo;

    default:
      return state;
  }
}
