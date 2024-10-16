let express = require("express");

let app = express();

console.log("Hello World");

// const salutationHandler = (req, res) => {
//   res.send("Hello Express");
// };

// app.get("/", salutationHandler);

const homePage = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(homePage);
});

const styles = __dirname + "/public";

app.use("/public", express.static(styles));

// app.use((req, res) => {
//   res.express.static(styles);
// no workoe
// });
module.exports = app;
