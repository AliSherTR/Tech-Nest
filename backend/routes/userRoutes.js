const express = require("express");
const userController = require("./../controllers/userController");
// const authenticateToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/auth/register").post(userController.registerUser);
router.route("/auth/login").post(userController.loginUser);

module.exports = router;
