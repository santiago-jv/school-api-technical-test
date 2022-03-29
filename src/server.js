require('dotenv').config()
const express = require('express');
const server = express();
const cors = require('cors');
const indexRouter = require('./routes/indexRouter');
const {CORS_ORIGIN_URL} = process.env

server.use(cors({
    origin:CORS_ORIGIN_URL
})); 
server.use(express.json())
server.use('/api', indexRouter)

module.exports = server;