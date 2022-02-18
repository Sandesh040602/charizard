const express = require('express');//requiring express
const router = express.Router();// setting up the router 


router.get('/',function(req,res){
    res.send('sabsahi hai');
});
console.log('Router is up and exported.');

module.exports = router ;//exporting the router