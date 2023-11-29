const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "A user must have a user name"],
        unique: true,
    },
    password: {
        type: String,
        required: false,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "A user must have an email"],
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    googleSignIn: {
        type: Boolean,
        default: false,
    },
});

// this function will run before the save
// userSchema.pre("save", async function (next) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
