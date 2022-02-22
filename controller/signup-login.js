const express = require('express');//requiring express
//connecting to the database new_clist

// rendering the signin page
module.exports.login = function(req,res){
     res.render('login',{
        title: 'LOGIN PAGE'
    });
    
};

// rendering the signup page
module.exports.signup = function(req,res){
    return res.render('signup',{
        title: 'SIGNUP'
    });
    
};
