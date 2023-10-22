const express = require("express");
const userController = require("./../controllers/userController");
const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(userController.getAllUser);
router.route("/auth").post(userController.registerUser);
router.route("/login").post(userController.loginUser);
router.route("/logout").post(userController.logoutUser);

module.exports = router;
