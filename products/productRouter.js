const express = require('express');

const router = express.Router();

// middleware
// function randomMiddleWare((res, req, next) => {
//   // imagine theres something here
//   return next();
// })
// endpoints
router.get('/', (req, res) => {
	res.send('GET /products');
});

router.get('/:id', (req, res) => {
	res.send('GET /products');
});

module.exports = router;
