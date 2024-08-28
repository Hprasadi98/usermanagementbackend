const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://ums:Snjusudu98*@cluster0.l0v11.mongodb.net/';

const connect = async() => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('MongoDB Error: ',error);
    }
}

connect();

const server = app.listen(port, host, ()=>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);
