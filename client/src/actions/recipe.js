import { getRecipe } from "../utils/RecipesApi";

export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const SAVE_RECIPE = "SAVE_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export function handleReceiveRecipe(id) {
  return async (dispatch) => {
    await getRecipe(id).then((recipeInfo) =>
      dispatch(receiveRecipe(recipeInfo))
    );
  };
}

function receiveRecipe(recipe) {
  return {
    type: RECEIVE_RECIPE,
    recipe,
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
