let express = require("express");

let app = express();

console.log("Hello World");

// const salutationHandler = (req, res) => {
//   res.send("Hello Express");
// };

// app.get("/", salutationHandler);

const HomePage = __dirname + "/view/index.html";

app.get("/", (req, res) => {
  res.sendFiles(HomePage);
});

module.exports = app;
