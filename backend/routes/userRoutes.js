const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

// User registration route
router.post("/auth/register", userController.registerUser);

// User login route
router.post("/auth/login", userController.loginUser);
router.post("/auth/google-login", userController.googleLogin);
router.get("/:id", userController.getUser);

module.exports = router;
