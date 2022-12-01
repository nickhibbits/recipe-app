import React, { useEffect } from "react";

import { connect } from "react-redux";
import { handleReceiveRecipe } from "../../actions/recipe";
import { handleSaveRecipe } from "../../actions/users";
import { Interweave } from "interweave";
import { Link, useParams } from "react-router-dom";

import "../../styles/RecipeProfile.scss";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let params = useParams();

    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithRouterProp;
};

function RecipeProfile(props) {
  const { id } = props.router.params;
  const { dispatch, currentUser } = props;
  const { title, instructions, image, summary } = props.recipe;

  useEffect(() => {
    dispatch(handleReceiveRecipe(id.substring(1)));
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
        <button
          className="button"
          onClick={() => dispatch(handleSaveRecipe(currentUser, id.slice(1)))}
        >
          Save
        </button>
        <Link to={"/"}>
          <button className="button go-back-button">Go Back</button>
        </Link>
      </section>
    </main>
  );
}

const mapStateToProps = ({ auth, recipe }) => {
  return {
    currentUser: auth.user,
    recipe,
  };
};
export default withRouter(connect(mapStateToProps)(RecipeProfile));
