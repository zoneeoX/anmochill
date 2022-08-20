require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const connection = require('./db')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')


//connect to database
connection()

// middlewares
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes)


const port = process.env.PORT
app.listen(port, () => {
  console.log("Server is running.", port);
});

// app.get("/getUsers", (req, res) => {
//     UserModel.find({}, (err, result) => {
//       err ? res.json(err) : res.json(result);
//     });
//   });

//   app.post("/postUser", async (req, res) => {
//     const user = req.body;
//     const newUser = UserModel(user);
//     await newUser.save();

//     res.json(user);
//   });
