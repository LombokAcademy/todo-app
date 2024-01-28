require('dotenv').config()
const express = require("express");
const http = require("http");
const path = require("path");

const API_PORT = 3000;
const app = express();


app.get("/api/hello", (req, res) => {
  res.status(200).json({
    message: "hello world",
  })
});


const server = http.createServer(app);
server.listen(API_PORT, () => {
  console.log(`Server listening on port ${API_PORT}`);
});
