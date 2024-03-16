const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anubhaw",
        required: true
    },
    reg_no: {
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
    phone_no: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{3}-\d{3}-\d{4}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    room_no: {
        type: String,
        required: true,
    },
    email_id: {
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

const Users = mongoose.model('users', userSchema);

module.exports = Users;

