let express = require("express");

let app = express();

console.log("Hello World");

const salutationHandler = (req, res) => {
  res.send("Hello Express");
};

app.get("/", salutationHandler);

module.exports = app;
