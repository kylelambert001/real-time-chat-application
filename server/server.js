const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router.js");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

app.use(router);

io.on("connection", (socket) => {
  // console.log("We have a new WS connection....");
  // socket.on("join", ({ name, room }, callback) => {
  //   const { user, error } = addUser({
  //     name,
  //     room,
  //     id: socket.id,
  //   });
  //   if (error) return callback(error);
  //   socket.join(user.room);
  //   socket.emit("message", {
  //     from: "admin",
  //     text: `${user.name}, welcome to the ${user.room} room!`,
  //   });
  //   socket.broadcast.to(user.room).emit("message", {
  //     from: "admin",
  //     text: `${user.name} has joined the chat!`,
  //   });
  //   callback();
  // });
  // socket.on("disconnect", () => {
  //   console.log("A user has left");
  // });
  // socket.on("chat_message", (message, callback) => {
  //   const user = getUser(socket.id);
  //   io.to(user.room).emit("message", { from: user.name, text: message.text });
  //   callback();
  // });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
