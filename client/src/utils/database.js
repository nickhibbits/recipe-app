// mock database acting as placeholder for MongoDb, etc
const users = {
  nickhibbits: {
    fullName: "Nicholas Hibbits",
    username: "nickhibbits",
    password: "appleseed",
    dateCreated: "",
  },
};

export function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
}
