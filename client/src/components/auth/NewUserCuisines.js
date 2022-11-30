import { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  handleUpdateNewUserStatus,
  handleUpdateUserCuisines,
} from "../../actions/users";

import "../../styles/App.scss";

function NewUserCuisines({ dispatch, username, users }) {
  const [cuisinesSelected, setCuisinesSelected] = useState(false);

  const [userCategories, setCategoryList] = useState([]);
  console.log("userCategories", userCategories);

  if (
    cuisinesSelected === true &&
    users[username].savedRecipeCategories.length !== 0 &&
    users[username].newUser === true
  ) {
    dispatch(handleUpdateNewUserStatus(username));
  }

  if (users[username].newUser === false) {
    return <Navigate to="/" />;
  }

  const allCategories = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ];

  const addUserCuisine = (cuisine) => {
    setCategoryList((currentList) => [...currentList, cuisine]);
  };

  const handleSubmitNewUserCuisines = (cuisines) => {
    console.log("cuisines", cuisines);
    console.log("username", username);
    if (cuisines.length !== 0) {
      dispatch(handleUpdateUserCuisines(username, cuisines));
      setCuisinesSelected(true);
    } else {
      alert("Must select cuisines to move on");
    }
  };

  return (
    <main className="new-user-cuisines-component component">
      <h1 className="title">Select Cuisines</h1>
      <ul className="cusine-select">
        {allCategories.map((category, i) => {
          return (
            <li
              className="category-list-item"
              onClick={() => addUserCuisine(category)}
              key={i}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => handleSubmitNewUserCuisines(userCategories)}
        className="submit-cuisines"
      >
        Submit
      </button>
    </main>
  );
}

const mapStateToProps = ({ auth, users }) => {
  return {
    username: auth.user,
    users: users.byId,
  };
};

export default connect(mapStateToProps)(NewUserCuisines);
