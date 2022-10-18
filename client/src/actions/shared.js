import { getUsers } from "../utils/database";

import { receiveUsers } from "./users";

export function handleInitialData() {
  return async (dispatch) => {
    await getUsers().then((users) => {
      console.log("users", users);
      dispatch(receiveUsers(users));
    });
  };
}
