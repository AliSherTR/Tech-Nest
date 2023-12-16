const express = require("express");
const productController = require("./../controllers/productController");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "./uploads" });

router.get("/", productController.getAllProducts);
router.post("/add", upload.array("images", 4), productController.addNewProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
