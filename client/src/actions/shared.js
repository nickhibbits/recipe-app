import { receiveUsers } from "./users";
import { getRecipe, getRecipeCategories } from "../utils/RecipesApi";
import { receiveRecipeCategories } from "./recipeCategories";
import { getUsers } from "../utils/database";

export function handleGetUsers() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      console.log("users", users);
      dispatch(receiveUsers(users));
    });
  };
}

export function handleGetRecipeCategories(categoryIds, savedRecipes) {
  return async (dispatch) => {
    const recipeCategories = await getRecipeCategories(categoryIds).then(
      (_recipeCategories) => {
        console.log("_recipeCategories", _recipeCategories);
        return _recipeCategories;
      }
    );

    if (savedRecipes.length === 0) {
      dispatch(receiveRecipeCategories(recipeCategories));
    }

    if (savedRecipes.length !== 0) {
      const myRecipes = savedRecipes.map(async (recipeId, i) => {
        await getRecipe(recipeId).then((recipe) => {
          const { id, title, image, imageType } = recipe;
          const _recipe = {
            id,
            title,
            image,
            imageType,
          };
          return _recipe;
        });
      });

      console.log("myRecipes", myRecipes);

      const allRecipeCategories = [
        ...recipeCategories,
        { cuisine: "myRecipes", recipes: myRecipes },
      ];
      console.log("allRecipeCategories", allRecipeCategories);
      dispatch(receiveRecipeCategories(allRecipeCategories));
    }
  };
}
