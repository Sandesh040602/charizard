const express = require('express');//requiring express
const router = express.Router();// setting up the router 

const postsController = require('../controller/posts');

router.get('/',postsController.posts);
console.log('Router is up and exported.');

module.exports = router ;//exporting the router