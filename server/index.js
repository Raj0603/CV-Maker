require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//  calling database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes to database and  collection(tables) 
app.use("/admins/users", userRoutes);
app.use("/admins/auth", authRoutes);

const port = process.env.PORT || 4000;
app.listen(4000, () =>  console.log(`server is on bitch on ${port}`))