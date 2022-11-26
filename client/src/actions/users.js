import {
  addRecipeToUserProfile,
  addUserToDb,
  updateUserOnDb,
} from "../utils/database";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const CREATE_USER = "CREATE_USER";
export const SAVE_RECIPE = "SAVE_RECIPE";
export const UPDATE_USER = "UPDATE_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleUpdateUser(updatedUser) {
  return async (dispatch) => {
    await updateUserOnDb(updatedUser).then((user) => {
      console.log("user updated", user);
      dispatch(updateUser(updateUser));
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

export function handleSaveRecipe(username, recipeId) {
  return async (dispatch) => {
    console.log("here");
    await addRecipeToUserProfile(username, recipeId).then((res) => {
      console.log("saveRecipe response", res);
      dispatch(saveRecipe(username, recipeId));
    });
  };
}

function createUser(newUser) {
  const { username, password } = newUser;
  return {
    type: CREATE_USER,
    username,
    password,
    // newUser: true,
  };
}

function updateUser(updatedUser) {
  return {
    type: UPDATE_USER,
    updatedUser,
  };
}

function saveRecipe(username, recipeId) {
  return {
    type: SAVE_RECIPE,
    username,
    recipeId,
  };
}
