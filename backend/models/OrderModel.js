const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "A user must have a first name"],
        },
        lastName: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: [true, "A user must have an email"],
        },
        phone: {
            type: Number,
            required: [true, "A user must have an phone number"],
        },
        city: {
            type: String,
            required: [true, "A user must have an city"],
        },
        zipCode: {
            type: Number,
            required: [true, "A user must have an city"],
        },
        total: {
            type: Number,
            required: [true, "A Cart must have a total"],
        },
        products: [],
        status: {
            type: String,
            enum: ["pending", "processing", "shipped", "delivered"],
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
