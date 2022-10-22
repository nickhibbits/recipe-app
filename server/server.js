require("dotenv").config();

const express = require("express");
const app = express();
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

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

async function fetchRecipeInfo(id) {
  const getIngredients = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
  )
    .then((res) => res.json())
    .then((ingredients) => ingredients)
    .catch((err) => console.log("ERROR 🛑", err));

  return getIngredients;
}

app.get("/getRecipeCategories", async (req, res) => {
  const americanRecipes = fetchRecipeCategory("American", 8);
  const thaiRecipes = fetchRecipeCategory("Thai", 8);
  const africanRecipes = fetchRecipeCategory("African", 8);

  Promise.all([americanRecipes, thaiRecipes, africanRecipes]).then((values) => {
    res.send(values);
  });
});

app.post("/recipeProfile/getRecipe", jsonParser, async (req, res) => {
  await fetchRecipeInfo(req.body.id.substring(1)).then((info) => {
    // console.log("recipeInfo 🍔", info);
    res.send(info);
  });
});
