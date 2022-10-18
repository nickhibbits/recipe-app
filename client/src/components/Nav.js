import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";

import "../styles/Nav.scss";

function Nav(props) {
  console.log("user", props.user);
  console.log("props", props);
  return (
    <header>
      <nav className="nav flex">
        {props.user ? (
          <p className="logged-in-user">
            Logged in as <strong>{props.user.username}</strong>
          </p>
        ) : (
          <p className="logged-in-user">Loading</p>
        )}

        <ul className="nav-links flex-row">
          <li className="nav-link">
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li className="nav-link">
            <Link to={"userProfile/:userId"}>User Profile</Link>
          </li>
          <li className="nav-link">
            <Link to={"recipeCharts"}>Charts </Link>
          </li>
          <li className="nav-link">
            <Link to={"myRecipes"}>My Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function mapStateToProps({ users }) {
  console.log("users", users);
  return {
    user: Object.values(users)[0],
  };
}

export default connect(mapStateToProps)(Nav);
