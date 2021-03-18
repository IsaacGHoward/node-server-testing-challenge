const express = require('express');

const BookRouter = require('./books/book-router');

const server = express();

server.use(express.json());
server.use('/api/books', BookRouter);

module.exports = server;