require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db");
const User = require("./models/user.model");
const Favorite = require("./models/favorite.model");
const jwt = require("jsonwebtoken");

// middlewares
app.use(express.json());
app.use(cors());

//connect to database
connection();

app.post("/api/register", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email, //if error because email has to be unique (in user.mode.js)
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate Email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "Ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.post("/api/favorite", async (req, res) => {
  try {
    const favorite = await Favorite.create({
      favoriteList: req.body,
    });

    return res.json({ status: "ok", favorite });
  } catch (err) { 
    console.log(err);
  }

  // const animeList = req.body.animeList;
  // res.json({
  //   message: "Item has been   added",
  //   status: "Sucessful",
  //   obj: animeList,
  // });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running.", port);
});
