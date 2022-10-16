import React from "react";
import RecipeScrollContainer from "./RecipeScrollContainer";

function RecipeCharts() {
  // load dynamically from api
  const top = {
    1: {
      title: "Stew",
      description: "Yummy fall dish.",
    },
    2: {
      title: "Beans and Mash",
      description: "You know you want it.",
    },
  };
  const thai = {
    1: {
      title: "Beef Liver",
      description: "For growing boys.",
    },
    2: {
      title: "Lentil Soup",
      description: "That strange color you can't resist.",
    },
  };
  const latin = {
    1: {
      title: "Beef Liver",
      description: "For growing boys.",
    },
    2: {
      title: "Lentil Soup",
      description: "That strange color you can't resist.",
    },
  };
  const _new = {
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
    <main className="recipe-charts-component component">
      <h1 className="page-heading">Recipe Charts</h1>
      <RecipeScrollContainer
        recipes={top}
        categoryTitle={"Top Overall"}
      ></RecipeScrollContainer>
      <RecipeScrollContainer
        recipes={thai}
        categoryTitle={"Top Thai Dishes"}
      ></RecipeScrollContainer>
      <RecipeScrollContainer
        recipes={latin}
        categoryTitle={"Leading Latin Cuisine"}
      ></RecipeScrollContainer>
      <RecipeScrollContainer
        recipes={_new}
        categoryTitle={"New & Rising"}
      ></RecipeScrollContainer>
    </main>
  );
}

export default RecipeCharts;
