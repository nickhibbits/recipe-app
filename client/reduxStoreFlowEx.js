// LIBRARY CODE
function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}

// APP CODE
const ADD_RESTAURANT_REVIEW = "ADD_RESTAURANT_REVIEW";
const DELETE_RESTAURANT_REVIEW = "DELETE_RESTAURANT_REVIEW";

// ACTION CREATORS
function addRestaurantReview(restaurant) {
  return {
    type: ADD_RESTAURANT_REVIEW,
    restaurant,
  };
}

function deleteRestaurantReview(id) {
  return {
    type: DELETE_RESTAURANT_REVIEW,
    id,
  };
}

function restaurants(state = [], action) {
  if (action.type === ADD_RESTAURANT_REVIEW) {
    return state.concat([action.restaurant]);
  } else if (action.type === DELETE_RESTAURANT_REVIEW) {
    return state.filter((restaurant) => restaurant.id !== action.restaurant.id);
  } else {
    return state;
  }
}

const store = createStore(restaurants);

store.subscribe(() => {
  console.log("The new state is:", store.getState());
});

store.dispatch(addRestaurantReview({ id: 1, review: "Awesome" }));
store.dispatch(addRestaurantReview({ id: 2, review: "Fantastic" }));
store.dispatch(deleteRestaurantReview(1));

// const unsubscribe = store.subscribe(() => {
//   console.log("The store changed");
// });

// unsubscribe();
