const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        require: [true, "Please enter an email"],
        unique: [true, "Email already registered"],
        lowercase: true
    },
    lastLogin: {
        type: Date,
        required: true,
        default: Date.now,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;