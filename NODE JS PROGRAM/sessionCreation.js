const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  // Access session data
  const username = req.session.username || "Guest";
  res.send(`Hello, ${username}!`);
});
app.get("/set-cookie/:username", (req, res) => {
  // set cookie
  req.params.username = req.params.username;
  res.send(`Session data set!`);
});

app.get("/clear-cookie", (req, res) => {
  req.session.destroy();
  res.send(`Session Destroyed!`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
