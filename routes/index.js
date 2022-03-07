const express = require('express');//requiring express
const router = express.Router();// setting up the router 


// acquiring controllers so that to use them in different cases
const homeController = require('../controller/home');
router.get('/',homeController.home);
console.log('Router is up and exported.');

router.use('/post',require('./posts'));

router.use('/user',require('./user_profile'));

// router.use('/signup',require('./signup'));

router.use('/login',require('./login'));

module.exports = router ;//exporting the router