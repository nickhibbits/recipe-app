require("dotenv").config();

const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.listen(5001, () => {
  console.log("server running on port 5001");
});

app.get("/getRecipes", async (req, res) => {
  // res.json({ recipes: ["1", "2", "3"] });

  let recipes = {};

  const promise1 = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=American&number=8&apiKey=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      const recipeCategory = {
        cuisine: "American",
        recipes: data.results,
      };
      return recipeCategory;
    });

  const promise2 = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=African&number=8&apiKey=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data.results", data.results);
      const recipeCategory = {
        cuisine: "African",
        recipes: data.results,
      };

      return recipeCategory;
    });

  Promise.all([promise1, promise2]).then((values) => {
    console.log("values", values);
    res.send(values);
  });
});
