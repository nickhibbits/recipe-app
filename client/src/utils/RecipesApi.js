export async function getRecipeCategories() {
  const data = await fetch("./getRecipeCategories")
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
