const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");

exports.getAllUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find().select("username email image role");
    if (users.length > 0) {
        res.status(200).json({
            status: "success",
            users,
        });
    } else {
        return next(createError(404, "No users found"));
    }
});

exports.registerUser = asyncHandler(async (req, res, next) => {
    const { email, username, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(createError(409, "User alredy exists"));
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

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return next(createError(404, "No users found"));
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
    } else {
        return next(createError(403, "Incorrect Email or password"));
    }
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
        return next(createError(404, "No users found"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    res.status(200).json({
        status: "success",
        username: user.username,
        email: user.email,
        role: user.role,
        token: token,
        id: user._id,
    });
});
