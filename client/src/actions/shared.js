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
  console.log("categoryIds", categoryIds);
  console.log("savedRecipes", savedRecipes);

  return async (dispatch) => {
    const recipeCategories = await getRecipeCategories(categoryIds).then(
      (_recipeCategories) => {
        console.log("_recipeCategories 👏", _recipeCategories);
        return _recipeCategories;
      }
    );

    console.log("recipeCategories", recipeCategories);

    if (savedRecipes.length === 0) {
      dispatch(receiveRecipeCategories(recipeCategories));
    }

    if (
      savedRecipes.length !== 0
      // && savedRecipes.length !== savedRecipes.length // TODO figure different way to prevent multiple calls if saved recipes haven't changed
    ) {
      const myRecipes = savedRecipes.map(async (recipeId, i) => {
        return await getRecipe(recipeId).then((recipe) => {
          console.log("recipe", recipe);
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

      Promise.all(myRecipes).then((recipes) => {
        console.log("recipes", recipes);

        const allRecipeCategories = [
          ...recipeCategories,
          { cuisine: "myRecipes", recipes: [...recipes] },
        ];

        console.log("allRecipeCategories", allRecipeCategories);
        dispatch(receiveRecipeCategories(allRecipeCategories));
      });
    }
  };
}
