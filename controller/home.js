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



module.exports.home = async function(req,res){
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

    try{
        let result = await Posts.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });

    let users = await User.find({}); 
    req.flash('success','home is displayed ');
    return res.render('home',{
        title: 'home is the best',
        post_list: result,
        all_users: users
    });
    }
    catch(err){
    req.flash('error','home is not displayed ');
        console.log('Error',err);
        return ;
    }
};

    
    

