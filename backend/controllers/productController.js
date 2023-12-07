const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

exports.getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    if (!products) {
        const error = new Error("No Products Found");
        error.statusCode = 404;
        throw error;
    }
    res.status(200).json({
        products,
    });
});

exports.addNewProduct = asyncHandler(async (req, res, next) => {
    const product = req.body;
    if (!product) {
        const error = new Error("No Product added");
        err.code = 404;
        throw error;
    }
    const newProduct = await Product.create(product);

    res.status(200).json({
        status: "success",
        data: newProduct,
    });
});
