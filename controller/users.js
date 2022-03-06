module.exports.users = function(req,res){
    res.render('user',{
        title: 'users'
    });
};

const User = require('../models/user');
const Posts = require('../models/post');

module.exports.posts = function(req,res){
    // req.body.hi = res.locals.user;
    console.log(req.body);
    Posts.create(req.body,function(err,user){
        if(err){console.log('error in creating user while signing up'); return;}
           return res.redirect('/');
       })
}
// creating the new users
module.exports.create = function(req,res){
    if(req.body.password != req.body.cpassword){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email} ,function(err,user){
        if(err){console.log('error in finding user in signing up'); return;}

        if(!user){
            User.create(req.body,function(err,user){
             if(err){console.log('error in creating user while signing up'); return;}
                return res.redirect('/login/login');
            })
        }

        else{
            return res.redirect('back');
        }
    })
    
}
// after confirming in signin
module.exports.createSession = function(req,res){
    //todo
    console.log('redirect');
    return res.redirect('/');
}
//sign in and log in is in signup-login.js in this
// same directory little bit messy

// when somebody posts
