import { getUsers } from "../utils/database";
import { getRecipes } from "../utils/RecipesApi";

import { receiveUsers } from "./users";
import { receiveRecipes } from "./recipes";

export function handleInitialData() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      console.log("users", users);
      dispatch(receiveUsers(users));
    });

    await getRecipes().then((recipes) => {
      console.log("recipes", recipes);
      dispatch(receiveRecipes(recipes));
    });
  };
}
