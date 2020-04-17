const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router.js");

const { socketManager } = require("./socketManager.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

app.use(router);

io.on("connection", (socket) => socketManager(socket));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
