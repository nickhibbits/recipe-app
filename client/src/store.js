import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import middleware from "./middleware";

export const store = configureStore({ reducer, middleware });

// store structure -- utilize TS
const _store = {
  user: {
    fullName: "",
    username: "",
    password: "",
    dateCreated: "",
  },
  recipes: {
    recipeId: {
      recipeId: "",
      recipeName: "",
      ingredients: {},
      prepDirections: {},
      savedBy: ["user1", "user2", "user3"],
    },
  },
};
