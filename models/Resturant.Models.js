// ! MAKING ResturantS SCHEMA HERE  FOR CRUD OPERATION

const mongoose = require("mongoose");

const ResturantSchema = new mongoose.Schema({
    name: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    },
    menu: [{

        name: String,
        description: String,
        price: Number,
        image: String
    }]
})

const ResturantModel = mongoose.model('resturant', ResturantSchema);

module.exports = ResturantModel;