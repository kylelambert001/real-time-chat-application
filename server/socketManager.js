const { v4: uuidv4 } = require("uuid");

const connectedUsers = [];

const socketManager = (socket) => {
  console.log("New socket connection");

  socket.on("VERIFY_USER", (nickname, callback) => {
    nickname = nickname.trim().toLowerCase();
    if (!isUser(nickname)) {
      callback({ isUser: false, user: createUser(nickname) });
    } else {
      callback({ isUser: true });
    }
  });

  socket.on("USER_CONNECTED", (user) => {
    socket.name = user.name;
    addUser(user);
    console.log(`${user.name}, has been added to connectedUsers`);
  });

  socket.on("disconnect", () => {
    const name = socket.name;

    if (name) {
      removeUser(name);
      console.log(`${name}, has been removed from connectedUsers`);
    }
  });
};

const addUser = (user) => {
  connectedUsers.push(user);
  return user;
};

const removeUser = (name) => {
  const index = connectedUsers.findIndex((user) => user.name === name);
  if (index !== -1) {
    connectedUsers.splice(index, 1);
  }
};

const isUser = (nickname) => {
  return connectedUsers.some((user) => user.name === nickname);
};

const createUser = (nickname) => {
  return {
    name: nickname,
    id: uuidv4(),
    chat: "community",
  };
};

module.exports = { socketManager };
