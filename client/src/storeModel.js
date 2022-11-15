const store = {
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
      },
      recipe2: {
        id: "recipe2",
        title: "Apple Pie",
        ingredients: ["wheat", "sugar", "apples"],
      },
    },
    allIds: ["recipe1", "recipe2"],
  },
};
