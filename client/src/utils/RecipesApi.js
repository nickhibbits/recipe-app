export async function getRecipesByCategory() {
  const recipes = await fetch("./getRecipeCategories")
    .then((response) => response.json())
    .then((final) => {
      return final;
    });

  return recipes;
}
