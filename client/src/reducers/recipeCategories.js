import { RECEIVE_RECIPE_CATEGORIES } from "../actions/recipeCategories";

export function recipeCategories(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECIPE_CATEGORIES:
      const recipeCategories = action.recipeCategories;
      console.log("recipes", recipeCategories);
      return {
        ...state,

        [recipeCategories[0].cuisine]: recipeCategories[0].recipes,
        [recipeCategories[1].cuisine]: recipeCategories[1].recipes,
        [recipeCategories[2].cuisine]: recipeCategories[2].recipes,

        // [recipeCategories[3].cuisine]: recipeCategories[3].recipes,
        // [recipeCategories[4].cuisine]: recipeCategories[4].recipes,
        // recipes: [...action.recipes],
      };

    default:
      return state;
  }
}
