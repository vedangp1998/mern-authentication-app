const express = require("express");
const userController = require("../controller/user.controller");
const isAuthenticated = require("../middleware/isAuthenticated");
const { validateUser, userSchema } = require("../validators/userValidate");

const router = express.Router();

router.post("/register", validateUser(userSchema), userController.registerUser);
router.post("/verify", userController.verification);
router.post("/login", userController.loginUser);
router.get("/logout", isAuthenticated, userController.logoutUser);
router.post("/forgotpassword", userController.forgotPassword);
router.post("/verify-otp/:email", userController.verifyOtp);
router.post("/changePassword/:email", userController.changePassword);

module.exports = router;
