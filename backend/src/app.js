const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

module.exports = app;
