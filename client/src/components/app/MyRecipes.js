import { useState, useEffect } from "react";
import { connect } from "react-redux";
import RecipeScrollContainer from "./RecipeScrollContainer";

function MyRecipes({ users, currentUser }) {
  const [myRecipes, setMyRecipes] = useState([]);

  const myRecipeIds = users.byId[currentUser].savedRecipes;
  console.log("myRecipes", myRecipeIds);

  useEffect(() => {
    // TODO
    // Fetch recipes using myRecipeIds array, populate myRecipes
  }, []);

  return (
    <main className="my-recipes-component component">
      <h1 className="page-heading">My Recipes</h1>
      <RecipeScrollContainer
        //recipes needs to contain fetched data already, not just the ids
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
