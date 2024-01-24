require('dotenv').config()
const express = require("express");
const http = require("http");
const path = require("path");

const API_PORT = process.env.API_PORT || 3000;
const app = express();

// setup static content from vite build output dir in dist/ui if NODE_ENV is in development mode
let STATIC_PATH = "../../dist/ui";
if (process.env.NODE_ENV !== "production") {
  STATIC_PATH = path.join(__dirname, "../../dist/ui");
} else {
  STATIC_PATH = path.join(__dirname, "ui");
}

app.use(express.static(STATIC_PATH));

// Setup Express routes here before starting the server
// initial
app.get("/api/hello", (req, res) => {
  res.send("Hello World! how are you");
});

// serve all requests to index.html in production
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(STATIC_PATH, "index.html"));
  });
}


// start server
const server = http.createServer(app);
server.listen(API_PORT, () => {
  console.log(`Server listening on port ${API_PORT}`);
});
