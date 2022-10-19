import { getUsers } from "../utils/database";
import { getRecipesByCategory } from "../utils/RecipesApi";

import { receiveUsers } from "./users";
import { receiveRecipesByCategory } from "./recipes";

export function handleInitialData() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      console.log("users", users);
      dispatch(receiveUsers(users));
    });

    await getRecipesByCategory().then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      dispatch(receiveRecipesByCategory(recipeCategories));
    });
  };
}
