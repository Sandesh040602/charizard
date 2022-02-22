const express = require('express');
const router = express.Router();// setting up the router 

const signLogin = require('../controller/signup-login');

router.use('/login',signLogin.login);


router.use('/signup',signLogin.signup);
module.exports = router ;//exporting the router