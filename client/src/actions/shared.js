import { addUserToDb, getUsers } from "../utils/database";
import { receiveUsers } from "./users";
import { getRecipeCategories } from "../utils/RecipesApi";
import { receiveRecipeCategories } from "./recipeCategories";
import { createUser } from "./users";

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

export function handleCreateUser(newUser) {
  return async (dispatch) => {
    // TODO implement optimisic updates for better UX
    // FIRST update store, then update the db
    // in case of error on db, delete newly created user from store and notify client with alert
    // need deleteUser action creator

    await addUserToDb(newUser).then((users) => {
      console.log("new user added");
      console.log("updated users object", users);
      dispatch(createUser(newUser));
    });
  };
}
