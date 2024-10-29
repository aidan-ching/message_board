const express = require("express");
const path = require("node:path");

app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

//these lines to setup EJS as the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//these lines to set up static assets
const assetsPath = path.join(__dirname, "public"); //look for assets in folder called "public"
app.use(express.static(assetsPath)); //middleware to setup static assets
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
  res.render("form");
});

app.post("/new", (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.name, added: new Date() });

  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
