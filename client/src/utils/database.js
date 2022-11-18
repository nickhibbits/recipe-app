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
        savedRecipes: ["recipe1", "recipe2"],
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
        savedRecipes: [],
      };
      db.users.allIds.push(newUser.username);
      resolve(db.users);
    }, 1000);
  });
}
