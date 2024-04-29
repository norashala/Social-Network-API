const mongoose = require("mongoose");
const validator = require("validator"); // Additional package for validating email

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Thought",
        },
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
