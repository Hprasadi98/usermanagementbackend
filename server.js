const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://hasitha:Snjusudu98*@cluster0.j8jpn05.mongodb.net/?retryWrites=true&w=majority';

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
