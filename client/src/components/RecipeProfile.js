import React, { useEffect } from "react";

import { connect } from "react-redux";
import { handleReceiveRecipe } from "../actions/recipe";
import { Interweave } from "interweave";
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
  const { title, instructions, imageSrc } = props.recipe;

  useEffect(() => {
    dispatch(handleReceiveRecipe(id));
  }, [id, dispatch]);

  return (
    <main className="recipe-profile-component component">
      <h1 className="title">{title}</h1>
      <div className="recipe-info-container">
        <div className="image-wrapper">
          <img src={imageSrc} alt="" className="recipe-image" />
        </div>
        <section className="recipe-text-wrapper">
          <Interweave content={instructions} />
        </section>
      </div>
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
