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
        savedRecipeCategories: ["American", "Thai", "African"],
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
        newUser: true,
      };
      db.users.allIds.push(newUser.username);
      resolve(db.users);
    }, 1000);
  });
}

export function updateUserOnDb(updatedUser) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // need a different way to find the user in even they change their username
      db.users.byId[updatedUser.username] = updatedUser;
      resolve(db.users.byId[updatedUser.username]);
    }, 1000);
  });
}

export function addRecipeToUserProfile(username, newRecipeId) {
  console.log("username", username);
  console.log("newRecipeId", newRecipeId);
  return new Promise((resolve) => {
    setTimeout(() => {
      db.users.byId[username].savedRecipes = [
        ...db.users.byId[username].savedRecipes,
        newRecipeId,
      ];
      console.log("updated user", db.users.byId[username]);
      resolve(db.users.byId[username]);
    }, 1000);
  });
}
