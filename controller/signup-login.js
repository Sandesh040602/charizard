const express = require('express');//requiring express
//connecting to the database new_clist

// rendering the signin page
module.exports.login = async function(req,res){
    try{console.log('Sign IN');
    res.render('login',{
        title: 'LOGIN PAGE'
    });
    }
    catch(err){
        console.log('error in the signupcontroller',err);
    }
};

// rendering the signup page
module.exports.signup = async function(req,res){
    try{
    req.flash('success','Logged in successfully');
        return res.render('signup',{
        title: 'SIGNUP'
    });
}
catch(err){
    console.log('error in the signup',err);
}
    
};
// rendering the signup page
module.exports.signout = async function(req,res){
    try{req.logout();
    req.flash('success','Logged out successfully');
    return res.redirect('/');}
    catch(err){
        console.log('error in signout',err);
    }
};