const mongoose = require('mongoose');
const routes = require('./routes');
const express = require('express');
const cors = require('cors');
const server = express();

mongoose.connect('mongodb+srv://gpatatt:gpatatt@cluster0-lyknz.azure.mongodb.net/appDataBase?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true    
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);