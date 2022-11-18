export const RECEIVE_USERS = "RECEIVE_USERS";
export const CREATE_USER = "CREATE_USER";

export function receiveUsers(users) {
  console.log("users", users);
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function createUser({ username, password }) {
  console.log("username", username);
  console.log("password", password);
  return {
    type: CREATE_USER,
    username,
    password,
  };
}
