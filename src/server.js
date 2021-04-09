const express = require('express');
const server = express();
const routes = require('./routes')

server.set('view engine', 'ejs');

// file statics
server.use(express.static("public"));

// routes
server.use(routes);

server.listen(3000, () => { console.log('server rodando') });