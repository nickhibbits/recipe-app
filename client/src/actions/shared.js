// import { getUsers } from "../utils/database";
// import { receiveUsers } from "./users";
import { getRecipeCategories } from "../utils/RecipesApi";
import { receiveRecipeCategories } from "./recipeCategories";

export function handleInitialData() {
  return async (dispatch) => {
    // await getUsers().then((users) => {
    //   console.log("users", users);
    //   dispatch(receiveUsers(users));
    // });

    await getRecipeCategories().then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      dispatch(receiveRecipeCategories(recipeCategories));
    });
  };
}
