export const RECEIVE_RECIPE_CATEGORIES = "RECEIVE_RECIPE_CATEGORIES";

export function receiveRecipeCategories(recipeCategories) {
  return {
    type: RECEIVE_RECIPE_CATEGORIES,
    recipeCategories,
  };
}
