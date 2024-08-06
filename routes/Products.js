const express = require('express');
const { createProduct, fetchAllProducts, fetchProductsById } = require('../controller/Product');


const router = express.Router();

router.post('/',createProduct)
      .get('/',fetchAllProducts)
      .get('/:id',fetchProductsById);


exports.router=router;
