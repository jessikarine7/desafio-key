const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({static: path.join(__dirname, 'dist')});

server.use(middlewares);
server.use(express.static('dist'));
server.use('/api', router);

server.listen(PORT);
