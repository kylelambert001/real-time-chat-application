const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

app.use(router);

io.on("connection", (socket) => {
  console.log("We have a new WS connection....");

  socket.broadcast.emit("message", {
    user: "Admin",
    text: "A user has joined the chat!",
  });

  socket.emit("message", { user: "Admin", text: "Welcome to the chat." });

  socket.on("chat_message", (message) => {
    io.emit("message", message);
  });

  socket.emit("disconnect", () => {
    // let all users know someone has left the chat
    io.emit("message", { user: "Admin", text: "A user has left the chat!" });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
