const express = require("express");

const userController = require("../controller/user.controller");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

router.post("/register", userController.registerUser);
router.get("/verify", userController.verification);
router.post("/login", userController.loginUser);
router.get("/logout", isAuthenticated, userController.logoutUser);
router.post("/forgotpassword", userController.forgotPassword);
router.post("/verify-otp/:email", userController.verifyOtp);

module.exports = router;
