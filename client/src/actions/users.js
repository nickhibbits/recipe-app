export const RECEIVE_USERS = "RECEIVE_USERS";
export const SET_AUTH = "SET_AUTH";

export function receiveUsers(users) {
  console.log("users", users);
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function setAuth(auth) {
  console.log("auth", auth);
  return {
    type: SET_AUTH,
    auth: auth,
  };
}
