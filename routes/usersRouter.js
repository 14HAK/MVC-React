const express = require('express');
const { getUser, manu } = require('../controller/usersController');

const router = express.Router();

router.get('/users', getUser);
router.get('/manu', manu);


module.exports = router;