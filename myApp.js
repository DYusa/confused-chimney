let express = require("express");
let dotenv = require("dotenv").config();
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
console.log(process.env.MESSAGE_STYLE)


app.use((req, res, next) => {
  let sting = req.method + " " + req.path + " - " + req.ip;
  console.log(sting)
  next();
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({"time": req.time});
  res.send(req.user);
});

app.get('/:word/echo', function(req, res) {
  res.json({"echo": req.params.word});
});



app.get("/name", function(req, res) {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

// app.get("/name", function(req, res) {
//   let firstName = req.query.first;
//   let lastName = req.query.last;

// or  var { first: firstName, last: lastName } = req.query;


//   res.json({
//     name: `${firstName} ${lastName}`
//   });
// });


app.get(
  "/json",
  (req, res) => {
    let data = { "message": "Hello json" };

    

    if (process.env.MESSAGE_STYLE === "uppercase") {
      data = { "message": data.message.toUpperCase() };
      res.json(data);
    } else {
      res.json(data);
    }
  }

  ///  res.json({ message: "Hello json" }).MESSAGE_STYLE(dotenv.message)
);
module.exports = app;
