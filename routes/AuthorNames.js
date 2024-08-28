const express = require('express');
const { fetchAuthorName, deleteAuthorByID, createAuthorName } = require('../controller/AuthorName');

const router = express.Router();
//  /brands is already added in base path
router.get('/', fetchAuthorName).post('/', createAuthorName).delete('/:id', deleteAuthorByID);

exports.router = router;
