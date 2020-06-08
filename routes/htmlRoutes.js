const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const verify = require("./verifyTokens");

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/registerpage", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

router.get("/welcome", verify, (req, res) => {
  res.sendFile(path.join(__dirname, "../views/welcome.html"));
});

module.exports = router;
