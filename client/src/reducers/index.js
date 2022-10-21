import { combineReducers } from "@reduxjs/toolkit";

import { users } from "./users";
// import { recipes } from "./recipes";
import { recipeCategories } from "./recipeCategories";

export default combineReducers({
  users,
  recipeCategories,
});
