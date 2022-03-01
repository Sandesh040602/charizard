const express = require('express');//requiring express
const router = express.Router();// setting up the router 
const passport = require('passport');

const userController = require('../controller/users');

router.get('/',passport.createAuthentication,userController.users);

router.post('/create',userController.create);
console.log('Router is up and exported.');

// use passport middleware to authenticate
router.post('/create-session',passport.authenticate('local', { failureRedirect: '/login/login' }),
userController.createSession);// checked

module.exports = router ;//exporting the router