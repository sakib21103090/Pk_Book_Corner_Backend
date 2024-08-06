const express = require('express');
const { fetchAuthorName ,createAuthorName} = require('../controller/AuthorName');

const router = express.Router();
//  /brands is already added in base path
router.get('/', fetchAuthorName).post('/', createAuthorName);

exports.router = router;
