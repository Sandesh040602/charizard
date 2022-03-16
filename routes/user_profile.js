const express = require('express');//requiring express
const router = express.Router();// setting up the router 
const passport = require('passport');

const userController = require('../controller/users');

router.get('/profile/:id',passport.createAuthentication,userController.users);

router.post('/create',userController.create);
console.log('Router is up and exported.');

router.post('/update/:id',passport.createAuthentication,userController.update);

// router.use('/post',passport.createAuthentication,userController.posts);
// use passport middleware to authenticate where local is the strategy 
router.post('/create-session',passport.authenticate('local', { failureRedirect: '/login/login' }),
userController.createSession);// checked

module.exports = router ;//exporting the router