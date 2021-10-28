const mongoose = require("mongoose")
const Schema = mongooose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true 
    },
    password: {
        type: String,
        required: true 
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    isAdmin: {
        type: String,
        default: false
    }
})

module.exports = mongoose.model("User", userSchema)