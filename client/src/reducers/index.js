import { combineReducers } from "@reduxjs/toolkit";

import { users } from "./users";
import { auth } from "./auth";
import { recipe } from "./recipe";
import { recipeCategories } from "./recipeCategories";

export default combineReducers({
  users,
  recipeCategories,
  recipe,
  auth,
});
