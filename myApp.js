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

// her mesajda id gerekemedigi icin requesti her seferinde nasil alacagimizi yazmiyoruz

//const message = (req, res) => {}
app.get("/json", (req, res) => res.json({ message: "Hello json" }));
module.exports = app;
