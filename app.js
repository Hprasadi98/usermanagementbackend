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

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('User Management Backend is up and running!');
});

app.get('/users', (req, res) => {
    controller.getUsers((err, users) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(200).json(users);
    });
});

app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (err, user) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json(user);
    });
});


app.post('/updateuser', (req,res)=>{
    controller.updateUser(req.body, (callback)=>{
        res.send(callback);
    });
});

app.post('/deleteuser', (req,res)=>{
    controller.deleteUser(req.body,(callback)=>{
        res.send(callback);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;

