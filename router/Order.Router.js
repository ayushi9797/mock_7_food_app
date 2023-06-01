const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const OrderModel = require('../models/Order.Models');

const app = express();
const OrderRouter = express.Router()

OrderRouter.use(express.json())

// 

// !This endpoint should return a list of all available restaurants.!
OrderRouter.get('/', async function (req, res) {
    try {
        let data = await OrderModel.find();
        // console.log(data);
        res.status(200).send(data);


    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// ! This endpoint should return the details of a specific restaurant identified by its ID.

OrderRouter.get('/:id', async function (req, res) {
    try {
        let id = req.params.id;
        let data = await OrderModel.findById(id);
        res.status(200).send(data);
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// Post req
// !This endpoint should return the menu of a specific restaurant identified by its ID.
OrderRouter.post('/order', async function (req, res) {
    let rest = req.body;
    console.log(rest)
    try {
        let data = new OrderModel(rest);
        await data.save()
        res.status(200).send(data);
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// adding menu
//!This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.
OrderRouter.post('/', async function (req, res) {
    try {
        let id = req.params.id;
        let data = await OrderModel.findById(id);
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
OrderRouter.get('/:id', async function (req, res) {
    try {
        let data = await OrderModel.findById(id);
        res.status(200).send(data);
        console.log(data);

    } catch (error) {
        res.status(404).send(`error in getting restro data: ${error.message}`);
    }
})

// update
OrderRouter.patch('/:id', async function (req, res) {
    try {

        await OrderModel.findByIdAndUpdate(req.params, id, req.body)
        res.status(200).send(`order updated`)

        console.log(data);

    } catch (error) {
        res.status(404).send(`error in adding restro data: ${error.message}`);
    }
})











module.exports = OrderRouter