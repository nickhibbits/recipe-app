require("dotenv").config();

const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.listen(5001, () => {
  console.log("server running on port 5001");
});

async function fetchRecipeCategory(cuisine, resultCount) {
  let url = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=${resultCount}&apiKey=${process.env.API_KEY}`;

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const recipeCategory = {
        cuisine,
        recipes: data.results,
      };
      return recipeCategory;
    });
}

app.get("/getRecipeCategories", async (req, res) => {
  const americanRecipes = fetchRecipeCategory("American", 8);
  const thaiRecipes = fetchRecipeCategory("Thai", 8);
  const africanRecipes = fetchRecipeCategory("African", 8);

  Promise.all([americanRecipes, thaiRecipes, africanRecipes]).then((values) => {
    console.log("values", values);
    res.send(values);
  });
});
