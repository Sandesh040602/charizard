const req = require('express/lib/request');
const { param } = require('express/lib/request');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

console.log('locals strats');
// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        // passReqToCallback: true
    },
    function(email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user)  {
            if (err){
                req.flash('error',err);
                return done(err);
            }

            if (!user || user.password != password){
                req.flash('error','invalid username or password');
                return done(null, false);
            }

            return done(null, user);
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    console.log(user);
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});

// check authenticTION if not dont show the page we will use it as middle ware
passport.createAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
     return res.redirect('/login/login'); // if not logged in then go to login page
}

// if not logged in then only show login
passport.notAuthentication = function(req,res,next){
    if(!req.isAuthenticated()){
        return next();
    }
     return res.redirect('/'); // if not logged in then go to login page
}
// if logged in the pass info about it to the views as we know that all info related to them is stored at locals
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user; // here we are establishing the user everytime he comes
        // console.log(req.user);
    }
    next();
}

module.exports = passport;