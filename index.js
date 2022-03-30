const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

// console.log(express.static(path.join(__dirname, 'dist')));
// express()
//   .use(express.static('dist'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({static: path.join(__dirname, 'dist')});

server.use(middlewares);
server.use(express.static('dist'));
server.use('/api', router);

server.listen(PORT);
