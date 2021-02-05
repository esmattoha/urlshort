const express = require('express');
const mongoose = require('mongoose');

const authControllers = require('../controllers/auth');
const router = express.Router();

router.get('/signup', authControllers.getSignUp );

router.post('/signup', authControllers.postSignUp);

router.get('/login', authControllers.getLogin);

module.exports = router ; 