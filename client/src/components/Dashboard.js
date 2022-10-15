import React, { useEffect, useState } from "react";
import RecipeScrollContainer from "./RecipeScrollContainer";

function Dashboard() {
  useEffect(() => {
    fetch("/getRecipes")
      .then((res) => res.json())
      .then((data) => console.log("DATA", data));
  }, []);

  // load and hanlde these in the redux store on login
  const popularRecipes = {
    1: {
      title: "Stew",
      description: "Yummy fall dish.",
    },
    2: {
      title: "Beans and Mash",
      description: "You know you want it.",
    },
  };

  const myRecipes = {
    1: {
      title: "Beef Liver",
      description: "For growing boys.",
    },
    2: {
      title: "Lentil Soup",
      description: "That strange color you can't resist.",
    },
  };

  return (
    <main className="dashboard-component">
      <h1 className="page-heading">Dashboard</h1>
      <RecipeScrollContainer recipes={popularRecipes} categoryTitle="Popular" />
      <RecipeScrollContainer recipes={myRecipes} categoryTitle="My Recipes" />
    </main>
  );
}

export default Dashboard;
