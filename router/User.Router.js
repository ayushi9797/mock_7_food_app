const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const UserModel = require('../models/User.Models');

const app = express();
const UserRouter = express.Router()

UserRouter.use(express.json())

//  ! USER REGISTER 

UserRouter.post("/register", async (req, res) => {

    const { name, email, password, address } = req.body;
    console.log(req.body);

    try {

        const user = await UserModel.find({ email });
        console.log(user);

        if (user.length > 0) {
            res.send(`User already registered`);
        }
        else {
            bcrypt.hash(password, 5, async (err, hash) => {

                const users = new UserModel({
                    name,
                    email: email,
                    password: hash,
                    address,
                })
                console.log(users)
                await users.save();

                res.status(201).send({ message: `User registered successfully` })

            })
        }

    } catch (error) {

        console.log(error.message);
        res.status(404).send({ message: `Registration failed` })

    }

});




// ! User Login 

UserRouter.post("/login", async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await UserModel.findOne({ email });
        console.log(user);

        const hashed_pass = user?.password;
        console.log(hashed_pass);

        if (user) {
            bcrypt.compare(password, hashed_pass, async (err, result) => {

                if (result) {

                    const token = jwt.sign({ user_id: user._id }, "food-key", {
                        expiresIn: "7d",
                    });
                    console.log(token);
                    res.status(201).send({ token, message: `User Login successfully` })

                } else {
                    console.log(err.message)
                }

            })
        } else {
            console.log(error.message)
            res.status(404).send({ message: 'Invalid password' })
        }

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `login failed` })


    }

});

UserRouter.patch("/user/reset", async (req, res) => {
    const { password, userId } = req.body;
    console.log(req.body);

    try {

        let user = await UserModel.find({ _id: userId });
        if (user.length === 0) {
            res.status(404).send({ message: `user not found ` })
        }
        else {
            bcrypt.hash(password, 5, async (err, hashed_pass) => {
                if (err) {
                    res.status(404).send({ message: `Error in signin ` })
                }
                else {
                    console.log('updated ur password: ' + password)
                    await UserModel.findByIdAndUpdate(userId, { password: hashed_pass });
                    res.status(204).send({ message: `password reset done ` })
                }
            })
        }

    } catch (error) {
        console.log(error.message);
        res.status(404).send({ message: `login failed` })

    }

})









module.exports = UserRouter