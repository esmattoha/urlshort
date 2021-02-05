const express = require('express');
const mongoose = require('mongoose');

const adminControllers = require('../controllers/admin');
const router = express.Router();

router.get('/', adminControllers.getHome );

module.exports = router ; 