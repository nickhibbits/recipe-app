import { RECEIVE_RECIPES } from "../actions/recipes";

export function recipes(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECIPES:
      const recipes = action.recipes;
      console.log("recipes", recipes);
      console.log(typeof recipes);
      console.log(action);
      return {
        ...state,
        recipes,
        // recipes: [...action.recipes],
      };

    default:
      return state;
  }
}
