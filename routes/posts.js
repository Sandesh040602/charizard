const express = require('express');//requiring express
const router = express.Router();// setting up the router 
const passport = require('passport');

const postsController = require('../controller/posts_controller');

router.use('/create',passport.createAuthentication,postsController.create);
console.log('posts router is up and exported.');

module.exports = router ;//exporting the router