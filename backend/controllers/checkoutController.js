const asyncHandler = require("express-async-handler");
const express = require("express");
const Order = require("../models/OrderModel");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.checkout = asyncHandler(async (req, res, next) => {
    console.log("req.body", req.body);

    try {
        const {
            cartItems,
            firstName,
            lastName,
            email,
            phone,
            city,
            zipCode,
            total,
        } = req.body;
        console.log(req.body);

        const order = new Order({
            products: cartItems,
            firstName,
            lastName,
            email,
            phone,
            city,
            zipCode,
            total,
            status: "pending",
        });
        await order.save();

        console.log("order", order);

        const line_items = cartItems.map((product) => ({
            quantity: product.quantity,
            price_data: {
                currency: "PKR",
                product_data: { name: product.name },
                unit_amount: product.price * 100,
            },
        }));

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            customer_email: email,
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
            metadata: { orderId: order._id.toString(), test: "ok" },
        });

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error("Error creating Checkout Session:", error);
        res.status(500).json({ error: "Failed to create Checkout Session" });
    }
});
