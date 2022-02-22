const express = require('express');//requiring express
//connecting to the database new_clist
module.exports.home = function(req,res){
    console.log(req.cookies);
    // res.cookie('lt',96);
    return res.render('home',{
        title: 'home is home'
    });
    
};
