const express = require("express");
const router = express.Router();
const productController = require("./../controllers/productController");
const multer = require("multer");

const upload = multer({ dest: "uploads/products/images" });

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/products/images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB file size limit
// });

// POST route for adding a new product
router.post("/add", upload.single("file"), productController.addNewProduct);

// GET route for retrieving all products
router.get("/", productController.getAllProducts);

// DELETE route for deleting a product by ID
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
