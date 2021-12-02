const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io");

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

const port = 5000;

app.use(express.static(path.join(__dirname, "src")));

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    console.log(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
