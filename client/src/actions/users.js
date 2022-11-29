import {
  addRecipeToUserProfile,
  getUsers,
  updateUserOnDb,
} from "../utils/database";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const CREATE_USER = "CREATE_USER";
export const SAVE_RECIPE = "SAVE_RECIPE";
export const UPDATE_USER = "UPDATE_USER";

export function handleReceiveUsers() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
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

export function handleSaveRecipe(username, recipeId) {
  return async (dispatch) => {
    console.log("here");
    await addRecipeToUserProfile(username, recipeId).then((res) => {
      console.log("saveRecipe response", res);
      dispatch(saveRecipe(username, recipeId));
    });
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function createUser(newUser) {
  const { username, password } = newUser;
  return {
    type: CREATE_USER,
    username,
    password,
    newUser: true,
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
