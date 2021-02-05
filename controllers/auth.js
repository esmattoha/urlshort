const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../model/user');

// GET Sign Up Page in auth panel

exports.getSignUp = (req, res, next )=>{
    res.render('./auth/signup.ejs' , {
        pageTitle: 'Sign Up'
    })
};

// POST Sign Up Page in auth panel
exports.postSignUp = (req, res ,next )=>{
    const username = req.body.username;
    const email = req.body.email;
    const pNo = req.body.pNo;
    const password = req.body.password;
    
    bcrypt                                // Password Encrypting for security
    .hash(password, 12)
    .then(hashedPassword => {
      const user = new User({
        username: username,
        email:email,
        phone_No:pNo,
        password:hashedPassword
      });
      return user.save();
    })
    .then(result => {
      res.redirect('/login');
    })
    .catch(err => {
      console.log(err);
    });
    
}

// GET Login page in auth panel

exports.getLogin = (req, res , next )=>{
    res.render('./auth/login.ejs', {
        pageTitle:"Login"
    })
}