const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
// npm i express helmet morgan
// yarn add express helmet morgan
const gatekeeper = require('../middleware/gatekeeper');
const productRouter = require('../products/productRouter.js');
const configureMiddleware = require('../config/middleware');
const server = express();

configureMiddleware(server);

// server.use(gatekeeper); // using middleware globally

// configure endpoints (route handlers are middleware!!)
server.get('/', (req, res) => {
	res.status(200).json({ api: 'running' });
});

server.get('/secret', gatekeeper, (req, res) => {
	res.send(req.welcomeMessage);
});

server.get('/api/clients', (req, res) => {
	res.send('GET /clients');
});

server.use('/api/products', productRouter);

server.get('/api/orders', (req, res) => {
	res.send('GET /orders');
});

module.exports = server;

// products, clients, orders
// can organize our files by type, by feature, or hybrid
