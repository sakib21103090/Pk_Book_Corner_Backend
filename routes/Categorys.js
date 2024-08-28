const express = require('express');
const { fetchCategory, createCategory, deleteCategory } = require('../controller/Category');
const router = express.Router();

// /categories is already added in base path
router.get('/', fetchCategory);
router.post('/', createCategory);
router.delete('/:id', deleteCategory);

exports.router = router;

