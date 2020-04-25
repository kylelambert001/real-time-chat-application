const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const connectedUsers = [];

const socketManager = (socket, io) => {
  console.log("New socket connection");

  // checks to see if username has already been taken
  socket.on("VERIFY_USER", (nickname, callback) => {
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
    socket.emit(
      "MESSAGE_RECIEVED",
      createMessage("Admin", `Hi ${user.name}, welcome to the chat!`)
    );
    socket.broadcast.emit(
      "MESSAGE_RECIEVED",
      createMessage("Admin", `${user.name}, has joined the chat.`)
    );
  });

  // remove disconnected user from connectedUsers array
  socket.on("disconnect", () => {
    const name = socket.name;
    if (name) {
      removeUser(name);
      io.emit("USER_DISCONNECTED", connectedUsers);
      socket.broadcast.emit(
        "MESSAGE_RECIEVED",
        createMessage("Admin", `${name}, has left the chat.`)
      );
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
  return connectedUsers.some(
    (user) => user.name.trim().toLowerCase() === nickname.trim().toLowerCase()
  );
};

const createUser = (nickname) => {
  return {
    name: capitaliseFirstLetter(nickname),
    id: uuidv4(),
    chat: "community",
  };
};

const createMessage = (from, message) => {
  return {
    from: capitaliseFirstLetter(from),
    message: message,
    id: uuidv4(),
    time: moment().format("h:mm a"),
  };
};

const capitaliseFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

module.exports = { socketManager };
