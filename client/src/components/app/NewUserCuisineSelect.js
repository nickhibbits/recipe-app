import { useState } from "react";

function NewUserCuisineSelect() {
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

  return (
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
  );
}

export default NewUserCuisineSelect;
