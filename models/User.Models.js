// ! MAKING USERS SCHEMA HERE  FOR REGISTER LOGIN PART

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    }
})

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel