export async function getRecipeCategories(recipeCategoryIds) {
  const data = await fetch("./getRecipeCategories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipeCategoryIds,
    }),
  })
    .then((response) => response.json())
    .then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      return recipeCategories;
    });

  return data;
}

export async function getRecipe(id) {
  const data = await fetch("./getRecipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((response) => response.json())
    .then((recipeInfo) => recipeInfo);

  return data;
}
