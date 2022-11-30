import { useState } from "react";

import "../../styles/App.scss";

function NewUserCuisines() {
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

  const [userCategories, setCategoryList] = useState([]);
  console.log("userCategories", userCategories);

  const addUserCuisine = (cuisine) => {
    setCategoryList((currentList) => [...currentList, cuisine]);
  };

  const handleSubmitNewUserCuisines = (cuisines) => {
    console.log("cuisines", cuisines);
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

export default NewUserCuisines;
