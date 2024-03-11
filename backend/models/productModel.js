const mongoose = require("mongoose");

// Define a schema for the tech product
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A product must have a name"],
    },
    brand: {
        type: String,
        required: [true, "A product must be branded"],
    },
    description: {
        type: String,
        required: [true, "A product must have a description"],
    },
    price: {
        type: Number,
        required: [true, "A product must have a price"],
    },
    category: {
        type: String,
        required: [true, "A product must have a category"],
    },
    discountPrice: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        required: [true, "A product must have an image"],
    },
    stock: {
        type: Number,
        default: 0,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    owner: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: { type: String, required: true },
    },
    ratings: [
        {
            userId: mongoose.Schema.Types.ObjectId,
            rating: {
                type: Number,
                min: 1,
                max: 5,
            },
            review: String,
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
