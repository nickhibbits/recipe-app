export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, recipes }) => {
      console.log("users", users);
      console.log("recipes", recipes);
    });
  };
}
