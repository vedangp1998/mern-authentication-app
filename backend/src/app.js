const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/user.route");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

module.exports = app;
