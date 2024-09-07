const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors({
    origin: 'https://usermanagement-roan.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));

app.use(express.json());

app.get('/users', (req, res) => {
app.get('/api/users', (req, res) => {
    controller.getUsers((err, users) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(users);
    });
});

app.post('/api/createuser', (req, res) => {
    controller.addUser(req.body, (err, user) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json(user);
    });
});


app.post('/api/updateuser', (req,res)=>{
    controller.updateUser(req.body, (callback)=>{
        res.send(callback);
    });
});

app.post('/api/deleteuser', (req,res)=>{
    controller.deleteUser(req.body,(callback)=>{
        res.send(callback);
    });
});

module.exports = app;

