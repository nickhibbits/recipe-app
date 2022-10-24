import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Login from "./Login";
import MyRecipes from "./MyRecipes";
import Nav from "./Nav";
import RecipeProfile from "./RecipeProfile";
import RecipeCharts from "./RecipeCharts";
import UserProfile from "./UserProfile";

import "../styles/App.scss";

function App(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (!props.loggedIn) {
    return <Login />;
  }

  if (props.loggedIn) {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/recipeProfile/:id" element={<RecipeProfile />} />
          <Route path="userProfile/:userId" element={<UserProfile />} />
          <Route path="recipeCharts" element={<RecipeCharts />} />
          <Route path="myRecipes" element={<MyRecipes />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loggedIn: authedUser,
  };
};

export default connect(mapStateToProps)(App);
