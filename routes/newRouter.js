const { Router } = require("express");
const path = require("path");

const newRouter = Router();

newRouter.use(express.urlencoded({ extended: true }));

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  console.log(req);
  res.redirect("");
});

module.exports = newRouter;
