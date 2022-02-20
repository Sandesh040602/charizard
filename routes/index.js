const express = require('express');//requiring express
const router = express.Router();// setting up the router 


// acquiring controllers so that to use them in different cases
const homeController = require('../controller/home');
router.get('/',homeController.home);
console.log('Router is up and exported.');

router.use('/posts',require('./posts'));
router.use('/user-profile',require('./user_profile'));


module.exports = router ;//exporting the router