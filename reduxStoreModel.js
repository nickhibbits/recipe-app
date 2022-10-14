function restaurants(state = [], action) {
  if (action.type === "ADD_RESTAURANT_REVIEW") {
    return state.concat([action.review]);
  }

  return state;
}

function createStore() {
  let state;
  let listeners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };
  const dispatch = () => {};

  return {
    getState,
    subscribe,
  };
}

const store = createStore();
store.subscribe(() => {
  console.log("The new state is:", store.getState());
});

const unsubscribe = store.subscribe(() => {
  console.log("The store changed");
});

unsubscribe();

// console.log("store", store);
// console.log("store.getState()", store.getState());