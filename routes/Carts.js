const express = require('express');
const { addToCart, fetchCartByUser } = require('../controller/Cart');


const router = express.Router();

// Define routes
router.post('/', addToCart)
      .get('/', fetchCartByUser);

// Correctly export the router
exports.router = router;
