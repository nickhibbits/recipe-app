import { RECEIVE_RECIPES } from "../actions/recipes";

export function recipes(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECIPES:
      const recipeCategories = action.recipes;
      console.log("recipes", recipeCategories);
      return {
        ...state,
        [recipeCategories[0].cuisine]: recipeCategories[0].recipes,
        [recipeCategories[1].cuisine]: recipeCategories[1].recipes,
        // recipes: [...action.recipes],
      };

    default:
      return state;
  }
}
