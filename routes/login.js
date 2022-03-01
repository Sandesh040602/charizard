const express = require('express');
const passport = require('passport');
const router = express.Router();// setting up the router 

const signLogin = require('../controller/signup-login');

router.use('/login',passport.notAuthentication,signLogin.login);
router.get('/signout',signLogin.signout);


router.use('/signup',passport.notAuthentication,signLogin.signup);
module.exports = router ;//exporting the router