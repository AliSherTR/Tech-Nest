const User = require("./../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find().select("username email image role");

    if (users.length > 0) {
        res.status(200).json({
            users,
        });
    } else {
        const error = new Error("No Users Found");
        error.statusCode = 404;
        throw error;
    }
});

exports.registerUser = asyncHandler(async (req, res, next) => {
    const { email, username, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        const error = new Error("User Already Exists");
        error.statusCode = 409;
        throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({ username, email });
});

exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error("No User Found");
        error.statusCode = 404;
        throw error;
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({
            username: user.username,
            email: user.email,
            role: user.role,
            token: token,
            id: user._id,
        });

        return;
    }

    const error = new Error("Incorrect Email or password");
    error.statusCode = 404;
    throw error;
});

exports.googleLogin = asyncHandler(async (req, res, next) => {
    const { email, username } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.status(200).json({
            username: user.username,
            email: user.email,
            token: token,
        });

        return;
    }
    const newUser = new User({
        username,
        email,
        googleSignIn: true,
    });

    await newUser.save();
    res.status(200).json({ username, email });
});

exports.getUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
        next(new ErrorController("No User Found!!", 404));
        return;
    }

    res.status(200).json({
        status: "success",
        username: user.username,
        role: user.role,
        email: user.email,
    });
});
