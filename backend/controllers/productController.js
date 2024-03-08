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

exports.addNewProduct = asyncHandler(async (req, res) => {
    const { name, price, description, brand, image, stock, quantity } =
        req.body;
    console.log(name, price, description, brand, image, stock, quantity);

    // const images =
    //     req.files && Array.isArray(req.files)
    //         ? req.files.map((file) => file.path)
    //         : [];

    // console.log(req.files);

    // if (!productData) {
    //     const error = new Error("No Product added");
    //     error.code = 404;
    //     throw error;
    // }

    const newProduct = await Product.create({
        name,
        price,
        description,
        brand,
        image,
        stock,
        quantity,
    });

    res.status(200).json({
        status: "success",
        data: newProduct,
    });
});

exports.deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        const error = new Error("No Product Found");
        error.code = 404;
        throw error;
    }
    res.status(200).json({
        status: "success",
    });
});
