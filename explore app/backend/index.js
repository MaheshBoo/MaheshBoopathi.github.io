const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const UserModel = require('./model/Users')
const registerModel = require('./model/Signup');
const bookingModel = require('./model/Bookings')
const packageModel = require('./model/Packages')
const detailModel = require("./model/Details")


const mongoString = process.env.MONGO_URL;


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('error', (err) => console.log(err));
database.on('connected', () => console.log('Database connected'));


app.listen('3002', () => {
    console.log("App is running")
})


app.get('/getPackages', (req, res) => {
    const { catogory } = req.query;
    UserModel.find({ catogory })
        .then(packages => res.json(packages))
        .catch(err => res.status(500).json({ error: err.message })); 
});

app.get('/getUsers',(req,res)=>{
    packageModel.find({})
        .then(packages => res.json(packages))
        .catch(err => res.status(500).json({ error: err.message }));
})



app.post('/signups', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            registerModel.create({ name, email, password: hash })
                .then(register => res.json("Success"))
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})



app.post('/login', (req, res) => {
    const { email, password } = req.body;
    registerModel.findOne({ email: email })
        .then(register => {
            if (register) {
                bcrypt.compare(password, signup.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: register.email },
                            "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie('token', token)
                        return res.json("Success")
                    } else {
                        return res.json("Password Mismatch")
                    }
                })
            } else {
                return res.json("No Record Found")
            }
        })
})


app.post('/bookings', (req, res) => {
    bookingModel.create(req.body)
        .then(bookings => res.json(bookings))
        .catch(err => res.json(err))
})


app.get('/getDetails', (req, res) => {
    const { catogory } = req.query;
    detailModel.find({ catogory })
        .then(details => res.json(details))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/getBookings', (req, res) => {
    bookingModel.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(500).json({ error: err.message }));
});