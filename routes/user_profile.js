const express = require('express');//requiring express
const router = express.Router();// setting up the router 

const userController = require('../controller/users');

router.get('/',userController.users);
console.log('Router is up and exported.');

module.exports = router ;//exporting the router