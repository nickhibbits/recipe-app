// import React, { useEffect, useState } from "react";
import RecipeScrollContainer from "./RecipeScrollContainer";

function Dashboard() {
  // useEffect(() => {
  //   fetch("/getRecipes")
  //     .then((res) => res.json())
  //     .then((data) => console.log("DATA", data));
  // }, []);

  // load and hanlde these in the redux store on login
  const popularRecipes = {
    1: {
      title: "Stew",
      description: "Yummy fall dish.",
      id: 1,
    },
    2: {
      title: "Beans and Mash",
      description: "You know you want it.",
      id: 2,
    },
  };

  const myRecipes = {
    3: {
      title: "Beef Liver",
      description: "For growing boys.",
      id: 3,
    },
    4: {
      title: "Lentil Soup",
      description: "That strange color you can't resist.",
      id: 4,
    },
  };

  return (
    <main className="dashboard-component component">
      <h1 className="page-heading">Dashboard</h1>
      <RecipeScrollContainer recipes={popularRecipes} categoryTitle="Popular" />
      <RecipeScrollContainer recipes={myRecipes} categoryTitle="My Recipes" />
    </main>
  );
}

export default Dashboard;
