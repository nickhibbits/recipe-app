import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleReceiveRecipe } from "../actions/recipes";

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
  useEffect(() => {
    dispatch(handleReceiveRecipe(id));
  }, [id, dispatch]);
  return (
    <div>
      RecipeProfile - page containing Recipe details and reviews -- make area to
      write review and an area to see all reviews
    </div>
  );
}

const mapStateToProps = ({ recipeCategories, user }) => {
  return {
    recipeCategories,
  };
};
export default withRouter(connect(mapStateToProps)(RecipeProfile));
