const express = require('express');
const { getUser, menu } = require('../controller/usersController');

const router = express.Router();

router.get('/users', getUser);
router.get('/menu', menu);


module.exports = router;