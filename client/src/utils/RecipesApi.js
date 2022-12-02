export async function getRecipeCategories(recipeCategoryIds) {
  console.log("recipeCategoryIds", recipeCategoryIds);
  const data = await fetch("/getRecipeCategories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipeCategoryIds: recipeCategoryIds,
    }),
  })
    .then((response) => response.json())
    .then((recipeCategories) => {
      console.log("recipeCategories", recipeCategories);
      return recipeCategories;
    })
    .catch((err) => {
      console.log("API ERROR 🛑", err);
      return err;
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
