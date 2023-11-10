const User = require("./../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ErrorController = require("./errorController");
const asyncHandler = require("express-async-handler");

exports.registerUser = asyncHandler(async (req, res, next) => {
    const { email, username, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        next(new ErrorController("User Already Exists", 409));
        return;
    }
    const newUser = new User({
        username,
        email,
        password,
    });

    await newUser.save();
    res.status(200).json({ username, email });
});

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        next(new ErrorController("No User Found", 404));
        return;
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({
            username: user.username,
            email: user.email,
            token: token,
        });
    } else {
        res.status(404).json({ message: "incorrect email or password" });
    }
});