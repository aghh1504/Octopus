const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const reqPath = path.join(__dirname, "./data.json");
let savedItems = JSON.parse(fs.readFileSync(reqPath, "utf8"));

app.get("/products/", function(req, res) {
  res.send(savedItems);
});

app.post("/products/addProduct/", function(req, res) {
  res.send("Product added");
});

app.listen(PORT, function() {
  console.log("Example app listening on port 3001!");
});
