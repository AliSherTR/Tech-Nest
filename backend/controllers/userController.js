const User = require("./../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getAllUser = async (req, res) => {
    // res.status(200).json({ message: "Protected route accessed", user: user });
};

exports.registerUser = async (req, res) => {
    const { email, username, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(409).json({ message: "User already exists" });
    }

    const newUser = new User({
        username: username,
        email: email,
        password: password,
    });

    await newUser.save();
    res.status(200).json({ username, email });
};

exports.loginUser = async (req, res) => {
    // when a user will login we will get an email and a username from the api and will check if thats true or not if it is then we will generate a token

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "no user found" });
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
};

exports.logoutUser = async (req, res) => {
    res.status(200).send("logout Users");
};
