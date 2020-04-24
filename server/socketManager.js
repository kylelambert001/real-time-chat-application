const { v4: uuidv4 } = require("uuid");

const connectedUsers = [];
const defaultChat = {
  chat: "community",
  id: uuidv4(),
  messages: [],
  users: [],
};

const socketManager = (socket, io) => {
  console.log("New socket connection");

  // checks to see if username has already been taken
  socket.on("VERIFY_USER", (nickname, callback) => {
    nickname = nickname.trim().toLowerCase();
    if (!isUser(nickname)) {
      callback({ isUser: false, user: createUser(nickname) });
    } else {
      callback({ isUser: true, user: null });
    }
  });

  // adds new user to connectedUsers array
  socket.on("USER_CONNECTED", (user) => {
    socket.name = user.name;
    addUser(user);
    console.log(`${user.name}, has been added to connectedUsers`);
  });

  socket.on("INIT_CHAT", () => {
    socket.emit("CHAT_CHANGED", defaultChat);
  });

  // remove disconnected user from connectedUsers array
  socket.on("disconnect", () => {
    const name = socket.name;
    if (name) {
      removeUser(name);
      io.emit("USER_DISCONNECTED", connectedUsers);
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

const createChat = (chat) => {
  return {
    chat: chat,
    id: uuidv4(),
    members: [],
  };
};

module.exports = { socketManager };
