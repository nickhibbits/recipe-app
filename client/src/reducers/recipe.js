import { RECEIVE_RECIPE } from "../actions/recipe";

export function recipe(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECIPE:
      const { recipe: recipeInfo } = action;
      return recipeInfo;

    default:
      return state;
  }
}
