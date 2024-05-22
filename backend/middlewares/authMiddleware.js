const asyncHandler = require("express-async-handler");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const createError = require("http-errors");

exports.protect = asyncHandler(async (req, res, next) => {
    // 1) Get token
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(
            createError(
                401,
                "You are not logged in! Please log in to get access."
            )
        );
    }

    // 2) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if the user belonging to the token still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(createError(401, "The user no longer exists!"));
    }

    // Grant access to protected route
    req.user = currentUser;
    next();
});
