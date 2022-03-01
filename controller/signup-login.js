const express = require('express');//requiring express
//connecting to the database new_clist

// rendering the signin page
module.exports.login = function(req,res){
    console.log('Sign IN');
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
// rendering the signup page
module.exports.signout = function(req,res){
    req.logout();
    return res.redirect('/');
};