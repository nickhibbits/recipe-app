export const SET_AUTH = "SET_AUTH";

export function setAuth({ user, loggedIn }) {
  // console.log("user", user);
  // console.log("loggedIn", loggedIn);

  return {
    type: SET_AUTH,
    user: user,
    loggedIn: loggedIn,
  };
}
