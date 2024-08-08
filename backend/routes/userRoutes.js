const express = require("express");
const userController = require("./../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const { restrictTo } = require("../controllers/productController");
const router = express.Router();

router.post("/auth/register", userController.registerUser);
// User login route
router.post("/auth/login", userController.loginUser);
router.post("/auth/google-login", userController.googleLogin);
router.get("/:id", protect, userController.getUser);

// get all users route
router.get("/", protect, restrictTo("admin"), userController.getAllUsers);

module.exports = router;
