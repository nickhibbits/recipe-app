import { combineReducers } from "@reduxjs/toolkit";

import { users } from "./users";
import { recipes } from "./recipes";

export default combineReducers({
  users,
  recipes,
});
