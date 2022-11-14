import React, { useEffect } from "react";

import { connect } from "react-redux";
import { handleReceiveRecipe } from "../actions/recipe";
import { Interweave } from "interweave";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "../styles/RecipeProfile.scss";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let params = useParams();
    let navigate = useNavigate();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

function RecipeProfile(props) {
  const { id } = props.router.params;
  const { dispatch } = props;
  const { title, instructions, image, summary } = props.recipe;

  useEffect(() => {
    dispatch(handleReceiveRecipe(id));
  }, [id, dispatch]);

  return (
    <main className="recipe-profile-component component flex-column">
      <section className="recipe-info-container">
        <div className="recipe-info-wrapper">
          <h1 className="title">{title}</h1>
          <section className="recipe-text-wrapper">
            <h3 className="recipe-instructions-title">Instructions</h3>
            <Interweave content={instructions ?? summary} />
          </section>
        </div>
        <img src={image} alt="recipe" className="recipe-image" />
      </section>
      <section className="button-wrapper">
        <button className="button">Save</button>
        <button className="button">Go Back</button>
      </section>
    </main>
  );
}

const mapStateToProps = ({ recipeCategories, user, recipe }) => {
  return {
    recipeCategories,
    recipe,
  };
};
export default withRouter(connect(mapStateToProps)(RecipeProfile));
