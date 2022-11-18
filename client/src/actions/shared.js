import { getUsers } from "../utils/database";
import { receiveUsers } from "./users";
import { getRecipeCategories } from "../utils/RecipesApi";
import { receiveRecipeCategories } from "./recipeCategories";
import { setAuth } from "./auth";

export function handleGetUsers() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      console.log("users", users);
      dispatch(receiveUsers(users));
    });
  };
}

export function handleGetInitialData() {
  return async (dispatch) => {
    await getRecipeCategories().then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      dispatch(receiveRecipeCategories(recipeCategories));
    });
  };
}

export function handleInitialLogin(loggedIn) {
  console.log("handleInitialLogin 🟢");
  return async (dispatch) => {
    await getUsers().then((users) => {
      dispatch(receiveUsers(users));
      if (!loggedIn) {
        dispatch(setAuth({ user: "", loggedIn: false }));
      }
    });
  };
}
