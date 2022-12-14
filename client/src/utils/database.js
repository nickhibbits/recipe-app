// mock database acting as placeholder for MongoDb, etc
const db = {
  auth: {
    loggedIn: true,
    user: "nickhibbits",
  },

  users: {
    byId: {
      nickhibbits: {
        username: "nickhibbits",
        password: "password1",
        savedRecipes: [],
        savedRecipeCategories: ["Thai", "Japanese"],
        newUser: false,
      },
    },
    allIds: ["nickhibbits"],
  },

  recipes: {
    byId: {
      recipe1: {
        id: "recipe1",
        title: "Chili",
        ingredients: ["beans", "corn", "chips", "tomato sauce"],
        cuisine: "American",
      },
      recipe2: {
        id: "recipe2",
        title: "Apple Pie",
        ingredients: ["wheat", "sugar", "apples"],
        cuisine: "American",
      },
    },
    allIds: ["recipe1", "recipe2"],
  },
};

// TODO
// Implement better error handling for the following db functions:

export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db.users);
    }, 1000);
  });
}

export function addUserToDb(newUser) {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.users.byId[newUser.username] = {
        username: newUser.username,
        password: newUser.password,
        savedRecipeCategories: [],
        savedRecipes: [],
        newUser: true,
      };
      db.users.allIds.push(newUser.username);
      resolve(db.users);
    }, 1000);
  });
}

export function updateUserCuisinesOnDb(username, updatedRecipeCategories) {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.users.byId[username].savedRecipeCategories = updatedRecipeCategories;
      resolve(db.users.byId[username]);
    }, 1000);
  });
  // .then((data) => {
  //   return data;
  // })
  // .catch((error) => {
  //   console.log("ERROR", error);
  //   return error;
  // });
}

export function addRecipeToUserProfile(username, newRecipeId) {
  console.log("user", db.users.byId[username]);
  return new Promise((resolve) => {
    setTimeout(() => {
      db.users.byId[username].savedRecipes = [
        ...db.users.byId[username].savedRecipes,
        newRecipeId,
      ];
      resolve(db.users.byId[username]);
    }, 1000);
  });
}

export function updateNewUserStatusOnDb(username) {
  const users = db.users.byId;
  return new Promise((resolve) => {
    setTimeout(() => {
      users[username].newUser = !users[username].newUser;
      resolve(users[username]);
    }, 1000);
  });
}
