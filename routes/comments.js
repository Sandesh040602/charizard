const express = require('express');//requiring express
const router = express.Router();// setting up the router 
const passport = require('passport');

const commentsController = require('../controller/comments_controller');

router.post('/create',passport.createAuthentication,commentsController.create);
console.log('posts router is up and exported.');
router.get('/destroy/:id',passport.createAuthentication,commentsController.destroy);

module.exports = router ;//exporting the router