const { verifyMail } = require("../../Email/verifyMail");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );


    newUser.token = token;
    await newUser.save();

    res.cookie("token", token);

    verifyMail(token, email);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { registerUser };
