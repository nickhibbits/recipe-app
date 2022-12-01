import {
  addRecipeToUserProfile,
  addUserToDb,
  getUsers,
  updateNewUserStatusOnDb,
  updateUserCuisinesOnDb,
} from "../utils/database";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const CREATE_USER = "CREATE_USER";
export const SAVE_RECIPE = "SAVE_RECIPE";
export const UPDATE_USER_RECIPE_CATEGORIES = "UPDATE_USER_RECIPE_CATEGORIES";
export const UPDATE_NEW_USER_STATUS = "UPDATE_NEW_USER_STATUS";

export function handleReceiveUsers() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      dispatch(receiveUsers(users));
    });
  };
}

export function handleUpdateUserCuisines(user, updatedRecipeCategories) {
  return async (dispatch) => {
    await updateUserCuisinesOnDb(user, updatedRecipeCategories)
      .then((_user) => {
        dispatch(updateUserCuisines(_user.username, _user.savedCuisines));
      })
      .catch((e) => console.log("ERROR", e));
  };
}

export function handleSaveRecipe(username, recipeId) {
  console.log("action", { username, recipeId });
  return async (dispatch) => {
    await addRecipeToUserProfile(username, recipeId).then((res) => {
      dispatch(saveRecipe(username, recipeId));
    });
  };
}

export function handleUpdateNewUserStatus(username) {
  return async (dispatch) => {
    await updateNewUserStatusOnDb(username).then((updatedUser) => {
      const newUserStatus = updatedUser.newUser;
      dispatch(updateNewUserStatus(username, newUserStatus));
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

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function createUser(newUser) {
  const { username, password } = newUser;
  return {
    type: CREATE_USER,
    username,
    password,
    newUser: true,
  };
}

function updateUserCuisines(username, updatedCuisines) {
  return {
    type: UPDATE_USER_RECIPE_CATEGORIES,
    username,
    updatedCuisines,
  };
}

function updateNewUserStatus(username, newUserStatus) {
  return {
    type: UPDATE_NEW_USER_STATUS,
    username,
    newUserStatus,
  };
}

function saveRecipe(username, recipeId) {
  return {
    type: SAVE_RECIPE,
    username,
    recipeId,
  };
}
