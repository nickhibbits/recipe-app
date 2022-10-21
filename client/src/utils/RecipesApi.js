export async function getRecipeCategories() {
  await fetch("./getRecipeCategories")
    .then((response) => response.json())
    .then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      return recipeCategories;
    });
}

export async function getRecipe(id) {
  await fetch("./getRecipe")
    .then((response) => response.json())
    .then((recipe) => recipe);
}
