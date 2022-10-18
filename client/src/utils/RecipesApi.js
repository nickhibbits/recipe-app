export async function getRecipes() {
  const recipes = await fetch("./getRecipes")
    .then((response) => response.json())
    .then((final) => {
      return final;
    });

  return recipes;
}
