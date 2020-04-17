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
