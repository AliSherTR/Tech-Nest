const express = require("express");
const router = express.Router();
const productController = require("./../controllers/productController");
const multer = require("multer");
const { protect } = require("../middlewares/authMiddleware");

const upload = multer({ dest: "uploads/products/images" });

// POST route for adding a new product
router.post(
    "/add",
    protect,
    productController.restrictTo("admin", "seller"),
    upload.single("file"),
    productController.addNewProduct
);

// GET route for retrieving all products
router.get("/", productController.getAllProducts);

// GET route for retrieving single product
router.get("/:id", productController.getProduct);

// POST route for updating a single product
router.put(
    "/:id",
    protect,
    productController.restrictTo("admin", "seller"),
    upload.single("file"),
    productController.updateProduct
);

// DELETE route for deleting a product by ID
router.delete(
    "/delete/:id",
    protect,
    productController.restrictTo("admin", "seller"),
    productController.deleteProduct
);

module.exports = router;
