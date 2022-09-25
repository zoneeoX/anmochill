require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware')
const connection = require("./db");
const User = require("./models/userModel");
const Favorite = require("./models/favorite.model");
const jwt = require("jsonwebtoken");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//connect to database
connection();

// app.post("/api/register", async (req, res) => {
//   try {
//     console.log(req.body);
//     const user = await User.create({
//       name: req.body.name,
//       email: req.body.email, //if error because email has to be unique (in user.mode.js)
//       password: req.body.password,
//     });
//     res.json({ status: "ok" });
//   } catch (err) {
//     res.json({ status: "error", error: "Duplicate Email" });
//   }
// });

// app.post("/api/login", async (req, res) => {
//   const user = await User.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });

//   if (user) {
//     const token = jwt.sign(
//       {
//         name: user.name,
//         email: user.email,
//       },
//       "secret123"
//     );
//     return res.json({ status: "Ok", user: token });
//   } else {
//     return res.json({ status: "error", user: false });
//   }
// });

app.use("/api/anime", require("./routes/acRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// app.post("/api/favorite", async (req, res) => {
//   try {
//     const user = await User.findOne({
//       email: req.body.email,
//       password: req.body.password,
//     });

//     const favorite = await Favorite.create({
//       favoriteList: req.body,
//     });

//     return res.json(favorite.favoriteList[0]); //only grab first index
//   } catch (err) {
//     console.log(err);
//   }

// const animeList = req.body.animeList;
// res.json({
//   message: "Item has been   added",
//   status: "Sucessful",
//   obj: animeList,
// });
// });

app.use(errorHandler)

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running.", port);
});
