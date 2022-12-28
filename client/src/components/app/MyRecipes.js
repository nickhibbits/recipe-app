import { connect } from "react-redux";
import RecipeScrollContainer from "./RecipeScrollContainer";

function MyRecipes({ recipeCategories }) {
  const { myRecipes: _myRecipes } = recipeCategories;
  console.log("_myRecipes", _myRecipes);

  return (
    <main className="my-recipes-component component">
      <h1 className="page-heading">My Recipes</h1>
      <RecipeScrollContainer
        recipes={_myRecipes}
        categoryTitle={"Saved Recipes"}
      />
    </main>
  );
}

const mapStateToProps = ({ recipeCategories }) => {
  return {
    recipeCategories,
  };
};

export default connect(mapStateToProps)(MyRecipes);
