const express = require('express');//requiring express
//connecting to the database posts
const Posts = require('../models/post');
const User = require('../models/user');
const Comments = require('../models/comments');
// Comments.count({}, function( err, count){
//     console.log( "Number of users:", count );
// })
// const { post } = require('../routes/user_profile');
// const { posts } = require('./users');



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

    // populating the user and comment feild

    Posts.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
        .exec(
        function(err,result){
            if(err){console.log('their is an error:', err);}
            // console.log("results");
            // console.log(result);
            // we have to sent user details also
            return res.render('home',{
                title: 'home is the best',
                post_list: result
            });


        })
    
    
};

module.exports.home2 = function(req,res){
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

    Posts.find({})
        // .populate('user')
        .populate('comments')
        .exec(
        function(err,result){
            if(err){console.log('their is an error:', err);}
            
            // we have to sent user details also
            return res.render('home',{
                title: 'home is the best',
                post_list: result
            });


        })
    
    
};
