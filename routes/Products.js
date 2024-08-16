const express = require('express');
const { createProduct, fetchAllProducts, fetchProductsById, deleteProduct } = require('../controller/Product');


const router = express.Router();

router.post('/',createProduct)
      .get('/',fetchAllProducts)
      .get('/:id',fetchProductsById)
      .delete('/:id', deleteProduct)



exports.router=router;
