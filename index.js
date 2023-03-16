const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//const conexion = require("./conexion/conexion");

const app = express();

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.listen(8080, () => {
  console.log("server in http://localhost:8080");
});
