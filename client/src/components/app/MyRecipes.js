import React from "react";
import { connect } from "react-redux";
import RecipeScrollContainer from "./RecipeScrollContainer";

function MyRecipes({ users, currentUser }) {
  const myRecipes = users.byId[currentUser].savedRecipes;

  return (
    <main className="my-recipes-component component">
      <h1 className="page-heading">My Recipes</h1>
      <RecipeScrollContainer
        recipes={myRecipes}
        categoryTitle={"Saved Recipes"}
      />
    </main>
  );
}

const mapStateToProps = ({ users, auth }) => {
  return {
    users,
    currentUser: auth.user,
  };
};

export default connect(mapStateToProps)(MyRecipes);
