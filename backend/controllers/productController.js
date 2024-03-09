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
    const { name, price, description, brand, quantity, category } = req.body;

    let image;
    if (req.file) {
        image = req.file.path.replace(/\\/g, "/"); // Replace all backslashes with forward slashes
    } else {
        return res.status(400).json({ error: "Image file is required." });
    }

    if (!name || !price || !description || !brand || !quantity || !category) {
        const error = new Error("One or more required fields are missing.");
        error.code = 400;
        throw error;
    }

    const newProduct = await Product.create({
        name,
        price,
        description,
        brand,
        image,
        quantity,
        category,
    });

    const imageUrl = `${req.protocol}://${req.get("host")}/${newProduct.image}`;

    res.status(200).json({
        status: "success",
        data: {
            ...newProduct._doc,
            image: imageUrl,
        },
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
