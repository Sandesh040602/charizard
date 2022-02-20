const express = require('express');//requiring express
//connecting to the database new_clist
module.exports.home = function(req,res){
    return res.render('home',{
        title: 'home is home'
    });
    
};
