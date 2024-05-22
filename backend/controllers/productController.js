const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const createError = require("http-errors");

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                createError(
                    403,
                    "You do not have the permission to perform this action"
                )
            );
        }

        next();
    };
};

exports.getAllProducts = asyncHandler(async (req, res, next) => {
    const products = await Product.find();
    if (!products) {
        return next(createError(404, "No Products Found"));
    }
    res.status(200).json({
        status: "success",
        data: products,
    });
});

exports.addNewProduct = asyncHandler(async (req, res, next) => {
    const {
        name,
        price,
        description,
        brand,
        quantity,
        category,
        userId,
        userName,
        discountPrice,
    } = req.body;
    let image;
    if (req.file) {
        image = req.file.path.replace(/\\/g, "/"); // Replace all backslashes with forward slashes
    } else {
        return next(createError(400, "Please add image file"));
    }

    if (
        !name ||
        !price ||
        !description ||
        !brand ||
        !quantity ||
        !category ||
        !userName ||
        !userId
    ) {
        return next(
            createError(400, "One or more required fields are missing")
        );
    }
    const newProduct = await Product.create({
        name,
        price,
        description,
        brand,
        image,
        quantity,
        category,
        discountPrice,
        "owner.userId": userId,
        "owner.name": userName,
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

exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        return next(createError(404, "No Product Found"));
    }
    res.status(200).json({
        status: "success",
    });
});

exports.getProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(createError(404, "No Product found!!"));
    }
    res.status(200).json({
        status: "success",
        data: product,
    });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
    const {
        name,
        price,
        description,
        discountPrice,
        brand,
        quantity,
        category,
        userId,
        userName,
    } = req.body;
    const { id } = req.params;
    let image;
    if (req.file) {
        image = req.file.path.replace(/\\/g, "/");
    } else {
        const error = new Error("One or more required fields are missing.");
        error.code = 400;
        return next(new Error(error));
    }

    if (
        !name ||
        !price ||
        !description ||
        !brand ||
        !quantity ||
        !category ||
        !image
    ) {
        const error = new Error("One or more required fields are missing.");
        error.code = 400;
        return next(new Error(error));
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
            name,
            price,
            description,
            brand,
            quantity,
            category,
            image,
            discountPrice,
            "owner.userId": userId,
            "owner.name": userName,
        },
        { new: true }
    );

    if (!updatedProduct) {
        const error = new Error("Product not found");
        error.code = 400;
        return next(new Error(error));
    }

    res.status(200).json(updatedProduct);
});
