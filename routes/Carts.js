const express = require('express');
const { addToCart, fetchCartByUser, deleteFromCart, updateCart } = require('../controller/Cart');


const router = express.Router();

// Define routes
router.post('/', addToCart)
      .get('/', fetchCartByUser)
      .delete('/:id', deleteFromCart)
      .patch('/:id', updateCart)
// Correctly export the router
exports.router = router;
