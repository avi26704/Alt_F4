const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Registration_number: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    role: {
        type: String,
        default: "Basic",
        required: true
    },
    block: {
        type: String,
        default: "Basic",
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{3}-\d{3}-\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    room_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }
});

const User = mongoose.model("User", userSchema)
module.exports = User;

