const express = require('express');
const { fetchUserById, UpdateUserCheckOut } = require('../controller/User');

const router = express.Router();
//  /users is already added in base path
router.get('/:id', fetchUserById)
      .patch('/:id', UpdateUserCheckOut)

exports.router = router;
