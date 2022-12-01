import { RECEIVE_RECIPE_CATEGORIES } from "../actions/recipeCategories";

export function recipeCategories(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECIPE_CATEGORIES:
      const recipeCategories = action.recipeCategories;
      console.log("recipes", recipeCategories);

      let categoriesObject = {};

      recipeCategories.forEach((category) => {
        categoriesObject = {
          ...categoriesObject,
          [category.cuisine]: category.recipes,
        };
      });

      console.log("categoriesObject", categoriesObject);

      return {
        ...state,
        ...categoriesObject,
      };

    default:
      return state;
  }
}
