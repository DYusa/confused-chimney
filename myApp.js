let express = require("express");

let app = express();

console.log("Hello World");

const salutationHandler = (res, req) => {
  res.send("hello express");
};

app.get("/", salutationHandler);

module.exports = app;
