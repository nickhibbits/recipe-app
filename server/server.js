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
      console.log("recipeCategory", recipeCategory);
      return recipeCategory;
    })
    .catch((err) => console.log("ERROR 🛑", err));
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

app.post("/getRecipeCategories", jsonParser, async (req, res) => {
  const userRecipeCategoryIds = req.body.recipeCategoryIds;
  console.log("userRecipeCategoryIds", userRecipeCategoryIds);

  const categoryPromises = userRecipeCategoryIds.map(async (category) => {
    return await fetchRecipeCategory(category, 8);
  });

  res.send(categoryPromises);
});

app.post("recipeProfile/getRecipeCategories", jsonParser, async (req, res) => {
  // console.log("route check 🍔", "recipeProfile/getRecipeCategories" );
  const userRecipeCategoryIds = req.body.recipeCategoryIds;
  console.log("userRecipeCategoryIds", userRecipeCategoryIds);

  const categoryPromises = userRecipeCategoryIds.map((category) => {
    return fetchRecipeCategory(category, 8);
  });

  res.send(categoryPromises);
});

app.post("/recipeProfile/getRecipe", jsonParser, async (req, res) => {
  await fetchRecipeInfo(req.body.id).then((info) => {
    // console.log("recipeInfo 🍔", info);
    res.send(info);
  });
});
