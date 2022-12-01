import { receiveUsers } from "./users";
import { getRecipeCategories } from "../utils/RecipesApi";
import { receiveRecipeCategories } from "./recipeCategories";
import { getUsers } from "../utils/database";

export function handleGetUsers() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      console.log("users", users);
      dispatch(receiveUsers(users));
    });
  };
}

export function handleGetRecipeCategories(categoryIds) {
  return async (dispatch) => {
    await getRecipeCategories(categoryIds).then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      dispatch(receiveRecipeCategories(recipeCategories));
    });
  };
}
