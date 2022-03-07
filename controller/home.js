const express = require('express');//requiring express
//connecting to the database posts
const Posts = require('../models/post');
const User = require('../models/user');
const { post } = require('../routes/user_profile');
const { posts } = require('./users');



module.exports.home = function(req,res){
    console.log(req.cookies);
    // res.cookie('lt',96);
    
        // function(err,post){
        //     if(err){console.log('their is an error:', err);}
            
        //     // we have to sent user details also
        //     return res.render('home',{
        //         title: 'home is the best',
        //         post_list: post
        //     })


        // })

    Posts.find({}).populate('user').exec(
        function(err,post){
            if(err){console.log('their is an error:', err);}
            
            // we have to sent user details also
            return res.render('home',{
                title: 'home is the best',
                post_list: post
            });


        })
    
    
};
