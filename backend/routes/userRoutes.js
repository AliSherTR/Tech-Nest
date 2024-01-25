const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

// User login route
router.post("/auth/login", userController.loginUser);
router.post("/auth/google-login", userController.googleLogin);
router.get("/:id", userController.getUser);

// get all users route

router.get("/", userController.getAllUsers);

module.exports = router;
