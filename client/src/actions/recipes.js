export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const SAVE_RECIPE = "SAVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export function receiveRecipes(recipes) {
  return {
    type: RECEIVE_RECIPES,
    recipes,
  };
}

export function saveRecipe(recipeId, user) {
  return {
    type: SAVE_RECIPE,
    user,
    recipeId,
  };
}

export function removeRecipe(recipeId, user) {
  return {
    type: REMOVE_RECIPE,
    user,
    recipeId,
  };
}
