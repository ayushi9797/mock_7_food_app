const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const ResturantModel = require('../models/Resturant.Models');


const app = express();
const ResturantRouter = express.Router();

ResturantRouter.use(express.json());

// Get all restro
// get by id
// post
// upadte
// delete

// !This endpoint should return a list of all available restaurants.!
ResturantRouter.get('/', async function (req, res) {
    try {
        let data = await ResturantModel.find();
        // console.log(data);
        res.status(200).send(data);


    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// ! This endpoint should return the details of a specific restaurant identified by its ID.

ResturantRouter.get('/:id', async function (req, res) {
    try {
        let id = req.params.id;
        let data = await ResturantModel.findById(id);
        res.status(200).send(data);
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// Post req
// !This endpoint should return the menu of a specific restaurant identified by its ID.
ResturantRouter.post('/resturant', async function (req, res) {
    let rest = req.body;
    console.log(rest)
    try {
        let data = new ResturantModel(rest);
        await data.save()
        res.status(200).send(data);
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// adding menu
//!This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.
ResturantRouter.post('/:id/menu', async function (req, res) {
    try {
        let id = req.params.id;
        let data = await ResturantModel.findById(id);
        data.menu.push(req.body);
        await data.save()
        res.status(201).send(data, { message: 'menu added successfully' });
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in adding restro data: ${error.message}`);
    }
})

// get
// !This endpoint should return the menu of a specific restaurant identified by its ID.
ResturantRouter.get('/:id/menu', async function (req, res) {
    try {
        let data = await ResturantModel.find();
        res.status(200).send(data);
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})


// delete
// ! This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant.
ResturantRouter.delete('/:id/menu/:id', async function (req, res) {
    try {
        let resId = req.params.id;
        let disId = req.params.id;

        let data = await ResturantModel.findById(resId, disId);
        let menu = data.menu;
        let newMenu = menu.filter((el) => el._id !== `new ObjectId("${disId}")`);
        console.log(newMenu);
        data.menu = newMenu;
        await data.save()
        res.status(201).send(data, { message: 'menu added successfully' });
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in adding restro data: ${error.message}`);
    }
})




module.exports = ResturantRouter